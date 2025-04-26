/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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


import { CancelButtonSymbolOptions, CancelButtonOptions } from "./search";
import { CustomBuilder, Callback, CommonMethod, TextContentControllerBase, SelectionOptions, InputCounterOptions, TextDecorationOptions, Optional, UICommonMethod, AttributeModifier } from "./common";
import { BarState, LineBreakStrategy, TextAlign, FontStyle, FontWeight, WordBreak, TextOverflow, CopyOptions, TextHeightAdaptivePolicy, TextContentStyle, EllipsisMode } from "./enums";
import { Resource, ResourceStr, ResourceColor, Dimension, Font, Length } from "./units";
import { InsertValue, DeleteValue, CaretStyle, EditableTextOnChangeCallback, EditMenuOptions, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance } from "./textCommon";
import { KeyboardOptions, PasteEvent } from "./richEditor";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Declare the type of input box
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum InputType {
    /**
     * Basic input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Normal,
    /**
     * Pure digital input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Number,
    /**
     * Phone number entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    PhoneNumber,
    /**
     * E-mail address input mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Email,
    /**
     * Password entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Password,
    /**
     * Number Password entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NUMBER_PASSWORD = 8,
    /**
     * Screen Lock Password entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    SCREEN_LOCK_PASSWORD = 9,
    /**
     * UserName entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    USER_NAME = 10,
    /**
     * NewPassword entry mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    NEW_PASSWORD = 11,
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
 * Declare the type of input content
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum ContentType {
    /**
     * User name content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    USER_NAME = 0,
    /**
     * Password content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PASSWORD = 1,
    /**
     * New password content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    NEW_PASSWORD = 2,
    /**
     * Full street address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    FULL_STREET_ADDRESS = 3,
    /**
     * House number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    HOUSE_NUMBER = 4,
    /**
     * District address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DISTRICT_ADDRESS = 5,
    /**
     * City address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    CITY_ADDRESS = 6,
    /**
     * Province address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PROVINCE_ADDRESS = 7,
    /**
     * Country address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    COUNTRY_ADDRESS = 8,
    /**
     * Person full name content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PERSON_FULL_NAME = 9,
    /**
     * Person last name content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PERSON_LAST_NAME = 10,
    /**
     * Person first name content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PERSON_FIRST_NAME = 11,
    /**
     * Phone number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PHONE_NUMBER = 12,
    /**
     * Phone country code content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PHONE_COUNTRY_CODE = 13,
    /**
     * Full phone number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    FULL_PHONE_NUMBER = 14,
    /**
     * Email address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    EMAIL_ADDRESS = 15,
    /**
     * Bank card number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    BANK_CARD_NUMBER = 16,
    /**
     * ID card number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ID_CARD_NUMBER = 17,
    /**
     * Nickname content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    NICKNAME = 23,
    /**
     * Detail info without street content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    DETAIL_INFO_WITHOUT_STREET = 24,
    /**
     * Format address content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    FORMAT_ADDRESS = 25,
    /**
     * Passport number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    PASSPORT_NUMBER = 26,
    /**
     * Passport validity content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    VALIDITY = 27,
    /**
     * Place of issue content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ISSUE_AT = 28,
    /**
     * Invoice organization content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ORGANIZATION = 29,
    /**
     * Invoice tax id content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    TAX_ID = 30,
    /**
     * Address city and state content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ADDRESS_CITY_AND_STATE = 31,
    /**
     * Airline flight number content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    FLIGHT_NUMBER = 32,
    /**
     * License number for drivers content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LICENSE_NUMBER = 33,
    /**
     * License file number for drivers content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LICENSE_FILE_NUMBER = 34,
    /**
     * License plate for vehicles content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LICENSE_PLATE = 35,
    /**
     * Engine number for vehicles content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    ENGINE_NUMBER = 36,
    /**
     * License chassis number for vehicles content type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    LICENSE_CHASSIS_NUMBER = 37
}
/**
 * Declare the type of soft keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum EnterKeyType {
    /**
     * Go.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Go = 2,
    /**
     * Search.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Search = 3,
    /**
     * Send.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Send = 4,
    /**
     * Next.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Next = 5,
    /**
     * Done.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Done = 6,
    /**
     * Showed as 'previous' pattern.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    PREVIOUS = 7,
    /**
     * Showed as 'new line' pattern.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    NEW_LINE = 8
}
/**
  * Defines the underline color width property.
  *
  * @interface UnderlineColor
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20
  */
export declare interface UnderlineColor {
    /**
      * Typing underline color width property.
      *
      * @type { ?(ResourceColor | undefined) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    typing?: ResourceColor | undefined;
    /**
      * Normal underline color width property.
      *
      * @type { ?(ResourceColor | undefined) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    normal?: ResourceColor | undefined;
    /**
      * Error underline color width property.
      *
      * @type { ?(ResourceColor | undefined) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    error?: ResourceColor | undefined;
    /**
      * Disable underline color width property.
      *
      * @type { ?(ResourceColor | undefined) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    disable?: ResourceColor | undefined;
}
/**
 * Provides the method of keeping TextInput editable state when submitted.
 *
 * @interface SubmitEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface SubmitEvent {
    /**
     * Keeps TextInput editable state when submitted
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keepEditableState(): void;
    /**
     * Sets the current value of TextInput.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    text: string;
}
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TextInputController extends TextContentControllerBase {
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
 * Defines the options of TextInput.
 *
 * @interface TextInputOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextInputOptions {
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
     * Sets the current value of TextInput.
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
     * @type { ?TextInputController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controller?: TextInputController;
}
/**
 * Text input style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum TextInputStyle {
    /**
     * Text input default style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Default,
    /**
     * Text input inline style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    Inline
}
/**
 * PasswordIcon object.
 *
 * @interface PasswordIcon
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface PasswordIcon {
    /**
     * Define the on icon source of PasswordIcon.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onIconSrc?: string | Resource;
    /**
     * Define the off icon source of PasswordIcon.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    offIconSrc?: string | Resource;
}
/**
 * Defines a TextInput callback when onSubmit.
 *
 * @typedef { function } OnSubmitCallback
 * @param { EnterKeyType } enterKey - Input method Enter key type.
 * @param { SubmitEvent } event - The event submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnSubmitCallback = (enterKey: EnterKeyType, event: SubmitEvent) => void;
/**
 * Defines a TextInput callback when onTextSelectionChange.
 *
 * @typedef { function } OnTextSelectionChangeCallback
 * @param { number } selectionStart - The starting position of the selected text, the starting position of the text is 0.
 * @param { number } selectionEnd - The end location of the selected text.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnTextSelectionChangeCallback = (selectionStart: number, selectionEnd: number) => void;
/**
 * Defines a TextInput callback when onContentScroll.
 *
 * @typedef { function } OnContentScrollCallback
 * @param { number } totalOffsetX - The text is offset in px on the horizontal axis of the content area.
 * @param { number } totalOffsetY - The text is offset in px on the vertical axis of the content area.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void;
/**
 * Defines a TextInput callback when onPaste.
 *
 * @typedef { function } OnPasteCallback
 * @param { string } content - The text content of the paste.
 * @param { PasteEvent } event - User-defined paste event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type OnPasteCallback = (content: string, event: PasteEvent) => void;
export declare interface TextInputAttribute extends CommonMethod {
    /**
     * Called when the input type is set.
     *
     * @param { InputType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    type(value: InputType | undefined): this;
    /**
     * Called when the content type is set.
     *
     * @param { ContentType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    contentType(value: ContentType | undefined): this;
    /**
     * Called when the color of the placeholder is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflow } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textIndent(value: Dimension | undefined): this;
    /**
     * Called when the font property of the placeholder is set.
     *
     * @param { Font } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    placeholderFont(value?: Font | undefined): this;
    /**
     * Called when the type of soft keyboard input button is set.
     *
     * @param { EnterKeyType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when the color of the insertion cursor is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretColor(value: ResourceColor | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { Callback<boolean> } callback
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onEditChange(callback: Callback<boolean> | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { OnSubmitCallback } callback - Callback of the listened event.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSubmit(callback: OnSubmitCallback | undefined): this;
    /**
     * Called when the input of the input box changes.
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onContentScroll(callback: OnContentScrollCallback | undefined): this;
    /**
     * Called when the input of maximum text length is set.
     *
     * @param { number } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLength(value: number | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the inputFilter of text is set.
     *
     * @param { ResourceStr } value
     * @param { Callback<string> } [error]
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Called when the password show/hide icon is set.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showPasswordIcon(value: boolean | undefined): this;
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textAlign(value: TextAlign | undefined): this;
    /**
     * Text input style
     *
     * @param { TextInputStyle | TextContentStyle } value - Text input style
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    style(value: TextInputStyle | TextContentStyle | undefined): this;
    /**
     * Define the caret style of the text input
     *
     * @param { CaretStyle } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Define the caret position of the text input.
     *
     * @param { number } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretPosition(value: number | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Define the password icon of the text input.
     *
     * @param { PasswordIcon } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    passwordIcon(value: PasswordIcon | undefined): this;
    /**
     * Define the show error of the text input.
     *
     * @param { ResourceStr | undefined } [value]
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showError(value?: ResourceStr | undefined): this;
    /**
     * Define the show unit of the text input.
     *
     * @param { CustomBuilder } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showUnit(value: CustomBuilder | undefined): this;
    /**
     * Define the show underline of the text input.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showUnderline(value: boolean | undefined): this;
    /**
     * Define the underline color of the text input.
     *
     * @param { ResourceColor | UnderlineColor | undefined } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    underlineColor(value: ResourceColor | UnderlineColor | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectionMenuHidden(value: boolean | undefined): this;
    /**
     * Define bar state of the text input.
     *
     * @param { BarState } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    barState(value: BarState | undefined): this;
    /**
     * Define max lines of the text input.
     *
     * @param { number } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLines(value: number | undefined): this;
    /**
     * Set the text inline style word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Define custom keyboard of the text input.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of TextInput
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextInput
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    customKeyboard(value: CustomBuilder | undefined, options?: KeyboardOptions | undefined): this;
    /**
     * Show the counter when the number of characters entered exceeds the threshold through InputCounterOptions.
     *
     * @param { boolean } value - Set showcounter of the text input.
     * @param { InputCounterOptions } options - Set the percentage of counter.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showCounter(value: boolean | undefined, options?: InputCounterOptions | undefined): this;
    /**
     * Set the cancel button style
     *
     * @param { CancelButtonOptions | CancelButtonSymbolOptions } symbolOptions - indicates the style of the cancel button.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancelButton(symbolOptions: CancelButtonOptions | CancelButtonSymbolOptions | undefined): this;
    /**
     * Sets selection when on focus.
     *
     * @param { boolean } value - Sets selection or not.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectAll(value: boolean | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { Optional<number | Resource> } scale
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Sets whether enable auto fill or not.
     *
     * @param { boolean } value - Indicates the flag whether autofill is enabled.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableAutoFill(value: boolean | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { TextDecorationOptions } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Define the password rules of the text input.
     *
     * @param { string } value - Indicates the password rules.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    passwordRules(value: string | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of TextInput component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fontFeature(value: string | undefined): this;
    /**
     * Define the password visible mode of the text input.
     *
     * @param { boolean } visible - Indicates the password visible mode.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    showPassword(visible: boolean | undefined): this;
    /**
     * Called when changing the password visible mode of the text input.
     *
     * @param { Callback<boolean> } callback - callback of the password visible mode change event.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSecurityStateChange(callback: Callback<boolean> | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } mode - The ellipsis mode.
     * @returns { TextInputAttribute } The attribute of TextInput.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ellipsisMode(mode: EllipsisMode | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    stopBackPress(isStopped: boolean | undefined): this;
    /**
     * Get text value information when about to change.
     *
     * @param { Callback<EditableTextChangeValue, boolean> } callback - The triggered function when text content is about to change.
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    attributeModifier(modifier: AttributeModifier<TextInputAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UITextInputAttribute extends UICommonMethod {
    /**
     * Called when the input type is set.
     *
     * @param { InputType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    type(value: InputType | undefined): this;
    /**
     * Called when the content type is set.
     *
     * @param { ContentType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    contentType(value: ContentType | undefined): this;
    /**
     * Called when the color of the placeholder is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderColor(value: ResourceColor | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflow } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textIndent(value: Dimension | undefined): this;
    /**
     * Called when the font property of the placeholder is set.
     *
     * @param { Font } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    placeholderFont(value?: Font | undefined): this;
    /**
     * Called when the type of soft keyboard input button is set.
     *
     * @param { EnterKeyType } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enterKeyType(value: EnterKeyType | undefined): this;
    /**
     * Called when the color of the insertion cursor is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretColor(value: ResourceColor | undefined): this;
    /**
     * Called when judging whether the text editing change finished.
     *
     * @param { Callback<boolean> } callback
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onEditChange(callback: Callback<boolean> | undefined): this;
    /**
     * Called when submitted.
     *
     * @param { OnSubmitCallback } callback - Callback of the listened event.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSubmit(callback: OnSubmitCallback | undefined): this;
    /**
     * Called when the input of the input box changes.
     *
     * @param { EditableTextOnChangeCallback } callback
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onContentScroll(callback: OnContentScrollCallback | undefined): this;
    /**
     * Called when the input of maximum text length is set.
     *
     * @param { number } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxLength(value: number | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: ResourceStr | undefined): this;
    /**
     * Called when the inputFilter of text is set.
     *
     * @param { ResourceStr } value
     * @param { Callback<string> } [error]
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    inputFilter(value: ResourceStr | undefined, error?: Callback<string> | undefined): this;
    /**
     * Called when using the Clipboard menu.
     *
     * @param { Callback<string> } callback
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Called when the password show/hide icon is set.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showPasswordIcon(value: boolean | undefined): this;
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textAlign(value: TextAlign | undefined): this;
    /**
     * Text input style
     *
     * @param { TextInputStyle | TextContentStyle } value - Text input style
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    style(value: TextInputStyle | TextContentStyle | undefined): this;
    /**
     * Define the caret style of the text input
     *
     * @param { CaretStyle } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * Define the caret position of the text input.
     *
     * @param { number } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretPosition(value: number | undefined): this;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableKeyboardOnFocus(value: boolean | undefined): this;
    /**
     * Define the password icon of the text input.
     *
     * @param { PasswordIcon } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    passwordIcon(value: PasswordIcon | undefined): this;
    /**
     * Define the show error of the text input.
     *
     * @param { ResourceStr | undefined } [value]
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showError(value?: ResourceStr | undefined): this;
    /**
     * Define the show unit of the text input.
     *
     * @param { CustomBuilder } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showUnit(value: CustomBuilder | undefined): this;
    /**
     * Define the show underline of the text input.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showUnderline(value: boolean | undefined): this;
    /**
     * Define the underline color of the text input.
     *
     * @param { ResourceColor | UnderlineColor | undefined } value
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    underlineColor(value: ResourceColor | UnderlineColor | undefined): this;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectionMenuHidden(value: boolean | undefined): this;
    /**
     * Define bar state of the text input.
     *
     * @param { BarState } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    barState(value: BarState | undefined): this;
    /**
     * Define max lines of the text input.
     *
     * @param { number } value
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    maxLines(value: number | undefined): this;
    /**
     * Set the text inline style word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute } The attribute of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Define custom keyboard of the text input.
     *
     * @param { CustomBuilder } value - Set up a custom keyboard of TextInput
     * @param { KeyboardOptions } [options] - Indicates the custom keyboard options of TextInput
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    customKeyboard(value: CustomBuilder | undefined, options?: KeyboardOptions | undefined): this;
    /**
     * Show the counter when the number of characters entered exceeds the threshold through InputCounterOptions.
     *
     * @param { boolean } value - Set showcounter of the text input.
     * @param { InputCounterOptions } options - Set the percentage of counter.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showCounter(value: boolean | undefined, options?: InputCounterOptions | undefined): this;
    /**
     * Set the cancel button style
     *
     * @param { CancelButtonOptions | CancelButtonSymbolOptions } symbolOptions - indicates the style of the cancel button.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    cancelButton(symbolOptions: CancelButtonOptions | CancelButtonSymbolOptions | undefined): this;
    /**
     * Sets selection when on focus.
     *
     * @param { boolean } value - Sets selection or not.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectAll(value: boolean | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Sets whether enable auto fill or not.
     *
     * @param { boolean } value - Indicates the flag whether autofill is enabled.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableAutoFill(value: boolean | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { TextDecorationOptions } value
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Define the password rules of the text input.
     *
     * @param { string } value - Indicates the password rules.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    passwordRules(value: string | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of TextInput component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fontFeature(value: string | undefined): this;
    /**
     * Define the password visible mode of the text input.
     *
     * @param { boolean } visible - Indicates the password visible mode.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    showPassword(visible: boolean | undefined): this;
    /**
     * Called when changing the password visible mode of the text input.
     *
     * @param { Callback<boolean> } callback - callback of the password visible mode change event.
     * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSecurityStateChange(callback: Callback<boolean> | undefined): this;
    /**
     * Get text value information when about to input.
     *
     * @param { Callback<InsertValue, boolean> } callback - The triggered function when text content is about to insert.
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } mode - The ellipsis mode.
     * @returns { TextInputAttribute } The attribute of TextInput.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    ellipsisMode(mode: EllipsisMode | undefined): this;
    /**
     * Set whether stop backPressed callback event or not.
     *
     * @param { Optional<boolean> } isStopped - Default value is true, set false to trigger the latest callback event.
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
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
     * @returns { TextInputAttribute }
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
     * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TextInputAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function TextInput(
    value?: TextInputOptions, 
    @memo
    content_?: () => void,
): UITextInputAttribute