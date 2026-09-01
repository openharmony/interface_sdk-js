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
 * 设置可滑动面板的初始状态
 * 
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 12开始废弃。
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
   * 类型为Minibar和Foldable时，为最小状态；类型为Temporary，则不生效。
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
   * 类型为Foldable和Temporary时，为类半屏状态；类型为Minibar，则不生效。
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
   * 类型为Minibar、Foldable和Temporary时，为类全屏状态；类型为CUSTOM，则不生效。
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
 * 设置可滑动面板的类型
 * 
 * > **说明：**
 * >
 * > 从API version 7开始支持，从API version 12开始废弃。
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
   * 提供Minibar和类全屏展示切换效果。
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
   * 内容始终展示，提供大（类全屏）、中（类半屏）、小三种尺寸展示切换效果。
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
   * 内容临时展示，提供大（类全屏）、中（类半屏）两种尺寸展示切换效果。
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
 * 设置可滑动面板的高度。
 * 
 * > **说明：**
 * >
 * > 从API version 10开始支持，从API version 12开始废弃。
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
   * [PanelType]{@link PanelType}的类型为CUSTOM时，自适应内容高度。
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
 * > **说明：**
 * >
 * > 从API version 12开始，该组件不再维护，推荐使用通用属性[bindSheet]{@link CommonMethod#bindSheet}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 * @noninterop
 */
interface PanelInterface {
  /**
   * 滑动面板组件。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。
   *
   * @param { boolean } show - 控制Panel显示或隐藏，true表示显示面板，false表示隐藏面板。
   *     <br>**说明：** 
   *     <br>如果设置为false时，则不占位隐藏。[Visibility]{@link Visibility}.None或show之间有一个生效时，都会生效不占位隐藏。
   *     <br>属性show的优先级高于此参数，当属性show被设置时，本参数可能不生效。
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
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 * @deprecated since 12
 * @noninterop
 */
declare class PanelAttribute extends CommonMethod<PanelAttribute> {
  /**
   * 可滑动面板的初始状态。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { PanelMode } value - 设置可滑动面板的初始状态。
   *     <br>Minibar类型默认值：PanelMode.Mini；其余类型默认值：PanelMode.Half
   *     <br>从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
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
   * 可滑动面板的类型。type属性值制约其他属性的使用：当type为Minibar时，PanelMode.Half不生效；当type为Temporary时，PanelMode.Mini不生效；当type为CUSTOM时，不支持尺寸切换
   * 效果，需配合customHeight属性使用；当type为Foldable时，所有PanelMode值均可用，可配合fullHeight、halfHeight、miniHeight属性设置各状态高度。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { PanelType } value - 设置可滑动面板的类型。
   *     <br>默认值：PanelType.Foldable
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { boolean } value - 设置是否存在控制条，true表示存在，false表示不存在。
   *     <br>默认值：true
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
   * 指定PanelType.CUSTOM状态下的高度。此属性仅在[type]{@link PanelAttribute#type}设置为PanelType.CUSTOM时生效，使用PanelHeight.WRAP_CONTENT时高度
   * 自适应内容，使用Dimension值时设置固定高度。
   * 
   * > **说明：**
   * >
   * > 从API version 10开始支持，从API version 12开始废弃。建议使用
   *
   * @param {Dimension | PanelHeight} value - 指定PanelType.CUSTOM状态下的高度。
   *     <br>默认值：0
   *     <br>**说明：** 
   *     <br>不支持设置百分比，传入百分比时不生效。传入负数时不生效。
   * @returns { PanelAttribute } Returns the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  customHeight(value: Dimension | PanelHeight): PanelAttribute;

  /**
   * 指定PanelMode.Full状态下的高度。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { number | string } value - 指定PanelMode.Full状态下的高度。
   *     <br>默认值：当前组件主轴大小减去8vp空白区
   *     <br>单位：vp
   *     <br>**说明：** 
   *     <br>不支持设置百分比。
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
   * > **说明：**
   * >
   * > 此属性仅在type为Foldable或Temporary时生效。当type为Minibar时，Half模式不生效，halfHeight设置无效。
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { number | string } value - 指定PanelMode.Half状态下的高度。
   *     <br>默认值：当前组件主轴大小的一半。
   *     <br>单位：vp
   *     <br>**说明：** 
   *     <br>不支持设置百分比。
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
   * > **说明：**
   * >
   * > 此属性仅在type为Minibar或Foldable时生效。当type为Temporary时，Mini模式不生效，miniHeight设置无效。
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { number | string } value - 指定PanelMode.Mini状态下的高度。
   *     <br>默认值：48
   *     <br>单位：vp
   *     <br>**说明：** 
   *     <br>不支持设置百分比。
   * @returns { PanelAttribute }
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 12开始废弃。建议使用
   *
   * @param { boolean } value - 当滑动面板弹出时调用，true显示面板，false不显示面板。 
   *     <br>默认值：true
   *     <br>**说明：** 
   *     <br>该属性的优先级高于参数show。
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
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 12开始废弃。建议使用
   *
   * @param { ResourceColor } color - 指定Panel的背景蒙层。
   *     <br>默认值：'#08182431'
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
   * > **说明：**
   * >
   * > 从API version 10开始支持，从API version 12开始废弃。建议使用
   *
   * @param { boolean } value - 设置是否显示关闭图标，true表示显示，false表示不显示。
   *     <br>默认值：false
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
     * 内容区的宽度值，单位：vp。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 7 dynamiconly
     * @deprecated since 12
     */
      width: number,

    /**
     * 内容区的高度值，单位：vp。
     * 
     * 当dragBar属性为true时，Panel本身的高度值为dragBar高度加上内容区高度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 7 dynamiconly
     * @deprecated since 12
     */
      height: number,

    /**
     * 面板的状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 7 dynamiconly
     * @deprecated since 12
     */
      mode: PanelMode,
    ) => void,
  ): PanelAttribute;

  /**
   * 当可滑动面板发生高度变化时触发。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 12开始废弃。建议使用
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
 * > **说明：**
 * >
 * > 从API version 12开始，该组件不再维护，推荐使用通用属性[bindSheet]{@link CommonMethod#bindSheet}。
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