/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS;
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from "./basic";

/**
 * 分布式输入管理模块，用于提供分布式能力的接口调用
 * 
 * @since 9
 * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
 * @import import distributedInput from '@ohos.multimodalInput.distributedInput',
 */
declare namespace distributedInput {
  enum InputSource {
    // 鼠标
    MOUSE = 0,

    // 键盘
    KEYBOARD = 1,

    // 触摸屏
    TOUCH_SCREEN = 2,

    // 触摸板
    TOUCH_PAD = 3,
  }

  /**
   * 查询分布式设备输入能力
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId 表示查询分布式输入能力的那台设备的ID.
   * @return -
   */
  function getRemoteInputAbility(deviceId: number, callback: AsyncCallback<Array<InputSource>>): void;
  function getRemoteInputAbility(deviceId: number): Promise<Array<InputSource>>;

  /**
   * 准备分布式
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId 表示准备分布式的那台设备的ID.
   * @return -
   */
  function prepareRemoteInput(deviceId: number, callback: AsyncCallback<void>): void;
  function prepareRemoteInput(deviceId: number): Promise<void>;

  /**
   * 取消准备分布式
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId 表示准备分布式的那台设备的ID.
   * @return -
   */
  function unprepareRemoteInput(deviceId: number, callback: AsyncCallback<void>): void;
  function unprepareRemoteInput(deviceId: number): Promise<void>;

  /**
   * 开始分布式
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId 表示开始分布式的那台设备的id
   * @return -
   */
  function startRemoteInput(deviceId: number, inputSources: Array<InputSource>, callback: AsyncCallback<void>): void;
  function startRemoteInput(deviceId: number, inputSources: Array<InputSource>): Promise<void>;

  /**
   * 停止分布式
   * 
   * @since 9
   * @syscap SystemCapability.MultimodalInput.Input.RemoteInputDevice
   * @param deviceId 表示停止分布式的那台设备的id
   * @return -
   */
  function stopRemoteInput(deviceId: number, inputSources: Array<InputSource>, callback: AsyncCallback<void>): void;
  function stopRemoteInput(deviceId: number, inputSources: Array<InputSource>): Promise<void>;
}

export default distributedInput;