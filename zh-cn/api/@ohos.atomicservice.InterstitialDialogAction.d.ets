/* 
 * Copyright (C) 2024 Huawei Device Co., Ltd
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * you may obtain a copy of the License at
 *
 * http://www/apache.org/license/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ###### 子组件
 * 
 * 无。
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}。
 * 
 * ###### 事件
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}。
 *
 * @file This section describes the interfaces used by InterstitialDialogAction
 * @kit ArkUI
 */

import { UIContext } from '@ohos.arkui.UIContext';
import { ComponentContent } from '@ohos.arkui.node';
/**
 * 设置关闭按钮的色调样式，默认为亮色调。
 * 
 * | 名称 | 值 | 说明 |
 * | - | - | - |
 * | DARK | 0 | 设置关闭按钮为暗色调。 |
 * | LIGHT | 1 | 设置关闭按钮为亮色调。默认值。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum IconStyle {
  /**
   * 设置关闭按钮为暗色调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  DARK = 0,
  /**
   * 设置关闭按钮为亮色调。默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  LIGHT = 1
}
/**
 * 设置主副标题之间的上下相对位置，默认设置为主标题在副标题之上。
 * 
 * | 名称 | 值 | 说明 |
 * | - | - | - |
 * | TOP | 0 | 设置主标题位于副标题之上。默认值。 |
 * | BOTTOM | 1 | 设置主标题位于副标题之下。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum TitlePosition {
  /**
   * 设置主标题位于副标题之上。默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  TOP = 0,
  /**
   * 设置主标题位于副标题之下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  BOTTOM = 1
}
/**
 * 设置不同情景模式下弹框距离底部的距离，判断依据为是否存在菜单栏，默认显示为不存在菜单栏情况下的距离。
 * 
 * | 名称 | 值 | 说明 |
 * | - | - | - |
 * | OFFSET_FOR_BAR | 0 | 存在菜单栏情况下与窗口底部的距离。设置后弹框距离底部88vp。 |
 * | OFFSET_FOR_NONE | 1 | 不存在菜单栏情况下与窗口底部的距离。默认值，设置后弹框距离底部44vp。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum BottomOffset {
  /**
   * 存在菜单栏情况下与窗口底部的距离。设置后弹框距离底部88vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  OFFSET_FOR_BAR = 0,
  /**
   * 不存在菜单栏情况下与窗口底部的距离。默认值，设置后弹框距离底部44vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  OFFSET_FOR_NONE = 1
}
/**
 * 设置弹框特有的属性以及提供给用户自定义的点击触发动作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare interface DialogOptions {
  /**
   * UI上下文实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  uiContext: UIContext;
  /**
   * 弹框距离底部偏移类型，需根据是否存在菜单栏选择对应值。默认值为BottomOffset.OFFSET_FOR_NONE。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  bottomOffsetType?: BottomOffset;
  /**
   * 弹框主标题文本。默认为空字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  title?: ResourceStr;
  /**
   * 弹框副标题文本。默认为空字符串。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitle?: ResourceStr;
  /**
   * 弹框主标题文本颜色。默认为$r('sys.color.ohos_id_color_text_primary_contrary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titleColor?: ResourceStr | Color;
  /**
   * 弹框副标题文本颜色。默认为$r('sys.color.ohos_id_color_text_secondary_contrary')。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitleColor?: ResourceStr | Color;
  /**
   * 弹框背景图片。默认为纯色背景，颜色值为#EBEEF5。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backgroundImage?: Resource;
  /**
   * 弹框前景图片。默认为空，即不显示前景图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  foregroundImage?: Resource;
  /**
   * 关闭按钮图标的样式（亮调或者暗调）。默认值：IconStyle.LIGHT
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  iconStyle?: IconStyle;
  /**
   * 主标题在弹框中的位置，在副标题的上方或者在副标题的下方。需设置subtitle属性后本参数才生效。默认值：TitlePosition.TOP
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titlePosition?: TitlePosition;
  /**
   * 点击弹框任意位置后触发的用户自定义动作。默认调用closeDialog方法关闭弹框。
   * 说明：点击关闭按钮区域时仅触发onDialogClose，不触发本回调；若需同时触发，请在onDialogClose中显式调用本回调逻辑。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClick?: Callback<void>;
  /**
   * 点击关闭按钮后触发的用户自定义动作。默认调用closeDialog方法关闭弹框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClose?: Callback<void>;
}
/**
 * InterstitialDialogAction弹框在原子化服务中用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户点击弹框的不同区域可以触发对应的回调动作。
 * 
 * > **说明：**
 * >
 * > 该组件从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class InterstitialDialogAction {
  /**
   * InterstitialDialogAction的构造函数。
   *
   * @param { DialogOptions } dialogOptions - Creates a new dialog action object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  constructor(dialogOptions: DialogOptions);
  /**
   * 打开弹框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  openDialog(): void;
  /**
   * 关闭弹框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  closeDialog(): void;
}