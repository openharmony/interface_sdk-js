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
* 提示点显示位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BadgePosition {

  /**
   * 圆点显示在右上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightTop = 0,

  /**
   * Dots are displayed in the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right,

  /**
   * The dot is displayed in the left vertical center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left,
}

/**
* Badge的样式。包括文本颜色、尺寸、字重、圆点颜色和尺寸等。
*
* > **说明：**
* >
* > - 当`borderWidth`大于0且`borderColor`与`badgeColor`颜色不一致时，先绘制角标，再绘制描边。由于边缘像素经过抗锯齿处理，抗锯齿产生半透明像素，四角会出现 `badgeColor` 颜色的描边
* > 线。如需实现相关场景，建议使用[Text]{@link text}组件设置[outline]{@link CommonMethod#outline(value: OutlineOptions)}代替Badge组件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeStyle {

  /**
   * 文本颜色。
   *
   * 默认值：Color.White
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: ResourceColor;

  /**
   * 文本大小。string类型仅支持number类型取值的字符串形式，可以附带单位，支持的单位有"px"、"vp"、"fp"、"lpx"，例如"10"、"10fp"，不附带单位时默认单位为"fp"。
   *
   * 默认值：10vp
   *
   * 默认单位：fp
   *
   * 取值范围：大于0；取值为0时不显示文本，取值小于0时取默认值。
   *
   * **说明：**
   *
   * 1. 不支持设置百分比，当设置为百分比时，按照默认值处理。
   * 2. 从API version 20开始，支持ResourceStr类型。
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?(number | ResourceStr) } [since 20]
   * @default 10vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize?: number | ResourceStr;

  /**
   * Badge的大小。string类型仅支持number类型取值的字符串形式，可以附带单位，支持的单位有"px"、"vp"、"fp"、"lpx"，例如"16"、"16fp"，不附带单位时默认单位为"fp"。
   *
   * 默认值：16vp
   *
   * 默认单位：fp
   *
   * 取值范围：大于0；取值为0时不显示Badge，取值小于0时取默认值。
   *
   * **说明：**
   *
   * 1. 不支持设置百分比，当设置为百分比时，按照默认值处理。
   * 2. 从API version 20开始，支持ResourceStr类型。
   * 3. 当设置了fontSize且badgeSize小于fontSize时，badgeSize将按照fontSize生效。
   *
   * @type { ?(number | string) } [since 7 - 19]
   * @type { ?(number | ResourceStr) } [since 20]
   * @default 16vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  badgeSize?: number | ResourceStr;

  /**
   * Badge的颜色。
   *
   * 默认值：Color.Red
   *
   * @default Color.Red
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  badgeColor?: ResourceColor;

  /**
   * 底板描边颜色。
   *
   * 默认值：Color.Red
   *
   * @default Color.Red
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderColor?: ResourceColor;

  /**
   * 底板描边粗细。
   *
   * 默认值：1
   *
   * 单位：vp
   *
   * **说明：**
   *
   * 不支持设置百分比，当设置为百分比时，按照默认值处理。
   *
   * @default 1vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  borderWidth?: Length;

  /**
   * 设置文本的字体粗细。number类型取值范围：[100, 900]，取值间隔为100。取值越大，字体越粗。设置number类型在取值范围外时，按默认值400处理。string类型仅支持number类型取值的字符串形式，例如"400
   * "，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。
   *
   * 默认值：FontWeight.Normal
   *
   * **说明：**
   *
   * 不支持设置百分比，当设置为百分比时，按照默认值处理。从API version 20开始，支持ResourceStr类型。
   *
   * @type { ?(number | FontWeight | string) } [since 10 - 19]
   * @type { ?(number | FontWeight | ResourceStr) } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontWeight?: number | FontWeight | ResourceStr;

  /**
   * 底板外描边颜色。
   *
   * 默认值：Color.White
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  outerBorderColor?: ResourceColor;

  /**
   * 底板外描边粗细。
   *
   * 默认值：0
   *
   * 单位：vp
   *
   * 不支持设置百分比，当设置为百分比时，按照默认值处理。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  outerBorderWidth?: LengthMetrics;

  /**
   * 增加角标文本延伸显示时是否避让。
   *
   * true表示避让，false表示不避让。
   *
   * 默认值：false
   *
   * **说明：**
   *
   * 1. 避让效果为角标文本向组件内部延伸显示。
   * 2. 当外描边的宽度大于0时，角标的延伸起点为外描边的内侧。
   * 3. 当position设置为具体坐标值时，角标不进行避让处理。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  enableAutoAvoidance?: boolean;
}

/**
* 包含用于创建Badge组件的基础参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParam {

  /**
   * 设置提示点显示位置。
   *
   * 默认值：BadgePosition.RightTop
   *
   * **说明：**
   *
   * Position作为入参，不支持设置百分比；设置为非法值时，默认(0,0)处理。(0,0)为组件左上角位置。
   *
   * BadgePosition作为入参时，会跟随[Direction]{@link Direction}属性控制镜像显示。
   *
   * @type { ?(BadgePosition) } [since 7 - 9]
   * @type { ?(BadgePosition | Position) } [since 10]
   * @default BadgePosition.RightTop
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  position?: BadgePosition | Position;

  /**
   * Badge组件可设置样式，支持设置文本颜色、尺寸、圆点颜色和尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style: BadgeStyle;
}

/**
* BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithNumber extends BadgeParam {

  /**
   * 设置提醒消息数。
   *
   * **说明：**
   *
   * 当该值小于等于0且小于maxCount时不显示信息标记。
   *
   * 取值范围：[-2147483648, 2147483647]。超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  count: number;

  /**
   * 最大消息数，超过最大消息时仅显示maxCount+，如maxCount是99时，显示`99+`。
   *
   * 默认值：99
   *
   * 取值范围：[-2147483648, 2147483647]。超出范围时会加上或减去4294967296，使得值仍在范围内，非整数时会舍去小数部分取整数部分，如5.5取5。
   *
   * @default 99
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxCount?: number;
}

/**
* BadgeParamWithNumber继承自[BadgeParam]{@link BadgeParam}，具有BadgeParam的全部属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BadgeParamWithString extends BadgeParam {

  /**
   * 提示内容的文本字符串。
   *
   * **说明：**
   *
   * 从API version 20开始，支持ResourceStr类型。
   *
   * @type { string } [since 7 - 19]
   * @type { ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  value: ResourceStr;
}

/**
* 信息标记组件，可以附加在单个组件上用于信息提醒的容器组件。
*
* ###### 子组件
*
* 支持单个子组件。
*
* > **说明：**
* >
* > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}）。
* >
* > - 自定义组件宽高默认为0，需要给其设置宽高，否则标记组件将不显示。
* >
* > - 当存在多个子组件时，只有最后一个子组件会在界面上显示，但其余子组件的状态更新仍会使Badge及其子组件重新布局渲染。
* >
* > - 不影响子组件布局，即不会主动规避子组件内容。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface BadgeInterface {

  /**
   * 根据数字创建标记组件。
   *
   * @param { BadgeParamWithNumber } value - 数字标记组件参数。
   * @returns { BadgeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: BadgeParamWithNumber): BadgeAttribute;

  /**
   * 根据字符串创建标记组件。
   *
   * @param { BadgeParamWithString } value - 字符串标记组件参数。
   * @returns { BadgeAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value: BadgeParamWithString): BadgeAttribute;
}

/**
* 支持[通用属性]{@link common}。
*
* 支持[通用事件]{@link common}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class BadgeAttribute extends CommonMethod<BadgeAttribute> {}

/**
* 信息标记组件，可以附加在单个组件上用于信息提醒的容器组件。
*
* ###### 子组件
*
* 支持单个子组件。
*
* > **说明：**
* >
* > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、
* > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}）。
* >
* > - 自定义组件宽高默认为0，需要给其设置宽高，否则标记组件将不显示。
* >
* > - 当存在多个子组件时，只有最后一个子组件会在界面上显示，但其余子组件的状态更新仍会使Badge及其子组件重新布局渲染。
* >
* > - 不影响子组件布局，即不会主动规避子组件内容。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Badge: BadgeInterface;

/**
* 定义Badge组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const BadgeInstance: BadgeAttribute;