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
   * Image resource. When **icon** is of the string type, it indicates the path of the image, for example, "/common/
   * hello.png"; when **icon** is of the Resource type, it indicates a resource reference.
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
   * Default value: empty string
   *
   * **Note:**
   *
   * 1. When this attribute is not set, the default value is used.
   * 2. When the text length is greater than the column width, the text is truncated.
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
   * **Note:** When the text length is greater than the column width, the text is truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text: string | Resource;

  /**
   * Linked data. Indicates the array of child options of the current data item, used to build the hierarchical
   * structure of a multi-column linkage data picker. Each element of the array is of the
   * [TextCascadePickerRangeContent]{@link TextCascadePickerRangeContent} type, containing the text and children
   * attributes, and supports multi-level nesting. Pass this parameter when the picker supports multi-level linkage; if
   * it is not passed, the option has no child-level data.
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
   * Data selection list of the picker. It cannot be set to an empty array. If it is set to an empty array, nothing is
   * displayed; if it dynamically changes to an empty array, the current normal value remains displayed.
   *
   * **Note:**
   *
   * 1. A single-column data picker uses the string[], [Resource]{@link Resource}, or
   * [TextPickerRangeContent]{@link TextPickerRangeContent}[] type.
   * 2. A multi-column non-linked data picker uses the string[][] type.
   * 3. A multi-column linkage data picker uses the
   * [TextCascadePickerRangeContent]{@link TextCascadePickerRangeContent}[] type.
   * 4. The Resource type supports only
   * [strarray.json](docroot://quick-start/resource-categories-and-access.md#resource-group-directories).
   * 5. The type and number of columns of range cannot be dynamically modified.
   *
   * **Atomic service API:** This API is supported in atomic services since API version 11.
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
   * Sets the value of the selected item. Its priority is lower than that of selected.
   *
   * Default value: the value of the first element in the data selection list.
   *
   * **Note:**
   *
   * 1. Since API version 10, this parameter supports
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md) two-way binding variables.
   * 2. Since API version 20, the [Resource]{@link Resource} type is supported.
   * 3. This value is valid only when a text list is displayed. It is invalid when a list of images or a mixed list of
   * images and text is displayed.
   * 4. A single-column data picker uses the [ResourceStr]{@link ResourceStr} type.
   * 5. A multi-column non-linked data picker uses the [ResourceStr]{@link ResourceStr}[] type, and the array length is
   * the same as the number of columns.
   * 6. A multi-column linkage data picker uses the [ResourceStr]{@link ResourceStr}[] type, and the array length is
   * the same as the number of levels.
   * 7. When neither selected nor value is set, or the selected value is invalid, the default value is used.
   *
   * **Atomic service API:** This API is supported in atomic services since API version 11.
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
   * Sets the index of the selected item in the data selection list. The index starts from 0.
   *
   * Default value: 0
   *
   * **Note:**
   *
   * 1. A single-column data picker uses the number type.
   * 2. A multi-column non-linked data picker uses the number[] type, and the array length is the same as the number of
   * columns.
   * 3. A multi-column linkage data picker uses the number[] type, and the array length is the same as the number of
   * levels.
   * 4. Since API version 10, this parameter supports
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md) two-way binding variables.
   * 5. If this attribute is not set or the set value is invalid, the default value is used.
   *
   * **Atomic service API:** This API is supported in atomic services since API version 11.
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
   * Sets the width of each column.
   *
   * Default value: the width of each column is equal, which is the component width divided by the number of columns.
   *
   * **Note:**
   *
   * 1. When the text length is greater than the column width, the text is truncated.
   * 2. When an abnormal value is set, the default value is used.
   * 3. Undefined and Null are supported, but Undefined[] and Null[] are not supported.
   * 4. When the length of the columnWidths array does not match the actual number of columns, the column width values
   * beyond the number of columns are ignored; columns without a specified width evenly share the remaining available
   * width of the component (the component width minus the sum of the specified column widths).
   *
   * **Model restriction:** This API can be used only under the stage model.
   *
   * **Atomic service API:** This API is supported in atomic services since API version 18.
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
 * A component that allows users to select text, images, or hybrid content through scrolling. Users can create a single-
 * column data picker, a multi-column non-linked data picker, and a multi-column linkage data picker as needed. It is
 * applicable to needs where users select data from preset options, such as date selection, region selection, and
 * configuration item settings. The component supports features such as cyclic scrolling, custom text styles, divider
 * style, fade effect, selection item height adjustment, haptic feedback, and crown sensitivity setting, providing a
 * smooth scrolling interaction experience and flexible data display.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - It is not recommended for developers to modify attribute data during animation.
 * >
 * > - The maximum display rows differ between landscape and portrait modes. In portrait mode, the default is 5 rows. In
 * > landscape mode, it depends on the system configuration, and the default is 3 rows when not configured. You can view
 * > the specific configuration value through the following parameter: $r('sys.float.ohos_id_picker_show_count_landscape
 * > ').
 * >
 * > - The multi-column non-linked data picker and the multi-column linkage data picker are collectively referred to as
 * > the multi-column data picker in the following sections.
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
   * @param { TextPickerOptions } options - Parameters for configuring the text picker. Pass this parameter when you
   *     need to customize the data source, selected item, column width, and other configurations of the picker. If this
   *     parameter is not set, the component cannot be displayed.
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
   * Line width of the divider.
   *
   * Default value: 2.0px
   *
   * Unit: vp by default, or px if specified.
   *
   * Value range:
   * [0, +∞). If strokeWidth is less than 0, the default value is used. The maximum value cannot exceed half of the
   * column height. The percentage type is not supported.
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
   * Default value: '#33000000'
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
   * Distance between the divider and the start side of the TextPicker.
   *
   * Default value: 0
   *
   * Unit: vp by default, or px if specified.
   *
   * Value range:
   * [0, +∞). If startMargin is less than 0, it is invalid. The maximum value cannot exceed the TextPicker column
   * width. The percentage type is not supported.
   *
   * **Note:** When startMargin + endMargin exceeds the component width, they are set to 0.
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
   * Distance between the divider and the end side of the TextPicker.
   *
   * Default value: 0
   *
   * Unit: vp by default, or px if specified.
   *
   * Value range:
   * [0, +∞). If endMargin is less than 0, it is invalid. The maximum value cannot exceed the TextPicker column
   * width. The percentage type is not supported.
   *
   * **Note:** When startMargin + endMargin exceeds the component width, they are set to 0.
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
   * Sets the minimum font size of the text, used together with maxFontSize. Pass this parameter when you need to limit
   * the minimum display size of the text to prevent it from being too small or to implement font size adaptation.
   *
   * **Note:** When minFontSize and maxFontSize are set, the size in font does not take effect. The default maximum
   * number of lines is 1, and the adaptive height mode is MIN_FONT_SIZE_FIRST. For details, see the
   * [minFontSize]{@link TextAttribute#minFontSize} attribute of the Text component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  minFontSize?: number | string | Resource;

  /**
   * Sets the maximum font size of the text, used together with minFontSize. Pass this parameter when you need to limit
   * the maximum display size of the text to prevent it from being too large or to implement font size adaptation.
   *
   * **Note:** When minFontSize and maxFontSize are set, the size in font does not take effect. For details, see the
   * [maxFontSize]{@link TextAttribute#maxFontSize} attribute of the Text component.
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
   * Default value:
   *
   * 'sys.color.comp_background_tertiary'
   *
   * **Note:** If this attribute is not set, the default value is used.
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
   * Corner radius of the border of the selected item.
   *
   * Default value: { value:24, unit:LengthUnit.VP }, that is, the radius of all four corners is 24vp.
   *
   * Unit: vp by default. The unit can be specified through the LengthMetrics or LocalizedBorderRadiuses type.
   *
   * **NOTE**
   *
   * 1. The value parameter of the [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics} type applies to the
   * radius of all four corners, and the unit parameter is used to set the unit.
   * 2. The [BorderRadiuses]{@link BorderRadiuses} type can set four different corner radii, with all units fixed to vp.
   * 3. The [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses} type can set four different corner radii, and the
   * unit of each corner can be set separately.
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
 * @param { string | string[] } value - Text of the currently selected item. For a multi-column data picker, the value
 *     is of the array type.
 *     <br>**Note:**
 *     <br>When the picker content is text or a mix of text and image, the value is the text value of the selected item.
 *     When the picker content is an image, the value is empty.
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
 * @param { string | string[] } selectItem - Text of the currently selected item. For a multi-column data picker,
 *     selectItem is of the array type.
 *     <br>**Note:**
 *     <br>When the picker content is text or a mix of text and images, the value of selectItem is the text value of the
 *     selected item. When the picker content is an image, the value of selectItem is empty.
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
 * @param { string | string[] } value - Text of the currently selected item. For a multi-column data picker, the value
 *     is of the array type.
 *     <br>**Note:**
 *     <br>When the picker content is text or a mix of text and images, the value is the text of the selected item; when
 *     the picker content is an image, the value is empty.
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
   * @param { number | string } value - Height of the selected item.
   *     <br>Value range:
   *     <br>number type: [0, +∞), in vp.
   *     <br>string type: only the string form of a number type value is supported, for example, "56".
   *     <br>Default value: 56 vp for the selected item and 36 vp for the unselected item.
   *     <br>**Note:**
   *     <br>After this parameter is set, the height of both the selected item and the unselected item is the set value.
   *     <br>When the value of value is negative, the default value is used.
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
   * @param { Optional<number | string> } height - Height of the selection item.
   *     <br>Value range:
   *     <br>number type: [0, +∞), in vp.
   *     <br>string type: only the string form of a number type value is supported, for example, "56".
   *     <br>Default value: 56 vp for the selected item and 36 vp for unselected items.
   *     <br>**Note:**
   *     <br>1. After this parameter is set, the height of both the selected item and unselected items is the set value.
   *     <br>2. When the value of height is undefined, the previous value is retained.
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
   * @param { boolean } value - Whether circular scrolling is supported.
   *     <br>- true: Circular scrolling is supported.
   *     <br>- false: Circular scrolling is not supported.
   *     <br>Default value: true
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
   * @param { Optional<boolean> } isLoop - Whether cyclic scrolling is supported.
   *     <br>- true: Cyclic scrolling is supported.
   *     <br>- false: Cyclic scrolling is not supported.
   *     <br>Default value: true
   *     <br>When the value of isLoop is undefined, the default value is used.
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
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the edge items.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>**Note:** If this method is not called to set the style, the default value is used.
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
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the edge items.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text color, font size, font weight, maximum font size, minimum font size, and truncation mode of edge
   * items (the second item above or below the selected item). Compared with
   * [disappearTextStyle<sup>18+</sup>]{@link TextPickerAttribute#disappearTextStyle(style: Optional<PickerTextStyle>)},
   * the style parameter adds support for the [TextPickerTextStyle]{@link TextPickerTextStyle} type.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Text color, font size, font weight, maximum font
   *     size, minimum font size, and overflow handling of the edge items.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '14fp',
   *     <br>weight: FontWeight.Regular
   *     <br>},
   *     <br>minFontSize: 0,
   *     <br>maxFontSize: 0,
   *     <br>overflow: TextOverflow.Clip
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
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
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the options.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>**Note:** When this method is not called to set the style, the default value is used.
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
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the options to be selected.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>}
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text color, font size, font weight, maximum font size, minimum font size, and truncation mode of candidate
   * items (the first item immediately above or below the selected item). Compared with
   * [textStyle<sup>18+</sup>]{@link TextPickerAttribute#textStyle(style: Optional<PickerTextStyle>)}, the style
   * parameter adds support for the [TextPickerTextStyle]{@link TextPickerTextStyle} type.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Text color, font size, font weight, maximum font
   *     size, minimum font size, and truncation mode of the text to be selected.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff182431',
   *     <br>font: {
   *     <br>size: '16fp',
   *     <br>weight: FontWeight.Regular
   *     <br>},
   *     <br>minFontSize: 0,
   *     <br>maxFontSize: 0,
   *     <br>overflow: TextOverflow.Clip
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
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
   * @param { PickerTextStyle } value - Text color, font size, and font weight of the selected item.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp',
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   *     <br>**Note:** If this method is not called to set the style, the default value is used.
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
   * @param { Optional<PickerTextStyle> } style - Text color, font size, and font weight of the selected item.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp',
   *     <br>weight: FontWeight.Medium
   *     <br>}
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * Sets the text color, font size, font weight, maximum font size, minimum font size, and truncation mode of the
   * selected item. Compared with
   * [selectedTextStyle<sup>18+</sup>]{@link TextPickerAttribute#selectedTextStyle(style: Optional<PickerTextStyle>)},
   * the style parameter adds support for the [TextPickerTextStyle]{@link TextPickerTextStyle} type.
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - Text color, font size, font weight, maximum font
   *     size, minimum font size, and truncation mode of the selected item's overlong text.
   *     <br>Default value:
   *     <br>{
   *     <br>color: '#ff007dff',
   *     <br>font: {
   *     <br>size: '20fp',
   *     <br>weight: FontWeight.Medium
   *     <br>},
   *     <br>minFontSize: 0,
   *     <br>maxFontSize: 0,
   *     <br>overflow: TextOverflow.Clip
   *     <br>}
   *     <br>When the value of style is undefined, the default value is used.
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
   * @param { boolean } disabled - Whether to disable the animation of text style changes during scrolling.
   *     <br>- true: Disables the animation of text style changes.
   *     <br>- false: Does not disable the animation of text style changes.
   *     <br>Default value: false
   *     <br>**Note:**
   *     <br>When set to true, there is no animation of font size, font weight, or font color changes during scrolling,
   *     and the text is displayed in the style set by [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle}.
   *     If [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle} is not set, the default style of the
   *     [Text]{@link ./text} component is used. When set to false, the system default animation of text style changes
   *     during scrolling is used.
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
   * @param { TextPickerTextStyle } style - Text style of each item when the text style change animation during the
   *     sliding process is disabled.
   *     <br>Default value: same as the default value of the [Text]{@link ./text} component.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 10. This API has been completely
   * > removed, and there is no substitute API.
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
   * > **NOTE**
   * >
   * > This API is supported since API version 8 and deprecated since API version 10. This API has been completely
   * > removed. There is no substitute API.
   *
   * @param { function } callback - Callback invoked when the cancel button in the dialog box is clicked.
   * @returns { TextPickerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   */
  onCancel(callback: () => void): TextPickerAttribute;

  /**
   * Triggered when the options settle at the selected item position after the text content of TextPicker is scrolled.
   * It is triggered when the user scrolls the picker and the selected item changes. It cannot be triggered by modifying
   * the two-way bound state variable (such as selected). When a text list or an image-plus-text list is displayed, the
   * value is the text value of the selected item. When an image list is displayed, the value is empty.
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
   * Triggered when the options settle at the selected item position after the text content of TextPicker is scrolled.
   * It is triggered when the user scrolls the picker and the selected item changes. It cannot be triggered by modifying
   * the two-way bound state variable (such as selected). When a text list or an image-plus-text list is displayed, the
   * value is the text value of the selected item. When an image list is displayed, the value is empty. Compared with
   * [onChange]{@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) =>
   * void)},
   * the callback parameter adds support for the undefined type.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea} instead.
   *
   * @param { Optional<OnTextPickerChangeCallback> } callback - Callback invoked when the text content of the TextPicker
   *     is selected by swiping.
   *     <br>If the value of callback is undefined, the callback is not used.
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
   * > - The difference from the [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea} event is that
   * > onScrollStop focuses on the complete stop of the scrolling behavior, while onEnterSelectedArea focuses on the
   * > logical state of an option entering the selected area. onEnterSelectedArea responds to index changes earlier and
   * > is suitable for real-time feedback scenarios. It is recommended to use
   * > [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea}. If you need to confirm that the scrolling
   * > behavior has completely stopped, use onScrollStop.
   * >
   * > - Since API version 20, this API supports being called in
   * > [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { TextPickerScrollStopCallback } callback - Triggered when the option column of the text picker stops
   *     scrolling. Callback signature: (value: string | string[], index: number | number[]) => void, where value is the
   *     text of the currently selected item, and index is the index of the currently selected item (starting from 0).
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
   * > - The difference from the [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea} event is that
   * > onScrollStop focuses on the complete stop of the scrolling behavior, while onEnterSelectedArea focuses on the
   * > logical state of an option entering the selected area. onEnterSelectedArea responds to index changes earlier and
   * > is suitable for real-time feedback scenarios. It is recommended to use
   * > [onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea}. If you need to confirm that the scrolling
   * > behavior has completely stopped, use onScrollStop.
   * >
   * > - Since API version 20, this API supports being called in
   * > [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<TextPickerScrollStopCallback> } callback - Callback invoked when the option column of the text
   *     picker stops scrolling.
   *     <br>When the value of callback is undefined, the callback is not used.
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
   * > - The difference from the
   * > [onChange]{@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) =>
   * > void)}
   * > event is that this event is triggered earlier than the
   * > [onChange]{@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) =>
   * > void)}
   * > event. onEnterSelectedArea is triggered when an option enters the selected area during sliding, and is suitable
   * > for obtaining index value changes in real time, applicable to scenarios that require a quick response to user
   * > sliding. onChange is triggered after sliding ends and the selected item is settled, and is suitable for obtaining
   * > the finally confirmed selected value, applicable to scenarios that require obtaining the user's final selection.
   * >
   * > - The difference from the
   * > [onScrollStop]{@link TextPickerAttribute#onScrollStop(callback: TextPickerScrollStopCallback)} event is that
   * > onEnterSelectedArea focuses on the logical state of an option entering the selected area, while onScrollStop
   * > focuses on the complete stop of the scrolling behavior. Use onEnterSelectedArea when an earlier response to index
   * > changes is required, and use
   * > [onScrollStop]{@link TextPickerAttribute#onScrollStop(callback: TextPickerScrollStopCallback)} when confirmation
   * > that scrolling has completely stopped is required.
   * >
   * > - In multi-column linkage scenarios, using this callback is not recommended. This callback identifies the node at
   * > which an option enters the divider area during sliding. The options that change accordingly do not involve
   * > sliding, so in the callback return value, only the value of the currently sliding column changes normally, while
   * > the values of the other non-sliding columns remain unchanged.
   * >
   * > - This API does not support being called in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { TextPickerEnterSelectedAreaCallback } callback - Callback invoked when an option enters the divider area
   *     during sliding of the TextPicker. Callback signature: (value: string | string[], index: number | number[]) =>
   *     void, where value is the text of the currently selected item, and index is the index of the currently selected
   *     item (starting from 0).
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
   * @param { number | number[] } value - Index of the selected item in the data selection list. The index starts from
   *     0.
   *     <br>Default value: **0**
   *     <br>If the value is negative or exceeds the maximum index of the data selection list, the default value is
   *     used.
   *     <br>
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
   * @param { Optional<number | number[]> } index - Index of the selected item in the data selection list. The index
   *     starts from 0.
   *     <br>Default value: **0**
   *     <br>If the value of **index** is **undefined**, the value of **selected** in
   *     [TextPickerOptions]{@link TextPickerOptions} is used.
   *     <br>If the value of **index** is a negative number or exceeds the maximum index value of the data selection
   *     list, the default value is used.
   *     <br>
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
   * @param { Optional<DividerOptions | null> } textDivider - Default value:
   *     <br>{
   *     <br>strokeWidth: '2px',
   *     <br>startMargin: 0,
   *     <br>endMargin: 0,
   *     <br>color: '#33000000'
   *     <br>}
   *     <br>1. When the value of textDivider is undefined, the default value is used.
   *     <br>2. When textDivider is set to a valid [DividerOptions]{@link DividerOptions}, the divider is displayed in
   *     the specified style.
   *     <br>3. When textDivider is set to null, the divider is not displayed.
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
   * @param { Dimension } value - Fade height of the upper and lower edges of the content area.
   *     <br>Default value: 36vp
   *     <br>Value range: [0, +∞), percentage supported.
   *     <br>**NOTE**
   *     <br>1. When value is set to a percentage, 100% indicates half the height of TextPicker.
   *     <br>2. When value is set to 0, the fade effect is not displayed.
   *     <br>3. When value is set to a number that exceeds half the height of TextPicker, the default value is used.
   *     <br>4. When the value is negative, the default value is used.
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
   * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
   *     <br>- true: Enables haptic feedback.
   *     <br>- false: Disables haptic feedback.
   *     <br>Default value: true
   *     <br>After it is set to true, whether it takes effect depends on whether the system hardware supports it. If the
   *     hardware does not support haptic feedback, enabling this feature does not produce a haptic feedback effect, nor
   *     does it throw an exception.
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
   * @param { Optional<Dimension> } height - Fade height of the upper and lower edges of the content area.
   *     <br>Default value: 36vp
   *     <br>Value range: [0, +∞), percentage supported.
   *     <br>**Note:**
   *     <br>1. When height is set to a percentage, 100% means half the height of the TextPicker.
   *     <br>2. When height is set to 0, the fade effect is not displayed.
   *     <br>3. When height is set to a number that exceeds half the height of the TextPicker, the default value is
   *     used.
   *     <br>4. When the value of height is undefined or negative, the default value is used.
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
   * @param { Optional<CrownSensitivity> } sensitivity - Crown response sensitivity.
   *     <br>Default value: **CrownSensitivity.MEDIUM**, which indicates a moderate response speed. Different
   *     sensitivity values affect the correspondence between the crown scrolling speed and the selected item switching
   *     speed. For the effect of each enum value, see [CrownSensitivity]{@link CrownSensitivity}.
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
   * @param { Optional<PickerBackgroundStyle> } style - Color and border radius of the background of the selected item.
   *     In multi-column mode, the color and border radius of the background of the selected item are set for all
   *     columns at the same time.
   *     <br>Default value:
   *     <br>{
   *     <br>color: $r('sys.color.comp_background_tertiary'),
   *     <br>borderRadius: $r('sys.float.corner_radius_level12')
   *     <br>}
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
 * Represents the selection result of a **TextPicker** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerResult {
  /**
   * Text of the selected item.
   *
   * **NOTE**
   *
   * When the picker contains text only or both text and imagery, **value** indicates the text value of the selected
   * item. (For a multi-column picker, **value** is of the array type.)
   *
   * For an image list, **value** is empty.
   *
   * The value must be within the range defined by the **range** attribute and cannot contain the escape character ().
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
   * Index of the selected item in the range. The index is zero-based. (For a multi-column picker, **index** is of the
   * array type.)
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
 * Inherits from [TextPickerOptions]{@link TextPickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {
  /**
   * Height of the picker item. The value is of the number type, ranging from
   * [0, +∞). The default unit is vp. The default value is 56 vp for the selected item and 36 vp for the unselected
   * item. The set value applies to both selected and unselected items. String type: numeric string only, for example,
   * **"56"**.
   *
   * **NOTE**
   *
   * If the value of **defaultPickerItemHeight** is a negative number, the default value is used.
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
   * Whether to enable loop scrolling.
   *
   * - **true**: Enable loop scrolling.
   * - **false**: Disable loop scrolling.
   *
   * Default value: **true**.
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
   * Text color, font size, and font weight of edge items (the second item above or below the selected item).
   *
   * Default value:
   *
   * {
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '14fp',
   *
   * weight: FontWeight.Regular
   *
   * }
   *
   * }
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
   * Text color, font size, and font weight of candidate items (the item immediately adjacent to the selected item,
   * above or below).
   *
   * Default value:
   *
   * {
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '16fp',
   *
   * weight: FontWeight.Regular
   *
   * }
   *
   * }
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
   * Style of the accept button.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**. If
   * both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp, and the unit of **borderRadius** is vp. The default button height remains
   * fixed even in accessibility and large-font modes. In addition, even if the button style is set to
   * [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule button
   * ([Capsule]{@link ButtonType}).
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
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**. If
   * both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp, and the unit of **borderRadius** is vp. The default button height remains
   * fixed even in accessibility and large-font modes. In addition, even if the button style is set to
   * [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule button
   * ([Capsule]{@link ButtonType}).
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
   * Default value:
   *
   * {
   *
   * color: '#ff007dff',
   *
   * font: {
   *
   * size: '20fp',
   *
   * weight: FontWeight.Medium
   *
   * }
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle?: PickerTextStyle;

  /**
   * Whether to disable the animation effect of text style changes during scrolling.
   *
   * - **true**: Disable the animation effect of text style changes.
   * - **false**: Do not disable the animation effect of text style changes.
   *
   * Default value: **false**.
   *
   * **NOTE**
   *
   * When this API is used with **true**, there are no text style changes, including the font size, weight, and color,
   * during scrolling, and all text is displayed in the style set by **defaultTextStyle**. If **defaultTextStyle** is
   * not set, the default style of the [Text]{@link ./text} component is used.
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
   * Style of the text items when the text style change animation during the scrolling process is disabled. It is
   * effective only when **disableTextStyleAnimation** is **true**.
   *
   * Default value: same as the default value of the [Text]{@link ./text} component
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * Triggered when the OK button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TextPickerResult) => void;

  /**
   * Triggered when the Cancel button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * Callback Triggered when the text picker in the dialog box snaps to the selected item. This callback is used to
   * obtain the final selection result.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * **onEnterSelectedArea** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TextPickerResult) => void;

  /**
   * Callback triggered when the picker scrolling stops. It is used to listen for the physical scrolling stop event. The
   * difference between the **onChange** and **onScrollStop** events is that **onChange** focuses on the selected
   * option, while **onScrollStop** focuses on the end of the scrolling action.
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
   * Compared to the **onChange** event, this event is triggered earlier, specifically when the scroll distance of the
   * current column exceeds half the height of the selected item, which indicates that the item has entered the divider
   * area.
   *
   * **NOTE**
   *
   * In scenarios where the picker contains linked columns, the use of this callback is not recommended. The reason is
   * that it identifies nodes where items enter the divider area during scrolling. However, items that change in
   * response to the scrolling do not themselves scroll. As a result, the callback's return values will only reflect
   * changes for the currently scrolling column, while other non-scrolling columns will remain unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask
   * area are not. Set this parameter when you need to restrict the interaction area of the dialog box or implement
   * special interaction effects.
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
   * Offset of the dialog box based on the **alignment** settings. Set this parameter when you need to fine-tune the
   * position of the dialog box. If this parameter is not set, the dialog box is displayed based on the **alignment**
   * settings.
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
   * Backplane color of the dialog box.
   *
   * Default value: **Color.Transparent**
   *
   * **NOTE**
   *
   * 1. If you set **backgroundColor** to a non-transparent color, set **backgroundBlurStyle** to
   * **BlurStyle.NONE.** Do not set **backgroundBlurStyle** to a value other than **NONE**. Otherwise, the displayed
   * color will not meet the expected effect.
   * 2. Since API version 26.0.0, this attribute does not take effect after **systemMaterial** is set.
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
   * 1. Setting this parameter to **BlurStyle.NONE** disables the background blur. When **backgroundBlurStyle** is set
   * to a value other than **NONE**, do not set **backgroundColor**. If you do, the color display may not produce the
   * expected visual effect.
   * 2. Since API version 26.0.0, this attribute does not take effect after **systemMaterial** is set.
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
   * Background blur effect parameters, which are used to customize the display style of the pop-up window background
   * blur. You can configure attributes such as the color mode, adaptive color, and zoom ratio to achieve different
   * background blur visual effects.
   *
   * **NOTE**
   *
   * If this attribute is not set, the default effect of **BlurStyle.COMPONENT_ULTRA_THICK** is used. If this attribute
   * is set, the effect of **backgroundBlurStyle** will be overwritten.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameters, which are used to customize the display effect of the dialog box background. You can
   * configure attributes such as the blur radius, saturation, brightness, and color to achieve different background
   * visual effects.
   *
   * **NOTE**
   *
   * If this parameter is not set, the blur effect of the pop-up window background is determined by the value of
   * **backgroundBlurStyle**. If this parameter is set, the value of **backgroundBlurStyle** will be overridden. Since
   * API version 26.0.0, **backgroundEffect** and **backgroundBlurStyle** do not take effect after **systemMaterial** is
   * set.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**. The settings take
   * effect next time the dialog box appears.
   * 3. If you quickly tap to display and then close a dialog box, the **onWillDisappear** callback may take effect
   * before the **onDidAppear** callback. In this case, the parameter settings in **onDidAppear** may not take effect in
   * the current dialog box.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**. The settings take
   * effect next time the dialog box appears.
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
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   * **onDidAppear**.
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
   * - **true**: Respond when the device is in semi-folded mode (applicable to interaction scenarios such as the hover
   * mode on foldable devices).
   * - **false**: Do not respond when the device is in semi-folded mode.
   *
   * Default value: **false**.
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
   * Default display area of a dialog box in hover mode. This method takes effect only when **enableHoverMode** is set
   * to **true**.
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
   * **module** in **src/main/module.json5** of the project.
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
   * Background color of the selected item.
   *
   * Default value:
   *
   * {
   *
   * color: $r('sys.color.comp_background_tertiary'),
   *
   * borderRadius: $r('sys.float.corner_radius_level12')
   *
   * }
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
 * Inherits from [TextPickerOptions]{@link TextPickerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface TextPickerDialogOptionsExt extends TextPickerOptions {
  /**
   * Height of the picker item. For the number type, the value range is
   * [0, +∞). For the string type, only numeric string values, for example, **"56"**, are supported.
   *
   * Default value: 56 vp (selected) and 36 vp (unselected). The set value applies to both selected and unselected
   * items.
   *
   * **NOTE**
   *
   * If the value of **defaultPickerItemHeight** is negative, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultPickerItemHeight?: number | string;

  /**
   * Whether to enable loop scrolling.
   *
   * - **true**: Enable loop scrolling.
   * - **false**: Disable loop scrolling.
   *
   * Default value: **true**.
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
   * Style of edge items (the second item above or below the selected item), covering the following: text color, font
   * size, font weight, maximum font size, minimum font size, text overflow mode.
   *
   * Default value:
   *
   * {
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '14fp',
   *
   * weight: FontWeight.Regular
   *
   * },
   *
   * minFontSize: 0,
   *
   * maxFontSize: 0,
   *
   * overflow: TextOverflow.CLIP
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disappearTextStyle?: TextPickerTextStyle;

  /**
   * Style of candidate items (the first item immediately above or below the selected item), covering the following:
   * text color, font size, font weight, maximum font size, minimum font size, text overflow mode.
   *
   * Default value:
   *
   * {
   *
   * color: '#ff182431',
   *
   * font: {
   *
   * size: '16fp',
   *
   * weight: FontWeight.Regular
   *
   * },
   *
   * minFontSize: 0,
   *
   * maxFontSize: 0,
   *
   * overflow: TextOverflow.CLIP
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textStyle?: TextPickerTextStyle;

  /**
   * Style of the accept button.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**. If
   * both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp and remains fixed even in accessibility and large-font modes. In addition,
   * even if the button style is set to [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule
   * button ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of the cancel button.
   *
   * **NOTE**
   *
   * 1. In **acceptButtonStyle** and **cancelButtonStyle**, at most one **primary** field can be set to **true**. If
   * both are set to **true**, the **primary** field will remain at the default value of **false**.
   * 2. The default button height is 40 vp and remains fixed even in accessibility and large-font modes. In addition,
   * even if the button style is set to [ROUNDED_RECTANGLE]{@link ButtonType}, the displayed effect is still a capsule
   * button ([Capsule]{@link ButtonType}).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * Style of the selected item, covering the following: text color, font size, font weight, maximum font size, minimum
   * font size, text overflow mode.
   *
   * Default value:
   *
   * {
   *
   * color: '#ff007dff',
   *
   * font: {
   *
   * size: '20fp',
   *
   * weight: FontWeight.Medium
   *
   * },
   *
   * minFontSize: 0,
   *
   * maxFontSize: 0,
   *
   * overflow: TextOverflow.CLIP
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedTextStyle?: TextPickerTextStyle;

  /**
   * Whether to disable the animation effect of text style changes during scrolling.
   *
   * - **true**: Disable the animation effect of text style changes.
   * - **false**: Do not disable the animation effect of text style changes.
   *
   * Default value: **false**.
   *
   * **NOTE**
   *
   * When this API is used with **true**, there are no text style changes, including the font size, weight, and color,
   * during scrolling, and all text is displayed in the style set by **defaultTextStyle**. If **defaultTextStyle** is
   * not set, the default style of the [Text]{@link ./text} component is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disableTextStyleAnimation?: boolean;

  /**
   * Style of the text items when the text style change animation during the scrolling process is disabled. It is
   * effective only when **disableTextStyleAnimation** is **true**.
   *
   * Default value: same as the default value of the [Text]{@link ./text} component
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * Triggered when the OK button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onAccept?: Callback<TextPickerResult>;

  /**
   * Triggered when the Cancel button in the dialog box is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * Callback triggered when the text picker in the dialog box snaps to the selected item. This callback is used to
   * obtain the final selection result.
   *
   * This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use
   * **onEnterSelectedArea** instead.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onChange?: Callback<TextPickerResult>;

  /**
   * Callback triggered when the picker scrolling stops. This callback is used to listen for the physical scrolling stop
   * event. The difference between the **onChange** and **onScrollStop** events is that the **onChange** event focuses
   * on the selected option, while the **onScrollStop** event focuses on the end of the scrolling action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * Represents the callback triggered during the scrolling of the text picker when an item enters the divider area.
   * Compared to the **onChange** event, this event is triggered earlier, specifically when the scroll distance of the
   * current column exceeds half the height of the selected item, which indicates that the item has entered the divider
   * area.
   *
   * **NOTE**
   *
   * In scenarios where the picker contains linked columns, the use of this callback is not recommended. The reason is
   * that it identifies nodes where items enter the divider area during scrolling. However, items that change in
   * response to the scrolling do not themselves scroll. As a result, the callback's return values will only reflect
   * changes for the currently scrolling column, while other non-scrolling columns will remain unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask
   * area are not.
   *
   * Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @atomicservice
   * @since 20 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * Offset of the dialog box based on the **alignment** settings. Set this parameter when you need to fine-tune the
   * position of the dialog box. If this parameter is not set, the dialog box is displayed based on the **alignment**
   * settings.
   *
   * Default value: **{ dx: 0 , dy: 0 }**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  offset?: Offset;

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
   * @atomicservice
   * @since 20 dynamic
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
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Background blur effect parameters, which are used to customize the display style of the pop-up window background
   * blur. You can configure attributes such as the color mode, adaptive color, and zoom ratio to achieve different
   * background blur visual effects.
   *
   * **NOTE**
   *
   * If this parameter is not set, the default effect of **BlurStyle.COMPONENT_ULTRA_THICK** is used. If this parameter
   * is set, the effect of **backgroundBlurStyle** is overwritten.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background effect parameters, which are used to customize the display effect of the dialog box background. You can
   * configure attributes such as the blur radius, saturation, brightness, and color to achieve different background
   * visual effects.
   *
   * **NOTE**
   *
   * If this parameter is not set, the blur effect of the dialog box background is determined by the value of
   * **backgroundBlurStyle**. If this parameter is set, the value of **backgroundBlurStyle** will be overridden. Since
   * API version 26.0.0, **backgroundEffect** and **backgroundBlurStyle** do not take effect after **systemMaterial** is
   * set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Event callback after the dialog box appears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onDidAppear**. The settings take
   * effect next time the dialog box appears.
   * 3. If you quickly tap to display and then close a dialog box, the **onWillDisappear** callback may take effect
   * before the **onDidAppear** callback. In this case, the parameter settings in **onDidAppear** may not take effect in
   * the current dialog box.
   * 4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidAppear?: VoidCallback;

  /**
   * Event callback after the dialog box disappears.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onDidDisappear?: VoidCallback;

  /**
   * Event callback when the dialog box is about to appear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. You can set the callback event for changing the dialog box display effect in **onWillAppear**. The settings take
   * effect next time the dialog box appears.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAppear?: VoidCallback;

  /**
   * Event callback when the dialog box is about to disappear.
   *
   * **NOTE**
   *
   * 1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
   * (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
   * 2. If the user closes the dialog box immediately after it appears, **onWillDisappear** is invoked before
   * **onDidAppear**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @since 20 dynamic
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
   * @since 20 dynamic
   */
  enableHoverMode?: boolean;

  /**
   * Default display area of a dialog box in hover mode. This parameter is valid only when **enableHoverMode** is set to
   * **true**.
   *
   * Default value: **HoverModeAreaType.BOTTOM_SCREEN**
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
   * **module** in **src/main/module.json5** of the project.
   *
   * "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
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
   * Background color of the selected item.
   *
   * Default value:
   *
   * {
   *
   * color: $r('sys.color.comp_background_tertiary'),
   *
   * borderRadius: $r('sys.float.corner_radius_level12')
   *
   * }
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
   * System material of the dialog box. Set this parameter when you need to use the predefined material effect to
   * quickly achieve a unified visual effect.
   *
   * **NOTE**
   *
   * - The default value is the **ImmersiveMaterial** object whose style is **ImmersiveStyle.ULTRA_THICK** in
   * **ImmersiveOptions**. If this parameter is set to **undefined**, the default value is used. Different materials
   * have different effects.
   * - This API affects the background color (
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}), background blur (
   * [backgroundBlurStyle]{@link CommonMethod#backgroundBlurStyle(value: BlurStyle, options?:
   * BackgroundBlurStyleOptions)}
   * ), background effect ([backgroundEffect]{@link CommonMethod#backgroundEffect(options: BackgroundEffectOptions)}),
   * border color ([borderColor]{@link CommonMethod#borderColor}), border width (
   * [borderWidth]{@link CommonMethod#borderWidth}), and shadow (
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}). When the system material is set, the
   * preceding APIs do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;
  /**
   * Distortion animation mode of the dialog box under system materials. This parameter is passed in when a custom
   * distortion animation effect is required for the dialog box.
   *
   * **Default value:** **DistortionMode.DISTORTION_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **DISTORTION_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the distortion effect is automatically enabled based on the device computing
   * power level (enabled on high- and mid-range devices, disabled on low-end devices). Distortion animation increases
   * rendering overhead, so it is recommended to use it with caution on low-end devices. For the meaning of each enum
   * value, see {@link DistortionMode}.
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;
  /**
   * Edge light animation mode of the dialog box under system materials. This parameter is passed in when a custom edge
   * light animation effect is required for the dialog box.
   *
   * **Default value:** **EdgeLightMode.EDGELIGHT_AUTO**
   *
   * **System API:** This is a system API.
   *
   * **Note:** When the value is **EDGELIGHT_AUTO**, the
   * {@link ImmersiveMaterial} material type must be set
   * for the effect to take effect, and the edge light effect is automatically enabled based on the device computing
   * power level (enabled on high-end devices, disabled on mid-range and low-end devices). Edge light animation
   * increases rendering overhead, so it is recommended to use it with caution on low-end devices. For the meaning of
   * each enum value, see
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
 * Creates a text picker based on the specified selection range and displays it in a dialog box. This component is
 * applicable to scenarios where users need to select text from preset options, such as setting pages, entering data
 * in AbilityForm, and filtering data.
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
   * > **NOTE**
   * >
   * > Since API version 10, you can use the
   * > [showTextPickerDialog]{@link @ohos.arkui.UIContext:UIContext.showTextPickerDialog} API in
   * > [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the text picker dialog box is shown in the intended
   * > UI instance.
   *
   * @param { TextPickerDialogOptions } options - Parameters of the text picker dialog box. The dialog can be properly
   *     displayed only when the range parameter is provided. Other parameters are optional.
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
 * A component that allows users to select text, images, or hybrid content through scrolling. Users can create a single-
 * column data picker, a multi-column non-linked data picker, and a multi-column linkage data picker as needed. It is
 * applicable to needs where users select data from preset options, such as date selection, region selection, and
 * configuration item settings. The component supports features such as cyclic scrolling, custom text styles, divider
 * style, fade effect, selection item height adjustment, haptic feedback, and crown sensitivity setting, providing a
 * smooth scrolling interaction experience and flexible data display.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs added in later versions are marked with a superscript
 * > to indicate their
 * >
 * > - It is not recommended for developers to modify attribute data during animation.
 * >
 * > - The maximum display rows differ between landscape and portrait modes. In portrait mode, the default is 5 rows. In
 * > landscape mode, it depends on the system configuration, and the default is 3 rows when not configured. You can view
 * > the specific configuration value through the following parameter: $r('sys.float.ohos_id_picker_show_count_landscape
 * > ').
 * >
 * > - The multi-column non-linked data picker and the multi-column linkage data picker are collectively referred to as
 * > the multi-column data picker in the following sections.
 *
 * ###### Child Components
 *
 * This is a basic component, and it is not recommended to include child components.
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