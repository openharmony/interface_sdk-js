/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file Input Event
 * @kit InputKit
 */

/**
 * 设备上报的基本事件。
 *
 * @interface InputEvent [since 9 - 11]
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface InputEvent {

  /**
   * 事件ID。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  id: int;

  /**
   * 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId: int;

  /**
   * 上报输入事件的时间，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  actionTime: long;

  /**
   * 目标屏幕ID。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  screenId: int;

  /**
   * 目标窗口ID。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  windowId: int;
}