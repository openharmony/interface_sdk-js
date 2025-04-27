/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit InputKit
 */

import { Callback, AsyncCallback } from './@ohos.base';
import { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * The input device management module is configured to obtain an ID and device information of an input device.
 *
 * @namespace inputDevice
 * @syscap SystemCapability.MultimodalInput.Input.InputDevice
 * @since 20
 */
declare namespace inputDevice {
  /**
   * Add or remove device
   * @typedef { 'add' | 'remove' }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  type ChangedType = 'add' | 'remove';

  /**
   * The type of input device
   * @typedef { 'keyboard' | 'mouse' | 'touchpad' | 'touchscreen' | 'joystick' | 'trackball' }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  type SourceType = 'keyboard' | 'mouse' | 'touchpad' | 'touchscreen' | 'joystick' | 'trackball';

  /**
   * Axis Type of the input event
   * @typedef { 'touchmajor'| 'touchminor' | 'orientation' | 'x' | 'y' | 'pressure' | 'toolminor' | 'toolmajor' | 'null' }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  type AxisType =
    'touchmajor'
    | 'touchminor'
    | 'orientation'
    | 'x'
    | 'y'
    | 'pressure'
    | 'toolminor'
    | 'toolmajor'
    | 'null';

  /**
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  enum KeyboardType {
    /**
     * None
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    NONE = 0,

    /**
     * Unknown key
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    UNKNOWN = 1,

    /**
     * Alphabetical keyboard
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    ALPHABETIC_KEYBOARD = 2,

    /**
     * Digital keyboard
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    DIGITAL_KEYBOARD = 3,

    /**
     * Stylus
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    HANDWRITING_PEN = 4,

    /**
     * Remote control
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    REMOTE_CONTROL = 5
  }

  /**
   * Enumerates function keys.
   * 
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  enum FunctionKey {
    /**
     * CapsLock key. Enabling or disabling the CapsLock key is allowed only for input keyboard extensions.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    CAPS_LOCK = 1
  }

  /**
   * Defines the listener for input device events.
   *
   * @interface DeviceListener
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  interface DeviceListener {
    /**
     * Type of the input device event. The options are add and remove.
     *
     * @type { ChangedType }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    type: ChangedType;

    /**
     * ID of the input device for the reported input device event.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    deviceId: number;
  }

  /**
   * Starts listening for an input device event.
   *
   * @param { 'change' } type - Type of the input device event, which is **change**.
   * @param { Callback<DeviceListener> } listener - Callback for the input device event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  function on(type: 'change', listener: Callback<DeviceListener>): void;

  /**
   * Defines axis information about events that can be reported by an input device.
   * For example, a touchscreen may report information such as x, y, and pressure,
   * which indicate the x-axis coordinate, y-axis coordinate, and pressure, respectively.
   *
   * @interface AxisRange
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  interface AxisRange {
    /**
     * Input source type of the axis. For example, if a mouse reports an x-axis event,
     * the source of the x-axis is the mouse.
     *
     * @type { SourceType }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    source: SourceType;

    /**
     * Type of the axis. for example, the x-axis, y-axis, and pressure axis.
     *
     * @type { AxisType }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    axis: AxisType;

    /**
     * Maximum value of the data reported on this axis.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    max: number;

    /**
     * Minimum value of the data reported on this axis.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    min: number;

    /**
     * Fuzz value of the data reported on this axis.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    fuzz: number;

    /**
     * Flat value of the data reported on this axis.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    flat: number;

    /**
     * Resolution value of the data reported on this axis.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    resolution: number;
  }

  /**
   * Defines the information about an input device.
   *
   * @interface InputDeviceData
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  interface InputDeviceData {
    /**
     * Id of the input device.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    id: number;

    /**
     * Name of the input device.
     *
     * @type { string }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    name: string;

    /**
     * Source type supported by the input device. For example, if a keyboard is attached with a touchpad,
     * the device has two input sources: keyboard and touchpad.
     *
     * @type { Array<SourceType> }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    sources: Array<SourceType>;

    /**
     * Axis range of the input device.
     *
     * @type { Array<AxisRange> }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    axisRanges: Array<AxisRange>;

    /**
     * Bus of the input device.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    bus: number;

    /**
     * Product of the input device.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    product: number;

    /**
     * Vendor of the input device.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    vendor: number;

    /**
     * Version of the input device.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    version: number;

    /**
     * Physical path of the input device.
     *
     * @type { string }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    phys: string;

    /**
     * Unique identifier of the input device.
     *
     * @type { string }
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 20
     */
    uniq: string;
  }

  /**
   * Obtains the IDs of all input devices.
   *
   * @param { AsyncCallback<Array<number>> } callback - Callback function, receive reported data
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  function getDeviceList(callback: AsyncCallback<Array<number>>): void;

  /**
   * Obtains the IDs of all input devices.
   *
   * @returns { Promise<Array<number>> }
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  function getDeviceList(): Promise<Array<number>>;

  /**
   * Obtain the information about an input device.
   *
   * @param { number } deviceId - ID of the input device whose information is to be obtained.
   * @param { AsyncCallback<InputDeviceData> } callback - Callback function, receive reported data
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  function getDeviceInfo(deviceId: number, callback: AsyncCallback<InputDeviceData>): void;

  /**
   * Obtain the information about an input device.
   *
   * @param { number } deviceId - ID of the input device whose information is to be obtained.
   * @returns { Promise<InputDeviceData> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 20
   */
  function getDeviceInfo(deviceId: number): Promise<InputDeviceData>;
}

export default inputDevice;