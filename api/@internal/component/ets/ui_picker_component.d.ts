/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Describes the parameters of the **UIPickerComponent** container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface UIPickerComponentOptions {
  /**
   * Index of the selected item, used to specify the initially selected option.
   *
   * Value range: an integer in [0, number of child components - 1]. If the value is out of range, the default value is
   * used. If a decimal is set, the value is rounded down to an integer.
   *
   * Default value: **0**. Pass this parameter when the component needs to initially display a specific option.
   *
   * **Note:**
   *
   * When counting child components, child components inside a **Row** container are not counted. A **Row** container
   * and its child components are counted as one child component.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectedIndex?: number;
}

/**
 * The **UIPickerComponent** container is a component used to implement user selection operations. It allows users to
 * make a single selection from a limited set of options, and uses a 3D wheel style to provide intuitive visual feedback
 * and a smooth scrolling experience. This component supports on-demand customization of options, including text type,
 * image type, and image-text combination type, which can provide richer information display based on service
 * requirements. It can be widely used in various scenarios such as time selection, date selection, region selection,
 * and status selection.
 *
 * > **NOTE**
 * >
 * > - The **UIPickerComponent** container has a default option row height of 40 vp and displays 7 options by default.
 * > You can configure them through the [itemHeight]{@link UIPickerComponentAttribute#itemHeight} and
 * > [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount} attributes. Because the display effect is
 * > a 3D wheel style, options other than the selected one are rotated at different angles, so the actual visible height
 * > is smaller than the option row height.
 * >
 * > - It is recommended that the [height]{@link CommonMethod#height(value: Length)} of the **UIPickerComponent**
 * > container be set to 200 vp. When the set height is greater than or equal to this recommended value, the default 7
 * > options can be fully displayed. If more visible items or a larger option height are configured through
 * > [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount} or
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}, it is recommended to increase the component height
 * > accordingly. When the set height is smaller than the recommended value, the display range is cropped from the top
 * > and bottom edges toward the center, and the number of options that can be displayed is reduced accordingly, with
 * > the selected item always kept vertically centered.
 * >
 * > - When the [width]{@link CommonMethod#width(value: Length)} of the **UIPickerComponent** container is not set, the
 * > maximum width of the visible child components in the current view is used as the container width. It is recommended
 * > to set a width for the **UIPickerComponent** container, or set the same width for each child component, to avoid
 * > dynamic changes in the container width during scrolling, which may affect the display effect.
 * >
 * > - The alignment of child components in the **UIPickerComponent** container is fixed to center alignment. Changing
 * > the alignment of child components through the [align]{@link CommonMethod#align(value: Alignment)} attribute is not
 * > supported.
 * >
 * > - The **UIPickerComponent** container currently does not support smartwatch devices. You can obtain the device type
 * > through **deviceInfo.deviceType** to determine whether the device is a smartwatch.
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
interface UIPickerComponentInterface {
  /**
   * Creates a **UIPickerComponent** container. The selected item is determined by the **selectedIndex** attribute value
   * in the **options** parameter.
   *
   * @param { UIPickerComponentOptions } [options] - Parameters for configuring the **UIPickerComponent** container,
   *     used to customize settings such as the initially selected item. When this parameter is omitted, the component
   *     occupies space but displays empty content. Pass this parameter when you need to set the initially selected
   *     item.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  (options?: UIPickerComponentOptions): UIPickerComponentAttribute;
}

/**
 * Defines the callback type for the [onChange]{@link UIPickerComponentAttribute#onChange} and
 * [onScrollStop]{@link UIPickerComponentAttribute#onScrollStop} events.
 *
 * @param { number } selectedIndex - Index of the currently selected item.
 *     <br>Value range: an integer in [0, number of child components - 1].
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type OnUIPickerComponentCallback = (selectedIndex: number) => void;

/**
 * Enumerates the types of the selected item indicator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum PickerIndicatorType {
  /**
   * Identifies the selected item by adding a background to it.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BACKGROUND = 0,
  /**
   * Identifies the selected item by adding dividers at the upper and lower edges of the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  DIVIDER = 1
}

/**
 * Describes the parameters of the selected item indicator style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface PickerIndicatorStyle {
  /**
   * Type of the selected item indicator.
   *
   * Default value: **PickerIndicatorType.BACKGROUND**
   *
   * When the value of **type** is a decimal, the value rounded down is used; when the value of **type** is not within
   * the **PickerIndicatorType** enum range, the default value is used.
   *
   * @default PickerIndicatorType.BACKGROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  type: PickerIndicatorType;

  /**
   * Line width of the divider.
   *
   * Default value: **{ value: 2.0, unit: LengthUnit.px }**
   *
   * Unit: same as **LengthMetrics**.
   *
   * Value range: [0, half of the selected item height]. When **strokeWidth** is less than 0 or greater than half of the
   * selected item height, the default value is used. Note: The selected item height can be set through the
   * **itemHeight** attribute, and the default value is 40 vp, in which case the upper limit of the value range is 20
   * vp; when **itemHeight** is set to another value, the upper limit changes accordingly. The percentage type is not
   * supported.
   *
   * **NOTE**
   *
   * 1. This attribute takes effect when type is **PickerIndicatorType.DIVIDER**.
   * 2. When the value is set through **LengthMetrics.resource**, a value of a non-length attribute is processed as
   * 0 vp.
   *
   * @default 2.0px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * Color of the divider.
   *
   * Default value: **'sys.color.comp_divider'**
   *
   * **NOTE**
   *
   * This attribute takes effect when type is **PickerIndicatorType.DIVIDER**.
   *
   * @default $r('sys.color.comp_divider')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dividerColor?: ResourceColor;

  /**
   * Distance between the divider and the start edge of the **UIPickerComponent** container.
   *
   * Default value: **0**
   *
   * Unit: same as **LengthMetrics**.
   *
   * Value range: The sum of **startMargin** and **endMargin** must not exceed the width of the **UIPickerComponent**
   * container. When the value is less than 0 or the sum of **startMargin** and **endMargin** exceeds the width of the
   * **UIPickerComponent** container, the default value is used. The percentage type is not supported.
   *
   * **NOTE**
   *
   * This attribute takes effect when **type** is **PickerIndicatorType.DIVIDER**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  startMargin?: LengthMetrics;

  /**
   * Distance between the divider and the end edge of the **UIPickerComponent** container.
   *
   * Default value: **0**
   *
   * Unit: same as **LengthMetrics**.
   *
   * Value range: The sum of **startMargin** and **endMargin** must not exceed the width of the **UIPickerComponent**
   * container. When the value is less than 0 or the sum of **startMargin** and **endMargin** exceeds the width of the
   * **UIPickerComponent** container, the default value is used. The percentage type is not supported.
   *
   * **NOTE**
   *
   * This attribute takes effect when **type** is **PickerIndicatorType.DIVIDER**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  endMargin?: LengthMetrics;

  /**
   * Background color of the selected item.
   *
   * Default value: **'sys.color.comp_background_tertiary'**
   *
   * **NOTE**
   *
   * This attribute takes effect when **type** is **PickerIndicatorType.BACKGROUND**.
   *
   * @default 'sys.color.comp_background_tertiary'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Corner radius of the selected item background.
   *
   * Default value: **{ value:12, unit:LengthUnit.vp }**, which means all four corner radii are 12 vp.
   *
   * Value range: Let x be the smaller of the width and height of the selected item. The maximum value does not exceed
   * half of x. When the value is less than 0, the default value is used; when the value is greater than the maximum
   * value, the maximum value is used.
   *
   * **NOTE**
   *
   * 1. This attribute takes effect when **type** is **PickerIndicatorType.BACKGROUND**.
   * 2. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}: sets the size and unit of all four corner radii
   * uniformly.
   * 3. [BorderRadiuses]{@link BorderRadiuses}: sets the size of the four corner radii separately (in vp).
   * 4. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}: sets the size and unit of the four corner radii
   * separately.
   *
   * @default { value:12, unit:LengthUnit.vp }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link ./common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare class UIPickerComponentAttribute extends CommonMethod<UIPickerComponentAttribute> {
  /**
   * Triggered when the selected item changes while the picker options are being scrolled. It applies to scenarios where
   * the UI needs to be updated in real time, corresponding data needs to be loaded, or related logic needs to be
   * executed when the selected item changes.
   *
   * > **NOTE**
   * >
   * > If more than half of an option enters the selected item area, the option becomes the selected item.
   * >
   * > The selected item area can be identified by setting
   * > [selectionIndicator]{@link UIPickerComponentAttribute#selectionIndicator}. If the selected item indicator is set
   * > to the background, the background area is the selected item area. If the selected item indicator is set to a
   * > divider line, the area between the center lines of the upper and lower divider lines is the selected item area.
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - Callback invoked when the selected item changes.
   *     <br>When the value of callback is undefined, the callback is not used.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onChange(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * Triggered when the picker stops scrolling. The picker stops scrolling when the scrolling animation triggered by a
   * certain action is completely finished. If a new scrolling animation is triggered before the current scrolling
   * animation finishes, it is not considered as scrolling stop. This event is suitable for scenarios where the final
   * selection result needs to be submitted, the loading animation needs to be stopped, or a one-time callback needs to
   * be executed after scrolling ends.
   *
   * > **NOTE**
   * >
   * > Differences between **onChange** and **onScrollStop**:
   * >
   * > - **Trigger timing**: **onChange** is triggered immediately when the selected item changes; **onScrollStop** is
   * > triggered after the scrolling animation completely stops.
   * >
   * > - **Trigger frequency**: During continuous scrolling, **onChange** may be triggered multiple times (each time the
   * > selected item changes); **onScrollStop** is triggered only once when scrolling stops.
   * >
   * > - **Use scenarios**: **onChange** is suitable for scenarios that require real-time response (such as displaying
   * > the selected content in real time and updating other components in linkage); **onScrollStop** is suitable for
   * > scenarios that require final confirmation (such as submitting the final selection result and saving data).
   * >
   * > - **Relationship between the two**: A complete scrolling operation may trigger these two events in sequence. They
   * > can be used simultaneously or selectively based on actual requirements.
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - Callback invoked when the picker stops scrolling. When
   *     the value of callback is undefined, the callback is not used.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onScrollStop(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * Sets whether the option list can loop scrolling. When there are many options and infinite scrolling is required,
   * enable the loop; when there are few options or the selection range needs to be limited, disable the loop.
   *
   * @param { Optional<boolean> } isLoop - Whether cyclic scrolling is supported.
   *     <br>- **true**: Cyclic scrolling is supported.
   *     <br>- **false**: Cyclic scrolling is not supported.
   *     <br>Default value: **true**
   *     <br>When the value of **isLoop** is **undefined**, the default value is used.
   *     <br>When the number of child components is less than or equal to the number of visible options (set by
   *     [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}, which defaults to **7**), cyclic
   *     scrolling is not performed regardless of whether **isLoop** is set to **true** or **false**.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  canLoop(isLoop: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * Sets whether to enable haptic feedback. Haptic feedback can be enabled in scenarios where the user interaction
   * experience needs to be enhanced.
   *
   * To enable haptic feedback, configure the requestPermissions field in the "module" section of the src/main/
   * module.json5 file of the project to request the vibration permission, as follows:
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
   *     <br>- **true**: enables haptic feedback.
   *     <br>- **false**: disables haptic feedback.
   *     <br>Default value: **true**
   *     <br>When the value of enable is **undefined**, the default value is used.
   *     <br>After it is enabled, whether haptic feedback is available depends on the hardware support of the system.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * Sets the style of the selected item indicator. Use a background indicator when the selected area needs to be
   * highlighted, and use a divider indicator when a simple and lightweight marker is required.
   *
   * @param { Optional<PickerIndicatorStyle> } style - Style of the selected item indicator.
   *     <br>Default value:
   *     <br>**{
   *     <br>type: PickerIndicatorType.BACKGROUND,
   *     <br>borderRadius: {
   *     <br>value:12,
   *     <br>unit:LengthUnit.vp
   *     <br>},
   *     <br>backgroundColor: 'sys.color.comp_background_tertiary'
   *     <br>}**
   *     <br>When the value of **style** is **undefined**, the default value is used.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectionIndicator(style: Optional<PickerIndicatorStyle>): UIPickerComponentAttribute;

  /**
   * Sets the height of each option in the **UIPickerComponent** container. If this API is not called, the height of
   * each option is 40 vp. When the option content is large or a larger font is required, you can increase the height to
   * avoid content clipping. When the option content is concise or a compact display is required, you can decrease the
   * height. This attribute, together with [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount},
   * affects the display effect of the component. You are advised to adjust it in combination with the component
   * [height]{@link CommonMethod#height(value: Length)} attribute to ensure complete display.
   *
   * @param { Optional<LengthMetrics> } height - Height of an option.
   *     <br>Unit: same as that of [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}.
   *     <br>Value range: [40vp, 64vp]
   *     <br>If the value is less than 40 vp or greater than 64 vp, the default value 40 vp is used.
   *     <br>If the value of height is undefined, the default value 40 vp is used.
   *     <br>The "percentage" type is not supported.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  itemHeight(height: Optional<LengthMetrics>): UIPickerComponentAttribute;
  /**
   * Sets the number of visible options in the **UIPickerComponent** container. If this API is not called, the number of
   * visible options is 7 rows. Reduce the number of visible options when space needs to be saved, and increase it when
   * more preview information needs to be provided. This attribute, together with
   * [itemHeight]{@link UIPickerComponentAttribute#itemHeight}, affects the display effect of the component. It is
   * recommended to adjust it in combination with the component [height]{@link CommonMethod#height(value: Length)}
   * attribute to ensure complete display.
   *
   * @param { Optional<int> } count - Number of visible options.
   *     <br>Value range: an integer in [2, 9].
   *     <br>If a decimal is set, the value is rounded down to an integer.
   *     <br>If an even number is set, it is automatically converted to the odd number greater than it (for example, 2
   *     becomes 3 and 8 becomes 9).
   *     <br>If the value is out of the range, the default value 7 rows is used.
   *     <br>If the value of **count** is **undefined**, the default value 7 rows is used.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayedItemCount(count: Optional<int>): UIPickerComponentAttribute;
}

/**
 * The **UIPickerComponent** container is a component used to implement user selection operations. It allows users to
 * make a single selection from a limited set of options, and uses a 3D wheel style to provide intuitive visual feedback
 * and a smooth scrolling experience. This component supports on-demand customization of options, including text type,
 * image type, and image-text combination type, which can provide richer information display based on service
 * requirements. It can be widely used in various scenarios such as time selection, date selection, region selection,
 * and status selection.
 *
 * > **NOTE**
 * >
 * > - The **UIPickerComponent** container has a default option row height of 40 vp and displays 7 options by default.
 * > You can configure them through the [itemHeight]{@link UIPickerComponentAttribute#itemHeight} and
 * > [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount} attributes. Because the display effect is
 * > a 3D wheel style, options other than the selected one are rotated at different angles, so the actual visible height
 * > is smaller than the option row height.
 * >
 * > - It is recommended that the [height]{@link CommonMethod#height(value: Length)} of the **UIPickerComponent**
 * > container be set to 200 vp. When the set height is greater than or equal to this recommended value, the default 7
 * > options can be fully displayed. If more visible items or a larger option height are configured through
 * > [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount} or
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}, it is recommended to increase the component height
 * > accordingly. When the set height is smaller than the recommended value, the display range is cropped from the top
 * > and bottom edges toward the center, and the number of options that can be displayed is reduced accordingly, with
 * > the selected item always kept vertically centered.
 * >
 * > - When the [width]{@link CommonMethod#width(value: Length)} of the **UIPickerComponent** container is not set, the
 * > maximum width of the visible child components in the current view is used as the container width. It is recommended
 * > to set a width for the **UIPickerComponent** container, or set the same width for each child component, to avoid
 * > dynamic changes in the container width during scrolling, which may affect the display effect.
 * >
 * > - The alignment of child components in the **UIPickerComponent** container is fixed to center alignment. Changing
 * > the alignment of child components through the [align]{@link CommonMethod#align(value: Alignment)} attribute is not
 * > supported.
 * >
 * > - The **UIPickerComponent** container currently does not support smartwatch devices. You can obtain the device type
 * > through **deviceInfo.deviceType** to determine whether the device is a smartwatch.
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * - Multiple child components are supported.
 * - Supported child component types: [Text]{@link ./text}, [Image]{@link ./image}, [Row]{@link ./row}, and
 * [SymbolGlyph]{@link ./symbolglyph}.
 * - Supported rendering control types: [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md).
 *
 * > **NOTE**
 * >
 * > - When a **Row** container is used as a child component, the **Row** container can contain only the basic
 * > components **Text**, **Image**, and **SymbolGlyph**. Including other container components may affect the display
 * > effect or cause abnormal scrolling.
 * >
 * > - When counting child components, the child components inside a **Row** container are not counted. A **Row**
 * > container and its child components are counted as one child component.
 * >
 * > - When the child component is **Text**, **Image**, or **SymbolGlyph**, the
 * > [height]{@link CommonMethod#height(value: Length)} attribute does not take effect. The actual height is determined
 * > by the [itemHeight]{@link UIPickerComponentAttribute#itemHeight} attribute (40 vp by default). The child component
 * > content is displayed within the option area.
 * >
 * > - When the child component is a **Row** container, the [height]{@link CommonMethod#height(value: Length)} attribute
 * > of the **Row** container does not take effect. The actual height is determined by the
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight} attribute (40 vp by default). The
 * > [height]{@link CommonMethod#height(value: Length)} attribute of the child components inside the **Row** container
 * > takes effect normally, and the final display effect is determined by the **Row** container.
 * >
 * > - An option that combines an image and text requires a **Row** container to contain the image and text components.
 * > When using an option that combines an image and text, you are advised to set the
 * > [height]{@link CommonMethod#height(value: Length)} of the image to 40 vp or less to prevent the image from being
 * > cropped when it is large.
 * >
 * > - The **fontSize** attribute of all text components in the **UIPickerComponent** container (including the text
 * > components inside a **Row** container) is 20 fp by default. A user setting overrides the default value. If an
 * > invalid value is set, the result processed by the text component [fontSize]{@link TextAttribute#fontSize} prevails.
 * > You are advised to set **fontSize** uniformly or not set it to ensure a good display effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponent: UIPickerComponentInterface;

/**
 * Defines UIPickerComponent instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponentInstance: UIPickerComponentAttribute;