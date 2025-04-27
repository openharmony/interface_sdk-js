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


import { KeyboardOptions, PasteEvent } from "./richEditor";
import { CaretStyle, DeleteValue, EditMenuOptions, EditableTextOnChangeCallback, InsertValue, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance } from "./textCommon";
import { BarState, CopyOptions, FontStyle, FontWeight, LineBreakStrategy, TextContentStyle, TextAlign, TextOverflow, TextHeightAdaptivePolicy, WordBreak } from "./enums";
import { EnterKeyType, SubmitEvent, ContentType } from "./textInput";
import { Dimension, Font, Length, LengthMetrics, ResourceColor, ResourceStr } from "./units";
import { CustomBuilder, InputCounterOptions, TextContentControllerBase, SelectionOptions, TextDecorationOptions, CommonMethod, Callback, Optional, UICommonMethod, AttributeModifier } from "./common";
import { Resource } from '../../global/resource';
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
export declare class TextAreaController extends TextContentControllerBase {
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
    /**
     * Exit edit state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    stopEditing(): void;
}
/**
 * Defines the options of TextArea.
 *
 * @interface TextAreaOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextAreaOptions {
    /**
     * The place holder text string.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholder?: ResourceStr;
    /**
     * Sets the current value of TextArea.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    text?: ResourceStr;
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @type { ?TextAreaController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controller?: TextAreaController;
}
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum TextAreaType {
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
 * Declare the event listener callback of the enter key.
 *
 * @typedef { function } TextAreaSubmitCallback
 * @param { EnterKeyType } enterKeyType - The enter key type of soft keyboard.
 * @param { SubmitEvent } [event] - Provides the method of keeping textArea editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;
export declare interface TextAreaAttribute extends CommonMethod {
    /**
     * Called when the color of the placeholder is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font property of the placeholder is set.
     *
     * @param { Font } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderFont(value: Font | undefined): this;
    /**
     * Called when the type of soft keyboard input button is set.
     *
     * @param { EnterKeyType } value the type of soft keyboard
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when the alignment of the contents of a multiline text box is set.
     *
     * @param { TextAlign } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textAlign(value: TextAlign | undefined): this;
    /**
     * Called when the insertion cursor color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { Length } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontSize(value: Length | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { ResourceStr } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflow } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textOverflow(value: TextOverflow | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Dimension } value - The length of text indent.
     * @returns { TextAreaAttribute } The attribute of the text.
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
     * @param { function } error
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    inputFilter(value: ResourceStr | undefined, error?: ((value: string) => void) | undefined): this;
    /**
     * Define the caret style of the text input
     *
     * @param { CaretStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretStyle(value: CaretStyle | undefined): this;
    /**
     * Define the text selected background color of the text input.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback } callback - callback of the listened event.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSubmit(callback: ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback | undefined): this;
    /**
     * Called when the input changes.
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: EditableTextOnChangeCallback | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTextSelectionChange(callback: ((selectionStart: number, selectionEnd: number) => void) | undefined): this;
    /**
     * Called when the content scrolls.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onContentScroll(callback: ((totalOffsetX: number, totalOffsetY: number) => void) | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { function } callback - Triggered when the text area status changes.
     * If the value of isEditing is true, text area is in progress.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onEditChange(callback: ((isEditing: boolean) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCopy(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCut(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     *          Executed when a paste operation is performed.
     *          { string } value - The text content to be pasted.
     *          { PasteEvent } event - The user-defined paste event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPaste(callback: ((value: string, event: PasteEvent) => void) | undefined): this;
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Define the max length content of the text area.
     *
     * @param { number } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLength(value: number | undefined): this;
    /**
     * Define show counter of the text area.
     *
     * @param { boolean } value - Set showcounter of the text area.
     * @param { InputCounterOptions } options - Set the percentage of counter.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showCounter(value: boolean | undefined, options?: InputCounterOptions | undefined): this;
    /**
     * Define style of the text area.
     *
     * @param { TextContentStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style(value: TextContentStyle | undefined): this;
    /**
     * Define bar state of the text area.
     *
     * @param { BarState } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    barState(value: BarState | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Define max lines of the text area.
     *
     * @param { number } value
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLines(value: number | undefined): this;
    /**
     * Set the word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    wordBreak(value: WordBreak | undefined): this;
    /**
     * Set the text line break strategy type.
     *
     * @param { LineBreakStrategy } strategy - The text line break strategy type.
     * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Define custom keyboard of the text area.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of TextArea
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextArea
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    letterSpacing(value: number | string | Resource | undefined): this;
    /**
     * Set font line spacing.
     *
     * @param { LengthMetrics } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineSpacing(value: LengthMetrics | undefined): this;
    /**
     * Called when the line height of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the input type is set.
     *
     * @param { TextAreaType } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type(value: TextAreaType | undefined): this;
    /**
     * Sets whether enable auto fill or not.
     *
     * @param { boolean } value - Indicates the flag whether autofill is enabled.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableAutoFill(value: boolean | undefined): this;
    /**
     * Called when the auto fill type is set.
     *
     * @param { ContentType } contentType - Indicates autofill type.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    contentType(contentType: ContentType | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of TextArea component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UITextAreaAttribute extends UICommonMethod {
    /**
     * Called when the color of the placeholder is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font property of the placeholder is set.
     *
     * @param { Font } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderFont(value: Font | undefined): this;
    /**
     * Called when the type of soft keyboard input button is set.
     *
     * @param { EnterKeyType } value the type of soft keyboard
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when the alignment of the contents of a multiline text box is set.
     *
     * @param { TextAlign } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textAlign(value: TextAlign | undefined): this;
    /**
     * Called when the insertion cursor color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { Length } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: Length | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: number | FontWeight | string | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { ResourceStr } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflow } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textOverflow(value: TextOverflow | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Dimension } value - The length of text indent.
     * @returns { TextAreaAttribute } The attribute of the text.
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
     * @param { function } error
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    inputFilter(value: ResourceStr | undefined, error?: ((value: string) => void) | undefined): this;
    /**
     * Define the caret style of the text input
     *
     * @param { CaretStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretStyle(value: CaretStyle | undefined): this;
    /**
     * Define the text selected background color of the text input.
     *
     * @param { ResourceColor } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback } callback - callback of the listened event.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSubmit(callback: ((enterKey: EnterKeyType) => void) | TextAreaSubmitCallback | undefined): this;
    /**
     * Called when the input changes.
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { TextAreaAttribute }
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
     * @param { function } callback - callback of the listened event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTextSelectionChange(callback: ((selectionStart: number, selectionEnd: number) => void) | undefined): this;
    /**
     * Called when the content scrolls.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onContentScroll(callback: ((totalOffsetX: number, totalOffsetY: number) => void) | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { function } callback - Triggered when the text area status changes.
     * If the value of isEditing is true, text area is in progress.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onEditChange(callback: ((isEditing: boolean) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onCopy(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onCut(callback: ((value: string) => void) | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     *          Executed when a paste operation is performed.
     *          { string } value - The text content to be pasted.
     *          { PasteEvent } event - The user-defined paste event.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPaste(callback: ((value: string, event: PasteEvent) => void) | undefined): this;
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Define the max length content of the text area.
     *
     * @param { number } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxLength(value: number | undefined): this;
    /**
     * Define show counter of the text area.
     *
     * @param { boolean } value - Set showcounter of the text area.
     * @param { InputCounterOptions } options - Set the percentage of counter.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showCounter(value: boolean | undefined, options?: InputCounterOptions | undefined): this;
    /**
     * Define style of the text area.
     *
     * @param { TextContentStyle } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    style(value: TextContentStyle | undefined): this;
    /**
     * Define bar state of the text area.
     *
     * @param { BarState } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    barState(value: BarState | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Define max lines of the text area.
     *
     * @param { number } value
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxLines(value: number | undefined): this;
    /**
     * Set the word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    wordBreak(value: WordBreak | undefined): this;
    /**
     * Set the text line break strategy type.
     *
     * @param { LineBreakStrategy } strategy - The text line break strategy type.
     * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Define custom keyboard of the text area.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of TextArea
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextArea
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    letterSpacing(value: number | string | Resource | undefined): this;
    /**
     * Set font line spacing.
     *
     * @param { LengthMetrics } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineSpacing(value: LengthMetrics | undefined): this;
    /**
     * Called when the line height of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the input type is set.
     *
     * @param { TextAreaType } value
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    type(value: TextAreaType | undefined): this;
    /**
     * Sets whether enable auto fill or not.
     *
     * @param { boolean } value - Indicates the flag whether autofill is enabled.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableAutoFill(value: boolean | undefined): this;
    /**
     * Called when the auto fill type is set.
     *
     * @param { ContentType } contentType - Indicates autofill type.
     * @returns { TextAreaAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    contentType(contentType: ContentType | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of TextArea component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute }
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
     * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function TextArea(
    value?: TextAreaOptions, 
    @memo
    content_?: () => void,
): UITextAreaAttribute