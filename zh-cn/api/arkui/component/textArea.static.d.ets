/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { KeyboardOptions, PasteEvent } from "./richEditor";
import { CaretStyle, DeleteValue, EditMenuOptions, EditableTextOnChangeCallback, InsertValue, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance, SelectedDragPreviewStyle, VoiceButtonOptions, TextDirection, LineSpacingOptions, MaxLinesOptions, IMEClient, ShaderStyle, StrokeJoinStyle } from "./textCommon";
import { BarState, CopyOptions, FontStyle, FontWeight, LineBreakStrategy, TextContentStyle, TextAlign, TextOverflow, TextHeightAdaptivePolicy, WordBreak, EllipsisMode } from "./enums";
import { EnterKeyType, SubmitEvent, ContentType } from "./textInput";
import { Dimension, Font, Length, LengthMetrics, ResourceColor, ResourceStr, ColorMetrics } from "./units";
import { InputCounterOptions, TextContentControllerBase, SelectionOptions, TextDecorationOptions, CommonMethod, Callback, Bindable } from './common';
import { Builder, CustomBuilder, CustomBuilderT, ComponentBuilder } from './builder';
import { Resource } from '../../global/resource';
import { ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
import { ColorMetrics } from '../Graphics';
import { ComponentContentBase } from '../ComponentContent';
/**
 * Provides the method of switching the cursor position.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextAreaController extends TextContentControllerBase {
  /**
   * constructor.
   * A constructor used to create a TextAreaController object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @param { int } value - Length from the start of the string to the position where the caret is located.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  caretPosition(value: int): void;
  /**
   * Text selection is achieved by specifying the start and end positions of the text.
   *
   * <p><strong>NOTE</strong>:
   * <br>If <em>selectionMenuHidden</em> is set to <em>true</em> or a 2-in-1 device is used,
   * calling setTextSelection does not display the context menu even when options is set to <em>MenuPolicy.SHOW</em>.
   * <br>If the selected text contains an emoji,
   * the emoji is selected when its start position is within the text selection range.
   * </p>
   *
   * @param { int } selectionStart - The start position of the selected text.
   *     The start position of text in the text box is 0.
   *     A value less than 0 is handled as 0.
   *     A value greater than the maximum text length is handled as the maximum text length.
   * @param { int } selectionEnd - The end position of the selected text.
   *     A value less than 0 is handled as the value 0.
   *     A value greater than the maximum text length is handled as the maximum text length.
   * @param { SelectionOptions } [options] - Indicates the options of the text selection.
   *     Default value is MenuPolicy.DEFAULT.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTextSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
  /**
   * Exit edit state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopEditing(): void;
}
/**
 * Defines the options of TextArea.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextAreaOptions {
  /**
   * The place holder text string.
   * Text displayed when there is no input.
   *
   * <p><strong>NOTE</strong>:
   * <br>When only the placeholder attribute is set, the text selection handle is still available.
   * <br>The caret stays at the beginning of the placeholder text when the handle is released.
   * </p>
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ResourceStr;
  /**
   * Sets the current value of TextArea.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;
  /**
   * Called when the position of the insertion cursor is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: TextAreaController;
}
/**
 * Declare the type of input box
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextAreaType {
  /**
   * Basic input mode.
   * The value can contain digits, letters, underscores (_), spaces, and special characters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL = 0,
  /**
   * Pure digital input mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER = 2,
  /**
   * Phone number entry mode.
   * In this mode, the following are allowed: digits, spaces, plus signs (+), hyphens (-), asterisks (*), and number signs (#).
   * the length is not limited.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_NUMBER = 3,
  /**
   * E-mail address input mode.
   * This mode accepts only digits, letters, underscores (_), dots (.),
   * and the following special characters: ! # $ % & ' * + - / = ? ^ ` { | } ~ @ (which can only appear once).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMAIL = 5,
  /**
   * Number decimal entry mode.
   * The value can contain digits and one decimal point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER_DECIMAL = 12,
  /**
   * URL entry mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  URL = 13,
  /**
   * 一次性验证码
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ONE_TIME_CODE = 14
}
/**
 * Declare the event listener callback of the enter key.
 *
 * @param { EnterKeyType } enterKeyType - The enter key type of soft keyboard.
 * If the type is EnterKeyType.NEW_LINE, onSubmit is not triggered.
 * @param { SubmitEvent } [event] - Provides the method of keeping textArea editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;
/**
 * Defines the attribute functions of TextArea.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TextAreaAttribute extends CommonMethod {
  /**
   * Called when the color of the placeholder is set.
   *
   * @param { ResourceColor | undefined } value - Default value follows the theme.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderColor(value: ResourceColor | undefined): this;
  /**
   * Called when the font property of the placeholder is set.
   * The 'HarmonyOS Sans' font and registered custom fonts are supported.
   *
   * @param { Font | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderFont(value: Font | undefined): this;
  /**
   * Called when the type of soft keyboard input button is set.
   *
   * @param { EnterKeyType | undefined } value the type of soft keyboard - Default value is EnterKeyType.NEW_LINE.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enterKeyType(value: EnterKeyType | undefined): this;
  /**
   * Called when the alignment of the contents of a multiline text box is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>To set vertical alignment for the text, use the align attribute.
   * <br>The align attribute alone does not control the horizontal position of the text.
   * <br>In other words, Alignment.TopStart, Alignment.Top, and Alignment.TopEnd produce the same effect,
   * top-aligning the text; Alignment.Start, Alignment.Center, and Alignment.End produce the same effect,
   * centered-aligning the text vertically; Alignment.BottomStart, Alignment.Bottom,
   * and Alignment.BottomEnd produce the same effect, bottom-aligning the text.
   * <br>When textAlign is set to TextAlign.JUSTIFY, the text in the last line is horizontally aligned with the start edge.
   * <br>Since API version 11, textAlign can be set to TextAlign.JUSTIFY.
   * </p>
   *
   * @param { TextAlign | undefined } value - Default value is TextAlign.Start.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textAlign(value: TextAlign | undefined): this;
  /**
   * Called when the insertion cursor color is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>Since API version 12, this API can be used to set the text handle color, which is the same as the caret color.
   * </p>
   *
   * @param { ResourceColor | undefined } value - Default value is '#007DFF'.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretColor(value: ResourceColor | undefined): this;
  /**
   * Called when the font color is set.
   *
   * @param { ResourceColor | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * Called when the font size is set.
   *
   * @param { Length | undefined } value - Default value is 16fp.The default value on wearable devices is 18fp.
   * If fontSize is of the number type, the unit fp is used.
   * This parameter cannot be set in percentage.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: Length | undefined): this;
  /**
   * Called when the font style of a font is set.
   *
   * @param { FontStyle | undefined } value - Default value is FontStyle.Normal.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontStyle(value: FontStyle | undefined): this;
  /**
   * 设置字体粗细时调用。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - 默认值为FontWeight.Normal。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
  /**
   * Called when the font list of text is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>The 'HarmonyOS Sans' font and registered custom fonts are supported for applications.
   * <br>Only the 'HarmonyOS Sans' font is supported for widgets.
   * </p>
   *
   * @param { ResourceStr | undefined } value - Default value is 'HarmonyOS Sans'.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFamily(value: ResourceStr | undefined): this;
  /**
   * Called when the overflow mode of the font is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>In inline style, the effect of truncating text according to maxLines only applies when textOverflow is set.
   * <br>Text is clipped at the transition between words.
   * <br>To clip text in the middle of a word, set wordBreak to WordBreak.BREAK_ALL.
   * <br>If overflow is set to TextOverflow.None, TextOverflow.Clip, or TextOverflow.Ellipsis,
   * this attribute must be used with maxLines for the settings to take effect.
   * <br>TextOverflow.None produces the same effect as TextOverflow.Clip.
   * </p>
   *
   * @param { TextOverflow | undefined } value - Default value is TextOverflow.Clip.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textOverflow(value: TextOverflow | undefined): this;
  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @param { Dimension | undefined } value - The length of text indent.Default value is 0.
   * @returns { TextAreaAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textIndent(value: Dimension | undefined): this;
  /**
   * Called when the inputFilter of text is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>Only inputs that comply with the regular expression can be displayed.
   * <br>Other inputs are filtered out.
   * <br>The specified regular expression can match single characters, but not strings.
   * </p>
   *
   * @param { ResourceStr | undefined } value
   * @param { function | undefined } [error]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default inputFilter(value: ResourceStr | undefined, error?: ((value: string) => void) | undefined): this;
  /**
   * Define the caret style of the text input.
   *
   * @param { CaretStyle | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretStyle(value: CaretStyle | undefined): this;
  /**
   * Define the text selected background color of the text input.
   * If the opacity is not set, a 20% opacity will be used.
   *
   * @param { ResourceColor | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;
  /**
   * Called when submitted.
   *
   * @param { TextAreaSubmitCallback | undefined } callback - callback of the listened event.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSubmit(callback: TextAreaSubmitCallback | undefined): this;
  /**
   * Called when the input changes.
   *
   * <p><strong>NOTE</strong>:
   * <br>In this callback, if cursor operations are performed,
   * you need to adjust the cursor logic based on the previewText parameter
   * to make sure it works seamlessly under the preview display scenario.
   * </p>
   *
   * @param { EditableTextOnChangeCallback | undefined } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: EditableTextOnChangeCallback | undefined): this;
  /**
   * Called when the text selection changes.
   *
   * @param { function | undefined } callback - callback of the listened event.
   *     { int } selectionStart - The start position of text is 0.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTextSelectionChange(callback: ((selectionStart: int, selectionEnd: int) => void) | undefined): this;
  /**
   * Called when the content scrolls.
   *
   * @param { function | undefined } callback - callback of the listened event.
   *     { double } totalOffsetX - The unit is px.
   *     { double
   *     } totalOffsetY - The unit is px.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentScroll(callback: ((totalOffsetX: double, totalOffsetY: double) => void) | undefined): this;
  /**
   * Called when judging whether the text editing change finished.
   * The text box is in the editing state when it has the caret placed in it, and is in the non-editing state otherwise.
   *
   * @param { function | undefined } callback - Triggered when the text area status changes.
   * If the value of isEditing is true, text area is in progress.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onEditChange(callback: ((isEditing: boolean) => void) | undefined): this;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function | undefined } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCopy(callback: ((value: string) => void) | undefined): this;
  /**
   * 在使用剪贴板复制菜单之前调用。
   *
   * @param { Callback<string, boolean> | undefined } callback - 判断是否允许拷贝的回调。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function | undefined } callback
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCut(callback: ((value: string) => void) | undefined): this;
  /**
   * 在使用剪贴板剪切菜单之前调用。
   *
   * @param { Callback<string, boolean> | undefined } callback - 判断是否允许剪切的回调。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCut(callback: Callback<string, boolean> | undefined): this;
  /**
   * Called when using the Clipboard menu
   *
   * @param { function | undefined } callback
   *          Executed when a paste operation is performed.
   *          { string } value - The text content to be pasted.
   *          { PasteEvent } event - The user-defined paste event.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPaste(callback: ((value: string, event: PasteEvent) => void) | undefined): this;
  /**
   * Called when the copy option is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>If this attribute is set to CopyOptions.None, the text can only be pasted;
   * all other actions, such as copying, cutting, and sharing, are disabled.
   * <br>Dragging is not allowed when CopyOptions.None is set.
   * </p>
   *
   * @param { CopyOptions | undefined } value - Default value is CopyOptions.LocalDevice.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default copyOption(value: CopyOptions | undefined): this;
  /**
   * Sets whether request keyboard or not when on focus.
   *
   * @param { boolean | undefined } value - Default value is true.
   * @returns { TextAreaAttribute } Returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableKeyboardOnFocus(value: boolean | undefined): this;
  /**
   * Define the max length content of the text area.
   *
   * <p><strong>NOTE</strong>:
   * <br>By default, there is no maximum number of characters.
   * <br>When the maximum number of characters is reached,
   * no more characters can be entered, and the border turns red.
   * </p>
   *
   * @param { int | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLength(value: int | undefined): this;
  /**
   * Define show counter of the text area.
   *
   * <p><strong>NOTE</strong>:
   * <br>options can be set only when value is set to true,
   * in which case a character counter is displayed below the text box.
   * <br>This attribute must be used together with maxlength.
   * <br>The character counter is displayed in this format: Number of characters entered/Character limit.
   * <br>It is visible when the number of characters entered is greater than
   * the character limit multiplied by the threshold percentage value.
   * <br>If options is not set, the text box border and character counter subscript turn red
   * when the number of characters entered reaches the limit.
   * <br>If value is set to true and options is set,
   * the text box border and character counter subscript turn red
   * and the text box shakes when the number of characters entered reaches the limit,
   * provided that the value of thresholdPercentage is valid.
   * <br>If highlightBorder is set to false, the text box border does not turn red.
   * <br>By default, highlightBorder is set to true.
   * <br>The character counter is not displayed for text boxes in inline input style.
   * </p>
   *
   * @param { boolean | undefined } value - Set showcounter of the text area.
   *     Passing `undefined` resets it to the default value.
   * @param { InputCounterOptions } [options] - Set the percentage of counter.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showCounter(value: boolean | undefined, options?: InputCounterOptions): this;
  /**
   * Define style of the text area.
   *
   * <p><strong>NOTE</strong>:
   * <br>The inline input style is only available for the TextAreaType.Normal type.
   * </p>
   *
   * @param { TextContentStyle | undefined } value - Default value is TextContentStyle.DEFAULT.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default style(value: TextContentStyle | undefined): this;
  /**
   * Define bar state of the text area.
   *
   * @param { BarState | undefined } value - Default value is BarState.Auto.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barState(value: BarState | undefined): this;

  /**
   * 滚动条的颜色。
   *
   * @param { ColorMetrics | undefined } thumbColor - 滚动条缩略图TextArea的颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default scrollBarColor(thumbColor: ColorMetrics | undefined): this;

  /**
   * Controls whether the selection menu pops up.
   *
   * <p><strong>NOTE</strong>:
   * <br><em>true</em>:
   * <br>The system text selection menu does not appear under the following circumstances: clicking the text box cursor,
   * long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.
   * <br><em>false</em>:
   * <br>The system text selection menu appears under the following circumstances: clicking the text box cursor,
   * long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.
   * </p>
   *
   * @param { boolean | undefined } value - Default value is false.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectionMenuHidden(value: boolean | undefined): this;
  /**
   * Called when the minimum font size of the font is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
   * <br>For the setting to take effect, this attribute must be used together with maxFontSize and maxLines,
   *     or layout constraint settings.
   * <br>When the adaptive font size is used, the fontSize settings do not take effect.
   * </p>
   *
   * @param { double | string | Resource | undefined } value - The unit is fp.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontSize(value: double | string | Resource | undefined): this;
  /**
   * Called when the maximum font size of the font is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
   * <br>For the setting to take effect, this attribute must be used together with minFontSize and maxLines,
   *     or layout constraint settings.
   * <br>When the adaptive font size is used, the fontSize settings do not take effect.
   * </p>
   *
   * @param { double | string | Resource | undefined } value - The unit is fp.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontSize(value: double | string | Resource | undefined): this;
  /**
   * Called when the minimum font scale of the font is set.
   * Value range: [0, 1]
   *
   * <p><strong>NOTE</strong>:
   * <br>The undefined type is supported.
   * <br>A value less than 0 is handled as 0.
   * <br>A value greater than 1 is handled as 1.
   * <br>Abnormal values are ineffective by default.
   * </p>
   *
   * @param { double | Resource | undefined } scale
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontScale(scale: double | Resource | undefined): this;
  /**
   * Called when the maximum font scale of the font is set.
   * Value range: [1, +∞)
   *
   * <p><strong>NOTE</strong>:
   * <br>A value less than 1 is handled as 1.
   * <br>Abnormal values are ineffective by default.
   * </p>
   *
   * @param { double | Resource | undefined } scale
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontScale(scale: double | Resource | undefined): this;
  /**
   * Called when the height adaptive policy is set.
   *
   * <p><strong>NOTE</strong>:
   * <ul>
   * <li>When this attribute is set to TextHeightAdaptivePolicy.MAX_LINES_FIRST,
   * the maxLines attribute takes precedence for adjusting the text height.
   * <br>If the maxLines setting results in a layout beyond the layout constraints,
   * the text will shrink to a font size between minFontSize and maxFontSize to allow for more content to be shown.
   * <br>If the text box is in inline input style,
   * the font size in the editing state is different from that in the non-editing state.</li>
   * <li>If this attribute is set to TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST,
   * the minFontSize attribute takes precedence for adjusting the text height.
   * <br>If the text can fit in one line with the minFontSize setting,
   * the text will enlarge to the largest possible font size between minFontSize and maxFontSize.</li>
   * <li>If this attribute is set to TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST,
   * the layout constraints take precedence for adjusting the text height.
   * <br>If the resultant layout is beyond the layout constraints,
   * the text will shrink to a font size between minFontSize and maxFontSize to respect the layout constraints.</li>
   * </ul>
   * </p>
   *
   * @param { TextHeightAdaptivePolicy | undefined } value - The height adaptive policy.Default value is TextHeightAdaptivePolicy.MAX_LINES_FIRST.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
  /**
   * 定义文本区域的最大行数。
   * 取值范围：(0, +∞)
   *
   * <p><strong>注意</strong>：
   * <br>设置可以显示的最大行数。
   * <br>设置textOverflow时，如果内容超过此限制，文本将被截断。
   * <br>当textOverflow未设置时，在内联样式中
   * 当文本框处于焦点状态时，如果内容超出限制，则文本是可滚动的；
   * 当文本框没有焦点时，maxLines不适用。
   * <br>在非内联样式中，文本会根据行数进行截断。
   * <br>默认值：内联样式为3，非内联样式为+∞，
   * 表示没有最大行数。
   * </p>
   *
   * @param { int | undefined } value - 节点最大行数
   * @param { MaxLinesOptions } [options] - 设置选项的最大行数。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLines(value: int | undefined, options?: MaxLinesOptions): this;
  /**
   * Set the word break type.
   *
   * <p><strong>NOTE</strong>:
   * <br>This attribute does not take effect for the placeholder text.
   * <br>The component does not support the clip attribute.
   * <br>Therefore, setting this attribute does not affect text clipping.
   * </p>
   *
   * @param { WordBreak | undefined } value - The word break type.Default value is WordBreak.BREAK_WORD.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default wordBreak(value: WordBreak | undefined): this;
  /**
   * Set the text line break strategy type.
   *
   * <p><strong>NOTE</strong>:
   * <br>This attribute takes effect when wordBreak is not set to breakAll. Hyphens are not supported.
   * </p>
   *
   * @param { LineBreakStrategy | undefined } strategy - The text line break strategy type.Default value is LineBreakStrategy.GREEDY.
   * @returns { TextAreaAttribute } The attribute of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
  /**
   * 定义多行文本输入框的自定义键盘。
   *
   * <p><strong>注意</strong>:
   * <br>设置自定义键盘时，激活文本框将打开指定的自定义组件，而不是系统输入法。
   * <br>自定义键盘的高度可以通过自定义组件的根节点的height属性设置，
   * 其宽度固定为默认值。
   * <br>自定义键盘通过覆盖原屏幕的方式呈现，如果未启用回避模式或文本框不需要回避，则不会压缩或提升该键盘。
   * <br>自定义键盘无法获取焦点，但会阻止手势事件。
   * <br>默认情况下，当输入组件失去焦点时，自定义键盘将关闭。
   * <br>您也可以使用TextAreaController.stopEditing API来关闭键盘。
   * <br>设置自定义键盘时，文本框不支持相机输入，即使设备支持。
   * <br>设置自定义键盘时，可以绑定onKeyPrelme事件，防止物理键盘输入。
   * </p>
   *
   * @param { CustomBuilder | ComponentContentBase | undefined } value - 设置多行文本输入框的自定义键盘。
   *     传入 undefined 可将其重置为默认键盘。
   * @param { KeyboardOptions } [options] - 指多行文本输入框的自定义键盘选项
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined, options?: KeyboardOptions): this;

  /**
   * Called when the text decoration of the text is set.
   *
   * @param { TextDecorationOptions | undefined } value - Default value is { type: TextDecorationType.None, color: Color.Black, style: TextDecorationStyle.SOLID }.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default decoration(value: TextDecorationOptions | undefined): this;
  /**
   * Called when the distance between text fonts is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>If the value specified is a percentage or 0, the default value is used.
   * <br>For the string type, numeric string values with optional units, for example, "10" or "10fp", are supported.
   * <br>If the value specified is a negative value, the text is compressed.
   * <br>A negative value too small may result in the text being compressed to 0 and no content being displayed.
   * </p>
   *
   * @param { double | string | Resource | undefined } value - The unit is fp.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default letterSpacing(value: double | string | Resource | undefined): this;
  /**
   * 设置字体行间距。
   *
   * <p><strong>注意</strong>：
   * <br>如果指定的值小于或等于0，则使用默认值0。
   * </p>
   *
   * @param { LengthMetrics | undefined } value - 默认值为0。
   * @param { LineSpacingOptions } [options]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineSpacing(value: LengthMetrics | undefined, options?: LineSpacingOptions): this;
  /**
   * Called when the line height of the font is set.
   *
   * <p><strong>NOTE</strong>:
   * <br>If the value is less than or equal to 0, the line height is not limited and the font size is adaptive.
   * <br>If the value is of the number type, the unit fp is used.
   * </p>
   *
   * @param { double | string | Resource | undefined } value
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineHeight(value: double | string | Resource | undefined): this;
  /**
   * Called when the input type is set.
   *
   * @param { TextAreaType | undefined } value - Default value is TextAreaType.Normal.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default type(value: TextAreaType | undefined): this;
  /**
   * Sets whether enable auto fill or not.
   *
   * @param { boolean | undefined } value - Indicates the flag whether autofill is enabled.Default value is true.True: enable, false: disable.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableAutoFill(value: boolean | undefined): this;
  /**
   * Called when the auto fill type is set.
   *
   * @param { ContentType | undefined } contentType - Indicates autofill type.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentType(contentType: ContentType | undefined): this;

  /**
   * 启用选中数据AI识别。
   *
   * @param { boolean | undefined } enable - 是否启用所选数据AI识别。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableSelectedDataDetector(enable: boolean | undefined): this;

  /**
   * Set font feature.
   *
   * @param { string | undefined } value - The fontFeature.
   * normal | <feature-tag-value>,
   * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
   * the values of <feature-tag-value> reference to doc of TextArea component
   * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFeature(value: string | undefined): this;
  /**
   * Get text value information when about to input.
   *
   * <p><strong>NOTE</strong>:
   * <br>It returns true if the text is inserted; returns false otherwise.
   * <br>This callback is not triggered for pre-edit or candidate word operations.
   * <br>It is available only for system input methods.
   * </p>
   *
   * @param { Callback<InsertValue, boolean> | undefined } callback - The triggered function when text content is about to insert.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
  /**
   * Get text value information when completed input.
   *
   * <p><strong>NOTE</strong>:
   * <br>It is available only for system input methods.
   * </p>
   *
   * @param { Callback<InsertValue> | undefined } callback - The triggered function when text content has been inserted.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidInsert(callback: Callback<InsertValue> | undefined): this;
  /**
   * Get text value information when about to delete.
   *
   * <p><strong>NOTE</strong>:
   * <br>It returns true if the text is deleted; returns false otherwise.
   * <br>This callback is not called for text preview.
   * <br>It is available only for system input methods.
   * </p>
   *
   * @param { Callback<DeleteValue, boolean> | undefined } callback - The triggered function when text content is about to delete.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
  /**
   * Get text value information when the deletion has been completed
   *
   * <p><strong>NOTE</strong>:
   * <br>It is available only for system input methods.
   * </p>
   *
   * @param { Callback<DeleteValue> | undefined } callback - The triggered function when text content has been deleted.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidDelete(callback: Callback<DeleteValue> | undefined): this;
  /**
   * Set the custom text menu.
   * Sets the extended options of the custom context menu on selection,
   * including the text content, icon, and callback.
   *
   * @param { EditMenuOptions | undefined } editMenu - Customize text menu options.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
  /**
   * Define the preview text mode of the text input.
   *
   * <p><strong>NOTE</strong>:
   * <br>Preview text is in a temporary state and does not support text interception.
   * <br>As such, it does not trigger onWillInsert, onDidInsert, onWillDelete, or onDidDelete callbacks.
   * </p>
   *
   * @param { boolean | undefined } enable - Indicates the preview text mode.Default value is true.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enablePreviewText(enable: boolean | undefined): this;
  /**
   * Enable or disable haptic feedback.
   *
   * <p><strong>NOTE</strong>:
   * <br>To enable haptic feedback,
   * <br>you must declare the ohos.permission.VIBRATE permission under requestPermissions in the module.json5 file of the project.
   * <code>
   * "requestPermissions": [
   *   {
   *      "name": "ohos.permission.VIBRATE",
   *   }
   * ]
   * </code>
   * </p>
   *
   * @param { boolean | undefined } isEnabled - Default value is true, set false to disable haptic feedback.
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;
  /**
   * 设置语音输入配置项
   *
   * @param { VoiceButtonOptions | undefined } options - 语音按钮的选项。
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default voiceButton(options: VoiceButtonOptions | undefined): this;
  /**
   * Set text mode of automatic case mode switching.
   *
   * @param { AutoCapitalizationMode | undefined } mode - Automatic case mode values.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
  /**
   * 设置文本是否使用半行距。
   *
   * @param { boolean | undefined } halfLeading - 默认值为false。值为true表示启用半行距，false表示不启用。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default halfLeading(halfLeading: boolean | undefined): this;
  /**
   * Set the ellipsis mode.
   *
   * <p><strong>NOTE</strong>:
   * <br>For the settings to work, overflow must be set to TextOverflow.Ellipsis and maxLines must be specified.
   * <br>Setting ellipsisMode alone does not take effect.
   * <br>EllipsisMode.START and EllipsisMode.CENTER take effect only when maxLines is set to 1.
   * </p>
   *
   * @param { EllipsisMode | undefined } mode - The ellipsis mode.Default value is EllipsisMode.END.
   * @returns { TextAreaAttribute } The attribute of TextArea.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ellipsisMode(mode: EllipsisMode | undefined): this;
  /**
   * 设置是否阻止返回按键的回调事件。
   *
   * @param { boolean | undefined } isStopped - 默认值为true，设置为false将触发最近的回调事件。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default stopBackPress(isStopped: boolean | undefined): this;
  /**
   * Get text value information when about to change.
   *
   * <p><strong>NOTE</strong>:
   * <br>This callback is triggered after onWillInsert and onWillDelete, but before onDidInsert and onDidDelete.
   * </p>
   *
   * @param { Callback<EditableTextChangeValue, boolean> | undefined } callback - The triggered function when text content is about to change.
   * Returning true allows the change to proceed, while returning false cancels the change.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
  /**
   * 设置键盘外观样式。
   *
   * @param { KeyboardAppearance | undefined } appearance - 默认值为 KeyboardAppearance.NONE_IMMERSIVE
   * @returns { TextAreaAttribute } - 返回 TextAreaAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
  /**
   * 是否启用中文和拉丁字符之间的自动间隔。
   *
   * @param { boolean | undefined } enabled - 默认值为false。
   *     是否启用自动间隔标志。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableAutoSpacing(enabled: boolean | undefined): this;
  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { TextAreaAttribute } the attribute of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * 设置描边宽度。
   *
   * @param { LengthMetrics | undefined } width - 表示描边宽度。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeWidth(width: LengthMetrics | undefined): this;
  /**
   * 设置描边颜色。
   *
   * @param { ResourceColor | undefined } color - 表示描边颜色。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeColor(color: ResourceColor | undefined): this;
  /**
   * 定义多行输入框的最小行数。
   *
   * @param { int | undefined } lines - 节点的最小行数
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default minLines(lines: int | undefined): this;

  /**
   * 该方法在输入框组件绑定输入法前被调用。
   *
   * @param { Callback<IMEClient> | undefined } callback - 在输入框组件绑定输入法前被调用的回调函数。
   *     若undefined被传入，则当前绑定的回调函数会被移除。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;
  /**
   * 用于设置拖拽后的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 选中拖拽后的背板样式。
   *    若传入undefined会重置样式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;
  /**
   * 设置文本方向。
   *
   * @param { TextDirection | undefined } direction - 表示文本方向。
   * 当设置为undefined，该属性会被重置为TextDirection.DEFAULT。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textDirection(direction: TextDirection | undefined): this;
  /**
   * 确定布局是否在顶部和底部添加额外的填充，以便为字符腾出空间。
   *
   * @param { boolean | undefined } include - 是否开启，默认为false。
   *     传`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextInputAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default includeFontPadding(include: boolean | undefined): this;
  /**
   * 是否包含回退字体的上升/下降，以防止重叠行。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextInputAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fallbackLineSpacing(enabled: boolean | undefined): this;
  /**
   * 是否压缩行首的标点符号。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default compressLeadingPunctuation(enabled: boolean | undefined): this;
  /**
   * 是否避免在段落的最后一行出现孤词。
   *
   * @param { boolean | undefined } enabled - 如果为true，则启用该功能；如果为false，则禁用该功能。
   *     默认值为false。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 26.0.0 static
   */
  default orphanCharOptimization(enabled: boolean | undefined): this;
  /**
   * 当文本宽度大于视图时，是否启用水平滚动。
   * 默认值为false，文本达到控件宽度自动换行。
   *
   * @param { boolean | undefined } enabled - 是否启用水平滚动。true表示开启此功能，false表示关闭此功能。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default horizontalScrolling(enabled: boolean | undefined): this;
  /**
   * 设置描边的连接样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 描边的连接样式。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): this;

  /**
   * 设置文本的着色器样式，如线性渐变或径向渐变。
   *
   * @param { ShaderStyle | undefined } shader - 文本的着色器样式。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default shaderStyle(shader: ShaderStyle | undefined): this;

  /**
   * 是否启用行尾标点溢出。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default punctuationOverflow(enabled: boolean | undefined): this;

  /**
   * 设置TextArea组件选项。
   *
   * @param { TextAreaOptions } [value] - 构建TextArea组件的选项。
   * @returns { TextAreaAttribute } 返回TextArea属性的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setTextAreaOptions(value?: TextAreaOptions): this;
}

/**
 * 定义多行输入框组件。
 *
 * @param { TextAreaOptions } [value]
 * @returns { TextAreaAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextArea(
    value?: TextAreaOptions
): TextAreaAttribute;

/**
 * 定义TextArea组件。
 *
 * @param { CustomBuilderT<TextAreaAttribute> } style - TextArea属性实例。
 * @returns { TextAreaAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function TextArea(
    style: CustomBuilderT<TextAreaAttribute>,
): TextAreaAttribute;