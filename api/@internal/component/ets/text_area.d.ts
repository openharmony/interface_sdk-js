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
 * Provides the method of switching the cursor position.
 * @since 8
 */
/**
 * Provides the method of switching the cursor position.
 * @crossplatform
 * @since 10
 */
declare class TextAreaController {
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
}

/**
 * Defines the options of TextArea.
 * @since 7
 */
/**
 * Defines the options of TextArea.
 * @crossplatform
 * @since 10
 */
declare interface TextAreaOptions {
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
  controller?: TextAreaController;
}

/**
 * Provides an interface for the multi-line text input component.
 * @since 7
 */
/**
 * Provides an interface for the multi-line text input component.
 * @crossplatform
 * @since 10
 */
interface TextAreaInterface {
  /**
   * Called when writing multiple lines of text.
   * @since 7
   */
  /**
   * Called when writing multiple lines of text.
   * @crossplatform
   * @since 10
   */
  (value?: TextAreaOptions): TextAreaAttribute;
}

/**
 * Defines the attribute functions of TextArea.
 * @since 7
 */
/**
 * Defines the attribute functions of TextArea.
 * @crossplatform
 * @since 10
 */
declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute> {
  /**
   * Called when the color of the placeholder is set.
   * @since 7
   */
  /**
   * Called when the color of the placeholder is set.
   * @crossplatform
   * @since 10
   */
  placeholderColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font property of the placeholder is set.
   * @since 7
   */
  /**
   * Called when the font property of the placeholder is set.
   * @crossplatform
   * @since 10
   */
  placeholderFont(value: Font): TextAreaAttribute;

  /**
   * Called when the alignment of the contents of a multiline text box is set.
   * @since 7
   */
  /**
   * Called when the alignment of the contents of a multiline text box is set.
   * @crossplatform
   * @since 10
   */
  textAlign(value: TextAlign): TextAreaAttribute;

  /**
   * Called when the insertion cursor color is set.
   * @since 7
   */
  /**
   * Called when the insertion cursor color is set.
   * @crossplatform
   * @since 10
   */
  caretColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font color is set.
   * @since 7
   */
  /**
   * Called when the font color is set.
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the font size is set.
   * @since 7
   */
  /**
   * Called when the font size is set.
   * @crossplatform
   * @since 10
   */
  fontSize(value: Length): TextAreaAttribute;

  /**
   * Called when the font style of a font is set.
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   * @crossplatform
   * @since 10
   */
  fontStyle(value: FontStyle): TextAreaAttribute;

  /**
   * Called when the font weight is set.
   * @since 7
   */
  /**
   * Called when the font weight is set.
   * @crossplatform
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): TextAreaAttribute;

  /**
   * Called when the font list of text is set.
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   * @crossplatform
   * @since 10
   */
  fontFamily(value: ResourceStr): TextAreaAttribute;

  /**
   * Called when the inputFilter of text is set.
   * @since 8
   */
  /**
   * Called when the inputFilter of text is set.
   * @crossplatform
   * @since 10
   */
  inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute;

  /**
   * Called when the input changes.
   * @since 7
   */
  /**
   * Called when the input changes.
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when judging whether the text editing change finished.
   * @param {boolean} isEditing - Triggered when the text area status changes. If the value of isEditing is true, text area is in progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onEditChange(callback: (isEditing: boolean) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCopy(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCut(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onPaste(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called when the copy option is set.
   * @since 9
   */
  /**
   * Called when the copy option is set.
   * @crossplatform
   * @since 10
   */
  copyOption(value: CopyOptions): TextAreaAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   * @param { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { TextAreaInterface } Returns the instance of the TextAreaInterface.
   * @crossplatform
   * @since 10
   */
  enableKeyboardOnFocus(value: boolean): TextAreaInterface;

  /**
   * Define the max length content of the text area.
   * @param { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  maxLength(value: number): TextAreaAttribute;

  /**
   * Define show counter of the text area.
   * @param { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  showCounter(value: boolean): TextAreaAttribute;

  /**
   * Define style of the text area.
   * @param { TextContentStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style(value: TextContentStyle): TextAreaAttribute;
}

/**
 * Defines TextArea Component.
 * @since 7
 */
/**
 * Defines TextArea Component.
 * @crossplatform
 * @since 10
 */
declare const TextArea: TextAreaInterface;

/**
 * Defines TextArea Component instance.
 * @since 7
 */
/**
 * Defines TextArea Component instance.
 * @crossplatform
 * @since 10
 */
declare const TextAreaInstance: TextAreaAttribute;
