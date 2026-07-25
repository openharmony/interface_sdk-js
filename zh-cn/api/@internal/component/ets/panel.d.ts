/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * 设置滑动面板的初始状态
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 */
declare enum PanelMode {
  /**
   * 类型为minibar和foldable时，为最小状态；类型为temporary，则不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Mini = 0,

  /**
   * 类型为foldable和temporary时，为类半屏状态；类型为minibar，则不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Half,

  /**
   * 类全屏状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Full,
}

/**
 * 设置滑动面板的类型
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 */
declare enum PanelType {
  /**
   * 提供minibar和类全屏展示切换效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Minibar = 0,

  /**
   * 内容永久展示类，提供大（类全屏）、中（类半屏）、小三种尺寸展示切换效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Foldable = 1,

  /**
   * 内容临时展示区，提供大（类全屏）、中（类半屏）两种尺寸展示切换效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  Temporary = 2,

  /**
   * 配置自适应内容高度，不支持尺寸切换效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  CUSTOM = 3,
}

/**
 * 自定义内容显示区域的枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamiconly
 * @deprecated since 12
 */
declare enum PanelHeight {
  /**
   * PanelType的类型为CUSTOM时，自适应内容高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  WRAP_CONTENT = 'wrapContent',
}

/**
 * 可滑动面板，提供一种轻量的内容展示窗口，方便在不同尺寸中切换。
 * 
 * @interface PanelInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
interface PanelInterface {
  /**
   * 滑动面板组件。
   *
   * @param { boolean } show - 控制Panel显示或隐藏，true表示显示面板，false表示隐藏面板。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  (show: boolean): PanelAttribute;
}

/**
 * 窗格属性。
 *
 * @extends CommonMethod<PanelAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
declare class PanelAttribute extends CommonMethod<PanelAttribute> {
  /**
   * 可滑动面板的初始状态。
   *
   * @param { PanelMode } value - 设置可滑动面板的初始状态。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  mode(value: PanelMode): PanelAttribute;

  /**
   * 可滑动面板的类型。
   *
   * @param { PanelType } value - 设置可滑动面板的类型。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  type(value: PanelType): PanelAttribute;

  /**
   * 设置是否存在控制条。
   *
   * @param { boolean } value - 设置是否存在控制条，true表示存在，false表示不存在。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  dragBar(value: boolean): PanelAttribute;

  /**
   * 指定PanelType.CUSTOM状态下的高度。
   *
   * @param {Dimension | PanelHeight} value - 指定PanelType.CUSTOM状态下的高度。
   * @returns { PanelAttribute } 返回组件属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  customHeight(value: Dimension | PanelHeight): PanelAttribute;

  /**
   * 指定PanelType.Full状态下的高度。
   *
   * @param { number | string } value - 指定PanelMode.Full状态下的高度。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  fullHeight(value: number | string): PanelAttribute;

  /**
   * 指定PanelMode.Half状态下的高度。
   *
   * @param { number | string } value - 指定PanelMode.Half状态下的高度。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  halfHeight(value: number | string): PanelAttribute;

  /**
   * 指定PanelMode.Mini状态下的高度。
   *
   * @param { number | string } value - 指定PanelMode.Mini状态下的高度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  miniHeight(value: number | string): PanelAttribute;

  /**
   * 当滑动面板弹出时调用。
   *
   * @param { boolean } value - 当滑动面板弹出时调用，true显示面板，false不显示面板。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  show(value: boolean): PanelAttribute;

  /**
   * 指定Panel的背景蒙层。
   *
   * @param { ResourceColor } color - 指定Panel的背景蒙层。
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  backgroundMask(color: ResourceColor): PanelAttribute;

  /**
   * 设置是否显示关闭图标。
   *
   * @param { boolean } value - 设置是否显示关闭图标，true表示显示，false表示不显示。
   * @returns { PanelAttribute } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  showCloseIcon(value: boolean): PanelAttribute;

  /**
   * 当可滑动面板发生状态变化时触发。
   *
   * @param { function } event
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   * @deprecated since 12
   */
  onChange(
    event: (
    /**
     * Width of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Width of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      width: number,

    /**
     * Height of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Height of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      height: number,

    /**
     * Initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      mode: PanelMode,
    ) => void,
  ): PanelAttribute;

  /**
   * 当可滑动面板发生高度变化时触发。
   *
   * @param { function } callback
   * @returns { PanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onHeightChange(callback: (value: number) => void): PanelAttribute;
}

/**
 * 可滑动面板，提供一种轻量的内容展示窗口，方便在不同尺寸中切换。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 * @useinstead bindSheet
 * @noninterop
 */
declare const Panel: PanelInterface;

/**
 * 定义面板组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 * @noninterop
 */
declare const PanelInstance: PanelAttribute;