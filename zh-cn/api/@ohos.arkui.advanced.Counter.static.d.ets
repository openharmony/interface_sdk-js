
'use static';
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

import { PropRef } from '@ohos.arkui.stateManagement';

import {
  ResourceStr,
  Resource,
  Direction,
  Component,
  Builder,
  VoidCallback
} from '@ohos.arkui.component';

/**
* CounterType指定Counter类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare enum CounterType {

  /**
   * 列表型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  LIST = 0,

  /**
   * 紧凑型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  COMPACT = 1,

  /**
   * 普通数字内联调节型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  INLINE = 2,

  /**
   * 日期内联型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  INLINE_DATE = 3,
}

/**
* 鼠标进入或退出Counter组件时调用的回调函数类型。
*
 * @param { boolean } 表示鼠标是否悬浮在组件上，鼠标进入时为true，退出时为false。 - 表示鼠标是否悬浮在组件上，鼠标进入时为true，退出时为false。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnCounterHoverCallback = (isHover: boolean) => void;

/**
 * Defines the common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class CommonOptions {

  /**
   * 设置Counter是否可以获焦。
   * **说明：**
   * 该属性对列表型和紧凑型Counter生效。
   * 默认值：true。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  focusable?: boolean;

  /**
   * 设置Counter的步长。
   * 取值范围：大于等于1的整数。
   * 取值限定为整数。默认值：1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  step?: int;

  /**
   * 鼠标进入或退出Counter组件的增加按钮时触发该回调。
   * isHover：表示鼠标是否悬浮在增加按钮组件上，鼠标进入时为true，退出时为false。
   * 默认值：不触发鼠标进入或退出Counter组件的增加按钮时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onHoverIncrease?: OnCounterHoverCallback;

  /**
   * 鼠标进入或退出Counter组件的减小按钮触时发该回调。
   * isHover：表示鼠标是否悬浮在组件上，进入时为true，离开时为false。
   * 默认值：不触发鼠标进入或退出Counter组件的减小按钮时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onHoverDecrease?: OnCounterHoverCallback;
}

/**
* InlineStyleOptions定义了数值内联型Counter的属性和事件。
*
* 继承于[CommonOptions]{@link CommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class InlineStyleOptions extends CommonOptions {

  /**
   * 设置Counter的初始值。
   * 取值范围：[min, max]。默认值：0。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  value?: int;

  /**
   * 设置Counter的最小值。
   * 取值范围：(-∞, +∞)。默认值：0。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  min?: int;

  /**
   * 设置Counter的最大值。
   * 取值范围：(-∞, +∞)。默认值：999。
   *
   * @default 999
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  max?: int;

  /**
   * 设置数值文本的宽度。
   * 取值范围：[0, +∞)。默认值：自适应文本宽度。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  textWidth?: double;

  /**
   * 当数值改变时，返回当前值。
   * value：当前显示的数值。
   * 默认值：数值改变时，不返回值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onChange?: OnInlineCounterChange;
}

/**
* NumberStyleOptions定义了列表型和紧凑型Counter的属性和事件。
*
* 继承于[InlineStyleOptions]{@link InlineStyleOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class NumberStyleOptions extends InlineStyleOptions {

  /**
   * 设置Counter的说明文本。
   * 默认值：''。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  label?: ResourceStr;

  /**
   * 当前Counter组件增加按钮获取焦点时触发的回调。
   * 默认值：不触发增加按钮获取焦点时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onFocusIncrease?: VoidCallback;

  /**
   * 当前Counter组件减小按钮获取焦点时触发的回调。
   * 默认值：不触发减少按钮获取焦点时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onFocusDecrease?: VoidCallback;

  /**
   * 当前Counter组件增加按钮失去焦点时触发的回调。
   * 默认值：不触发增加按钮失去焦点时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onBlurIncrease?: VoidCallback;

  /**
   * 当前Counter组件减小按钮失去焦点时触发的回调。
   * 默认值：不触发减少按钮失去焦点时的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onBlurDecrease?: VoidCallback;
}

/**
* 当前显示的数值改变时调用的回调函数类型。
*
 * @param { int } 当前显示的数值。
*     <br>取值限定为整数。 - 当前显示的数值。
*     <br>取值限定为整数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnInlineCounterChange = (value: int) => void;

/**
 * Defines the date data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class DateData {

  /**
   * 设置日期内联型初始年份。
   * 取值范围：[1, 5000]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  year: int;

  /**
   * 设置日期内联型初始月份。
   * 取值范围：[1, 12]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  month: int;

  /**
   * 设置日期内联型初始日。
   * 取值范围：[1, 31]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  day: int;

  /**
   * Constructor of the DateData.
   *
   * @param { int } year - set the year of the DateData.
   * @param { int } month - set the month of the DateData.
   * @param { int } day - set the day of the DateData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(year: int, month: int, day: int);

  /**
   * Convert the date data to string.
   *
   * @returns { string } date data in string form.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  toString(): string;
}

/**
* 当日期改变时会被调用的回调函数的类型。
*
 * @param { DateData } 当前显示的日期值。 - 当前显示的日期值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnDateCounterChangeCallback = (date: DateData) => void;

/**
* DateStyleOptions定义了日期内联型Counter的属性和事件。
*
* 继承于[CommonOptions]{@link CommonOptions}。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class DateStyleOptions extends CommonOptions {

  /**
   * 设置日期内联型初始年份。
   * 取值范围：[1, 5000]。默认值：1
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  year?: int;

  /**
   * 设置日期内联型初始月份。
   * 取值范围：[1, 12]。默认值：1
   * 超出取值范围按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  month?: int;

  /**
   * 设置日期内联型初始日。
   * 取值范围：[1, 31]。默认值：1
   * 说明：每个月份的具体取值范围由该月份的实际天数决定。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  day?: int;

  /**
   * 当日期改变时，返回当前日期。
   * date：当前显示的日期值。
   * 值为undefined时，不显示当前的日期值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onDateChange?: OnDateCounterChangeCallback;
}

/**
 * Defines the counter options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare class CounterOptions {

  /**
   * 指定当前Counter的类型。
   *
   * 默认值：CounterType.LIST
   *
   * 不支持设置undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  type: CounterType;

  /**
   * 列表型和紧凑型Counter的样式。
   * 默认值：显示计数器为0的列表型或紧凑型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  numberOptions?: NumberStyleOptions;

  /**
   * 普通数字内联调节型Counter的样式。
   * 默认值：显示计数器为0的普通数字内联调节型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  inlineOptions?: InlineStyleOptions;

  /**
   * 日期型内联型Counter的样式。
   * 默认值：显示0001/01/01的日期型内联型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  dateOptions?: DateStyleOptions;

  /**
   * 布局方向。
   * 默认值：Direction。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  direction?: Direction;
}

/**
* CounterComponent({&nbsp;options:&nbsp;CounterOptions&nbsp;})
*
* 定义Counter。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
declare struct CounterComponent {

  /**
   * 定义Counter组件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @PropRef
  options: CounterOptions;

  /**
   * build函数用于构造Counter高级组件。
   *
   * **ArkTS模式：** 该接口仅适用于ArkTS-Sta。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   * @noninterop
   */
  @Builder
  build(): void;
}

export { CounterComponent, CounterOptions, DateData, CounterType, InlineStyleOptions, NumberStyleOptions, DateStyleOptions, CommonOptions };