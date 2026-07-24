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
   * 数值内联型Counter。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  INLINE = 2,

  /**
   * 日期内联型Counter。
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
 * CommonOptions定义了Counter的通用属性和事件。
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
   * 该属性对列表型和紧凑型Counter生效，对数值内联型和日期内联型Counter不生效。
   *
   * 默认值：true
   *
   * true：Counter可获焦（当需要通过键盘或焦点导航操作Counter时选择）；false：Counter不可获焦（当不需要焦点交互时选择）。
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
   * 设置Counter的步长。当需要快速调整数值时（如设置大于默认值1的步长），或需要精确控制每次变化量时使用。
   *
   * 取值范围：大于等于1的整数。
   *
   * 默认值：1
   *
   * 超出取值范围按默认值处理。
   *
   * 值为undefined时，按默认值处理。
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
   * 使用场景：当鼠标悬浮在增加按钮上，需要执行自定义操作（如改变按钮样式、显示提示信息等）时传入此回调。
   *
   * isHover：表示鼠标是否悬浮在增加按钮上，鼠标进入时为true，退出时为false。
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
   * 鼠标进入或退出Counter组件的减少按钮时触发该回调。
   *
   * 使用场景：当鼠标悬浮在减少按钮上，需要执行自定义操作（如改变按钮样式、显示提示信息等）时传入此回调。
   *
   * isHover：表示鼠标是否悬浮在减少按钮上，鼠标进入时为true，退出时为false。
   *
   * 默认值：不触发鼠标进入或退出Counter组件的减少按钮时的回调。
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
 * > **说明：**
 * >
 * > 1. min应小于等于max。若min大于max，则按max处理。
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
   * 取值范围：[min, max]，其中min和max分别对应下述Counter的最小值和最大值（min默认为0，max默认为999）。
   *
   * 超出取值范围时，如果值小于min，按min处理；如果值大于max，按max处理。
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
   * 取值范围：(-∞, max]
   *
   * 超出取值范围时（即设置值大于max），按max处理。
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
   * 取值范围：[min, +∞)
   *
   * 超出取值范围时（即设置值小于min），按min处理。
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
   * 超出取值范围时（即设置值小于0），按0处理。
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
  textWidth?: number;

  /**
   * 数值改变时，返回当前值。使用场景：当需要在数值变化时执行自定义操作（如更新关联UI、记录日志、保存状态等）时传入此回调。
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
 * 继承于[InlineStyleOptions]{@link InlineStyleOptions}，包含该接口所有属性。本节仅展示新增属性，继承属性请参见父接口。
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
   * 使用场景：当需要在Counter旁边显示说明文字（如'价格'、'数量'等）时传入此参数。
   *
   * 默认值：''
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
   * 使用场景：当需要在增加按钮获焦时执行自定义操作（如改变样式、记录日志等）时传入此回调。
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
   * 当前Counter组件的减少按钮获取焦点时触发的回调。
   *
   * 使用场景：当需要在减少按钮获焦时执行自定义操作（如改变样式、记录日志等）时传入此回调。
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
   * 使用场景：当需要在增加按钮失焦时执行自定义操作（如验证输入、保存状态等）时传入此回调。
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
   * 当前Counter组件的减少按钮失去焦点时触发的回调。
   *
   * 使用场景：当需要在减少按钮失焦时执行自定义操作（如验证输入、保存状态等）时传入此回调。
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
   * 表示日期内联型的年份。取值范围：[1, 5000]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  year: number;

  /**
   * 表示日期内联型的月份。取值范围：[1, 12]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  month: number;

  /**
   * 表示日期内联型的日。取值范围：[1, 31]，具体取值由月份的实际天数决定。
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
   * @param { number } year - 日期内联型的年份。取值范围：[1, 5000]。
   * @param { number } month - 日期内联型的月份。取值范围：[1, 12]。
   * @param { number } day - 日期内联型的日。取值范围：[1, 31]，具体取值由月份的实际天数决定。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(year: number, month: number, day: number);

  /**
   * 以字符串格式返回当前日期值。格式为"YYYY-MM-DD"。
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
 * DateStyleOptions定义了日期内联型Counter的属性和事件。
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
   * 值为undefined时，按默认值处理。
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
   * 值为undefined时，按默认值处理。
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
   * **说明：**每个月份天数的具体取值范围由该月份的实际天数决定。
   *
   * 超出取值范围按默认值处理。
   *
   * 值为undefined时，按默认值处理。
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
   * 当日期改变时，返回当前日期。使用场景：当需要在日期变化时执行自定义操作（如更新关联UI、记录日志、保存状态等）时传入此回调。
   *
   * date：当前显示的日期值。
   *
   * 默认值：不触发回调。
   *
   * 值为undefined时，按默认值处理。
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
 * CounterOptions定义了Counter类型及样式。
 *
 * 选择不同的Counter类型时，需选择对应的Counter样式。若样式参数与类型不匹配，将使用该类型对应的默认样式。
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
   * 指定当前Counter的类型。需配合对应的样式参数使用，具体对应关系参见Counter类型与样式对照表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: CounterType;

  /**
   * 列表型和紧凑型Counter的样式。需配合type为CounterType.LIST或CounterType.COMPACT使用。
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
   * 数值内联型Counter的样式。需配合type为CounterType.INLINE使用。
   *
   * 默认值：显示计数器为0的数值内联型Counter。
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
   * 日期内联型Counter的样式。需配合type为CounterType.INLINE_DATE使用。
   *
   * 默认值：显示0001/01/01的日期内联型Counter。
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
   * 布局方向。当需要适配从右到左的语言（如阿拉伯语）或实现镜像布局时传入此参数。Direction.Auto：自动跟随系统语言方向（默认）；Direction.Ltr：从左到右布局，适用于大多数语言；Direction.Rtl：从右到
   * 左布局，适用于阿拉伯语等RTL语言。
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
 * Counter组件用于精确调节数值，支持列表型、紧凑型、数值内联型和日期内联型四种样式，适用于购物数量调节、参数设置、日期选择等场景，具有灵活的样式配置和事件回调能力。
*
* > **说明：**
 * >
* > - 如果Counter设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会额外
 * > 生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到Counter本身。这可能导致开发者设置的通用属性或通用事件的效果不生效或不符合预期，因此，不建议为Counter设置通用属性和通用
 * > 事件。
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
   * 定义Counter组件的类型及样式选项。
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