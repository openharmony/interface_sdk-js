/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';
import { Callback } from './@ohos.base';
import type common from './@ohos.bluetooth.common';

/**
 * Provides methods to accessing bluetooth HID(Human Interface Device)-related capabilities.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace hid {
  /**
   * Base interface of profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * Bluetooth device address.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * create the instance of hid profile.
   *
   * @returns { HidHostProfile } Returns the instance of hid profile.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function createHidHostProfile(): HidHostProfile;

  /**
   * Manager hid host profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface HidHostProfile extends BaseProfile {
    /**
     * Initiate an HID connection to a remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    connect(deviceId: string): void;

    /**
     * Disconnect the HID connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    disconnect(deviceId: string): void;
  }

  /**
   * Creates the instance of HID device profile.
   *
   * @returns { HidDeviceProfile } Returns the instance of HID device profile.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  function createHidDeviceProfile(): HidDeviceProfile;

  /**
   * Manager HID device profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface HidDeviceProfile extends BaseProfile {
    /**
     * Application registers the HID Device capability.
     * The application will only successfully call this API when it's in the foreground.
     * If the application that has registered the HID Device capability is switched to the background, the system
     * automatically cancels the HID Device capability registration. The application can listen to the appStatusChange
     * callback to detect the status change.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { HidDeviceSdp } sdp - Describe the hid device capability fields of this endpoint being queried.
     * @param { HidDeviceQos } inQos - Describe the In Quality of Service (QoS) settings
     *     for the Bluetooth HID device application.
     * @param { HidDeviceQos } outQos - Describe the Out Quality of Service (QoS) settings
     *     for the Bluetooth HID device application.
     * @param { Callback<boolean> } callback - Callback for HID device registration status changes,
     *     {@code true} indicates register success or {@code false} otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903050 - Application is not in the foreground.
     * @throws { BusinessError } 2903051 - Any app has been registered.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    registerHidDevice(sdp: HidDeviceSdp, inQos: HidDeviceQos, outQos: HidDeviceQos, callback: Callback<boolean>): void;

    /**
     * Application unregisters the HID Device capability.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    unregisterHidDevice(): void;

    /**
     * Initiate an HID connection to a remote HID host device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BluetoothAddress } deviceId -  Indicates the address of the remote Bluetooth device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Remote Device profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    connect(deviceId: BluetoothAddress): void;

    /**
     * Disconnect the HID connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    disconnect(): void;

    /**
     * Send report to a remote HID host device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } id  - Report ID defined in the descriptor.
     * @param { Uint8Array } reportData  - Report data sent to the host device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    sendReport(id: int, reportData: Uint8Array): void;

    /**
     * Reply report to a remote HID host device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ReportType } type - Report type for reply
     * @param { int } id - Report Id, as defined in descriptor.
     *     It can be 0 in case Report Id are not defined in descriptor.
     * @param { Uint8Array } reportData - Report Data send to host.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    replyReport(type: ReportType, id: int, reportData: Uint8Array): void;

    /**
     * Report error to a remote HID host device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ErrorReason } error - error reason to send.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    reportError(error: ErrorReason): void;

    /**
     * Subscribe to the event reported when GET_REPORT message is received from the remote.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<GetReportData> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onGetReport(callback: Callback<GetReportData>): void;

    /**
     * Unsubscribe from the event that a GET_REPORT message is received from the peer device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<GetReportData> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offGetReport(callback?: Callback<GetReportData>): void;

    /**
     * Subscribe to the event reported when SET_REPORT message is received from the remote.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SetReportData> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onSetReport(callback: Callback<SetReportData>): void;

    /**
     * Unsubscribe from the event that a SET_REPORT message is received from the peer device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SetReportData> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offSetReport(callback?: Callback<SetReportData>): void;

    /**
     * Subscribe to the event reported when InterruptData is received from the remote.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<InterruptData> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onInterruptDataReceived(callback: Callback<InterruptData>): void;

    /**
     * Unsubscribe from the event reported when InterruptData is received from the remote.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<InterruptData> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offInterruptDataReceived(callback?: Callback<InterruptData>): void;

    /**
     * Subscribe to the event reported when SET_PROTOCOL message is received from the remote.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<ProtocolData> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onSetProtocol(callback: Callback<ProtocolData>): void;

    /**
     * Unsubscribe from the event that a SET_PROTOCOL message is received from the peer device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<ProtocolData> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offSetProtocol(callback?: Callback<ProtocolData>): void;

    /**
     * Subscribe to the event reported when virtual Cable is removed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } callback - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    onVirtualCableUnplug(callback: Callback<void>): void;

    /**
     * Unsubscribe from the event reported when virtual Cable is removed.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } [callback] - Callback used to listen for event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    offVirtualCableUnplug(callback?: Callback<void>): void;
  }

  /**
   * Describe the HID device capability fields of this endpoint being queried.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface HidDeviceSdp {
    /**
     * name of this Bluetooth hid device. Maximum length is 50 bytes.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    name: string;
    /**
     * description for this Bluetooth hid device. Maximum length is 50 bytes.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    description: string;
    /**
     * provider of this Bluetooth hid device. Maximum length is 50 bytes.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    provider: string;
    /**
     * Subclass of this Bluetooth HID device. Subclass represents the specific HID device type.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    subclass: Subclass;
    /**
     * descriptors identifies the descriptors associated with the bluetooth hid device.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    descriptors: Uint8Array;
  }

  /**
   * Represents the Quality of Service (QoS) settings for a bluetooth hid device application.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface HidDeviceQos {
    /**
     * L2CAP service type, default = SERVICE_BEST_EFFORT.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    serviceType?: ServiceType;
    /**
     * L2CAP tokenRate, means transmission rate, default = 0.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    tokenRate?: int;
    /**
     * L2CAP token bucket size, default = 0.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    tokenBucketSize?: int;
    /**
     * L2CAP peak bandwidth, default = 0.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    peakBandwidth?: int;
    /**
     * L2CAP latency, default = -1.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    latency?: int;
    /**
     * L2CAP delay variation, default = -1.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    delayVariation?: int;
  }

  /**
   * Describe the GET_REPORT data is received from remote host.
   *
   * @typedef GetReportData
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface GetReportData {
    /**
     * reportType of GET_REPORT data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    type: ReportType;
    /**
     * id of GET_REPORT data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    id: int;
    /**
     * bufferSize of GET_REPORT data, maximum number of octets to transfer during data phase.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    bufferSize: int;
  }

  /**
   * Describe the SET_REPORT data is received from remote host.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface SetReportData {
    /**
     * reportType of SET_REPORT data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    type: ReportType;
    /**
     * id of SET_REPORT data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    id: int;
    /**
     * data of SET_REPORT data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    data: Uint8Array;
  }

  /**
   * Describe the interrupt data is received from remote host.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface InterruptData {
    /**
     * id of interrupt data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    id: int;
    /**
     * data of interrupt data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    data: Uint8Array;
  }

  /**
   * Describe the protocol data is received from remote host.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface ProtocolData {
    /**
     * protocol of protocol data.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    protocol: ProtocolType;
  }

  /**
   * Describe the subclass.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum Subclass {
    /**
     * Uncategorized subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_UNCATEGORIZED = 0,
    /**
     * Joystick subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_JOYSTICK = 1,
    /**
     * Gamepad subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_GAMEPAD = 2,
    /**
     * Remote control subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_REMOTE_CONTROL = 3,
    /**
     * Sensing device subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_SENSING_DEVICE = 4,
    /**
     * digitizer tablet subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_DIGITIZER_TABLET = 5,
    /**
     * Card reader subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_CARD_READER = 6,
    /**
     * Keyboard subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_KEYBOARD = 64,
    /**
     * Mouse subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_MOUSE = 128,
    /**
     * Combo subclass.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SUBCLASS_COMBO = 192
  }

  /**
   * Describe the report type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum ReportType {
    /**
     * Report type input.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    REPORT_TYPE_INPUT = 1,
    /**
     * Report type output.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    REPORT_TYPE_OUTPUT = 2,
    /**
     * Report type feature.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    REPORT_TYPE_FEATURE = 3
  }

  /**
   * Describe the l2cap service type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum ServiceType {
    /**
     * Service type no traffic.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SERVICE_NO_TRAFFIC = 0,
    /**
     * Service type best effort.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SERVICE_BEST_EFFORT = 1,
    /**
     * Service type guaranteed.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SERVICE_GUARANTEED = 2
  }

  /**
   * Describe the error reason.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum ErrorReason {
    /**
     * Constant representing success response for set report.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_SUCCESS = 0,
    /**
     * Constant representing error response for set report due to not ready.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_NOT_READY = 1,
    /**
     * Constant representing error response for set report due to invalid report ID.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_INVALID_REPORT_ID = 2,
    /**
     * Constant representing error response for set report due to unsupported request.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_UNSUPPORTED_REQ = 3,
    /**
     * Constant representing error response for set report due to invalid parameter.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_INVALID_PARAM = 4,
    /**
     * Constant representing error response for Set Report with unknown reason.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    RSP_UNKNOWN = 14
  }

  /**
   * Describe the protocol type.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  enum ProtocolType {
    /**
     * Protocol type boot mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    PROTOCOL_BOOT_MODE = 0,
    /**
     * Protocol type report mode.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    PROTOCOL_REPORT_MODE = 1
  }
}

export default hid;