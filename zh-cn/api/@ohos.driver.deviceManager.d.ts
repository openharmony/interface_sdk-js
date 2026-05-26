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
 * 本模块主要提供管理外部设备的相关功能，包括查询设备列表、绑定设备和解除绑定设备。
 *
 * @syscap SystemCapability.Driver.ExternalDevice
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace deviceManager {
  /**
   * 获取接入主设备的外部设备列表。如果没有设备接入，那么将会返回一个空的列表。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { int } busType - 由[BusType]{@link deviceManager.BusType}约定的设备总线类型，不填则查找所有类型设备。
   * @returns { Array<Readonly<Device>> } 设备信息列表。
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 22900001 - ExternalDeviceManager service exception or busType parameter error.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function queryDevices(busType?: int): Array<Readonly<Device>>;

  /**
   * 根据queryDevices()返回的设备信息绑定设备。
   * 需要调用[deviceManager.queryDevices()]{@link deviceManager.queryDevices}获取设备信息以及device。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<number> } onDisconnect - 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。
   * @param { AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}> } callback - 回调函数。当绑定设备成功时，err为undefined，
   *     data包含设备ID和绑定设备驱动通信对象；否则为错误对象。
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
  function bindDevice(deviceId: number, onDisconnect: AsyncCallback<number>,
    callback: AsyncCallback<{deviceId: number; remote: rpc.IRemoteObject;}>): void;

  /**
   * 根据queryDevices()返回的设备信息绑定设备。
   * 需要调用[deviceManager.queryDevices()]{@link deviceManager.queryDevices}获取设备信息以及device。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<number> } onDisconnect - 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。
   * @param { AsyncCallback<RemoteDeviceDriver> } callback - 回调函数。当绑定设备驱动成功时，err为undefined，data为包括设备ID和远程对象的
   *     [RemoteDeviceDriver]{@link deviceManager.RemoteDeviceDriver}对象；否则为错误对象。
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
   * 根据queryDevices()返回的设备信息绑定设备。
   * 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息以及device。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<number> } onDisconnect - 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。
   * @returns { Promise<{deviceId: number; remote: rpc.IRemoteObject;}> } Promise对象，返回一个包含设备ID和IRemoteObject的对象。
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
   * 根据queryDevices()返回的设备信息绑定设备。
   * 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息以及device。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<number> } onDisconnect - 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。
   * @returns { Promise<RemoteDeviceDriver> } Promise对象，返回RemoteDeviceDriver对象。
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
   * 解除设备绑定。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<number> } callback - 回调函数。当解绑设备成功时，err为undefined，data为设备ID；否则为错误对象。
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
   * 解除设备绑定。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { number } deviceId - 设备ID，通过queryDevices获得。
   * @returns { Promise<number> } Promise对象，返回解除绑定的设备ID。
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
   * 查询扩展外设详细信息列表。如果没有设备接入，那么将会返回一个空的列表。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { long } deviceId - 设备ID，通过[queryDevices]{@link @ohos.driver.deviceManager:deviceManager.queryDevices}获得。
   *     如果不传入设备ID，则默认获取所有的设备信息；如果没有外接设备，且没有传入设备ID则会返回空数组。
   * @returns { Array<Readonly<DeviceInfo>> } 扩展外设详细信息列表。
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
   * 查询扩展外设驱动详细信息列表。如果没有设备接入，那么将会返回一个空的列表。
   *
   * @permission ohos.permission.ACCESS_EXTENSIONAL_DEVICE_DRIVER
   * @param { string } driverUid - 驱动UID，通过queryDeviceInfo获得。
   * @returns { Array<Readonly<DriverInfo>> } 扩展外设驱动详细信息列表。
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
   * 根据queryDevices()返回的设备信息绑定设备。使用Promise异步回调。
   * 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息列表。
   *
   * @permission ohos.permission.ACCESS_DDK_DRIVERS
   * @param { long } deviceId - 设备ID，通过queryDevices获得。
   * @param { AsyncCallback<long> } onDisconnect - 回调函数。当绑定设备断开时，err为undefined，data为解绑的设备ID；否则为错误对象。
   * @returns { Promise<RemoteDeviceDriver> } Promise对象，返回RemoteDeviceDriver对象。
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @throws { BusinessError } 26300002 - The driver service does not allow any client to bind.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 19 dynamic
   * @since 23 static
   */
  function bindDriverWithDeviceId(deviceId: long, onDisconnect: AsyncCallback<long>): Promise<RemoteDeviceDriver>;

  /**
   * 解除设备绑定。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DDK_DRIVERS
   * @param { long } deviceId - 设备ID，通过[queryDevices]{@link deviceManager.queryDevices}获得。
   * @returns { Promise<int> } Promise对象，返回解除绑定的设备ID。
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 26300001 - ExternalDeviceManager service exception.
   * @throws { BusinessError } 26300003 - There is no binding relationship.
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 19 dynamic
   * @since 23 static
   */
  function unbindDriverWithDeviceId(deviceId: long): Promise<int>;

  /**
   * 设备总线类型。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BusType {
    /**
     * USB总线类型。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    USB = 1
  }

  /**
   * 外设信息。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface Device {
    /**
     * 总线类型。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * 设备ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * 设备描述。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * USB设备信息，继承自[Device]{@link deviceManager.queryDevices}。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 10 dynamic
   * @since 23 static
   */
  interface USBDevice extends Device {
    /**
     * USB设备Vendor ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * USB设备Product ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 10 dynamic
     * @since 23 static
     */
    productId: int;
  }

  /**
   * 远程设备驱动。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @since 11 dynamic
   * @since 23 static
   */
  interface RemoteDeviceDriver {
    /**
     * 设备ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * 远程驱动程序对象。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @since 11 dynamic
     * @since 23 static
     */
    remote: rpc.IRemoteObject;
  }

  /**
   * USB设备接口描述符。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBInterfaceDesc {
    /**
     * 接口编号。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bInterfaceNumber: int;

    /**
     * 类型代码。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bClass: int;

    /**
     * 子类型代码。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bSubClass: int;

    /**
     * 协议代码。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    bProtocol: int;
  }


  /**
   * 设备详细信息。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DeviceInfo {
    /**
     * 设备ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceId: long;

    /**
     * 设备是否匹配到驱动。`true`：匹配到驱动；`false`：未匹配到驱动。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isDriverMatched: boolean;

    /**
     * 设备匹配的驱动UID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid?: string;
  }

  /**
   * USB设备详细信息，继承自[DeviceInfo]{@link deviceManager.DeviceInfo}。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceInfo extends DeviceInfo {
    /**
     * USB设备Vendor ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * USB设备Product ID。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * USB设备接口描述符列表。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    interfaceDescList: Array<Readonly<USBInterfaceDesc>>;
  }

  /**
   * 驱动详细信息。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface DriverInfo {
    /**
     * 总线类型。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    busType: BusType;

    /**
     * 驱动Uid。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverUid: string;

    /**
     * 驱动名称。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverName: string;

    /**
     * 驱动版本。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverVersion: string;

    /**
     * 驱动大小(单位为Byte)。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    driverSize: string;

    /**
     * 驱动描述。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * USB设备驱动详细信息，继承自[DriverInfo]{@link deviceManager.DriverInfo}。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDriverInfo extends DriverInfo {
    /**
     * 驱动支持的USB设备product ID列表。
     *
     * @syscap SystemCapability.Driver.ExternalDevice
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    productIdList: Array<int>;

    /**
     * 驱动支持的USB设备vendor ID列表。
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