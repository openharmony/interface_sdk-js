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
   * Index of the selected item.
   *
   * Value range: an integer in the range of [0, Number of child components – 1]. If the value is not within the value
   * range, the default value is used. If a decimal number is set, the integer part after rounding down is used.
   *
   * Default value: 0
   *
   * NOTE
   *
   * When counting the number of child components, the **Row** container and its child components are counted as one
   * child component.
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
 * The **UIPickerComponent** container is used to implement user selection operations. It supports single selection from
 * a limited set of options and can be applied to various scenarios such as time selection, date selection, region
 * selection, and status selection. Its display effect is a three-dimensional wheel style, supporting customizable
 * options including text type, image type, and text-image combination type.
 *
 * NOTE
 *
 * - The height of the **UIPickerComponent** container options is fixed at 40 vp, and a maximum of seven options can
 *   be displayed. Due to the three-dimensional wheel display effect, options other than the selected one will be
 *   rotated at different angles, so the actual visible height will be less than 40 vp.
 *
 * - It is recommended that the [height]{@link CommonMethod#height(value: Length)} of the **UIPickerComponent**
 *   container be set to 200 vp. When the set height is greater than or equal to this recommended value, all 7 options
 *   can be fully displayed. Otherwise, the display area will be cropped from the top and bottom edges towards the
 *   center, and the number of displayed options will be reduced accordingly, always keeping the selected item
 *   vertically centered.
 *
 * - When the **UIPickerComponent** container's [width]{@link CommonMethod#width(value: Length)} is not set, the
 *   maximum width of the visible child components in the current view is taken as the container width. You are advised
 *   to set the width of the **UIPickerComponent** container or set the same width for each child component to avoid
 *   dynamic changes in container width during sliding, which affects the display effect.
 *
 * - The alignment mode of child components in the **UIPickerComponent** container is fixed to center alignment, and
 *   cannot be changed via the [align]{@link CommonMethod#align(value: Alignment)} attribute.
 *
 * - Currently, the **UIPickerComponent** container does not support wearables.
 *
 * - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
interface UIPickerComponentInterface {

  /**
   * Creates a **UIPickerComponent** container, whose selected item is determined by the **selectedIndex** attribute in
   * the **options** parameter.
   *
   * @param { UIPickerComponentOptions } [options] - Parameters of the **UIPickerComponent** container. If the parameter
   *     is left empty, the component is a placeholder but the content is empty.
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
 * Defines the callback types for the [onChange]{@link UIPickerComponentAttribute#onChange} and
 * [onScrollStop]{@link UIPickerComponentAttribute#onScrollStop} events.
 *
 * Value range: an integer in the range of [0, Number of child components – 1].
 *
 * @param { number } selectedIndex - Index of the selected item.
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
   * Identifies the selected item by adding dividers above and below its edges.
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
 * Sets parameters of the selected item indicator style.
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
   * Default value: PickerIndicatorType.BACKGROUND
   *
   * If the value of **type** is a decimal number, the integer after rounding down is used. If the value of **type** is
   * not within the value range of **PickerIndicatorType**, the default value is used.
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
   * Stroke width of the divider.
   *
   * Default value: 2.0px.
   *
   * Unit: same as that of **LengthMetrics**
   *
   * Value range: [0, half the height of the selected item (that is, 20 vp)]. If the value of **strokeWidth** is less
   * than 0 or greater than half the height of the selected item, the default value is used. Percentages are not
   * supported.
   *
   * NOTE
   *
   * 1. This parameter takes effect only when **type** is set to **PickerIndicatorType.DIVIDER**.
   * 2. If this parameter is set in **LengthMetrics.resource** mode, the value of a non-length attribute will be treated
   * as 0 vp.
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
   * Default value: 'sys.color.comp_divider'
   *
   * **NOTE**
   *
   * This parameter takes effect only when **type** is set to **PickerIndicatorType.DIVIDER**.
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
   * Default value: 0
   *
   * Unit: same as that of **LengthMetrics**
   *
   * Value range: The sum of **startMargin** and **endMargin** must not exceed the width of the **UIPickerComponent**
   * container. If the value is less than 0 or the sum of **startMargin** and **endMargin** exceeds the width of the
   * **UIPickerComponent** container, the default value is used. Percentages are not supported.
   *
   * NOTE
   *
   * This parameter takes effect only when **type** is set to **PickerIndicatorType.DIVIDER**.
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
   * Default value: 0
   *
   * Unit: same as that of **LengthMetrics**
   *
   * Value range: The sum of **startMargin** and **endMargin** must not exceed the width of the **UIPickerComponent**
   * container. If the value is less than 0 or the sum of **startMargin** and **endMargin** exceeds the width of the
   * **UIPickerComponent** container, the default value is used. Percentages are not supported.
   *
   * **NOTE**
   *
   * This parameter takes effect only when **type** is set to **PickerIndicatorType.DIVIDER**.
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
   * Default value: 'sys.color.comp_background_tertiary'
   *
   * **NOTE**
   *
   * This parameter takes effect only when **type** is set to **PickerIndicatorType.BACKGROUND**.
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
   * Background border radius of the selected item.
   *
   * Value range: no more than half of the smaller value between the width and height of the selected item. If the value
   * Default value: { value:12, unit:LengthUnit.vp }, meaning 12 vp for all corners
   *
   * is less than 0, the default value is used. If the value is greater than the maximum value, the maximum value is
   * used.
   *
   * NOTE
   *
   * 1. This parameter takes effect only when **type** is set to **PickerIndicatorType.BACKGROUND**.
   * 2. [LengthMetrics]{@link Graphics:LengthMetrics}: Sets the size and unit of the four corner radii
   * in a unified manner.
   * 3. [BorderRadiuses]{@link BorderRadiuses}: Sets the size (unit: vp) of the four corner radii individually.
   * 4. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}: Sets the size and unit of the four corner radii
   * individually.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare class UIPickerComponentAttribute extends CommonMethod<UIPickerComponentAttribute> {

  /**
   * Triggered when the selected item changes.
   *
   * If callback is set to undefined, the callback is not used.
   *
   * NOTE
   *
   * - If more than half of an option's area enters the selected item area, the option becomes the selected item.
   *
   * - The selected item area can be identified by setting
   *   [selectionIndicator]{@link UIPickerComponentAttribute#selectionIndicator}. If the selected item indicator is set
   *   to the background, the background area is the selected item area. If the selected item indicator is set to the
   *   divider, the area between the center lines of the upper and lower dividers is the selected item area.
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - Callback triggered when the selected item changes.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onChange(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * Triggered when the picker scrolling stops. The picker scrolling stops when the scrolling animation triggered by an
   * action is complete. If a new scrolling animation is triggered before the previous one finishes, it does not count
   * as scrolling stop.
   *
   * If callback is set to undefined, the callback is not used.
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - Callback triggered when the picker scrolling stops.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onScrollStop(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * Sets whether the option list can loop scrolling.
   *
   * - true: Loop scrolling is enabled.
   * - false: Loop scrolling is disabled.
   *
   * Default value: true
   * If the value of isLoop is undefined, the default value is used.
   * If the number of child components is less than 8,
   * loop scrolling will not occur regardless of whether isLoop is set to true or false.
   *
   * @param { Optional<boolean> } isLoop - Whether loop scrolling is enabled.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  canLoop(isLoop: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in
   * **src/main/module.json5** of the project.
   *
   * - true: Enable haptic feedback.
   * - false: Disable haptic feedback.
   *
   * Default value: true
   * If the value of enable is undefined, the default value is used.
   * After this function is enabled, whether haptic feedback is available depends on the hardware support of the system.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * Sets the style of the selected item indicator.
   *
   * Default value: { type: PickerIndicatorType.BACKGROUND, borderRadius: { value:12, unit:LengthUnit.vp },
   * backgroundColor: 'sys.color.comp_background_tertiary' }
   * If the value of style is undefined, the default value is used.
   *
   * @param { Optional<PickerIndicatorStyle> } style - Style of the selected item indicator.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectionIndicator(style: Optional<PickerIndicatorStyle>): UIPickerComponentAttribute;

  /**
   * Sets the height of each item.
   *
   * @param { Optional<LengthMetrics> } height - Height of each item.
   * @returns { UIPickerComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  itemHeight(height: Optional<LengthMetrics>): UIPickerComponentAttribute;

  /**
   * Sets the total number of visible items.
   *
   * @param { Optional<int> } count - The total number of visible items.
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
 * The **UIPickerComponent** container is used to implement user selection operations. It supports single selection from
 * a limited set of options and can be applied to various scenarios such as time selection, date selection, region
 * selection, and status selection. Its display effect is a three-dimensional wheel style, supporting customizable
 * options including text type, image type, and text-image combination type.
 *
 * NOTE
 *
 * - The height of the **UIPickerComponent** container options is fixed at 40 vp, and a maximum of seven options can
 *   be displayed. Due to the three-dimensional wheel display effect, options other than the selected one will be
 *   rotated at different angles, so the actual visible height will be less than 40 vp.
 *
 * - It is recommended that the [height]{@link CommonMethod#height(value: Length)} of the **UIPickerComponent**
 *   container be set to 200 vp. When the set height is greater than or equal to this recommended value, all 7 options
 *   can be fully displayed. Otherwise, the display area will be cropped from the top and bottom edges towards the
 *   center, and the number of displayed options will be reduced accordingly, always keeping the selected item
 *   vertically centered.
 *
 * - When the **UIPickerComponent** container's [width]{@link CommonMethod#width(value: Length)} is not set, the
 *   maximum width of the visible child components in the current view is taken as the container width. You are advised
 *   to set the width of the **UIPickerComponent** container or set the same width for each child component to avoid
 *   dynamic changes in container width during sliding, which affects the display effect.
 *
 * - The alignment mode of child components in the **UIPickerComponent** container is fixed to center alignment, and
 *   cannot be changed via the [align]{@link CommonMethod#align(value: Alignment)} attribute.
 *
 * - Currently, the **UIPickerComponent** container does not support wearables.
 *
 * - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
 *
 * Child Components
 *
 * - Multiple child components are supported.
 * - Supported child component types: [Text]{@link text}, [Image]{@link image}, [Row]{@link row}, and
 *   [SymbolGlyph]{@link symbolglyph}
 * - Supported rendering control types: [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and
 *   [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)
 *
 * NOTE
 *
 * - When the Row **container** is used as a child component, the **Row** container can contain only the **Text**,
 *   **Image**, and **SymbolGlyph** basic components. Including other container components may affect the display effect
 *   or cause sliding functionality abnormalities.
 *
 * - When counting the number of child components, the **Row** container and its child components are counted as one
 *   child component.
 *
 * - When the child component is **Text**, **Image**, or **SymbolGlyph**, the
 *   [height]{@link CommonMethod#height(value: Length)} attribute does not take effect and is fixed at 40 vp.
 *
 * - When the child component is a **Row** container, its [height]{@link CommonMethod#height(value: Length)} attribute
 *   does not take effect and is fixed at 40 vp. The [height]{@link CommonMethod#height(value: Length)} attribute of the
 *   child components in the **Row** container takes effect. The final display effect is determined by the **Row**
 *   container.
 *
 * - The text-image combination option requires that the **Row** container contain the **Text** and **Image**
 *   components. When using the text-image combination option, you are advised to set the image's
 *   [height]{@link CommonMethod#height(value: Length)} to 40 vp or below to avoid cropping when images are large.
 *
 * - The **fontSize** attribute of all text components (including the **Text** components in the **Row** container) in
 *   the **UIPickerComponent** container is 20 fp by default. User settings will override the default value, and
 *   abnormal values will be processed according to the result of handling the text component's
 *   [fontSize]{@link TextAttribute#fontSize}. You are advised to set the **fontSize** attribute to a unified value or
 *   not to set it to ensure a good display effect.
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