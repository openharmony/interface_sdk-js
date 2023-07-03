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
 * Declare the type of input box
 * @since 7
 */
/**
 * Declare the type of input box
 * @crossplatform
 * @since 10
 */
declare enum InputType {
  /**
   * Basic input mode.
   * @since 7
   */
  /**
   * Basic input mode.
   * @crossplatform
   * @since 10
   */
  Normal,

  /**
   * Pure digital input mode.
   * @since 7
   */
  /**
   * Pure digital input mode.
   * @crossplatform
   * @since 10
   */
  Number,

  /**
   * Phone number entry mode.
   * @since 9
   */
  /**
   * Phone number entry mode.
   * @crossplatform
   * @since 10
   */
  PhoneNumber,

  /**
   * E-mail address input mode.
   * @since 7
   */
  /**
   * E-mail address input mode.
   * @crossplatform
   * @since 10
   */
  Email,

  /**
   * Password entry mode.
   * @since 7
   */
  /**
   * Password entry mode.
   * @crossplatform
   * @since 10
   */
  Password,
}

/**
 * Declare the type of soft keyboard.
 * @since 7
 */
/**
 * Declare the type of soft keyboard.
 * @crossplatform
 * @since 10
 */
declare enum EnterKeyType {
  /**
   * Go.
   * @since 7
   */
  /**
   * Go.
   * @crossplatform
   * @since 10
   */
  Go,

  /**
   * Search.
   * @since 7
   */
  /**
   * Search.
   * @crossplatform
   * @since 10
   */
  Search,

  /**
   * Send.
   * @since 7
   */
  /**
   * Send.
   * @crossplatform
   * @since 10
   */
  Send,

  /**
   * Next.
   * @since 7
   */
  /**
   * Next.
   * @crossplatform
   * @since 10
   */
  Next,

  /**
   * Done.
   * @since 7
   */
  /**
   * Done.
   * @crossplatform
   * @since 10
   */
  Done,
}

/**
 * Provides the method of switching the cursor position.
 * @since 8
 */
/**
 * Provides the method of switching the cursor position.
 * @crossplatform
 * @since 10
 */
declare class TextInputController {
  /**
   * constructor.
   * @since 8
   */
  /**
   * constructor.
   * @crossplatform
   * @since 10
   */
  constructor();

  /**
   * Called when the position of the insertion cursor is set.
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   * @crossplatform
   * @since 10
   */
  caretPosition(value: number): void;

  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   * @param { number } selectionStart - The start position of the selected text.
   * @param { number } selectionEnd - The end position of the selected text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  setTextSelection(selectionStart: number, selectionEnd: number): void;

  /**
   * Exit edit state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  stopEditing(): void;
}

/**
 * Defines the options of TextInput.
 * @since 7
 */
/**
 * Defines the options of TextInput.
 * @crossplatform
 * @since 10
 */
declare interface TextInputOptions {
  /**
   * The place holder text string.
   * @since 7
   */
  /**
   * The place holder text string.
   * @crossplatform
   * @since 10
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current value of TextArea.
   * @since 7
   */
  /**
   * Sets the current value of TextArea.
   * @crossplatform
   * @since 10
   */
  text?: ResourceStr;

  /**
   * Called when the position of the insertion cursor is set.
   * @since 8
   */
  /**
   * Called when the position of the insertion cursor is set.
   * @crossplatform
   * @since 10
   */
  controller?: TextInputController;
}

/**
 * Text input style.
 * @since 9
 */
/**
 * Text input style.
 * @crossplatform
 * @since 10
 */
declare enum TextInputStyle {
  /**
   * Text input default style.
   * @since 9
   */
  /**
   * Text input default style.
   * @crossplatform
   * @since 10
   */
  Default,

  /**
   * Text input inline style.
   * @since 9
   */
  /**
   * Text input inline style.
   * @crossplatform
   * @since 10
   */
  Inline
}

/**
 * Provides a single-line text input component interface.
 * @since 7
 */
/**
 * Provides a single-line text input component interface.
 * @crossplatform
 * @since 10
 */
interface TextInputInterface {
  /**
   * Called when writing a single line of text.
   * @since 7
   */
  /**
   * Called when writing a single line of text.
   * @crossplatform
   * @since 10
   */
  (value?: TextInputOptions): TextInputAttribute;
}

/**
 * CaretStyle object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface CaretStyle {
  /**
   * Define the cursor width of CaretStyle.
   * @param { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  width?: Length;
}

/**
 * PasswordIcon object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface PasswordIcon {
  /**
   * Define the on icon source of PasswordIcon.
   * @param { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  onIconSrc?: string | Resource;

  /**
   * Define the off icon source of PasswordIcon.
   * @param { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offIconSrc?: string | Resource;
}

/**
 * Defines the TextInput attribute functions.
 * @since 7
 */
/**
 * Defines the TextInput attribute functions.
 * @crossplatform
 * @since 10
 */
declare class TextInputAttribute extends CommonMethod<TextInputAttribute> {
  /**
   * Called when the input type is set.
   * @since 7
   */
  /**
   * Called when the input type is set.
   * @crossplatform
   * @since 10
   */
  type(value: InputType): TextInputAttribute;

  /**
   * Called when the color of the placeholder is set.
   * @since 7
   */
  /**
   * Called when the color of the placeholder is set.
   * @crossplatform
   * @since 10
   */
  placeholderColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when the font property of the placeholder is set.
   * @since 7
   */
  /**
   * Called when the font property of the placeholder is set.
   * @crossplatform
   * @since 10
   */
  placeholderFont(value?: Font): TextInputAttribute;

  /**
   * Called when the type of soft keyboard input button is set.
   * @since 7
   */
  /**
   * Called when the type of soft keyboard input button is set.
   * @crossplatform
   * @since 10
   */
  enterKeyType(value: EnterKeyType): TextInputAttribute;

  /**
   * Called when the color of the insertion cursor is set.
   * @since 7
   */
  /**
   * Called when the color of the insertion cursor is set.
   * @crossplatform
   * @since 10
   */
  caretColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when judging whether the text editing change finished.
   * @since 7
   * @deprecated since 8
   * @useinstead onEditChange
   */
  onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute;

  /**
   * Called when judging whether the text editing change finished.
   * @since 8
   */
  /**
   * Called when judging whether the text editing change finished.
   * @crossplatform
   * @since 10
   */
  onEditChange(callback: (isEditing: boolean) => void): TextInputAttribute;

  /**
   * Called when submitted.
   * @since 7
   */
  /**
   * Called when submitted.
   * @crossplatform
   * @since 10
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): TextInputAttribute;

  /**
   * Called when the input of the input box changes.
   * @since 7
   */
  /**
   * Called when the input of the input box changes.
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: string) => void): TextInputAttribute;

  /**
   * Called when the text selection changes.
   * @param { (selectionStart: number, selectionEnd: number) => void } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextInputAttribute;

  /**
   * Called when the content scrolls.
   * @param { (totalOffsetX: number, totalOffsetY: number) => void } callback - callback of the listened event.
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): TextInputAttribute;

  /**
   * Called when the input of maximum text length is set.
   * @since 7
   */
  /**
   * Called when the input of maximum text length is set.
   * @crossplatform
   * @since 10
   */
  maxLength(value: number): TextInputAttribute;

  /**
   * Called when the font color is set.
   * @since 7
   */
  /**
   * Called when the font color is set.
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): TextInputAttribute;

  /**
   * Called when the font size is set.
   * @since 7
   */
  /**
   * Called when the font size is set.
   * @crossplatform
   * @since 10
   */
  fontSize(value: Length): TextInputAttribute;

  /**
   * Called when the font style of a font is set.
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   * @crossplatform
   * @since 10
   */
  fontStyle(value: FontStyle): TextInputAttribute;

  /**
   * Called when the font weight is set.
   * @since 7
   */
  /**
   * Called when the font weight is set.
   * @crossplatform
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): TextInputAttribute;

  /**
   * Called when the font list of text is set.
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   * @crossplatform
   * @since 10
   */
  fontFamily(value: ResourceStr): TextInputAttribute;

  /**
   * Called when the inputFilter of text is set.
   * @since 8
   */
  /**
   * Called when the inputFilter of text is set.
   * @crossplatform
   * @since 10
   */
  inputFilter(value: ResourceStr, error?: (value: string) => void): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCopy(callback: (value: string) => void): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCut(callback: (value: string) => void): TextInputAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onPaste(callback: (value: string) => void): TextInputAttribute;

  /**
   * Called when the copy option is set.
   * @since 9
   */
  /**
   * Called when the copy option is set.
   * @crossplatform
   * @since 10
   */
  copyOption(value: CopyOptions): TextInputAttribute;

  /**
   * Called when the password show/hide icon is set.
   * @since 9
   */
  /**
   * Called when the password show/hide icon is set.
   * @crossplatform
   * @since 10
   */
  showPasswordIcon(value: boolean): TextInputAttribute;

  /**
   * Called when the text align is set.
   * @since 9
   */
  /**
   * Called when the text align is set.
   * @crossplatform
   * @since 10
   */
  textAlign(value: TextAlign): TextInputAttribute;

  /**
   * Text input style
   * @since 9
   */
  /**
   * Text input style
   * @crossplatform
   * @param { TextInputStyle | TextContentStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style(value: TextInputStyle | TextContentStyle): TextInputAttribute;

  /**
   * Define the caret style of the text input
   * @param { CaretStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  caretStyle(value: CaretStyle): TextInputAttribute;

  /**
   * Define the text selected background color of the text input.
   * @param { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectedBackgroundColor(value: ResourceColor): TextInputAttribute;

  /**
   * Define the caret position of the text input.
   * @param { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  caretPosition(value: number): TextInputAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   * @param { boolean }
   * @default true
   * @returns { TextInputAttribute } Returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  enableKeyboardOnFocus(value: boolean): TextInputAttribute;

  /**
   * Define the password icon of the text input.
   * @param { PasswordIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  passwordIcon(value: PasswordIcon): TextInputAttribute;

  /**
   * Define the show error of the text input.
   * @param { string | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showError(value?: string | undefined): TextInputAttribute;

  /**
   * Define the show unit of the text input.
   * @param { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showUnit(value: CustomBuilder): TextInputAttribute;

  /**
   * Define the show underline of the text input.
   * @param { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showUnderline(value: boolean): TextInputAttribute;

  /**
   * Controls whether the selection menu pops up.
   * @param { boolean } value
   * @default false
   * @returns { TextInputAttribute } returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectionMenuHidden(value: boolean): TextInputAttribute;
}

/**
 * Defines TextInput Component.
 * @since 7
 */
/**
 * Defines TextInput Component.
 * @crossplatform
 * @since 10
 */
declare const TextInput: TextInputInterface;

/**
 * Defines TextInput Component instance.
 * @since 7
 */
/**
 * Defines TextInput Component instance.
 * @crossplatform
 * @since 10
 */
declare const TextInputInstance: TextInputAttribute;
