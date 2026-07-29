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
 * TextTimer组件的控制器，用于控制文本计时器。一个TextTimer组件仅支持绑定一个控制器，组件创建完成后相关指令才能被调用。一个TextTimerController只能控制最后一个绑定此
 * TextTimerController的TextTimer组件。
 * 
 * ###### 导入对象
 * 
 * ```ts
 * textTimerController: TextTimerController = new TextTimerController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextTimerController {
  /**
   * TextTimerController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 计时开始。需在TextTimer组件创建完成并绑定控制器后调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start();

  /**
   * 计时暂停。需在组件创建完成后调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  pause();

  /**
   * 重置计时器。需在组件创建完成后调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  reset();
}

/**
 * ContentModifier接口使用的TextTimer配置。
 *
 * 开发者需要自定义class实现ContentModifier接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextTimerConfiguration extends CommonConfiguration<TextTimerConfiguration> {
  /**
   * 计时器初始时间，单位为毫秒，isCountDown为true时生效。
   * 
   * 默认值：60000
   * 
   * 取值范围为(0, 86400000)，即不超过24小时。超出取值范围时置为默认值。
   *
   * @default 60000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  count: number;

  /**
   * 是否倒计时。
   *
   * true：计时器开启倒计时，例如从30秒 ~ 0秒；false：计时器开始计时，例如从0秒 ~ 30秒。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isCountDown: boolean;

  /**
   * 是否已经开始了计时。
   *
   * true：开始计时；false：未开始计时。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  started: boolean;

  /**
   * 计时器经过的时间，单位为设置格式的最小单位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  elapsedTime: number;

  /**
   * 计时器正向计时模式下的初始时间，仅当isCountDown为false时该参数设置生效。
   * 
   * 取值范围：无上限，支持负数。
   * 
   * 默认值：0 
   * 
   * 单位：毫秒 
   * 
   * 当值为负数时，计时器将从负值开始计时，经过0后继续向正数计时。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  startTime?: number;
}

/**
 * 用于构建TextTimer组件的选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
interface TextTimerOptions {
  /**
   * 倒计时开关。
   *
   * true：计时器开启倒计时，例如从30秒~0秒。
   *
   * false：计时器开始计时，例如从0秒~30秒。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isCountDown?: boolean;

  /**
   * 计时器初始时间，单位为毫秒，isCountDown为true时生效。
   * 
   * 默认值：60000
   * 
   * 取值范围为(0, 86400000)，即不超过24小时。超出取值范围时置为默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  count?: number;

  /**
   * TextTimer控制器，用于通过编程方式控制计时器的启动、暂停和重置。不传入时，计时器仍可正常显示但无法通过代码控制其状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextTimerController;

  /**
   * 计时器正向计时模式下的初始时间，仅当isCountDown为false时该参数设置生效。
   * 
   * 取值范围：[−2147483648, 2147483647]。
   * 
   * 默认值：0 
   * 
   * 单位：毫秒 
   * 
   * 当值为负数时，计时器将从负值开始计时，经过0后继续向正数计时。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  startTime?: number;
}

/**
 * TextTimer是通过文本显示计时信息并控制其计时器状态的组件，支持正向计时与倒计时两种模式，可自定义显示格式，适用于秒表、活动倒计时等需要展示时间流逝的场景。常用于倒计时场景，如考试倒计时、限时活动、运动计时等。
 * 
 * 组件不可见（非锁屏状态和应用后台状态）时，UI时间变动将停止（即该组件此时不会绘制），[onTimer]{@link TextTimerAttribute#onTimer}仍然会正常触发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TextTimerInterface {
  /**
   * 创建文本计时器组件。
   *
   * @param { TextTimerOptions } options - 通过文本显示计时信息并控制其计时器状态的组件参数。当需要自定义计时器配置（如设置倒计时开关、计时时间、初始时间、控制器等）时传入此参数；不传入时使用
   *     TextTimerOptions的默认配置。
   *     <br>默认值继承[TextTimerOptions]{@link TextTimerOptions} 。
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TextTimerOptions): TextTimerAttribute;
}

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。
 *
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持以下事件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TextTimerAttribute extends CommonMethod<TextTimerAttribute> {
  /**
   * 设置自定义时间格式，需至少包含一个HH、mm、ss、SS中的关键字。使用yy、MM、dd等日期格式时，不支持该格式，将使用默认格式'HH:mm:ss.SS'。
   * 
   * 计时器更新频率按format最小单位处理，例如：format设置为'HH:mm'时，更新频率为一分钟。设置高精度的format（如包含SS）时，可能会导致onTimer回调间隔不均匀。
   *
   * @param { string } value - 自定义计时器显示的时间格式，需至少包含一个HH、mm、ss、SS中的关键字。
   *     <br>默认值：'HH:mm:ss.SS'
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  format(value: string): TextTimerAttribute;

  /**
   * 设置字体颜色。
   *
   * @param { ResourceColor } value - 字体颜色。
   *     <br>Wearable设备上默认值为：'#c5ffffff'，显示白色。
   *     <br>其他设备上默认值：'#e6182431'，显示黑色。
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): TextTimerAttribute;

  /**
   * 设置字体大小。
   *
   * @param { Length } value - 字体大小。
   *     <br>默认值：16fp
   *     <br>value为Length中的number类型时，单位为fp。value为Length中的string类型时，若设置值为非数字开头，则按0fp处理；若设置值为数字开头，当数字后内容包含除
   *     [像素单位]{@link ./common}外的字符（如字母、特殊符号等）时，取值字符串开头的数字部分，单位为fp。
   *     <br>例如：设置值为"abc"时取值为0fp，设置值为"10vp"时取值为10vp，设置值为"10vp11abc"时取值为10fp。不支持设置百分比字符串。
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontSize(value: Length): TextTimerAttribute;

  /**
   * 设置字体样式。
   *
   * @param { FontStyle } value - 字体样式，例如斜体的字体样式。
   *     <br>默认值：FontStyle.Normal
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontStyle(value: FontStyle): TextTimerAttribute;

  /**
   * 设置文本的字体粗细，设置过大可能会导致不同字体下的文字出现截断。
   *
   * @param { number | FontWeight | string } value - Font weight of the text. The value range of the number type is
   *     [100, 900]. The value interval is 100. A larger value indicates a wider font. If the value of the number type
   *     is not within the value range, the default value is **400**. The [ResourceStr]{@link ResourceStr} type supports
   *     only strings of the number type, such as **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
   *     **"medium"**, corresponding to the enums in **FontWeight**.<br>Default value: **FontWeight.Normal**<br>The
   *     Resource type is supported since API version 20. [since 8 - 19]
   * @param { number | FontWeight | ResourceStr } value - 文本的字体粗细，number类型取值范围为[100, 900]，取值间隔为100，取值越大，字体越粗。number类型取值范
   *     围外的默认值为400。[ResourceStr]{@link ResourceStr}类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、
   *     "medium"，分别对应FontWeight中相应的枚举值。
   *     <br>默认值：FontWeight.Normal 
   *     <br>从API version 20开始，支持Resource类型。 [since 20]
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextTimerAttribute;

  /**
   * 设置字体列表。
   *
   * @param { ResourceStr } value - 字体列表。默认字体为'HarmonyOS Sans'。
   *     <br>应用当前支持'HarmonyOS Sans'字体和[注册自定义字体]{@link @ohos.font:font}。
   *     <br>卡片当前仅支持'HarmonyOS Sans'字体。
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontFamily(value: ResourceStr): TextTimerAttribute;

  /**
   * 时间文本发生变化时触发该事件。锁屏状态和应用后台状态下不会触发该事件。组件不可见（非锁屏状态和应用后台状态）时，UI时间变动将停止，但该事件仍会正常触发。设置高精度的
   * [format]{@link TextTimerAttribute#format}（SS）时，回调间隔可能不均匀，相邻两次回调的时间间隔可能存在差异。
   *
   * @param { function } event - utc: Linux timestamp, which is the amount of time that has elapsed since January 1, 197
   *     0, in the minimum unit of the format.
   *     <br>elapsedTime: Elapsed time of the timer, in the minimum unit of the
   *     format.
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onTimer(event: (utc: number, elapsedTime: number) => void): TextTimerAttribute;

  /**
   * 设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段和智能取色模式。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ShadowOptions | Array<ShadowOptions> } value - 文字阴影效果的参数，包括颜色、模糊半径、偏移量。
   * @returns { TextTimerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textShadow(value: ShadowOptions | Array<ShadowOptions>): TextTimerAttribute;

  /**
   * 定制TextTimer内容区的方法。当默认的文本显示样式无法满足需求时，可用于实现自定义的计时器UI效果。
   *
   * @param { ContentModifier<TextTimerConfiguration> } modifier - 在TextTimer组件上，定制内容区的方法。
   *     <br>modifier： 内容修改器，开发者需要自定义class实现ContentModifier接口。
   * @returns { TextTimerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<TextTimerConfiguration>): TextTimerAttribute;
}

/**
 * TextTimer是通过文本显示计时信息并控制其计时器状态的组件，支持正向计时与倒计时两种模式，可自定义显示格式，适用于秒表、活动倒计时等需要展示时间流逝的场景。常用于倒计时场景，如考试倒计时、限时活动、运动计时等。
 * 
 * 组件不可见（非锁屏状态和应用后台状态）时，UI时间变动将停止（即该组件此时不会绘制），[onTimer]{@link TextTimerAttribute#onTimer}仍然会正常触发。
 *
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextTimer: TextTimerInterface;

/**
 * 定义TextTimer组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextTimerInstance: TextTimerAttribute;