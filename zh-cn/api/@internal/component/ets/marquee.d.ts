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
   * 控制跑马灯是否进入播放状态。
   * 
   * true：播放；false：不播放。
   * 
   * **说明：**
   * 
   * 当loop参数设置为大于0的有限次数且播放完毕后，不可以通过改变start参数重置滚动次数重新开始播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start: boolean;

  /**
   * 滚动动画的文本步长。
   * 
   * 取值范围：[0, 文本宽度]，当step大于Marquee的文本宽度时，取默认值。
   * 
   * 默认值：6 
   * 
   * 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
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
   * 设置重复滚动的次数，小于等于零时无限循环。
   * 
   * 默认值：-1
   * 
   * **说明：**
   * 
   * ArkTS卡片上该参数设置任意值都仅在可见时滚动一次。当设置为大于0的有限次数且播放完毕后，不可以通过改变start参数重置滚动次数重新开始播放。
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
   * 设置文本的滚动方向。
   * 
   * true：表示文本从头部位置开始正向滚动；false：表示文本反向滚动。
   * 
   * 默认值：true
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
   * 需要滚动的文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  src: string;

  /**
   * 两轮跑马灯之间的间距。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。
   * 
   * 默认值：跑马灯组件宽度。
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
   * 设置两轮滚动之间的延迟时间。
   * 
   * 默认值：0 
   * 
   * 取值范围：[0, +∞)，设置的值小于0时等价于设置0。
   * 
   * 单位：毫秒
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
 * 跑马灯组件，用于滚动展示一段单行文本，支持自定义滚动速度、方向、循环次数等。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，否则不滚动。适用于需要在有限空间内展示较长文本的场景，如新闻标题滚动、通知公告、广告轮播等，可以有效节省界面空间
 * 并吸引用户注意。
 * 
 * > **说明：**
 * >
 * > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用
 * >
 * > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。
 * >
 * > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link ./common}实现滚动。
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
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 
 * 
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。
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
   * 设置字体颜色。未通过该接口设置时，默认字体颜色为'#e6182431'，表示深灰色（不透明度约为90%），Wearable设备上默认字体颜色为'#c5ffffff'，表示白色（不透明度约为77%）。
   *
   * @param { ResourceColor } value - 字体颜色。
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
   *     <br>Wearable设备上默认值：15fp
   *     <br>**说明：**
   *     <br>配合[allowScale]{@link MarqueeAttribute#allowScale}属性使用时，需设置为fp单位。
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): MarqueeAttribute;

  /**
   * 设置是否允许文本缩放。未通过该接口设置时，默认不允许文本缩放。
   *
   * @param { boolean } value - 是否允许文本缩放。
   *     <br>true：允许文本缩放；false：不允许文本缩放。
   *     <br>**说明：**
   *     <br>仅当[fontSize]{@link MarqueeAttribute#fontSize}为fp单位时生效。
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  allowScale(value: boolean): MarqueeAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会在不同字体下有截断。未通过该接口设置时，默认字体粗细为FontWeight.Normal（正常粗细，对应数值400）。
   *
   * @param { number | FontWeight | string } value - 文本的字体粗细
   *     <br>number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“
   *     lighter”、“regular”、“medium”，分别对应FontWeight中相应的枚举值。设置过大可能会在不同字体下有截断。
   *     <br>传入超出取值范围的值时取默认值。传入不符合间隔要求的值时，若设置fontWeightConfigs的enableVariableFontWeight为true，使用传入值；若设置为false，使用默认值。
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
   * @param { string | Resource } value - 字体列表。默认字体'HarmonyOS Sans'。
   *     <br>应用当前支持'HarmonyOS Sans'字体和注册自定义字体[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}。
   *     <br>卡片当前仅支持'HarmonyOS Sans'字体。
   * @returns { MarqueeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: string | Resource): MarqueeAttribute;

  /**
   * 跑马灯组件属性更新后，跑马灯的滚动策略。(当跑马灯为播放状态，且文本内容宽度大于等于跑马灯组件宽度时，该属性生效。)未通过该接口设置时，默认使用MarqueeUpdateStrategy.DEFAULT。
   * 
   * 使用场景：
   * 
   * - MarqueeUpdateStrategy.DEFAULT：适用于内容更新后希望以默认策略重新开始滚动展示的场景。
   * - MarqueeUpdateStrategy.PRESERVE_POSITION：适用于内容动态更新时希望保持当前滚动位置继续滚动的场景，如实时时钟、股价等动态内容展示。
   *
   * @param { MarqueeUpdateStrategy } value - 跑马灯组件属性更新后，跑马灯的滚动策略。
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
   * 完成一次完整滚动时触发，若循环次数不为1，则该事件会多次触发。
   *
   * @param { function } event - 完成一次完整滚动时触发的回调。
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
 * 跑马灯组件，用于滚动展示一段单行文本，支持自定义滚动速度、方向、循环次数等。仅当文本内容宽度大于等于跑马灯组件宽度时滚动，否则不滚动。适用于需要在有限空间内展示较长文本的场景，如新闻标题滚动、通知公告、广告轮播等，可以有效节省界面空间
 * 并吸引用户注意。
 * 
 * > **说明：**
 * >
 * > 为了不影响滚动帧率，建议在滚动类组件中Marquee的个数不超过4个，或者使用
 * >
 * > 对于Marquee组件动态帧率的场景，可以使用[MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext}接口实现。
 * >
 * > 在文本宽度小于跑马灯组件宽度时，使用[属性动画]{@link ./common}实现滚动。
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