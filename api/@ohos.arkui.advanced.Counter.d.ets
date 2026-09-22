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
 * Enumerates counter types.
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
   * List counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  LIST = 0,

  /**
   * Compact counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  COMPACT = 1,

  /**
   * Inline number counter.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  INLINE = 2,

  /**
   * Inline date counter.
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
 * Defines the common attributes and events of the **Counter** component.
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
   * Whether the Counter can obtain focus.
   *
   * **Note:** This attribute takes effect for the list and compact types of Counter, but not for the inline number and
   * inline date types.
   *
   * Default value: **true**
   *
   * **true**: The Counter can obtain focus (selected when the Counter needs to be operated via keyboard or focus
   * navigation); **false**: The Counter cannot obtain focus (selected when focus interaction is not required).
   *
   * If the value is **undefined**, the default value is used.
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
   * Step of the Counter. This is used when you need to quickly adjust the value (for example, by setting a step greater
   * than the default value 1) or precisely control the amount of each change.
   *
   * Value range: an integer greater than or equal to 1.
   *
   * Default value: **1**
   *
   * If the value is out of range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Callback triggered when the mouse enters or leaves the increase button of the Counter.
   *
   * Use case: pass in this callback when you need to perform custom operations (such as changing the button style or
   * displaying a tooltip) when the mouse hovers over the increase button.
   *
   * **isHover**: whether the mouse hovers over the increase button. The value is **true** when the mouse enters and
   * **false** when it leaves.
   *
   * Default value: no callback is triggered when the mouse enters or leaves the increase button of the Counter.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onHoverIncrease?: (isHover: boolean) => void;

  /**
   * Callback triggered when the mouse enters or leaves the decrease button of the Counter.
   *
   * Use case: pass in this callback when you need to perform custom operations (such as changing the button style or
   * displaying a tooltip) when the mouse hovers over the decrease button.
   *
   * **isHover**: whether the mouse hovers over the decrease button. The value is **true** when the mouse enters and
   * **false** when it leaves.
   *
   * Default value: no callback is triggered when the mouse enters or leaves the decrease button of the Counter.
   *
   * If the value is **undefined**, the default value is used.
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
 * Defines the inline numeric counter attributes and events.
 *
 * Inherits from [CommonOptions]{@link CommonOptions}.
 *
 * > **NOTE**
 * >
 * > 1. **min** must be less than or equal to **max**. If **min** is greater than **max**, **max** is used.
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
   * Initial value of **Counter**.
   *
   * Default value: **0**
   *
   * Value range: [min, max], where **min** and **max** correspond to the minimum and maximum values of **Counter**
   * respectively (the default value of **min** is **0** and **max** is **999**).
   *
   * If the value exceeds the range, **min** is used when the value is less than **min**, and **max** is used when the
   * value is greater than **max**.
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
   * Minimum value of **Counter**.
   *
   * Default value: **0**
   *
   * Value range: (-∞, max]
   *
   * If the value exceeds the range (that is, the set value is greater than **max**), **max** is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Maximum value of **Counter**.
   *
   * Default value: **999**
   *
   * Value range: [min, +∞)
   *
   * If the value exceeds the range (that is, the set value is less than **min**), **min** is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Width of the number text.
   *
   * Default value: adaptive text width.
   *
   * Value range: [0, +∞)
   *
   * Unit: vp
   *
   * If the value exceeds the range (that is, the set value is less than 0), **0** is used.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textWidth?: number;

  /**
   * Callback invoked when the value changes, returning the current value. Use case: pass in this callback when you need
   * to perform custom operations upon value changes (such as updating associated UI, logging, saving state, etc.).
   *
   * **value**: current displayed value.
   *
   * Default value: the callback is not triggered when the value changes.
   *
   * If the value is **undefined**, the default value is used.
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
 * Defines the list and compact counter attributes and events.
 *
 * Inherits from [InlineStyleOptions]{@link InlineStyleOptions} and includes all attributes of that API. This section
 * only describes the newly added attributes. For inherited attributes, see the parent API.
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
   * Label text of the Counter.
   *
   * Usage scenario: pass this parameter when you need to display descriptive text (such as 'Price', 'Quantity', etc.)
   * next to the Counter.
   *
   * Default value: ''
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  label?: ResourceStr;

  /**
   * Callback invoked when the increase button of the current Counter component gains focus.
   *
   * Usage scenario: pass this callback when you need to perform custom operations (such as changing styles, logging,
   * etc.) when the increase button gains focus.
   *
   * Default value: the callback is not triggered when the increase button gains focus.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFocusIncrease?: () => void;

  /**
   * Callback invoked when the decrease button of the current Counter component gains focus.
   *
   * Usage scenario: pass this callback when you need to perform custom operations (such as changing styles, logging,
   * etc.) when the decrease button gains focus.
   *
   * Default value: the callback is not triggered when the decrease button gains focus.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onFocusDecrease?: () => void;

  /**
   * Callback invoked when the increase button of the current Counter component loses focus.
   *
   * Usage scenario: pass this callback when you need to perform custom operations (such as validating input, saving
   * state, etc.) when the increase button loses focus.
   *
   * Default value: the callback is not triggered when the increase button loses focus.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onBlurIncrease?: () => void;

  /**
   * Callback invoked when the decrease button of the current Counter component loses focus.
   *
   * Usage scenario: pass this callback when you need to perform custom operations (such as validating input, saving
   * state, etc.) when the decrease button loses focus.
   *
   * Default value: the callback is not triggered when the decrease button loses focus.
   *
   * If the value is **undefined**, the default value is used.
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
 * Defines date attributes and methods, including year, month, and day.
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
   * Year of the inline date type. Value range: [1, 5000].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  year: number;

  /**
   * Month of the inline date type. Value range: [1, 12].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  month: number;

  /**
   * Day of the inline date type. Value range: [1, 31]. The specific value is determined by the actual number of days in
   * the month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  day: number;

  /**
   * DateData constructor for initializing date objects.
   *
   * @param { number } year - Year of the inline date type. Value range: [1, 5000].
   * @param { number } month - Month of the inline date type. Value range: [1, 12].
   * @param { number } day - Day of the inline date type. Value range: [1, 31]. The specific value is determined by the
   *     actual number of days in the month.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  constructor(year: number, month: number, day: number);

  /**
   * Returns the current date value in the string format, which is **YYYY-MM-DD**.
   *
   * @returns { string } Current date.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  toString(): string;
}

/**
 * Defines the attributes and events of the inline date counter.
 *
 * Inherits from [CommonOptions]{@link CommonOptions}.
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
   * Initial year of the inline date type.
   *
   * Default value: **1**
   *
   * Value range: [1, 5000]
   *
   * If the value is out of the range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Initial month of the inline date type.
   *
   * Default value: **1**
   *
   * Value range: [1, 12]
   *
   * If the value is out of the range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Initial day of the inline date type.
   *
   * Default value: **1**
   *
   * Value range: [1, 31]
   *
   * **Note:** The specific value range of days in each month is determined by the actual number of days in that month.
   *
   * If the value is out of the range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
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
   * Callback invoked when the date changes to return the current date. Use case: Pass in this callback when you need to
   * perform custom operations (such as updating associated UI, logging, saving state, etc.) upon date changes.
   *
   * **date**: currently displayed date value.
   *
   * Default value: no callback is triggered.
   *
   * If the value is **undefined**, the default value is used.
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
 * Defines the type and style of the **Counter** component.
 *
 * When you select a **Counter** type, you must select the corresponding **Counter** style. If the style parameter does
 * not match the type, the default style of that type is used.
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
   * Type of the current Counter. It must be used with the corresponding style parameters. For details about the
   * mapping, see the Counter Type and Style Mapping table.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type: CounterType;

  /**
   * Style of the list-type or compact-type Counter. It must be used with the type set to **CounterType.LIST** or
   * **CounterType.COMPACT**.
   *
   * Default value: a list-type or compact-type Counter with the counter displayed as **0**.
   *
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  numberOptions?: NumberStyleOptions;

  /**
   * Style of the inline number Counter. It must be used with the type set to **CounterType.INLINE**.
   *
   * Default value: an inline number Counter with the counter displayed as **0**.
   *
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  inlineOptions?: InlineStyleOptions;

  /**
   * Style of the inline date Counter. It must be used with the type set to **CounterType.INLINE_DATE**.
   *
   * Default value: an inline date Counter displaying **0001/01/01**.
   *
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  dateOptions?: DateStyleOptions;

  /**
   * Layout direction. This parameter is passed when adapting to right-to-left languages (such as Arabic) or
   * implementing a mirrored layout. **Direction.Auto**: automatically follows the system language direction (default).
   * **Direction.Ltr**: left-to-right layout, applicable to most languages. **Direction.Rtl**: right-to-left layout,
   * applicable to RTL languages such as Arabic.
   *
   * Default value: **Direction.Auto**
   *
   * If this parameter is set to **undefined**, the default value is used.
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
 * The **Counter** component is used for precise numerical value adjustment. It supports four styles: list, compact,
 * inline numeric, and inline date, and is suitable for scenarios such as shopping quantity adjustment, parameter
 * setting, and date selection. It provides flexible style configuration and event callback capabilities.
 *
 * > **NOTE**
 * >
 * > - If the **Counter** component has [universal attributes]{@link ./@internal/component/ets/common} and
 * > [universal events]{@link ./@internal/component/ets/common} set, the compilation toolchain generates an additional
 * > node named \_\_Common\_\_ and attaches the universal attributes or events to \_\_Common\_\_ instead of directly
 * > applying them to the **Counter** component. This may cause the universal attributes or events to not take effect or
 * > behave unexpectedly. Therefore, setting universal attributes and events for the **Counter** component is not
 * > recommended.
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
   * Configuration options for the type and style of the **Counter** component, including type (Counter type),
   * **direction** (layout direction), **numberOptions** (list and compact styles), **inlineOptions** (inline number
   * style), and **dateOptions** (inline date style).
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