/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Input Device
 * @kit InputKit
 */

import type { Callback, AsyncCallback } from './@ohos.base';

import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
* 本模块提供输入设备管理能力，包括监听输入设备的连接和断开状态，查询设备名称等输入设备信息。
*
* > **说明**：
*
 * @syscap SystemCapability.MultimodalInput.Input.InputDevice
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputDevice {

  /**
   * 监听设备热插拔事件类型。
   *
   * @unionmember { 'add' } 插入输入设备。
   * @unionmember { 'remove' } 移除输入设备。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  type ChangedType = 'add' | 'remove';

  /**
   * 输入设备的输入能力。包括键盘、鼠标、触摸屏、轨迹球、触控板、操纵杆等。
   *
   * @unionmember { 'keyboard' } 表示输入设备是键盘。
   * @unionmember { 'mouse' } 表示输入设备是鼠标。
   * @unionmember { 'touchpad' } 表示输入设备是触控板。
   * @unionmember { 'touchscreen' } 表示输入设备是触摸屏。
   * @unionmember { 'joystick' } 表示输入设备是操纵杆。
   * @unionmember { 'trackball' } 表示输入设备是轨迹球。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  type SourceType = 'keyboard' | 'mouse' | 'touchpad' | 'touchscreen' | 'joystick' | 'trackball';

  /**
   * 输入设备的轴类型。
   *
   * @unionmember { 'touchmajor' } 椭圆触摸区域长轴。
   * @unionmember { 'touchminor' } 椭圆触摸区域短轴。
   * @unionmember { 'orientation' } 方向轴。
   * @unionmember { 'x' } 横坐标轴。
   * @unionmember { 'y' } 纵坐标轴。
   * @unionmember { 'pressure' } 压力轴。
   * @unionmember { 'toolminor' } 工具区域短轴。
   * @unionmember { 'toolmajor' } 工具区域长轴。
   * @unionmember { 'null' } 无类型。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
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
   * 键盘输入设备的类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  enum KeyboardType {

    /**
     * 表示无按键设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 表示未知按键设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 1,

    /**
     * 表示全键盘设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    ALPHABETIC_KEYBOARD = 2,

    /**
     * 表示小键盘设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    DIGITAL_KEYBOARD = 3,

    /**
     * 表示手写笔设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    HANDWRITING_PEN = 4,

    /**
     * 表示遥控器设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    REMOTE_CONTROL = 5
  }

  /**
   * 功能键的类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 15 dynamic
   * @since 23 static
   */
  enum FunctionKey {

    /**
     * CapsLock键，仅支持对输入键盘扩展的CapsLock键设置使能。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 15 dynamic
     * @since 23 static
     */
    CAPS_LOCK = 1
  }

  /**
   * 描述输入设备热插拔的信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  interface DeviceListener {

    /**
     * 输入设备插入或者移除。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    type: ChangedType;

    /**
     * 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: int;
  }

  /**
   * 注册监听输入设备的热插拔事件，使用时需连接鼠标、键盘、触摸屏等外部设备。使用callback异步回调。
   *
   * @param { 'change' } type - 输入设备的事件类型，固定值为'change'。
   * @param { Callback<DeviceListener> } listener - 回调函数，返回输入设备热插拔事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   */
  function on(type: 'change', listener: Callback<DeviceListener>): void;

  /**
   * Starts listening for an input device event.
   *
   * @param { Callback<DeviceListener> } listener - Callback for the input device event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 23 static
   */
  function onChange(listener: Callback<DeviceListener>): void;

  /**
   * 取消监听输入设备的热插拔事件。在应用退出前调用，取消监听。使用callback异步回调。
   *
   * @param { 'change' } type - 输入设备的事件类型，固定值为'change'。
   * @param { Callback<DeviceListener> } listener - 取消监听的回调函数，缺省时取消所有输入设备热插拔事件的监听。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   */
  function off(type: 'change', listener?: Callback<DeviceListener>): void;

  /**
   * Stops listening for an input device event.
   *
   * @param { Callback<DeviceListener> } [listener] - Callback for the input device event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 23 static
   */
  function offChange(listener?: Callback<DeviceListener>): void;

  /**
   * 输入设备的轴信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamic
   * @since 23 static
   */
  interface AxisRange {

    /**
     * 输入设备的输入能力。包括键盘、鼠标、触摸屏、轨迹球、触控板、操纵杆等。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    source: SourceType;

    /**
     * 输入设备的轴类型。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    axis: AxisType;

    /**
     * 轴的最大值。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    max: int;

    /**
     * 轴的最小值。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    min: int;

    /**
     * 轴的模糊值。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    fuzz: int;

    /**
     * 轴的基准值。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    flat: int;

    /**
     * 轴的分辨率。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    resolution: int;
  }

  /**
   * 描述输入设备的信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputDeviceData {

    /**
     * 输入设备的唯一标识，同一个物理设备反复插拔，设备ID可能会发生变化。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 输入设备的名称。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 输入设备的输入能力。包括键盘、鼠标、触摸屏、轨迹球、触控板、操纵杆等。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    sources: Array<SourceType>;

    /**
     * 输入设备的轴信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 8 dynamic
     * @since 23 static
     */
    axisRanges: Array<AxisRange>;

    /**
     * 输入设备的总线类型，该值以输入设备上报为准。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    bus: int;

    /**
     * 输入设备的产品信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    product: int;

    /**
     * 输入设备的厂商信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    vendor: int;

    /**
     * 输入设备的版本信息。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    version: int;

    /**
     * 输入设备的物理地址。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    phys: string;

    /**
     * 输入设备的唯一标识。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 9 dynamic
     * @since 23 static
     */
    uniq: string;

    /**
     * 输入设备是否为虚拟设备。
     *
     * true表示是虚拟设备，false表示是非虚拟设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 23 dynamic&static
     */
    isVirtual?: boolean;

    /**
     * 输入设备是否为本地设备。
     *
     * true表示是本地设备，false表示是非本地设备。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputDevice
     * @since 23 dynamic&static
     */
    isLocal?: boolean;
  }

  /**
   * 获取所有输入设备的ID列表，使用callback异步回调。
   *
   * > **说明**：
   *
   * @param { AsyncCallback<Array<number>> } callback - 回调函数。当获取成功，err为undefined，data为所有输入设备的ID列表；否则为错误对象。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimodalInput.inputDevice#getDeviceList
   */
  function getDeviceIds(callback: AsyncCallback<Array<number>>): void;

  /**
   * 获取所有输入设备的ID列表，使用Promise异步回调。
   *
   * > **说明**：
   *
   * @returns { Promise<Array<number>> } Promise对象，返回所有输入设备的ID列表。ID是输入设备的唯一标识。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimodalInput.inputDevice#getDeviceList
   */
  function getDeviceIds(): Promise<Array<number>>;

  /**
   * 获取指定id的输入设备信息，使用callback异步回调。
   *
   * > **说明**：
   *
   * @param { number } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { AsyncCallback<InputDeviceData> } callback - 回调函数。当获取成功，err为undefined，data为输入设备信息；否则为错误对象。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimodalInput.inputDevice#getDeviceInfo
   */
  function getDevice(deviceId: number, callback: AsyncCallback<InputDeviceData>): void;

  /**
   * 获取指定id的输入设备信息，使用Promise异步回调。
   *
   * > **说明**：
   *
   * @param { number } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @returns { Promise<InputDeviceData> } Promise对象，返回输入设备信息，包括输入设备ID、名称、支持的输入能力、物理地址、版本信息及产品信息等。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimodalInput.inputDevice#getDeviceInfo
   */
  function getDevice(deviceId: number): Promise<InputDeviceData>;

  /**
   * 获取所有输入设备的ID列表，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<int>> } callback - 回调函数。当获取成功，err为undefined，data为所有输入设备的ID列表（ID是输入设备的唯一标识）；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceList(callback: AsyncCallback<Array<int>>): void;

  /**
   * 获取所有输入设备的ID列表，使用Promise异步回调。
   *
   * @returns { Promise<Array<int>> } Promise对象，返回所有输入设备的ID列表。ID是输入设备的唯一标识。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceList(): Promise<Array<int>>;

  /**
   * 获取指定输入设备的信息，使用callback异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { AsyncCallback<InputDeviceData> } callback - 回调函数。当获取成功，err为undefined，data为输入设备信息（包括输入设备ID、名称、支持的输入能力等）；否则为
   *     错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceInfo(deviceId: int, callback: AsyncCallback<InputDeviceData>): void;

  /**
   * 获取指定id的输入设备信息，使用Promise异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @returns { Promise<InputDeviceData> } Promise对象，返回输入设备信息，包括输入设备ID、名称、支持的输入能力、物理地址、版本信息及产品信息等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getDeviceInfo(deviceId: int): Promise<InputDeviceData>;

  /**
   * 获取指定输入设备的信息。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @returns { InputDeviceData } 返回输入设备信息，包括输入设备ID、名称、支持的输入能力、物理地址、版本信息及产品信息等。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function getDeviceInfoSync(deviceId: int): InputDeviceData;

  /**
   * 查询指定输入设备是否支持指定按键，使用callback异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { Array<KeyCode> } keys - 需要查询的键值，最多支持5个按键查询。
   * @param { AsyncCallback<Array<boolean>> } callback - 回调函数。当查询成功，err为undefined，data为按键支持查询结果（数组元素与keys参数一一对应，true表示支
   *     持，false表示不支持）；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function supportKeys(deviceId: int, keys: Array<KeyCode>, callback: AsyncCallback<Array<boolean>>): void;

  /**
   * 查询指定输入设备是否支持指定按键，使用Promise异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { Array<KeyCode> } keys - 需要查询的键值，最多支持查询5个按键。
   * @returns { Promise<Array<boolean>> } Promise对象，返回查询结果。true表示支持，false表示不支持。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function supportKeys(deviceId: int, keys: Array<KeyCode>): Promise<Array<boolean>>;

  /**
   * 查询指定id的输入设备对指定键值的支持情况。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { Array<KeyCode> } keys - 需要查询的键值，最多支持查询5个按键。
   * @returns { Array<boolean> } 返回查询结果。true表示支持，false表示不支持。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function supportKeysSync(deviceId: int, keys: Array<KeyCode>): Array<boolean>;

  /**
   * 获取输入设备的键盘类型，如全键盘、小键盘等。输入设备的键盘类型以接口返回结果为准。使用callback异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { AsyncCallback<KeyboardType> } callback - 回调函数。当查询成功，err为undefined，data为输入设备的键盘类型；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getKeyboardType(deviceId: int, callback: AsyncCallback<KeyboardType>): void;

  /**
   * 获取输入设备的键盘类型，使用Promise异步回调。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @returns { Promise<KeyboardType> } Promise对象，返回输入设备的键盘类型。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 9 dynamic
   * @since 23 static
   */
  function getKeyboardType(deviceId: int): Promise<KeyboardType>;

  /**
   * 获取输入设备的键盘类型。
   *
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @returns { KeyboardType } 返回查询结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 10 dynamic
   * @since 23 static
   */
  function getKeyboardTypeSync(deviceId: int): KeyboardType;

  /**
   * 设置键盘按键的重复时延，使用callback异步回调。
   *
   * @param { int } delay - 键盘按键重复延迟时间，默认值500ms，调节范围[300ms，1000ms]。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置键盘按键重复延迟时间成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyboardRepeatDelay(delay: int, callback: AsyncCallback<void>): void;

  /**
   * 设置键盘按键的重复时延，使用Promise异步回调。
   *
   * @param { int } delay - 键盘按键重复延迟时间，默认值500ms，调节范围[300ms，1000ms]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyboardRepeatDelay(delay: int): Promise<void>;

  /**
   * 获取键盘按键的重复时延，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取成功，err为undefined，data为键盘按键重复延迟时间；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getKeyboardRepeatDelay(callback: AsyncCallback<int>): void;

  /**
   * 获取键盘按键的重复时延，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回键盘按键的重复时延。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getKeyboardRepeatDelay(): Promise<int>;

  /**
   * 设置键盘按键的重复速率，使用callback异步回调。
   *
   * @param { int } rate - 键盘按键重复速率，默认值50ms/次，调节范围[36ms/次，100ms/次]。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置键盘按键重复速率成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyboardRepeatRate(rate: int, callback: AsyncCallback<void>): void;

  /**
   * 设置键盘按键的重复速率，使用Promise异步回调。
   *
   * @param { int } rate - 键盘按键重复速率，默认值50ms/次，调节范围[36ms/次，100ms/次]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyboardRepeatRate(rate: int): Promise<void>;

  /**
   * 获取键盘按键的重复速率，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。当获取成功，err为undefined，data为键盘按键的重复速率；否则为错误对象。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getKeyboardRepeatRate(callback: AsyncCallback<int>): void;

  /**
   * 获取键盘按键的重复速率，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回键盘按键的重复速率。
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi hide for inner use.
   * @since 10 dynamic
   * @since 23 static
   */
  function getKeyboardRepeatRate(): Promise<int>;

  /**
   * 获取距离上次系统输入事件的时间间隔（包含设备休眠时间），使用Promise异步回调。
   *
   * @returns { Promise<long> } Promise对象，返回距离上次系统输入事件的时间间隔，单位为微秒（μs）。
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 14 dynamic
   * @since 23 static
   */
  function getIntervalSinceLastInput(): Promise<long>;

  /**
   * 设置输入设备的开关状态。以触摸屏为例：关闭时，点击触摸屏设备不响应；开启时，可正常操作触摸屏。使用Promise异步回调。
   *
   * @permission ohos.permission.INPUT_DEVICE_CONTROLLER
   * @param { int } deviceId - 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   * @param { boolean } enabled - 输入设备的开关状态，取值为true表示开启输入设备，取值为false表示关闭输入设备。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API
   * @throws { BusinessError } 202 - Permission verification failed.
   *     A non-system application calls a system API.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 3900001 - The specified device does not exist.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function setInputDeviceEnabled(deviceId: int, enabled: boolean): Promise<void>;

  /**
   * 设置功能键（如：CapsLock键）使能状态。使用Promise异步回调。
   *
   * @permission ohos.permission.INPUT_KEYBOARD_CONTROLLER
   * @param { FunctionKey } functionKey - 需要设置的功能键类型。
   * @param { boolean } enabled - 功能键使能状态。取值为true表示使能功能键，取值为false表示不使能功能键。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 3900002 - There is currently no keyboard device connected.
   * @throws { BusinessError } 3900003 - It is prohibited for non-input applications.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 15 dynamic
   * @since 23 static
   */
  function setFunctionKeyEnabled(functionKey: FunctionKey, enabled: boolean): Promise<void>;

  /**
   * 检查功能键（如：CapsLock键）是否使能。使用Promise异步回调。
   *
   * @param { FunctionKey } functionKey - 需要设置的功能键类型。
   * @returns { Promise<boolean> } Promise对象。返回查询结果，true表示功能键使能，false表示功能键未使能。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 3900002 - There is currently no keyboard device connected.
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @since 15 dynamic
   * @since 23 static
   */
  function isFunctionKeyEnabled(functionKey: FunctionKey): Promise<boolean>;
}

export default inputDevice;