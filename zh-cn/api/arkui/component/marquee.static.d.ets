/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { ResourceColor, Length, LengthMetrics, ResourceStr, VoidCallback } from "./units";

import { CommonMethod, AttributeModifier } from "./common";
import { FontWeight, MarqueeUpdateStrategy } from "./enums";
import { Resource } from './../../../api/global/resource';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * Marquee初始化参数。
 *
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface MarqueeOptions {
  /**
   * 控制跑马灯是否进入播放状态。
   *
   * true：播放；false：不播放。
   *
   * 默认值：false
   *
   * 取值为undefined时，按默认值处理。
   *
   * **说明：**
   *
   * 有限的滚动次数播放完毕后，不可以通过改变start重置滚动次数重新开始播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start: boolean | undefined;
  /**
   * 滚动动画的文本步长。当step大于Marquee的文本宽度时，取默认值。
   *
   * 默认值：6
   *
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @default 6
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  step?: double;
  /**
   * 设置重复滚动的次数，小于等于零时无限循环。
   *
   * 默认值：-1
   *
   * **说明：**
   *
   * ArkTS卡片上该参数设置任意值都仅在可见时滚动一次。
   *
   * @default -1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  loop?: int;
  /**
   * 设置文本从头开始滚动或反向滚动。
   *
   * true：表示从头开始滚动
   *
   * false：表示反向滚动。
   *
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fromStart?: boolean;
  /**
   * 需要滚动的文本。
   *
   * 默认值：''
   *
   * 取值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  src: string | undefined;

  /**
   * 两轮跑马灯之间的间距。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。
   *
   * 默认值：跑马灯组件宽度。
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  spacing?: LengthMetrics;

  /**
   * 设置每次滚动的时间间隔。
   *
   * 默认值：0
   *
   * 取值范围：[0, +∞)，设置的值小于0时等价于设置0。
   *
   * 单位：毫秒
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  delay?: int;
}

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface MarqueeAttribute extends CommonMethod {
  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor | undefined } value
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * 设置字体大小。
   *
   * @param { Length | undefined } value
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: Length | undefined): this;
  /**
   * 设置是否允许文本缩放。
   *
   * @param { boolean | undefined } value - 是否允许文本缩放。<br/>true：允许文本缩放；false：不允许文本缩放。<br/>默认值：false<br/>**说明：**<br/>仅当
   *     [fontSize]{@link fontSize}为fp单位时生效。<br/>设置undefined时按默认值处理。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default allowScale(value: boolean | undefined): this;
  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字
   *     体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *     <br/>默认值：FontWeight.Normal<br/>设置undefined时按默认值处理。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
  /**
   * 设置字体列表。
   *
   * @param { string | Resource | undefined } value
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFamily(value: string | Resource | undefined): this;
  /**
   * 跑马灯组件属性更新后，跑马灯的滚动策略。(当跑马灯为播放状态，且文本内容宽度超过跑马灯组件宽度时，该属性生效。)
   *
   * @param { MarqueeUpdateStrategy | undefined } value - 跑马灯组件属性更新后，跑马灯的滚动策略。<br/>默认值: MarqueeUpdateStrategy.DEFAULT
   *     <br/>设置undefined时按默认值处理。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default marqueeUpdateStrategy(value: MarqueeUpdateStrategy | undefined): this;
  /**
   * 当滚动的文本内容变化或者开始滚动时触发回调。
   *
   * @param { function | undefined } event
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onStart(event: (() => void) | undefined): this;
  /**
   * 完成一次滚动时触发，若循环次数不为1，则该事件会多次触发。
   *
   * @param { function | undefined } event
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onBounce(event: (() => void) | undefined): this;
  /**
   * 滚动全部循环次数完成时触发回调。
   *
   * @param { function | undefined } event
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onFinish(event: (() => void) | undefined): this;
  /**
   * 跑马灯滚动结束或停止时触发回调。
   *
   * 跑马灯停止表示跑马灯将从开始位置，重新开始循环，不包含暂停场景，暂停不会触发该回调。
   *
   * @param { VoidCallback | undefined } event
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onStop(event: VoidCallback | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<MarqueeAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { MarqueeAttribute } the attribute of the MarqueeAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<MarqueeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建跑马灯组件。
 *
 * @param { MarqueeOptions } options
 * @returns { MarqueeAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Marquee(
    options: MarqueeOptions
): MarqueeAttribute;
