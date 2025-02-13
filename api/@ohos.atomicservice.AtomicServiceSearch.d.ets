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
 * Defines the inputFilter options
 *
 * @atomicservice
 * @since 16
 */
interface InputFilterOptions {
  /**
   * Regular expression.
   *
   * @atomicservice
   * @since 16
   */
  value: ResourceStr;
  /**
   * If the regular expression matching fails, the filtered content is returned.
   *
   * @atomicservice
   * @since 16
   */
  error?: Callback<string>;
}
/**
 * Defines the SearchButton Params
 *
 * @atomicservice
 * @since 16
 */
interface SearchButtonParams {
  /**
   * indicates the text of the search button.
   *
   * @atomicservice
   * @since 16
   */
  value: string;
  /**
   * indicates the fontSize and fontColor of the search button.
   *
   * @atomicservice
   * @since 16
   */
  option?: SearchButtonOptions;
}
/**
 * Defines the MenuAlign options
 *
 * @atomicservice
 * @since 16
 */
interface MenuAlignOption {
  /**
   * Alignment type.
   *
   * @atomicservice
   * @since 16
   */
  alignType: MenuAlignType;
  /**
   * Offset of the drop-down menu relative to the drop-down button
   * after alignment based on the alignment type.
   *
   * @atomicservice
   * @since 16
   */
  offset?: Offset;
}

/**
 * search搜索区可支持的事件及样式
 *
 * @atomicservice
 * @since 16
 */
interface SearchOptions {
  /**
   * componentBackgroundColor
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  componentBackgroundColor?: ResourceColor;
  /**
   * Background color when pressed
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  pressBackgroundColor?: ResourceColor;
  /**
   * Set the search button text, fontSize and fontColor
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  searchButton?: SearchButtonParams;
  /**
   * Set the place hold text color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  placeholderColor?: ResourceColor;
  /**
   * Set the font used for place holder text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  placeholderFont?: Font;
  /**
   * Set enter key type of soft keyboard
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  textFont?: Font;
  /**
   * Called when the text align is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  textAlign?: TextAlign;
  /**
   * Called when the copy option is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  copyOption?: CopyOptions;
  /**
   * Set the search icon style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  searchIcon?: IconOptions | SymbolGlyphModifier;
  /**
   * Set the cancel button style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  cancelIcon?: IconOptions;
  /**
   * Set the SearchButton fontColor
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  fontColor?: ResourceColor;
  /**
   * Set the cursor style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  caretStyle?: CaretStyle;
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  enableKeyboardOnFocus?: boolean;
  /**
   * Controls whether the selection menu pops up.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selectionMenuHidden?: boolean;
  /**
   * Set the custom keyboard options of Search
   *
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  keyboardAvoidance?: boolean;
  /**
   * Called when the search type is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  type?: SearchType;
  /**
   * Called when the input of maximum text length is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * crossplatform
   * @atomicservice
   * @since 16
   */
  maxLength?: number;
  /**
   * Set enter key type of soft keyboard
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  enterKeyType?: EnterKeyType;
  /**
   * Called when the text decoration of the text is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  decoration?: TextDecorationOptions;
  /**
   * Called when the distance between text fonts is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  letterSpacing?: number | string | Resource;
  /**
   * Set font feature.
   *
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of search component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  fontFeature?: string;
  /**
   * Define the text selected background color of the text input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selectedBackgroundColor?: ResourceColor;
  /**
   * Called when the inputFilter of text is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  inputFilter?: InputFilterOptions;
  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  textIndent?: Dimension;
  /**
   * Called when the minimum font size of the font is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  minFontSize?: number | string | Resource;
  /**
   * Called when the maximum font size of the font is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  maxFontSize?: number | string | Resource;
  /**
   * Set the custom text menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  editMenuOptions?: EditMenuOptions;
  /**
   * Define the preview text mode of the text input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  enablePreviewText?: boolean;
  /**
   * Enable or disable haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  enableHapticFeedback?: boolean;
  /**
   * Call the function when clicked the search button
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onSubmit?: Callback<string> | SearchSubmitCallback;
  /**
   * Call the function when editing the input text
   *
   * @param { EditableTextOnChangeCallback } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onCopy?: Callback<string>;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onCut?: Callback<string>;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function } callback
   *          Executed when a paste operation is performed.
   *          { string } value - The text content to be pasted.
   *          { PasteEvent } event - The user-defined paste event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onPaste?: OnPasteCallback;
  /**
   * Called when the text selection changes.
   *
   * @param { function } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onTextSelectionChange?: OnTextSelectionChangeCallback;
  /**
   * Called when the content scrolls.
   *
   * @param { function } callback - callback of the listened event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onContentScroll?: OnContentScrollCallback;
  /**
   * Called when judging whether the text editing change finished.
   *
   * @param { Callback<boolean> } callback
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onEditChange?: Callback<boolean>;
  /**
   * Get text value information when about to input.
   *
   * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * Get text value information when completed input.
   *
   * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * Get text value information when about to delete.
   *
   * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * Get text value information when the deletion has been completed
   *
   * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onDidDelete?: Callback<DeleteValue>;
}

/**
 * Contents, events, and styles of the select area
 *
 * @atomicservice
 * @since 16
 */
interface SelectOptions {
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  options: Array<SelectOption>;
  /**
   * The default selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selected?: number;
  /**
   * The default text value.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  value?: string;
  /**
   * Callback when the select is selected.
   * @type { (index: number, value?: string) => void }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  onSelect?: (index: number, value?: string) => void;
  /**
   * Sets the size for controls within Select Component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  controlSize?: ControlSize;
  /**
   * Register a ContentModifier for each menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  menuItemContentModifier?: ContentModifier<MenuItemConfiguration>;
  /**
   * Set the divider of select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  divider?: Optional<DividerOptions> | null;
  /**
   * Sets the text properties of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  font?: Font;
  /**
   * Sets the text color of the select button itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  fontColor?: ResourceColor;
  /**
   * Sets the background color of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selectedOptionBgColor?: ResourceColor;
  /**
   * Sets the text style of the selected items in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selectedOptionFont?: Font;
  /**
   * Sets the text color of the selected item in the select.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  selectedOptionFontColor?: ResourceColor;
  /**
   * Sets the background color of the select item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  optionBgColor?: ResourceColor;
  /**
   * Sets the text style for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  optionFont?: Font;
  /**
   * Sets the text color for select items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  optionFontColor?: ResourceColor;
  /**
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  optionWidth?: Dimension | OptionWidthMode;
  /**
   * Set the height of each option.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  optionHeight?: Dimension;
  /**
   * Set the space for text and icon in select
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  space?: Length;
  /**
   * Set the layout direction for text and arrow in select
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  arrowPosition?: ArrowPosition;
  /**
   * Set the alignment between select and menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  menuAlign?: MenuAlignOption;
  /**
   * set the menu's background color
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  menuBackgroundColor?: ResourceColor;
  /**
   * set menu background blur Style
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 16
   */
  menuBackgroundBlurStyle?: BlurStyle;
}
/**
 * Function settings in the selection area (right)
 *
 * @atomicservice
 * @since 16
 */
interface OperationOptions {
  auxiliaryItem?: OperationOption;
  independentItem?: OperationOption;
}
/**
 * Defines AtomicServiceSearch.
 *
 * @struct AtomicServiceSearch
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * Sets the search text content that is currently displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  value?: string;
  /**
   * Indicates default prompt text displayed in the search box.
   * The default value is Search, which supports globalization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  placeholder?: ResourceStr;
  /**
   * Events and styles supported by the search area
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  search?: SearchOptions;
  /**
   * Contents, events, and styles of the select area
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  select?: SelectOptions;
  /**
   * Function settings in the selection area (right)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  operation?: OperationOptions;
  /**
   * Set the Search component controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  controller?: SearchController;
}