/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
* CounterV2Type指定CounterV2类型。
*
* 各类型CounterV2组件的展示效果可参考
* [示例1（列表型CounterV2）](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-CounterV2.md#示例1列表型counterv2)、
* [示例2（紧凑型CounterV2）](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-CounterV2.md#示例2紧凑型counterv2)、
* [示例3（数值内联型CounterV2）](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-CounterV2.md#示例3数值内联型counterv2)、
* [示例4（日期内联型CounterV2）](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-CounterV2.md#示例4日期内联型counterv2)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum CounterV2Type {
  /**
   * 列表型CounterV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LIST = 0,

  /**
   * 紧凑型CounterV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  COMPACT = 1,

  /**
   * 数值内联型CounterV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INLINE = 2,

  /**
   * 日期内联型CounterV2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INLINE_DATE = 3
}

/**
* 定义CounterV2的鼠标悬浮回调类型。
*
 * @param { boolean } 表示鼠标是否悬浮在组件上。
 *     <br>鼠标进入时为true，离开时为false。 - 表示鼠标是否悬浮在组件上。
 *     <br>鼠标进入时为true，离开时为false。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnCounterV2HoverCallback = (isHover: boolean) => void;

/**
* CounterV2CommonOptions定义了CounterV2的共通属性和事件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2CommonOptions {
  /**
   * 设置CounterV2是否可获焦。
   *
   * **说明：**
   *
   * 该属性对列表型和紧凑型CounterV2生效。对数值内联型和日期内联型CounterV2不生效。
   *
   * 默认值：true
   *
   * true：CounterV2可获焦；false：CounterV2不可获焦。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  focusable?: boolean;

  /**
   * 设置CounterV2的步长。
   *
   * **说明：**
   *
   * 该属性对列表型、紧凑型和数值内联型CounterV2生效。对日期内联型CounterV2不生效。
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  step?: int;

  /**
   * 鼠标进入或退出CounterV2组件的“增加按钮”时，触发该回调。
   *
   * 使用场景：当需要在鼠标悬浮“增加按钮”时执行自定义操作（如改变按钮样式、显示提示信息等）时传入此回调。
   *
   * **说明：**
   *
   * 该属性对列表型、紧凑型和数值内联型CounterV2生效。对日期内联型CounterV2不生效。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onHoverIncrease?: OnCounterV2HoverCallback;

  /**
   * 鼠标进入或退出CounterV2组件的“减少按钮”时，触发该回调。
   *
   * 使用场景：当需要在鼠标悬浮“减少按钮”时执行自定义操作（如改变按钮样式、显示提示信息等）时传入此回调。
   *
   * **说明：**
   *
   * 该属性对列表型、紧凑型和数值内联型CounterV2生效。对日期内联型CounterV2不生效。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onHoverDecrease?: OnCounterV2HoverCallback;
}

/**
* 定义数值内联型CounterV2的值变化回调类型。
*
 * @param { int } value - 当前显示的数值。
 *     <br>取值范围：[min, max]，其中min和max分别对应CounterV2的最小值和最大值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnInlineCounterV2Change = (value: int) => void;

/**
* CounterV2InlineStyleOptions定义了数值内联型CounterV2的属性和事件。
*
 * 继承于[CounterV2CommonOptions]{@link CounterV2CommonOptions}，包含该接口所有属性。本节仅展示新增属性，继承属性请参见父接口。
 *
 * > **说明：**
 * >
 * > 1. min应小于等于max。若min大于max，则按max处理。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2InlineStyleOptions extends CounterV2CommonOptions {
  /**
   * 设置CounterV2的初始值。
   *
   * 默认值：0
   *
   * 有效值范围：[min, max]，其中min和max分别对应CounterV2的最小值和最大值。
   *
   * 值为undefined时，按默认值处理。
   *
   * 边界处理：若value小于min则按min处理，若value大于max则按max处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  value?: int;

  /**
   * 设置CounterV2的最小值。
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  min?: int;

  /**
   * 设置CounterV2的最大值。
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  max?: int;

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
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  textWidth?: double;

  /**
   * 数值改变时，触发该回调。回调参数value表示当前显示的数值。
   *
   * 使用场景：当需要在数值变化时执行自定义操作（如更新关联数据、触发业务逻辑、记录日志等）时传入此回调。
   *
   * 默认值：undefined，表示数值改变时不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onChange?: OnInlineCounterV2Change;
}

/**
* CounterV2NumberStyleOptions定义了列表型和紧凑型CounterV2的属性和事件。
*
 * 继承于[CounterV2InlineStyleOptions]{@link CounterV2InlineStyleOptions}，包含该接口及
 * [CounterV2CommonOptions]{@link CounterV2CommonOptions}所有属性。本节仅展示新增属性，继承属性请参见父接口。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2NumberStyleOptions extends CounterV2InlineStyleOptions {
  /**
   * 设置CounterV2的说明文本。
   *
   * 默认值：''
   *
   * 说明：当需要在CounterV2旁边显示说明文字（如“价格”、“数量”等）时传入此参数。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label?: ResourceStr;

  /**
   * 当CounterV2组件的“增加按钮”获取焦点时，触发该回调。
   *
   * 使用场景：当需要在增加按钮获焦时执行自定义操作（如改变样式、记录日志等）时传入此回调。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onFocusIncrease?: VoidCallback;

  /**
   * 当CounterV2组件的“减少按钮”获取焦点时，触发该回调。
   *
   * 使用场景：当需要在减少按钮获焦时执行自定义操作（如改变样式、记录日志等）时传入此回调。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onFocusDecrease?: VoidCallback;

  /**
   * 当CounterV2组件的“增加按钮”失去焦点时，触发该回调。
   *
   * 使用场景：当需要在增加按钮失焦时执行自定义操作（如验证输入、保存状态等）时传入此回调。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onBlurIncrease?: VoidCallback;

  /**
   * 当CounterV2组件的“减少按钮”失去焦点时，触发该回调。
   *
   * 使用场景：当需要在减少按钮失焦时执行自定义操作（如验证输入、保存状态等）时传入此回调。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onBlurDecrease?: VoidCallback;
}

/**
* CounterV2DateData定义了日期通用属性和方法，包括年、月、日。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2DateData {
  /**
   * 表示日期内联型的年份。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  year: int;

  /**
   * 表示日期内联型的月份。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  month: int;

  /**
   * 表示日期内联型的日。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  day: int;

  /**
   * CounterV2DateData的构造函数用于初始化日期对象。
   *
   * @param { int } year - 日期内联型的年份。取值范围：[1, 5000]。超出取值范围按默认值处理。
   * @param { int } month - 日期内联型的月份。取值范围：[1, 12]。超出取值范围按默认值处理。
   * @param { int } day - 日期内联型的日。取值范围：[1, 31]。必须为合法日期，如month为2月时，day传入30将视为异常值，按默认值处理。超出取值范围按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(year: int, month: int, day: int);

  /**
   * 以字符串格式返回当前日期值。格式为"YYYY-MM-DD"。
   *
   * @returns { string } 格式为“YYYY-MM-DD”的日期字符串，例如“2024-01-15”。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  toString(): string;
}

/**
 * 定义日期内联型CounterV2的日期变化回调类型。
*
 * @param { CounterV2DateData } 当前显示的日期值。 - 当前显示的日期值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type OnDateCounterV2ChangeCallback = (date: CounterV2DateData) => void;

/**
* CounterV2DateStyleOptions定义日期内联型CounterV2的属性和事件。
*
 * 继承于[CounterV2CommonOptions]{@link CounterV2CommonOptions}，包含该接口所有属性。本节仅展示新增属性，继承属性请参见父接口。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2DateStyleOptions extends CounterV2CommonOptions {
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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  year?: int;

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
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  month?: int;

  /**
   * 设置日期内联型初始日。
   *
   * 默认值：1
   *
   * 取值范围：[1, 31]
   *
   * 必须为合法日期，如month为2月时，day传入30将视为异常值，按默认值处理。
   *
   * 超出取值范围按默认值处理。
   *
   * 值为undefined时，按默认值处理。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  day?: int;

  /**
   * 当日期改变时，触发该回调。回调参数date表示当前显示的日期值。
   *
   * 使用场景：当需要在日期变化时执行自定义操作（如更新关联数据、触发业务逻辑、记录日志等）时传入此回调。
   *
   * 默认值：undefined，表示不触发该回调。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onDateChange?: OnDateCounterV2ChangeCallback;
}

/**
* CounterV2Options定义CounterV2类型及样式。
*
 * 选择不同的CounterV2类型，需要选择对应的CounterV2样式。若样式参数与类型不匹配，将使用该类型对应的默认样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class CounterV2Options {
  /**
   * 指定当前CounterV2的类型。需配合对应的样式参数使用，具体对应关系见下表。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  type: CounterV2Type;

  /**
   * 列表型和紧凑型CounterV2的样式。
   *
   * 默认值：undefined，显示数值为0的列表型或紧凑型CounterV2。
   *
   * 当需要自定义列表型或紧凑型CounterV2的标签、初始值、范围、步长等属性时传入此参数；当计数器初始值为0且不需要自定义配置时可以不传入，使用默认样式。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  numberOptions?: CounterV2NumberStyleOptions;

  /**
   * 数值内联型CounterV2的样式。
   *
   * 默认值：undefined，显示数值为0的数值内联型CounterV2。
   *
   * 当需要自定义数值内联型CounterV2的初始值、范围、步长、文本宽度、变化回调等属性时传入此参数；当计数器初始值为0且不需要自定义配置时可以不传入，使用默认样式。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  inlineOptions?: CounterV2InlineStyleOptions;

  /**
   * 日期内联型CounterV2的样式。
   *
   * 默认值：undefined，显示0001/01/01的日期内联型CounterV2。
   *
   * 当需要自定义日期内联型CounterV2的初始日期、日期变化回调等属性时传入此参数；当需要显示默认日期0001/01/01且不需要自定义配置时可以不传入，使用默认样式。
   *
   * 值为undefined时，按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  dateOptions?: CounterV2DateStyleOptions;

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
   * @since 26.0.0 dynamic
   */
  direction?: Direction;
}

/**
 * CounterV2组件用于精确调节数值，包含列表型、紧凑型、数值内联型和日期内联型四种类型，适用于购物车数量调节、日期选择等场景。
*
* 该组件基于[状态管理（V2）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v2)实现，相较于
* [状态管理（V1）](docroot://ui/state-management/arkts-state-management-overview.md#状态管理v1)，状态管理（V2）增强了对数据对象的深度观察与管理能力，不再局限于组
 * 件层级。借助状态管理（V2），开发者可以通过该组件更灵活地控制CounterV2的数据和状态，实现更高效的用户界面刷新。
*
* > **说明：**
* >
* > - 如果CounterV2设置[通用属性]{@link ./@internal/component/ets/common}和[通用事件]{@link ./@internal/component/ets/common}，编译工具链会
 * > 额外生成节点__Common__，并将通用属性或通用事件挂载在__Common__上，而不是直接应用到CounterV2本身。这可能导致开发者设置的通用属性或通用事件不生效或不符合预期，因此，不建议为CounterV2设置通用属性
 * > 和通用事件。
 * >
 * > - 该组件接口仅可在Stage模型下使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
declare struct CounterV2Component {
  /**
   * 定义CounterV2组件的类型及样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Param
  options: CounterV2Options;
}

export {
    CounterV2Component,
    CounterV2Options,
    CounterV2DateData,
    CounterV2Type
};