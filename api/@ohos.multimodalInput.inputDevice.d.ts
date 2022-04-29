/*
* Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { Callback, AsyncCallback } from "./basic";
import { KeyCode } from "./@ohos.multimodalInput.keyCode"

/**
* The input device management module is configured to obtain an ID and device information of an input device.
*
* @since 8
* @syscap SystemCapability.MultimodalInput.Input.InputDevice
* @import import inputDevice from '@ohos.multimodalInput.inputDevice';
*/

declare namespace inputDevice {
  type ChangedType = 'add' | 'remove';

  type SourceType = 'keyboard' | 'mouse' | 'touchpad' | 'touchscreen' | 'joystick' | 'trackball';

  type AxisType = 'touchMajor' | 'touchMinor' | 'orientation' | 'x' | 'y' | 'pressure' | 'toolMinor' | 'touchMajor';

  enum KeyboardType {
    // 无按键
    NONE = 0,
  
    // 未知按键
    UNKNOWN = 1,
  
    // 字母键盘
    ALPHABETIC_KEYBOARD = 2,
  
    // 数字按键
    DIGITAL_KEYBOARD = 3,
  
    // 手写笔
    HANDWRITING_PEN = 4,
  
    // 遥控器
    REMOTE_CONTROL = 5,
    }

  enum PointerStyle {
    // 正常选择
    NORMAL_SELECT,

    // 协助选择
    HELP_SELECT,

    // 后台运行
    WORKING_IN_BACKGROUND,

    // 忙碌
    BUSY,

    // 精确选择
    PRECISION_SELECT,

    // 下一步
    NEXT_SELECT,

    // 手写
    HANDWRITING,

    // 不可用
    UNAVAILABLE,

    // 垂直调整
    VERTICAL_RESIZE,

    // 水平调整
    HORIZONTAL_RESIZE,

    // 正向对角线调整
    DIAGONAL_RESIZE_1,

    // 负向对角线调整
    DIAGONAL_RESIZE_2,

    // 移动
    MOVE,

    // 备选
    ALTERNATE_SELECT,

    // 链接
    LINK_SELECT,

    // 位置
    LOCATION_SELECT,

    // 人物
    PERSON_SELECT,

    // 自定义
    CUSTOM,
  }

  /**
   * Defines the listener for input device events.
   * 
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param type Type of the input device event. The options are add and remove.
   * @param deviceId ID of the input device for the reported input device event.
   */
  interface DeviceListener {
    type: ChangedType;
    deviceId: number;
  }

  /**
   * Starts listening for an input device event.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param type Type of the input device event, which is **change**.
   * @return Callback for the input device event.
   */
   function on(type: "change", listener: Callback<DeviceListener>): void;

  /**
   * Stops listening for an input device event.
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param type Type of the input device event, which is **change**.
   * @return Callback for the input device event.
   */
  function off(type: "change", listener?: Callback<DeviceListener>): void;

  /**
   * Defines axis information about events that can be reported by an input device.
   * For example, a touchscreen may report information such as x, y, and pressure,
   * which indicate the x-axis coordinate, y-axis coordinate, and pressure, respectively.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param source Input source type of the axis. For example, if a mouse reports an x-axis event, the source of the x-axis is the mouse.
   * @param axis Type of the axis. for example, the x-axis, y-axis, and pressure axis.
   * @param max Maximum value of the data reported on this axis.
   * @param min Minimum value of the data reported on this axis.
   * @param fuzz fuzz value of the data reported on this axis.
   * @param flat flat value of the data reported on this axis.
   * @param resolution resolution value of the data reported on this axis.
   */
  interface AxisRange {
    /**
     * @since 8
     */
    source: SourceType;

    /**
     * @since 8
     */
    axis: AxisType;

    /**
     * @since 8
     */
    max: number;

    /**
     * @since 8
     */
    min: number;

    /**
     * @since 9
     */
    fuzz: number;

    /**
     * @since 9
     */
    flat: number;

    /**
     * @since 9
     */
    resolution: number;
  }

  /**
   * Defines the information about an input device.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param name Name of the input device.
   * @param sources Source type supported by the input device. For example, if a keyboard is attached with a touchpad, the device has two input sources: keyboard and touchpad.
   * @param axisRanges
   * @param bus 总线
   * @param product 产品
   * @param vendor 厂商
   * @param version 版本
   * @param phys 物理路径
   * @param uniq 唯一标识符
   */
  interface InputDeviceData {
    /**
     * @since 8
     */
    id: number;

    /**
     * @since 8
     */
    name: string;

    /**
     * @since 8
     */
    sources: Array<SourceType>;

    /**
     * @since 8
     */
    axisRanges: Array<AxisRange>;

    /**
     * @since 9
     */
    bus: number;

    /**
     * @since 9
     */
    product: number;

    /**
     * @since 9
     */
    vendor: number;

    /**
     * @since 9
     */
    version: number;

    /**
     * @since 9
     */
    phys: string;

    /**
     * @since 9
     */
    uniq: string;
  }

  /**
   * Obtains the IDs of all input devices.
   *
   * @since 8
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param callback callback function, receive reported data
   */
  function getDeviceIds(callback: AsyncCallback<Array<number>>): void;
  function getDeviceIds(): Promise<Array<number>>;

  /**
   * Obtain the information about an input device.
   *
   * @since 8
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param deviceId ID of the input device whose information is to be obtained.
   * @param callback callback function, receive reported data
   */
  function getDevice(deviceId: number, callback: AsyncCallback<InputDeviceData>): void;
  function getDevice(deviceId: number): Promise<InputDeviceData>;

  /**
   * Checks whether the specified key codes of an input device are supported.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param deviceId ID of the input device.
   * @param keys Key codes of the input device. 最多一次查询5个按键码
   * @return Returns a result indicating whether the specified key codes are supported.
   */
  function supportKeys(deviceId: number, keys: Array<KeyCode>, callback: Callback<Array<boolean>>): void;
  function supportKeys(deviceId: number, keys: Array<KeyCode>): Promise<Array<boolean>>;

  /**
   * 设置光标移动速度
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param speed 光标移动速度。
   */
  function setPointerSpeed(speed: number, callback: AsyncCallback<void>): void;
  function setPointerSpeed(speed: number): Promise<void>;

  /**
   * 获取光标移动速度
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   */
  function getPointerSpeed(callback: AsyncCallback<number>): void;
  function getPointerSpeed(): Promise<number>;

  /**
   * 查询输入设备的键盘类型
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param deviceId 输入设备标识。
   * @return 返回键盘类型。
   */
  function getKeyboardType(deviceId: number, callback: AsyncCallback<KeyboardType>): void;
  function getKeyboardType(deviceId: number): Promise<KeyboardType>;

  /**
   * Sets whether the pointer icon is visible.
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param visible Whether the pointer icon is visible. The value **true** indicates that the pointer icon is visible, and the value **false** indicates the opposite.
   * @return callback function, receive reported data
   */
  function setPointerVisibility(visible: boolean, callback: AsyncCallback<void>): void;
  function setPointerVisibility(visible: boolean): Promise<void>;

  /**
   * 获取光标是否可见
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @return callback function, receive reported data
   */
  function isPointerVisible(callback: AsyncCallback<boolean>): void;
  function isPointerVisible(): Promise<boolean>;

  /**
   * 设置鼠标样式
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @param pointerStyle 鼠标样式id。
   * @return callback function, receive reported data
   */
  function setPointerStyle(pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;
  function setPointerStyle(pointerStyle: PointerStyle): Promise<void>;

/**
   * 获取鼠标样式
   *
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.InputDevice
   * @return callback function, receive reported data
   */
  function getPointerStyle(callback: AsyncCallback<PointerStyle>): void;
  function getPointerStyle(): Promise<PointerStyle>;

  /**
   * 鼠标位置设定
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param x x坐标
   * @param y y坐标
   * @return -
   */
   function setPointerLocation(x: number, y: number, callback: AsyncCallback<void>): void;
   function setPointerLocation(x: number, y: number): Promise<void>;
}

export default inputDevice;