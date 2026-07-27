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
 * 无
 * 
 * ###### 属性
 * 
 * 不支持[通用属性]{@link ./@internal/component/ets/common}
 * 
 * ###### 事件
 * 
 * 不支持[通用事件]{@link ./@internal/component/ets/common}
 *
 * @file This section describes the interfaces used by InterstitialDialogAction
 * @kit ArkUI
 */

import { UIContext } from '@ohos.arkui.UIContext';
import { ComponentContent } from '@ohos.arkui.node';
/**
 * 设置关闭按钮的色调样式，默认设置关闭按钮为亮色调。
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
   * Sets the button icon to dark.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  DARK = 0,
  /**
   * Sets the button icon to light.
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
 * | BOTTOM | 1 | 设置副标题位于主标题之上。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare enum TitlePosition {
  /**
   * The main title is above the text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  TOP = 0,
  /**
   * The main title is below the text content.
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
   * dialog distance relative to the bottom in the presence of tabs.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  OFFSET_FOR_BAR = 0,
  /**
   * dialog is the distance relative to the bottom without tabs.
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
   * The UIContext required by the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  uiContext: UIContext;
  /**
   * The type of the bottom offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  bottomOffsetType?: BottomOffset;
  /**
   * The title of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  title?: ResourceStr;
  /**
   * The subtitle of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitle?: ResourceStr;
  /**
   * The color of the title.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titleColor?: ResourceStr | Color;
  /**
   * The color of the subtitle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  subtitleColor?: ResourceStr | Color;
  /**
   * The background of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  backgroundImage?: Resource;
  /**
   * The foreground of the dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  foregroundImage?: Resource;
  /**
   * The style of the close button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  iconStyle?: IconStyle;
  /**
   * The relative position of the title and subtitle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  titlePosition?: TitlePosition;
  /**
   * The action after clicking dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClick?: Callback<void>;
  /**
   * The action after clicking close button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12 dynamiconly
   */
  onDialogClose?: Callback<void>;
}
/**
 * InterstitialDialogAction弹框在原子化服务中用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户点击弹框的不同区域可以触发相应的动作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12 dynamiconly
 */
export declare class InterstitialDialogAction {
  /**
     * InterstitialDialogAction的构造函数
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