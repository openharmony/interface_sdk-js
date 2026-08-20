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
 * @file NearLink Common Constants
 * @kit ConnectivityKit
 */

/**
 * This module provides definitions of common constants for NearLink communication, including the device pairing status,
 * device connection status, and device type.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace nearlinkConstant {
  /**
   * Enumerates the pairing states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum PairingState {
    /**
     * Not paired.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_NONE = 1,
    /**
     * Pairing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_PAIRING = 2,
    /**
     * Paired.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_PAIRED = 3
  }

  /**
   * Enumerates the connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum ConnectionState {
    /**
     * Connecting.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_CONNECTING = 0,
    /**
     * Connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_CONNECTED = 1,
    /**
     * Disconnecting.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_DISCONNECTING = 2,
    /**
     * Disconnected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_DISCONNECTED = 3
  }

  /**
   * Enumerates the device types.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum DeviceClass {
    /**
     * Invalid device type. The device type information is missing.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INVALID_CLASS = -1,
    /**
     * Uncategorized device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_UNCATEGORIZED = 0x000100,
    /**
     * Phone.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_PHONE = 0x000200,
    /**
     * Smartphone.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMARTPHONE = 0x000201,
    /**
     * Computer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_COMPUTER = 0x000300,
    /**
     * Laptop.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LAPTOP = 0x000301,
    /**
     * Tablet.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TABLET = 0x000302,
    /**
     * All-in-one computer.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ALL_IN_ONE_COMPUTER = 0x000303,
    /**
     * Mini PC.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_MINI_PC = 0x000304,
    /**
     * Watch.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_WATCH = 0x000400,
    /**
     * Smart watch.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_WATCH = 0x000401,
    /**
     * Human-machine interface.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HUMAN_INTERFACE = 0x000500,
    /**
     * Keyboard.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_KEYBOARD = 0x000501,
    /**
     * Mouse.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_MOUSE = 0x000502,
    /**
     * Handle.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HANDLE = 0x000503,
    /**
     * Stylus.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_STYLUS = 0x000504,
    /**
     * Touchpad.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TOUCHPAD = 0x000505,
    /**
     * Audio player.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AUDIO_PLAYBACK = 0x000600,
    /**
     * Smart speaker.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_SPEAKER = 0x000601,
    /**
     * Echo device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ECHO_WALL = 0x000602,
    /**
     * Audio recorder.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AUDIO_CAPTURE = 0x000700,
    /**
     * Karaoke microphone.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_KARAOKE_MICROPHONE = 0x000701,
    /**
     * Wearable microphone.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LAPEL_MICROPHONE = 0x000702,
    /**
     * Wearable audio device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_WEARABLE_AUDIO = 0x000800,
    /**
     * In-ear headphones.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IN_EAR_EARPHONE = 0x000801,
    /**
     * Headset.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HEADSET = 0x000802,
    /**
     * Over-ear headphones.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_OVER_EAR_HEADPHONE = 0x000803,
    /**
     * Neckband earphones.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_NECKBAND_EARPHONE = 0x000804,
    /**
     * Personal care.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_PERSONAL_CARE = 0x000900,
    /**
     * Smart toothbrush.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_TOOTHBRUSH = 0x000901,
    /**
     * Smart cup.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_CUP = 0x000902,
    /**
     * Smart shaver.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_SHAVER = 0x000903,
    /**
     * HVAC.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HVAC = 0x000A00,
    /**
     * Air purifier.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AIR_PURIFIER = 0x000A01,
    /**
     * Humidifier.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HUMIDIFIER = 0x000A02,
    /**
     * Air circulation fan.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AIR_CIRCULATION_FAN = 0x000A03,
    /**
     * Electric cycling tool.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_RIDE = 0x000B00,
    /**
     * Electric scooter.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_SCOOTER = 0x000B01,
    /**
     * Electric bicycle.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_BICYCLE = 0x000B02,
    /**
     * Light fittings.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LIGHT_FITTING = 0x000C00,
    /**
     * Smart table lamp.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_TABLE_LAMP = 0x000C01,
    /**
     * Remote control device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_REMOTE_CONTROL = 0x000D00,
    /**
     * TV remote control.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TV_REMOTE_CONTROL = 0x000D01,
    /**
     * Imaging device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IMAGING = 0x000E00,
    /**
     * Smart TV.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_TV = 0x000E01,
    /**
     * IP camera.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IP_CAMERA = 0x000E02,
    /**
     * Projector.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SCREEN_CASTER = 0x000E03,
    /**
     * Network device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_NETWORKING = 0x000F00,
    /**
     * IoT gateway.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IOT_GATEWAY = 0x000F01,
    /**
     * Access control device.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ACCESS_CONTROL = 0x001000,
    /**
     * Smart lock.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_LOCK = 0x001001,
    /**
     * Smart key.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_KEY = 0x001002,
    /**
     * Vehicle key.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_VEHICLE_KEY = 0x001003,
    /**
     * Vehicle lock.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_VEHICLE_LOCK = 0x001004
  }

  /**
   * Enumerates the logical link connection states with a remote device.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum AcbState {
    /**
     * Disconnected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DISCONNECTED = 0,
    /**
     * Connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTED = 1,
    /**
     * Connected, with link encrypted.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    ENCRYPTED = 2
  }

  /**
   * Enumerates the connection intervals. A smaller interval indicates a lower latency, higher throughput, but higher
   * power consumption. A larger interval indicates lower power consumption but higher latency. The high-speed mode is
   * suitable for scenarios that require high throughput and low latency, while the low-speed mode is suitable for
   * scenarios that are sensitive to power consumption.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum ConnectionInterval {
    /**
     * Connection interval of 4.5 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    HIGH_SPEED_INTERVAL_4_5 = 0,
    /**
     * Connection interval of 4.875 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    HIGH_SPEED_INTERVAL_4_875 = 1,
    /**
     * Connection interval of 11.25 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_11_25 = 2,
    /**
     * Connection interval of 15 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_15 = 3,
    /**
     * Connection interval of 50 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_50 = 4,
    /**
     * Connection interval of 100 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_100 = 5,
    /**
     * Connection interval of 150 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_150 = 6,
    /**
     * Connection interval of 200 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_200 = 7,
    /**
     * Connection interval of 300 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_300 = 8,
    /**
     * Connection interval of 500 ms.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_500 = 9
  }
}
export default nearlinkConstant;