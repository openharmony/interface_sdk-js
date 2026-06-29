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
 * Enumerates alignment types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum CalendarAlign {

  /**
   * Left-aligned with the entry component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 0,

  /**
   * Center-aligned with the entry component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 1,

  /**
   * Right-aligned with the entry component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 2
}

/**
 * Describes the parameters of the calendar picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarOptions {

  /**
   * Style of the background of the selected state.
   *
   * Value range: [0.0, 16.0]
   *
   * Unit: vp.
   *
   * Default value: **16.0** (the background is a circle).
   *
   * **NOTE**
   *
   * If the value is **0.0**, the background is a right-angled rectangle. If the value is in the (0.0, 16.0) range, the
   * background is a rounded rectangle. If the value is a negative number or greater than 16.0, the default value
   * **16.0** is used, which means the background is a circle.
   *
   * @default 16.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  hintRadius?: number | Resource;

  /**
   * Date of the selected item. If the value is not set or does not comply with the date format specifications, the
   * default value will be used.
   *
   * Default value: current system date
   *
   * Value range: [Date('0001-01-01'), Date('5000-12-31')].
   *
   * @default current system date
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected?: Date;

  /**
   * Start date.
   *
   * Default value: **Date('0001-01-01')**
   *
   * Value range: [Date('0001-01-01'), Date('5000-12-31')].
   *
   * @default Date('0001-01-01')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  start?: Date;

  /**
   * End date.
   *
   * Default value: **Date('5000-12-31')**.
   *
   * Value range: [Date('0001-01-01'), Date('5000-12-31')].
   *
   * @default Date('5000-12-31')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  end?: Date;

  /**
   * Disabled date range.
   *
   * **NOTE**
   *
   * 1. If the start date or end date within a date range is invalid or is not set,
   *    the entire date range does not take effect.
   * 2. If the end date is earlier than the start date within a date range, the entire date range does not take effect.
   * 3. When users select a date and adjust it with the up or down arrow keys,
   *    the system skips over all dates in the disabled date range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  disabledDateRange?: DateRange[];
}

/**
 * The **CalendarPicker** component provides a drop-down calendar for users to select a date.
 *
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface CalendarPickerInterface {

  /**
   * Creates a calendar picker.
   *
   * @param { CalendarOptions } options - Parameters of the calendar picker.
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (options?: CalendarOptions): CalendarPickerAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare class CalendarPickerAttribute extends CommonMethod<CalendarPickerAttribute> {

  /**
   * Sets how the picker is aligned with the entry component.
   *
   * @param { CalendarAlign } alignType - Alignment type.<br>Default value: **CalendarAlign.END**.
   * @param { Offset } offset - Offset of the picker relative to the entry component after alignment based on the
   *     specified alignment type.<br>Default value: **{dx: 0, dy: 0}**
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  edgeAlign(alignType: CalendarAlign, offset?: Offset): CalendarPickerAttribute;

  /**
   * Sets how the picker is aligned with the entry component. Compared with
   * [edgeAlign]{@link CalendarPickerAttribute#edgeAlign(alignType: CalendarAlign, offset?: Offset)}, this API supports
   * the **undefined** type for the **alignType** parameter.
   *
   * @param { Optional<CalendarAlign> } alignType - Alignment type.<br>Default value: **CalendarAlign.END**.<br>If the
   *     value of **alignType** is **undefined**, the default value is used.
   * @param { Offset } offset - Offset of the picker relative to the entry component after alignment based on the
   *     specified alignment type.<br>Default value: **{dx: 0, dy: 0}**
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  edgeAlign(alignType: Optional<CalendarAlign>, offset?: Offset): CalendarPickerAttribute;

  /**
   * Sets the font color, font size, and font weight in the entry area.
   *
   * @param { PickerTextStyle } value - Font color, font size, and font weight in the entry area.<br>Default value:<br>{
   *     <br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): CalendarPickerAttribute;

  /**
   * Sets the font color, font size, and font weight in the entry area. Compared with
   * [textStyle]{@link CalendarPickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the **undefined**
   * type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight in the entry area.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): CalendarPickerAttribute;

  /**
   * Triggered when a date is selected. This event cannot be triggered by two-way bound state variables.
   *
   * @param { function } callback - Selected date value. [since 10 - 17]
   * @param { Callback<Date> } callback - Selected date value. [since 18]
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onChange(callback: Callback<Date>): CalendarPickerAttribute;

  /**
   * Triggered when a date is selected. This event cannot be triggered by two-way bound state variables. Compared with
   * [onChange]{@link CalendarPickerAttribute#onChange(callback: Callback<Date>)}, this API supports the **undefined**
   * type for the **callback** parameter.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<Callback<Date>> } callback - Selected date value.<br>If **callback** is set to **undefined**, the
   *     callback function is not used.
   * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<Callback<Date>>): CalendarPickerAttribute;

  /**
   * Whether to highlight the current system date.
   *
   * @param { boolean } enabled - Whether to highlight the current system date.<br>- **true**: Highlight the current
   *     system date.<br>- **false**: Do not highlight the current system date.<br>Default value: **false**.
   * @returns { CalendarPickerAttribute } the attribute of the calendar picker.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  markToday(enabled: boolean): CalendarPickerAttribute;
}

/**
 * Defines the configuration options of the calendar picker dialog box.
 *
 * Inherits from [CalendarOptions]{@link CalendarOptions}.
 *
 * > **NOTE**
 * >
 * > When the application window is resized, the width of the dialog box is continuously compressed. If the window width
 * > is reduced below a certain threshold, the content of the dialog box may not be fully visible. To ensure that the
 * > content of the **CalendarPickerDialog** component is fully displayed, the minimum window width required is 386 vp.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarDialogOptions extends CalendarOptions {

  /**
   * Triggered when the OK button in the dialog box is clicked.
   *
   * The callback parameter represents the selected date value.
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onAccept?: Callback<Date>;

  /**
   * Triggered when the Cancel button in the dialog box is clicked.
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?VoidCallback } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * Triggered when the selection in the picker changes the selected date.
   *
   * The callback parameter represents the selected date value.
   *
   * @type { ?function } [since 10 - 17]
   * @type { ?Callback<Date> } [since 18]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onChange?: Callback<Date>;

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
   * Style of the accept button.
   *
   * **NOTE**
   *
   * In the **acceptButtonStyle** and **cancelButtonStyle** configurations, only one **primary** field can be set to
   * **true** at most. If both the **primary** fields are set to **true**, neither will take effect.
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
   * In the **acceptButtonStyle** and **cancelButtonStyle** configurations, only one **primary** field can be set to
   * **true** at most. If both the **primary** fields are set to **true**, neither will take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Event callback after the dialog box appears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows:
   *    onWillAppear > onDidAppear > (onAccept/onCancel/onChange) > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**.
   *    The settings take effect next time the dialog box appears.
   * 3. If the user dismisses the dialog box immediately after it appears,
   *    **onWillDisappear** is invoked before **onDidAppear**.
   * 4. If the dialog box is dismissed before its entrance animation is finished, this callback is not invoked.
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
   * 1. The normal timing sequence is as follows:
   *    onWillAppear > onDidAppear > (onAccept/onCancel/onChange) > onWillDisappear > onDidDisappear.
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
   * 1. The normal timing sequence is as follows:
   *    onWillAppear > onDidAppear > (onAccept/onCancel/onChange) > onWillDisappear > onDidDisappear.
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
   * 1. The normal timing sequence is as follows:
   *    onWillAppear > onDidAppear > (onAccept/onCancel/onChange) > onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears,
   *    **onWillDisappear** is invoked before **onDidAppear**.
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
   * Whether to respond when the device is in semi-folded mode.
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
   * Whether to highlight the current system date.
   *
   * - **true**: Highlight the current system date.
   * - **false**: Do not highlight the current system date.
   *
   * Default value: **false**.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  markToday?: boolean;

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
   * Default Value: DistortionMode.DISTORTION_AUTO
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
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * A calendar picker dialog box is a dialog box that allows users to select a date from a calendar picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class CalendarPickerDialog {

  /**
   * Defines a calendar picker dialog box.
   *
   * @param { CalendarDialogOptions } options - Parameters of the calendar picker dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static show(options?: CalendarDialogOptions): void;
}

/**
 * The **CalendarPicker** component provides a drop-down calendar for users to select a date.
 *
 * > **NOTE**
 *
 * Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const CalendarPicker: CalendarPickerInterface;

/**
 * Defines CalendarPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop [since 11]
 */
declare const CalendarPickerInstance: CalendarPickerAttribute;