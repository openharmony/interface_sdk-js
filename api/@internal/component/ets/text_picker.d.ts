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
 * Defines the content for single-column picker options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface TextPickerRangeContent {

  /**
   * Image resource. If the value is a string, such as **"/common/hello.png"**, it represents the path to the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  icon: string | Resource;

  /**
   * Text information.
   *
   * An empty character string is used by default.
   *
   * Note: Text truncation occurs when content exceeds column width.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: string | Resource;
}

/**
 * Defines the content for multi-column picker options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface TextCascadePickerRangeContent {

  /**
   * Text information.
   *
   * Note: Text truncation occurs when content exceeds column width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text: string | Resource;

  /**
   * Linkage data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  children?: TextCascadePickerRangeContent[];
}

/**
 * Defines the configuration options of the text picker.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerOptions {

  /**
   * Data selection range of the picker. This parameter cannot be set to an empty array. If it is set to an empty array,
   * no value is displayed. If it is dynamically changed to an empty array, the current valid value remains displayed.
   *
   * **NOTE**
   *
   * 1. Single-column pickers: string[], [Resource]{@link Resource},
   *    or [TextPickerRangeContent]{@link TextPickerRangeContent}[]
   * 2. Multi-column independent pickers: string[][]
   * 3. Multi-column cascading pickers: [TextCascadePickerRangeContent]{@link TextCascadePickerRangeContent}[]
   * 4. The Resource type supports only [strarray.json]
   *    (docroot://quick-start/resource-categories-and-access.md#resource-group-directories).
   * 5. The type and number of columns in the range cannot be dynamically modified.
   *
   * @type {string[] | Resource} [since 8 - 9]
   * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]} [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];

  /**
   * Value of the selected item. The priority of this parameter is lower than that of **selected**.
   *
   * Default value: value of the first item in the data list.
   *
   * **NOTE**
   *
   * 1. Since API version 10, this parameter supports two-way binding through
   *    [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 2. The [Resource]{@link Resource} type is supported since API version 20.
   * 3. This parameter works only when the picker contains text only.
   *    It does not work when the picker contains images or mixed content.
   * 4. Single-column pickers: [ResourceStr]{@link ResourceStr}
   * 5. Multi-column pickers: [ResourceStr]{@link ResourceStr}[]
   *
   * @type { ?string } [since 8 - 9]
   * @type { ?(string | string[]) } [since 10 - 19]
   * @type { ?(ResourceStr | ResourceStr[]) } [since 20]
   * @default value of the first item [since 8 - 9]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value?: ResourceStr | ResourceStr[];

  /**
   * Index of the selected item in the data list. The index is zero-based.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * 1. Single-column pickers: number
   * 2. Multi-column pickers: number[]
   * 3. Since API version 10, this parameter supports two-way binding through
   *    [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * @type { ?number } [since 8 - 9]
   * @type { ?(number | number[]) } [since 10]
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: number | number[];

  /**
   * Custom widths for each column.
   *
   * Default value: Each column has equal width, calculated by dividing the total component width by the number of
   * columns.
   *
   * **NOTE**
   *
   * 1. Text truncation occurs when content exceeds column width.
   * 2. Invalid values are treated as the default value.
   * 3. Individual array elements can be **Undefined** or **Null**, but the entire array cannot be **Undefined[]**
   *    or **Null[]**.
   *
   * @default Each column has equal width, calculated by dividing the total component width by the number of columns.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  columnWidths?: LengthMetrics[];
}

/**
 * **TextPicker** is a component that allows users to select text, images, or hybrid content through scrolling. It
 * supports three usage modes: single-column picker, multi-column independent picker, and multi-column cascading picker.
 *
 *
 * > **NOTE**
 *
 * > - Avoid changing the attribute data during the animation process of this component.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
 * >
 * > - Multi-column independent pickers and multi-column cascading pickers are collectively referred to as multi-column
 * > pickers in this document.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TextPickerInterface {

  /**
   * Creates a text picker based on the specified data list.
   *
   * @param { TextPickerOptions } options - Parameters of the text picker.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TextPickerOptions): TextPickerAttribute;
}

/**
 * Define the divider configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DividerOptions {

  /**
   * Stroke width of the divider.
   *
   * Default value: **2.0px**
   *
   * Unit: vp (default) or px.
   *
   * If the value is less than 0, the default value is used. The maximum value allowed is half the height of the column.
   * Percentages are not supported.
   *
   * @default 2.0px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: Dimension;

  /**
   * Color of the divider.
   *
   * Default value: **'#33000000'**
   *
   * @default '#33000000'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the start edge of the text picker.
   *
   * Default value: **0**
   *
   * Unit: vp (default) or px.
   *
   * Values less than 0 are invalid. The maximum value allowed is the width of the column. Percentages are not
   * supported.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startMargin?: Dimension;

  /**
   * Distance between the divider and the end edge of the text picker.
   *
   * Default value: **0**
   *
   * Unit: vp (default) or px.
   *
   * Values less than 0 are invalid. The maximum value allowed is the width of the column. Percentages are not
   * supported.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endMargin?: Dimension;
}

/**
 * Defines the text style options for the text picker. Inherits from [PickerTextStyle]{@link PickerTextStyle}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface TextPickerTextStyle extends PickerTextStyle {

  /**
   * Minimum font size for the text. Used with **maxFontSize** to enable font scaling. When both **minFontSize** and
   * **maxFontSize** are set, the **size** property in **font** is ignored. By default, the maximum number of lines is
   * 1, with the **MIN_FONT_SIZE_FIRST** adaptation strategy. For details, see
   * [minFontSize]{@link TextAttribute#minFontSize}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  minFontSize?: number | string | Resource;

  /**
   * Maximum font size for the text. For details, see [maxFontSize]{@link TextAttribute#maxFontSize}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  maxFontSize?: number | string | Resource;

  /**
   * Text overflow behavior. This property has no effect when set to **MARQUEE**. For details, see
   * [textOverflow]{@link TextAttribute#textOverflow}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  overflow?: TextOverflow;
}

/**
 * Defines the background style configuration for selected picker items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface PickerBackgroundStyle {

  /**
   * Background color of the selected item.
   *
   * Default value: 'sys.color.comp_background_tertiary'
   *
   * @default 'sys.color.comp_background_tertiary'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor;

  /**
   * Border radius of the selected item.
   *
   * Default value: **{ value:24, unit:LengthUnit.VP }**, meaning 24 vp for all corners.
   *
   * **NOTE**
   *
   * 1. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}: uniform radius with a customizable unit
   * 2. [BorderRadiuses]{@link BorderRadiuses}: per-corner radius values (vp units only)
   * 3. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}: per-corner radius values with individual units
   *
   * @default { value:24, unit:LengthUnit.VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * Defines the **onScrollStop** event callback signature.
 *
 * @param { string | string[] } value - Text of the selected item. Use the array type for multi-column pickers.<br>
 *     **NOTE**<br>The return value is a text value for text or mixed content, and an empty string for image-only
 *     content.
 * @param { number | number[] } index - Index of the selected item. The index is zero-based. Use the array type for
 *     multi-column pickers.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void;

/**
 * Defines the **onChange** event callback signature.
 *
 * @param { string | string[] } selectItem - Text of the selected item. Use the array type for multi-column pickers.<br>
 *     **NOTE**<br>The return value is a text value for text or mixed content, and an empty string for image-only
 *     content.
 * @param { number | number[] } index - Index of the selected item. The index is zero-based. Use the array type for
 *     multi-column pickers.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTextPickerChangeCallback = (selectItem: string | string[], index: number | number[]) => void;

/**
 * Defines the **onEnterSelectedArea** event callback signature.
 *
 * @param { string | string[] } value - Text of the selected item. Use the array type for multi-column pickers.<br>
 *     **NOTE**<br>The return value is a text value for text or mixed content, and an empty string for image-only
 *     content.
 * @param { number | number[] } index - Index of the selected item. The index is zero-based. Use the array type for
 *     multi-column pickers.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void;

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
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {

  /**
   * Sets the height of the picker items.
   *
   * @param { number | string } value - Height of the picker items.<br>Value range:<br>Number type:
   *     [0, +∞), in vp.<br>String type: numeric string only, for example, **"56"**.<br>Default value:
   *     selected item 56 vp, unselected item 36 vp.<br>**NOTE**<br>The set value applies to both selected
   *     and unselected items.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  defaultPickerItemHeight(value: number | string): TextPickerAttribute;

  /**
   * Sets the height of the picker items. Compared with
   * [defaultPickerItemHeight]{@link TextPickerAttribute#defaultPickerItemHeight(value: number | string)}, this API
   * supports the **undefined** type for the **height** parameter.
   *
   * @param { Optional<number | string> } height - Height of the picker items.<br>Value range:<br>Number type:
   *     [0, +∞), in vp.<br>String type: numeric string only, for example, **"56"**.<br>Default value: selected item
   *     56 vp, unselected item 36 vp.<br>**NOTE**<br>1. The set value applies to both selected and unselected items.
   *     <br>2. If **height** is set to **undefined**, the previous value is retained.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultPickerItemHeight(height: Optional<number | string>): TextPickerAttribute;

  /**
   * Sets whether to enable loop scrolling.
   *
   * @param { boolean } value - Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>- **false**:
   *     Disable loop scrolling.<br>Default value: **true**
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  canLoop(value: boolean): TextPickerAttribute;

  /**
   * Sets whether to enable loop scrolling. Compared with
   * [canLoop<sup>10+</sup>]{@link TextPickerAttribute#canLoop(value: boolean)}, this API supports the **undefined**
   * type for the **isLoop** parameter.
   *
   * @param { Optional<boolean> } isLoop - Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>-
   *     **false**: Disable loop scrolling.<br>Default value: **true**<br>If the value of **isLoop** is **undefined**,
   *     the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  canLoop(isLoop: Optional<boolean>): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for edge items.<br>Default value:<br>{<br
   *     >color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).
   * Compared with
   * [disappearTextStyle<sup>10+</sup>]{@link TextPickerAttribute#disappearTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for edge items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text style of edge items (the second item above or below the selected item), covering the following: text
   * color, font size, font weight, maximum font size, minimum font size, text overflow mode. Compared with
   * [disappearTextStyle]{@link TextPickerAttribute#disappearTextStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>,
   * this API supports the [TextPickerTextStyle]{@link TextPickerTextStyle} type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Text style of edge items, covering the
   *     following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>
   *     Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>},<br>
   *     minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is
   *     **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the first item immediately above or below the
   * selected item).
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight for candidate items.<br>Default value:<br
   *     >{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of candidate items (the first item immediately above or below the
   * selected item). Compared with
   * [textStyle<sup>10+</sup>]{@link TextPickerAttribute#textStyle(value: PickerTextStyle)}, this API supports the
   * **undefined** type for the **style** parameter.
   *
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight for candidate items.<br>Default
   *     value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If
   *     the value of **style** is **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text style of candidate items (the first item immediately above or below the selected item), covering the
   * following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode. Compared
   * with [textStyle]{@link TextPickerAttribute#textStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>, this API
   * supports the [TextPickerTextStyle]{@link TextPickerTextStyle} type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Style of candidate items, covering the
   *     following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>
   *     Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>},<br>
   *     minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is
   *     **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item.
   *
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the selected item.<br>Default value:<
   *     br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>}
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * Sets the text color, font size, and font weight of the selected item. Compared with
   * [selectedTextStyle<sup>10+</sup>]{@link TextPickerAttribute#selectedTextStyle(value: PickerTextStyle)}, this API
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the selected item.<br>
   *     Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>}<
   *     br>If the value of **style** is **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text style of the selected item, covering the following: text color, font size, font weight, maximum font
   * size, minimum font size, text overflow mode. Compared with
   * [selectedTextStyle]{@link TextPickerAttribute#selectedTextStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>,
   * this API supports the [TextPickerTextStyle]{@link TextPickerTextStyle} type for the **style** parameter.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Text style of the selected item, covering the
   *     following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>
   *     Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>},<br>
   *     minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is
   *     **undefined**, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * Sets whether to disable the animation effect of text style changes during scrolling.
   *
   * @param { boolean } disabled - Whether to disable the animation effect of text style changes during scrolling.<br>-
   *     **true**: Disable the animation effect of text style changes.<br>- **false**: Do not disable the animation
   *     effect of text style changes.<br>Default value: **false**<br>**NOTE**<br>When this API is used with **true**,
   *     there are no text style changes, including the font size, weight, and color, during scrolling, and all text is
   *     displayed in the style set by [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle}. If
   *     [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle} is not set, the default style of the
   *     [Text]{@link ./text} component is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableTextStyleAnimation(disabled: boolean): TextPickerAttribute;

  /**
   * Sets the text style of the items when the text style change animation during the scrolling process is disabled.
   * This setting takes effect only when
   * [disableTextStyleAnimation]{@link TextPickerAttribute#disableTextStyleAnimation} is set to **true**.
   *
   * @param { TextPickerTextStyle } style - Text style of the items when the text style change animation during the
   *     scrolling process is disabled.<br>Default value: same as the default value of the [Text]{@link ./text}
   *     component
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute;

  /**
   * Triggered when the OK button in the dialog box is clicked. This event can be triggered only in the
   * [text picker dialog box]{@link ./text_picker}.
   *
   * This API is supported since API version 8 and deprecated since API version 10. No substitute is provided.
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   */
  onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;

  /**
   * Triggered when the cancel button in the dialog box is clicked. This event can be triggered only in the
   * [text picker dialog box]{@link ./text_picker}.
   *
   * This API is supported since API version 8 and deprecated since API version 10. No substitute is provided.
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   */
  onCancel(callback: () => void): TextPickerAttribute;

  /**
   * Triggered when the text picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. When the picker contains text only or a combination of images and text, **value** indicates the text of
   * the selected item. When the picker contains images only, **value** is empty.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea} instead.
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute;

  /**
   * Triggered when the text picker snaps to the selected item. This event cannot be triggered by two-way bound state
   * variables. When the picker contains text only or a combination of images and text, **value** indicates the text of
   * the selected item. When the picker contains images only, **value** is empty. Compared with
   * [onChange]
   * {@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) => void)},
   * this API supports the **undefined** type for the **callback** parameter.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea} instead.
   *
   * @param { Optional<OnTextPickerChangeCallback> } callback - Callback invoked when an item in the picker is selected.
   *     <br>If **callback** is set to **undefined**, the callback function is not used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnTextPickerChangeCallback>): TextPickerAttribute;

  /**
   * Triggered when the scrolling in the text picker stops.
   *
   * If the scrolling is initiated by a gesture, this event is triggered when the finger is lifted from the screen and
   * the scrolling stops.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { TextPickerScrollStopCallback } callback - Event triggered when the scrolling in the text picker stops.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute;

  /**
   * Triggered when the scrolling in the text picker stops. Compared with
   * [onScrollStop<sup>14+</sup>]{@link TextPickerAttribute#onScrollStop(callback: TextPickerScrollStopCallback)}, this
   * API supports the **undefined** type for the **callback** parameter.
   *
   * If the scrolling is initiated by a gesture, this event is triggered when the finger is lifted from the screen and
   * the scrolling stops.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<TextPickerScrollStopCallback> } callback - Event triggered when the scrolling in the text picker
   *     stops.<br>If **callback** is set to **undefined**, the callback function is not used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStop(callback: Optional<TextPickerScrollStopCallback>): TextPickerAttribute;

  /**
   * Triggered when an option enters the selection zone during text picker scrolling (when the scroll distance exceeds
   * half the selected item's height).
   *
   * > **NOTE**
   * >
   * > - This event is triggered earlier than the [onChange]
   * > {@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) => void)}
   * > event.
   * >
   * > - In scenarios where the picker contains linked columns, the use of this callback is not recommended. The reason
   * > is that it identifies nodes where items enter the divider area during scrolling. However, items that change in
   * > response to the scrolling do not themselves scroll. As a result, the callback's return values will only reflect
   * > changes for the currently scrolling column, while other non-scrolling columns will remain unchanged.
   * >
   * > - This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { TextPickerEnterSelectedAreaCallback } callback - Callback invoked when an option enters the selection zone
   *     during text picker scrolling.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback): TextPickerAttribute;

  /**
   * Sets the index of the selected item or items in the data list. This setting takes precedence over the **value**
   * property in [TextPickerOptions]{@link TextPickerOptions}. Use the number type for single-column pickers. Use the
   * number[] type for multi-column pickers.
   *
   * @param { number | number[] } value - Index of the selected item or items in the data list. The index is zero-based.
   *     <br>Default value: **0**<br>If the value is negative or exceeds the maximum index, the default value is used.<
   *     br>
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedIndex(value: number | number[]): TextPickerAttribute;

  /**
   * Sets the index of the selected item or items in the data list. This setting takes precedence over the **value**
   * property in [TextPickerOptions]{@link TextPickerOptions}. Use the number type for single-column pickers. Use the
   * number[] type for multi-column pickers. Compared with
   * [selectedIndex<sup>10+</sup>]{@link TextPickerAttribute#selectedIndex(value: number | number[])}, this API supports
   * the **undefined** type for the **index** parameter.
   *
   * @param { Optional<number | number[]> } index - Index of the selected item or items in the data list. The index is
   *     zero-based.<br>Default value: **0**<br>If **index** is **undefined**, the **selected** value of
   *     [TextPickerOptions]{@link TextPickerOptions} is used.<br>If it is negative or exceeds the maximum index, the
   *     default value is used.<br>
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex(index: Optional<number | number[]>): TextPickerAttribute;

  /**
   * Sets the divider style. If not explicitly set, the divider uses the default style.
   *
   * If the sum of **startMargin** and **endMargin** in [DividerOptions]{@link DividerOptions} exceeds the component's
   * width, both margins are automatically reset to 0.
   *
   * @param { DividerOptions | null } value
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  divider(value: DividerOptions | null): TextPickerAttribute;

  /**
   * Sets the divider style. If not explicitly set, the divider uses the default style. Compared with
   * [divider<sup>12+</sup>]{@link TextPickerAttribute#divider(value: DividerOptions | null)}, this API supports the
   * **undefined** type for the **textDivider** parameter.
   *
   * If the sum of **startMargin** and **endMargin** in [DividerOptions]{@link DividerOptions} exceeds the component's
   * width, both margins are automatically reset to 0.
   *
   * @param { Optional<DividerOptions | null> } textDivider - Default value:<br>{<br>strokeWidth: '2px', <br>
   *     startMargin: 0, <br>endMargin: 0, <br>color: '#33000000'<br>}<br>1. If the value of **textDivider** is
   *     **undefined**, the default value is used.<br>2. If **textDivider** is a valid
   *     [DividerOptions]{@link DividerOptions} object, the divider is rendered using the specified style.<br>3. If
   *     **textDivider** is **null**, the divider is hidden.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  divider(textDivider: Optional<DividerOptions | null>): TextPickerAttribute;

  /**
   * Sets the height of the fade effect applied to the top and bottom edges of the content area. If no setting is
   * specified, a default fade effect is used.
   *
   * @param { Dimension } value - Height of the fade effect.<br>Default value: **36vp**<br>Value range:
   *     [0, +∞). Percentages are supported.<br>**NOTE**<br>1. If the value is set to a percentage, **100%** equals half
   *     the height of the text picker.<br>2. A value of **0** disables the fade effect.<br>3. Values exceeding half the
   *     height of the text picker revert to the default value.<br>4. If the value is **undefined** or negative,
   *     the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gradientHeight(value: Dimension): TextPickerAttribute;

  /**
   * Sets whether to enable haptic feedback.
   *
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.<br>
   *     - **false**: Disable haptic feedback.<br>Default value: **true**<br>Whether this parameter takes effect after
   *     being set to **true** depends on hardware support.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): TextPickerAttribute;

  /**
   * Sets the height of the fade effect applied to the top and bottom edges of the content area. If no setting is
   * specified, a default fade effect is used. Compared with
   * [gradientHeight<sup>12+</sup>]{@link TextPickerAttribute#gradientHeight(value: Dimension)}, this API supports the
   * **undefined** type for the **height** parameter.
   *
   * @param { Optional<Dimension> } height - Height of the fade effect.<br>Default value: **36vp**<br>Value range:
   *     [0, +∞). Percentages are supported.<br>**NOTE**<br>1. If the value is set to a percentage, **100%** equals half
   *     the height of the text picker.<br>2. A value of **0** disables the fade effect.<br>3. Values exceeding half the
   *     height of the text picker revert to the default value.<br>4. If the value is **undefined** or negative,
   *     the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  gradientHeight(height: Optional<Dimension>): TextPickerAttribute;

  /**
   * Sets the sensitivity to the digital crown rotation.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.<br>Default value:
   *     **CrownSensitivity.MEDIUM**
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TextPickerAttribute;

  /**
   * Sets the background style of selected items.
   *
   * @param { Optional<PickerBackgroundStyle> } style - Background color and corner radius for selected items. Applies
   *     to all columns in multi-column mode.<br>Default value:<br>{ <br>color: $r('sys.color.comp_background_tertiary')
   *     ,<br>borderRadius: $r('sys.float.corner_radius_level12')<br>}
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>): TextPickerAttribute;
}

/**
 * Defines the struct of TextPickerResult.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerResult {

  /**
   * The currently selected value.
   * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
   *
   * @type { string } [since 8 - 9]
   * @type { string | string[] } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: string | string[];

  /**
   * The subscript of the current selection.
   *
   * @type { number } [since 8 - 9]
   * @type { number | number[] } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  index: number | number[];
}

/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {

  /**
   * Height of the picker item.
   *
   * @default 56 vp (selected) and 36 vp (unselected) [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  defaultPickerItemHeight?: number | string;

  /**
   * Whether to support scroll looping.
   * The value true means to support scroll looping, and false means the opposite.
   *
   * Default Value: true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  canLoop?: boolean;

  /**
   * Font color, font size, and font weight of the top and bottom items.
   *
   * Default Value：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * Font color, font size, and font weight of all items except the top, bottom, and selected items.
   *
   * Default Value：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle?: PickerTextStyle;

  /**
   * Style of accept button.
   *
   * <p><strong>NOTE</strong>:
   * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
   * <br>only one primary field can be set to true at most.
   * <br>If both the primary fields are set to true, neither will take effect.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of cancel button.
   *
   * <p><strong>NOTE</strong>:
   * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
   * <br>only one primary field can be set to true at most.
   * <br>If both the primary fields are set to true, neither will take effect.
   * </p>
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Sets whether to enable the text style change animation during the scrolling process.
   * true: Disable the text style change animation.
   * false: Enable the text style change animation.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableTextStyleAnimation?: boolean;

  /**
   * Style of the text items when the text style change animation during the scrolling process is disabled.
   *
   * <p><strong>NOTE</strong>:
   * <br>It is effective only when disableTextStyleAnimation is true.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * Callback invoked when the OK button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TextPickerResult) => void;

  /**
   * Callback invoked when the Cancel button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * Callback invoked when the text picker in the dialog box snaps to the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TextPickerResult) => void;

  /**
   * Callback invoked when the scrolling in the text picker of the dialog box stops.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * Represents the callback triggered during the scrolling of the text picker when an item enters the divider area.
   * Compared to the onChange event, this event is triggered earlier,
   * specifically when the scroll distance of the current column exceeds half the height of the selected item,
   * which indicates that the item has entered the divider area.
   *
   * <p><strong>NOTE</strong>:
   * <br>In scenarios where the picker contains linked columns,
   * <br>the use of this callback is not recommended.
   * <br>The reason is that it identifies nodes where items enter the divider area during scrolling.
   * <br>However, items that change in response to the scrolling do not themselves scroll. As a result,
   * <br>he callback's return values will only reflect changes for the currently scrolling column,
   * <br>while other non-scrolling columns will remain unchanged.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * Mask area of the dialog box.
   * Events outside the mask area are transparently transmitted, and events within the mask area are not.
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
   * @default DialogAlignment.Default [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box based on the alignment settings.
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
   * Backplane color of the dialog box.
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
   * Event callback when the dialog box appears.
   *
   * <p><strong>NOTE</strong>:
   * <br>1. The normal timing sequence is as follows:
   * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * <br>2. You can set the callback event for changing the dialog box display effect in onDidAppear.
   * The settings take effect next time the dialog box appears.
   * <br>3. If the user closes the dialog box immediately after it appears,
   * onWillDisappearis invoked before onDidAppear.
   * <br>4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidAppear?: () => void;

  /**
   * Event callback when the dialog box disappears.
   *
   * <p><strong>NOTE</strong>:
   * <br>The normal timing sequence is as follows:
   * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * </p>
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
   * <p><strong>NOTE</strong>:
   * <br>1. The normal timing sequence is as follows:
   * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * <br>2. You can set the callback event for changing the dialog box display effect in onWillAppear.
   * <br>the settings take effect next time the dialog box appears.
   * </p>
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
   * <p><strong>NOTE</strong>:
   * <br>1. The normal timing sequence is as follows:
   * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * <br>2. If the user closes the dialog box immediately after it appears,
   * onWillDisappear is invoked before onDidAppear.
   * </p>
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
   * Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD when the dialog box is focused
   * and ShadowStyle.OUTER_FLOATING_SM otherwise.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Whether to enable the hover mode.
   *
   * Default Value: false
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
   * Display area of the dialog box in hover mode.
   *
   * Default Value: HoverModeAreaType.BOTTOM_SCREEN
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
   * true (default): Haptic feedback is enabled.
   * false: Haptic feedback is disabled.
   *
   * <p><strong>NOTE</strong>:
   * <br>To enable haptic feedback, you must declare the ohos.permission.VIBRATE permission
   * <br>under requestPermissions in the module.json5 file of the project.
   * <br>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}].
   * </p>
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
   * Background style of selected items.
   *
   * Default Value: { color: $r('sys.color.comp_background_tertiary'),
   * borderRadius: $r('sys.float.corner_radius_level12') }
   *
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;
}

/**
 * Defines the TextPickerDialogOptionsExt for Text Picker Dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface TextPickerDialogOptionsExt extends TextPickerOptions {

  /**
   * Called when the default height of the selected element is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultPickerItemHeight?: number | string;

  /**
   * Can scroll loop if true is set, on the contrary it can not.
   *
   * Default Value: true
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop?: boolean;

  /**
   * Text style of disappearing items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disappearTextStyle?: TextPickerTextStyle;

  /**
   * Text style of normal items
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textStyle?: TextPickerTextStyle;

  /**
   * Style of accept button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of cancel button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Text style of selected items
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedTextStyle?: TextPickerTextStyle;

  /**
   * Defines whether to disable the text style animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disableTextStyleAnimation?: boolean;

  /**
   * Defines to set the default text style for options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * Called when the OK button in the dialog is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onAccept?: Callback<TextPickerResult>;

  /**
   * Called when the Cancel button in the dialog is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * This event is triggered when a TextPicker text is selected in dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onChange?: Callback<TextPickerResult>;

  /**
   * This event is triggered when a TextPicker text is selected and scrolling has stopped in dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * This event is triggered when an item enters the selected area in dialog.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * Mask Region of dialog. The size cannot exceed the main window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maskRect?: Rectangle;

  /**
   * Defines the dialog alignment of the screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Defines the dialog offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  offset?: Offset;

  /**
   * Defines the textPickerDialog's background color
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines the textPickerDialog's background blur Style
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the textPickerDialog's background blur style with options
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the textPickerDialog's background effect with options
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Callback function when the dialog appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidAppear?: VoidCallback;

  /**
   * Callback function when the dialog disappears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidDisappear?: VoidCallback;

  /**
   * Callback function before the dialog openAnimation starts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAppear?: VoidCallback;

  /**
   * Callback function before the dialog closeAnimation starts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillDisappear?: VoidCallback;

  /**
   * Defines the dialog's shadow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Defines the dialog's display area in hover mode.
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Enable or disable haptic feedback.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * Background style of selected items.
   *
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;

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
   * Default Value: EdgeLightMode.EDGELIGHT_AUTO
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
 * A text picker dialog box is a dialog box that allows users to select text from the given range.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextPickerDialog {

  /**
   * Shows a text picker in the given settings.
   *
   * @param { TextPickerDialogOptions } options - Parameters of the text picker dialog box.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showTextPickerDialog
   */
  static show(options?: TextPickerDialogOptions);
}

/**
 * **TextPicker** is a component that allows users to select text, images, or hybrid content through scrolling. It
 * supports three usage modes: single-column picker, multi-column independent picker, and multi-column cascading picker.
 *
 *
 * > **NOTE**
 *
 * > - Avoid changing the attribute data during the animation process of this component.
 * >
 * > - The maximum number of rows that can be displayed varies by screen orientation: In portrait mode, the default
 * > number of rows is 5. In landscape mode, the number of rows depends on the system configuration. If no system
 * > configuration is set, the default is 3 rows. To check the specific system configuration value for landscape mode,
 * > use **$r('sys.float.ohos_id_picker_show_count_landscape')**.
 * >
 * > - Multi-column independent pickers and multi-column cascading pickers are collectively referred to as multi-column
 * > pickers in this document.
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
declare const TextPicker: TextPickerInterface;

/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const TextPickerInstance: TextPickerAttribute;
