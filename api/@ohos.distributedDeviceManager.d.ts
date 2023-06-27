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

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';
/**
 * This file provides interfaces for discovering devices, binding a device,
 * querying device information, and listening for device status change.
 * @since 10
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 */
declare namespace distributedDeviceManager {
  
  /**
   * Basic description information of a distributed device.
   * @interface DeviceBasicInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10
   */
  interface DeviceBasicInfo {
    /**
     * Device id.
     * @since 10
     */
    deviceId: string;

    /**
     * Device name.
     * @since 10
     */
    deviceName: string;

    /**
     * Device type.
     * @since 10
     */
    deviceType: number;

    /**
     * Device network id.
     * @since 10
     */
    networkId?: string;
  }

  /**
   * Device status of the distributed device.
   * @enum { DeviceStatusChange }
   * @since 10
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   */
  enum DeviceStatusChange {
    /**
     * Unknown status.
     * @since 10
     */
    UNKNOWN = 0,

    /**
     * Available status.
     * @since 10
     */
    AVAILABLE = 1,

    /**
     * Unavailable status.
     * @since 10
     */
    UNAVAILABLE = 2,
  }

  /**
   * Service publish information for device discover
   * @interface PublishInfo
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  interface PublishInfo {
    /**
     * Service publish id, the value is in scope [0, 65535], should be unique for each publish process
     */
    publishId: number;

    /**
     * Discovery mode for service subscription.
     */
    mode: DiscoverMode;

    /**
     * Service subscription frequency.
     */
    freq: ExchangeFreq;

    /**
     *  Whether the device should be ranged by discoverer.
     */
    ranging: boolean;
  }

  /**
   * Device discover mode
   * @enum { DiscoverMode }
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  enum DiscoverMode {
    /**
     * When using this key at client side, it means discovering for available nearby devices by 
     * calling @startDeviceDiscovery function, while using this key at server side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     */
    DISCOVER_MODE_PASSIVE = 0x55,

    /**
     * When using this key at server side, it means discovering for available nearby devices by 
     * calling @startDeviceDiscovery function, while using this key at client side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     */
    DISCOVER_MODE_ACTIVE = 0xAA
  }

  /**
   * Device discover frequency
   * @enum { ExchangeFreq }
   * @since 10
   * @systemapi This method can be used only by system applications.
   */
  enum ExchangeFreq {
    /**
     * Low
     */
    LOW = 0,

    /**
     * Medium
     */
    MID = 1,

    /**
     * High
     */
    HIGH = 2,

    /**
     * Super-high
     */
    SUPER_HIGH = 3
  }

  /**
   * Device bind parameter. Function input of the interface {@link bindDevice}.
   * @interface BindParam
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since 10
   */
  interface BindParam {
    /**
     * Bind type, 1 for pin code.
     * @since 10
     */
    bindType: number;

    /**
     * Extra information.
     * @since 10
     */
    extraInfo: { [key: string]: Object };
  }

  /**
   * Device authenticate information.
   * @interface AuthInfo
   * @since 10
   * @systemapi This method can be used only by system applications
   */
  interface AuthInfo {
    /**
     * Authentication type, 1 for pin code.
     */
    authType: number;

    /**
     * The token used for this authentication.
     */
    token: number;

    /**
     * Authentication extra information.
     */
    extraInfo: { [key: string]: Object };
  }

  /**
   * Creates an {@code DeviceManager} instance.
   *
   * <p>To manage devices, you must first call this method to obtain a {@code DeviceManager} instance and then
   * use this instance to call other device management methods.
   *
   * @since 10
   * @param bundleName Indicates the bundle name of the application.
   * @param callback Indicates the callback to be invoked upon {@code DeviceManager} instance creation.
   * @throws { BusinessError } 401 - Input parameter error.
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * Provides methods for manage the distributed devices.
   */
  interface DeviceManager {
    /**
     * Releases the {@code DeviceManager} instance that is no longer used.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     */
    releaseDeviceManager(): void;

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceListSync(): Array<DeviceBasicInfo>;

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param callback Indicates the callback to be invoked upon getAvailableDeviceList
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceList(callback: AsyncCallback<Array<DeviceBasicInfo>>): void;

    /**
     * Get a list of available devices. This interface query all authorized and connectable devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns a list of available devices.
     */
    getAvailableDeviceList(): Promise<Array<DeviceBasicInfo>>;

    /**
     * Get the network id of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns local device network id.
     */
    getLocalDeviceNetworkIdSync(): string;

    /**
     * Get the device name of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns local device name.
     */
    getLocalDeviceNameSync(): string;

    /**
     * Get the device type of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns local device type.
     */
    getLocalDeviceTypeSync(): number;

    /**
     * Get the device id of the local device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns local device type.
     */
    getLocalDeviceIdSync(): string;

    /**
     * Get the device name by network id.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { string } networkId - Device network id.
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns device name.
     */
    getDeviceNameSync(networkId: string): string;

    /**
     * Get the device type by network id.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { string } networkId - Device network id.
     * @throws { BusinessError } 201 - User permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @returns Returns device type.
     */
    getDeviceTypeSync(networkId: string): number;

    /**
     * Start to discover device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param subscribeId subscribe id to discovery device
     * @param filterOptions filterOptions to filter discovery device
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600104 - Discovery invalid.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     */
    startDeviceDiscovery(subscribeId: number, filterOptions?: string): void;

    /**
     * Stop discovering device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param subscribeId service subscribe id
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     */
    stopDeviceDiscovery(subscribeId: number): void;

    /**
     * Bind the specified device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param deviceId id of device to bind
     * @param bindParam parameters of device to bind
     * @param callback indicates the callback to be invoked upon bindDevice
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @throws { BusinessError } 11600103 - Bind invalid.
     */
    bindDevice(deviceId: string, bindParam: BindParam, callback: AsyncCallback<{deviceId: string}>): void;

    /**
     * Unbind the specified device.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param deviceId id of device to unbind
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     */
    unbindDevice(deviceId: string): void;

    /**
     * Publish discover device.
     * 
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param publishInfo publish information to Publish discovery device
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 11600105 - Publish invalid.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    publishDeviceDiscovery(publishInfo: PublishInfo): void;

    /**
     * UnPublish discover device.
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param publishId service publish id, identify a publish operation, should be a unique id in package range
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    unPublishDeviceDiscovery(publishId: number): void;

    /**
     * Verify authentication information, such as pin code.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @param authInfo device authentication information to verify
     * @param callback indicates the callback to be invoked upon verifyAuthInfo
     * @throws { BusinessError } 201 - Permission verify failed
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @systemapi this method can be used only by system applications.
     */
    verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void;

    /**
     * Set user Operation from devicemanager sea, this interface can only be used by devicemanager Sea.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param operateAction user Operation Actions.
     * @param params indicates the input param of the user.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    setUserOperation(operateAction: number, params: string): void;

    /**
     * Request credential information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { string } requestInfo - Request credential params, the params is json string, it includes version and userId.
     * @param { AsyncCallback<{registerInfo: string}> } callback - Indicates the callback to be invoked upon requestCredential
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns device credential register information, it include deviceId, devicePk, useId and version.
     * @systemapi this method can be used only by system applications.
     */
    requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void;

    /**
     * Import credential information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { string } credentialInfo - Import credential params, the params is json string, it includes processType, authType,
     * userId, deviceId, version, devicePk and credentialData, the credentialData is array, each array element
     * include credentialType, credentialId, serverPk, pkInfoSignature, pkInfo, authCode, peerDeviceId.
     * @param { AsyncCallback<{resultInfo: string}> } callback - Indicates the callback to be invoked upon importCredential.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns the groupId to which the device belongs.
     * @systemapi this method can be used only by system applications.
     */
    importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Delete credential information.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { string } queryInfo - Delete credential params. the params is json string, it includes processType, authType, userId.
     * @param { AsyncCallback<{resultInfo: string}> } callback - Indicates the callback to be invoked upon deleteCredential
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 202 - The caller is not a system application.
     * @throws { BusinessError } 401 - Input parameter error.
     * @returns Returns the groupId to which the device belongs.
     * @systemapi this method can be used only by system applications.
     */
    deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Register a device status callback so that the application can be notified upon device status changes based on
     * the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'deviceStatusChange' } type Device status change.
     * @param { Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }> } callback
     *          Indicates the device status callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    on(type: 'deviceStatusChange', callback: Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }>): void;

    /**
     * UnRegister device status callback based on the application bundle name.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'deviceStatusChange' } type Device status change.
     * @param { Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }> } callback
     *          Indicates the device status callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    off(type: 'deviceStatusChange', callback?: Callback<{ action: DeviceStatusChange, device: DeviceBasicInfo }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'discoverSuccess' } type Successfully discovered device.
     * @param { Callback<{ subscribeId: number, device: DeviceBasicInfo }> } callback
     *          Indicates the device discovery callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    on(type: 'discoverSuccess', callback: Callback<{ subscribeId: number, device: DeviceBasicInfo }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'discoverSuccess' } type Successfully discovered device.
     * @param { Callback<{ subscribeId: number, device: DeviceBasicInfo }> } callback
     *          Indicates the device discovery callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    off(type: 'discoverSuccess', callback?: Callback<{ subscribeId: number, device: DeviceBasicInfo }>): void;

    /**
     * Register a device name change callback so that the application can be notified when discovery success.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'deviceNameChange' } type Changed device name.
     * @param { Callback<{ deviceName: string }> } callback Indicates the device name change callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    on(type: 'deviceNameChange', callback: Callback<{ deviceName: string }>): void;

    /**
     * UnRegister the device name change result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'deviceNameChange' } type Changed device name.
     * @param { Callback<{ deviceName: string }> } callback Indicates the device name change callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    off(type: 'deviceNameChange', callback?: Callback<{ deviceName: string }>): void;

    /**
     * Register a device discovery result callback so that the application can be notified when discover failed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'discoverFail' } type Discovery Device Failure.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback
     *          Indicates the device found result callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * UnRegister the device discovery result callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'discoverFail' } type Discovery Device Failure.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback
     *          Indicates the device found result callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'serviceDie' } type Service death.
     * @param { function } callback Indicates the service error callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * UnRegister the service error callback.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @since 10
     * @param { 'serviceDie' } type Service death.
     * @param { function } callback Indicates the service error callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     */
    off(type: 'serviceDie', callback?: () => void): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when ui statue
     * changes.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'uiStateChange' } type Ui state to unregister.
     * @param { Callback<{ param: string }> } callback Indicates the devicemanager ui state to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'uiStateChange', callback: Callback<{ param: string }>): void;

    /**
     * Unregister uiStatueChange, this interface can only be used by devicemanager ui.
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'uiStateChange' } type Ui state to unregister.
     * @param { Callback<{ param: string }> } callback Indicates the devicemanager ui state to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish success
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'publishSuccess' } type Successfully published device.
     * @param { Callback<{ publishId: number }> } callback Indicates the device publish result callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'publishSuccess' } type Successfully published device.
     * @param { Callback<{ publishId: number }> } callback Indicates the device publish result callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'publishFail' } type Failed to publish device.
     * @param { Callback<{ publishId: number, reason: number }> } callback
     *          Indicates the device publish result callback to register.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    on(type: 'publishFail', callback: Callback<{ publishId: number, reason: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @permission ohos.permission.ACCESS_SERVICE_DM
     * @since 10
     * @param { 'publishFail' } type Failed to publish device.
     * @param { Callback<{ publishId: number, reason: number }> } callback
     *          Indicates the device publish result callback to unregister.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 401 - Input parameter error.
     * @systemapi this method can be used only by system applications.
     */
    off(type: 'publishFail', callback?: Callback<{ publishId: number, reason: number }>): void;
  }
}

export default distributedDeviceManager;
