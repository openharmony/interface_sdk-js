/*
* Copyright (C) 2026 Huawei Device Co., Ltd.
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

import { TextModifier, ImageModifier } from './@ohos.arkui.modifier';

/**
 * @file
 * @kit ArkUI
 */

 /**
 * PopupV2Button定义按钮的相关属性和事件。
 *
 * @typedef PopupV2Button
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2Button {
  /**
   * 设置按钮内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text: ResourceStr;

  /**
   * 设置按钮文本属性，如设置文本颜色、字体大小等。默认值：undefined，值为undefined时，默认使用系统按钮文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttonTextModifier?: TextModifier

  /**
   * 设置按钮点击回调。
   * 
   * 默认不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: Callback<void>;

}

 /**
 * 定义PopupV2的具体样式参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2InitInfo {
  /**
   * 设置PopupV2关闭按钮回调函数。
   * 
   * 默认不设置关闭按钮回调函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClose?: Callback<void>;

  /**
   * 设置PopupV2标题文本。
   * 
   * **说明：** 默认值：''，不显示标题文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  title?: ResourceStr;

  /**
   * 设置标题文本属性，如设置标题颜色、字体大小、字重等。
   * 
   * 默认值：undefined，使用系统标题文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  titleModifier?: TextModifier

  /**
   * 设置PopupV2关闭按钮。true：显示关闭按钮；false：不显示关闭按钮。Resource类型：显示对应的图标。
   * 
   * 默认值：true
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * 设置PopupV2操作按钮，按钮最多设置两个。默认不显示按钮。
   * 
   * 默认值：[{ text: '' }, { text: '' }]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttons?: [PopupV2Button?, PopupV2Button?];

  /**
   * 设置PopupV2内容文本。
   * 
   * **说明：** 默认值：''，不显示内容文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  message: ResourceStr;

  /**
   * 设置内容文本属性，如设置内容文本颜色、字体大小、字重等。
   * 
   * 默认值：undefined，使用系统内容文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxWidth?: Dimension;

  /**
   * 设置PopupV2图标。
   * 
   * **说明：** 默认值：''，不显示图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * 设置图标属性，如图标颜色、大小、边框等。
   * 
   * 默认值：undefined，使用系统图标属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconModifier?: ImageModifier;

  /**
    * 布局方向。
    * 
    * 默认值：Direction.Auto
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 26.0.0 dynamic
    */
   direction?: Direction;

}

 /**
 * PopupV2用于显示特定样式的气泡。
 * 
 * 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，
 * 相较于[状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，
 * 状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组件层级。借助状态管理（V2），
 * 开发者可以通过该组件更灵活地控制显示特定样式的气泡，实现更高效的用户界面刷新。
 *
 * @param { PopupV2InitInfo } options - 定义PopupV2组件的配置参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@Builder
export declare function PopupV2(options: PopupV2InitInfo): void;
