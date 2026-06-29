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
 * The controller for the **TextArea** component inherits from
 * [TextContentControllerBase]{@link TextContentControllerBase}. The APIs involved are as follows:<!--Del--> system API
 * [getText]{@link TextContentControllerBase#getText} and other APIs like<!--DelEnd-->
 * [getTextContentRect]{@link TextContentControllerBase#getTextContentRect},
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount},
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}, [addText]{@link TextContentControllerBase#addText},
 * [deleteText]{@link TextContentControllerBase#deleteText},
 * [getSelection]{@link TextContentControllerBase#getSelection},
 * [clearPreviewText]{@link TextContentControllerBase#clearPreviewText},
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}, and
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextAreaController extends TextContentControllerBase {

  /**
   * A constructor used to create a **TextAreaController** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Sets the position of the caret.
   *
   * @param { number } value - Length from the start of the string to the position where the caret is located.<br>Values
   *     less than 0 are treated as **0**. Values greater than the string length are treated as the string length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * Sets the text selection range and highlights the selected text when the component is focused. This API works only
   * when the value of **selectionStart** is less than that of **selectionEnd**.
   *
   * @param { number } selectionStart - Start position of the text selection range. The start position of text in the
   *     text box is 0.<br>Values less than 0 are treated as **0**. Values greater than the maximum text length are
   *     treated as the maximum text length.<br>
   * @param { number } selectionEnd - End position of the text selection range.<br>Values less than 0 are treated as
   *     **0**. Values greater than the maximum text length are treated as the maximum text length.<br>
   * @param { SelectionOptions } [options] - Configuration options for text selection.<br>Default value:
   *     **MenuPolicy.DEFAULT**<br> [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Exits the editing state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stopEditing(): void;
}

/**
 * Describes the initialization options of the **TextArea** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TextAreaOptions {

  /**
   * Text displayed when there is no input.
   *
   * When only the **placeholder** attribute is set, the text selection handle is still available; the caret stays at
   * the beginning of the placeholder text when the handle is released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Current text input.
   *
   * You are advised to bind the state variable to the text in real time through the **onChange** event, so as to
   * prevent display errors when the component is updated.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * Since API version 18, this parameter supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  text?: ResourceStr;

  /**
   * Text area controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextAreaController;
}

/**
 * The **TextArea** component provides multi-line text input and automatically wraps text to ensure that no line extends
 * beyond the component's width.
 *
 * If the component does not have its height set, it adapts its height to the content. If the component does not have
 * its width set, it stretches to fill the maximum available width.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface TextAreaInterface {

  /**
   *
   * Defines the constructor of TextArea.
   *
   * @param { TextAreaOptions } value - Parameters of the **TextArea** component.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: TextAreaOptions): TextAreaAttribute;
}

/**
 * Multi-line text input box type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextAreaType {

  /**
   * Basic input mode with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NORMAL = 0,

  /**
   * Digit input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NUMBER = 2,

  /**
   * Phone number input mode.
   *
   * In this mode, the following characters are allowed: digits, spaces, plus signs (+), hyphens (-), asterisks (*), and
   * number signs (#); the length is not limited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PHONE_NUMBER = 3,

  /**
   * Email address input mode.
   *
   * This mode accepts only digits, letters, underscores (_), dots (.), and the following special characters: ! # $ % &
   * ' * + - / = ? ^ ` { | } ~ @ (which can only appear once)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EMAIL = 5,

  /**
   * Decimal number input mode.
   *
   * The value can contain digits and one decimal point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  NUMBER_DECIMAL = 12,

  /**
   * URL input mode with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  URL = 13,

  /**
   * One-time code (verification code) input mode with no special restrictions.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ONE_TIME_CODE = 14
}

/**
 * Represents the callback invoked when the Enter key on the soft keyboard is pressed.
 *
 * @param { EnterKeyType } enterKeyType - Type of the Enter key.<br>If the type is **EnterKeyType.NEW_LINE**,
 *     **onSubmit** is not triggered.
 * @param { SubmitEvent } [event] - Submit event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute> {

  /**
   * Sets the placeholder text color.
   *
   * @param { ResourceColor } value - Placeholder text color.<br>The default value follows the theme.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Placeholder text style, including the font size, font weight, font family, and font style.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register custom fonts.
   *
   * @param { Font } value - Placeholder text style.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderFont(value: Font): TextAreaAttribute;

  /**
   * Sets the type of the Enter key.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { EnterKeyType } value - Type of the Enter key.<br>Default value: **EnterKeyType.NEW_LINE**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enterKeyType(value: EnterKeyType): TextAreaAttribute;

  /**
   * Sets the horizontal alignment of the text.
   *
   * Available options are **TextAlign.Start**, **TextAlign.Center**, and **TextAlign.End**. **TextAlign.JUSTIFY** is
   * available since API version 11.
   *
   * The vertical position of the text paragraph can be controlled by the
   * [align]{@link CommonMethod#align(value: Alignment)} attribute, but the horizontal position cannot be controlled by
   * **align** in this component.
   *
   * - **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.
   * - **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.
   * - **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.
   *
   * When **textAlign** is set to **TextAlign.JUSTIFY**, the text in the last line is horizontally aligned with the
   * start edge.
   *
   * @param { TextAlign } value - Horizontal alignment of the text.<br>Default value: **TextAlign.Start**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textAlign(value: TextAlign): TextAreaAttribute;

  /**
   * Sets the color of the caret in the text box.
   *
   * @param { ResourceColor } value - Color of the caret in the text box.<br>Default value: **'#007DFF'**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  caretColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Sets the font color.
   *
   * @param { ResourceColor } value - Font color.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Sets the text size.
   *
   * @param { Length } value - Font size. If **fontSize** is of the number type, the unit fp is used. The default font
   *     size is 16 fp on non-wearable devices and 18 fp on wearable devices. This parameter cannot be set in
   *     percentage.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): TextAreaAttribute;

  /**
   * Sets the font style.
   *
   * @param { FontStyle } value - Font style.<br>Default value: **FontStyle.Normal**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextAreaAttribute;

  /**
   * Sets the font weight. If the value is too large, the text may be clipped depending on the font.
   *
   * @param { number | FontWeight | string } value - Font weight. For the number type, the value range is [100, 900], at
   *     an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the
   *     string type, only strings that represent a number, for example, **"400"**, and the following enumerated values
   *     of **FontWeight** are supported: **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**.<br>
   *     Default value: **FontWeight.Normal**<br>The Resource type is supported since API version 20. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight. For the number type, the value range is
   *     [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font
   *     weight. For the string type, only strings that represent a number, for example, **"400"**, and the following
   *     enumerated values of **FontWeight** are supported: **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
   *     **"medium"**.<br>Default value: **FontWeight.Normal**<br>The Resource type is supported since API version 2
   *     0. [since 20]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextAreaAttribute;

  /**
   * Sets the font family.
   *
   * @param { ResourceStr } value - Font family. Default font: **'HarmonyOS Sans'**<br>To specify multiple fonts,
   *     separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: ResourceStr): TextAreaAttribute;

  /**
   * Sets the display mode when the text is too long.
   *
   * In inline style, the effect of truncating text according to
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} only applies when **textOverflow** is set.
   *
   * Text is clipped at the transition between words. To clip text in the middle of a word, set
   * [wordBreak]{@link WordBreak} to **WordBreak.BREAK_ALL**.
   *
   * If **textOverflow** is set to **TextOverflow.None**, **TextOverflow.Clip**, or **TextOverflow.Ellipsis**, this
   * attribute must be used with [maxLines]{@link TextAreaAttribute#maxLines(value: number)} for the settings to take
   * effect. **TextOverflow.None** produces the same effect as **TextOverflow.Clip**.
   *
   * > **NOTE**
   * >
   * > The **TextArea** component does not support the **TextOverflow.MARQUEE** mode. If this attribute is set to
   * > **TextOverflow.MARQUEE**, **TextOverflow.Clip** is used instead.
   *
   * @param { TextOverflow } value - Display mode when the text is too long.<br>Default value: **TextOverflow.Clip**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textOverflow(value: TextOverflow): TextAreaAttribute;

  /**
   * Sets the indent of the first line text.
   *
   * @param { Dimension } value - Indent of the first line text.<br>Default value: **0**
   * @returns { TextAreaAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): TextAreaAttribute;

  /**
   * Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be
   * displayed. Other inputs are filtered out.
   *
   * For single-character input scenarios, only single-character matching is supported; for multi-character input
   * scenarios (such as pasting), string matching is supported.
   *
   * Starting from API version 11, setting **inputFilter** with a non-empty string invalidates the text filtering effect
   * attached to the [type]{@link TextAreaAttribute#type} API.
   *
   * @param { ResourceStr } value - Regular expression.
   * @param { function } error - Filtered-out content to return when regular expression matching fails. No return when
   *     regular expression matching succeeds.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute;

  /**
   * Sets the caret style.
   *
   * @param { CaretStyle } value - Caret style.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  caretStyle(value: CaretStyle): TextAreaAttribute;

  /**
   * Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.
   *
   * @param { ResourceColor } value - Background color of the selected text.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Called when the Enter key on the soft keyboard is pressed.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): TextAreaAttribute;

  /**
   * Called when the Enter key on the soft keyboard is pressed, providing methods to maintain the editing state of the
   * **TextArea** component upon submission.
   *
   * @param { TextAreaSubmitCallback } callback - Called when the Enter key on the soft keyboard is pressed.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onSubmit(callback: TextAreaSubmitCallback): TextAreaAttribute;

  /**
   * Called when the input in the text box changes.
   *
   * In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText**
   * parameter of [EditableTextOnChangeCallback]{@link EditableTextOnChangeCallback} to ensure it works seamlessly
   * within the preview display scenario.
   *
   * @param { function } callback - Callback invoked when the input in the text box changes. [since 7 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the input in the text box
   *     changes. [since 12]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): TextAreaAttribute;

  /**
   * Called when the text selection changes or the caret position changes during editing.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAreaAttribute;

  /**
   * Called when the text content is scrolled.
   *
   * @param { function } callback - callback of the listened event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): TextAreaAttribute;

  /**
   * Called when the input state changes. The text box is in the editing state when it has the caret placed in it, and
   * is in the non-editing state otherwise.
   *
   * @param { function } callback - Triggered when the text area status changes.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onEditChange(callback: (isEditing: boolean) => void): TextAreaAttribute;

  /**
   * Called when a copy operation is performed.
   *
   * @param { function } callback - Called when using the Clipboard menu.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCopy(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called before a copy operation is performed.
   *
   * **Since**: 26.0.0
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before a copy operation. The callback parameter of
   *     the string type indicates the text content to be copied. The callback parameter of the boolean type indicates
   *     whether the selected text is allowed to be copied. **true**: The text is allowed to be copied. **false**: The
   *     text is not allowed to be copied.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextAreaAttribute;

  /**
   * Called when a copy operation is performed.
   *
   * @param { function } callback - Called when using the Clipboard menu.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCut(callback: (value: string) => void): TextAreaAttribute;

  /**
   * Called before a cut operation is performed.
   *
   * **Since**: 26.0.0
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before a cut operation. The callback parameter of
   *     the string type indicates the text content to be cut. The callback parameter of the boolean type indicates
   *     whether the selected text is allowed to be cut. **true**: The text is allowed to be cut. **false**: The text is
   *     not allowed to be cut.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): TextAreaAttribute;

  /**
   * Called when a paste operation is performed.
   *
   * @param { function } callback - Called when using the Clipboard menu.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onPaste(callback: (value: string, event: PasteEvent) => void): TextAreaAttribute;

  /**
   * Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, only paste and select
   * all operations are supported.
   *
   * If this attribute is set to **CopyOptions.None**, drag and drop operations are not supported.
   *
   * @param { CopyOptions } value - Whether the input text can be copied.<br>Default value: **CopyOptions.LocalDevice**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextAreaAttribute;

  /**
   * Sets whether to pop up the soft keyboard when the **TextArea** component obtains focus in a way other than
   * clicking.
   *
   * Since API version 10, the **TextArea** component is bound to the input method by default when it obtains focus.
   *
   * @param { boolean } value - Whether to pop up the soft keyboard when the **TextArea** component obtains focus in a
   *     way other than clicking.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.<
   *     br>Default value: **true**
   * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): TextAreaAttribute;

  /**
   * Sets the maximum number of characters for text input. By default, there is no maximum number of characters. When
   * the maximum number is reached, no more characters can be entered.
   *
   * @param { number } value - Maximum number of characters for text input.<br> Values less than 0 are treated as the
   *     default value, meaning no limit is set.<br>Default value: **uint32_max** (i.e., 2^32-1)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLength(value: number): TextAreaAttribute;

  /**
   * Sets the character counter displayed when the number of characters entered exceeds the threshold. If the
   * **showCounter** API is not called, the character counter is not displayed by default.
   *
   * **options** can be set only when **value** is set to **true**, in which case a character counter is displayed below
   * the text box. This attribute must be used together with **maxLength**. The character counter is displayed in this
   * format: Number of characters entered/Character limit.
   *
   * It is visible when the number of characters entered is greater than the character limit multiplied by the threshold
   * percentage value. If **options** is not set, the text box border and character counter subscript turn red when the
   * number of characters entered reaches the limit. If **value** is set to **true** and **options** is set, the text
   * box border and character counter subscript turn red and the text box shakes when the number of characters entered
   * reaches the limit, provided that the value of **thresholdPercentage** is valid. If **highlightBorder** is set to
   * **false**, the text box border does not turn red. By default, **highlightBorder** is set to **true**. The character
   * counter is not displayed for text boxes in inline input style.
   *
   * [Example 2: Implementing a Counter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-2-implementing-a-counter)
   * shows the effect of setting **showCounter**.
   *
   * @param { boolean } value - Whether to display the character counter.<br>**true**: Character counter is displayed.
   *     **false**: Character counter is not displayed.
   * @param { InputCounterOptions } options - Configuration options for the character counter. [since 11]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextAreaAttribute;

  /**
   * Sets the polymorphic style of the text box. The inline input style is only available for the
   * **TextAreaType.NORMAL** type.
   *
   * @param { TextContentStyle } value - Polymorphic style of the text box.<br>Default value:
   *     **TextContentStyle.DEFAULT**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style(value: TextContentStyle): TextAreaAttribute;

  /**
   * Sets the scrollbar display mode.
   *
   * @param { BarState } value - Scrollbar display mode.<br>Default value: **BarState.Auto**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barState(value: BarState): TextAreaAttribute;

  /**
   * Sets the color of the scrollbar.
   *
   * @param { ColorMetrics | undefined } thumbColor - Scrollbar color.<br>Default value: **'#66182431'**, displayed as
   *     gray.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(thumbColor: ColorMetrics | undefined): TextAreaAttribute;

  /**
   * Sets whether to hide the system text selection menu.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.<br>**true**: The system text selection
   *     menu does not appear under the following circumstances: clicking the text box cursor, long-pressing the text
   *     box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.<br>**false**:
   *     The system text selection menu appears under the following circumstances: clicking the text box cursor, long-
   *     pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text
   *     box.<br>Default value: **false**
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): TextAreaAttribute;

  /**
   * Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [maxFontSize]{@link TextAreaAttribute#maxFontSize} and [maxLines]{@link TextAreaAttribute#maxLines(value: number)},
   * or layout constraint settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such
   * cases, the [fontSize]{@link TextAreaAttribute#fontSize} attribute is used instead. If **fontSize** is not
   * explicitly set, its default value will apply.
   *
   * @param { number | string | Resource } value - Minimum font size.<br>Unit: [fp]{@link common}
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [minFontSize]{@link TextAreaAttribute#minFontSize} and [maxLines]{@link TextAreaAttribute#maxLines(value: number)},
   * or layout constraint settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the
   * adaptive font sizing feature is disabled. In such cases, the [fontSize]{@link TextAreaAttribute#fontSize} attribute
   * is used instead. If **fontSize** is not explicitly set, its default value will apply.
   *
   * @param { number | string | Resource } value - Maximum font size.<br>Unit: [fp]{@link common}
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Minimum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than
   *     1 is handled as **1**. Abnormal values are ineffective by default.<br>Before use, the **configuration.json**
   *     file and **app.json5** file must be configured in the project. For details, see
   *     [Example 17: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-17-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): TextAreaAttribute;

  /**
   * Sets the maximum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range:
   *     [1, +∞)<br>**NOTE**<br>Values less than 1 are treated as **1**. Abnormal values are ineffective by default.<br>Before use, the **configuration.json** file and **app.json5** file must be configured in the project. For details, see [Example 17: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-17-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): TextAreaAttribute;

  /**
   * Sets how the adaptive height is determined for the text.
   *
   * When this attribute is set to **TextHeightAdaptivePolicy.MAX_LINES_FIRST**, the
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} attribute takes precedence for adjusting the text
   * height. If the **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a
   * font size between [minFontSize]{@link TextAreaAttribute#minFontSize} and
   * [maxFontSize]{@link TextAreaAttribute#maxFontSize} to allow for more content to be shown.
   *
   * If the text box is in inline input style, the font size in the editing state is different from that in the non-
   * editing state.
   *
   * If this attribute is set to **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**, the **minFontSize** attribute takes
   * precedence for adjusting the text height. If the text can fit in one line with the **minFontSize** setting, the
   * text will enlarge to the largest possible font size between **minFontSize** and **maxFontSize**.
   *
   * If this attribute is set to **TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST**, the layout constraints take
   * precedence for adjusting the text height. If the resultant layout is beyond the layout constraints, the text will
   * shrink to a font size between **minFontSize** and **maxFontSize** to respect the layout constraints.
   *
   * @param { TextHeightAdaptivePolicy } value - How the adaptive height is determined for the text.<br>Default value:
   *     **TextHeightAdaptivePolicy.MAX_LINES_FIRST**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAreaAttribute;

  /**
   * Sets the maximum number of lines that can be displayed. When **textOverflow** is set, text is truncated if the
   * content exceeds this limit. When **textOverflow** is not set, in inline style, the text is scrollable if the
   * content exceeds the limit while the text box is focused; **maxLines** does not apply when the text box is not
   * focused. In non-inline style, the text is truncated according to the number of lines.
   *
   * @param { number } value - Maximum number of lines that can be displayed with the inline style in the editing state.
   *     <br>Default value: **3**. In non-inline style, the default value is **UINT32_MAX**.<br>Value range: (0, UINT32
   *     _MAX]
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines(value: number): TextAreaAttribute;

  /**
   * Sets the maximum number of visible lines when used with [textOverflow]{@link TextAreaAttribute#textOverflow}.
   * Excess content can be truncated or made scrollable based on configuration. Without **textOverflow**:
   *
   * - With focus in inline mode: Text exceeding the **maxLines** limit becomes scrollable.
   * - Without focus in inline mode: **maxLines** has no effect.
   *
   * @param { number } lines - Maximum number of lines that can be displayed with the inline style in the editing state.
   *     <br>Default value: **3** with the inline style; **+∞** with the non-inline style, indicating that there is no
   *     maximum number of lines<br>Value range: (0, +∞)
   * @param { MaxLinesOptions } options - Display effect for overflow text.<br>Default value: **MaxLinesMode.CLIP**.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxLines(lines: number, options: MaxLinesOptions): TextAreaAttribute;

  /**
   * Sets the minimum number of lines displayed for the component. When
   * [constraintSize]{@link CommonMethod#constraintSize} is set, the component's final height respects the defined
   * constraints.
   *
   * @param { Optional<number> } lines - Minimum number of lines.<br>Default value: **1**<br>Value range: [1, INT32_MAX]
   *     <br>Values less than 1 are treated as the default value.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  minLines(lines: Optional<number>): TextAreaAttribute;

  /**
   * Sets the word break rule. This attribute does not take effect for the placeholder text.
   *
   * @param { WordBreak } value - Word break rule.<br>Default value: **WordBreak.BREAK_WORD**
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak(value: WordBreak): TextAreaAttribute;

  /**
   * Sets the line break rule. This attribute takes effect only when [wordBreak]{@link TextAreaAttribute#wordBreak} is
   * not **WordBreak.BREAK_ALL**. Hyphens are not supported.
   *
   * @param { LineBreakStrategy } strategy - Line break rule.<br>Default value: **LineBreakStrategy.GREEDY**
   * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextAreaAttribute;

  /**
   * Sets the custom keyboard.
   *
   * When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system
   * input method.
   *
   * The height of the custom keyboard can be set using the **height** property of the custom component's root node,
   * while the width uses the system default value.
   *
   * The custom keyboard is presented by overlaying the original screen, which is not compressed or lifted if avoid mode
   * is not enabled or avoidance is not needed for the text box.
   *
   * The custom keyboard cannot obtain the focus, but it blocks gesture events.
   *
   * By default, the custom keyboard is closed when the input component loses the focus. You can also use the
   * [TextAreaController]{@link TextAreaController}.[stopEditing]{@link TextAreaController#stopEditing} API to close the
   * keyboard.
   *
   * When setting a custom keyboard, you can bind the [onKeyPrelme]{@link CommonMethod#onKeyPreIme} event to prevent
   * input from the physical keyboard.
   *
   * From API version 23, the
   * [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)
   * API can be used to enable the continuation feature for custom keyboards. When switching between custom keyboards,
   * the system changes the keyboard directly without triggering the close and open animations.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { CustomBuilder } value - Custom keyboard. If the value is **undefined**, the custom keyboard is
   *     closed. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard. If the value is **undefined**, the
   *     custom keyboard is closed. [since 22]
   * @param { KeyboardOptions } [options] - Whether to support keyboard avoidance. [since 12]
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextAreaAttribute;

  /**
   * Sets the color, type, and style of the text decorative line.
   *
   * @param { TextDecorationOptions } value - Text decorative line options.<br>Default value: {<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): TextAreaAttribute;

  /**
   * Sets the letter spacing for a text style. Percentage values follow default display behavior. If the value specified
   * is **0**, the default value is used. For the string type, numeric string values with optional units, for example,
   * **"10"** or **"10fp"**, are supported.
   *
   * If the value specified is a negative value, the text is compressed. A negative value too small may result in the
   * text being compressed to 0 and no content being displayed.
   *
   * This setting applies to every character, including those at line endings.
   *
   * @param { number | string | Resource } value - Letter spacing.<br>Unit: [fp]{@link common}
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the line spacing of the text. If the value specified is less than or equal to 0, the default value **0** is
   * used.
   *
   * @param { LengthMetrics } value - Line spacing. Default value: **0**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineSpacing(value: LengthMetrics): TextAreaAttribute;

  /**
   * Text line height. If the value is less than or equal to 0, the line height is not limited and the font size is
   * adaptive.
   *
   * @param { number | string | Resource } value - Text line height. String type. Specifies the length
   *     [pixel unit]{@link common} explicitly, for example, **'10px'**, or provides the length in percentage, for
   *     example, **'100%'**.<br>Note: If no pixel unit is specified, the default unit is fp, in which case **'10'** is
   *     equivalent to 10 fp.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the text box type.
   *
   * Different **TextAreaType** values trigger corresponding keyboard types and enforce input restrictions.
   *
   * @param { TextAreaType } value - Text box type.<br>Default value: **TextAreaType.NORMAL**.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type(value: TextAreaType): TextAreaAttribute;

  /**
   * Sets whether to enable autofill.<!--RP2--><!--RP2End-->
   *
   * <!--RP6--><!--RP6End-->
   *
   * @param { boolean } value - Whether to enable autofill.<br>**true** to enable, **false** otherwise.<br>Default
   *     value: **true**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAutoFill(value: boolean): TextAreaAttribute;

  /**
   * Sets the content type for autofill.<!--RP3--><!--RP3End-->
   *
   * @param { ContentType } contentType - Content type for autofill.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  contentType(contentType: ContentType): TextAreaAttribute;

  /**
   * Sets whether to enable entity recognition for selected text. This API only works on devices that provide text
   * recognition.
   *
   * When **enableSelectedDataDetector** is set to **true**, all entity types are recognized by default.
   *
   * This feature is only effective when [CopyOptions]{@link CopyOptions} is set to **CopyOptions.LocalDevice** or
   * **CopyOptions.CrossDevice**.
   *
   * @param { boolean | undefined } enable - Whether to enable entity recognition for selected text.<br>**true**: Entity
   *     recognition is enabled. **false**: Entity recognition is disabled. Default value: **true**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextAreaAttribute;

  /**
   * Sets the font feature, for example, monospaced digits.
   *
   * Format: normal \| \<feature-tag-value\>
   *
   * Format of **\<feature-tag-value\>**: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple **\<feature-tag-value\>** values, which are separated by commas (,).
   *
   * For example, the input format for monospaced clock fonts is "ss01" on.
   *
   * @param { string } value - Font feature.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextAreaAttribute;

  /**
   * Called when text is about to be inserted.
   *
   * @param { Callback<InsertValue, boolean> } callback - Callback invoked when text is about to be inserted.<br>It
   *     returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not invoked for pre-
   *     edit or candidate word operations.<br>It is available only for system input methods.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextAreaAttribute;

  /**
   * Called when text is inserted.
   *
   * @param { Callback<InsertValue> } callback - Callback triggered when text is inserted.<br>It is available only for
   *     system input methods.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): TextAreaAttribute;

  /**
   * Called when text is about to be deleted.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback invoked when text is about to be deleted.<br>It
   *     returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not invoked for text
   *     preview.<br>It is available only for system input methods.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextAreaAttribute;

  /**
   * Called when text is deleted.
   *
   * @param { Callback<DeleteValue> } callback - Callback triggered when text is deleted.<br>It is available only for
   *     system input methods.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): TextAreaAttribute;

  /**
   * Sets the extended options of the custom context menu on selection, including the text content, icon, and callback.
   *
   * When
   * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or
   *
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * is used to disable system service menu items in the context menu on selection, the disabled menu options will be
   * excluded from the parameter list in the [onCreateMenu]{@link EditMenuOptions.onCreateMenu} callback of
   * **editMenuOptions**.
   *
   * @param { EditMenuOptions } editMenu - Extended options of the custom context menu on selection.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextAreaAttribute;

  /**
   * Sets whether to enable preview text.
   *
   * The preview content is defined as a temporary, uncommitted input state. Currently, the text interception function
   * is not supported.
   *
   * @param { boolean } enable - Whether to enable preview text.<br>**true**: Preview text is enabled. **false**:
   *     Preview text is disabled.<br>Default value: **true**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): TextAreaAttribute;

  /**
   * Specifies whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions**
   * in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.<br>**true** to enable, **false** otherwise.<br>
   *     Default value: **true**
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextAreaAttribute;

  /**
   * Sets the auto-capitalization text mode. This API provides the capability, but actual implementation depends on the
   * input method application.
   *
   * @param { AutoCapitalizationMode } mode - Auto-capitalization mode. The default state is inactive.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextAreaAttribute;

  /**
   * Enables half leading for text, which splits the leading equally between the top and bottom of the line.
   *
   * @param { Optional<boolean> } halfLeading - Whether half leading is enabled. Half leading refers to splitting the
   *     leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is
   *     enabled. **false**: Half leading is not enabled.<br>Default value: **false**
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the ellipsis position. For the settings to work, [textOverflow]{@link TextAreaAttribute#textOverflow} must be
   * set to **TextOverflow.Ellipsis** and [maxLines]{@link TextAreaAttribute#maxLines(value: number)} must be specified.
   * Setting **ellipsisMode** alone does not take effect.
   *
   * **EllipsisMode.START** and **EllipsisMode.CENTER** take effect only when
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} is set to **1**.
   *
   * @param { EllipsisMode } mode - Ellipsis position.<br>Default value: **EllipsisMode.END**
   * @returns { TextAreaAttribute } The attribute of TextArea.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextAreaAttribute;

  /**
   * Sets whether to prevent the back key event from being propagated.
   *
   * @param { Optional<boolean> } isStopped - Whether to prevent the back button press from being propagated to other
   *     components or applications.<br>**true**: Propagation is prevented. **false**: Propagation is allowed.<br>
   *     Default value: **true** The default value is used for abnormal values.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): TextAreaAttribute;

  /**
   * Called when the text content is about to change.
   *
   * This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and
   * **onDidDelete**.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback triggered when the text content is about
   *     to change.<br>**true**: The change is allowed. **false**: The change is canceled.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextAreaAttribute;

  /**
   * Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For
   * details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).
   *
   * @param { Optional<KeyboardAppearance> } appearance - Appearance of the keyboard.<br>Default value:
   *     **KeyboardAppearance.NONE_IMMERSIVE**
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextAreaAttribute;

  /**
   * Sets the text stroke width.
   *
   * @param { Optional<LengthMetrics> } width - Text stroke width. When the unit of **LengthMetrics** is **px**:<br>
   *     Values < 0: solid text. Values > 0: outlined text.<br>Default value: **0** (no stroke)
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextAreaAttribute;

  /**
   * Sets the text stroke color.
   *
   * @param { Optional<ResourceColor> } color - Stroke color. Default value: font color. Invalid values are treated as
   *     the default value.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextAreaAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.<
   *     br>**true** to enable, **false** otherwise.<br>Default value: **false**
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets whether to enable leading punctuation compression.
   *
   * > **NOTE**
   * >
   * > - Leading punctuation is not compressed by default.
   * >
   * > - For the list of punctuation marks that support compression, see the punctuation range at the beginning of a
   * > line in [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable leading punctuation compression.<br>**true**: Leading
   *     punctuation compression is enabled. **false**: Leading punctuation compression is disabled.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Called when the input box is about to be bound to an input method.
   *
   * <!--Del-->
   *
   * Before the input box is bound to an input method, you can use the
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} API of
   * **UIContext** to set the keyboard style.<!--DelEnd-->
   *
   * From API version 22, the [setExtraConfig]{@link IMEClient.setExtraConfig} method of [IMEClient]{@link IMEClient}
   * can be called to set input method extension information. After the input method is bound, it receives this
   * extension information which can be used to implement custom functionality.
   *
   * **IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.
   *
   * @param { Callback<IMEClient> | undefined } callback - Callback invoked when the input box is about to be bound to
   *     an input method.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient> | undefined): TextAreaAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and
   *     last lines.
   * @returns { TextAreaAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextAreaAttribute;

  /**
   * Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when
   * the line height is less than the actual text height. If this API is not set, the line height does not adapt to the
   * actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height is adapted to the actual text height.<br>**true**:
   *     Line height is adapted to the actual text height. **false**: Line height is not adapted to the actual text
   *     height.
   * @returns { TextAreaAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the drag preview style for text being dragged in the multi-line text box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag preview style for text being dragged in the multi-line
   *     text box.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode
   *     and black in dark mode.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAreaAttribute;

  /**
   * Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.<br>If this parameter is set to
   *     **undefined**, the text layout direction follows the component layout direction as defined by
   *     **TextDirection.DEFAULT**.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextAreaAttribute;

  /**
   * Set voice button options.
   *
   * @param { Optional<VoiceButtonOptions> } options - Indicates the options of the voice button.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  voiceButton(options: Optional<VoiceButtonOptions>): TextAreaAttribute;

  /**
   * Sets whether to enable horizontal scrolling when the text is wider than the view. If this attribute is not set,
   * horizontal scrolling is disabled.
   *
   * > **NOTE**
   * >
   * > Horizontal scrolling is not supported in the following scenarios:
   * > [inline mode](docroot://ui/arkts-common-components-text-input.md#inline-mode)<!--Del-->;
   * > [voiceButton](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea-sys.md#voicebutton23) enabled<
   * > !--DelEnd-->.
   *
   * @param { Optional<boolean> } enabled - Whether to enable horizontal scrolling.<br>**true**: Horizontal scrolling is
   *     enabled. **false**: Horizontal scrolling is disabled, and text is wrapped.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  horizontalScrolling(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets whether to enable orphan character optimization during text layout. If this attribute is not set, orphan
   * character optimization is disabled by default.
   *
   * Orphan character optimization improves text layout by more efficiently handling isolated characters (the first
   * character on the last line of a paragraph). When enabled, it adjusts line break points to avoid isolated characters
   * whenever possible. This feature takes effect only when [wordBreak]{@link TextAreaAttribute#wordBreak} is not
   * **BREAK_ALL** and the [locale]{@link @ohos.graphics.text:text.TextStyle} of the first
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} in the text to be laid out is **"zh-Hans"** or **"zh-Hant"**.
   *
   * **Since**: 26.0.0
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan character optimization for the last line of a
   *     paragraph.<br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is
   *     disabled.<br>If the value is **undefined** or **null**, orphan character optimization is disabled.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the join style of the text stroke.
   *
   * **Since**: 26.0.0
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - Join style of the text stroke.<br>If the value is
   *     **undefined**, the join style is **StrokeJoinStyle.MITER_JOIN**. For details, see
   *     [StrokeJoinStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#strokejoinstyle). The text joint
   *     appears as a sharp corner.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextAreaAttribute;

  /**
   * Sets the text shader style, such as linear gradient or radial gradient.
   *
   * > **NOTE**
   * >
   * > When both **shaderStyle** and [strokeWidth]{@link TextAreaAttribute#strokeWidth} are set, **shaderStyle** does
   * > not take effect.
   * >
   * > **shaderStyle** has a higher priority than [fontColor]{@link TextAreaAttribute#fontColor}.
   *
   * **Since**: 26.0.0
   *
   * @param { ShaderStyle | undefined } shader - Text shader style.<br>If the value is **undefined**, no gradient effect
   *     is applied.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): TextAreaAttribute;

  /**
   * Whether to enable punctuation overflow at line ends.
   *
   * @param { Optional<boolean> } enabled - Whether to enable the feature, the default value is false.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the line spacing for text. When **LineSpacingOptions** is not specified, line spacing is applied above the
   * first line and below the last line by default.
   *
   * @param { LengthMetrics } value - Line spacing. Values less than or equal to 0 are treated as the default value
   *     **0**.
   * @param { LineSpacingOptions } options - Line spacing configuration options.<br>Default value:
   *     **{ onlyBetweenLines: false }**.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAreaAttribute;
}

/**
 * The **TextArea** component provides multi-line text input and automatically wraps text to ensure that no line extends
 * beyond the component's width.
 *
 * If the component does not have its height set, it adapts its height to the content. If the component does not have
 * its width set, it stretches to fill the maximum available width.
 *
 * > **NOTE**
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextArea: TextAreaInterface;

/**
 * Defines TextArea Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const TextAreaInstance: TextAreaAttribute;