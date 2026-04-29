/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit DriverDevelopmentKit
 */

import type { AsyncCallback } from './@ohos.base';
import type rpc from './@ohos.rpc';

/**
 * The **deviceManager** module provides APIs for managing peripheral devices, including querying the peripheral device
 * list and binding or unbinding a peripheral device.
 *
 * @syscap SystemCapability.Driver.ExternalDevice
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace deviceManager {
  /**
   * Queries the list of peripheral devices. If the device has no peripheral device connected, an empty list is
   * returned.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { int } busType - Device bus type specified by [BusType]{@link deviceManager.BusType}. If this parameter is
   *     left empty, all types of devices are searched.
   * @returns { Array<Readonly<Device>> } List of peripheral devices obtained.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception or busType parameter error.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function queryDevices(busType?: int): Array<Readonly<Device>>;

  /**
   * Binds a peripheral device based on the device information returned by **queryDevices()**.
   * You need to use [deviceManager.queryDevices()]{@link deviceManager.queryDevices} to obtain the peripheral device
   * information and device.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<number> } onDisconnect - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @param { AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}> } callback - Callback used to return the
   *     result. When the device is bound successfully, **err** is **undefined**, and **data** contains the device ID
   *     and the bound device driver communication object. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   *     3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead deviceManager.bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>)
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}>): void;

  /**
   * Binds a peripheral device based on the device information returned by **queryDevices()**.
   * You need to use [deviceManager.queryDevices()]{@link deviceManager.queryDevices} to obtain the peripheral device
   * information and device.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<number> } onDisconnect - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @param { AsyncCallback<RemoteDeviceDriver> } callback - Callback used to return the result. When the device driver
   *     is successfully bound, **err** is **undefined** and **data** is a
   *     [RemoteDeviceDriver]{@link deviceManager.RemoteDeviceDriver} object that contains the device ID and remote
   *     object. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11
   * @deprecated since 19
   * @useinstead deviceManager.bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>)
   */
  function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<RemoteDeviceDriver>): void;

  /**
   * Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promise
   * to return the result.
   * You need to use [deviceManager.queryDevices]{@link deviceManager.queryDevices} to obtain the peripheral device
   * information and device.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<number> } onDisconnect - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @returns { Promise<{deviceId: number; remote: rpc.IRemoteObject;}> } Promise used to return an object containing
   *     the device ID and **IRemoteObject**.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead deviceManager.bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>)
   */
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<{deviceId: number;
    remote: rpc.IRemoteObject;}>;

  /**
   * Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promise
   * to return the result.
   * You need to use [deviceManager.queryDevices]{@link deviceManager.queryDevices} to obtain the peripheral device
   * information and device.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<number> } onDisconnect - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @returns { Promise<RemoteDeviceDriver> } Promise used to return a **RemoteDeviceDriver** object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11
   * @deprecated since 19
   * @useinstead deviceManager.bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>)
   */
  function bindDeviceDriver(deviceId: number, onDisconnect: AsyncCallback<number>): Promise<RemoteDeviceDriver>;

  /**
   * Unbinds a peripheral device.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<number> } callback - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead deviceManager.unbindDriverWithDeviceId(deviceId: long)
   */
  function unbindDevice(deviceId: number, callback: AsyncCallback<number>): void;

  /**
   * Unbinds a peripheral device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @returns { Promise<number> } Promise used to return the ID of the unbound device.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   *     3.Parameter verification failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10
   * @deprecated since 19
   * @useinstead deviceManager.unbindDriverWithDeviceId(deviceId: long)
   */
  function unbindDevice(deviceId: number): Promise<number>;

  /**
   * Obtains the list of detailed information about peripherals. If the device has no peripheral device connected, an
   * empty list is returned.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { long } deviceId - Device ID, which is obtained through
   *     [queryDevices]{@link @ohos.driver.deviceManager:deviceManager.queryDevices}. If no device ID is passed, all
   *     device information is obtained by default. If no external device is connected and no device ID is passed, an
   *     empty array is returned.
   * @returns { Array<Readonly<DeviceInfo>> } List of detailed information about peripherals.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. A non-system application cannot call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function queryDeviceInfo(deviceId?: long): Array<Readonly<DeviceInfo>>;

  /**
   * Obtains the list of detailed information about peripheral drivers. If the device has no peripheral device
   * connected, an empty list is returned.
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { string } driverUid - Driver UID, which can be obtained by using **queryDeviceInfo**.
   * @returns { Array<Readonly<DriverInfo>> } List of detailed information about peripheral drivers.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. A non-system application cannot call a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function queryDriverInfo(driverUid?: string): Array<Readonly<DriverInfo>>;

  /**
   * Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promise
   * to return the result.
   * You need to use [deviceManager.queryDevices]{@link deviceManager.queryDevices} to obtain the peripheral device
   * list.
   *
   * @permission ohos.permission.ACCESS_DDK_DRIVERS
   * @param { long } deviceId - Device ID, which can be obtained via **queryDevices()**.
   * @param { AsyncCallback<long> } onDisconnect - Callback used to return the result. When the bound device is
   *     disconnected, the value of **err** is **undefined** and the value of **data** is the ID of the unbound device.
   *     Otherwise, **err** is an error object.
   * @returns { Promise<RemoteDeviceDriver> } Promise used to return a **RemoteDeviceDriver** object.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @throws { BusinessError } 26300002 - The driver service does not allow any client to bind.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 19 dynamic
   * @since 23 static
   */
  function bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>): Promise<RemoteDeviceDriver>;

  /**
   * Unbinds a peripheral device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DDK_DRIVERS
   * @param { long } deviceId - Device ID, which can be obtained via [queryDevices]{@link deviceManager.queryDevices}.
   * @returns { Promise<int> } Promise used to return the ID of the unbound device.
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @throws { BusinessError } 26300003 - There is no binding relationship.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 19 dynamic
   * @since 23 static
   */
  function unbindDriverWithDeviceId(deviceId: long): Promise<int>;

  /**
   * Enumerates the device bus types.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BusType {
    /**
     * USB bus.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    USB = 1
  }

  /**
   * Represents the peripheral device information.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface Device {
    /**
     * Bus type.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * ID of the peripheral device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Description of the peripheral device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * USB device information, which is inherited from [Device]{@link deviceManager.queryDevices}.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface USBDevice extends Device {
    /**
     * Vendor ID of the USB device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID of the USB device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    productId: int;
  }

  /**
   * Represents information about a remote device driver.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11 dynamic
   * @since 23 static
   */
  interface RemoteDeviceDriver {
    /**
     * ID of the peripheral device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Remote driver object.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    remote: rpc.IRemoteObject;
  }

  /**
   * Defines the interface descriptor of a USB device.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBInterfaceDesc {
    /**
     * Interface ID.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bInterfaceNumber: int;

    /**
     * Interface class.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bClass: int;

    /**
     * Interface subclass.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bSubClass: int;

    /**
     * Interface protocol.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bProtocol: int;
  }


  /**
   * Defines the detailed information about a device.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DeviceInfo {
    /**
     * Device ID.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * Whether the device matches the driver. The value `true` indicates the device matches the driver, and the value
     * `false` indicates the opposite.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isDriverMatched: boolean;

    /**
     * UID of the driver matching the device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid?: string;
  }

  /**
   * Defines detailed information about the USB device. It is inherited from
   * [DeviceInfo]{@link deviceManager.DeviceInfo}.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceInfo extends DeviceInfo {
    /**
     * Vendor ID of the USB device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID of the USB device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * List of interface descriptors of the USB device.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    interfaceDescList: Array<Readonly<USBInterfaceDesc>>;
  }

  /**
   * Defines detailed information about a driver.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DriverInfo {
    /**
     * Bus type.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * Driver UID.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid: string;

    /**
     * Driver name.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverName: string;

    /**
     * Driver version.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverVersion: string;

    /**
     * Driver size, in bytes.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverSize: string;

    /**
     * Driver description.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * Defines detailed information about the USB device driver. It is inherited from
   * [DriverInfo]{@link deviceManager.DriverInfo}.
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDriverInfo extends DriverInfo {
    /**
     * Product ID list of the USB devices supported by the driver.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productIdList: Array<int>;

    /**
     * Vendor ID list of the USB devices supported by the driver.
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    vendorIdList: Array<int>;
  }
}

export default deviceManager;
