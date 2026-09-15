/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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
 * @file USB Manager
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * This module provides APIs for managing USB devices, including USB device list query,
 * bulk data transfer, control transfer, and permission control on the host side as well
 * as port management, and function switch and query on the device side. This module can
 * be used to exchange data with USB devices, manage USB device permissions, and dynamically
 * switch the USB device mode.
 *
 * ###### How to Use
 *
 * Perform the following steps when using the APIs with the
 * [USBDevicePipe]{@link usbManager.USBDevicePipe} parameter:
 *
 * **Before use**:
 *
 * 1. Call [usbManager.getDevices]{@link usbManager.getDevices} to obtain the USB device list.
 * 2. Call [usbManager.requestRight]{@link usbManager.requestRight} to request the temporary
 *    device access permission.
 * 3. Call [usbManager.connectDevice]{@link usbManager.connectDevice} to obtain **USBDevicePipe**
 *    as an input parameter.
 *
 * **After use**:
 *
 * Call [usbManager.closePipe]{@link usbManager.closePipe} to disable the USB connection channel.
 *
 * ![usbManager](docroot://reference/figures/usbManager.png)
 *
 * @syscap SystemCapability.USB.USBManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usbManager {
  /**
   * Obtains the list of USB devices connected to the host. After the API is called successfully,
   * a list of connected devices is returned, including the device name, manufacturer, and
   * product information.
   *
   * > **NOTE**
   * >
   * > Third-party apps cannot directly obtain the device serial number from the **serial** field
   * > through the **getDevices()** API. This field is unavailable to third-party apps. To obtain
   * > the serial number, third-party apps need to request permissions to access the device and
   * > then initiate a control transfer.
   *
   * @returns { Array<Readonly<USBDevice>> } Device information list.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * Connects to the USB device based on the device information returned by **getDevices()**.
   * After the API is called successfully, a device connection channel is established for
   * subsequent data transmission and device control operations. After using the channel, you
   * can call [usbManager.closePipe]{@link usbManager.closePipe} to disable the USB connection
   * channel. If the USB service is abnormal, **undefined** is returned. Check whether the return
   * value of the API is empty.
   *
   * 1. Call [usbManager.getDevices]{@link usbManager.getDevices} to obtain the USB device
   *    information and the **USBDevice** value.
   * 2. Call [usbManager.requestRight]{@link usbManager.requestRight} to request the device
   *    access permission.
   *
   * @param { USBDevice } device - USB device. The **busNum** and **devAddress** parameters obtained
   *     by [getDevices]{@link usbManager.getDevices} are used to determine a USB device. Other
   *     attributes (such as **name** and **vendorId**) are not involved in device matching.
   * @returns { Readonly<USBDevicePipe> } **USBDevicePipe** object, which is used in subsequent data
   *     transfer and device control.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first.
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
   *
   * The value **true** is returned if the user has the device access permissions; the value
   * **false** is returned otherwise.
   *
   * @param { string } deviceName - Device name, which is the name of the USBDevice in the device list
   *     obtained by [getDevices]{@link usbManager.getDevices}.
   * @returns { boolean } true indicates that the application has the permission to access the device,
   *     and false indicates that it does not.
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
   * Requests the temporary permission for the app to access the device. This API uses a promise
   * to return the result. System apps are granted the device access permission by default, and
   * you do not need to call this API to request the permission.
   *
   * @param { string } deviceName - Device name, which is the name of the USBDevice in the device list
   *     obtained by [getDevices]{@link usbManager.getDevices}.
   * @returns { Promise<boolean> } Promise object that returns the result of the temporary permission
   *     request. The value true indicates that the temporary permission request is successful; the
   *     value false indicates that the temporary permission request fails.
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
   * Removes the permission for an app to access the device. System apps are granted the device
   * access permission by default, and calling this API will not revoke the permission.
   *
   * @param { string } deviceName - Device name, which is the name of the USBDevice in the device list
   *     obtained by [getDevices]{@link usbManager.getDevices}.
   * @returns { boolean } Returns the result of permission removal. The value **true** indicates that
   *     the permission is removed successfully; the value **false** indicates that the permission
   *     removal fails.
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
   * Converts the USB function list in the string format to a numeric mask in Device mode. This API
   * can be used to convert the USB function list in the string format in the configuration file or
   * input by the user to a numeric mask used internally by the system, so that USB functions can be
   * set by calling APIs such as **setDeviceFunctions**.
   *
   * @param { string } funcs - Function list in the string format. The options are as follows:
   *     **none**, **acm**, **ecm**, **hdc**, **mtp**, **ptp**, **rndis**, **midi**, **audio_source**,
   *     and **ncm**. Multiple functions can be separated by commas (,). If an invalid string is
   *     passed, an exception will be thrown.
   * @returns { number } Numeric mask of the function list after conversion.
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
   * Converts the USB function list in the numeric mask format to a string in Device mode. This API
   * is applicable to scenarios where the USB function state needs to be displayed or saved as a
   * string, for example, recording the current function configuration in logs or displaying the
   * current function on the UI.
   *
   * @param { FunctionType } funcs - Numeric mask of the function list. Multiple functions can be
   *     combined through bitwise operations.
   * @returns { string } Function list in string format after conversion.
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
   * After this API is successfully called, the USB functions of the device will be switched to the
   * specified function list. This API is applicable to scenarios where the system app needs to
   * dynamically switch the USB functions of the device and configure the working mode of the device.
   *
   * @param { FunctionType } funcs - Numeric mask of the function list. Multiple functions can be
   *     combined through bitwise operations.
   * @returns { Promise<void> } Promise used to return the result. If the API is called successfully,
   *     no value is returned. If the call fails, an exception is thrown.
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
   * Obtains the numeric mask combination for the USB function list in Device mode. This API can be
   * used to check the USB function state, confirm the function configuration, or compare the status
   * before and after function switching. When the developer mode is disabled, **undefined** is
   * returned if no device is connected. Check whether the return value of the API is empty.
   *
   * @returns { FunctionType } Numeric mask combination for the USB function list. When the developer
   *     mode is disabled and no device is connected, **undefined** is returned. Check whether the
   *     return value is empty.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getDeviceFunctions()
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * Obtains the list of all physical USB ports. This API can be used to enumerate USB ports,
   * perform port management, diagnose the device connection status, or query the port
   * configuration information. When the developer mode is disabled, **undefined** is returned
   * if no device is connected. Check whether the return value of the API is empty.
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
   * Obtains the mask combination for the supported mode list of a given USB port. This method is
   * applicable when the system app needs to query the USB-C port capabilities to determine whether
   * a specific mode (such as UFP, DFP, or DRP) is supported. The return value is the mask
   * combination of **PortModeType**. You can determine whether the port supports a specific mode
   * using bitwise operations. The **PortModeType** values are as follows: **NONE (0)**: no mode;
   * **UFP (1)**: upstream port mode, **dataRole** is **DEVICE**; **DFP (2)**: downstream port mode,
   * **dataRole** is **HOST**; **DRP (3)**: dual-role mode, which can switch between **UFP** and
   * **DFP**; **NUM_MODES (4)**: not supported currently. You can determine whether the port supports
   * the combination of power roles and data transfer roles based on the return value.
   *
   * @param { number } portId - USB port number. The value is a non-negative integer, which can be
   *     obtained from the port list returned by [getPortList]{@link usbManager.getPortList}.
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
   * Adds the authorization for the app to access the device. System applications are granted the
   * device access permission by default, and calling this API will not revoke the permission. This
   * API can be used by system settings apps or device management apps to grant third-party apps the
   * permission to access USB devices. The authorization takes effect immediately and is stored
   * persistently. It remains valid even after the device is rebooted. The authorization applies to
   * the specified USB device instance. Multiple apps can obtain the access permission for the same
   * device at the same time.
   *
   * [usbManager.requestRight]{@link usbManager.requestRight} triggers a dialog box to request user
   * authorization. **addDeviceAccessRight** does not trigger a dialog box but directly adds the
   * device access permission for the app.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - Unique ID of an app, which can be obtained using
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}.
   * @param { string } deviceName - Device name, in the format of **bus-port**, for example, **1-1**.
   *     The value can be found in the device list obtained using the
   *     [getDevices]{@link usbManager.getDevices} API.
   * @returns { boolean } Permission addition result. The value **true** indicates that the access
   *     permission is added successfully; and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to
   *     use system api.
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
   * Converts the USB function list in the string format to a numeric mask in Device mode. This API
   * can be used to convert the USB function list in the string format in the configuration file or
   * input by the user to a numeric mask used internally by the system, so that USB functions can be
   * set by calling APIs such as **setDeviceFunctions**.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - Function list in string format. The options are as follows: **none**,
   *     **acm**, **ecm**, **hdc**, **mtp**, **ptp**, **rndis**, **midi**, **audio_source**, and **ncm**.
   *     Multiple functions can be separated by commas (,).
   * @returns { int } Numeric mask of the function list after conversion.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Converts the USB function list in the numeric mask format to a string in Device mode. This API
   * is applicable to scenarios where the USB function state needs to be displayed or saved as a
   * string, for example, recording the current function configuration in logs or displaying the
   * current function on the UI.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - Numeric mask of the function list. Multiple functions can be
   *     combined through bitwise operations. Some function values are not supported currently.
   *     For details, see [FunctionType]{@link usbManager.FunctionType}.
   * @returns { string } Function list in string format after conversion.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * After this API is successfully called, the USB functions of the device will be switched to the
   * specified function list. Some USB functions may not be supported by the current device. Before
   * setting the USB functions, you are advised to query the list of functions supported by the
   * device. When developer mode is disabled, the operation may fail if no device is connected. In
   * this case, an exception is thrown. Function switching triggers re-enumeration of the USB devices,
   * and the connected host may need to re-identify the device. Multiple functions can be set through
   * bitwise operations. However, some functions may be mutually exclusive or have different priorities.
   * For details about the restrictions, see the device specifications. The function setting may fail
   * due to device incompatibility, insufficient permissions, or system restrictions. For details,
   * see the error code description.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - Numeric mask of the function list. Multiple functions can be
   *     combined through bitwise operations. Some functions may not be supported by the current device.
   *     For details, see [FunctionType]{@link usbManager.FunctionType}.
   * @returns { Promise<void> } Promise used to return the result. If the API is called successfully,
   *     no value is returned. If the call fails, an exception is thrown.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Obtains the numeric mask combination for the USB function list in Device mode. This API can be
   * used to check the USB function state, confirm the function configuration, or compare the status
   * before and after function switching. When the developer mode is disabled, **undefined** is
   * returned if no device is connected. Check whether the return value of the API is empty.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { FunctionType } Numeric mask combination for the USB function list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Obtains the list of all physical USB ports. This API can be used to enumerate USB ports,
   * perform port management, diagnose the device connection status, or query the port
   * configuration information. When the developer mode is disabled, **undefined** is returned
   * if no device is connected. Check whether the return value of the API is empty.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { Array<USBPort> } List of physical USB ports.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Obtains the mask combination for the supported mode list of a given USB port. This method is
   * applicable when the system app needs to query the USB-C port capabilities to determine whether
   * a specific mode (such as UFP, DFP, or DRP) is supported. When the developer mode is disabled,
   * **undefined** is returned if no device is connected. Check whether the return value of the API
   * is empty. For details about the enumerated values, see
   * [PortModeType]{@link usbManager.PortModeType}.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - USB port number. The value can be obtained from the port list returned by
   *     [getPortList]{@link usbManager.getPortList}.
   * @returns { PortModeType } Mask combination for the supported mode list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Sets the role types of a specified port, including **powerRole** (for charging) and
   * **dataRole** (for data transfer). This API uses a promise to return the result. After the API
   * is successfully called, the power role and data transfer role of the port are switched to the
   * specified roles. This API can be used to dynamically switch the role of a USB port. When
   * developer mode is disabled, the operation may fail if no device is connected. In this case, an
   * exception is thrown. For details about role constraints, see
   * [USBPortStatus]{@link usbManager.USBPortStatus}.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - Port number. The value can be obtained from the port list returned by
   *     [getPortList]{@link usbManager.getPortList}.
   * @param { PowerRoleType } powerRole - Power role type. The options are **NONE**, **SOURCE**
   *     (providing power), and **SINK** (requiring external power supply).
   * @param { DataRoleType } dataRole - Data transfer role. The options are **NONE**, **HOST**, and
   *     **DEVICE**.
   * @returns { Promise<void> } Promise used to return the result. If the API is called successfully,
   *     no value is returned. If the call fails, an exception is thrown.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the
   *     permission required to call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400003 - Unsupported operation. The current device does not support
   *     port role switching.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setPortRoleTypes(portId: int, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>;

  /**
   * Adds the permission to apps for accessing USB accessories. This API can be used by system apps
   * to grant third-party apps the permission to access USB accessories.
   * **usbManager.requestAccessoryRight** triggers a dialog box to request user authorization.
   * **addAccessoryRight** does not trigger a dialog box but directly adds the device accessory
   * access permission for the app. The authorization takes effect immediately and is stored
   * persistently. It remains valid even after the device is rebooted. The authorization applies
   * to the specified USB device accessory instance. Multiple apps can obtain the access permission
   * for the same accessory at the same time. Unlike **requestAccessoryRight**, **addAccessoryRight**
   * does not require user interaction and is suitable for scenarios where the system app
   * automatically grants authorization.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 14.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - Unique ID of an app, which can be obtained using
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}.
   * @param { USBAccessory } accessory - USB accessory object, including the accessory ID and
   *     attributes. You can obtain the accessory list by calling
   *     [getAccessoryList]{@link usbManager.getAccessoryList}. For details about the field definition,
   *     see [USBAccessory]{@link usbManager.USBAccessory}.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use
   *     system api.
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
   * Claims a USB device interface. After this API is called successfully, the app obtains exclusive
   * control over the interface and can perform operations such as data transfer. Other apps cannot
   * access the interface. After using the interface, call
   * [releaseInterface]{@link usbManager.releaseInterface} to release the control over the interface.
   *
   * **Use scenarios**: Before transferring data over a USB device, you need to claim control over
   * the interface to exclusively access the interface. For example, you need to claim control over
   * the interface before reading data from or writing data to a USB storage device, collecting data
   * from a USB camera, or communicating with a USB serial port.
   *
   * > **NOTE**
   * >
   * > In USB programming, **claimInterface** is a common operation, which indicates that an app
   * > requests the operating system to release a USB interface from the kernel driver and hand over
   * > the USB interface to a user space program for control.
   * >
   * > All the **claim** communication interfaces used below refer to the claim interface operations.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBInterface } iface - USB interface. You can use [getDevices]{@link usbManager.getDevices}
   *     to obtain device information and identify the USB interface based on its **id**.
   * @param { boolean } [force] - Optional parameter that determines whether to forcibly claim the USB
   *     interface. The default value is **false**, indicating that the USB interface is not forcibly
   *     claimed. If no kernel driver occupies the interface, the claim is successful. Otherwise, the
   *     claim fails. If this parameter is set to **true**, the kernel driver's control over the
   *     interface is forcibly released and handed over to a user space program.
   * @returns { int } Returns **0** if the **claim** interface is called successfully; returns an error
   *     code otherwise. The error codes are as follows:
   *     <br>- 88080389: The service is not started. Possible causes: 1. No device is inserted;
   *     2. The service exits abnormally.
   *     <br>- 88080486: The service is being initialized. Try again later.
   *     <br>- 88080488: No permission to access the device. Call
   *     [requestRight]{@link usbManager.requestRight} to request authorization first.
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBInterface } iface - USB interface whose control is to be released. You can use
   *     [getDevices]{@link usbManager.getDevices} to obtain device information and identify the
   *     interface based on its **id**.
   * @returns { int } Returns **0** if the **release** interface is released successfully; returns an
   *     error code otherwise. The error codes are as follows:
   *     <br>- 88080389: The service is not started. Possible causes: 1. No device is inserted;
   *     2. The service exits abnormally.
   *     <br>- 88080486: The service is being initialized. Try again later.
   *     <br>- 88080488: No permission to access the device. Call
   *     [requestRight]{@link usbManager.requestRight} to request authorization first.
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * Sets the device configuration. This API can be used to switch the working mode of a
   * multi-functional USB device. For example, it can be used to switch to the printing mode or
   * scanning mode for a device combining the printer and scanner functions, or switch a device
   * from a low-power configuration to a high-power configuration to enable all functions. After
   * the API is successfully called, the device configuration is switched to the specified
   * configuration. Subsequent data transfer and device operations are performed based on the new
   * configuration.
   *
   * > **NOTE**
   * >
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBConfiguration } config - USB configuration. You can use
   *     [getDevices]{@link usbManager.getDevices} to obtain device information and identify the
   *     configuration based on its **id**.
   * @returns { int } Result of the USB configuration. Returns **0** if the device configuration is set
   *     successfully; returns an error code otherwise. The error codes are as follows:
   *     <br>- 88080389: The service is not started. Possible causes: 1. No device is inserted;
   *     2. The service exits abnormally.
   *     <br>- 88080486: The service is being initialized. Try again later.
   *     <br>- 88080488: No permission to access the device. Call
   *     [requestRight]{@link usbManager.requestRight} to request authorization first.
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
   *     <br>- -17: I/O failure. Possible causes: 1. The I/O operation fails due to abnormal device
   *     communication. 2. The data transfer is interrupted.
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
   * Sets a USB interface. After the API is successfully called, the specified alternate setting is
   * switched for the interfaces, and the endpoint configuration changes accordingly to match the
   * transmission type.
   *
   * > **NOTE**
   * >
   * > A USB interface may have multiple selection modes and supports dynamic switching. It is used
   * > to reset the endpoint to match the transmission type during data transmission.
   * >
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBInterface } iface - USB interface. You can use [getDevices]{@link usbManager.getDevices}
   *     to obtain device information and identify the USB interface based on its **id** and
   *     **alternateSetting**. **id** is the unique identifier of the interface. **alternateSetting** is
   *     used to switch between optional modes of the same interface. If **alternateSetting* is **0**,
   *     optional modes are not supported.
   * @returns { int } Result of the device interface setting. Returns **0** if the interface is set
   *     successfully; returns an error code otherwise. The error codes are as follows:
   *     <br>- 88080389: The service is not started. Possible causes: 1. No device is inserted;
   *     2. The service exits abnormally.
   *     <br>- 88080486: The service is being initialized. Try again later.
   *     <br>- 88080488: No permission to access the device. Call
   *     [requestRight]{@link usbManager.requestRight} to request authorization first.
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * Obtains a raw USB descriptor. If the USB service is abnormal, **undefined** may be returned.
   * Check whether the return value of the API is empty.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @returns { Uint8Array } Returns the obtained raw data; returns undefined on failure.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first. [since 23] [staticonly]
   * @throws { BusinessError } 14400004 Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in. [since 23] [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getRawDescriptor(pipe: USBDevicePipe): Uint8Array;

  /**
   * Obtains a file descriptor. If the USB service is abnormal, an error code may be returned.
   * Check whether the return value of the API is empty or check the error code.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @returns { int } Returns the file descriptor corresponding to the device. If the operation fails,
   *     one of the following error codes is returned:
   *     <br>- 88080486: The service is being initialized. Try again later.
   *     <br>- 88080488: No permission to access the device. Call
   *     [requestRight]{@link usbManager.requestRight} to request authorization first.
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * @param { USBDevicePipe } pipe - USB device pipe, which is obtained by calling
   *     [connectDevice]{@link usbManager.connectDevice}.
   * @param { USBControlParams } controlparam - Control transfer parameters, including the **request**,
   *     **target**, **reqType**, **value**, **index**, and **data** fields. For details about the
   *     parameter types, see the USB protocol specifications. Set the parameters based on the device
   *     and control request type.
   * @param { number } [timeout] - Timeout interval, in milliseconds. This parameter is optional. If the
   *     control transfer is complete within the specified time, the size of the transferred or received
   *     data block is returned; otherwise, a timeout error is returned. The default value is **0**,
   *     indicating that the system waits infinitely until the control transfer is complete. If a
   *     negative number is passed, a parameter error is thrown. Set this parameter as required.
   * @returns { Promise<number> } Promise used to return the result, which is the size of the transferred
   *     or received data block if the transfer is successful. If the API call fails, the following
   *     error codes are returned:
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams,
   *     timeout?: int)
   */
  function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>;

  /**
   * Performs control transfer. After the control command is transferred successfully, the size of the
   * transferred or received data block is returned. This API can be used to exchange control commands
   * with a USB device, such as obtaining the device descriptor, setting the device address, sending
   * vendor-defined commands, and configuring HID device features. This API uses a promise to return
   * the result.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBDeviceRequestParams } requestparam - Control transfer parameters, including the
   *     **bmRequestType**, **bRequest**, **wValue**, **wIndex**, **wLength**, and **data** fields. For
   *     details about the parameter types, see the USB protocol specifications. Set the parameters
   *     based on the device and control request type.
   * @param { int } [timeout] - Timeout interval, in milliseconds. This parameter is optional. If the
   *     control transfer is complete within the specified time, the size of the transferred or received
   *     data block is returned; otherwise, a timeout error is returned. The default value is **0**,
   *     indicating that the system waits infinitely until the control transfer is complete. If a
   *     negative number is passed, a parameter error is thrown. Set this parameter as required.
   * @returns { Promise<int> } Promise used to return the result, which is the size of the transferred or
   *     received data block if the transfer is successful. If the API call fails, the following error
   *     codes are returned:
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * After the bulk transfer is complete, the size of the transferred or received data block is
   * returned. This API uses a promise to return the result. Compared with **usbSubmitTransfer**,
   * **bulkTransfer** is suitable for simple bulk transfer. It directly transfers data and endpoints
   * through independent parameters and uses a promise to return the result. **usbSubmitTransfer** is
   * suitable for scenarios that require more flexible control. It encapsulates parameters in the
   * **UsbDataTransferParams** object, supports asynchronous callback, and allows you to cancel a
   * transfer request using **usbCancelTransfer**.
   *
   * > **NOTE**
   * >
   * > The total size of data (including **pipe**, **endpoint**, **buffer**, and **timeout**) to be
   * > transferred in a single bulk transfer must be less than 200 KB. Otherwise, the transfer fails
   * > and **-1** is returned.
   * >
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @param { USBEndpoint } endpoint - USB endpoint, which is used to determine the USB port for data
   *     transfer. You need to call [getDevices]{@link usbManager.getDevices} to obtain the device
   *     information list. In the **USBEndpoint** API, the **address** parameter indicates the endpoint
   *     address. The **direction** parameter indicates the transmission direction of the endpoint, the
   *     value **0** indicates output, and **128** indicates input. The **interfaceId** parameter
   *     identifies the interface to which the endpoint belongs. Currently, other attributes are not
   *     processed.
   * @param { Uint8Array } buffer - Buffer for writing or reading data. The array length indicates the
   *     buffer size. This parameter is used to write or read data during bulk transfer.
   * @param { int } [timeout] - Timeout interval, in milliseconds. This parameter is optional. If the
   *     bulk transfer is complete within the specified time, the size of the transferred or received
   *     data block is returned; otherwise, a timeout error is returned. The default value is **0**,
   *     indicating that the system waits infinitely until the control transfer is complete. If a
   *     negative number is passed, a parameter error is thrown. Set this parameter as required.
   * @returns { Promise<int> } Promise used to return the result, which is the size of the transferred
   *     or received data block if the transfer is successful. If the API call fails, the following
   *     error codes are returned:
   *     <br>- -1: The driver is abnormal. Possible causes: 1. The device connection is unstable or the
   *     device is disconnected. 2. The USB driver fails to be loaded. 3. The kernel USB module is
   *     abnormal.
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
   * Resets the USB device. This API is applicable to scenarios where the USB device needs to be
   * restored due to communication exceptions. For example, the device needs to be reinitialized
   * after a device firmware upgrade, the device status needs to be restored when it is abnormal,
   * or the device status needs to be reset during debugging. After this API is successfully called,
   * the device is reset to the initial state. The previously set configurations and interface
   * settings are cleared, and the device needs to be reinitialized.
   *
   * > **NOTE**
   * >
   * > Previous configurations and interface settings will be reset after this API is called. Ensure
   * > that the related services have been completed before calling this API.
   *
   * 1. Call [usbManager.getDevices]{@link usbManager.getDevices} to obtain the USB device list.
   * 2. Call [usbManager.requestRight]{@link usbManager.requestRight} to request the device access
   *    permission.
   * 3. Call [usbManager.connectDevice]{@link usbManager.connectDevice} to obtain **devicepipe** as an
   *    input parameter.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @returns { boolean } Returns **true** if the device is reset successfully; returns **false** otherwise.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first.
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
   * Closes the USB device pipe.
   *
   * 1. Call [usbManager.getDevices]{@link usbManager.getDevices} to obtain the device list;
   * 2. Call [usbManager.requestRight]{@link usbManager.requestRight} to request the device access
   *    permission.
   * 3. Call [usbManager.connectDevice]{@link usbManager.connectDevice} to obtain **devicepipe** as an
   *    input parameter.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and
   *     device address. You need to call [connectDevice]{@link usbManager.connectDevice} to obtain
   *     its value.
   * @returns { int } Returns **0** if the USB device pipe is closed successfully; returns an error
   *     code otherwise. The error codes are as follows:
   *     <br>- 22: The service is abnormal. Possible causes: 1. The USB service is abnormal.
   *     2. The USB device pipe is abnormal.
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
   * Checks whether the app has the permission to access USB accessories.
   *
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList} to obtain the
   * accessory list and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which can be obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList}.
   * @returns { boolean } The value **true** indicates that the app has the permission to access USB
   *     accessories; **false** indicates the opposite.
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
   * Requests the permission to access USB accessories for a specified app. This API uses a promise
   * to return the result.
   *
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList} to obtain the
   * accessory list and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which must be obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList}.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that
   *     the app is granted with the permission to access USB accessories; **false** indicates the
   *     opposite.
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
   * Cancels the permission of the current app to access USB accessories. This API is called to cancel
   * the accessory access permission requested using **requestAccessoryRight()**. This API must be
   * used with **requestAccessoryRight()** in pairs.
   *
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList} to obtain the
   * accessory list and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which must be obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList}.
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
   * @returns { Array<Readonly<USBAccessory>> } List of USB accessories (read-only), including all available USB
   *     accessories.
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
   * Obtains the accessory handle and opens the accessory file descriptor. Then, the host can
   * communicate with the accessory through the **read** and **write** APIs provided by Core File
   * Kit. After using the accessory, call [closeAccessory]{@link usbManager.closeAccessory} to close
   * the file descriptor.
   *
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList} to obtain the
   * accessory list and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter. Before
   * calling this API, call [usbManager.requestAccessoryRight]{@link usbManager.requestAccessoryRight}
   * to request the permission to access the accessory. This API can be called only after the
   * permission is granted (**true** is returned).
   *
   * @param { USBAccessory } accessory - USB accessory, which needs to be obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList}.
   * @returns { USBAccessoryHandle } Describes the USB accessory handle.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first.
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
   *
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList} to obtain the
   * accessory list, and then call [usbManager.requestAccessoryRight]{@link usbManager.requestAccessoryRight}
   * to request the permission to access the accessory. After the permission is granted, call
   * [usbManager.openAccessory]{@link usbManager.openAccessory} to obtain the accessory handle. The
   * obtained [USBAccessoryHandle]{@link usbManager.USBAccessoryHandle} is used as a parameter.
   *
   * @param { USBAccessoryHandle } accessoryHandle - USB accessory handle, which must be obtained through
   *     [openAccessory]{@link usbManager.openAccessory}.
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
   * Defines a USB endpoint, which is used for data transfer between the host and the USB device.
   * You can obtain the USB endpoint through [USBInterface]{@link usbManager.USBInterface}.
   *
   * > **Note:**
   * >
   * > The host controller schedules endpoints based on their types. Different scheduling policies are
   * > used for different types of endpoints. Bandwidth sharing scheduling is used for bulk endpoints,
   * > which is suitable for non-real-time transmission of a large amount of data. Fixed polling
   * > scheduling is used for interrupt endpoints, which is suitable for real-time transmission of a
   * > small amount of data. Bandwidth reservation scheduling is used for isochronous endpoints, which
   * > is suitable for real-time data streams such as audio and video.
   * >
   * > The transmission characteristics, including the data packet format, error processing mechanism,
   * > and timeout policy, are determined based on the endpoint type during protocol layer packaging.
   * > ![USBEndpoint](docroot://reference/figures/USBEndpoint.png)
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
     * Endpoint attributes, indicating the transfer characteristics of the endpoint, including the
     * transfer type (bulk, interrupt, or isochronous) and synchronization type. The value must comply
     * with the USB endpoint descriptor specifications.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Endpoint interval, in milliseconds. This parameter indicates the interval for interrupt and
     * isochronous endpoints. This field is not used for bulk endpoints.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * Maximum size of data packets on the endpoint, in bytes.
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
   * Represents a USB interface. One [USBConfiguration]{@link usbManager.USBConfiguration} object can
   * contain multiple **USBInterface** instances, each providing a specific function.
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
     * Alternative setting index of the interface, which is used to switch between multiple optional
     * descriptors of the same interface. The value **0** indicates the default setting, and other
     * values indicate specific alternative settings.
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
   * Represents the USB configuration. One [USBDevice]{@link usbManager.USBDevice} can contain multiple
   * **USBConfig** instances.
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
     * Configuration attributes, indicating features such as the power supply mode and remote wakeup
     * capability. The value must comply with the USB configuration descriptor specifications.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Maximum power consumption, in mA.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPower: int;

    /**
     * Configuration name, which can be an empty string.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether remote wakeup is supported. **true** if supported, and **false** otherwise.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isRemoteWakeup: boolean;

    /**
     * Whether an independent power supply is supported. **true** if supported, and **false** otherwise.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isSelfPowered: boolean;

    /**
     * List of supported interfaces.
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
     * Serial number. Third-party apps cannot obtain the device serial number from this field.
     * This field is unavailable to third-party apps. To obtain the serial number, third-party apps
     * need to request permissions to access the device and then initiate a control transfer.
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
     * Manufacturer name.
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
     * Version.
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
     * Device class code.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * Device subclass code.
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
   * Define a USB device pipe, which is used to determine the bus address and device address.
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
     * None.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Power supply for external devices.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE = 1,

    /**
     * External power supply.
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
     * None.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * USB host.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HOST = 1,

    /**
     * USB device.
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
     * None.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Upstream facing port, which functions as the sink of power supply.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    UFP = 1,

    /**
     * Downstream facing port, which functions as the source of power supply.
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
     * Not supported currently.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NUM_MODES = 4
  }

  /**
   * Enumerates USB port roles. **currentMode** indicates the current USB mode of the port. The value
   * must be within the range of **supportedModes** of the USB port. **currentPowerRole** indicates
   * the current power role, and **currentDataRole** indicates the current data transfer role. These
   * fields are generally set as follows: In DFP mode, **dataRole** is **HOST**, and **powerRole** is
   * **SOURCE**. In UFP mode, **dataRole** is **DEVICE**, and **powerRole** is **SINK**. The port
   * status change is subject to hardware and system constraints. Some mode or role combinations may
   * not be supported.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPortStatus {
    /**
     * Current USB mode. For details, see [PortModeType]{@link usbManager.PortModeType}.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentMode: int;

    /**
     * Current power role of the device. For details, see [PowerRoleType]{@link usbManager.PowerRoleType}.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentPowerRole: int;

    /**
     * Current data transfer role of the device. For details, see
     * [DataRoleType]{@link usbManager.DataRoleType}.
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
     * Numeric mask combination for the supported mode list. **status.currentMode** must be supported.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    supportedModes: PortModeType;

    /**
     * USB port role information. **currentMode** must be within the range of **supportedModes**.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    status: USBPortStatus;
  }

  /**
   * Describes control transfer parameters.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceRequestParams {
    /**
     * Request control type, which specifies the direction and type of the control transfer. The value
     * must comply with the USB protocol specifications. Common values are as follows: **0x00**:
     * standard request from the host to the device; **0x20**: class request from the host to the device;
     * **0x40**: vendor request from the host to the device; 0x80: standard request from the device to
     * the host.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bmRequestType: int;

    /**
     * Request type, which indicates a specific USB control request command such as obtaining the
     * descriptor or setting the address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bRequest: int;

    /**
     * Request parameter, which is used to transfer the parameters required by the control request
     * to the USB device.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wValue: int;

    /**
     * Index value corresponding to the request parameter **wValue**, which is used to specify the
     * target interface or endpoint of the control request.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wIndex: int;

    /**
     * Length of the request data, which is used to specify the number of data bytes expected to be
     * received or sent during control transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wLength: int;

    /**
     * Buffer for writing or reading data. The array length must be equal to the number of data bytes
     * specified by **wLength**. It is used to control data transmission or reception during data
     * transfer.
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
     * The control request target is set to the USB device, which is used to control the entire
     * device, for example, setting the device address or obtaining the device descriptor.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * The control request target is set to an interface of the USB device, which is used to control
     * the interface, for example, setting the interface features or obtaining the interface descriptor.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * The control request target is set to an endpoint of the USB device, which is used to control
     * the endpoint, for example, clearing the endpoint stop state or obtaining the endpoint status.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * The control request target is set to another unit, which is used to control the unit of a
     * non-standard device, interface, or endpoint.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_OTHER = 3
  }

  /**
   * Enumerates control request types. Each type indicates a specific USB control request command
   * such as obtaining the descriptor or setting the address.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBControlRequestType {
    /**
     * Standard request type, which is used to send standard control requests (such as the device
     * descriptor, setting address, and setting configuration) defined by the USB protocol.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * Class request type, which is used to send class-specific control requests (such as HID and
     * mass storage class requests).
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * Vendor request type, which is used to send vendor-defined control requests. The request
     * content is defined by the vendor.
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
     * Abstract control model (ACM) with serial port communication function, which is used to
     * simulate serial port devices.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACM = 1,

    /**
     * Ethernet control model (ECM) with Ethernet control function, which is used for network sharing.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ECM = 2,

    /**
     * HarmonyOS device connector (HDC).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HDC = 4,

    /**
     * Media transfer protocol (MTP).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MTP = 8,

    /**
     * Picture transfer protocol (PTP).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PTP = 16,

    /**
     * Remote network driver interface specification (RNDIS), which is used for network sharing
     * (not supported currently).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RNDIS = 32,

    /**
     * Musical instrument digital interface (MIDI), which is used for communication with MIDI devices
     * (not supported currently).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MIDI = 64,

    /**
     * Audio source, which is used for audio data transfer (not supported currently).
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE = 128,

    /**
     * Network control model (NCM), which is used for high-speed network sharing (not supported
     * currently).
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
     * Description of an accessory, which is provided by the manufacturer to describe the functions,
     * usage, or features of the accessory.
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
   * Defines a USB accessory handle, including the accessory file descriptor. This API is used to
   * communicate with the accessory through the **read** or **write** API provided by Core File Kit.
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
     * Automatically releases transfer resources after the callback is complete.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_TRANSFER = 2,

    /**
     * Adds an additional data packet to be transferred.
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
     * Transfer timed out.
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
     * Stall detected (bulk/interrupt endpoint).
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
     * Device sent more data than requested.
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
     * Isochronous transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_ISOCHRONOUS = 0x1,

    /**
     * Bulk transfer.
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
     * Expected length of the read/write operation, in bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Actual length of the read/write operation, in bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;

    /**
     * Status code of the isochronous transfer subpacket.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;
  }

  /**
   * Defines a USB data transfer parameter object, which contains all parameters required for USB
   * data transfer. It is used by the **usbSubmitTransfer** and **usbCancelTransfer** APIs to
   * initiate transfer requests.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbDataTransferParams {
    /**
     * USB device pipe, which is used to determine the bus address and device address. You need to
     * call [connectDevice]{@link usbManager.connectDevice} to obtain its value.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    devPipe: USBDevicePipe;

    /**
     * USB transfer flag, which is used to control the transfer behavior. The options are as follows:
     * **0**: Report short frames as errors; **1**: Automatically release the transfer buffer;
     * **2**: Automatically release transfer resources after the callback is complete;
     * **3**: Add an extra data packet to be transferred.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    flags: UsbTransferFlags;

    /**
     * Endpoint address. The value is a positive integer within the range of [1, 255]. You need to
     * call [getDevices]{@link usbManager.getDevices} to obtain the device information, use the
     * **address** attribute of the endpoint to determine the endpoint information, and use the
     * **direction** attribute to determine the endpoint direction.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    endpoint: int;

    /**
     * Transfer type, which specifies the USB data transfer mode. The options are as follows:
     * **0x1**: real-time transfer, suitable for real-time data streams such as audio and video;
     * **0x2**: bulk transfer, suitable for non-real-time transfer of a large amount of data;
     * **0x3**: interrupt transfer, suitable for real-time transfer of a small amount of data.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    type: UsbEndpointTransferType;

    /**
     * Timeout interval, in milliseconds. If the transfer is complete within the specified time, the
     * size of the transferred or received data block is returned; otherwise, a timeout error is
     * returned. The default value is **0**, indicating that the system waits infinitely until the
     * control transfer is complete. If a negative number is passed, a parameter error is thrown.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    timeout: int;

    /**
     * Expected length of the data buffer, in bytes. The value must be a non-negative number in the
     * range of [0, **INT_MAX**].
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Callback invoked when the transfer is complete. The signature is
     * **(err: Error, data: SubmitTransferCallback) => void**. If the operation is successful, **err**
     * is **null**; if the operation fails, **err** is an error object. **data** contains information
     * such as the transfer status and actual length.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    callback: AsyncCallback<SubmitTransferCallback>;

    /**
     * User context data, which is used to pass custom context information in the callback. The size
     * and format are defined by the user and specified in the transfer request. The data is returned
     * in the callback without any modification.
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
     * Number of data packets during real-time transfer, used only for I/Os with real-time transfer
     * endpoints. The value must be a non-negative number in the range of [0, **INT_MAX**].
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketCount: int;
  }

  /**
   * Submits an asynchronous transfer request. The result is returned immediately after this API is
   * called. This API uses a callback to rerturn the actual read/write operation result. You can call
   * [usbCancelTransfer]{@link usbManager.usbCancelTransfer} to cancel an asynchronous transfer request.
   *
   * > **NOTE**
   * >
   * > This API uses an asynchronous callback to return the result.
   * >
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { UsbDataTransferParams } transfer - As a USB data transfer interface, it is required for a
   *     client to initiate a transfer request. Before calling this API, call the
   *     [usbManager.claimInterface]{@link usbManager.claimInterface} API to claim a communication
   *     interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first.
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
   * Cancels an asynchronous USB data transfer request. This API can be used to proactively terminate
   * an ongoing USB data transfer, for example, when a user manually cancels a long-time data
   * transfer, when an error occurs after a transfer times out, or when the current transfer needs
   * to be terminated during an app switch.
   *
   * > **NOTE**
   * >
   * > This API can be used to proactively cancel an unfinished USB data transfer request, such as
   * > the request submitted by usbSubmitTransfer.
   * >
   * > Before calling this API, call the [usbManager.claimInterface]{@link usbManager.claimInterface}
   * > API to claim a communication interface.
   *
   * @param { UsbDataTransferParams } transfer - Parameter whose transfer is canceled. The value of this
   *     parameter is the same as that of the **transfer** parameter in the
   *     [usbManager.usbSubmitTransfer]{@link usbManager.usbSubmitTransfer} API. Before calling this
   *     API, call the [usbManager.claimInterface]{@link usbManager.claimInterface} API to claim a
   *     communication interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe
   *     access right first.
   * @throws { BusinessError } 14400008 - No such device (it may have been disconnected).
   * @throws { BusinessError } 14400010 - Other USB error. Possible causes:
   *
   *     <br>1.Unrecognized discard error code.
   * @throws { BusinessError } 14400011 - The transfer is not in progress, or is already complete or
   *     cancelled.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbCancelTransfer(transfer: UsbDataTransferParams): void;

  /**
   * Sets the roles of a specified port, including **powerRole** (for charging) and **dataRole**
   * (for data transfer). This API uses a promise to return the result. After this API is successfully
   * called, the port role will be switched to the specified role. This API can be used to dynamically
   * switch the role of a USB port. When developer mode is disabled, the operation may fail if no
   * device is connected. In this case, an exception is thrown.
   *
   * @param { number } portId - USB port number. The value is a non-negative integer, which can be
   *     obtained from the port list returned by [getPortList]{@link usbManager.getPortList}.
   * @param { PowerRoleType } powerRole - Power role type. The options are **NONE**, **SOURCE**
   *     (providing power), and **SINK** (requiring external power supply).
   * @param { DataRoleType } dataRole - Data transfer role. The options are **NONE**, **HOST**, and
   *     **DEVICE**.
   * @returns { Promise<void> } Promise used to return the result. If the API is called successfully,
   *     no value is returned. If the call fails, an exception is thrown.
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
     * Status of the read/write operation.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;

    /**
     * Packet information of the isochronous transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>;

    /**
     * Actual length of the read/write operation, in bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;
  }

  /**
   * Control transfer parameters.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead usbManager.USBDeviceRequestParams
   */
  interface USBControlParams {
    /**
     * Index value corresponding to the request parameter **value**, which is used to specify the
     * target interface or endpoint of the control request.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    index: number;

    /**
     * Request control type.
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
     * Request parameter, which is used to transfer the parameters required by the control request
     * to the USB device.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    value: number;

    /**
     * Request type, which indicates a specific USB control request command.
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

  /**
   * Claims a USB device interface exclusively. When this API is called, the system checks whether the specified USB interface has been claimed by another process to avoid conflicts during declaration.
   * If **force** is set to **true**, the operating system first releases the interface from the kernel driver and then grants control to the calling app.
   * After the interface is claimed exclusively, other processes can still claim the same interface by calling [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}.
   * You can use the **onConflict** callback to receive such conflict notifications.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus address and device address. You need to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBInterface } iface - Index of the target USB interface. You can call [usbManager.getDevices]{@link usbManager.getDevices()} to obtain the device information and identify the USB interface based on the ID.
   * @param { boolean } [force] - Whether to forcibly claim the USB interface. The default value is **false**, indicating that the USB interface is not forcibly claimed. You can set this parameter as required.
   *     <br>The default value is **false**.
   * @param { Callback<InterfaceConflictInfo> } [onConflict] - Callback used to return the conflict information when other processes
   *     claim the same USB interface by calling [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   *     non-exclusively after the interface is claimed exclusively. If this parameter is not specified, no notification is sent when such a conflict occurs.
   *     <br>Default value: no callback is triggered.
   * @throws { BusinessError } 14400001 - Permission denied.
   * @throws { BusinessError } 14400004 - Service exception.
   * @throws { BusinessError } 14400007 - Resource busy. Possible cause:
   *     The interface is claimed by another program or driver.
   * @throws { BusinessError } 14400010 - USB driver error. Possible causes:
   *     <br>1. The device is not connected using [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}.
   *     <br>2. The USB device state is abnormal.
   * @syscap SystemCapability.USB.USBManager
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function claimInterfaceExclusive(pipe: USBDevicePipe, iface: USBInterface, force?: boolean,
    onConflict?: Callback<InterfaceConflictInfo>): void;

  /**
   * Describes the conflict information when the USB interface that has been exclusively claimed is claimed by another process in non-exclusive mode
   * by calling [usbManager.claimInterfaceExclusive]{@link usbManager.claimInterfaceExclusive(pipe: USBDevicePipe, iface: USBInterface, force?: boolean, onConflict?: Callback<InterfaceConflictInfo>)}.
   *
   * > **NOTE**
   * >
   * > This callback is triggered when another process calls
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   *     non-exclusively to claim the same USB interface. The exclusive holder of the interface can learn about potential access conflicts through this callback.
   *
   * @syscap SystemCapability.USB.USBManager
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface InterfaceConflictInfo {
    /**
     * Bus address of the USB device.
     * The value should be an integer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    busNum: int;

    /**
     * Device address of the USB device.
     *
     * @syscap SystemCapability.USB.USBManager
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    devAddr: int;

    /**
     * ID of the USB interface that has been claimed by another process.
     *
     * @syscap SystemCapability.USB.USBManager
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    interfaceId: int;
  }
}

export default usbManager;