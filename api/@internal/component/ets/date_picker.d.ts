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
 * Defines the time format returned by the date picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerResult {

  /**
   * Year of the selected date.
   *
   * Value range: depends on **start** and **end**. If **start** and **end** are not set, the default range is
   * [1970, 2100].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  year?: number;

  /**
   * Zero-based month index of the selected date. **0** indicates January, and **11** indicates December.
   *
   * Value range: depends on **start** and **end**. If **start** and **end** are not set, the default range is [0, 11].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  month?: number;

  /**
   * Day of the selected date.
   *
   * Value range: depends on **start** and **end**. If **start** and **end** are not set, the default range is [1, 31].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  day?: number;
}

/**
 * Enumerates date display modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare enum DatePickerMode {

  /**
   * Three-column display: year, month, and day.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  DATE = 0,

  /**
   * Two-column display: year and month.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  YEAR_AND_MONTH = 1,

  /**
   * Two-column display: month and day.
   *
   * In this mode, the year value remains fixed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  MONTH_AND_DAY = 2
}

/**
 * Describes the parameters of the date picker.
 *
 * > **NOTE**
 * >
 * > - For details about how to use **Date**, see [TimePickerOptions]{@link TimePickerOptions}.
 * >
 * > - Property modifications made to **DatePickerOptions** during the **DatePicker** scrolling process may not take
 * > effect.
 *
 * > **NOTE**
 * >
 * > Handle exceptions for the start and end dates first, followed by exceptions for the selected date.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerOptions {

  /**
   * Start date of the picker.
   *
   * Default value: **Date('1970-1-1')**
   *
   * Value range: [Date('1900-01-31'), Date('2100-12-31')].
   *
   * @default Date('1970-1-1') [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  start?: Date;

  /**
   * End date of the picker.
   *
   * Default value: **Date('2100-12-31')**
   *
   * Value range: [Date('1900-01-31'), Date('2100-12-31')].
   *
   * @default Date('2100-12-31') [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  end?: Date;

  /**
   * Date of the selected item.
   *
   * Default value: current system date.
   *
   * Value range: [Date('1900-01-31'), Date('2100-12-31')].
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @default current system date [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: Date;

  /**
   * Date display mode.
   *
   * Default value: **DatePickerMode.DATE**, which means to display three columns: year, month, and day.
   *
   * In [DatePickerDialog]{@link ./date_picker}, when **showTime** in
   * [DatePickerDialogOptions]{@link DatePickerDialogOptions} is **true**, this parameter is ignored and the year,
   * month, day columns are always shown.
   *
   * @default DatePickerMode.DATE - which means to display three columns: year, month, and day.
   *     <br>Decimal values are rounded off.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mode?: DatePickerMode;
}

/**
 * **DatePicker** is a component for selecting a date through scrolling interaction.
 *
 * > **NOTE**
 *
 * > - Avoid changing component attributes during animation processes.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface DatePickerInterface {

  /**
   * Creates a date picker in the given date range.
   *
   * @param { DatePickerOptions } options - Parameters of the date picker.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: DatePickerOptions): DatePickerAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @extends CommonMethod [since 8 - 10]
 * @extends CommonMethod<DatePickerAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class DatePickerAttribute extends CommonMethod<DatePickerAttribute> {

  /**
   * Sets whether to display dates in lunar calendar format.
   *
   * @param { boolean } value - Whether to display dates in lunar calendar format.<br>- **true**: Display dates in lunar
   *     calendar format.<br>- **false**: Do not display dates in lunar calendar format.<br>Default value: **false**
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lunar(value: boolean): DatePickerAttribute;

  /**
   * Sets whether to display dates in lunar calendar format. Compared to
   * [lunar]{@link DatePickerAttribute#lunar(value: boolean)}, the **isLunar** parameter supports the **undefined**
   * type.
   *
   * @param { Optional<boolean> } isLunar - Whether to display dates in lunar calendar format.<br>- **true**: Display
   *     dates in lunar calendar format.<br>- **false**: Do not display dates in lunar calendar format.<br>Default
   *     value: **false**<br>If the value of **isLunar** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  lunar(isLunar: Optional<boolean>): DatePickerAttribute;

  /**
   * Sets the text style for edge items (the second item above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for edge items.<br>Default value:<br>{<br
   *     >color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * Sets the text style for edge items (the second item above or below the selected item). Compared to
   * [disappearTextStyle<sup>10+</sup>]{@link DatePickerAttribute#disappearTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for edge items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Sets the text style for candidate items (the first item immediately above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for candidate items.<br>Default value:<br
   *     >{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * Sets the text style for candidate items (the first item immediately above or below the selected item). Compared to
   * [textStyle<sup>10+</sup>]{@link DatePickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the
   * **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for candidate items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Sets the text style for the selected item.
   *
   * @param { PickerTextStyle } value - Font color, font size, and font weight of the selected item.<br>Default value:<
   *     br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>}
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): DatePickerAttribute;

  /**
   * Sets the text style for the selected item. Compared to
   * [selectedTextStyle<sup>10+</sup>]{@link DatePickerAttribute#selectedTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the selected item.<br>
   *     Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>}<
   *     br>If the value of **style** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;

  /**
   * Triggered when the date picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables.
   *
   * This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * [onDateChange]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)} instead.
   *
   * @param { function } callback - Selected time.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead DatePickerAttribute#onDateChange(callback: Callback<Date>)
   */
  onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;

  /**
   * Triggered when the date picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables.
   *
   * @param { function } callback - Selected date, where the year, month, and day portions are subject to the selection,
   *     the hour and minute portions are subject to the current system time, and the second portion is always
   *     **00**. [since 10 - 17]
   * @param { Callback<Date> } callback - Selected date, where the year, month, and day portions are subject to the
   *     selection, the hour and minute portions are subject to the current system time, and the second portion is
   *     always **00**. [since 18]
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateChange(callback: Callback<Date>): DatePickerAttribute;

  /**
   * Triggered when the date picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. Compared to
   * [onDateChange<sup>10+</sup>]{@link DatePickerAttribute#onDateChange(callback: Callback<Date>)}, this API supports
   * the **undefined** type for the **callback** parameter.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<Callback<Date>> } callback - Selected date, where the year, month, and day portions are subject
   *     to the selection, the hour and minute portions are subject to the current system time, and the second portion
   *     is always **00**.<br>If **callback** is set to **undefined**, the callback function is not used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDateChange(callback: Optional<Callback<Date>>): DatePickerAttribute;

  /**
   * Sets the sensitivity to the digital crown rotation.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.<br>Default value:
   *     **CrownSensitivity.MEDIUM**
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): DatePickerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.<br>
   *     - **false**: Disable haptic feedback.<br>Default value: **true**.<br>Whether this parameter takes effect after
   *     being set to **true** depends on hardware support.<br>If the value of **enable** is **undefined**, the default
   *     value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): DatePickerAttribute;

  /**
   * Sets whether to enable cyclic scrolling.
   *
   * @param { Optional<boolean> } isLoop - Whether to enable cyclic scrolling.<br>- **true**: Cyclic scrolling is
   *     enabled, where the year values increment or decrement with month cycling, and month values increment or
   *     decrement with day cycling.<br>- **false**: Cyclic scrolling is disabled, preventing out-of-bounds scrolling
   *     in year, month, and day columns and cross-column value synchronization.<br>Default value: **true**.<br>If the
   *     value of **isLoop** is **undefined**, the default value is used.
   * @returns { DatePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop(isLoop: Optional<boolean>): DatePickerAttribute;
}

/**
 * Defines the style of the lunar calendar switch in the **DatePickerDialog** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface LunarSwitchStyle {

  /**
   * Background color of the switch when it is on.
   *
   * Default value: **$r('sys.color.ohos_id_color_text_primary_actived')**
   *
   * @default $r('sys.color.ohos_id_color_text_primary_actived')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  selectedColor?: ResourceColor;

  /**
   * Border color of the switch when it is off.
   *
   * Default value: **$r('sys.color.ohos_id_color_switch_outline_off')**
   *
   * @default $r('sys.color.ohos_id_color_switch_outline_off')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  unselectedColor?: ResourceColor;

  /**
   * Color of the icon inside the switch.
   *
   * Default value: **Color.White**
   *
   * @default Color.White
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  strokeColor?: ResourceColor;
}

/**
 * Defines the configuration options of the date picker dialog box.
 *
 * Inherited from [DatePickerOptions]{@link DatePickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {

  /**
   * Whether to display dates in lunar calendar format.
   *
   * - **true**: Display dates in lunar calendar format.
   * - **false**: Do not display dates in lunar calendar format.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * This attribute takes effect only in Simplified Chinese and Traditional Chinese locales; it has no effect in other
   * locales.
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lunar?: boolean;

  /**
   * Whether to display the lunar calendar switch.
   *
   * - **true**: Display the lunar calendar switch.
   * - **false**: Do not display the lunar calendar switch.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * After being enabled, this attribute takes effect only in Simplified Chinese and Traditional Chinese; it has no
   * effect in other locales. Therefore, you are advised to set this attribute to **false** in other locales.
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  lunarSwitch?: boolean;

  /**
   * Style of the lunar calendar switch.
   *
   * Default value: {
   *
   * selectedColor: `$r('sys.color.ohos_id_color_text_primary_actived')`,
   *
   * unselectedColor: `$r('sys.color.ohos_id_color_switch_outline_off')`,
   *
   * strokeColor: Color.White
   *
   * }
   *
   * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
   *            unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'),
   *            strokeColor: Color.White }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  lunarSwitchStyle?: LunarSwitchStyle;

  /**
   * Whether to display the time picker in the dialog box.
   *
   * - **true**: Display the time picker.
   * - **false**: Do not display the time picker.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * 1. When showTime is true, clicking the date in the dialog box header toggles between date-only and date+time views.
   * 2. When showTime is true, the mode parameter is ignored, meaning the date picker always shows year, month,
   *    and day columns.
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showTime?: boolean;

  /**
   * Whether the time picker in the dialog box is in 24-hour format. This parameter has effect only when **showTime** is
   * **true**.
   *
   * - **true**: 24-hour format.
   * - **false**: 12-hour format.
   *
   * Default value: **false**
   *
   * **NOTE**
   *
   * When 12-hour format is used in the time picker, the AM/PM indicator does not automatically update when the hour
   * value changes.
   *
   * @default false [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  useMilitaryTime?: boolean;

  /**
   * Text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * Default value: { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Text color, font size, and font weight of candidate items (the first item immediately above or below the selected
   * item).
   *
   * Default value: { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: PickerTextStyle;

  /**
   * Style of the accept button.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**。
   *    If both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp and remains fixed even in accessibility and large-font modes.
   *    In addition, even if the button style is set to [ROUNDED_RECTANGLE]{@link ButtonType},
   *    the displayed effect is still a capsule button ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of the cancel button.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**.
   *    If both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp and remains fixed even in accessibility and large-font modes.
   *    In addition, even if the button style is set to [ROUNDED_RECTANGLE]{@link ButtonType},
   *    the displayed effect is still a capsule button ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Text color, font size, and font weight of the selected item.
   *
   * Default value: { color: '#ff007dff', font: { size: '20vp', weight: FontWeight.Medium }
   *
   * @default { color: '#ff007dff', font: { size: '20vp', weight: FontWeight.Medium } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask
   * area are not.
   *
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
   *
   * @default { x: 0, y: 0, width: '100%', height: '100%' } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * Alignment mode of the dialog box in the vertical direction.
   *
   * Default value: **DialogAlignment.Default**
   *
   * @default DialogAlignment.Default [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box based on the **alignment** settings.
   *
   * Default value: **{ dx: 0 , dy: 0 }**
   *
   * @default { dx: 0 , dy: 0 } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset?: Offset;

  /**
   * Callback invoked when the OK button in the dialog box is clicked.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * **onDateAccept** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateAccept
   */
  onAccept?: (value: DatePickerResult) => void;

  /**
   * Callback invoked when the Cancel button in the dialog box is clicked.
   *
   * @type { ?function } [since 8 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * Callback invoked when the selected item in the picker changes.
   *
   * **NOTE**
   *
   * This API is supported since API version 8 and deprecated since API version 10. You are advised to use
   * **onDateChange** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead datePicker/DatePickerDialogOptions#onDateChange
   */
  onChange?: (value: DatePickerResult) => void;

  /**
   * Callback invoked when the OK button in the dialog box is clicked.
   *
   * **NOTE**
   *
   * When **showTime** is set to **true**, the hour and minute in the value returned by the callback are the hour and
   * minute selected in the picker. Otherwise, the hour and minute are the hour and minute of the system time.
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateAccept?: Callback<Date>;

  /**
   * Callback triggered when date selection changes through scrolling in the dialog box.
   *
   * **NOTE**
   *
   * When **showTime** is set to **true**, the hour and minute in the value returned by the callback are the hour and
   * minute selected in the picker. Otherwise, the hour and minute are the hour and minute of the system time.
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onDateChange?: Callback<Date>;

  /**
   * Backplane color of the dialog box.
   *
   * Default value: **Color.Transparent**
   *
   * **NOTE**
   *
   * When **backgroundColor** is set to a non-transparent color, **backgroundBlurStyle** must be set to
   * **BlurStyle.NONE**; otherwise, the color display may not meet the expected effect.
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background blur style of the dialog box.
   *
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * **NOTE**
   *
   * Setting this parameter to **BlurStyle.NONE** disables the background blur. When **backgroundBlurStyle** is set to a
   * value other than **NONE**, do not set **backgroundColor**. If you do, the color display may not produce the
   * expected visual effect.
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Options for customizing the background blur style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Options for customizing the background effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Event callback after the dialog box appears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onDateAccept/onCancel/onDateChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**.
   *    The settings take effect next time the dialog box appears.
   * 3. If the user closes the dialog box immediately after it appears, **onWillDisappear** is
   *    invoked before **onDidAppear**.
   * 4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: VoidCallback;

  /**
   * Event callback after the dialog box disappears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onDateAccept/onCancel/onDateChange) >
   *    onWillDisappear > onDidDisappear.
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: VoidCallback;

  /**
   * Event callback when the dialog box is about to appear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onDateAccept/onCancel/onDateChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**.
   *    The settings take effect next time the dialog box appears.
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: VoidCallback;

  /**
   * Event callback when the dialog box is about to disappear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onDateAccept/onCancel/onDateChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears, onWillDisappear is invoked before onDidAppear.
   *
   * @type { ?function } [since 12 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: VoidCallback;

  /**
   * Shadow of the dialog box.
   *
   * Default value on 2-in-1 devices: **ShadowStyle.OUTER_FLOATING_MD** when the dialog box is focused and
   * **ShadowStyle.OUTER_FLOATING_SM** otherwise
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether to display a leading zero for the hours and minutes. Currently only the configuration of the **hour** and
   * **minute** parameters is supported.
   *
   * Default value:
   *
   * **hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is displayed as a two-digit
   * number. If the actual value is less than 10, a leading zero is added, displayed as "0X". For the 12-hour format,
   * the default value is **"numeric"**, meaning no leading zero.
   *
   * **minute**: The default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the
   * actual value is less than 10, a leading zero is added, displayed as "0X".
   *
   * @default hour: In the 24-hour format, it defaults to 2-digit, which means a leading zero is used;
   *     <br>In the 12-hour format, it defaults to numeric, which means no leading zero is used.
   *     <br>minute: defaults to 2-digit, which means a leading zero is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions?: DateTimeOptions;

  /**
   * Whether to respond when the device is in semi-folded mode.
   *
   * - **true**: Respond when the device is in semi-folded mode.
   * - **false**: Do not respond when the device is in semi-folded mode.
   *
   * Default value: **false**
   *
   * @default false - meaning not to enable the hover mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Display area of the dialog box when the device is in semi-folded mode.
   *
   * Default value: **HoverModeAreaType.BOTTOM_SCREEN**
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Whether to enable haptic feedback.
   *
   * - **true**: Enable haptic feedback.
   * - **false**: Disable haptic feedback.
   *
   * Default value: **true**
   *
   * **NOTE**
   *
   * 1. Whether this parameter takes effect after being set to **true** depends on hardware support.
   * 2. To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module**
   *    in **src/main/module.json5** of the project:
   *
   * "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * Whether to enable cyclic scrolling.
   *
   * Default value: **true**
   *
   * **NOTE**
   *
   * **true**: Cyclic scrolling is enabled, where the year values increment or decrement with month cycling, and month
   * values increment or decrement with day cycling.
   *
   * **false**: Cyclic scrolling is disabled, preventing out-of-bounds scrolling in year, month, and day columns and
   * cross-column value synchronization.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop?: boolean;

  /**
   * Set system-styled materials for dialog. Different materials have different effects,
   * which can influence backgroundColor, border, shadow, and other visual attributes of dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * Sets the distortion animation mode for the dialog.
   *
   * Default value: DistortionMode.DISTORTION_AUTO
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * Sets the edge light animation mode for the dialog.
   *
   * Default value: EdgeLightMode.EDGELIGHT_AUTO
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class DatePickerDialog {

  /**
   * Shows a date picker dialog box.
   *
   * > **NOTE**
   * >
   * > Since API version 10, you can use the
   * > [showDatePickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showdatepickerdialog) API
   * > in [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the date picker dialog box is shown in the
   * > intended UI instance.
   *
   * @param { DatePickerDialogOptions } options - Parameters of the date picker dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showDatePickerDialog
   */
  static show(options?: DatePickerDialogOptions);
}

/**
 * **DatePicker** is a component for selecting a date through scrolling interaction.
 *
 * > **NOTE**
 *
 * > - Avoid changing component attributes during animation processes.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
 *
 * Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const DatePicker: DatePickerInterface;

/**
 * Defines DatePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const DatePickerInstance: DatePickerAttribute;