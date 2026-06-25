/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
* CounterType指定Counter类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare enum CounterType {

  /**
   * 列表型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LIST = 0,

  /**
   * 紧凑型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPACT = 1,

  /**
   * 普通数字内联调节型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  INLINE = 2,

  /**
   * 日期型内联型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  INLINE_DATE = 3
}

/**
* CommonOptions定义了Counter的共通属性和事件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class CommonOptions {

  /**
   * 设置Counter是否可获焦。
   *
   * **说明：**
   *
   * 该属性对列表型和紧凑型Counter生效。
   *
   * 默认值：true
   *
   * true：Counter可获焦；false：Counter不可获焦。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  focusable?: boolean;

  /**
   * 设置Counter的步长。
   *
   * 取值范围：大于等于1的整数。
   *
   * 默认值：1
   *
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  step?: number;

  /**
   * 鼠标进入或退出Counter组件的增加按钮时触发该回调。
   *
   * isHover：表示鼠标是否悬浮在组件上，鼠标进入时为true，退出时为false。
   *
   * 默认值：不触发鼠标进入或退出Counter组件的增加按钮时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onHoverIncrease?: (isHover: boolean) => void;

  /**
   * 鼠标进入或退出Counter组件的减小按钮时触发该回调。
   *
   * isHover：表示鼠标是否悬浮在组件上，进入时为true，离开时为false。
   *
   * 默认值：不触发鼠标进入或退出Counter组件的减小按钮时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onHoverDecrease?: (isHover: boolean) => void;
}

/**
* InlineStyleOptions定义了数值内联型Counter的属性和事件。
*
* 继承于[CommonOptions]{@link CommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class InlineStyleOptions extends CommonOptions {

  /**
   * 设置Counter的初始值。
   *
   * 默认值：0
   *
   * 取值范围：[min, max]，其中min和max分别对应下述Counter的最小值和最大值。
   *
   * 超出取值范围时，如果值为undefined，按默认值处理，否则按最大值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  value?: number;

  /**
   * 设置Counter的最小值。
   *
   * 默认值：0
   *
   * 取值范围：(-∞, +∞)
   *
   * 值为undefined时，按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  min?: number;

  /**
   * 设置Counter的最大值。
   *
   * 默认值：999
   *
   * 取值范围：(-∞, +∞)
   *
   * 值为undefined时，按默认值处理。
   *
   * @default 999
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  max?: number;

  /**
   * 设置数值文本的宽度。
   *
   * 默认值：自适应文本宽度。
   *
   * 取值范围：[0, +∞)
   *
   * 单位：vp
   *
   * 超出取值范围时，如果值为undefined，按默认值处理，否则按最大值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textWidth?: number;

  /**
   * 数值改变时，返回当前值。
   *
   * value：当前显示的数值。
   *
   * 默认值：数值改变时，不返回值。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onChange?: (value: number) => void;
}

/**
* NumberStyleOptions定义了列表型和紧凑型Counter的属性和事件。
*
* 继承于[InlineStyleOptions]{@link InlineStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class NumberStyleOptions extends InlineStyleOptions {

  /**
   * 设置Counter的说明文本。
   *
   * 默认值：' '
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  label?: ResourceStr;

  /**
   * 当前Counter组件的增加按钮获取焦点时触发的回调。
   *
   * 默认值：不触发增加按钮获取焦点时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFocusIncrease?: () => void;

  /**
   * 当前Counter组件的减小按钮获取焦点时触发的回调。
   *
   * 默认值：不触发减少按钮获取焦点时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFocusDecrease?: () => void;

  /**
   * 当前Counter组件的增加按钮失去焦点时触发的回调。
   *
   * 默认值：不触发增加按钮失去焦点时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onBlurIncrease?: () => void;

  /**
   * 当前Counter组件的减小按钮失去焦点时触发的回调。
   *
   * 默认值：不触发减少按钮失去焦点时的回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onBlurDecrease?: () => void;
}

/**
* DateData定义了日期通用属性和方法，包括年、月、日。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class DateData {

  /**
   * 设置日期内联型初始年份。
   *
   * 默认值：1
   *
   * 取值范围：[1, 5000]
   *
   * 超出取值范围按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  year: number;

  /**
   * 设置日期内联型初始月份。
   *
   * 默认值：1
   *
   * 取值范围：[1, 12]
   *
   * 超出取值范围按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  month: number;

  /**
   * 设置日期内联型初始日。
   *
   * 默认值：1
   *
   * 取值范围：[1, 31]
   *
   * 超出取值范围按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  day: number;

  /**
   * DateData的构造函数用于初始化日期对象。
   *
   * @param { number } year - 设置日期内联型初始年份。
   * @param { number } month - 设置日期内联型初始月份。
   * @param { number } day - 设置日期内联型初始日。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(year: number, month: number, day: number);

  /**
   * 以字符串格式返回当前日期值。格式为’YYYY-MM-DD'。
   *
   * @returns { string } 当前日期值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  toString(): string;
}

/**
* DateStyleOptions定义日期内联型Counter的属性和事件。
*
* 继承于[CommonOptions]{@link CommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class DateStyleOptions extends CommonOptions {

  /**
   * 设置日期内联型初始年份。
   *
   * 默认值：1
   *
   * 取值范围：[1, 5000]
   *
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  year?: number;

  /**
   * 设置日期内联型初始月份。
   *
   * 默认值：1
   *
   * 取值范围：[1, 12]
   *
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  month?: number;

  /**
   * 设置日期内联型初始日。
   *
   * 默认值：1
   *
   * 取值范围：[1, 31]
   *
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  day?: number;

  /**
   * 当日期改变时，返回当前日期。
   *
   * date：当前显示的日期值。
   *
   * 值为undefined时，不显示当前的日期值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onDateChange?: (date: DateData) => void;
}

/**
* CounterOptions定义Counter类型及样式。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class CounterOptions {

  /**
   * 指定当前Counter的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: CounterType;

  /**
   * 列表型和紧凑型Counter的样式。
   *
   * 默认值：显示计数器为0的列表型或紧凑型Counter。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  numberOptions?: NumberStyleOptions;

  /**
   * 普通数字内联调节型Counter的样式。
   *
   * 默认值：显示计数器为0的普通数字内联调节型Counter。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  inlineOptions?: InlineStyleOptions;

  /**
   * 日期型内联型Counter的样式。
   *
   * 默认值：显示0001/01/01的日期型内联型Counter。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dateOptions?: DateStyleOptions;

  /**
   * 布局方向。
   *
   * 默认值：Direction.Auto
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;
}

/**
* Counter组件用于精确调节数值。
*
* > **说明：**
*
* > - 如果Counter设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外
* > 生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到Counter本身。这可能导致开发者设置的通用属性或通用事件的效果不生效或不符合预期，因此，不建议Counter设置通用属性和通用事
* > 件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Component
declare struct CounterComponent {

  /**
   * 定义Counter组件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  @Prop
  options: CounterOptions;
}

export {CounterComponent, CounterOptions, DateData, CounterType};