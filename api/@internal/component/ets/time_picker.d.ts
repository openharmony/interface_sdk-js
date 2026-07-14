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
 * Describes a time in 24-hour format.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerResult {

  /**
   * Hour portion of the selected time.
   *
   * Value range: [0-23]
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  hour: number;

  /**
   * Minute portion of the selected time.
   *
   * Value range: [0-59]
   *
   * @type { ?number } [since 8 - 10]
   * @type { number } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  minute: number;

  /**
   * Second portion of the selected time.
   *
   * Value range: [0-59]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  second: number;
}

/**
 * Enumerates time display formats of the time picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TimePickerFormat {

  /**
   * Time format displaying hours and minutes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE,

  /**
   * Time format displaying hours, minutes, and seconds.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HOUR_MINUTE_SECOND
}

/**
 * Describes the parameters of the time picker.
 *
 * Property modifications made to **TimePickerOptions** during the **TimePicker** scrolling process may not take effect.
 *
 *
 * The **Date** object is used to handle dates and time. It can be used in the following ways:
 *
 * **Method 1**: new Date()
 *
 * Obtains the current system date and time.
 *
 * **Method 2**: new Date(value: number | string)
 *
 * **Method 3**: new Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?:
 * number, ms?: number)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerOptions {

  /**
   * Time of the selected item.
   *
   * Default value: current system time
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: Date;

  /**
   * Time format.
   *
   * Default value: **TimePickerFormat.HOUR_MINUTE**
   *
   * @default HOUR_MINUTE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  format?: TimePickerFormat;

  /**
   * Start time of the time picker.
   *
   * Default value: **Date(0, 0, 0, 0, 0, 0)**
   *
   * **NOTE**
   *
   * 1. Only the hour and minute values take effect.
   * 2. If **start** is set and is not the default value, **loop** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start?: Date;

  /**
   * End time of the time picker.
   *
   * Default value: **Date(0, 0, 0, 23, 59, 59)**.
   *
   * **NOTE**
   *
   * 1. Only the hour and minute values take effect.
   * 2. If **end** is set and is not the default value, **loop** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  end?: Date;
}

/**
 * **TimePicker** is a component that allows users to select a time from the given range through scrolling.
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
interface TimePickerInterface {

  /**
   * Creates a time picker, which uses the 24-hour time format by default.
   *
   * @param { TimePickerOptions } options - Parameters of the time picker.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TimePickerOptions): TimePickerAttribute;
}

/**
 * Defines the options for a **DateTimeOptions** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DateTimeOptions = import('../api/@ohos.intl').default.DateTimeOptions;

/**
 * Triggered when a time is selected.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTimePickerChangeCallback = (result: TimePickerResult) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute> {

  /**
   * Sets whether the time is displayed in 24-hour format. If this attribute is not specified, the system time format is
   * used by default.
   *
   * @param { boolean } value - Whether to display the time in 24-hour format or 12-hour format.<br>- **true**: 24-hour
   *     format.<br>- **false**: 12-hour format.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime(value: boolean): TimePickerAttribute;

  /**
   * Sets whether the time is displayed in 24-hour format. If this attribute is not specified, the system time format is
   * used by default. Compared with [useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)}, this
   * API supports the **undefined** type for the **isMilitaryTime** parameter.
   *
   * @param { Optional<boolean> } isMilitaryTime - Whether to display the time in 24-hour format or 12-hour format.<br>-
   *     **true**: 24-hour format.<br>- **false**: 12-hour format.<br>When the value is **undefined**, the system time
   *     format is used by default.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets whether to enable loop scrolling.
   *
   * @param { boolean } value - Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>- **false**:
   *     Disable loop scrolling.<br>Default value: **true**.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  loop(value: boolean): TimePickerAttribute;

  /**
   * Sets whether to enable loop scrolling. Compared with
   * [loop<sup>11+</sup>]{@link TimePickerAttribute#loop(value: boolean)}, this API supports the **undefined** type for
   * the **isLoop** parameter.
   *
   * @param { Optional<boolean> } isLoop - Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>-
   *     **false**: Disable loop scrolling.<br>Default value: **true**.<br>If the value of **isLoop** is **undefined**,
   *     the default value is used.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  loop(isLoop: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for edge items.<br>Default value:<br>{<br
   *     >color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   * Compared with
   * [disappearTextStyle<sup>10+</sup>]{@link TimePickerAttribute#disappearTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for edge items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected
   * item, above or below).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for candidate items.<br>Default value:
   *     {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected
   * item, above or below). Compared with
   * [textStyle<sup>10+</sup>]{@link TimePickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the
   * **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for candidate items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item.
   *
   * Default value: { color: '#ff007dff', font: { size: '20fp',  weight: FontWeight.Medium } }
   *
   * @param { PickerTextStyle } value - Font color, font size, and font weight of the selected item.<br>Default value:
   *     { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): TimePickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item. Compared with
   * [selectedTextStyle<sup>10+</sup>]{@link TimePickerAttribute#selectedTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the selected item.
   *     Default value: { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   *     If the value of **style** is **undefined**, the default value is used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;

  /**
   * Sets whether to display a leading zero for the hours, minutes, and seconds.
   *
   * @param { DateTimeOptions } value - Whether to display a leading zero for the hours, minutes, and seconds.<br>
   *     Default value:<br>**hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is
   *     displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X
   *     ". For the 12-hour format, the default value is **"numeric"**, meaning no leading zero.<br>**minute**: The
   *     default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the actual value is
   *     less than 10, a leading zero is added, displayed as "0X".<br>**second**: The default value is **"2-digit"**,
   *     meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is
   *     added, displayed as "0X".<br> If **hour**, **minute**, or **second** is set to **undefined**, the display
   *     follows the default rules.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions(value: DateTimeOptions): TimePickerAttribute;

  /**
   * Sets whether to display a leading zero for the hours, minutes, and seconds. Compared with
   * [dateTimeOptions<sup>12+</sup>]{@link TimePickerAttribute#dateTimeOptions(value: DateTimeOptions)}, this API
   * supports the **undefined** type for the **timeFormat** parameter.
   *
   * @param { Optional<DateTimeOptions> } timeFormat - Whether to display a leading zero for the hours, minutes, and
   *     seconds. Currently only the configuration of the **hour**, **minute**, and **second** parameters is supported.
   *     Default value:<br>**hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is
   *     displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X
   *     ". For the 12-hour format, the default value is **"numeric"**, meaning no leading zero.<br>**minute**: The
   *     default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the actual value is
   *     less than 10, a leading zero is added, displayed as "0X".<br>**second**: The default value is **"2-digit"**,
   *     meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is
   *     added, displayed as "0X".<br> If **hour**, **minute**, or **second** is set to **undefined**, the display
   *     follows the default rules.
   * @returns { TimePickerAttribute } the attribute of the time picker
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute;

  /**
   * Triggered when the time picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * [onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea} instead.
   *
   * @param { function } callback - Time in 24-hour format.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute;

  /**
   * Triggered when the time picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. Compared with [onChange]{@link TimePickerAttribute#onChange(callback: TimePickerResult)}, this API
   * supports the **undefined** type for the **callback** parameter.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * [onEnterSelectedArea]{@link TimePickerAttribute#onEnterSelectedArea} instead.
   *
   * @param { Optional<OnTimePickerChangeCallback> } callback - Callback invoked when a time option is selected.<br>If
   *     **callback** is set to **undefined**, the callback function is not used.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute;

  /**
   * Triggered during the scrolling of the time picker when an item enters the divider area.
   *
   * Compared with the [onChange]{@link TimePickerAttribute#onChange(callback: TimePickerResult)} event, this event is
   * triggered earlier, specifically when the scroll distance of the current column exceeds half the height of the
   * selected item, which indicates that the item has entered the divider area. When
   * [enableCascade]{@link TimePickerAttribute#enableCascade} is set to **true**, using this callback is not recommended
   * due to the interdependent relationship between the AM/PM and hour columns. This callback indicates the moment an
   * option enters the divider area during scrolling, and only the value of the currently scrolled column will change.
   * The values of other non-scrolled columns will remain unchanged.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<TimePickerResult> } callback - Callback triggered during the scrolling of the time picker when an
   *     item enters the divider area.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in
   * **src/main/module.json5** of the project.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 18.
   *
   * @param { boolean } enable - Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.<br>-
   *     **false**: Disable haptic feedback.<br>Default value: **true**.<br>Whether this parameter takes effect after
   *     being set to **true** depends on hardware support.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 12 dynamic
   */
  enableHapticFeedback(enable: boolean): TimePickerAttribute;

  /**
   * Sets whether to enable haptic feedback. Compared with
   * [enableHapticFeedback<sup>12+</sup>]{@link TimePickerAttribute#enableHapticFeedback(enable: boolean)}, this API
   * supports the **undefined** type for the **enable** parameter.
   *
   * To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in
   * **src/main/module.json5** of the project.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.
   *     - **false**: Disable haptic feedback.<br>Default value: **true**.<br>If the value of **enable** is
   *     **undefined**, the default value is used.<br>Whether this parameter takes effect after being set to **true**
   *     depends on hardware support.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute;

  /**
   * Sets the sensitivity to the digital crown rotation.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.<br>Default value:
   *     **CrownSensitivity.MEDIUM**
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute;

  /**
   * Sets whether the AM/PM indicator automatically switches based on the hour value. Only takes effect when
   * [useMilitaryTime]{@link TimePickerAttribute#useMilitaryTime(value: boolean)} is set to **false**.
   *
   * @param { boolean } enabled - Sets whether the AM/PM indicator automatically switches based on the hour value. This
   *     setting only takes effect when **useMilitaryTime** is set to **false**.<br>- **true**: The AM/PM indicator
   *     automatically switches based on the hour value.<br>- **false**: The AM/PM indicator remains static regardless
   *     of hour changes.<br>Default value: **false**.<br>When **enabled** is set to **true**, it only takes effect if
   *     the **loop** parameter is also **true**.
   * @returns { TimePickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade(enabled: boolean): TimePickerAttribute;
}

/**
 * Defines the configuration options of the time picker dialog box.
 *
 * Inherited from [TimePickerOptions]{@link TimePickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TimePickerDialogOptions extends TimePickerOptions {

  /**
   * Whether to display the time in 24-hour format or 12-hour format.
   *
   * - **true**: 24-hour format.
   * - **false**: 12-hour format.
   *
   * Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  useMilitaryTime?: boolean;

  /**
   * Text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * Default value: { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   *
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
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**.
   *    If both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp and remains fixed even in accessibility and large-font modes. In addition,
   *    even if the button style is set to [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a
   *    capsule button ([Capsule]{@link ButtonType}).
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
   *    If both are set to **true**, the **primary** field will remain at the default value of false.
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
   * Font color, font size, and font weight of the selected item.
   *
   * Default value: { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box relative to the alignment position.
   *
   * Default value: **{ dx: 0 , dy: 0 }**
   *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TimePickerResult) => void;

  /**
   * Callback invoked when the cancel button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * Triggered when the text picker in the dialog box snaps to the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TimePickerResult) => void;

  /**
   * Represents the callback triggered during the scrolling of the text picker when an item enters the divider area.
   * Compared to the **onChange** event, this event is triggered earlier, specifically when the scroll distance of the
   * current column exceeds half the height of the selected item, which indicates that the item has entered the divider
   * area.
   *
   * **NOTE**
   *
   * When **enableCascade** is set to **true**, using this callback is not recommended due to the interdependent
   * relationship between the AM/PM and hour columns. This callback indicates the moment an option enters the divider
   * area during scrolling, and only the value of the currently scrolled column will change. The values of other non-
   * scrolled columns will remain unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TimePickerResult>;

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
   * Whether the AM/PM indicator automatically switches based on the hour value. Only takes effect when
   * **useMilitaryTime** is set to **false**.
   *
   * - **true**: The AM/PM indicator automatically switches based on the hour value.
   * - **false**: The AM/PM indicator remains static regardless of hour changes.
   *
   * Default value: **false**.
   *
   * When **enableCascade** is set to **true**, it only takes effect if the **loop** parameter is also **true**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  enableCascade?: boolean;

  /**
   * Event callback after the dialog box appears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**.
   *    The settings take effect next time the dialog box appears.
   * 3. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   *    **onDidAppear**.
   * 4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: () => void;

  /**
   * Event callback after the dialog box disappears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange) >
   *    onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDisappear?: () => void;

  /**
   * Event callback when the dialog box is about to appear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**.
   *    The settings take effect next time the dialog box appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillAppear?: () => void;

  /**
   * Event callback when the dialog box is about to disappear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear > (onAccept/onCancel/onChange) >
   *    onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   *    **onDidAppear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;

  /**
   * Shadow of the dialog box.
   *
   * **NOTE**
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dateTimeOptions?: DateTimeOptions;

  /**
   * Whether to enable the hover mode.
   *
   * - **true**: Respond when the device is in semi-folded mode.
   * - **false**: Do not respond when the device is in semi-folded mode.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Display area of the dialog box in hover mode.
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
   * Default value: **true**.
   *
   * **NOTE**
   *
   * 1. Whether this parameter takes effect after being set to **true** depends on hardware support.
   * 2. To enable haptic feedback, you must declare the following permission under **requestPermissions** in
   *    **module** in **src/main/module.json5** of the project.
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
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * A time picker dialog box is a dialog box that allows users to select a time from the 24-hour range through scrolling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TimePickerDialog {

  /**
   * Shows a time picker dialog box.
   *
   * **NOTE**
   *
   * - Since API version 10, you can use the
   *   [showTimePickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showtimepickerdialog) API
   *   in [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the time picker dialog box is shown in the
   *   intended UI instance.
   *
   * @param { TimePickerDialogOptions } options - Parameters of the time picker dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showTimePickerDialog
   */
  static show(options?: TimePickerDialogOptions);
}

/**
 * **TimePicker** is a component that allows users to select a time from the given range through scrolling.
 *
 * **NOTE**
 *
 * - Avoid changing component attributes during animation processes.
 *
 * - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 *   number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 *   configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 *   use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
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
declare const TimePicker: TimePickerInterface;

/**
 * Defines TimePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const TimePickerInstance: TimePickerAttribute;