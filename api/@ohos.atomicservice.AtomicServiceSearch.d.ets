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
 * Callback when the Select option is clicked
 *
 * @typedef { function } OnSelectCallback
 * @param { number } index - Indicates the index of the selected item.
 * @param { string } [value] - Indicates the value of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
declare type OnSelectCallback = (index: number, value?: string) => void;
/**
 * Callback when text is pasted into the search box
 *
 * @typedef { function } OnPasteCallback
 * @param { string } value - Indicates the text content to be pasted.
 * @param { PasteEvent } event - Indicates a user-defined paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
declare type OnPasteCallback = (value: string, event: PasteEvent) => void;
/**
 * Callback when the position of the cursor entered in the search box changes
 *
 * @typedef { function } OnTextSelectionChangeCallback
 * @param { number } selectionStart - Indicates the start position of the text selection area. 
 * @param { number } selectionEnd - Indicates end position of the text selection area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
declare type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
/**
 * Callback when the content in the search box scrolls
 *
 * @typedef { function } OnContentScrollCallback
 * @param { number } totalOffsetX - Indicates horizontal coordinate offset of the text in the content area, in px.
 * @param { number } totalOffsetY - Indicates the vertical coordinate offset of the text in the content area, in px. 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
/**
 * Defines the inputFilter options
 *
 * @typedef InputFilterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface InputFilterOptions {
  /**
   * Regular expression.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  inputFilterValue: ResourceStr;
  /**
   * If the regular expression matching fails, the filtered content is returned.
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  error?: Callback<string>;
}
/**
 * Defines the SearchButton Params
 *
 * @typedef SearchButtonParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface SearchButtonParams {
  /**
   * indicates the text of the search button.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  searchButtonValue: ResourceStr;
  /**
   * indicates the fontSize and fontColor of the search button.
   *
   * @type { ?SearchButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  options?: SearchButtonOptions;
}
/**
 * Defines the MenuAlign options
 *
 * @typedef MenuAlignOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface MenuAlignOptions {
  /**
   * indicates the fontSize and fontColor of the search button.
   *
   * @type { MenuAlignType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  alignType: MenuAlignType;
  /**
   * Offset of the drop-down menu relative to the drop-down button
   * after alignment based on the alignment type.
   *
   * @type { ?Offset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  offset?: Offset;
}
/**
 * Events and styles supported by the search area
 *
 * @typedef SearchOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface SearchOptions {
  /**
   * componentBackgroundColor
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  componentBackgroundColor?: ResourceColor;
  /**
   * Background color when pressed
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  pressedBackgroundColor?: ResourceColor;
  /**
   * Set the search button text, fontSize and fontColor
   *
   * @type { ?SearchButtonParams }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  searchButton?: SearchButtonParams;
  /**
   * Set the place hold text color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  placeholderColor?: ResourceColor;
  /**
   * Set the font used for place holder text
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  placeholderFont?: Font;
  /**
   * Set enter key type of soft keyboard
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  textFont?: Font;
  /**
   * Called when the text align is set.
   *
   * @type { ?TextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  textAlign?: TextAlign;
  /**
   * Called when the copy option is set.
   *
   * @type { ?CopyOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  copyOptions?: CopyOptions;
  /**
   * Set the search icon style
   *
   * @type { ?(IconOptions | SymbolGlyphModifier) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  searchIcon?: IconOptions | SymbolGlyphModifier;
  /**
   * Set the cancel button style
   *
   * @type { ?IconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  cancelIcon?: IconOptions;
  /**
   * Set the SearchButton fontColor
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  fontColor?: ResourceColor;
  /**
   * Set the cursor style
   *
   * @type { ?CaretStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  caretStyle?: CaretStyle;
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  enableKeyboardOnFocus?: boolean;
  /**
   * Controls whether the selection menu pops up.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  hideSelectionMenu?: boolean;
  /**
   * Called when the search type is set.
   *
   * @type { ?SearchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  type?: SearchType;
  /**
   * Called when the input of maximum text length is set.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  maxLength?: number;
  /**
   * Set enter key type of soft keyboard
   *
   * @type { ?EnterKeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  enterKeyType?: EnterKeyType;
  /**
   * Called when the text decoration of the text is set.
   *
   * @type { ?TextDecorationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  decoration?: TextDecorationOptions;
  /**
   * Called when the distance between text fonts is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  letterSpacing?: number | string | Resource;
  /**
   * Set font feature.
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of search component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  fontFeature?: ResourceStr;
  /**
   * Define the text selected background color of the text input.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selectedBackgroundColor?: ResourceColor;
  /**
   * Called when the inputFilter of text is set.
   *
   * @type { ?InputFilterOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  inputFilter?: InputFilterOptions;
  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  textIndent?: Dimension;
  /**
   * Called when the minimum font size of the font is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  minFontSize?: number | string | Resource;
  /**
   * Called when the maximum font size of the font is set.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  maxFontSize?: number | string | Resource;
  /**
   * Set the custom text menu.
   *
   * @type { ?EditMenuOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  editMenuOptions?: EditMenuOptions;
  /**
   * Define the preview text mode of the text input.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  enablePreviewText?: boolean;
  /**
   * Enable or disable haptic feedback.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  enableHapticFeedback?: boolean;
  /**
   * Call the function when clicked the search button
   *
   * @type { ?(Callback<string> | SearchSubmitCallback) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onSubmit?: Callback<string> | SearchSubmitCallback;
  /**
   * Call the function when editing the input text
   *
   * @type { ?EditableTextOnChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onChange?: EditableTextOnChangeCallback;
  /**
   * Called when using the Clipboard menu
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onCopy?: Callback<string>;
  /**
   * Called when using the Clipboard menu
   *
   * @type { ?Callback<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onCut?: Callback<string>;
  /**
   * Called when using the Clipboard menu
   *
   * @type { ?OnPasteCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onPaste?: OnPasteCallback;
  /**
   * Called when the text selection changes.
   *
   * @type { ?OnTextSelectionChangeCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onTextSelectionChange?: OnTextSelectionChangeCallback;
  /**
   * Called when the content scrolls.
   *
   * @type { ?OnContentScrollCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onContentScroll?: OnContentScrollCallback;
  /**
   * Called when judging whether the text editing change finished.
   *
   * @type { ?Callback<boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onEditChange?: Callback<boolean>;
  /**
   * Get text value information when about to input.
   *
   * @type { ?Callback<InsertValue, boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onWillInsert?: Callback<InsertValue, boolean>;
  /**
   * Get text value information when completed input.
   *
   * @type { ?Callback<InsertValue> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onDidInsert?: Callback<InsertValue>;
  /**
   * Get text value information when about to delete.
   *
   * @type { ?Callback<DeleteValue, boolean> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onWillDelete?: Callback<DeleteValue, boolean>;
  /**
   * Get text value information when the deletion has been completed
   *
   * @type { ?Callback<DeleteValue> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onDidDelete?: Callback<DeleteValue>;
}
/**
 * Contents, events, and styles of the select area
 *
 * @typedef SelectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface SelectOptions {
  /**
   * SubOption array of the select.
   *
   * @type { ?Array<SelectOption> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  options?: Array<SelectOption>;
  /**
   * The default selected index.
   *
   * @type { ?number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selected?: number;
  /**
   * The default text value.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selectValue?: ResourceStr;
  /**
   * Callback when the select is selected.
   *
   * @type { ?OnSelectCallback }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  onSelect?: OnSelectCallback;
  /**
   * Sets the size for controls within Select Component.
   *
   * @type { ?ControlSize }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  controlSize?: ControlSize;
  /**
   * Register a ContentModifier for each menu item.
   *
   * @type { ?ContentModifier<MenuItemConfiguration> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  menuItemContentModifier?: ContentModifier<MenuItemConfiguration>;
  /**
   * Set the divider of select.
   *
   * @type { ?(Optional<DividerOptions> | null) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  divider?: Optional<DividerOptions> | null;
  /**
   * Sets the text properties of the select button itself.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  font?: Font;
  /**
   * Sets the text color of the select button itself.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  fontColor?: ResourceColor;
  /**
   * Sets the background color of the selected items in the select.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selectedOptionBgColor?: ResourceColor;
  /**
   * Sets the text style of the selected items in the select.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selectedOptionFont?: Font;
  /**
   * Sets the text color of the selected item in the select.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  selectedOptionFontColor?: ResourceColor;
  /**
   * Sets the background color of the select item.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  optionBgColor?: ResourceColor;
  /**
   * Sets the text style for select items.
   *
   * @type { ?Font }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  optionFont?: Font;
  /**
   * Sets the text color for select items.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  optionFontColor?: ResourceColor;
  /**
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @type { ?(Dimension | OptionWidthMode) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  optionWidth?: Dimension | OptionWidthMode;
  /**
   * Set the height of each option.
   *
   * @type { ?Dimension }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  optionHeight?: Dimension;
  /**
   * Set the space for text and icon in select
   *
   * @type { ?Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  space?: Length;
  /**
   * Set the layout direction for text and arrow in select
   *
   * @type { ?ArrowPosition }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  arrowPosition?: ArrowPosition;
  /**
   * Set the alignment between select and menu.
   *
   * @type { ?MenuAlignOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  menuAlign?: MenuAlignOptions;
  /**
   * set the menu's background color
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  menuBackgroundColor?: ResourceColor;
  /**
   * set menu background blur Style
   *
   * @type { ?BlurStyle }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  menuBackgroundBlurStyle?: BlurStyle;
}
/**
 * Function settings in the selection area (right)
 *
 * @typedef OperationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
export interface OperationOptions {
  /**
   * Function bits attached to the search area (right)
   *
   * @type { ?OperationOption }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  auxiliaryItem?: OperationOption;
  /**
   * Function bits independent of search area (right)
   *
   * @type { ?OperationOption }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  independentItem?: OperationOption;
}
/**
 * Defines AtomicServiceSearch.
 *
 * @struct {AtomicServiceSearch}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 16
 */
@Component
export declare struct AtomicServiceSearch {
  /**
   * Sets the search text content that is currently displayed.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  value?: ResourceStr;
  /**
   * Indicates default prompt text displayed in the search box.
   * The default value is Search, which supports globalization.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  placeholder?: ResourceStr;
  /**
   * Events and styles supported by the search area.
   *
   * @type { ?SearchOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  search?: SearchOptions;
  /**
   * Contents, events, and styles of the select area.
   *
   * @type { ?SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  @Prop
  select?: SelectOptions;
  /**
   * Function settings in the selection area (right).
   *
   * @type { ?OperationOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  operation?: OperationOptions;
  /**
   * Set the Search component controller.
   *
   * @type { ?SearchController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 16
   */
  controller?: SearchController;
}