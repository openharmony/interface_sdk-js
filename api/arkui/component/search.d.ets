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
 * @arkts 1.2
 */


import { TextContentControllerBase, SelectionOptions, Callback, CommonMethod, Optional, TextDecorationOptions, CustomBuilder, UICommonMethod, AttributeModifier } from "./common";
import { ResourceStr, Length, ResourceColor, Dimension, Font } from "./units";
import { CaretStyle, EditableTextOnChangeCallback, InsertValue, DeleteValue, EditMenuOptions, KeyboardAppearance, EditableTextChangeValue, AutoCapitalizationMode } from "./textCommon";
import { EnterKeyType, OnTextSelectionChangeCallback, OnContentScrollCallback, OnPasteCallback, SubmitEvent } from "./textInput";
import { CopyOptions, TextAlign } from "./enums";
import { KeyboardOptions } from "./richEditor";
import { Resource } from '../../global/resource';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SearchController extends TextContentControllerBase {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @param { number } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretPosition(value: number): void;
    /**
     * Exit edit state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stopEditing(): void;
    /**
     * Text selection is achieved by specifying the start and end positions of the text.
     *
     * @param { number } selectionStart - The start position of the selected text.
     * @param { number } selectionEnd - The end position of the selected text.
     * @param { SelectionOptions } [options] - Indicates the options of the text selection.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;
}
/**
 * Enum for the style of cancel button
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum CancelButtonStyle {
    /**
     * The value of button style constant
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CONSTANT,
    /**
     * The value of button style invisible
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    INVISIBLE,
    /**
     * The value of button style input
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    INPUT
}
/**
 * Declare the type of search input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SearchType {
    /**
     * Basic input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NORMAL = 0,
    /**
     * Pure digital input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NUMBER = 2,
    /**
     * Phone number entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    PHONE_NUMBER = 3,
    /**
     * E-mail address input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    EMAIL = 5,
    /**
     * Number decimal entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NUMBER_DECIMAL = 12,
    /**
     * URL entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    URL = 13
}
/**
 * Options used to construct the search.
 *
 * @typedef SearchOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SearchOptions {
    /**
     * Text input in the search text box.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    value?: string;
    /**
     * Text displayed when there is no input.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    placeholder?: ResourceStr;
    /**
     * Path to the search icon.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    icon?: string;
    /**
     * Controller of the <Search> component.
     *
     * @type { ?SearchController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    controller?: SearchController;
}
/**
 * Defines the icon options
 *
 * @interface IconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface IconOptions {
    /**
     * Set the icon size
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    size?: Length;
    /**
     * Set the icon color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Set the icon resource
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    src?: ResourceStr;
}
/**
 * Defines the SearchButton options
 *
 * @interface SearchButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface SearchButtonOptions {
    /**
     * Set the SearchButton fontSize
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontSize?: Length;
    /**
     * Set the SearchButton fontColor
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontColor?: ResourceColor;
    /**
     * Automatically disables the search button before the user enters text
     *
     * @type { ?Boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoDisable?: Boolean;
}
/**
 * Defines the CancelButton options
 *
 * @interface CancelButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface CancelButtonOptions {
    /**
     * Set the CancelButton style
     *
     * @type { ?CancelButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style?: CancelButtonStyle;
    /**
     * Set the CancelButton icon
     *
     * @type { ?IconOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    icon?: IconOptions;
}
/**
 * Defines the CancelButton symbol options
 *
 * @interface CancelButtonSymbolOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export interface CancelButtonSymbolOptions {
    /**
     * Set the CancelButton style
     *
     * @type { ?CancelButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    style?: CancelButtonStyle;
    /**
     * Set the CancelButton symbol icon
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    icon?: SymbolGlyphModifier;
}
/**
 * Declare the event listener callback of the enter key.
 *
 * @typedef { function } SearchSubmitCallback
 * @param { string } searchContent - The submitted content of search.
 * @param { SubmitEvent } [event] - Provides the method of keeping Search editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;
export declare interface SearchAttribute extends CommonMethod {
    /**
     * Set the search button text, fontSize and fontColor
     *
     * @param { string } value - indicates the text of the search button.
     * @param { SearchButtonOptions } option - indicates the fontSize and fontColor of the search button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    searchButton(value: string | undefined, option?: SearchButtonOptions | undefined): this;
    /**
     * Set the text Color
     *
     * @param { ResourceColor } value - indicates the color of the text.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Set the search icon style
     *
     * @param { IconOptions | SymbolGlyphModifier } value - indicates the style of the search icon.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    searchIcon(value: IconOptions | SymbolGlyphModifier | undefined): this;
    /**
     * Set the cancel button style
     *
     * @param { CancelButtonOptions | CancelButtonSymbolOptions } value - indicates the style of the cancel button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Dimension } value - The length of text indent.
     * @returns { SearchAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textIndent(value: Dimension | undefined): this;
    /**
     * Called when the inputFilter of text is set.
     *
     * @param { ResourceStr } value
     * @param { Callback<string> } error
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { Callback<boolean> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onEditChange(callback: Callback<boolean> | undefined): this;
    /**
     * Define the text selected background color of the text input.
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Set the cursor style
     *
     * @param { CaretStyle } value - indicates the style of the cursor.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretStyle(value: CaretStyle | undefined): this;
    /**
     * Set the place hold text color
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Set the font used for place holder text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderFont(value?: Font | undefined): this;
    /**
     * Set the font used for input text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textFont(value?: Font | undefined): this;
    /**
     * Set enter key type of soft keyboard
     *
     * @param { EnterKeyType } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Call the function when clicked the search button.
     *
     * @param { Callback<string> | SearchSubmitCallback } callback - callback of the listened event.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSubmit(callback: Callback<string> | SearchSubmitCallback | undefined): this;
    /**
     * Call the function when editing the input text
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: EditableTextOnChangeCallback | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { OnTextSelectionChangeCallback } callback - Callback of the listened event.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTextSelectionChange(callback: OnTextSelectionChangeCallback | undefined): this;
    /**
     * Called when the content scrolls.
     *
     * @param { OnContentScrollCallback } callback - Callback of the listened event.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onContentScroll(callback: OnContentScrollCallback | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCopy(callback: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCut(callback: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { OnPasteCallback } callback - Executed when a paste operation is performed.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPaste(callback: OnPasteCallback | undefined): this;
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Called when the input of maximum text length is set.
     *
     * @param { number } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * crossplatform
     * @atomicservice
     * @since 20
     */
    maxLength(value: number | undefined): this;
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textAlign(value: TextAlign | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectionMenuHidden(value: boolean | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
    * Called when the minimum font scale of the font is set.
    *
    * @param { Optional<number | Resource> } scale
    * @returns { SearchAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { Optional<number | Resource> } scale
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Define custom keyboard.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of Search
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of Search
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    customKeyboard(value: CustomBuilder | undefined, options?: KeyboardOptions | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { TextDecorationOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    decoration(value: TextDecorationOptions | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    letterSpacing(value: number | string | Resource | undefined): this;
    /**
     * Called when the line height of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the search type is set.
     *
     * @param { SearchType } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type(value: SearchType | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of search component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontFeature(value: string | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
    /**
     * Get text value information when completed input.
     *
     * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidInsert(callback: Callback<InsertValue> | undefined): this;
    /**
     * Get text value information when about to delete.
     *
     * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
    /**
     * Get text value information when the deletion has been completed
     *
     * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDidDelete(callback: Callback<DeleteValue> | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Define the preview text mode of the text input.
     *
     * @param { boolean } enable - Indicates the preview text mode.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enablePreviewText(enable: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    /**
     * Set text mode of automatic case mode switching.
     *
     * @param { AutoCapitalizationMode } mode - Automatic case mode switching.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
    /**
     * Set the text with half leading.
     *
     * @param { Optional<boolean> } halfLeading
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopBackPress(isStopped: boolean | undefined): this;
    /**
     * Get text value information when about to change.
     *
     * @param { Callback<EditableTextChangeValue, boolean> } callback - The triggered function when text content is about to change.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
    /**
     * Set the keyboard appearance.
     *
     * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    attributeModifier(modifier: AttributeModifier<SearchAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UISearchAttribute extends UICommonMethod {
    /**
     * Set the search button text, fontSize and fontColor
     *
     * @param { string } value - indicates the text of the search button.
     * @param { SearchButtonOptions } option - indicates the fontSize and fontColor of the search button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    searchButton(value: string | undefined, option?: SearchButtonOptions | undefined): this;
    /**
     * Set the text Color
     *
     * @param { ResourceColor } value - indicates the color of the text.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Set the search icon style
     *
     * @param { IconOptions | SymbolGlyphModifier } value - indicates the style of the search icon.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    searchIcon(value: IconOptions | SymbolGlyphModifier | undefined): this;
    /**
     * Set the cancel button style
     *
     * @param { CancelButtonOptions | CancelButtonSymbolOptions } value - indicates the style of the cancel button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Dimension } value - The length of text indent.
     * @returns { SearchAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textIndent(value: Dimension | undefined): this;
    /**
     * Called when the inputFilter of text is set.
     *
     * @param { ResourceStr } value
     * @param { Callback<string> } error
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { Callback<boolean> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onEditChange(callback: Callback<boolean> | undefined): this;
    /**
     * Define the text selected background color of the text input.
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Set the cursor style
     *
     * @param { CaretStyle } value - indicates the style of the cursor.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretStyle(value: CaretStyle | undefined): this;
    /**
     * Set the place hold text color
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Set the font used for place holder text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderFont(value?: Font | undefined): this;
    /**
     * Set the font used for input text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textFont(value?: Font | undefined): this;
    /**
     * Set enter key type of soft keyboard
     *
     * @param { EnterKeyType } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Call the function when clicked the search button.
     *
     * @param { Callback<string> | SearchSubmitCallback } callback - callback of the listened event.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSubmit(callback: Callback<string> | SearchSubmitCallback | undefined): this;
    /**
     * Call the function when editing the input text
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: EditableTextOnChangeCallback | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { OnTextSelectionChangeCallback } callback - Callback of the listened event.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTextSelectionChange(callback: OnTextSelectionChangeCallback | undefined): this;
    /**
     * Called when the content scrolls.
     *
     * @param { OnContentScrollCallback } callback - Callback of the listened event.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onContentScroll(callback: OnContentScrollCallback | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onCopy(callback: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onCut(callback: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { OnPasteCallback } callback - Executed when a paste operation is performed.
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPaste(callback: OnPasteCallback | undefined): this;
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Called when the input of maximum text length is set.
     *
     * @param { number } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxLength(value: number | undefined): this;
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textAlign(value: TextAlign | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectionMenuHidden(value: boolean | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    minFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
    * Called when the minimum font scale of the font is set.
    *
    * @param { Optional<number | Resource> } scale
    * @returns { SearchAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 20
    */
    @memo
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { Optional<number | Resource> } scale
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Define custom keyboard.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of Search
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of Search
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    customKeyboard(value: CustomBuilder | undefined, options?: KeyboardOptions | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { TextDecorationOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    decoration(value: TextDecorationOptions | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    letterSpacing(value: number | string | Resource | undefined): this;
    /**
     * Called when the line height of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the search type is set.
     *
     * @param { SearchType } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    type(value: SearchType | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of search component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontFeature(value: string | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
    /**
     * Get text value information when completed input.
     *
     * @param { Callback<InsertValue> } callback - The triggered function when text content has been inserted.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDidInsert(callback: Callback<InsertValue> | undefined): this;
    /**
     * Get text value information when about to delete.
     *
     * @param { Callback<DeleteValue, boolean> } callback - The triggered function when text content is about to delete.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
    /**
     * Get text value information when the deletion has been completed
     *
     * @param { Callback<DeleteValue> } callback - The triggered function when text content has been deleted.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDidDelete(callback: Callback<DeleteValue> | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Define the preview text mode of the text input.
     *
     * @param { boolean } enable - Indicates the preview text mode.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enablePreviewText(enable: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    /**
     * Set text mode of automatic case mode switching.
     *
     * @param { AutoCapitalizationMode } mode - Automatic case mode switching.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
    /**
     * Set the text with half leading.
     *
     * @param { Optional<boolean> } halfLeading
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    stopBackPress(isStopped: boolean | undefined): this;
    /**
     * Get text value information when about to change.
     *
     * @param { Callback<EditableTextChangeValue, boolean> } callback - The triggered function when text content is about to change.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
    /**
     * Set the keyboard appearance.
     *
     * @param { Optional<KeyboardAppearance> } appearance - Default value is KeyboardAppearance.NONE_IMMERSIVE
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<SearchAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Search(
    options?: SearchOptions, 
    @memo
    content_?: () => void,
): UISearchAttribute