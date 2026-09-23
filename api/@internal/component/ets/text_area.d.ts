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
 * The controller of the TextArea component inherits from [TextContentControllerBase]{@link TextContentControllerBase}.
 * The involved APIs include [getTextContentRect]{@link TextContentControllerBase#getTextContentRect},
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount},
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}, [addText]{@link TextContentControllerBase#addText},
 * [deleteText]{@link TextContentControllerBase#deleteText},
 * [getSelection]{@link TextContentControllerBase#getSelection},
 * [clearPreviewText]{@link TextContentControllerBase#clearPreviewText},
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder},
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward},
 * [scrollToVisible]{@link TextContentControllerBase#scrollToVisible}<!--Del-->, and the system API
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->.
 *
 * ###### Import Object
 *
 * ```ts
 * controller: TextAreaController = new TextAreaController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full [since 10]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextAreaController extends TextContentControllerBase {
  /**
   * Constructor of TextAreaController.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * Sets the position of the input cursor.
   *
   * @param { number } value - Length of the characters from the start of the string to the cursor position.
   *     <br>If value is less than 0, it is processed as 0. If value is greater than the string length, it is processed
   *     as the string length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

  /**
   * Sets the text selection area and highlights it when the component is focused. The text is selected and highlighted
   * only when selectionStart is less than selectionEnd.
   *
   * @param { number } selectionStart - Start position of the text selection area. The start position of the text in the
   *     text box is 0.
   *     <br>If selectionStart is less than 0, it is processed as 0. If selectionStart is greater than the maximum text
   *     length, it is processed as the maximum text length.
   *     <br>**Atomic service API:** Since API version 11, this API is supported in atomic services.
   * @param { number } selectionEnd - End position of the text selection area.
   *     <br>If selectionEnd is less than 0, it is processed as 0. If selectionEnd is greater than the maximum text
   *     length, it is processed as the maximum text length.
   *     <br>**Atomic service API:** Since API version 11, this API is supported in atomic services.
   * @param { SelectionOptions } [options] - Configuration for the selected text.
   *     <br>Default value: MenuPolicy.DEFAULT
   *     <br>**Atomic service API:** Since API version 12, this API is supported in atomic services. [since 12]
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
 * Initialization parameters of TextArea.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface TextAreaOptions {
  /**
   * Sets the placeholder text displayed when there is no input. After content is entered, the placeholder text is not
   * displayed.
   *
   * When only the placeholder attribute is set, the handle still follows the drag, and after the handle is released,
   * the cursor stays at the beginning of the text.
   *
   * Default value: empty string. When not set, no placeholder text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current text content of the text box. Default value: empty string.
   *
   * It is recommended that you bind the state variable to the text in real time through the onChange event,
   *
   * to avoid abnormal text content in TextArea when the component is refreshed.
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
   * Sets the TextArea controller. When not set, the component uses the internal default controller, but the controller-
   * related methods cannot be called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: TextAreaController;
}

/**
 * The **TextArea** component is a multi-line text input box. When the entered text exceeds the component width, it
 * automatically wraps to the next line. It is suitable for scenarios that require multi-line text input, such as
 * comment input, feedback forms, and content editing.
 *
 * When the height is not set, the component has no default height and adapts its height to the content. When the width
 * is not set, the component fills the maximum width by default.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their earliest version.
 * >
 * > - To set whether to clear the text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
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
   * @param { TextAreaOptions } value - Parameters of the TextArea component. Default value: see TextAreaOptions.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: TextAreaOptions): TextAreaAttribute;
}

/**
 * Type of the multi-line text input box.
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
   * Numeric-only input mode.
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
   * Supports digits, spaces, +, -, *, #, (, and ), with no length limit.
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
   * Supports digits, letters, underscores, decimal points, !, #, $, %, &, ', *, +, -, /, =, ?, ^,
   * `, {, |, }, ~, and the @ character (only one @ character is allowed).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EMAIL = 5,

  /**
   * Numeric input mode with a decimal point.
   *
   * Supports digits and a decimal point (only one decimal point is allowed).
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
   * Verification code input mode with no special restrictions. In this mode, the system input method is pulled up by
   * default when the component gains focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ONE_TIME_CODE = 14
}

/**
 * Called when the Enter key on the soft keyboard is pressed.
 *
 * @param { EnterKeyType } enterKeyType - Type of the Enter key on the soft keyboard.
 *     <br>onSubmit is not triggered when the type is EnterKeyType.NEW_LINE.
 * @param { SubmitEvent } [event] - Submit event, used to obtain the detailed information about the submit event. If
 *     this parameter is not passed in, the detailed information about the submit event cannot be obtained.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported:
 *
 * > **NOTE**
 * >
 * > The default value of the [universal attribute padding]{@link CommonMethod#padding} is
 *
 * {
 *
 * &nbsp;top: '8vp',
 *
 * &nbsp;right: '16vp',
 *
 * &nbsp;bottom: '8vp',
 *
 * &nbsp;left: '16vp'
 *
 * }
 *
 * > Since API version 11, the multi-line text box can be set with .width('auto') so that the component width adapts to
 * > the text width. When adapting, the component width is limited by the constraintSize attribute and the maximum and
 * > minimum widths passed by the parent container. For other usage, see [Sizing]{@link ./common}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute> {
  /**
   * Sets the color of the placeholder text. If this API is not called, the placeholder text color follows the theme by
   * default, which is #ffffff (white) in dark mode and #000000 (black) in light mode.
   *
   * @param { ResourceColor } value - Color of the placeholder text.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Sets the placeholder text style, including the font size, font weight, font family, and font style. If this API is
   * not called, the default placeholder text style is as follows: font size 14fp, font weight FontWeight.Normal, font
   * family HarmonyOS Sans, and font style FontStyle.Normal.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register a custom font.
   *
   * @param { Font } value - Placeholder text style, including the font size, font weight, font family, and font style.
   *     Used to customize the display style of the placeholder text.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  placeholderFont(value: Font): TextAreaAttribute;

  /**
   * Sets the type of the Enter key on the input method. If this API is not called, the default type of the Enter key on
   * the input method is EnterKeyType.NEW_LINE.
   *
   * > **NOTE**
   * >
   * > Since API version 12, this API is supported in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { EnterKeyType } value - Type of the Enter key on the input method.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enterKeyType(value: EnterKeyType): TextAreaAttribute;

  /**
   * Sets the horizontal alignment of the text in the input box. If this API is not called, the text is aligned to the
   * start of the input box by default, that is, TextAlign.Start.
   *
   * TextAlign.Start, TextAlign.Center, and TextAlign.End are supported. Since API version 11, TextAlign.JUSTIFY is also
   * supported.
   *
   * The [align]{@link CommonMethod#align(value: Alignment)} attribute can be used to control the vertical position of
   * the text paragraph. In this component, the align attribute cannot be used to control the horizontal position of the
   * text paragraph.
   *
   * - Alignment.TopStart, Alignment.Top, and Alignment.TopEnd: the content is aligned to the top.
   * - Alignment.Start, Alignment.Center, and Alignment.End: the content is vertically centered.
   * - Alignment.BottomStart, Alignment.Bottom, and Alignment.BottomEnd: the content is aligned to the bottom.
   *
   * When textAlign is set to TextAlign.JUSTIFY, the last line of text is not justified; instead, it is aligned to the
   * start.
   *
   * @param { TextAlign } value - Horizontal alignment of the text in the input box.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  textAlign(value: TextAlign): TextAreaAttribute;

  /**
   * Sets the cursor color of the text box. When both the caretColor attribute and the color parameter in the caretStyle
   * attribute are set, the one set later takes effect. For example, if caretColor is set first and then
   * caretStyle.color, caretStyle.color takes effect; conversely, if caretStyle.color is set first and then caretColor,
   * caretColor takes effect. If this API is not used, the default cursor color of the text box is '#007DFF' (blue).
   *
   * @param { ResourceColor } value - Cursor color of the text box.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  caretColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Sets the font color. If this API is not used, the default font color follows the theme.
   *
   * @param { ResourceColor } value - Font color, used to customize the color of the input text.
   *     <br>**Note:** When [shaderStyle]{@link TextAreaAttribute#shaderStyle} is also set, shaderStyle takes precedence
   *     and fontColor does not take effect.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Sets the font size. If this API is not called, the default font size is 16fp. On Wearable devices, the default font
   * size is 18fp.
   *
   * @param { Length } value - Font size. When fontSize is of the number type, the unit fp is used. Percentage strings
   *     are not supported.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontSize(value: Length): TextAreaAttribute;

  /**
   * Sets the font style. If this API is not called, the default font style is FontStyle.Normal.
   *
   * @param { FontStyle } value - Font style.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontStyle(value: FontStyle): TextAreaAttribute;

  /**
   * Sets the font weight of the text. If the value is too large, the text may be truncated under certain fonts. If this
   * API is not called, the default font weight is FontWeight.Normal.
   *
   * @param { number | FontWeight | string } value - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900 at an interval of 100. A larger value indicates a
   *     heavier font weight. For the string type, only the string form of the number type value is supported, for
   *     example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the
   *     respective enum values in FontWeight. If the value is too large, the text may be truncated under certain fonts.
   *     If the value is out of the valid range or does not meet the interval requirement, 400 is used.
   *     <br>Since API version 20, the Resource type is supported. [since 7 - 19]
   * @param { number | FontWeight | ResourceStr } value - Font weight of the text.
   *     <br>For the number type, the value ranges from 100 to 900 at an interval of 100. A larger value indicates a
   *     heavier font weight. For the string type, only the string form of the number type value is supported, for
   *     example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the
   *     respective enum values in FontWeight. If the value is too large, the text may be truncated under certain fonts.
   *     If the value is out of the valid range or does not meet the interval requirement, 400 is used.
   *     <br>Since API version 20, the Resource type is supported. [since 20]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr): TextAreaAttribute;

  /**
   * Sets the font list.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register a custom font.
   *
   * @param { ResourceStr } value - Font list. The default font is 'HarmonyOS Sans'.
   *     <br>When multiple fonts are used, separate them with commas (','). The fonts take effect in the order of
   *     priority. For example: 'Arial,HarmonyOS Sans'.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fontFamily(value: ResourceStr): TextAreaAttribute;

  /**
   * Sets how the text is displayed when it is too long. If this API is not called, the default display mode for
   * overlong text is TextOverflow.Clip.
   *
   * In inline mode, the truncation effect of [maxLines]{@link TextAreaAttribute#maxLines(value: number)} takes effect
   * only when textOverflow is actively configured. If it is not configured, the text is not truncated by default.
   *
   * Text is truncated by character. For example, English text is truncated by word as the minimum unit. To truncate by
   * letter, set [wordBreak]{@link WordBreak} to WordBreak.BREAK_ALL.
   *
   * When textOverflow is set to TextOverflow.None, TextOverflow.Clip, or TextOverflow.Ellipsis, it must be used
   * together with [maxLines]{@link TextAreaAttribute#maxLines(value: number)}; setting it alone does not take effect.
   * Setting TextOverflow.None has the same effect as TextOverflow.Clip.
   *
   * > **NOTE**
   * >
   * > The TextArea component does not support the TextOverflow.MARQUEE mode. When it is set to TextOverflow.MARQUEE,
   * > the text is displayed as TextOverflow.Clip.
   *
   * @param { TextOverflow } value - Display mode for overlong text.
   *     <br>In inline mode, it takes effect only when actively configured. When set to None, Clip, or Ellipsis, it must
   *     be used together with maxLines; setting it alone does not take effect.
   *     <br>The TextOverflow.MARQUEE mode is not supported. When set to MARQUEE, the text is displayed as Clip.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textOverflow(value: TextOverflow): TextAreaAttribute;

  /**
   * Sets the indentation of the first line of text. If this API is not called, the default indentation of the first
   * line is 0.
   *
   * @param { Dimension } value - Indentation of the first line of text.
   *     <br>Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Value range: greater than or equal to 0. If a negative value is set, the default value is used.
   * @returns { TextAreaAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): TextAreaAttribute;

  /**
   * Sets an input filter through a regular expression. Input that matches the expression is allowed to be displayed,
   * and input that does not match is filtered out.
   *
   * In the single-character input scenario, only single-character matching is supported. In the multi-character input
   * scenario, string matching is supported, for example, pasting.
   *
   * Since API version 11, if inputFilter is set and the input character is not an empty character, the text filtering
   * effect attached to the [type]{@link TextAreaAttribute#type} API becomes invalid.
   *
   * @param { ResourceStr } value - Regular expression.
   * @param { function } error - Callback invoked to return the filtered content when the regular expression matching
   *     fails. No value is returned when the matching succeeds. If this parameter is not passed, the filtered content
   *     is not processed.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute;

  /**
   * Sets the cursor style.
   *
   * @param { CaretStyle } value - Cursor style, used to customize the display style of the cursor, including its width
   *     and color.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  caretStyle(value: CaretStyle): TextAreaAttribute;

  /**
   * Sets the highlight color of the selected text. If the opacity is not set or is set to fully opaque, 20% opacity is
   * used by default.
   *
   * @param { ResourceColor } value - Highlight color of the selected text.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): TextAreaAttribute;

  /**
   * Triggered when the Enter key on the soft keyboard is pressed.
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
   * Triggered when the input content changes.
   *
   * In this callback, if a cursor operation is performed, the developer needs to adjust the cursor logic based on the
   * previewText parameter of [EditableTextOnChangeCallback]{@link EditableTextOnChangeCallback} in the preview text
   * scenario, so as to adapt to the preview text scenario.
   *
   * > **NOTE**
   * >
   * > onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. It can intercept the change by returning false; returning
   * > true allows the change, and then onChange is triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   *
   * @param { function } callback - Callback invoked when the current input text content changes. [since 7 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the current input text content
   *     changes. [since 12]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): TextAreaAttribute;

  /**
   * Triggered when the position of the selected text or the cursor position in editing state changes.
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
   * Triggered when the text content scrolls.
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
   * Triggered when the input state changes. The component is in editing state when a cursor is present, and in non-
   * editing state when no cursor is present.
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
   * Triggered when a copy operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCopy and onCopy form a will/did timing pattern:
   * >
   * > - onWillCopy is triggered before the copy operation. It can intercept the copy operation by returning false;
   * > returning true allows the copy operation, after which onCopy is triggered.
   * >
   * > - onCopy is triggered after the copy operation is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillCopy is used for interception control, and onCopy is used to obtain the
   * > copy result.
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
   * Triggered before a copy operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCopy and onCopy form a will/did timing pattern:
   * >
   * > - onWillCopy is triggered before the copy operation. Returning false intercepts the copy operation; returning
   * > true allows the copy, and then onCopy is triggered.
   * >
   * > - onCopy is triggered after the copy operation is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillCopy is used for interception control, and onCopy is used to obtain the
   * > copy result.
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the copy operation. The callback parameter
   *     is the text content to be copied (string type). The callback returns a boolean value: true indicates that the
   *     text is allowed to be copied, and false indicates that the text is not allowed to be copied.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): TextAreaAttribute;

  /**
   * Triggers this callback when a cut operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCut and onCut form a will/did timing pattern:
   * >
   * > - onWillCut is triggered before the cut operation and can intercept the cut operation by returning **false**;
   * > returning **true** allows the cut, and then onCut is triggered.
   * >
   * > - onCut is triggered after the cut operation is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillCut is used for interception control, and onCut is used to obtain the cut
   * > result.
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
   * Triggered before a cut operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCut and onCut form a will/did timing pattern:
   * >
   * > - onWillCut is triggered before the cut operation. Returning false intercepts the cut operation; returning true
   * > allows the cut, and then onCut is triggered.
   * >
   * > - onCut is triggered after the cut operation is completed and cannot be intercepted.
   * >
   * > - The two can be used together: onWillCut is used for interception control, and onCut is used to obtain the cut
   * > result.
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the cut operation. The callback parameter
   *     is the text content to be cut (string type). The callback returns a boolean value: true indicates that the text
   *     is allowed to be cut, and false indicates that the text is not allowed to be cut.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): TextAreaAttribute;

  /**
   * Triggered when a paste operation is performed.
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
   * Sets whether the entered text can be copied. When CopyOptions.None is set, only paste and select all are supported.
   * If this API is not used, the entered text can be copied by default (CopyOptions.LocalDevice, which supports copying
   * within the device).
   *
   * When CopyOptions.None is set, drag operations are not supported. The
   * [enableSelectedDataDetector]{@link TextAreaAttribute#enableSelectedDataDetector} feature takes effect only when
   * CopyOptions is CopyOptions.LocalDevice or CopyOptions.CROSS_DEVICE.
   *
   * @param { CopyOptions } value - Whether the entered text can be copied.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): TextAreaAttribute;

  /**
   * Sets whether to actively pull up the soft keyboard when the **TextArea** component gains focus by means other than
   * tapping. If this API is not called, the soft keyboard is actively pulled up by default when the component gains
   * focus by means other than tapping.
   *
   * Since API version 10, the input method is bound by default when the component gains focus.
   *
   * @param { boolean } value - Whether to actively pull up the soft keyboard when the component gains focus by means
   *     other than tapping.
   *     <br>The value **true** means to actively pull up the soft keyboard, and **false** means the opposite.
   * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): TextAreaAttribute;

  /**
   * Sets the maximum number of characters that can be entered. When the maximum number of characters is reached, no
   * more characters can be entered. If this API is not called, no maximum character limit is set by default.
   *
   * @param { number } value - Maximum number of characters that can be entered.
   *     <br>Value range: [0, UINT32_MAX]. If value is less than 0, no limit is set.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLength(value: number): TextAreaAttribute;

  /**
   * Sets whether to display the counter when the number of characters entered through InputCounterOptions exceeds the
   * threshold. If showCounter is not called, the counter is not displayed by default.
   *
   * The options can be set only when the value of the parameter **value** is **true**. To enable the counter function
   * of the text box, this API must be used together with **maxLength** (which sets the maximum character limit). If
   * **maxLength** is not set, the counter function does not take effect. The character counter displays the current
   * number of entered characters / the maximum number of characters that can be entered.
   *
   * When the number of entered characters is greater than the maximum number of characters multiplied by the percentage
   * value, the character counter is displayed. If the user does not set InputCounterOptions when setting the counter,
   * the border and the counter subscript turn red when the current number of entered characters reaches the maximum
   * number of characters. If the user sets both the parameter **value** to **true** and InputCounterOptions, when the
   * value of **thresholdPercentage** is within the valid range and the number of entered characters exceeds the maximum
   * number of characters, the border and the counter subscript turn red and the box shakes. The counter displays a red
   * border by default. When **highlightBorder** is set to **false**, the red border is not displayed. In inline mode,
   * the character counter is not displayed.
   *
   * [Example 2 (Setting the Counter)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-2-setting-the-counter)
   * shows the effect of setting showCounter.
   *
   * @param { boolean } value - Whether to display the counter.
   *     <br>**true** indicates that the counter is displayed, and **false** indicates that it is not displayed.
   * @param { InputCounterOptions } options - Configuration options of the counter, used to customize the display
   *     threshold (**thresholdPercentage**) and the red border (**highlightBorder**) of the counter. If this parameter
   *     is not passed, the counter is displayed when the number of entered characters reaches the maximum number of
   *     characters, and the border and the counter subscript turn red by default. [since 11]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  showCounter(value: boolean, options?: InputCounterOptions): TextAreaAttribute;

  /**
   * Sets the polymorphic style of the text box. The inline input style is supported only for the TextAreaType.NORMAL
   * type. If this API is not called, the default polymorphic style of the text box is TextContentStyle.DEFAULT.
   *
   * @param { TextContentStyle } value - Polymorphic style of the text box.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  style(value: TextContentStyle): TextAreaAttribute;

  /**
   * Sets the display mode of the scrollbar of the text box. If this API is not called, the display mode of the
   * scrollbar of the text box is BarState.Auto by default.
   *
   * @param { BarState } value - Display mode of the scrollbar of the text box.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  barState(value: BarState): TextAreaAttribute;

  /**
   * Sets the color of the scrollbar. If this API is not called, the default scrollbar color is '#66182431', which is
   * dark gray (with 40% opacity) and appears gray.
   *
   * @param { ColorMetrics | undefined } thumbColor - Color of the scrollbar.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  scrollBarColor(thumbColor: ColorMetrics | undefined): TextAreaAttribute;

  /**
   * Sets whether to hide the system text selection menu. If this API is not called, the system text selection menu is
   * displayed by default.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.
   *     <br>When set to **true**, the system text selection menu is not displayed when the input box is clicked to
   *     place the cursor, long-pressed, double-tapped, triple-tapped, or right-clicked.
   *     <br>When set to **false**, the system text selection menu is displayed.
   *     <br>**Note:** When set to **true**, the menu is not displayed even if **options** in
   *     [setTextSelection]{@link TextAreaController#setTextSelection} is set to **MenuPolicy.SHOW**.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): TextAreaAttribute;

  /**
   * Sets the minimum font size for the text. The string type supports the string form of the value of the number type,
   * and can carry a unit, for example, "10" or "10fp".
   *
   * This attribute must be used together with [maxFontSize]{@link TextAreaAttribute#maxFontSize} and
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} or a layout size limit. Setting it alone does not take
   * effect.
   *
   * When the adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When minFontSize is less than or equal to 0, the adaptive font size does not take effect. In this case, the value
   * of the [fontSize]{@link TextAreaAttribute#fontSize} attribute takes effect, or its default value takes effect if
   * fontSize is not set.
   *
   * @param { number | string | Resource } value - Minimum font size for the text.
   *     <br>This attribute must be used together with maxFontSize and maxLines or a layout size limit. Setting it alone
   *     does not take effect.
   *     <br>Value range: (0, maxFontSize]. If the value is out of range, the value of the fontSize attribute takes
   *     effect.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the maximum font size for text display. The string type supports the string form of the value that the number
   * type accepts, and can carry a unit, for example, "10" or "10fp".
   *
   * It must be used together with [minFontSize]{@link TextAreaAttribute#minFontSize} and
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} or a layout size limit. Setting it alone does not take
   * effect.
   *
   * When adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When maxFontSize is less than or equal to 0, or maxFontSize is less than minFontSize, adaptive font size does not
   * take effect. In this case, the value of the [fontSize]{@link TextAreaAttribute#fontSize} attribute takes effect; if
   * fontSize is not set, its default value takes effect.
   *
   * @param { number | string | Resource } value - Maximum font size for text display.
   *     <br>It must be used together with minFontSize and maxLines or a layout size limit. Setting it alone does not
   *     take effect.
   *     <br>Value range: (0, +∞). If the value is out of range, the value of the fontSize attribute takes effect.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets how the text height is adapted. If this API is not called, the text height is adapted by default in the manner
   * of TextHeightAdaptivePolicy.MAX_LINES_FIRST.
   *
   * When this parameter is set to TextHeightAdaptivePolicy.MAX_LINES_FIRST, the
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} attribute is preferentially used to adjust the text
   * height. If the layout size obtained by using the maxLines attribute exceeds the layout constraint, the font size is
   * reduced within the range of [minFontSize]{@link TextAreaAttribute#minFontSize} and
   * [maxFontSize]{@link TextAreaAttribute#maxFontSize} to display more text.
   *
   * When the component is set to the inline input style, the font size in the editing state may differ from that in the
   * non-editing state.
   *
   * When this parameter is set to TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST, the minFontSize attribute is
   * preferentially used to adjust the text height. If the text can be laid out in a single line by using the
   * minFontSize attribute, the font size is increased within the range of minFontSize and maxFontSize, and the largest
   * possible font size is used.
   *
   * When this parameter is set to TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST, the layout constraint is
   * preferentially used to adjust the text height. If the layout size exceeds the layout constraint, the font size is
   * reduced within the range of minFontSize and maxFontSize to meet the layout constraint.
   *
   * @param { TextHeightAdaptivePolicy } value - How the text height is adapted.
   *     <br>MAX_LINES_FIRST preferentially uses maxLines to adjust the height, and reduces the font size within the
   *     range of minFontSize and maxFontSize when the layout constraint is exceeded; MIN_FONT_SIZE_FIRST preferentially
   *     uses minFontSize to adjust the height; LAYOUT_CONSTRAINT_FIRST preferentially uses the layout constraint to
   *     adjust the height, and reduces the font size when the constraint is exceeded.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAreaAttribute;

  /**
   * Sets the maximum number of lines that can be displayed for the text. You can optionally set the behavior when the
   * text exceeds the maximum number of lines to scrolling or truncation. If this API is not called, the maximum number
   * of lines that can be displayed for the text is 3 by default in the inline input style editing state, and the
   * default value is UINT32_MAX in non-inline mode.
   *
   * > **NOTE**
   * >
   * > When textOverflow is configured:
   * >
   * > - maxLines specifies the maximum number of lines that can be displayed for the text, and the excess part is
   * > directly truncated.
   * >
   * > When textOverflow is not configured:
   * >
   * > - Inline mode (focused state): when the content exceeds maxLines, the text can be scrolled for display.
   * >
   * > - Inline mode (unfocused state): maxLines does not take effect.
   * >
   * > - Non-inline mode: the text is truncated by the number of lines specified by maxLines.
   *
   * @param { number } value - Maximum number of lines that can be displayed for the text in the inline input style
   *     editing state.
   *     <br>When textOverflow is configured, the excess part is truncated. When textOverflow is not configured, the
   *     text can be scrolled for display in the focused state in inline mode, and this parameter does not take effect
   *     in the unfocused state. In non-inline mode, the text is truncated by line.
   *     <br>Value range: (0, UINT32_MAX]. If 0 or a negative number is passed in, the default value is used.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maxLines(value: number): TextAreaAttribute;

  /**
   * Sets the minimum number of lines. The component height is automatically adjusted based on lines to ensure that the
   * displayed height is not lower than the height corresponding to lines. If
   * [constraintSize]{@link CommonMethod#constraintSize} is set, the final displayed height of the component is within
   * the constraints of [constraintSize]{@link CommonMethod#constraintSize}. If this API is not called, the default
   * minimum number of lines is 1.
   *
   * @param { Optional<number> } lines - Minimum number of lines.
   *     <br>Value range: [1, INT32_MAX]
   *     <br>If the value of lines is less than 1, the default value is used.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  minLines(lines: Optional<number>): TextAreaAttribute;

  /**
   * Sets the maximum number of lines that can be displayed for the text, and optionally sets the behavior when the
   * maximum number of lines is exceeded to scrolling or truncation. If this API is not called, the maximum number of
   * lines that can be displayed for the text in the editing state of the inline input style is 3 by default, and the
   * default value in non-inline mode is UINT32_MAX.
   *
   * > **NOTE**
   * >
   * > When textOverflow is configured:
   * >
   * > - maxLines specifies the maximum number of lines that can be displayed for the text, and the excess part is
   * > directly truncated.
   * >
   * > When textOverflow is not configured:
   * >
   * > - Inline mode (focused state): when the content exceeds maxLines, the text can be scrolled for display.
   * >
   * > - Inline mode (unfocused state): maxLines does not take effect.
   * >
   * > - Non-inline mode: the text is truncated by the number of lines specified by maxLines.
   *
   * @param { number } lines - Maximum number of lines that can be displayed for the text in the editing state of the
   *     inline input style.
   *     <br>When textOverflow is configured, the excess part can be configured to be truncated or scrolled. When
   *     textOverflow is not configured, the text can be scrolled for display in the focused state of inline mode, and
   *     this parameter does not take effect in the unfocused state. In non-inline mode, the text is truncated by line.
   *     <br>Value range: (0, +∞). If 0 or a negative number is passed in, the default value is used.
   * @param { MaxLinesOptions } options - Display effect when the text is too long.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maxLines(lines: number, options: MaxLinesOptions): TextAreaAttribute;

  /**
   * Sets the text line breaking rule. This attribute does not take effect on placeholder text. When it is set to
   * WordBreak.BREAK_ALL, the [lineBreakStrategy]{@link TextAreaAttribute#lineBreakStrategy} attribute does not take
   * effect, and the [orphanCharOptimization]{@link TextAreaAttribute#orphanCharOptimization} feature does not take
   * effect either. If this API is not called, the default text line breaking rule is WordBreak.BREAK_WORD.
   *
   * @param { WordBreak } value - Text line breaking rule.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  wordBreak(value: WordBreak): TextAreaAttribute;

  /**
   * Sets the line breaking rule. This attribute applies to scenarios where the line breaking effect of multi-line text
   * needs to be optimized. For example, the GREEDY strategy is suitable for fast typesetting of general text, the
   * HIGH_QUALITY strategy is suitable for formal documents that require high typesetting quality, and the BALANCED
   * strategy is suitable for display scenarios where the width of each line needs to be balanced. This attribute takes
   * effect only when [wordBreak]{@link TextAreaAttribute#wordBreak} is not equal to WordBreak.BREAK_ALL, and
   * hyphenation is not supported. If this attribute is not set, the default line breaking rule is
   * LineBreakStrategy.GREEDY.
   *
   * @param { LineBreakStrategy } strategy - Line breaking rule of the text. This attribute takes effect only when
   *     [wordBreak]{@link TextAreaAttribute#wordBreak} is not equal to WordBreak.BREAK_ALL, and hyphenation is not
   *     supported.
   * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineBreakStrategy(strategy: LineBreakStrategy): TextAreaAttribute;

  /**
   * Sets a custom keyboard.
   *
   * When a custom keyboard is set, the input box does not open the system input method after being activated. Instead,
   * it loads the specified custom component.
   *
   * The height of the custom keyboard can be set through the **height** attribute of the root node of the custom
   * component, while the width uses the system default value.
   *
   * The custom keyboard is presented by overlaying the original UI. When the avoidance mode is not enabled or the area
   * where the input box is located is not covered by the keyboard, the original UI of the application is not compressed
   * or lifted.
   *
   * The custom keyboard cannot obtain focus, but it intercepts gesture events.
   *
   * By default, the custom keyboard is closed when the input control loses focus. Developers can also close the
   * keyboard through the [TextAreaController]{@link TextAreaController}.
   * [stopEditing]{@link TextAreaController#stopEditing} method.
   *
   * When a custom keyboard is set, you can bind the [onKeyPreIme]{@link CommonMethod#onKeyPreIme} event to avoid input
   * from a physical keyboard.
   *
   * Since API version 23, the custom keyboard can enable continuation through
   * [setCustomKeyboardContinueFeature]{@link @ohos.arkui.UIContext:UIContext.setCustomKeyboardContinueFeature}. When
   * switching to another custom keyboard, the switch is performed directly without triggering the keyboard closing and
   * opening animations.
   *
   * > **NOTE**
   * >
   * > This API cannot be called in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { CustomBuilder } value - Custom keyboard. When the value is set to undefined, the custom keyboard is
   *     closed. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard. When the value is set to
   *     undefined, the custom keyboard is closed. [since 22]
   * @param { KeyboardOptions } [options] - Whether the custom keyboard supports the avoidance feature. If this
   *     parameter is not passed, the avoidance feature is not supported by default. [since 12]
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextAreaAttribute;

  /**
   * Sets the type, style, and color of the text decoration line. If this API is not called, the default text decoration
   * line object is
   *
   * {
   *
   * &nbsp;type:&nbsp;TextDecorationType.None,
   *
   * &nbsp;color:&nbsp;Color.Black,
   *
   * &nbsp;style:&nbsp;TextDecorationStyle.SOLID,
   *
   * &nbsp;thicknessScale:&nbsp;1.0
   *
   * }
   *
   * @param { TextDecorationOptions } value - Text decoration line object.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): TextAreaAttribute;

  /**
   * Sets the character spacing of the text. When this value is set to a percentage, the default value is used. When
   * this value is set to 0, the default value is used. The string type supports the string form of a number value, with
   * an optional unit, for example, "10" and "10fp". If this API is not called, the default character spacing is 0fp.
   *
   * When the value is negative, the text is compressed. If the negative value is too small, the component content area
   * is compressed to 0, resulting in no content being displayed.
   *
   * This attribute takes effect on each character, including the character at the end of a line.
   *
   * @param { number | string | Resource } value - Character spacing of the text.
   *     <br>When set to a percentage, the default value is used; when set to 0, the default value is used; a negative
   *     value compresses the text, and if it is too small, no content may be displayed.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the line spacing of the text. If the value is not greater than 0, the default value 0 is used. If this API is
   * not called, the default line spacing of the text is 0.
   *
   * @param { LengthMetrics } value - Line spacing of the text.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineSpacing(value: LengthMetrics): TextAreaAttribute;

  /**
   * Sets the line spacing of the text. When LineSpacingOptions is not configured, line spacing is applied by default
   * above the first line and below the last line. When this API is not used, the default line spacing of the text is 0.
   *
   * @param { LengthMetrics } value - Line spacing of the text. If the value is not greater than 0, the default value 0
   *     is used.
   * @param { LineSpacingOptions } options - Line spacing configuration options.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAreaAttribute;

  /**
   * Sets the line height of the text. If the value is not greater than 0, the line height is not limited and adapts to
   * the font size.
   *
   * @param { number | string | Resource } value - Line height of the text. A [pixel unit]{@link ./common} must be
   *     explicitly specified, for example, '10px'. A percentage string can also be set, for example, '100%'.
   *     <br>**Note:** If no pixel unit is specified, the default unit fp is used. For example, '10' is equivalent to 1
   *     0.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): TextAreaAttribute;

  /**
   * Sets the input box type. If this API is not called, the default input box type is TextAreaType.NORMAL.
   *
   * Different TextAreaType values bring up the corresponding keyboard type and restrict the input. Since API version 1
   * 1, when [inputFilter]{@link TextAreaAttribute#inputFilter} is set and the input character is not an empty
   * character, the text filtering effect attached to the type API becomes invalid.
   *
   * @param { TextAreaType } value - Input box type.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type(value: TextAreaType): TextAreaAttribute;

  /**
   * Sets whether to enable autofill. <!--RP2--><!--RP2End-->If this API is not used to set the value, autofill is
   * enabled by default.
   *
   * <!--RP6--><!--RP6End-->
   *
   * @param { boolean } value - Whether to enable autofill.
   *     <br>The value **true** means to enable autofill, and **false** means the opposite.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAutoFill(value: boolean): TextAreaAttribute;

  /**
   * Sets the autofill type.<!--RP3--><!--RP3End-->
   *
   * @param { ContentType } contentType - Autofill type, which specifies the type of content to be autofilled in the
   *     input box so that the system can provide correct autofill suggestions.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  contentType(contentType: ContentType): TextAreaAttribute;

  /**
   * Sets whether to perform entity recognition on the selected text. This API depends on the text recognition
   * capability of the underlying device; otherwise, the setting does not take effect. If this API is not called, entity
   * recognition on the selected text is enabled by default.
   *
   * When enableSelectedDataDetector is set to true, all types of entities are recognized by default.
   *
   * After this feature is enabled, entities such as email addresses, phone numbers, URLs, dates, and addresses in the
   * selection can be recognized, and the corresponding AI menu items are displayed in the text selection menu. The AI
   * menu feature is enabled by default.
   *
   * When the AI menu feature is enabled, after text is selected in the component, the text selection menu can display
   * the corresponding AI menu items, including url (open link), email (create email), phoneNumber (call), address (
   * navigate to), and dateTime (create schedule) in [TextMenuItemId]{@link TextMenuItemId}.
   *
   * When the AI menu takes effect, the selection must contain exactly one complete AI entity for the corresponding
   * option to be displayed. This menu item does not appear together with the askAI menu item in
   * [TextMenuItemId]{@link TextMenuItemId}.
   *
   * This feature takes effect only when [CopyOptions]{@link CopyOptions} is CopyOptions.LocalDevice or
   * CopyOptions.CROSS_DEVICE.
   *
   * @param { boolean | undefined } enable - Whether to perform entity recognition on the selected text.
   *     <br>true: enables recognition; false: disables recognition.
   *     <br>This feature takes effect only when [CopyOptions]{@link CopyOptions} is CopyOptions.LocalDevice or
   *     CopyOptions.CROSS_DEVICE.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): TextAreaAttribute;

  /**
   * Sets the font feature, such as monospaced digits.
   *
   * The format is: normal \| \<feature-tag-value\>
   *
   * The format of \<feature-tag-value\> is: \<string\> \[ \<integer\> \| on \| off ]
   *
   * There can be multiple \<feature-tag-value\>, separated by commas (,).
   *
   * For example, the input format for monospaced digits is: "ss01" on.
   *
   * @param { string } value - Font feature, used to set the special display effect of text, such as monospaced digits.
   *     The format is: normal | <feature-tag-value>.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): TextAreaAttribute;

  /**
   * Triggers this callback when text is about to be inserted.
   *
   * > **NOTE**
   * >
   * > onWillInsert and onDidInsert form a will/did timing pattern:
   * >
   * > - onWillInsert is triggered before the insertion operation. Returning false intercepts the insertion; returning
   * > true allows the insertion, after which onDidInsert is triggered.
   * >
   * > - onDidInsert is triggered after the insertion is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillInsert is used for interception control, and onDidInsert is used to obtain
   * > the insertion result.
   *
   * @param { Callback<InsertValue, boolean> } callback - Callback invoked when text is about to be inserted.
   *     <br>Returning true indicates normal insertion, and returning false indicates no insertion.
   *     <br>This callback is not triggered during preview and candidate word operations.
   *     <br>It is supported only in the scenario of input through the system input method.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): TextAreaAttribute;

  /**
   * Triggered when input is completed.
   *
   * > **NOTE**
   * >
   * > onWillInsert and onDidInsert form a will/did timing pattern:
   * >
   * > - onWillInsert is triggered before the insertion operation and can intercept the insertion by returning false;
   * > returning true allows the insertion, after which onDidInsert is triggered.
   * >
   * > - onDidInsert is triggered after the insertion is completed and cannot intercept it.
   * >
   * > - The two can be used together: onWillInsert is used for interception control, and onDidInsert is used to obtain
   * > the insertion result.
   *
   * @param { Callback<InsertValue> } callback - Callback invoked when input is completed.
   *     <br>Only supported for input from the system input method.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): TextAreaAttribute;

  /**
   * Triggered when a deletion is about to occur.
   *
   * Tapping the clear button does not trigger the onWillDelete callback.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onWillDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the deletion operation. Returning false intercepts the deletion; returning
   * > true allows the deletion, after which onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillDelete is used for interception control, and onDidDelete is used to obtain
   * > the deletion result.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback invoked when a deletion is about to occur.
   *     <br>Returning true indicates a normal deletion, and returning false indicates that the deletion is not
   *     performed.
   *     <br>This callback is not triggered during preview and candidate word operations. Tapping the clear button does
   *     not trigger the onDidDelete callback.
   *     <br>Only supported in the scenario where the system input method is used.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): TextAreaAttribute;

  /**
   * Triggered when the deletion is complete.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onDidDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the deletion operation. Returning false intercepts the deletion operation;
   * > returning true allows the deletion, and then onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept the operation.
   * >
   * > - The two can be used together: onWillDelete is used for interception control, and onDidDelete is used to obtain
   * > the deletion result.
   *
   * @param { Callback<DeleteValue> } callback - Callback invoked when the deletion is complete.
   *     <br>Tapping the clear button does not trigger the onDidDelete callback.
   *     <br>Only supported in the scenario where the system input method is used for input.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): TextAreaAttribute;

  /**
   * Triggered before the input box is about to attach the input method.
   *
   * <!--Del-->
   *
   * Before the input box is about to attach the input method, you can set the keyboard style through the system API
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} of `UIContext`. <!
   * --DelEnd-->
   *
   * Since API version 22, you can call [setExtraConfig]{@link IMEClient.setExtraConfig} of [IMEClient]{@link IMEClient}
   * to set the extended information of the input method. After the input method is attached successfully, the input
   * method receives the extended information and can implement custom functions based on it.
   *
   * IMEClient is valid only during the execution of onWillAttachIME and cannot be called asynchronously.
   *
   * @param { Callback<IMEClient> | undefined } callback - Triggered before the input box is about to attach the input
   *     method.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient> | undefined): TextAreaAttribute;

  /**
   * Sets custom extended menu items, allowing users to set the text content, icon, and callback of the extended items.
   *
   * When [disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems} or
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems} is
   * called to block the system service menu items in the text selection menu, the input parameter list of the callback
   * [onCreateMenu]{@link EditMenuOptions.onCreateMenu} in editMenuOptions does not include the blocked menu options.
   *
   * @param { EditMenuOptions } editMenu - Extended menu options used to customize the extended items of the text
   *     selection menu, allowing you to set the text content, icon, and callback of the extended items.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): TextAreaAttribute;

  /**
   * Sets whether to enable input preview text. If this API is not called, input preview text is enabled by default.
   *
   * Preview text is defined as a temporary text state, and text interception is not supported for it.
   *
   * @param { boolean } enable - Whether to enable input preview text.
   *     <br>The value **true** means to enable it, and **false** means to disable it.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): TextAreaAttribute;

  /**
   * Sets the text mode of the auto-capitalization mode. This API only provides the interface capability, and the
   * specific implementation is subject to the input method application. If this API is not used to set the mode, no
   * capitalization conversion takes effect by default, and the specific implementation is subject to the input method
   * application.
   *
   * @param { AutoCapitalizationMode } mode - Auto-capitalization mode, used to set the capitalization conversion rule
   *     of the input method. The specific implementation is subject to the input method application.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): TextAreaAttribute;

  /**
   * Sets whether to enable haptic feedback. If this attribute is not used, haptic feedback is enabled by default.
   *
   * When haptic feedback is enabled, you need to set the **requestPermissions** field in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) of the project to enable the vibration
   * permission. The configuration is as follows:
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.
   *     <br>The value **true** means to enable haptic feedback, and **false** means the opposite.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): TextAreaAttribute;

  /**
   * Sets the style of the keyboard that is pulled up for the input box. This takes effect only after the input method
   * adapts to it. For details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md). If
   * this API is not called, the default keyboard style is KeyboardAppearance.NONE_IMMERSIVE.
   *
   * @param { Optional<KeyboardAppearance> } appearance - Keyboard style.
   *     <br>When set to KeyboardAppearance.NONE_IMMERSIVE, a non-immersive keyboard is displayed; when set to
   *     KeyboardAppearance.IMMERSIVE, an immersive keyboard is displayed.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextAreaAttribute;

  /**
   * Sets the minimum font scale factor of the text.
   *
   * @param { Optional<number | Resource> } scale - Minimum font scale factor of the text. The value **undefined** is
   *     supported.
   *     <br>Value range: [0, 1]
   *     <br>**Note:**
   *     <br>If the value is less than 0, it is processed as 0. If the value is greater than 1, it is processed as 1. An
   *     invalid value does not take effect by default.
   *     <br>Before using this API, configure the configuration.json file and app.json5 file in the project. For
   *     details, see
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
   * Sets whether to block the back key event from being passed to other components or the system. When set to true,
   * TextArea intercepts the back key event and does not pass it to other components. When set to false, the back key
   * event is passed to other components or the system as usual. This applies to scenarios where custom back key
   * behavior is required, such as intercepting the back operation and displaying a confirmation prompt when a form has
   * unsaved changes, custom navigation flows, and games or special interaction scenarios where back key control needs
   * to be taken over. If this API is not called, the back key is blocked by default.
   *
   * @param { Optional<boolean> } isStopped - Whether to block the back key.
   *     <br>true means to block it, and false means not to block it. The default value is used for an invalid value.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the text to be vertically centered within a line, evenly distributing the line spacing to the top and bottom
   * of the line. If this API is not called, the line spacing is not evenly distributed by default.
   *
   * @param { Optional<boolean> } halfLeading - Sets whether the text is vertically centered.
   *     <br>The value **true** means to evenly distribute the line spacing to the top and bottom of the line, and
   *     **false** means the opposite.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the ellipsis position. The ellipsisMode attribute must be used together with
   * [textOverflow]{@link TextAreaAttribute#textOverflow} set to TextOverflow.Ellipsis and
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)}. Setting the ellipsisMode attribute alone does not take
   * effect. If this API is not called, the default ellipsis position is EllipsisMode.END.
   *
   * EllipsisMode.START and EllipsisMode.CENTER take effect only when
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)} is set to 1.
   *
   * @param { EllipsisMode } mode - Ellipsis position. It must be used together with
   *     [textOverflow]{@link TextAreaAttribute#textOverflow} set to TextOverflow.Ellipsis and
   *     [maxLines]{@link TextAreaAttribute#maxLines(value: number)}. Setting it alone does not take effect.
   *     <br>EllipsisMode.START and EllipsisMode.CENTER take effect only when maxLines is set to 1.
   * @returns { TextAreaAttribute } The attribute of TextArea.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  ellipsisMode(mode: Optional<EllipsisMode>): TextAreaAttribute;

  /**
   * Sets the maximum font scale factor of the text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale factor of the text. The undefined type is
   *     supported.
   *     <br>Value range: [1, +∞)
   *     <br>**Note:**
   *     <br>If the value is less than 1, it is processed as 1. Abnormal values do not take effect by default.
   *     <br>Before using this API, configure the configuration.json file and app.json5 file in the project. For
   *     details, see
   *     [Example 17: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-17-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): TextAreaAttribute;

  /**
   * Triggered when the text content is about to change.
   *
   * > **NOTE**
   * >
   * > - The callback timing of onWillChange is later than that of onWillInsert and onWillDelete, and earlier than that
   * > of onDidInsert and onDidDelete.
   * >
   * > - onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. You can return false to intercept the change; returning true
   * > allows the change, and then onChange is triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept the change.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   * > The callback timing of onWillChange is later than that of onWillInsert and onWillDelete, and earlier than that of
   * > onDidInsert and onDidDelete.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback invoked when the text content is about to
   *     change.
   *     <br>If true is returned, the change is applied normally. If false is returned, the current trigger is
   *     intercepted.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextAreaAttribute;

  /**
   * Triggered when the Enter key on the soft keyboard is pressed. The callback parameter provides a method for keeping
   * the TextArea in the editing state.
   *
   * @param { TextAreaSubmitCallback } callback - Callback invoked when the Enter key on the soft keyboard is pressed.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onSubmit(callback: TextAreaSubmitCallback): TextAreaAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters. If this API is not called,
   * automatic spacing between Chinese and Western characters is disabled by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.
   *     <br>The value **true** means to enable automatic spacing, and **false** means to disable it.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the width of the text stroke. When both the strokeWidth attribute and
   * [shaderStyle]{@link TextAreaAttribute#shaderStyle} are set, shaderStyle does not take effect. If this API is not
   * called, the default value is 0, and no stroke is applied.
   *
   * @param { Optional<LengthMetrics> } width - Width of the text stroke. When the unit attribute of the LengthMetrics
   *     object is LengthUnit.PERCENT, this setting does not take effect and the default value is used.
   *     <br>If the value is less than 0, solid text is displayed; if the value is greater than 0, hollow text is
   *     displayed.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): TextAreaAttribute;

  /**
   * Sets the color of the text stroke. If this API is not called, the default stroke color is the font color.
   *
   * @param { Optional<ResourceColor> } color - Stroke color. The default value is used if an invalid value is set.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): TextAreaAttribute;

  /**
   * Sets the backplane style of the text being dragged in the multi-line text input box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Backplane style of the text being dragged.
   *     <br>When set to undefined, the backplane color follows the theme: white in light mode and black in dark mode.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAreaAttribute;

  /**
   * Sets the text layout direction. If this API is not called, the text layout direction follows the component layout
   * direction by default.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.
   *     <br>If this parameter is set to **undefined**, it is processed as **TextDirection.DEFAULT**, which means the
   *     text layout direction follows the component layout direction.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): TextAreaAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to avoid text truncation. If this API is not called, no
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>true indicates that spacing is added to the first and last lines; false indicates that no spacing is added
   *     to the first and last lines.
   * @returns { TextAreaAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): TextAreaAttribute;

  /**
   * Supports adaptive line height based on the actual text height for stacked multi-line text. This API takes effect
   * only when the line height is smaller than the actual text height. If this API is not called, the line height does
   * not adapt to the actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height adapts to the actual text height.
   *     <br>The value **true** means the line height adapts to the actual text height, and **false** means the line
   *     height does not adapt to the actual text height.
   * @returns { TextAreaAttribute } - returns the instance of the TextInputAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets whether to enable leading punctuation compression. If this API is not called, leading punctuation compression
   * is disabled by default.
   *
   * > **NOTE**
   * >
   * > - Leading punctuation is not compressed by default.
   * >
   * > - For the punctuation that can be compressed, see the leading punctuation compression range in
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to enable leading punctuation compression.
   *     <br>The value **true** means to enable leading punctuation compression, and **false** means the opposite.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): TextAreaAttribute;
  /**
   * Sets whether to enable orphan character optimization during text layout. If this API is not called, orphan
   * character optimization is disabled by default.
   *
   * Orphan character optimization improves text layout by handling orphan characters (the first character of the last
   * line of a paragraph) more efficiently. When enabled, it adjusts the line break points to avoid orphan characters as
   * much as possible. The orphan character optimization feature takes effect only when
   * [wordBreak]{@link TextAreaAttribute#wordBreak} is not BREAK_ALL and the
   * [locale]{@link @ohos.graphics.text:text.TextStyle} of the first
   * [TextStyle]{@link @ohos.graphics.text:text.TextStyle} of the text to be laid out is "zh-Hans" or "zh-Hant".
   *
   * @param { Optional<boolean> } enabled - Whether to enable orphan character optimization for the last line of a
   *     paragraph.
   *     <br>The value true means to enable orphan character optimization, and false means to disable it.
   *     <br>If the value is undefined or null, orphan character optimization is disabled.
   * @returns { TextAreaAttribute } - returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  orphanCharOptimization(enabled: Optional<boolean>): TextAreaAttribute;
  /**
   * Sets whether to enable horizontal scrolling when the text width exceeds the width of the content area. If this API
   * is not called, horizontal scrolling is disabled.
   *
   * > **NOTE**
   * >
   * > Horizontal scrolling is not supported in <!--Del-->any of <!--DelEnd-->the following:
   * > [TextContentStyle]{@link TextContentStyle} is INLINE, that is, the polymorphic style of the text box is inline
   * > mode<!--Del-->; and [voiceButton]{@link TextAreaAttribute.voiceButton} is enabled<!--DelEnd-->.
   *
   * @param { Optional<boolean> } enabled - Whether to enable horizontal scrolling.
   *     <br>The value **true** means to enable horizontal scrolling, and **false** means to disable horizontal
   *     scrolling, in which case the text wraps automatically.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  horizontalScrolling(enabled: Optional<boolean>): TextAreaAttribute;

  /**
   * Sets the corner style of the text stroke.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - Corner style of the text stroke.
   *     <br>If the value is undefined, it is processed as StrokeJoinStyle.MITER_JOIN. For details, see
   *     [StrokeJoinStyle]{@link StrokeJoinStyle}. The text corner appears as a sharp angle.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextAreaAttribute;

  /**
   * Sets the text shader effect, such as linear gradient and radial gradient effects.
   *
   * > **NOTE**
   * >
   * > When both shaderStyle and [strokeWidth]{@link TextAreaAttribute#strokeWidth} are set, shaderStyle does not take
   * > effect.
   * >
   * > shaderStyle takes precedence over [fontColor]{@link TextAreaAttribute#fontColor}.
   *
   * @param { ShaderStyle | undefined } shader - Text shader effect, used to set the text gradient effect (such as
   *     linear gradient and radial gradient).
   *     <br>When the value is undefined, no gradient effect is applied.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): TextAreaAttribute;

  /**
   * Sets whether to enable hanging punctuation at the end of a line. If this API is not used, punctuation is not hung
   * by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable hanging punctuation at the end of a line.
   *     <br>The value **true** means to enable hanging punctuation at the end of a line, and **false** means the
   *     opposite. If the value is **undefined** or **null**, hanging punctuation is not enabled.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  punctuationOverflow(enabled: Optional<boolean>): TextAreaAttribute;
}

/**
 * The **TextArea** component is a multi-line text input box. When the entered text exceeds the component width, it
 * automatically wraps to the next line. It is suitable for scenarios that require multi-line text input, such as
 * comment input, feedback forms, and content editing.
 *
 * When the height is not set, the component has no default height and adapts its height to the content. When the width
 * is not set, the component fills the maximum width by default.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 7. Newly added APIs in later versions are marked with a superscript
 * > to indicate their earliest version.
 * >
 * > - To set whether to clear the text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 *
 * ###### Child Components
 *
 * None
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