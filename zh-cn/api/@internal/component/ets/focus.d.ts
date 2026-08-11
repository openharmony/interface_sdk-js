/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Provide some common interface for focus.
 * @kit ArkUI
 */

/**
 * 设置当前组件系统焦点框样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FocusBoxStyle {
  /**
   * 焦点框相对组件边缘的距离。
   * 
   * 正数代表外侧，负数代表内侧。不支持百分比。未设置时，使用默认焦点框边距2.0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  margin?: LengthMetrics;
  /**
   * 焦点框颜色。未设置时，使用默认焦点框颜色#FF007DFF。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeColor?: ColorMetrics;
  /**
   * 焦点框宽度。
   * 
   * 不支持负数与百分比。未设置时，使用默认焦点框宽度2.0vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: LengthMetrics;
}

/**
 * 设置组件获焦优先级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum FocusPriority {
  /**
   * 默认的优先级，缺省时组件的获焦优先级。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * 容器首次获焦时优先获焦的优先级。优先级高于AUTO。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRIOR = 2000,

  /**
   * 上一次容器整体失焦时获焦节点的优先级。优先级高于PRIOR。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PREVIOUS = 3000,
}

/**
 * 设置按键事件处理的模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare enum KeyProcessingMode {
  /**
   * 默认值，当前组件不消费按键时，Tab/方向键优先在当前容器内走焦。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  FOCUS_NAVIGATION = 0,

  /**
   * 当前组件不消费按键时，Tab/方向键优先冒泡给父组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  ANCESTOR_EVENT = 1,
}