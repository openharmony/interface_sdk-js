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
 * Marquee初始化参数。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface MarqueeOptions {

  /**
   * Control whether the running lamp enters the playing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start: boolean;

  /**
   * Scroll animation text scroll step, when step is larger than the text width of Marquee, take the default value.
   *
   * @default 6 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  step?: number;

  /**
   * Set the number of times the scroll is repeated, infinite loop if it is less than or equal to zero.
   *
   * @default -1 [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  loop?: number;

  /**
   * Set text to scroll from the beginning or backward.
   *
   * @default true [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fromStart?: boolean;

  /**
   * Text that needs scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string;

  /**
   * 两轮跑马灯的间距。
   *
   * 默认值为跑马灯宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  spacing?: LengthMetrics;

  /**
   * 两轮跑马灯之间的等待时间。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  delay?: number;
}

/**
 * 跑马灯组件，用于滚动展示一段单行文本。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，当文本内容宽度小于跑马灯组件宽度时不滚动。
 * 
 * > **说明：**
 * 
 * > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用[Text]{@link text}组件的[TextOverflow.MARQUEE]{@link TextOverflow}替代。
 * >
 * > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。
 * >
 * > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link common}实现滚动。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface MarqueeInterface {

  /**
   * 创建跑马灯组件。
   *
   * @param { object } value [since 8 - 17]
   * @param { MarqueeOptions } options - 配置跑马灯组件的参数。 [since 18]
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: MarqueeOptions): MarqueeAttribute;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class MarqueeAttribute extends CommonMethod<MarqueeAttribute> {

  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor } value - 字体颜色。<br />Wearable设备上默认值为：'#c5ffffff'，显示为淡蓝色，其他设备默认值为：'e6182431'，显示为黑色。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): MarqueeAttribute;

  /**
   * 设置字体大小。
   *
   * @param { Length } value - 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。不支持设置百分比字符串。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * 设置是否允许文本缩放。
   *
   * @param { boolean } value - 是否允许文本缩放。<br/>true：允许文本缩放；false：不允许文本缩放。<br/>默认值：false<br/>**说明：**<br/>仅当
   *     [fontSize]{@link MarqueeAttribute#fontSize}为fp单位时生效。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。
   *
   * @param { number | FontWeight | string } value - 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持
   *     number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。<br/>默认值：
   *     FontWeight.Normal
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontWeight(value: number | FontWeight | string): MarqueeAttribute;

  /**
   * 设置字体列表。
   *
   * @param { string | Resource } value - 字体列表。默认字体'HarmonyOS Sans'。<br>应用当前支持'HarmonyOS Sans'字体和注册自定义字体
   *     [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}。<br>卡片当前仅支持'HarmonyOS Sans'字体。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * 跑马灯组件属性更新后，跑马灯的滚动策略。(当跑马灯为播放状态，且文本内容宽度超过跑马灯组件宽度时，该属性生效。)
   *
   * @param { MarqueeUpdateStrategy } value - 跑马灯组件属性更新后，跑马灯的滚动策略。<br/>默认值: MarqueeUpdateStrategy.DEFAULT
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  marqueeUpdateStrategy(value: MarqueeUpdateStrategy): MarqueeAttribute;

  /**
   * 当滚动的文本内容变化或者开始滚动时触发回调。
   *
   * @param { function } event - 当滚动的文本内容变化或者开始滚动时的回调。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onStart(event: () => void): MarqueeAttribute;

  /**
   * 完成一次滚动时触发，若循环次数不为1，则该事件会多次触发。
   *
   * @param { function } event - 完成一次滚动时触发的回调。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onBounce(event: () => void): MarqueeAttribute;

  /**
   * 滚动全部循环次数完成时触发回调。
   *
   * @param { function } event - 滚动全部循环次数完成时的回调。
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onFinish(event: () => void): MarqueeAttribute;

  /**
   * 跑马灯滚动结束或停止时触发回调。
   * 
   * 跑马灯停止表示跑马灯将从开始位置，重新开始循环，不包含暂停场景，暂停不会触发该回调。
   *
   * @param { Callback<void> | undefined } event
   * @returns { MarqueeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onStop(event: Callback<void> | undefined): MarqueeAttribute;
}

/**
 * 跑马灯组件，用于滚动展示一段单行文本。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，当文本内容宽度小于跑马灯组件宽度时不滚动。
 * 
 * > **说明：**
 * 
 * > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用[Text]{@link text}组件的[TextOverflow.MARQUEE]{@link TextOverflow}替代。
 * >
 * > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。
 * >
 * > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link common}实现滚动。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Marquee: MarqueeInterface;

/**
 * 定义跑马灯组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const MarqueeInstance: MarqueeAttribute;