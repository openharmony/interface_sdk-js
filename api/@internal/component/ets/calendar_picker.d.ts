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
 * ###### Rules for Setting start and end
 *
 * | Scenario  | Description |
 * | -------- |  ------------------------------------------------------------ |
 * | The start date is later than the end date.   | Both start and end dates are invalid, and the selected date is the
 * default value. |
 * | The selected date is earlier than the start date.   | The selected date is set as the start date. |
 * | The selected date is later than the end date.   | The selected date is set as the end date. |
 * | The start date is later than the current system date, and the selected date is not set.   | The selected
 * date is set as the start date. |
 * | The end date is earlier than the current system date, and the selected date is not set.   | The selected
 * date is set as the end date. |
 * | The set date is in invalid format, for example, **1999-13-32**.| The start or end date setting is invalid,
 * and the selected date is the default value.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface CalendarOptions {
  /**
   * Background style of the selected state in the calendar picker.
   *
   * Value range: [0.0, 16.0]
   *
   * Unit: vp.
   *
   * Default value: **16.0** (the background is a circle).
   *
   * **NOTE**
   *
   * If the value of **hintRadius** is **0.0**, the background is a rectangle with square corners. If the value of
   * **hintRadius** is within the range (0.0, 16.0), the background is a rectangle with rounded corners. If the value of
   * **hintRadius** is **16.0**, the background is a circle. If the value of **hintRadius** is a negative number or
   * greater than **16.0**, the default value **16.0** is used.
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
   * Date of the selected item. This parameter is passed when the selected date needs to be preset. If the date does
   * not need to be preset, the current system date is used. If the value is not set or does not comply with the date
   * format specifications, the default value will be used. For details about the relationship between the selected
   * date and the **start** and **end** parameters, see
   * [Rules for setting start and end](#rules-for-setting-start-and-end).
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
   * Note: If the start date is later than the end date, both the settings of **start** and **end** are invalid, and the
   * selected date is the default value. For details, see
   * [Rules for setting start and end](#rules-for-setting-start-and-end).
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
   * Note: If the start date is later than the end date, both the settings of **start** and **end** are invalid, and the
   * selected date is the default value. For details, see
   * [Rules for setting start and end](#rules-for-setting-start-and-end).
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
   * Disabled date range. If this parameter is not passed, no date is disabled.
   *
   * **NOTE**
   *
   * 1. If the start date or end date within a date range is invalid or is not set, the entire date range does not
   * take effect.
   * 2. If the end date is earlier than the start date within a date range, the entire date range does not take
   * effect.
   * 3. When users select a date and adjust it with the up or down arrow keys, the system skips over all dates in
   * the disabled date range.
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
 * The **CalendarPicker** component provides a drop-down calendar window for users to quickly select a date. It is
 * applicable to scenarios where users need to select a specific date, such as reservation, schedule arrangements, and
 * date filtering, and provides an intuitive calendar view to improve user experience in date input.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
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
   * @param { CalendarOptions } options - Parameters of the calendar picker. If this parameter is not set, the default
   *     configuration is used.
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
   * @param { CalendarAlign } alignType - Alignment type.
   *     <br>Default value: **CalendarAlign.END**.
   * @param { Offset } offset - Offset of the picker relative to the entry component after alignment based on the
   *     specified alignment type.
   *     <br>Default value: **{dx: 0, dy: 0}**
   *     <br>Unit: vp.
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
   * @param { Optional<CalendarAlign> } alignType - Alignment type.
   *     <br>Default value: **CalendarAlign.END**.
   *     <br>If the value of **alignType** is **undefined**, the default value is used.
   * @param { Offset } offset - Offset of the picker relative to the entry component after alignment based on the
   *     specified alignment type.
   *     <br>Default value: **{dx: 0, dy: 0}**
   *     <br>Unit: vp.
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
   * @param { PickerTextStyle } value - Font color, font size, and font weight in the entry area.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
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
   * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight in the entry area.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>If the value of **style** is **undefined**, the default value is used.
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
   * @param { function } callback - Called when a date is selected. The callback parameter is the selected date of the
   *     **Date** type. You can obtain the selected date in the callback function and perform corresponding
   *     processing. [since 10 - 17]
   * @param { Callback<Date> } callback - Called when a date is selected. The callback parameter is the selected date of
   *     the **Date** type. You can obtain the selected date in the callback function and perform corresponding
   *     processing. [since 18]
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
   * @param { Optional<Callback<Date>> } callback - Called when a date is selected. The callback parameter is the
   *     selected date.
   *     <br>If **callback** is set to **undefined**, the callback function is not used.
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
   * @param { boolean } enabled - Whether to highlight the current system date.
   *     <br>- **true**: Highlight the current system date.
   *     <br>- **false**: Do not highlight the current system date.
   *     <br>Default value: **false**.
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
   * Callback invoked when the **OK** button in the dialog box is tapped.
   *
   * The parameter of the callback indicates the selected date.
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
   * Callback invoked when the **Cancel** button in the dialog box is tapped.
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
   * Callback invoked when the selected date in the dialog box changes.
   *
   * The parameter of the callback indicates the selected date.
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
   * Background color of the dialog box.
   *
   * Default value: **Color.Transparent**
   *
   * **NOTE**
   *
   * When **backgroundColor** is set to a non-transparent color, **backgroundBlurStyle** must be set to
   * **BlurStyle.NONE**. Otherwise, the displayed background color will not meet the expected effect.
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
   * Background blur material of the dialog box.
   *
   * Default value: **BlurStyle.COMPONENT_ULTRA_THICK**
   *
   * **NOTE**
   *
   * Set this parameter to **BlurStyle.NONE** to disable the background blur. When **backgroundBlurStyle** is set to a
   * value other than NONE, do not set **backgroundColor**. Otherwise, the displayed background color will not meet the
   * expected effect. When **backgroundEffect** is set, it overrides the effect of this attribute.
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
   * Background blur effect parameters, used to customize the display style of the dialog box background blur. It
   * supports configuring attributes such as the color mode, adaptive color, and scale ratio to achieve different
   * background blur visual effects. For the default value, see the **BackgroundBlurStyleOptions** type description.
   *
   * **NOTE**
   *
   * When not set, the default effect of **backgroundBlurStyle (BlurStyle.COMPONENT_ULTRA_THICK)** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameters, used to customize the display effect of the dialog box background. It supports
   * configuring attributes such as the blur radius, saturation, brightness, and color to achieve different background
   * visual effects. For the default value, see the **BackgroundEffectOptions** type description.
   *
   * **NOTE**
   *
   * When not set, this parameter does not take effect, and the dialog box background blur effect is determined by
   * **backgroundBlurStyle**. When set, it overrides the effect of **backgroundBlurStyle**. Since API version 26.0.0,
   * after **systemMaterial** is set, neither **backgroundEffect** nor **backgroundBlurStyle** takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Display style, importance, role, background color, corner radius, text color, font size, font weight, font style,
   * font list, and whether the button responds to the Enter key by default for the confirm button.
   *
   * **NOTE**
   *
   * 1. At most one of **acceptButtonStyle** and **cancelButtonStyle** can have the **primary** field set to **true**.
   * If both are set to **true**, neither takes effect.
   * 2. The button height is 40 vp by default and does not change in the care mode - large font scenario. Even if
   * the button style is set to the rounded rectangle [ROUNDED_RECTANGLE]{@link ButtonType}, in the care mode - large
   * font scenario the button is still displayed as a capsule button [Capsule]{@link ButtonType}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Display style, importance, role, background color, corner radius, text color, font size, font weight, font style,
   * font list, and whether the button responds to the Enter key by default for the cancel button.
   *
   * **NOTE**
   *
   * 1. At most one of **acceptButtonStyle** and **cancelButtonStyle** can have the **primary** field set to **true**.
   * If both are set to **true**, neither takes effect.
   * 2. The button height is 40 vp by default and does not change in the care mode - large font scenario. Even if
   * the button style is set to the rounded rectangle [ROUNDED_RECTANGLE]{@link ButtonType}, in the care mode - large
   * font scenario the button is still displayed as a capsule button [Capsule]{@link ButtonType}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Event callback after the dialog box is shown.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onAccept/onCancel/onChange) >>
   * **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the display effect set in **onDidAppear** take effect when **show** is called
   * again.
   * 3. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may
   * take effect before **onDidAppear**.
   * 4. When the dialog box is closed before its entrance animation is complete, this callback is not triggered.
   *
   * **Selection guidance:**
   *
   * - **onWillAppear**: suitable for preparing data and resetting the state before the dialog box is displayed.
   * - **onDidAppear**: suitable for performing animations, initiating network requests, and setting focus after the
   * dialog box is fully displayed, that is, operations that require the dialog box to be visible.
   * - **onWillDisappear**: suitable for saving data, cleaning up resources, and canceling network requests before the
   * dialog box disappears.
   * - **onDidDisappear**: suitable for performing cleanup, resetting the state, and restoring other UI after the dialog
   * box fully disappears.
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
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onAccept/onCancel/onChange) >>
   * **onWillDisappear** >> **onDidDisappear**.
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
   * Event callback before the dialog box display animation.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >> (onAccept/onCancel/onChange) >>
   * **onWillDisappear** >> **onDidDisappear**.
   * 2. Callback events that change the dialog box display effect set in **onWillAppear** take effect when the
   * dialog box is shown again.
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
   * Event callback before the dialog box exit animation.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is: **onWillAppear** >> **onDidAppear** >>
   * (**onAccept**\/**onCancel**\/**onChange**) >> **onWillDisappear** >> **onDidDisappear**.
   * 2. When the dialog box is rapidly and consecutively triggered to pop up and close, **onWillDisappear** may
   * take effect before **onDidAppear**.
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
   * Shadow of the dialog box background.
   *
   * On 2-in-1 devices, in the default scenario, the focused shadow value is **ShadowStyle.OUTER_FLOATING_MD**, and the
   * unfocused shadow value is **ShadowStyle.OUTER_FLOATING_SM**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether the dialog box responds to the hover mode. This parameter applies to devices that support the hover mode,
   * such as foldable devices.
   *
   * - **true**: The dialog box responds to the hover mode. In the hover mode of foldable devices, the layout area is
   * adaptively adjusted to provide a better multitasking experience.
   * - **false**: The dialog box does not respond to the hover mode, and the default layout is retained in the hover
   * mode.
   *
   * Default value: **false**
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
   * Default display area of the dialog box in the hover mode. This parameter takes effect only when **enableHoverMode**
   * is **true**. Different area values correspond to different layout positions of the dialog box in the hover mode of
   * foldable devices (for example, **BOTTOM_SCREEN** indicates that the dialog box is displayed in the lower half of
   * the screen, and **TOP_SCREEN** indicates that the dialog box is displayed in the upper half of the screen).
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
   * Whether the current system date remains highlighted in the calendar picker dialog box.
   *
   * - **true**: The current system date remains highlighted in the calendar picker dialog box.
   * - **false**: The current system date is not highlighted in the calendar picker dialog box.
   *
   * Default value: **false**
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
   * System material of the dialog box.
   *
   * **NOTE**
   *
   * - Default value: the {@link ImmersiveMaterial}
   * object whose {@link ImmersiveOptions} style is
   * **ImmersiveStyle.ULTRA_THICK**. When set to **undefined**, it is consistent with the default value.
   * - Different materials have different visual effects, including differences in background transparency, blur degree,
   * and shadow style. This API affects the background color
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, background blur
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle,
   * options?: BackgroundBlurStyleOptions)},
   * background effect [backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}, border
   * color [borderColor]{@link CommonMethod#borderColor}, border width [borderWidth]{@link CommonMethod#borderWidth},
   * and shadow [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. When the system material is
   * set, the preceding APIs do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * Distortion animation mode of the dialog box under system materials. This parameter is passed when a custom
   * distortion animation effect is needed for the dialog box.
   *
   * **Default value:** **DistortionMode.DISTORTION_AUTO**
   *
   * **System API:** This is a system API.
   *
   * Note: When the value is **DISTORTION_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the distortion effect is automatically applied based on the device performance
   * tier (effective on high- and mid-tier devices, not effective on low-tier devices). Distortion animation increases
   * rendering overhead, so use it with caution on low-end devices. For the meaning of each enum value, see
   * {@link DistortionMode}.
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * Edge light animation mode of the dialog box under system materials. This parameter is passed when a custom edge
   * light animation effect is needed for the dialog box.
   *
   * **Default value:** **EdgeLightMode.EDGELIGHT_AUTO**
   *
   * **System API:** This is a system API.
   *
   * Note: When the value is **EDGELIGHT_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the edge light effect is automatically applied based on the device performance
   * tier (effective on high-tier devices, not effective on mid- and low-tier devices). Edge light animation increases
   * rendering overhead, so use it with caution on low-end devices. For the meaning of each enum value, see
   * {@link EdgeLightMode}.
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
 * Tapping a date opens a calendar picker dialog, where you can select a date. It is suitable for scenarios
 * requiring date selection within an app, such as schedule management, booking systems, and form filling.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class CalendarPickerDialog {
  /**
   * Displays a calendar picker dialog box for the user to select a date.
   *
   * @param { CalendarDialogOptions } options - Parameters for configuring the calendar picker dialog box. If this
   *     parameter is not set, the dialog box cannot be displayed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static show(options?: CalendarDialogOptions): void;
}

/**
 * The **CalendarPicker** component provides a drop-down calendar window for users to quickly select a date. It is
 * applicable to scenarios where users need to select a specific date, such as reservation, schedule arrangements, and
 * date filtering, and provides an intuitive calendar view to improve user experience in date input.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
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