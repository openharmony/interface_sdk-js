/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * The **touchEvent** module provides touch events reported by a device. It is inherited from 
 * [InputEvent]{@link @ohos.multimodalInput.inputEvent:InputEvent}.
 *
 * @file Touch Event
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

/**
 * 触屏输入事件类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * 触屏取消。触屏down事件异常打断，未正常闭环，例如：手指按下后未抬起，屏幕发生旋转、折叠或有新hover等场景时触发cancel事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * 触屏按下。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  DOWN = 1,

  /**
   * 触屏移动。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOVE = 2,

  /**
   * 触屏抬起。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  UP = 3,

  /**
   * 触屏开始拖拽。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_DOWN = 4,

  /**
   * 触屏拖拽移动。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_MOVE = 5,

  /**
   * 触屏结束拖拽。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  PULL_UP = 6
}

/**
 * 操作触屏的工具类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum ToolType {

  /**
   * 手指。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  FINGER = 0,

  /**
   * 笔。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PEN = 1,

  /**
   * 橡皮擦。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  RUBBER = 2,

  /**
   * 笔刷。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BRUSH = 3,

  /**
   * 铅笔。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PENCIL = 4,

  /**
   * 气笔。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AIRBRUSH = 5,

  /**
   * 鼠标。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOUSE = 6,

  /**
   * 透镜。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  LENS = 7
}

/**
 * 触屏来源的设备类型，当前仅支持触摸屏、触控板类型上报。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum SourceType {

  /**
   * 触摸屏。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TOUCH_SCREEN = 0,

  /**
   * 笔。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PEN = 1,

  /**
   * 触控板。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TOUCH_PAD = 2
}

/**
 * 修正坐标的模式。
 * 
 * **系统API**: 此接口为系统接口。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 19 dynamic
 * @since 23 static
 */
export declare enum FixedMode {

  /**
   * 正常模式。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  NONE = 0,

  /**
   * 单手模式。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  AUTO = 1
}

/**
 * 触屏点信息。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface Touch {

  /**
   * 触屏输入事件ID。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  id: int;

  /**
   * 按下时间戳，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedTime: long;

  /**
   * 该触屏输入事件以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenX: int;

  /**
   * 该触屏输入事件以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenY: int;

  /**
   * 触屏所在窗口左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowX: int;

  /**
   * 触屏所在窗口左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowY: int;

  /**
   * 压力值，取值范围是[0.0, 1.0]，0.0表示不支持。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressure: double;

  /**
   * 触屏区域的宽度，单位为像素（px）。当前仅支持整数。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  width: int;

  /**
   * 触屏区域的高度，单位为像素（px）。当前仅支持整数。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  height: int;

  /**
   * 相对YZ平面的角度，单位为度，取值的范围[-90, 90]，其中正值是向右倾斜。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  tiltX: int;

  /**
   * 相对XZ平面的角度，单位为度，取值的范围[-90, 90]，其中正值是向下倾斜。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  tiltY: int;

  /**
   * 工具区域的中心点以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolX: int;

  /**
   * 工具区域的中心点以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolY: int;

  /**
   * 工具区域宽度，单位为像素（px）。当前仅支持整数。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolWidth: int;

  /**
   * 工具区域高度，单位为像素（px）。当前仅支持整数。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolHeight: int;

  /**
   * 输入设备上的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawX: int;

  /**
   * 输入设备上的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawY: int;

  /**
   * 工具类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  toolType: ToolType;

  /**
   * 适配单手模式下screenX坐标的修正值，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedDisplayX?: int;

  /**
   * 适配单手模式下screenY坐标的修正值，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedDisplayY?: int;

  /**
   * 该触屏输入事件以主屏左上角为原点的全局坐标系的X坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的
   * [TouchEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.TouchEventData}为
   * true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的X坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalX?: int;

  /**
   * 该触屏输入事件以主屏左上角为原点的全局坐标系的Y坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的
   * [TouchEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.TouchEventData}为
   * true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的Y坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalY?: int;

  /**
   * 触摸点属性标识。当前仅支持单指触摸：左手触摸为1，右手触摸为2。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  blobId?: int;
}

/**
 * 触屏输入事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface TouchEvent extends InputEvent {

  /**
   * 触屏输入事件类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * 当前触屏点信息。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  touch: Touch;

  /**
   * 所有触屏点。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  touches: Touch[];

  /**
   * 触屏来源的设备类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  sourceType: SourceType;

  /**
   * 修正坐标的模式。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  fixedMode?: FixedMode;

  /**
   * 表示该触屏输入事件是否为注入事件。注入事件详细介绍可参考
   * [@ohos.multimodalInput.inputEventClient]{@link @ohos.multimodalInput.inputEventClient:inputEventClient}。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  isInject?: boolean;
}