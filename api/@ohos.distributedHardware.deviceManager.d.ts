/*
 * Copyright (c) 2020-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Providers interfaces to create a {@link deviceManager} instances.
 *
 * @namespace deviceManager
 * @syscap SystemCapability.DistributedHardware.DeviceManager
 * @since 7
 */
declare namespace deviceManager {
  /**
   * DeviceInfo
   *
   * @interface DeviceInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  interface DeviceInfo {
    /**
     * DeviceId ID.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    deviceId: string;

    /**
     * Device name of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    deviceName: string;

    /**
     * Device type of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    deviceType: DeviceType;

    /**
     * NetworkId of the device.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    networkId: string;

    /**
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     * The distance of discovered device, in centimeter(cm).
     */
    range: number;

    /**
     * Indicates the device's trusted type
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    authForm: AuthForm;
  }

  /**
   * Device trusted type definitions
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 10
   */
  enum AuthForm {
    /**
     * Indicates invalid trusted device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    INVALID_TYPE = -1,

    /**
     * Indicates peer to peer trusted device type without account.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    PEER_TO_PEER = 0,

    /**
     * Indicates identical account trusted device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    IDENTICAL_ACCOUNT = 1,

    /**
     * Indicates across account trusted device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    ACROSS_ACCOUNT = 2
  }

  /**
   * Device Type definitions
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum DeviceType {
    /**
     * Indicates an unknown device type.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    UNKNOWN_TYPE = 0,

    /**
     * Indicates a speaker.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    SPEAKER = 0x0A,

    /**
     * Indicates a smartphone.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    PHONE = 0x0E,

    /**
     * Indicates a tablet.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    TABLET = 0x11,

    /**
     * Indicates a smart watch.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    WEARABLE = 0x6D,

    /**
     * Indicates a car.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    CAR = 0x83,

    /**
     * Indicates a smart TV.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    TV = 0x9C
  }

  /**
   * Device state change event definition
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum DeviceStateChangeAction {
    /**
     * Device online action, which indicates the device is physically online
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    ONLINE = 0,

    /**
     * Device ready action, which indicates the information between devices has been synchronized in the Distributed Data Service (DDS) module,
     * and the device is ready for running distributed services
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    READY = 1,

    /**
     * Device offline action, which Indicates the device is physically offline
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    OFFLINE = 2,

    /**
     * Device change action
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    CHANGE = 3
  }

  /**
   * Service subscribe info for device discover
   *
   * @interface SubscribeInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  interface SubscribeInfo {
    /**
     * Service subscribe ID, the value is in scope [0, 65535], should be unique for each discover process
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    subscribeId: number;

    /**
     * Discovery mode for service subscription.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    mode: DiscoverMode;

    /**
     * Service subscription medium.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    medium: ExchangeMedium;

    /**
     * Service subscription frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    freq: ExchangeFreq;

    /**
     * only find the device with the same account.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    isSameAccount: boolean;

    /**
     * find the sleeping devices.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    isWakeRemote: boolean;

    /**
     * Subscribe capability.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    capability: SubscribeCap;
  }

  /**
   * Service publish info for device discover
   *
   * @interface PublishInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since 9
   */
  interface PublishInfo {
    /**
     * Service publish ID, the value is in scope [0, 65535], should be unique for each publish process
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    publishId: number;

    /**
     * Discovery mode for service subscription.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    mode: DiscoverMode;

    /**
     * Service subscription frequency.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    freq: ExchangeFreq;

    /**
     *  Whether the device should be ranged by discoverer.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    ranging: boolean;
  }

  /**
   * device discover mode
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum DiscoverMode {
    /**
     * when using this key at client side, it means discovering for available nearby devices by
     * calling @startDeviceDiscovery function, while using this key at server side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    DISCOVER_MODE_PASSIVE = 0x55,

    /**
     * when using this key at server side, it means discovering for available nearby devices by
     * calling @startDeviceDiscovery function, while using this key at client side indicating that
     * a device publication or advertisement by calling @publishDeviceDiscovery.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    DISCOVER_MODE_ACTIVE = 0xAA
  }

  /**
   * device discover medium
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum ExchangeMedium {
    /**
     * Automatic medium selection
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    AUTO = 0,

    /**
     * Bluetooth
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    BLE = 1,

    /**
     * Wi-Fi
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    COAP = 2,

    /**
     * USB
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    USB = 3
  }

  /**
   * device discover freq
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum ExchangeFreq {
    /**
     * Low
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    LOW = 0,

    /**
     * Medium
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    MID = 1,

    /**
     * High
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    HIGH = 2,

    /**
     * Super-high
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    SUPER_HIGH = 3
  }

  /**
   * device discover capability
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  enum SubscribeCap {
    /**
     * ddmpCapability, will be discarded later. Currently, it will be converted to OSD capability inner.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    SUBSCRIBE_CAPABILITY_DDMP = 0,

    /**
     * One Super Device Capability
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    SUBSCRIBE_CAPABILITY_OSD = 1
  }

  /**
   * Device Authentication param
   *
   * @interface AuthParam
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since
   */
  interface AuthParam {
    /**
     * Authentication type, 1 for pin code.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since
     */
    authType: number;

    /**
     * Authentication extra infos.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Device auth info.
   *
   * @interface AuthInfo
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications
   * @since
   */
  interface AuthInfo {
    /**
     * Authentication type, 1 for pin code.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since
     */
    authType: number;

    /**
     * the token used for this authentication.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since
     */
    token: number;

    /**
     * Authentication extra infos.
     *
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications
     * @since
     */
    extraInfo: { [key: string]: any };
  }

  /**
   * Creates a {@code DeviceManager} instance.
   * <p>To manage devices, you must first call this method to obtain a {@code DeviceManager} instance and then
   * use this instance to call other device management methods.
   *
   * @param { string } bundleName Indicates the bundle name of the application.
   * @param { AsyncCallback<DeviceManager> } callback Indicates the callback to be invoked upon {@code DeviceManager} instance creation.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @systemapi this method can be used only by system applications.
   * @since
   */
  function createDeviceManager(bundleName: string, callback: AsyncCallback<DeviceManager>): void;

  /**
   * Provides methods for managing devices.
   *
   * @interface DeviceManager
   * @syscap SystemCapability.DistributedHardware.DeviceManager
   * @since
   */
  interface DeviceManager {
    /**
     * Releases the {@code DeviceManager} instance after the methods for device management are no longer used.
     *
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    release(): void;

    /**
     * Obtains a list of trusted devices.
     *
     * @returns { Array<DeviceInfo> } returns a list of trusted devices.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    getTrustedDeviceListSync(): Array<DeviceInfo>;

    /**
     * Obtains a list of trusted devices.
     *
     * @param { AsyncCallback<Array<DeviceInfo>> } callback Indicates the callback to be invoked upon getTrustedDeviceList
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    getTrustedDeviceList(callback: AsyncCallback<Array<DeviceInfo>>): void;

    /**
     * Obtains a list of trusted devices.
     *
     * @returns { Promise<Array<DeviceInfo>> } Returns a list of trusted devices.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    getTrustedDeviceList(): Promise<Array<DeviceInfo>>;

    /**
     * Obtains local device info
     *
     * @returns { DeviceInfo } Returns local device info.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    getLocalDeviceInfoSync(): DeviceInfo;

    /**
     * Obtains local device info
     *
     * @param { AsyncCallback<DeviceInfo> } callback Indicates the callback to be invoked upon getLocalDeviceInfo
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    getLocalDeviceInfo(callback: AsyncCallback<DeviceInfo>): void;

    /**
     * Obtains local device info
     *
     * @returns { Promise<DeviceInfo> } Returns local device info.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    getLocalDeviceInfo(): Promise<DeviceInfo>;

    /**
     * Obtains device info
     *
     * @param { string } networkId - device network id.
     * @param { AsyncCallback<DeviceInfo> } callback - Indicates the callback to be invoked upon getDeviceInfo.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    getDeviceInfo(networkId: string, callback: AsyncCallback<DeviceInfo>): void;

    /**
     * Obtains device info
     *
     * @param { string } networkId - device network id.
     * @returns { Promise<DeviceInfo> } Returns device info.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    getDeviceInfo(networkId: string): Promise<DeviceInfo>;

    /**
     * Start to discover device.
     *
     * @param { SubscribeInfo } subscribeInfo subscribe info to discovery device
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600104 - Discovery invalid.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo): void;

    /**
     * Start to discover device.
     *
     * @param { SubscribeInfo } subscribeInfo subscribe info to discovery device
     * @param { string } filterOptions filterOptions to filter discovery device
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600104 - Discovery invalid.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    startDeviceDiscovery(subscribeInfo: SubscribeInfo, filterOptions?: string): void;

    /**
     * Stop to discover device.
     *
     * @param { number } subscribeId Service subscribe ID
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    stopDeviceDiscovery(subscribeId: number): void;

    /**
     * Publish discover device.
     *
     * @param { PublishInfo } publishInfo publish info to Publish discovery device
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600105 - Publish invalid.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    publishDeviceDiscovery(publishInfo: PublishInfo): void;

    /**
     * UnPublish discover device.
     *
     * @param { number } publishId Service publish ID, identify a publish operation, should be a unique id in package range
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    unPublishDeviceDiscovery(publishId: number): void;

    /**
     * Authenticate the specified device.
     *
     * @param { DeviceInfo } deviceInfo deviceInfo of device to authenticate
     * @param { AuthParam } authParam authParam of device to authenticate
     * @param { AsyncCallback<{ deviceId: string, pinToken?: number }> } callback Indicates the callback to be invoked upon authenticateDevice
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    authenticateDevice(
      deviceInfo: DeviceInfo,
      authParam: AuthParam,
      callback: AsyncCallback<{ deviceId: string, pinToken?: number }>
    ): void;

    /**
     * unAuthenticate the specified device.
     *
     * @param { DeviceInfo } deviceInfo deviceInfo of device to unAuthenticate
     * @throws { BusinessError } 401 - Input parameter error.
     * @throws { BusinessError } 201 - Permission verify failed.
     * @throws { BusinessError } 11600101 - Failed to execute the function.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 8
     */
    unAuthenticateDevice(deviceInfo: DeviceInfo): void;

    /**
     * verify auth info, such as pin code.
     *
     * @param { AuthInfo } authInfo device auth info o verify
     * @param { AsyncCallback<{ deviceId: string, level: number }> } callback Indicates the callback to be invoked upon verifyAuthInfo
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    verifyAuthInfo(authInfo: AuthInfo, callback: AsyncCallback<{ deviceId: string, level: number }>): void;

    /**
     * Set user Operation from devicemanager Sea, this interface can only be used by devicemanager Sea.
     *
     * @param { number } operateAction User Operation Actions.
     * @param { string } params Indicates the input param of the user.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    setUserOperation(operateAction: number, params: string): void;

    /**
     * Request credential information.
     *
     * @param { string } requestInfo - Request credential params, the params is json string, it includes version and userId.
     * @param { AsyncCallback<{ registerInfo: string }> } callback Indicates the callback to be invoked upon requestCredential
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    requestCredentialRegisterInfo(requestInfo: string, callback: AsyncCallback<{ registerInfo: string }>): void;

    /**
     * Import credential information.
     *
     * @param { string } credentialInfo - Import credential params, the params is json string, it includes processType, authType,
     * userId, deviceId, version, devicePk and credentialData, the credentialData is array, each array element
     * include credentialType, credentialId, serverPk, pkInfoSignature, pkInfo, authCode, peerDeviceId.
     * @param { AsyncCallback<{ resultInfo: string }> } callback Indicates the callback to be invoked upon importCredential.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    importCredential(credentialInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * delete credential information.
     *
     * @param { string } queryInfo - delete credential params. the params is json string, it includes processType, authType, userId.
     * @param { AsyncCallback<{ resultInfo: string }> } callback Indicates the callback to be invoked upon deleteCredential
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 10
     */
    deleteCredential(queryInfo: string, callback: AsyncCallback<{ resultInfo: string }>): void;

    /**
     * Register a callback from deviceManager service so that the devicemanager ui can be notified when ui statue
     * changes.
     *
     * @param { 'uiStateChange' } type Ui state to unregister.
     * @param { Callback<{ param: string }> } callback Indicates the devicemanager ui state to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    on(type: 'uiStateChange', callback: Callback<{ param: string }>): void;

    /**
     * Unregister uiStatueChange, this interface can only be used by devicemanager ui.
     *ui state change
     *
     * @param { 'uiStateChange' } type Ui state to unregister.
     * @param { Callback<{ param: string }> } callback Indicates the devicemanager ui state to unregister.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    off(type: 'uiStateChange', callback?: Callback<{ param: string }>): void;

    /**
     * Register a device state callback so that the application can be notified upon device state changes based on
     * the application bundle name.
     *
     * @param { 'deviceStateChange' } type Device status change.
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback
     *          Indicates the device state callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * UnRegister device state callback based on the application bundle name.
     *
     * @param { 'deviceStateChange' } type Device status change.
     * @param { Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }> } callback Indicates the device state callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    off(type: 'deviceStateChange', callback?: Callback<{ action: DeviceStateChangeAction, device: DeviceInfo }>): void;

    /**
     * Register a device found callback so that the application can be notified when the device was found
     *
     * @param { 'deviceFound' } type Successfully discovered device.
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback Indicates the device found callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    on(type: 'deviceFound', callback: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * UnRegister a device found callback so that the application can be notified when the device was found
     *
     * @param { 'deviceFound' } type Successfully discovered device.
     * @param { Callback<{ subscribeId: number, device: DeviceInfo }> } callback Indicates the device found callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    off(type: 'deviceFound', callback?: Callback<{ subscribeId: number, device: DeviceInfo }>): void;

    /**
     * Register a device found result callback so that the application can be notified when the device discover was failed
     *
     * @param { 'discoverFail' } type Discovery Device Failure.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback Indicates the device found result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    on(type: 'discoverFail', callback: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * UnRegister a device found result callback so that the application can be notified when the device discover was failed
     *
     * @param { 'discoverFail' } type Discovery Device Failure.
     * @param { Callback<{ subscribeId: number, reason: number }> } callback Indicates the device found result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    off(type: 'discoverFail', callback?: Callback<{ subscribeId: number, reason: number }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish success
     *
     * @param { 'publishSuccess' } type Successfully published device.
     * @param { Callback<{ publishId: number }> } callback Indicates the device publish result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    on(type: 'publishSuccess', callback: Callback<{ publishId: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @param { 'publishSuccess' } type Successfully published device.
     * @param { Callback<{ publishId: number }> } callback Indicates the device publish result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    off(type: 'publishSuccess', callback?: Callback<{ publishId: number }>): void;

    /**
     * Register a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @param { 'publishFail' } type Failed to publish device.
     * @param { Callback<{ publishId: number; reason: number }> } callback Indicates the device publish result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    on(type: 'publishFail', callback: Callback<{ publishId: number; reason: number }>): void;

    /**
     * UnRegister a device publish result callback so that the application can be notified when the device publish was failed
     *
     * @param { 'publishFail' } type Failed to publish device.
     * @param { Callback<{ publishId: number; reason: number }> } callback Indicates the device publish result callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since 9
     */
    off(type: 'publishFail', callback?: Callback<{ publishId: number; reason: number }>): void;

    /**
     * Register a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @param { 'serviceDie' } type Service death.
     * @param { () => void } callback Indicates the service error callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    on(type: 'serviceDie', callback: () => void): void;

    /**
     * UnRegister a serviceError callback so that the application can be notified when devicemanager service died
     *
     * @param { 'serviceDie' } type Service death.
     * @param { () => void } callback Indicates the service error callback to register.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.DistributedHardware.DeviceManager
     * @systemapi this method can be used only by system applications.
     * @since
     */
    off(type: 'serviceDie', callback?: () => void): void;
  }
}

export default deviceManager;
