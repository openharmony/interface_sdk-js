'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * ######  子组件
 * 
 * 无
 *
 * @file
 * @kit ArkUI
 */

import { ResourceStr, Builder, ResourceStr, Resource,
  VoidCallback, Dimension, Length, BorderRadiuses, Direction } from '@ohos.arkui.component';
import { ImageModifier, TextModifier } from './@ohos.arkui.modifier';

/**
 * PopupV2Button定义按钮的相关属性和事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PopupV2Button {
  /**
   * 设置按钮内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  text: ResourceStr;

  /**
   * 设置按钮文本属性，如设置文本颜色、字体大小等。默认值：undefined，值为undefined时，默认使用系统按钮文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  buttonTextModifier?: TextModifier

  /**
   * 设置按钮点击回调。
   * 
   * 默认不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  action?: VoidCallback;

}

 /**
 * 定义PopupV2的具体样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface PopupV2InitInfo {
  /**
   * 设置PopupV2关闭按钮回调函数。
   * 
   * 默认不设置关闭按钮回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onClose?: VoidCallback;

  /**
   * 设置PopupV2标题文本。
   * 
   * **说明：** 默认值：''，不显示标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  title?: ResourceStr;

  /**
   * 设置标题文本属性，如设置标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined，使用系统标题文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  titleModifier?: TextModifier

  /**
   * 设置PopupV2关闭按钮。true：显示关闭按钮；false：不显示关闭按钮。Resource类型：显示对应的图标。
   * 
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  showClose?: boolean | Resource;

  /**
   * 设置PopupV2操作按钮，按钮最多设置两个。默认不显示按钮。
   * 
   * 默认值：[{ text: '' }, { text: '' }]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  buttons?: [PopupV2Button | undefined, PopupV2Button | undefined];

  /**
   * 设置PopupV2内容文本。
   * 
   * **说明：** 默认值：''，不显示内容文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  message: ResourceStr;

  /**
   * 设置内容文本属性，如设置内容文本颜色、字体大小、字重等。
   * 
   * 默认值：undefined，使用系统内容文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  messageModifier?: TextModifier

  /**
   * 设置PopupV2的最大宽度，通过此接口PopupV2可以自定义宽度显示。
   * 
   * 默认值：400vp
   * 
   * **说明：** 
   * 
   * 1. 在使用引用资源类型时，规定其参数类型要与属性方法本身类型一致。
   * 2. maxWidth是数字类型，支持float和整型，例如`$r('app.float.maxWidth')`、`$r('app.integer.maxWidth')`。
   * 3. 当类型为Resource时，如果未设置单位，默认单位为px。
   *
   * @default 400.0_vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maxWidth?: Dimension;

  /**
   * 设置PopupV2图标。
   * 
   * **说明：** 默认值：''，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  icon?: ResourceStr;

  /**
   * 设置图标属性，如图标颜色、大小、边框等。
   * 
   * 默认值：undefined，使用系统图标属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  iconModifier?: ImageModifier;

  /**
    * 布局方向。
    * 
    * 默认值：Direction.Auto
    *
    * @default Direction.Auto
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @since 26.0.0 static
    */
   direction?: Direction;

}

 /**
 *
 * @param { PopupV2InitInfo } options - 定义PopupV2组件的配置参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Builder
export declare function PopupV2(options: PopupV2InitInfo): void;