/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * Provides information about the drop-down menu options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare interface SelectOption {
  /**
   * Value of the drop-down menu option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: ResourceStr;

  /**
   * Icon of the drop-down menu option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon of drop-down menu option.
   * 
   * **symbolIcon** takes precedence over **icon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;
}

/**
 * The **Select** component provides a drop-down menu that allows users to select among multiple options.
 * 
 * > **NOTE**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SelectInterface {
  /**
   *
   * @param { Array<SelectOption> } options - Options of the drop-down menu.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: Array<SelectOption>): SelectAttribute;
}

/**
 * Enumerates arrow positions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ArrowPosition {
  /**
   * The text is in front of the arrow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 0,

  /**
   * The arrow is in front of the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 1
}

/**
 * Enumerates drop-down menu alignment modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum MenuAlignType {
  /**
   * Aligned with the start edge in the same direction as the language in use.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START,
  /**
   * Aligned with the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,
  /**
   * Aligned with the end edge in the same direction as the language in use.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END
}

/**
 * Enumerates the drop-down menu avoidance modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum AvoidanceMode {
  /**
   * If there is not enough space below the target component, cover the target component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  COVER_TARGET,
  /**
   * If there is not enough space around the target component, compress and display in the largest available space (
   * scrollable).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  AVOID_AROUND_TARGET
}

/**
 * Defines the callback invoked when a drop-down menu option is selected.
 *
 * @param {number} index - Index of the selected option. The index is zero-based.
 * @param {string} selectStr - Value of the selected option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSelectCallback = (index: number, selectStr: string) => void;

/**
 * Defines the outline of the drop-down menu.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface MenuOutlineOptions {
  /**
   * Width of the outline. Percentage values are not supported.
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  width?: Dimension | EdgeOutlineWidths;
 
  /**
   * Color of the outline.
   * 
   * Default value: **#19ffffff**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor | EdgeColors;
 }
 
/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SelectAttribute extends CommonMethod<SelectAttribute> {
  /**
   * Sets the index of the initially selected option in the drop-down menu, where the first option has an index of 0. 
   * When **selected** is set to an invalid value or is not set, the default default **-1** is used, which indicates no 
   * selection. When **selected** is set to **undefined** or **null**, the first option is selected.
   * 
   * Since API version 10, this attribute supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this attribute supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { number } value - Index of the initially selected option. The index is zero-based. [since 8 - 10]
   * @param { number | Resource } value - Index of the initially selected option. The index is zero-based. [since 11]
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected(value: number | Resource): SelectAttribute;

  /**
   * Sets the index of the initially selected option in the drop-down menu, where the first option has an index of 0. 
   * When **selected** is set to an invalid value or is not set, the default default **-1** is used, which indicates no 
   * selection. When **selected** is set to **undefined** or **null**, the first option is selected.
   * 
   * This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { Optional<number | Resource> } numCount - Index of the initially selected option.<br>When **numCount** is
   *     set to **undefined**, the first option is selected.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selected(numCount: Optional<number | Resource>): SelectAttribute;

  /**
   * Sets the text content of drop-down button. After a menu option is selected, the button text will automatically 
   * update to display the selected option's text.
   * 
   * Since API version 10, this attribute supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this attribute supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { string } value - Text of the drop-down button.<br>Note: If the text exceeds the column width, it will be
   *     truncated. [since 8 - 10]
   * @param { ResourceStr } value - Text of the drop-down button.<br>Note: If the text exceeds the column width, it will
   *     be truncated. [since 11]
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value(value: ResourceStr): SelectAttribute;

  /**
   * Sets the text content of drop-down button. After a menu option is selected, the button text will automatically 
   * update to display the selected option's text. Compared with 
   * [value]{@link SelectAttribute#value(value: ResourceStr)}, this API supports the **undefined** type for the 
   * **resStr** parameter.
   * 
   * This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { Optional<ResourceStr> } resStr - Text of the drop-down button.<br>If **resStr** is set to **undefined**,
   *     the previous value is retained.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  value(resStr: Optional<ResourceStr>): SelectAttribute;

  /**
   * Sets the text style of the drop-down button. When **size** is set to **0**, the text is not displayed. When 
   * **size** is set to a negative value, the text is displayed at its default size.
   *
   * @param { Font } value - Text style of the drop-down list button.<br>For API versions 11 and earlier, the default
   *     value is as follows:<br>{<br>size: `$r('sys.float.ohos_id_text_size_button1')`,<br>weight: FontWeight.Medium<br
   *     >} <br>Since API version 12: The default value of **size** is **$r('sys.float.ohos_id_text_size_button2')** in
   *     the case of **controlSize.SMALL** and **$r('sys.float.ohos_id_text_size_button1')** in other cases.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  font(value: Font): SelectAttribute;

  /**
   * Sets the text style of the drop-down button. When **size** is set to **0**, the text is not displayed. When 
   * **size** is set to a negative value, the text is displayed at its default size. Compared with 
   * [font]{@link SelectAttribute#font(value: Font)}, this API supports the **undefined** type for the **selectFont** 
   * parameter.
   *
   * @param { Optional<Font> } selectFont - Text style of the drop-down list button.<br>If **controlSize** is set to
   *     **controlSize.SMALL**, the default value of **size** is **$r('sys.float.ohos_id_text_size_button2')**.
   *     Otherwise, the default value is **$r('sys.float.ohos_id_text_size_button1')**.<br>If **selectFont** is set to
   *     **undefined**, the default font style is used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  font(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the font color of the drop-down button.
   *
   * @param { ResourceColor } value - Font color of the drop-down button.<br>Default value:
   *     **$r('sys.color.ohos_id_color_text_primary')** with the opacity of
   *     **$r('sys.color.ohos_id_alpha_content_primary')**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the font color of the drop-down button. Compared with 
   * [fontColor]{@link SelectAttribute#fontColor(value: ResourceColor)}, this API supports the **undefined** type for 
   * the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Font color of the drop-down button.<br>When **resColor** is set to
   *     **undefined**, the default value is a blend of **$r('sys.color.ohos_id_color_text_primary')** with the opacity
   *     of **$r('sys.color.ohos_id_alpha_content_primary')**.<br>If **value** is set to **undefined**, the previous
   *     value is retained.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  fontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of the selected option in the drop-down menu.
   *
   * @param { ResourceColor } value - Background color of the selected option in the drop-down menu.<br>Default value:
   *     **$r('sys.color.ohos_id_color_component_activated')** with the opacity of
   *     **$r('sys.color.ohos_id_alpha_highlight_bg')**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the background color of the selected option in the drop-down menu. Compared with 
   * [selectedOptionBgColor]{@link SelectAttribute#selectedOptionBgColor(value: ResourceColor)}, this API supports the 
   * **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Background color of the selected option in the drop-down menu.<br>
   *     When **resColor** is set to **undefined**, the default value is a blend of
   *     **$r('sys.color.ohos_id_color_component_activated')** with the opacity of
   *     **$r('sys.color.ohos_id_alpha_highlight_bg')**.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text font of the selected option in the drop-down menu. When **size** is set to **0**, the text is not 
   * displayed. When **size** is set to a negative value, the text is displayed at its default size.
   *
   * @param { Font } value - Text font of the selected option in the drop-down menu.<br>Default value:<br>{<br>size: $r(
   *     'sys.float.ohos_id_text_size_body1'),<br>weight: FontWeight.Regular<br>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionFont(value: Font): SelectAttribute;

  /**
   * Sets the text font of the selected option in the drop-down menu. When **size** is set to **0**, the text is not 
   * displayed. When **size** is set to a negative value, the text is displayed at its default size. Compared with 
   * [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}, this API supports the **undefined** 
   * type for the **selectFont** parameter.
   *
   * @param { Optional<Font> } selectFont - Text font of the selected option in the drop-down menu.<br>If **selectFont**
   *     is set to **undefined**, the default value is used:<br>{<br>size: $r('sys.float.ohos_id_text_size_body1'),<br>
   *     weight: FontWeight.Regular<br>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the font color of the selected option in the drop-down menu.
   *
   * @param { ResourceColor } value - Font color of the selected option in the drop-down menu.<br>Default value:
   *     **$r('sys.color.ohos_id_color_text_primary_activated')**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the font color of the selected option in the drop-down menu. Compared with 
   * [selectedOptionFontColor]{@link SelectAttribute#selectedOptionFontColor(value: ResourceColor)}, this API supports 
   * the **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Font color of the selected option in the drop-down menu.<br>If
   *     **resColor** is set to **undefined**, the default value
   *     **$r('sys.color.ohos_id_color_text_primary_activated')** is used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of options in the drop-down menu.
   *
   * @param { ResourceColor } value - Background color of options in the drop-down menu.<br>Default value:<br>Versions
   *     earlier than API version 11: **Color.White**<br>Since API version 11: **Color.Transparent**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the background color of options in the drop-down menu. Compared with 
   * [optionBgColor]{@link SelectAttribute#optionBgColor(value: ResourceColor)}, this API supports the **undefined** 
   * type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Background color of options in the drop-down menu.<br>When the value
   *     of resColor is undefined, the background color of the drop-down menu item is Color.White.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text font of options in the drop-down menu. When **size** is set to **0**, the text is not displayed. When
   * **size** is set to a negative value, the text is displayed at its default size.
   *
   * @param { Font } value - Text font of options in the drop-down menu.<br>Default value:<br>{<br>size: $r('
   *     sys.float.ohos_id_text_size_body1'),<br>weight: FontWeight.Regular<br>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionFont(value: Font): SelectAttribute;

  /**
   * Sets the text font of options in the drop-down menu. When **size** is set to **0**, the text is not displayed. When
   * **size** is set to a negative value, the text is displayed at its default size.
   * 
   * Compared with [optionFont]{@link SelectAttribute#optionFont(value: Font)}, this API supports the **undefined** type
   * for the **selectFont** parameter.
   *
   * @param { Optional<Font> } selectFont - Text font of options in the drop-down menu.<br>If **selectFont** is set to
   *     **undefined**, the default value is used:<br>{<br>size: $r('sys.float.ohos_id_text_size_body1'),<br>weight: 
   *     FontWeight.Regular<br>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  optionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the font color of options in the drop-down menu.
   *
   * @param { ResourceColor } value - Font color of options in the drop-down menu.<br>Default value:
   *     **$r('sys.color.ohos_id_color_text_primary')**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the font color of options in the drop-down menu. Compared with 
   * [optionFontColor]{@link SelectAttribute#optionFontColor(value: ResourceColor)}, this API supports the **undefined**
   * type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Font color of options in the drop-down menu.<br>If **resColor** is
   *     set to **undefined**, the default value **$r('sys.color.ohos_id_color_text_primary')** is used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Triggered when a drop-down menu option is selected.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(callback: (index: number, value: string) => void): SelectAttribute;

  /**
   * Triggered when a drop-down menu option is selected. Compared with 
   * [onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)}, this API supports the
   * **undefined** type for the **callback** parameter.
   *
   * @param { Optional<OnSelectCallback> } callback - Callback invoked when a drop-down menu option is selected.<br>If
   *     **callback** is set to **undefined**, the callback function is not used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect(callback: Optional<OnSelectCallback>): SelectAttribute;

  /**
   * Sets the spacing between the text and arrow of a drop-down menu option. This attribute cannot be set in percentage.
   * If the value specified is **null**, **undefined**, or less than or equal to 8, the default value is used.
   *
   * @param { Length } value - Spacing between the text and arrow of a drop-down menu option.<br>Default value: **8**<br
   *     >Note: For the string type, percentage values are not supported.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  space(value: Length): SelectAttribute;

  /**
   * Sets the spacing between the text and arrow of a drop-down menu option. This attribute cannot be set in percentage.
   * If the value specified is **null**, **undefined**, or less than or equal to 8, the default value is used.
   *
   * @param { Optional<Length> } spaceLength - Spacing between the text and arrow of an option.<br>If **spaceLength** is
   *     set to **undefined**, the default value **8** is used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  space(spaceLength: Optional<Length>): SelectAttribute;

  /**
   * Sets the alignment between the text and arrow of an option.
   *
   * @param { ArrowPosition } value - Alignment between the text and arrow of an option.<br>Default value:
   *     **ArrowPosition.END**
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowPosition(value: ArrowPosition): SelectAttribute;

  /**
   * Sets the alignment between the text and arrow of an option. Compared with 
   * [arrowPosition]{@link SelectAttribute#arrowPosition(value: ArrowPosition)}, this API supports the **undefined** 
   * type for the **position** parameter.
   *
   * @param { Optional<ArrowPosition> } position - Alignment between the text and arrow of an option.<br>If **position**
   *     is set to **undefined**, the default value **ArrowPosition.END** is used.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  arrowPosition(position: Optional<ArrowPosition>): SelectAttribute;

  /**
   * Sets the alignment between the drop-down button and the drop-down menu.
   *
   * @param { MenuAlignType } alignType - Alignment type.<br>Default value: **MenuAlignType.START**
   * @param { Offset } offset - Offset of the drop-down menu relative to the drop-down button after alignment based on
   *     the alignment type.<br> Default value: **{dx: 0, dy: 0}**
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */ 
  menuAlign(alignType: MenuAlignType, offset?: Offset): SelectAttribute;

  /**
   * Sets the alignment between the drop-down button and the drop-down menu. Compared with 
   * [menuAlign]{@link SelectAttribute#menuAlign(alignType: MenuAlignType, offset?: Offset)}<sup>10+</sup>, this API 
   * supports the **undefined** type for the **alignType** parameter.
   *
   * @param { Optional<MenuAlignType> } alignType - Alignment type.<br>If **alignType** is set to **undefined**, the
   *     default value **MenuAlignType.START** is used.
   * @param { Offset } offset - Offset of the drop-down menu relative to the drop-down button after alignment based on
   *     the alignment type.<br> Default value: **{dx: 0, dy: 0}**
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  menuAlign(alignType: Optional<MenuAlignType>, offset?: Offset): SelectAttribute;

  /**
   * Sets the width for the drop-down menu option. Percentage values are not supported. **OptionWidthMode** specifies 
   * whether to inherit the width of the drop-down button.
   * 
   * If an invalid value or a value less than the minimum width of 56 vp is set, the attribute has no effect. In this 
   * case, the option width uses the default value, which is the width of two columns.
   * 
   * The **Select** component maintains 16 vp spacing from both left and right screen edges by default. This creates a 3
   * 2 vp total horizontal margin (16 vp × 2). To prevent horizontal shifting when the drop-down menu is displayed, set 
   * the width of the component itself and its menu options to a value less than or equal to **calc(100% - 32 vp)**.
   *
   * @param { Dimension | OptionWidthMode } value - Width of the drop-down menu option.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  optionWidth(value: Dimension | OptionWidthMode ): SelectAttribute;

  /**
   * Sets the width for the drop-down menu option. Percentage values are not supported. **OptionWidthMode** specifies 
   * whether to inherit the width of the drop-down button. Compared with 
   * [optionWidth]{@link SelectAttribute#optionWidth(value: Dimension | OptionWidthMode )}<sup>11+</sup>, this API 
   * supports the **undefined** type for the **width** parameter.
   * 
   * If an invalid value or a value less than the minimum width of 56 vp is set, the attribute has no effect. In this 
   * case, the option width uses the default value, which is the width of two columns.
   * 
   * The **Select** component maintains 16 vp spacing from both left and right screen edges by default. This creates a 3
   * 2 vp total horizontal margin (16 vp × 2). To prevent horizontal shifting when the drop-down menu is displayed, set 
   * the width of the component itself and its menu options to a value less than or equal to **calc(100% - 32 vp)**.
   *
   * @param { Optional<Dimension | OptionWidthMode> } width - Width of the drop-down menu option.<br>If **width** is set
   *     to **undefined**, it has no effect. In this case, the option width uses the default value, which is the width
   *     of two columns.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionWidth(width: Optional<Dimension | OptionWidthMode> ): SelectAttribute;

  /**
   * Sets the maximum height for the drop-down menu. Percentage values are not supported. The default maximum height is 
   * 80% of the available screen height, and any custom maximum height setting must not exceed this limit.
   * 
   * This attribute has no effect when set to abnormal values or zero.
   * 
   * If the actual height of all drop-down menu options is less than the set height, the menu will automatically adjust 
   * to the actual content height.
   *
   * @param { Dimension } value - Maximum height of the drop-down menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  optionHeight(value: Dimension): SelectAttribute;

  /**
   * Sets the maximum height for the drop-down menu. Percentage values are not supported. The default maximum height is 
   * 80% of the available screen height, and any custom maximum height setting must not exceed this limit. Compared with
   * [optionHeight]{@link SelectAttribute#optionHeight(value: Dimension)}<sup>11+</sup>, this API supports the 
   * **undefined** type for the **height** parameter.
   * 
   * This attribute has no effect when set to abnormal values or zero.
   * 
   * If the actual height of all drop-down menu options is less than the set height, the menu will automatically adjust 
   * to the actual content height.
   *
   * @param { Optional<Dimension> } height - Maximum height of the drop-down menu.<br>If **height** is set to
   *     **undefined**, the default value, which is 80% of the available screen height, is used.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionHeight(height: Optional<Dimension>): SelectAttribute;

  /**
   * Sets the background color of the drop-down menu.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { ResourceColor } value - Background color of the drop-down menu.<br>Default value:<br>Versions earlier than
   *     API version 11: **$r('sys.color.ohos_id_color_card_bg')**<br>Since API version 11: **Color.Transparent**
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  menuBackgroundColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the background color of the drop-down menu. Compared with 
   * [menuBackgroundColor]{@link SelectAttribute#menuBackgroundColor(value: ResourceColor)}<sup>11+</sup>, this API 
   * supports the **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Background color of the drop-down menu.<br>If **resColor** is set to
   *     **undefined**, the default value **Color.Transparent** is used.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuBackgroundColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background blur style of the drop-down menu.
   * 
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { BlurStyle } value - Background blur style of the drop-down menu.<br>Default value:
   *     **BlurStyle.COMPONENT_ULTRA_THICK**
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  menuBackgroundBlurStyle(value: BlurStyle): SelectAttribute;

  /**
   * Sets the background blur style of the drop-down menu. Compared with 
   * [menuBackgroundBlurStyle]{@link SelectAttribute#menuBackgroundBlurStyle(value: BlurStyle)}<sup>11+</sup>, this API 
   * supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<BlurStyle> } style - Background blur style of the drop-down menu.<br>If **style** is set to
   *     **undefined**, the default value **BlurStyle.COMPONENT_ULTRA_THICK** is used.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuBackgroundBlurStyle(style: Optional<BlurStyle>): SelectAttribute;

  /**
   * Sets the size of the **Select** component.
   *
   * @param { ControlSize } value - Size of the **Select** component.<br>Default value: **ControlSize.NORMAL**
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  controlSize(value: ControlSize): SelectAttribute;

  /**
   * Sets the size of the **Select** component. Compared with 
   * [controlSize]{@link SelectAttribute#controlSize(value: ControlSize)}<sup>12+</sup>, this API supports the 
   * **undefined** type for **size** parameter.
   *
   * @param { Optional<ControlSize> } size - Size of the **Select** component.<br>If **size** is set to **undefined**,
   *     the default value **ControlSize.NORMAL** is used.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  controlSize(size: Optional<ControlSize>): SelectAttribute;

  /**
   * Creates a content modifier for the drop-down menu. After **menuItemContentModifier** is applied, the drop-down menu
   * content will be completely customized by the developer, and the **Select** component's attributes, including the 
   * divider, option color, and drop-down menu font color, will not take effect.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { ContentModifier<MenuItemConfiguration> } modifier - Content modifier to apply to the drop-down menu.<br>
   *     **modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>): SelectAttribute;

  /**
   * Creates a content modifier for the drop-down menu. Compared with 
   * [menuItemContentModifier]{@link SelectAttribute#menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>)}
   * <sup>12+</sup>, this API supports the **undefined** type for **modifier** parameter. After 
   * **menuItemContentModifier** is applied, the drop-down menu content will be completely customized by the developer, 
   * and the **Select** component's attributes, including the divider, option color, and drop-down menu font color, will
   * not take effect.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<ContentModifier<MenuItemConfiguration>> } modifier - Content modifier to apply to the drop-down
   *     menu.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.<br>
   *     If **modifier** is set to **undefined**, no content modifier is used.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuItemContentModifier(modifier: Optional<ContentModifier<MenuItemConfiguration>>): SelectAttribute;

  /**
   * Sets the divider style. If this attribute is not set, the divider is displayed based on the default value.
   *
   * @param { Optional<DividerOptions> | null } options - Divider options.<br>1. If **DividerOptions** is set, the
   *     divider is displayed in the configured style.<br>Default value:<br>{<br>strokeWidth: '1px' , <br>color: '#33182
   *     431'<br>}<br>2. If this parameter is set to **null**, the divider is not displayed.<br>3. If the value of
   *     **strokeWidth** is too larger, the divider may overlap the text. The divider extends both upwards and downwards
   *     from the bottom of each item.<br>4. The default values for **startMargin** and **endMargin** are consistent
   *     with the style of the divider when the **divider** attribute is not set. If the sum of **startMargin** and
   *     **endMargin** is equal to the value of **optionWidth**, the divider is not displayed. If the sum of
   *     **startMargin** and **endMargin** exceeds the value of **optionWidth**, the divider line is displayed in the
   *     default style.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  divider(options: Optional<DividerOptions> | null): SelectAttribute;

  /**
   * Creates a text modifier to customize the text style of the **Select** button. After **textModifier** is applied, 
   * the text style of the **Select** button will be completely customized by the developer.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<TextModifier> } modifier - Text modifier to apply to the **Select** button for customizing the
   *     text style.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Creates an arrow modifier to customize the drop-down arrow icon style of the **Select** button. After 
   * **arrowModifier** is applied, the drop-down arrow icon style of the **Select** button will be completely customized
   * by the developer.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<SymbolGlyphModifier> } modifier - Arrow modifier to apply to the **Select** button for
   *     customizing the drop-down arrow icon style.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  arrowModifier(modifier: Optional<SymbolGlyphModifier>): SelectAttribute;
  
  /**
   * Creates an option text modifier to customize the text style of unselected options in the drop-down menu. After 
   * **optionTextModifier** is applied, the unselected option text style will be completely customized by the developer.
   * 
   * 
   * If both [optionFont]{@link SelectAttribute#optionFont(value: Font)} and **Font** of **optionTextModifier** are set,
   * [optionFont]{@link SelectAttribute#optionFont(value: Font)} takes precedence. Any unspecified attributes in 
   * **optionFont** will use default values.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<TextModifier> } modifier - Option text modifier to apply to the **Select** component for
   *     customizing the text style of unselected options in the drop-down menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  optionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Creates a selected-option text modifier to customize the text style of selected options in the drop-down menu. 
   * After **selectedOptionTextModifier** is applied, the selected-option text style will be completely customized by 
   * the developer.
   * 
   * If both [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)} and **Font** of 
   * **selectedOptionTextModifier** are set, [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}
   * takes precedence. If **selectedOptionFont** is not set, [optionFont]{@link SelectAttribute#optionFont(value: Font)}
   * settings are applied. Any unspecified attributes in **selectedOptionFont** or **optionFont** will use default 
   * values.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<TextModifier> } modifier - Selected-option text modifier to apply to the **Select** component for
   *     customizing the text style of selected options in the drop-down menu.<br>You can manage and maintain the text
   *     style as needed.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedOptionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Sets the divider style. If this attribute is not set, the divider is displayed based on the default value. This 
   * attribute cannot be used together with the **divider** attribute. The last one called will take effect.
   *
   * @param { Optional<DividerStyleOptions> } style - Divider options.<br>1. If **DividerOptions** is set, the divider
   *     is displayed in the configured style.<br>Default value:<br>{<br>strokeWidth: '1px' , <br>color: '#33182431'<br>
   *     }<br>2. If this parameter is set to **null** or **undefined**, the default divider is displayed.<br>3. When
   *     **mode** is set to **FLOAT_ABOVE_MENU**, be careful with the **strokeWidth** settings to avoid covering text.
   *     The divider extends both upwards and downwards from the bottom of each item. When **mode** is
   *     **EMBEDDED_IN_MENU**, the divider expands to fill its own space within the menu.<br>4. The default values for
   *     **startMargin** and **endMargin** are consistent with the style of the divider when the **divider** attribute
   *     is not set. If the sum of **startMargin** and **endMargin** is equal to the value of **optionWidth**, the
   *     divider is not displayed. If the sum of **startMargin** and **endMargin** exceeds the value of **optionWidth**,
   *     the divider line is displayed in the default style.
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  dividerStyle(style: Optional<DividerStyleOptions>): SelectAttribute;

  /**
   * Sets the avoidance mode for the drop-down menu.
   *
   * @param { AvoidanceMode } mode - Avoidance mode for the drop-down menu.<br>Default value:
   *     **AvoidanceMode.COVER_TARGET**
   * @returns { SelectAttribute } Returns the chained object of Select component attributes
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  avoidance(mode: AvoidanceMode): SelectAttribute;

  /**
   * Sets the outline style for the drop-down menu.
   *
   * @param { MenuOutlineOptions } outline - Outline style of the drop-down menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  menuOutline(outline: MenuOutlineOptions): SelectAttribute;

  /**
   * Sets whether the drop-down menu is displayed in the subwindow. If this API is not used, the drop-down menu is not 
   * displayed in the subwindow by default.
   *
   * @param { Optional<boolean> } showInSubWindow - Whether the drop-down menu is displayed in the subwindow.<br>
   *     **true**: The drop-down menu is displayed in the subwindow.<br>**false**: The drop-down menu is not displayed
   *     in the subwindow.
   * @returns { SelectAttribute } The attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showInSubWindow(showInSubWindow: Optional<boolean>): SelectAttribute;

  /**
   * Sets whether to display the default selection icon.
   *
   * @param { boolean } show - Whether to display the default selection icon.<br>**true**: The default icon is
   *     displayed. **false**: The default icon is not displayed. The background color is highlighted to indicate that
   *     the icon is selected.<br>Default value: **false**<br>When **show** is set to **true** and the background color
   *     of the selected option is set, both the background color of the selected option and the icon selected by
   *     default are displayed. If the background color of the selected item is not set via **selectedOptionBgColor**,
   *     the background color is not highlighted and only the icon selected by default is displayed.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showDefaultSelectedIcon(show: boolean): SelectAttribute;

  /**
   * Sets whether the drop-down menu avoids the soft keyboard. If this API is not used, the drop-down menu avoids the 
   * soft keyboard by default.
   *
   * @param { Optional<MenuKeyboardAvoidMode> } mode - Whether the drop-down menu avoids the soft keyboard. If the value
   *     is **undefined**, it is treated as **MenuKeyboardAvoidMode.NONE**.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  keyboardAvoidMode(mode: Optional<MenuKeyboardAvoidMode>): SelectAttribute;

  /**
   * Sets the minimum distance for the **Select** component to avoid the soft keyboard. If this API is not used, the 
   * minimum distance is 8 vp by default. This API is valid only when 
   * [keyboardAvoidMode]{@link SelectAttribute#keyboardAvoidMode} is set to avoid the soft keyboard.
   *
   * @param { Optional<LengthMetrics> } distance - Sets the minimum distance for the drop-down menu to avoid the soft
   *     keyboard. If the value is set to a negative number or **undefined**, the value 8 vp will be used.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minKeyboardAvoidDistance(distance: Optional<LengthMetrics>): SelectAttribute;

  /**
   * Set system-styled materials for select's menu. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of select's menu.
   * 
   * Device Behavior Differences:The effect of the same material may vary across different devices depending on
   * their computing power.
   *
   * @param { Optional<SystemUiMaterial> } material - The select's menu material, undefined means
   *     retaining the original visual style of the select's menu.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  menuSystemMaterial(material: Optional<SystemUiMaterial>): SelectAttribute;

  /**
   * Sets the distortion animation mode of the select with the new material.
   *
   * @param { DistortionMode } mode - Animation mode. The default value is DistortionMode.DISTORTION_AUTO.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  menuDistortionMode(mode: DistortionMode): SelectAttribute;
  /**
   * Sets the edgelight animation mode of the select with the new material.
   * 
   * @param { EdgeLightMode } mode - Animation mode. The default value is EdgeLightMode.EDGELIGHT_DISABLED.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  menuEdgeLightMode(mode: EdgeLightMode): SelectAttribute;

  /**
   * Defines the select menu's background blur style with options
   *
   * @param { Optional<BackgroundBlurStyleOptions> } blurStyle - The background blur style of menu.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  menuBackgroundBlurStyleOptions(blurStyle: Optional<BackgroundBlurStyleOptions>): SelectAttribute;

  /**
   * Defines the select menu's background effect with options
   *
   * @param { Optional<BackgroundEffectOptions> } effect - Background effect, including saturation, brightness, and
   *     color.
   *     <br>The configuration does not take effect when it is undefined.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  menuBackgroundEffect(effect: Optional<BackgroundEffectOptions>): SelectAttribute;
}

/**
 * You need a custom class to implement the **ContentModifier** API. Inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration>{
  /**
   * Text content of the drop-down menu option.
   * 
   * **NOTE**
   * 
   * If the length of the text exceeds the width of the menu item text area, the text will be truncated.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: ResourceStr;

  /**
   * Icon of the drop-down menu option.
   * 
   * **NOTE**
   * 
   * The string type can be used to load network images and local images.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: ResourceStr;

  /**
   * Symbol icon of drop-down menu option.
   * 
   * **symbolIcon** takes precedence over **icon**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * Whether the drop-down menu option is selected. The value **true** means that the option is selected, and **false** 
   * means the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selected: boolean;

  /**
   * Index of the drop-down menu option. The index is zero-based.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Invoked when a drop-down menu option is selected.
   * <br>**NOTE**
   * <br>The value of **index** will be assigned to the **index** parameter in the 
   * [onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)} callback; 
   * the value of **value** will be returned to the **Select** component for display and will also be assigned to 
   * the **value** parameter in the [onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)} callback.
   *
   * @param { number } index - index of the selected option.
   * @param { string } value - text of the selected option.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerSelect(index: number, value: string): void;
}
/**
 * The **Select** component provides a drop-down menu that allows users to select among multiple options.
 * 
 * > **NOTE**
 * 
 * ###### Child Components
 * 
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const Select: SelectInterface;

/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const SelectInstance: SelectAttribute;