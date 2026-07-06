/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * 本模块主要提供管理USB设备的相关功能，包括查询USB设备列表、批量数据传输、控制命令传输、权限控制等。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 从API version 9开始，该接口不再维护，推荐使用新接口[@ohos.usbManager]{@link @ohos.usbManager:usbManager}。
 *
 * @syscap SystemCapability.USB.USBManager
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.usbManager:usbManager
 */
declare namespace usb {
  /**
   * 获取USB设备列表。
   *
   * @returns { Array<Readonly<USBDevice>> } 设备信息列表。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getDevices
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * 打开USB设备。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及device，再调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限。
   *
   * @param { USBDevice } device - USB设备信息。
   * @returns { Readonly<USBDevicePipe> } 指定的传输通道对象。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.connectDevice
   */
  function connectDevice(device: USBDevice): Readonly<USBDevicePipe>;

  /**
   * 判断是否有权访问该设备。
   *
   * @param { string } deviceName - 设备名称。
   * @returns { boolean } true表示有访问设备的权限，false表示没有访问设备的权限。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.hasRight
   */
  function hasRight(deviceName: string): boolean;

  /**
   * 请求软件包的临时权限以访问设备。使用Promise异步回调。系统应用默认拥有访问设备权限，无需调用此接口申请。
   *
   * @param { string } deviceName - 设备名称。
   * @returns { Promise<boolean> } Promise对象，返回临时权限的申请结果。返回true表示临时权限申请成功；返回false则表示临时权限申请失败。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.requestRight
   */
  function requestRight(deviceName: string): Promise<boolean>;

  /**
   * 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。
   *
   * @param { string } funcs - 字符串形式的功能列表。
   * @returns { number } 转化后的功能列表对应的数字掩码。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.usbFunctionsFromString
   */
  function usbFunctionsFromString(funcs: string): number;

  /**
   * 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。
   *
   * @param { FunctionType } funcs - 功能列表对应数字掩码。
   * @returns { string } 转化后的字符串形式的功能列表。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.usbFunctionsToString
   */
  function usbFunctionsToString(funcs: FunctionType): string;

  /**
   * 在设备模式下，设置当前的USB功能列表。
   *
   * @param { FunctionType } funcs - 功能列表对应的数字掩码。
   * @returns { Promise<boolean> } Promise对象，返回设置成功与否的结果。true表示设置成功，false表示设置失败。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.setCurrentFunctions
   */
  function setCurrentFunctions(funcs: FunctionType): Promise<boolean>;

  /**
   * 在设备模式下，获取当前的USB功能列表的数字组合掩码。
   *
   * @returns { FunctionType } 当前的USB功能列表的数字组合掩码。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getCurrentFunctions
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * 获取所有物理USB端口描述信息。
   *
   * @returns { Array<USBPort> } USB端口描述信息列表。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getPorts
   */
  function getPorts(): Array<USBPort>;

  /**
   * 获取指定的端口支持的模式列表的组合掩码。
   *
   * @param { number } portId - 端口号。
   * @returns { PortModeType } 支持的模式列表的组合掩码。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getSupportedModes
   */
  function getSupportedModes(portId: number): PortModeType;

  /**
   * 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。
   *
   * @param { number } portId - 端口号。
   * @param { PowerRoleType } powerRole - 充电的角色。
   * @param { DataRoleType } dataRole - 数据传输的角色。
   * @returns { Promise<boolean> } Promise对象，返回设置成功与否的结果。true表示设置成功，false表示设置失败。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.setPortRoles
   */
  function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<boolean>;

  /**
   * 注册通信接口。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及interfaces；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调
   * 用[usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @param { USBInterface } iface - 用于确定需要获取接口的索引。
   * @param { boolean } [force] - 可选参数，是否强制获取。默认值为false?，表示不强制获取。
   * @returns { number } 注册通信接口成功返回0；注册通信接口失败返回其他错误码。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.claimInterface
   */
  function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number;

  /**
   * 释放注册过的通信接口。
   * 
   * 需要调用[usb.claimInterface]{@link usb.claimInterface}先获取接口，才能使用此方法释放接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @param { USBInterface } iface - 用于确定需要释放接口的索引。
   * @returns { number } 释放接口成功返回0；释放接口失败返回其他错误码。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.releaseInterface
   */
  function releaseInterface(pipe: USBDevicePipe, iface: USBInterface): number;

  /**
   * 设置设备配置。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及config；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用
   * [usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @param { USBConfig } config - 用于确定需要设置的配置。
   * @returns { number } 设置设备配置成功返回0；设置设备配置失败返回其他错误码。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.setConfiguration
   */
  function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number;

  /**
   * 设置设备接口。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表以及interfaces；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调
   * 用[usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数；调用[usb.claimInterface]{@link usb.claimInterface}注册通信接
   * 口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @param { USBInterface } iface - 用于确定需要设置的接口。
   * @returns { number } 设置设备接口成功返回0；设置设备接口失败返回其他错误码。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.setInterface
   */
  function setInterface(pipe: USBDevicePipe, iface: USBInterface): number;

  /**
   * 获取原始的USB描述符。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用
   * [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @returns { Uint8Array } 返回获取的原始数据；失败返回undefined。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getRawDescriptor
   */
  function getRawDescriptor(pipe: USBDevicePipe): Uint8Array;

  /**
   * 获取文件描述符。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用
   * [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址。
   * @returns { number } 返回设备对应的文件描述符；失败返回-1。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.getFileDescriptor
   */
  function getFileDescriptor(pipe: USBDevicePipe): number;

  /**
   * 控制传输。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用
   * [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定设备。
   * @param { USBControlParams } controlparam - 控制传输参数。
   * @param { number } [timeout] - 超时时间（单位：ms），可选参数，默认为0不超时。
   * @returns { Promise<number> } Promise对象，获取传输或接收到的数据块大小。失败返回-1。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.controlTransfer
   */
  function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>;

  /**
   * 批量传输。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息列表以及endpoint；再调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；
   * 然后调用[usb.connectDevice]{@link usb.connectDevice}接口得到返回数据devicepipe之后，再次获取接口
   * [usb.claimInterface]{@link usb.claimInterface}；再调用usb.bulkTransfer接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定设备。
   * @param { USBEndpoint } endpoint - 用于确定传输的端口。
   * @param { Uint8Array } buffer - 用于写入或读取的缓冲区。
   * @param { number } [timeout] - 超时时间（单位：ms），可选参数，默认为0不超时。
   * @returns { Promise<number> } Promise对象，获取传输或接收到的数据块大小。失败返回-1。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.bulkTransfer
   */
  function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: number
  ): Promise<number>;

  /**
   * 关闭设备消息控制通道。
   * 
   * 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用
   * [usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定USB设备消息控制通道。
   * @returns { number } 关闭设备消息控制通道成功返回0；关闭设备消息控制通道失败返回其他错误码。
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.closePipe
   */
  function closePipe(pipe: USBDevicePipe): number;

  /**
   * 通过USB发送和接收数据的端口。通过[USBInterface]{@link usb.USBInterface}获取。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBEndpoint
   */
  interface USBEndpoint {
    /**
     * 端点地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.address
     */
    address: number;

    /**
     * 端点属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.attributes
     */
    attributes: number;

    /**
     * 端点间隔。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.interval
     */
    interval: number;

    /**
     * 端点最大数据包大小。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.maxPacketSize
     */
    maxPacketSize: number;

    /**
     * 端点的方向。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.direction
     */
    direction: USBRequestDirection;

    /**
     * 端点号。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.number
     */
    number: number;

    /**
     * 端点类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.type
     */
    type: number;

    /**
     * 端点所属的接口的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBEndpoint.interfaceId
     */
    interfaceId: number;
  }

  /**
   * 一个[USBConfig]{@link usb.USBConfig}中可以含有多个USBInterface，每个USBInterface提供一个功能。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBInterface
   */
  interface USBInterface {
    /**
     * 接口的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.id
     */
    id: number;

    /**
     * 接口的协议。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.protocol
     */
    protocol: number;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.clazz
     */
    clazz: number;

    /**
     * 设备子类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.subClass
     */
    subClass: number;

    /**
     * 在同一个接口中的多个描述符中进行切换设置。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.alternateSetting
     */
    alternateSetting: number;

    /**
     * 接口名称。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.name
     */
    name: string;

    /**
     * 当前接口所包含的端点。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBInterface.endpoints
     */
    endpoints: Array<USBEndpoint>;
  }

  /**
   * USB配置，一个[USBDevice]{@link usb.USBDevice}中可以含有多个配置。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBConfiguration
   */
  interface USBConfig {
    /**
     * 配置的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.id
     */
    id: number;

    /**
     * 配置的属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.attributes
     */
    attributes: number;

    /**
     * 最大功耗，以毫安为单位。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.maxPower
     */
    maxPower: number;

    /**
     * 配置的名称，可以为空。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.name
     */
    name: string;

    /**
     * 检查当前配置是否支持远程唤醒。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.isRemoteWakeup
     */
    isRemoteWakeup: boolean;

    /**
     * 检查当前配置是否支持独立电源。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.isSelfPowered
     */
    isSelfPowered: boolean;

    /**
     * 配置支持的接口属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBConfiguration.interfaces
     */
    interfaces: Array<USBInterface>;
  }

  /**
   * USB设备信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBDevice
   */
  interface USBDevice {
    /**
     * 总线地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.busNum
     */
    busNum: number;

    /**
     * 设备地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.devAddress
     */
    devAddress: number;

    /**
     * 序列号。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.serial
     */
    serial: string;

    /**
     * 设备名字。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.name
     */
    name: string;

    /**
     * 产商信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.manufacturerName
     */
    manufacturerName: string;

    /**
     * 产品信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.productName
     */
    productName: string;

    /**
     * 版本。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.version
     */
    version: string;

    /**
     * 厂商ID。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.vendorId
     */
    vendorId: number;

    /**
     * 产品ID。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.productId
     */
    productId: number;

    /**
     * 设备类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.clazz
     */
    clazz: number;

    /**
     * 设备子类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.subClass
     */
    subClass: number;

    /**
     * 设备协议码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.protocol
     */
    protocol: number;

    /**
     * 设备配置描述符信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevice.configs
     */
    configs: Array<USBConfig>;
  }

  /**
   * USB设备消息传输通道，用于确定设备。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBDevicePipe
   */
  interface USBDevicePipe {
    /**
     * 总线地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevicePipe.busNum
     */
    busNum: number;

    /**
     * 设备地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBDevicePipe.devAddress
     */
    devAddress: number;
  }

  /**
   * 电源角色类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.PowerRoleType
   */
  export enum PowerRoleType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PowerRoleType.NONE
     */
    NONE = 0,

    /**
     * 外部供电。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PowerRoleType.SOURCE
     */
    SOURCE = 1,

    /**
     * 内部供电。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PowerRoleType.SINK
     */
    SINK = 2
  }

  /**
   * 数据角色类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.DataRoleType
   */
  export enum DataRoleType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.DataRoleType.NONE
     */
    NONE = 0,

    /**
     * 主设备角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.DataRoleType.HOST
     */
    HOST = 1,

    /**
     * 从设备角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.DataRoleType.DEVICE
     */
    DEVICE = 2
  }

  /**
   * USB端口模式类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.PortModeType
   */
  export enum PortModeType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PortModeType.NONE
     */
    NONE = 0,

    /**
     * 数据上行，需要外部供电。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PortModeType.UFP
     */
    UFP = 1,

    /**
     * 数据下行，对外提供电源。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PortModeType.DFP
     */
    DFP = 2,

    /**
     * 既可以做DFP(Host)，也可以做UFP(Device)，当前不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PortModeType.DRP
     */
    DRP = 3,

    /**
     * 当前不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.PortModeType.NUM_MODES
     */
    NUM_MODES = 4
  }

  /**
   * USB设备端口角色信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBPortStatus
   */
  interface USBPortStatus {
    /**
     * 当前的USB模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPortStatus.currentMode
     */
    currentMode: number;

    /**
     * 当前设备充电模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPortStatus.currentPowerRole
     */
    currentPowerRole: number;

    /**
     * 当前设备数据传输模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPortStatus.currentDataRole
     */
    currentDataRole: number;
  }

  /**
   * USB设备端口。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBPort
   */
  interface USBPort {
    /**
     * USB端口唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPort.id
     */
    id: number;

    /**
     * USB端口所支持的模式的数字组合掩码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPort.supportedModes
     */
    supportedModes: PortModeType;

    /**
     * USB端口角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBPort.status
     */
    status: USBPortStatus;
  }

  /**
   * 控制传输参数。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBControlParams
   */
  interface USBControlParams {
    /**
     * 请求类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.request
     */
    request: number;

    /**
     * 请求目标类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.target
     */
    target: USBRequestTargetType;

    /**
     * 请求控制类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.reqType
     */
    reqType: USBControlRequestType;

    /**
     * 请求参数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.value
     */
    value: number;

    /**
     * 请求参数value对应的索引值。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.index
     */
    index: number;

    /**
     * 用于写入或读取的缓冲区。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlParams.data
     */
    data: Uint8Array;
  }

  /**
   * 请求目标类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBRequestTargetType
   */
  export enum USBRequestTargetType {
    /**
     * 设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestTargetType.USB_REQUEST_TARGET_DEVICE
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * 接口。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestTargetType.USB_REQUEST_TARGET_INTERFACE
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * 端点。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestTargetType.USB_REQUEST_TARGET_ENDPOINT
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * 其他。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestTargetType.USB_REQUEST_TARGET_OTHER
     */
    USB_REQUEST_TARGET_OTHER = 3
  }

  /**
   * 控制请求类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBControlRequestType
   */
  export enum USBControlRequestType {
    /**
     * 标准。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlRequestType.USB_REQUEST_TYPE_STANDARD
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * 类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlRequestType.USB_REQUEST_TYPE_CLASS
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * 厂商。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBControlRequestType.USB_REQUEST_TYPE_VENDOR
     */
    USB_REQUEST_TYPE_VENDOR = 2
  }

  /**
   * 请求方向。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.USBRequestDirection
   */
  export enum USBRequestDirection {
    /**
     * 写数据，主设备往从设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestDirection.USB_REQUEST_DIR_TO_DEVICE
     */
    USB_REQUEST_DIR_TO_DEVICE = 0,

    /**
     * 读数据，从设备往主设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.USBRequestDirection.USB_REQUEST_DIR_FROM_DEVICE
     */
    USB_REQUEST_DIR_FROM_DEVICE = 0x80
  }

  /**
   * USB设备侧功能。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.usbManager:usbManager.FunctionType
   */
  export enum FunctionType {
    /**
     * 没有功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.NONE
     */
    NONE = 0,

    /**
     * acm功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.ACM
     */
    ACM = 1,

    /**
     * ecm功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.ECM
     */
    ECM = 2,

    /**
     * hdc功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.HDC
     */
    HDC = 4,

    /**
     * 媒体传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.MTP
     */
    MTP = 8,

    /**
     * 图片传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.PTP
     */
    PTP = 16,

    /**
     * 网络共享。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.RNDIS
     */
    RNDIS = 32,

    /**
     * midi功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.MIDI
     */
    MIDI = 64,

    /**
     * 音频功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.AUDIO_SOURCE
     */
    AUDIO_SOURCE = 128,

    /**
     * ncm传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.usbManager:usbManager.FunctionType.NCM
     */
    NCM = 256
  }
}

export default usb;