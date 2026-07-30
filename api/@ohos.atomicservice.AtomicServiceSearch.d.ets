/*
* Copyright (C) 2025 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file This section describes the interfaces used by AtomicServiceSearch
 * @kit ArkUI
 */
import { OperationOption } from '@ohos.arkui.advanced.SubHeader';
/**
 * Called when an item in the drop-down list box is selected.
 *
 * @param { number } index - Index of the selected option. The index is zero-based.
 * @param { string } [selectValue] - Value of the selected option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnSelectCallback = (index: number, selectValue: string) => void;
/**
 * Called when a paste operation is performed.
 *
 * @param { string } pasteValue - Text to be pasted.
 * @param { PasteEvent } event - Custom paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnPasteCallback = (pasteValue: string, event: PasteEvent) => void;
/**
 * Called when the position of the text selection changes or when the cursor position changes during the editing state.
 *
 * @param { number } selectionStart - Start position of the text to be selected.
 * @param { number } selectionEnd - End position of the text to be selected.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
/**
 * Called when the text content is scrolled.
 *
 * @param { number } totalOffsetX - Offset of the horizontal coordinate of the upper left corner of the text relative to
 *     the horizontal coordinate of the upper left corner of the entire content input area.
 * @param { number } totalOffsetY - Offset of the vertical coordinate of the upper left corner of the text relative to
 *     the vertical coordinate of the upper left corner of the entire content input area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
/**
 * Sets regular expression for input filtering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface InputFilterParams {
  /**
   * Regular expression.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilterValue: ResourceStr;
  /**
   * Callback used to return the filtered-out content when regular expression matching fails. Default value:
   * **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  error?: Callback<string>;
}
/**
 * Sets the search button located next to the search text box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchButtonParams {
  /**
   * Text on the search button located next to the search text box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButtonValue: ResourceStr;
  /**
   * Font of the search text box. Default value: **{fontSize: '16fp',fontColor: '#ff3f97e9'}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: SearchButtonOptions;
}
/**
 * Sets the alignment between the drop-down list button and the drop-down list box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface MenuAlignParams {
  /**
   * Alignment type. Default value: **MenuAlignType.START**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  alignType: MenuAlignType;
  /**
   * Offset of the drop-down list box relative to the drop-down list button after alignment based on the alignment type.
   * Default value: **{dx: 0, dy: 0}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  offset?: Offset;
}
/**
 * Provides optional attributes for the search area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SearchParams {
  /**
   * Search key used to find a unique **search** component. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchKey?: ResourceStr;
  /**
   * Background color of a component. Default value: **$r('sys.color.ohos_id_color_text_field_sub_bg')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  componentBackgroundColor?: ResourceColor;
  /**
   * Background color of the pressed component. Default value: **$r('sys.color.ohos_id_color_click_effect')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  pressedBackgroundColor?: ResourceColor;
  /**
   * Search button located next to the search text box. Clicking the search button triggers both **onSubmit** and
   * **onClick** callbacks.
   *
   * - **value**: Text on the search button located next to the search text box.
   * - **option**: Font of the search text box. Default value: **{fontSize: '16fp', fontColor: '#ff3f97e9'}**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchButton?: SearchButtonParams;
  /**
   * Placeholder text color. Default value: **$r('sys.color.ohos_id_color_text_secondary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderColor?: ResourceColor;
  /**
   * Placeholder text style, including the font size, font weight, font family, and font style. Default value:
   * **{size: $r('sys_float.ohos_id_text_size_body1')}**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  placeholderFont?: Font;
  /**
   * Style of the text entered in the search box, including the font size, font width, font family, and font style.
   * Currently, only the default font family is supported. Default value:
   * **{size: $r('sys_float.ohos_id_text_size_body1')}**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textFont?: Font;
  /**
   * Text alignment mode in the search text box. Default value: **TextAlign.Start**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textAlign?: TextAlign;
  /**
   * Whether the input text can be copied. Default value: **CopyOptions.LocalDevice**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  copyOptions?: CopyOptions;
  /**
   * Style of the search icon on the left.
   *
   * Default value in light mode: **{size: '16vp', color: '#99182431', src:' '}**.
   *
   * Default value in dark mode: **{size: '16vp', color: '#99ffffff', src:' '}**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  searchIcon?: IconOptions | SymbolGlyphModifier;
  /**
   * Style of the cancel button on the right. Default value:
   * **{style: CancelButtonStyle.INPUT, icon: {size: '16vp', color: '#99ffffff', src:' '}}**.
   *
   * When style is set to **CancelButtonStyle.CONSTANT**, the cancel button is displayed in a default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  cancelIcon?: IconOptions;
  /**
   * Font color of the input text. Default value: **$r('sys.color.ohos_id_color_text_secondary')**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * Pointer style. Default value: **{width: '1.5vp', color: '#007DFF'}**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  caretStyle?: CaretStyle;
  /**
   * Whether to automatically open the soft keyboard when the **Search** component gains focus. The value **true** means
   * to automatically open the soft keyboard when the **Search** component gains focus. Default value: **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableKeyboardOnFocus?: boolean;
  /**
   * Whether to hide the system text selection menu.
   *
   * **true**: The system text selection menu does not appear under the following circumstances: clicking the text box
   * cursor, long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the
   * text box. **false**: The system text selection menu appears under the following circumstances: clicking the text
   * box cursor, long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking
   * the text box. Default value: **false**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  hideSelectionMenu?: boolean;
  /**
   * Text box type. Default value: **SearchType.Normal**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  type?: SearchType;
  /**
   * Maximum number of characters in the text input. By default, there is no maximum number of characters. When the
   * maximum number is reached, no more characters can be entered. Default value: **-1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxLength?: number;
  /**
   * Type of the Enter key. Default value: **EnterKeyType.Search**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enterKeyType?: EnterKeyType;
  /**
   * Text decorative line options. Default value:
   * **{type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID}**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  decoration?: TextDecorationOptions;
  /**
   * Letter spacing. A positive value causes characters to spread farther apart, and a negative value bring characters
   * closer together. The value for floating point numbers is **0.0**, in units of px. If the input is not a number and
   * cannot be parsed as a number, the default value will be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  letterSpacing?: number | string | Resource;
  /**
   * Font feature, for example, monospaced digits.
   *
   * Format: normal | <feature-tag-value>
   *
   * Syntax for **<feature-tag-value>**: <string> [ <integer> | on | off ]
   *
   * There can be multiple **<feature-tag-value>** values, which are separated by commas (,).
   *
   * For example, the input format for monospaced digits is "ss01" on. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontFeature?: ResourceStr;
  /**
   * Background color of the selected text. By default, a 20% opacity is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedBackgroundColor?: ResourceColor;
  /**
   * Regular expression for input filtering. Only inputs that comply with the regular expression can be displayed. Other
   * inputs are filtered out. The specified regular expression can match single characters, but not strings. Default
   * value: **undefined**.
   *
   * - **value**: regular expression.
   * - **error**: Filtered-out content to return when regular expression matching fails.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  inputFilter?: InputFilterParams;
  /**
   * Indent of the first line text. Default value: **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  textIndent?: Dimension;
  /**
   * Minimum font size. For the setting to take effect, this attribute must be used together with **maxFontSize** or
   * layout constraint settings. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  minFontSize?: number | string | Resource;
  /**
   * Maximum font size. For the setting to take effect, this attribute must be used together with **minFontSize** or
   * layout constraint settings. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  maxFontSize?: number | string | Resource;
  /**
   * Extended options of the custom context menu on selection, including the text content, icon, and callback. Default
   * value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  editMenuOptions?: EditMenuOptions;
  /**
   * Whether to enable preview text. The value **true** means to enable preview text. Default value: **true**.
   *
   * Preview text of the input method should be enabled. Preview text is in a temporary state and does not support text
   * interception. As such, it does not trigger **onWillInsert** and **onDidInsert** callbacks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enablePreviewText?: boolean;
  /**
   * Whether to enable haptic feedback. The value **true** means to enable haptic feedback. Default value: **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  enableHapticFeedback?: boolean;
  /**
   * Callback triggered when users click the search icon or the search button, or touch the search button on a soft
   * keyboard. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSubmit?: Callback<string> | SearchSubmitCallback;
  /**
   * Callback triggered when the content in the text box changes. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * Callback triggered when a copy operation is performed. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCopy?: Callback<string>;
  /**
   * Callback triggered when a cut operation is performed. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onCut?: Callback<string>;
  /**
   * Callback triggered when a paste operation is performed. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onPaste?: OnPasteCallback;
  /**
   * Callback triggered when the position of the text selection changes or when the cursor position changes during the
   * editing state. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onTextSelectionChange?: OnTextSelectionChangeCallback;
  /**
   * Callback triggered when the text content is scrolled. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onContentScroll?: OnContentScrollCallback;
  /**
   * Callback triggered when the input status changes. If a cursor is displayed, that is, the value of **isEditing** is
   * **true**, the text box is in the editing state. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onEditChange?: Callback<boolean>;
  /**
   * Callback triggered when text is about to be inserted. **true**: Insert the input content into the result string.
   * **false**: Do not insert the input content into the result string. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * Callback triggered when text is inserted. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * Callback triggered when text is about to be deleted. **true**: Delete the text. **false**: Do not delete the text.
   * Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * Callback triggered when text is deleted. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onDidDelete?: Callback<DeleteValue>;
}
/**
 * Provides optional attributes for the selection area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface SelectParams {
  /**
   * SubOption array of the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  options?: Array<SelectOption>;
  /**
   * The default selected index.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selected?: number;
  /**
   * The default text value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectValue?: ResourceStr;
  /**
   * Callback when the select is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  onSelect?: OnSelectCallback;
  /**
   * Register a ContentModifier for each menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuItemContentModifier?: ContentModifier<MenuItemConfiguration>;
  /**
   * Sets the divider of select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  divider?: Optional<DividerOptions> | null;
  /**
   * Sets the text properties of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  font?: Font;
  /**
   * Sets the text color of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  fontColor?: ResourceColor;
  /**
   * Sets the background color of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionBgColor?: ResourceColor;
  /**
   * Sets the text style of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFont?: Font;
  /**
   * Sets the text color of the selected item in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  selectedOptionFontColor?: ResourceColor;
  /**
   * Sets the background color of the select item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionBgColor?: ResourceColor;
  /**
   * Sets the text style for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFont?: Font;
  /**
   * Sets the text color for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionFontColor?: ResourceColor;
  /**
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionWidth?: Dimension | OptionWidthMode;
  /**
   * Set the height of each option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  optionHeight?: Dimension;
  /**
   * Set the space for text and icon in select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  space?: Length;
  /**
   * Set the layout direction for text and arrow in select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  arrowPosition?: ArrowPosition;
  /**
   * Set the alignment between select and menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuAlign?: MenuAlignParams;
  /**
   * Set the menu's background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundColor?: ResourceColor;
  /**
   * Set menu background blur Style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  menuBackgroundBlurStyle?: BlurStyle;
}
/**
 * Sets initialization parameters of the function area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
export interface OperationParams {
  /**
   * Auxiliary item on the right of the search area. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  auxiliaryItem?: OperationOption;
  /**
   * Independent item on the right of the search area. Default value: **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  independentItem?: OperationOption;
}
/**
 * **AtomicServiceSearch** allows you to customize the default search area, customizable selection area, and function
 * area (a maximum of two).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18 dynamiconly
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * Sets the search text content that is currently displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  value?: ResourceStr;
  /**
   * Indicates default prompt text displayed in the search box.
   * The default value is Search, which supports globalization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  placeholder?: ResourceStr;
  /**
   * Events and styles supported by the search area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  search?: SearchParams;
  /**
   * Contents, events, and styles of the select area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  @Prop
  select?: SelectParams;
  /**
   * Function settings in the selection area (right).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  operation?: OperationParams;
  /**
   * Set the Search component controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18 dynamiconly
   */
  controller?: SearchController;
}