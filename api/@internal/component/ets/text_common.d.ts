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
 * Defines the text data detector type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum TextDataDetectorType {

  /**
   * Phone number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PHONE_NUMBER = 0,

  /**
   * URL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  URL = 1,

  /**
   * Email address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  EMAIL = 2,

  /**
   * Address.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ADDRESS = 3,

  /**
   * Time.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DATE_TIME = 4,
}

/**
 * This configuration is only available for the [Text]{@link text} and [RichEditor]{@link rich_editor} components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextDataDetectorConfig {

  /**
   * Entity types for text recognition. Values **null** and **[]** indicate that all types of entities can be
   * recognized.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  types: TextDataDetectorType[];

  /**
   * Callback invoked when text recognition succeeds.
   *
   * @type { ?function } [since 11 - 11]
   * @type { ?Callback<string> } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onDetectResultUpdate?: Callback<string>;

  /**
   * Color of the entity after successful text detection.
   *
   * Default value: **'#ff0a59f7'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Decoration style of the entity after successful text detection.
   *
   * Default value:
   *
   * {
   *
   *  type: TextDecorationType.Underline,
   *
   *  color: same as the entity
   *
   *  style: TextDecorationStyle.SOLID
   *
   * }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  decoration?: DecorationStyleInterface;

  /**
   * Whether to enable the preview menu displayed when long-pressing recognized text. The value **true** means to enable
   * the preview menu, and **false** means the opposite.
   *
   * Default value: **false**
   *
   * When [copyOptions]{@link RichEditorAttribute#copyOptions} is set to **None**, even if **enablePreviewMenu** is set
   * to **true**, long-pressing AI entities will not display the preview menu.
   *
   * This API can be properly called on phones and tablets, but has no effect on other devices such as PCs, 2-in-1
   * devices, TVs, and wearables.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  enablePreviewMenu?: boolean;
}

/**
 * Defines the text range.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextRange {

  /**
   * Start index.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: number;

  /**
   * End index.
   *
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: number;
}

/**
 * Defines the inserted text value info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface InsertValue {

  /**
   * Position of the inserted text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertOffset: number;

  /**
   * Content of the inserted text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  insertValue: string;
}

/**
 * Defines the direction for deleting text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TextDeleteDirection {

  /**
   * Backward delete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BACKWARD = 0,

  /**
   * Forward delete.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FORWARD = 1
}

/**
 * Enumerates the text superscript and subscript styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum SuperscriptStyle {

  /**
   * Normal text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NORMAL = 0,

  /**
   * Superscript text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SUPERSCRIPT = 1,

  /**
   * Subscript text style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SUBSCRIPT = 2
}

/**
 * Enumerates the menu types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare enum MenuType {

  /**
   * Text selection menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  SELECTION_MENU = 0,

  /**
   * Preview menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  PREVIEW_MENU = 1
}

/**
 * Enumerates automatic capitalization modes. This only provides API capabilities; the specific implementation depends
 * on the input method application.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AutoCapitalizationMode {

  /**
   * Default state; automatic capitalization is disabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * Automatic capitalization is applied per word: The first character of each word is capitalized, others are
   * lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WORDS = 1,

  /**
   * Automatic capitalization is applied per sentence: The first character of each sentence is capitalized, others are
   * lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SENTENCES = 2,

  /**
   * Automatic capitalization applied to all characters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ALL_CHARACTERS = 3
}

/**
 * Provides an interface for deleting value from text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DeleteValue {

  /**
   * Position of the deleted text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  deleteOffset: number;

  /**
   * Direction for deleting the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction: TextDeleteDirection;

  /**
   * Content of the deleted text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  deleteValue: string;
}

/**
 * Represents the callback invoked after text changes.
 *
 * @param { TextRange } rangeBefore - Range of the text to be changed.
 * @param { TextRange } rangeAfter - Range of the text added.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type OnDidChangeCallback = (rangeBefore: TextRange, rangeAfter: TextRange) => void;

/**
 * Represents the callback triggered when the content in the text box changes.
 *
 * @param { string } value - Text displayed in the text box.
 * @param { PreviewText } [previewText] - Information about the preview text, including its start position and text
 *     content.
 * @param { TextChangeOptions } [options] - Information about the text change, including the selection range, text
 *     displayed in the text box, and preview text. [since 15]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type EditableTextOnChangeCallback = (value: string, previewText?: PreviewText, options?: TextChangeOptions) => void;

/**
 * Defines a text selection controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextBaseController {

  /**
   * Sets the range of content selection. The selected content is highlighted.
   *
   * If both **selectionStart** and **selectionEnd** are set to **-1**, the entire content is selected.
   *
   * The component must be focused for the API call to have effect.
   *
   * Since API version 12, on 2-in-1 devices, regardless of the value of **options**, calling the **setSelection** API
   * will not display a menu; if a menu is already open, calling the API will close it.
   *
   * On non-2-in-1 devices, when **options** is set to **MenuPolicy.DEFAULT**, the following rules apply after the API
   * is called:
   *
   * 1. If the component has a menu with a selection handle,
   * the menu remains open and is relocated according to the selection.
   * 2. If the component has a menu without a selection handle,
   * the menu remains open and its position remains unchanged.
   * 3. If there is no menu open, no menu will appear after the selection.
   *
   * @param { number } selectionStart - Start position of the selection.<br>Values less than 0 are treated as **0**.
   * @param { number } selectionEnd - End position of the selection.<br>If the value exceeds the text length, the
   *     current text length is used instead.
   * @param { SelectionOptions } [options] - Configuration of options. The default value is inherited from
   *     [SelectionOptions]{@link SelectionOptions}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;

  /**
   * Closes the custom or default text selection menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  closeSelectionMenu(): void;

  /**
   * Obtains a **LayoutManager** object.
   *
   * @returns { LayoutManager } Layout manager object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLayoutManager(): LayoutManager;
}

/**
 * Implements an extended text editing controller.
 *
 * Inherits [TextBaseController]{@link TextBaseController}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextEditControllerEx extends TextBaseController {

  /**
   * Obtains the editing status of the rich text.
   *
   * @returns { boolean } Editing status of the rich text. **true** means that the text is in editable state, and
   *     **false** means the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isEditing(): boolean;

  /**
   * Stops editing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  stopEditing(): void;

  /**
   * Sets the offset of the caret.
   *
   * @param { number } offset - Offset of the caret. If the offset is outside the range of all content, the setting
   *     fails.
   * @returns { boolean } Whether the caret offset is set successfully.
   *     <br>Returns **true** if it is set successfully; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCaretOffset(offset: number): boolean;

  /**
   * Obtains the current position of the caret.
   *
   * @returns { number } Position of the caret.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getCaretOffset(): number;

  /**
   * Obtains the preview text.
   *
   * @returns { PreviewText } Preview text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getPreviewText?(): PreviewText;
}

/**
 * Preview text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface PreviewText {

  /**
   * Start position of the preview text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  offset: number;

  /**
   * Content of the preview text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;
}

/**
 * Defines a styled string controller.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface StyledStringController {

  /**
   * Sets the styled string displayed in the rich text component.
   *
   * @param { StyledString } styledString - Styled string to set.<br>**NOTE**<br>The child class
   *     [MutableStyledString]{@link MutableStyledString} of **StyledString** can also serve as the argument.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setStyledString(styledString: StyledString): void;

  /**
   * Obtains the styled string displayed in the rich text component.
   *
   * @returns { MutableStyledString } Styled string displayed in the rich text component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getStyledString(): MutableStyledString;
}

/**
 * Defines the listener for changes of the styled string text content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface StyledStringChangedListener {

  /**
   * Callback invoked when text is about to change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillChange?: Callback<StyledStringChangeValue, boolean>;

  /**
   * Callback invoked when text is changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidChange?: OnDidChangeCallback;
}

/**
 * Describes the text changes of the styled string.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface StyledStringChangeValue {

  /**
   * Range of the styled string to be replaced in the original string.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  range: TextRange;

  /**
   * Styled string used for replacement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  replacementString: StyledString;

  /**
   * Styled string for preview content.
   *
   * Used to represent temporary uncommitted input content in scenarios such as voice input, camera input, and IME pre-
   * composition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  previewText?: StyledString;
}

/**
 * Implements a layout manager object.
 *
 * > **NOTE**
 * >
 * > After the text content is changed, you must wait for the layout to be completed before you can obtain the most up-
 * > to-date layout information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LayoutManager {

  /**
   * Obtains the total number of lines in the component.
   *
   * @returns { number } Total number of lines in the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLineCount(): number;

  /**
   * Obtains the position of a glyph close to a given coordinate.
   *
   * @param { number } x - X coordinate relative to the component.<br>Unit: [px]{@link common}
   * @param { number } y - Y coordinate relative to the component.<br>Unit: [px]{@link common}
   * @returns { PositionWithAffinity } Glyph position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;

  /**
   * Obtains the position of the character nearest to the specified coordinate.
   *
   * @param { number } x - X coordinate relative to the component.<br>Unit: [px]{@link common}
   * @param { number } y - Y coordinate relative to the component.<br>Unit: [px]{@link common}
   * @returns { PositionWithAffinity | undefined } Character position. Returns **undefined** when
   *     [LayoutManager]{@link LayoutManager} is not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getCharacterPositionAtCoordinate(x: number, y: number): PositionWithAffinity | undefined;

  /**
   * Obtains the glyph range and the actual character range based on the specified character range. If the first glyph
   * is a Chinese character, the glyph index range of the character is [0, 1]. A Chinese character occupies three
   * characters, so the corresponding character index range is [0, 3]. If the specified character index range is [0, 1],
   * one third of a Chinese character cannot be parsed, so the actual character index range is [0, 3].
   *
   * @param { TextRange } charRange - Character range of the text.
   * @returns { Array<TextRange> | undefined } Contains two elements: the first is the glyph range, and the second is
   *     the actual character range. When the returned range is invalid, the element in the range is **-1**. Returns
   *     **undefined** when [LayoutManager]{@link LayoutManager} is not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined;

  /**
   * Obtains the character range and the actual glyph range based on the specified glyph range. If a text contains two
   * Chinese characters and five letters, the glyph index range of the text is [0, 7]. A Chinese character occupies
   * three characters, so the corresponding character index range is [0, 11]. If the specified index range is [0, 11],
   * but there are only seven glyphs, the actual glyph index range is [0, 7].
   *
   * @param { TextRange } glyphRange - Glyph range of the text.
   * @returns { Array<TextRange> | undefined } Contains two elements: the first is the character range, and the second
   *     is the actual glyph range. When the returned range is invalid, the element in the range is **-1**. Returns
   *     **undefined** when [LayoutManager]{@link LayoutManager} is not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined;

  /**
   * Obtains the information about the specified line, including line metrics, text style information, and font
   * properties.
   *
   * @param { number } lineNumber - Line number, which is zero-based.
   * @returns { LineMetrics } Information about the specified line, including line metrics, text style information, and
   *     font properties.
   *     <br>Returns an invalid value if the line number is less than 0 or exceeds the actual number of lines.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLineMetrics(lineNumber: number): LineMetrics;

  /**
   * Obtains the drawing area information of the characters or placeholders within any range of the text, based on the
   * specified rectangle width and height styles.
   *
   * @param { TextRange } range - Text range for which the drawing area is to be obtained.
   * @param { RectWidthStyle } widthStyle - Width style of the rectangle.
   * @param { RectHeightStyle } heightStyle - Height style of the rectangle.
   * @returns { Array<TextBox> } Array of drawing rectangles.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;
}

/**
 * Describes the position and affinity of a glyph.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface PositionWithAffinity {

  /**
   * Index of the glyph or character to the component. The value is an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position: number;

  /**
   * Affinity of the position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  affinity: Affinity;
}

/**
 * Enumerates the affinity modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type Affinity = import('../api/@ohos.graphics.text').default.Affinity;

/**
 * Describes the measurement information of a single line in the text layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type LineMetrics = import('../api/@ohos.graphics.text').default.LineMetrics;

/**
 * Enumerates the rectangle width styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type RectWidthStyle = import('../api/@ohos.graphics.text').default.RectWidthStyle;

/**
 * Enumerates the rectangle height styles.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type RectHeightStyle = import('../api/@ohos.graphics.text').default.RectHeightStyle;

/**
 * Describes the rectangle that contains the text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type TextBox = import('../api/@ohos.graphics.text').default.TextBox;

/**
 * Implements a carrier that stores the text content and style. It supports operations such as layout and drawing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare type Paragraph = import('../api/@ohos.graphics.text').default.Paragraph;

/**
 * Represents the extension configuration of an input method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type InputMethodExtraConfig = import('../api/@ohos.inputMethod.ExtraConfig').InputMethodExtraConfig;

/**
 * Define the FontVariation type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type FontVariation = import('../api/@ohos.graphics.text').default.FontVariation;

/**
 * Defines the cursor style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface CaretStyle {

  /**
   * Caret size. It cannot be set in percentage.
   *
   * Default value: **'2vp'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  width?: Length;

  /**
   * Caret color.
   *
   * Default value: **'#ff007dff'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;
}

/**
 * Defines the unique identifier for a custom menu item. It is used to identify menu items. The IDs for built-in menu
 * items are listed in the table below.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class TextMenuItemId {

  /**
   * Creates a **TextMenuItemId** object based on **id**.
   *
   * @param { ResourceStr } id - Menu ID.
   * @returns { TextMenuItemId } **TextMenuItemId** object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static of(id: ResourceStr): TextMenuItemId;

  /**
   * Checks whether this **TextMenuItemId** object is the same as another **TextMenuItemId** object.
   *
   * @param { TextMenuItemId } id - ID of the **TextMenuItemId** object to compare.
   * @returns { boolean } Whether the two **TextMenuItemId** objects are the same.
   *     <br>**true** if the objects are equal; **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  equals(id: TextMenuItemId): boolean;

  /**
   * ID for the default cut menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly CUT: TextMenuItemId;

  /**
   * ID for the default copy menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly COPY: TextMenuItemId;

  /**
   * ID for the default paste menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly PASTE: TextMenuItemId;

  /**
   * ID for the default select-all menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly SELECT_ALL: TextMenuItemId;

  /**
   * ID for the collaboration service menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly COLLABORATION_SERVICE: TextMenuItemId;

  /**
   * ID for the camera input menu item. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly CAMERA_INPUT: TextMenuItemId;

  /**
   * <!--RP1--><!--RP1End-->ID for the menu item involving text enhancement features,
   * such as polishing, summary extraction, and formatting, for selected text.
   * It is a level-1 menu item. This menu item requires the large language model. If no large language model is available,
   * this menu item does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 13 dynamic
   */
  static readonly AI_WRITER: TextMenuItemId;

  /**
   * ID for the translate menu item. It is a level-1 menu item. The translation service is provided for the selected
   * text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  static readonly TRANSLATE: TextMenuItemId;

  /**
   * ID for the search menu item. It is a level-1 menu item. This menu item launches a browser to search for the
   * selected text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  static readonly SEARCH: TextMenuItemId;

  /**
   * ID for the share menu item. It is a level-1 menu item. This menu item launches a window for sharing the selected
   * text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  static readonly SHARE: TextMenuItemId;

  /**
   * ID for the URL menu item. It is a level-1 menu item. This menu item provides the redirection service for the
   * selected URL, launching a browser search or app page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly url: TextMenuItemId;

  /**
   * ID for the email menu item. It is a level-1 menu item. This menu item provides the redirection service for the
   * selected email address, launching the email app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly email: TextMenuItemId;

  /**
   * ID for the phone call menu item. It is a level-1 menu item. This menu item provides the redirection service for the
   * selected phone number, launching the phone dialer page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly phoneNumber: TextMenuItemId;

  /**
   * ID for the navigation menu item. It is a level-1 menu item. This menu item provides the redirection service for the
   * selected address, launching the map app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly address: TextMenuItemId;

  /**
   * ID for the event creation menu item. It is a level-1 menu item. This menu item provides the redirection service for
   * the selected date and time, launching the page for creating a calendar event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly dateTime: TextMenuItemId;

  /**
   * <!--RP2--><!--RP2End-->ID for the AI assistant menu item,
   * which provides AI query capabilities for the selected text. It is a level-1 menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly askAI: TextMenuItemId;

  /**
   * ID for the autofill menu item. It is a level-1 menu item. When a menu item is tapped, the secondary menu item
   * **Password Vault** is displayed. This menu item is supported exclusively for the [Search]{@link search},
   * [TextInput]{@link text_input}, [TextArea]{@link text_area}, and [RichEditor]{@link rich_editor} components.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  static readonly autoFill: TextMenuItemId;

  /**
   * ID for the password vault menu item. It is a level-2 menu item. Tapping this menu item launches the password vault
   * app, which supports automatic username and password filling. The menu item is supported only for
   * [Search]{@link search}, [TextInput]{@link text_input}, [TextArea]{@link text_area}, and
   * [RichEditor]{@link rich_editor}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  static readonly passwordVault: TextMenuItemId;
}

/**
 * TextMenuItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface TextMenuItem {

  /**
   * Menu name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  content: ResourceStr;

  /**
   * Menu icon.
   *
   * Online images are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: ResourceStr;

  /**
   * Menu ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  id: TextMenuItemId;

  /**
   * Shortcut key hint.
   *
   * This field is only supported on 2-in-1 devices.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  labelInfo?: ResourceStr;
}

/**
 * Callback function when the selection menu create.
 *
 * @param { Array<TextMenuItem> } menuItems - currently displayed menu items.
 * @returns { Array<TextMenuItem> } Return the menu items will displayed after operations.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
type OnCreateMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;

/**
 * Triggered before the menu is displayed after the text selection area changes. Menu data can be configured within this
 * callback. Both the input parameter and return value contain only level-1 menu items; level-2 menu items are not
 * included.
 *
 * @param { Array<TextMenuItem> } menuItems - Menu items to be displayed.<br>**NOTE**<br>Modifications to the name,
 *     icon, or shortcut hint of default menu items do not take effect.
 * @returns { Array<TextMenuItem> } Menu items after the processing.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
type OnPrepareMenuCallback = (menuItems: Array<TextMenuItem>) => Array<TextMenuItem>;

/**
 * EditMenuOptions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface EditMenuOptions {

  /**
   * Triggered when the menu is being created. Menu data can be configured within this callback. Both the input
   * parameter and return value contain only level-1 menu items; level-2 menu items are not included.
   *
   * @param { Array<TextMenuItem> } menuItems - Menu items to be displayed.<br>**NOTE**<br>Modifications to the name,
   *     icon, or shortcut hint of default menu items do not take effect.
   * @returns { Array<TextMenuItem> } Menu items after the processing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>;

  /**
   * Triggered when the specified menu item is clicked.
   *
   * @param { TextMenuItem } menuItem - Menu item.<br>**NOTE**<br>Since API version 23, for level-1 menu items that
   *     support expandable level-2 menus (such as autofill), only the system default logic is executed and custom logic
   *     is not executed.
   * @param { TextRange } range - Selected text.
   * @returns { boolean } Execution logic of the menu item.
   *     <br>Returns **true** if the default system logic is intercepted and only the custom logic is executed.
   *     <br>Returns **false** if the custom logic is executed before the default system logic.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean;

  /**
   * Callback invoked before the menu is displayed after the text selection area changes. Menu data can be configured
   * within this callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onPrepareMenu?: OnPrepareMenuCallback;
}

/**
 * Provides the text decoration information returned by the backend.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DecorationStyleResult {

  /**
   * Type of the text decoration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Color of the text decoration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color: ResourceColor;

  /**
   * Style of the text decoration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * Scale factor of the text decoration thickness.
   *
   * Default value: **1.0**
   *
   * Value range: [0, +∞)
   *
   * Note: Negative values are treated as the default value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  thicknessScale?: number;
}

/**
 * Defines font setting options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface FontSettingOptions {

  /**
   * Whether to enable variable font weight adjustment. This parameter serves as the input for the
   * [fontWeight]{@link TextAttribute#fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)}
   * API. When the **weight** value in **fontWeight** is a non-hundred value within the [100, 900] range,
   * **enableVariableFontWeight** controls whether this **weight** value is applied.
   *
   * Default value: **false**
   *
   * **true**: Enable variable font weight adjustment. If the **weight** value is an integer within the [100, 900]
   * range, it is applied as the font weight.
   *
   * **false**: Disable variable font weight adjustment. If the value of **weight** is a multiple of 100 within
   * [100, 900], the value is used. If **weight** is a non-multiple of 100, the default value **400** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  enableVariableFontWeight?: boolean;
}

/**
 * Provides information about the text before and after a change, including the selection ranges.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface TextChangeOptions {

  /**
   * Selection range before the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  rangeBefore: TextRange;

  /**
   * Selection range after the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  rangeAfter: TextRange;

  /**
   * Text content before the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  oldContent: string;

  /**
   * Preview text before the change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  oldPreviewText: PreviewText;
}

/**
 * Provides detailed information of text changes, including preview text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
interface EditableTextChangeValue {

  /**
   * Current text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  content: string;

  /**
   * Preview text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  previewText?: PreviewText;

  /**
   * Information about the text change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  options?: TextChangeOptions;
}

/**
 * Enumerates the text menu display modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 16 dynamic
 */
declare enum TextMenuShowMode {

  /**
   * The menu is displayed in the current window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  DEFAULT = 0,

  /**
   * The menu is preferentially displayed in a separate window. If a separate window is not supported, the menu is
   * displayed in the current window.
   *
   * **NOTE**
   *
   * Displaying the text selection menu in a separate window is not supported for window types other than the app main
   * window, app sub-window, system modal window, and system desktop window.
   *
   * Displaying the text selection menu in a separate window is not supported in the previewer.
   *
   * Displaying the text selection menu in a separate window is not supported in
   * [UIExtension]{@link @ohos.arkui.uiExtension:uiExtension}.
   *
   * When a text component is displayed in a child window of [Popup]{@link @ohos.arkui.advanced.Popup},
   * [Dialog]{@link @ohos.arkui.advanced.Dialog}, [Toast](docroot://ui/arkts-create-toast.md), or [Menu]{@link menu},
   * the corresponding text selection menu cannot be displayed in a separate window.
   *
   * When **autoFill** is available for **TextInput** or **TextArea**, the corresponding text selection menu cannot be
   * displayed in a separate window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  PREFER_WINDOW = 1
}

/**
 * Provides the options for customizing the context menu on selection.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 16 dynamic
 */
declare interface TextMenuOptions {

  /**
   * Menu display mode.
   *
   * Default value: **TextMenuShowMode.DEFAULT**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  showMode?: TextMenuShowMode;
}

/**
 * Enumerates the appearance modes of the keyboard.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 15 dynamic
 */
declare enum KeyboardAppearance {

  /**
   * Default appearance mode, not using immersive style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  NONE_IMMERSIVE = 0,

  /**
   * Immersive mode, following the system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  IMMERSIVE = 1,

  /**
   * Immersive style in light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  LIGHT_IMMERSIVE = 2,

  /**
   * Immersive style in dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  DARK_IMMERSIVE = 3
}

/**
 * Defines the base class for text shader effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class ShaderStyle {}

/**
 * Displays a linear gradient. **LinearGradientStyle** inherits from [ShaderStyle]{@link ShaderStyle}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class LinearGradientStyle extends ShaderStyle {

  /**
   * A constructor used to create a **LinearGradientStyle** object.
   *
   * @param { LinearGradientOptions } options - Options for displaying a linear gradient.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(options: LinearGradientOptions);

  /**
   * Options for displaying a linear gradient.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  options: LinearGradientOptions;
}

/**
 * Displays a radial gradient. **RadialGradientStyle** inherits from [ShaderStyle]{@link ShaderStyle}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class RadialGradientStyle extends ShaderStyle {

  /**
   * A constructor used to create a **RadialGradientOptions** object.
   *
   * @param { RadialGradientOptions } options - Options for displaying a radial gradient.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(options: RadialGradientOptions);

  /**
   * Options for displaying a radial gradient.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  options: RadialGradientOptions;
}

/**
 * Displays a solid color. **ColorShaderStyle** inherits from [ShaderStyle]{@link ShaderStyle}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class ColorShaderStyle extends ShaderStyle {

  /**
   * A constructor used to create a **ResourceColor** object.
   *
   * @param { ResourceColor } color - Options for displaying a solid color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(color: ResourceColor);

  /**
   * Options for displaying a solid color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color: ResourceColor;
}

/**
 * Defines the base class for text transitions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare class ContentTransition {}

/**
 * Implements a flip animation for numeric text. It applies only to positive integers (decimals and negative numbers are
 * not supported). Gradient colors and text marquee mode are not supported. Text selection is not supported, and the
 * [copyOption]{@link TextAttribute#copyOption} property is ineffective. The flip animation fails if the text contains
 * child components or is set via a styled string.
 *
 * **NumericTextTransition** inherits from [ContentTransition]{@link ContentTransition}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 23]
 * @atomicservice
 * @since 20 dynamic
 */
declare class NumericTextTransition extends ContentTransition {

  /**
   * A constructor used to create a **NumericTextTransition** object.
   *
   * @param { NumericTextTransitionOptions } [options] - Options of the numeric flip animation. The default value is
   *     inherited from [NumericTextTransitionOptions]{@link NumericTextTransitionOptions}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(options?: NumericTextTransitionOptions);

  /**
   * Direction of the flip animation.
   *
   * Default value: **FlipDirection.DOWN**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  flipDirection?: FlipDirection;

  /**
   * Whether to enable the blur effect for the flip animation.
   *
   * Default value: **false**
   *
   * **true**: Enable the blur effect.
   *
   * **false**: Disable the blur effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableBlur?: boolean;
}

/**
 * Defines the options of the numeric flip animation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface NumericTextTransitionOptions {

  /**
   * Direction of the flip animation.
   *
   * Default value: **FlipDirection.DOWN**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  flipDirection?: FlipDirection;

  /**
   * Whether to enable the blur effect for the flip animation.
   *
   * Default value: **false**
   *
   * **true**: Enable the blur effect.
   *
   * **false**: Disable the blur effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableBlur?: boolean;
}

/**
 * Enumerates the directions of the flip animation. The default value is **DOWN**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum FlipDirection {

  /**
   * Content flips downward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DOWN = 0,

  /**
   * Content flips upward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  UP = 1
}

/**
 * Configures the line spacing of text and whether it applies only between lines.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface LineSpacingOptions {

  /**
   * Whether line spacing applies only between lines.
   *
   * **true**: Line spacing applies only between lines; no extra spacing is added above the first line or below the last
   * line. **false**: Extra line spacing is added both above the first line and below the last line.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onlyBetweenLines?: boolean;
}

/**
 * Configures the display effect of the **TextArea** component when the text exceeds the maximum number of lines.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface MaxLinesOptions {

  /**
   * **overflowMode** can be used to set the non-inline mode for the [TextArea]{@link text_area} component. When the
   * text exceeds the set value of **maxLines** (maximum number of lines), a scroll effect is enabled. This requires
   * configuration of [textOverflow]{@link TextAreaAttribute#textOverflow}, and **MaxLinesMode** takes effect only when
   * **textOverflow** is set to **None** or **Clip**. The default value of **MaxLinesMode** is **Clip**, indicating that
   * text is truncated when it exceeds the value of **maxLines**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  overflowMode?: MaxLinesMode;
}

/**
 * Enumerates the display effects of the **TextArea** component when text exceeds the maximum number of lines. The
 * default value is **CLIP** (truncating text at the maximum line count).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum MaxLinesMode {

  /**
   * Text is clipped when it exceeds the maximum number of lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CLIP = 0,

  /**
   * Text can be scrolled when it exceeds the maximum number of lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SCROLL = 1
}

/**
 * Enumerates the reasons for component content changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum TextChangeReason {

  /**
   * Unknown reason.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  UNKNOWN = 0,

  /**
   * User input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  INPUT = 1,

  /**
   * Paste operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  PASTE = 2,

  /**
   * Cut operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CUT = 3,

  /**
   * Drag and drop operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  DRAG = 4,

  /**
   * Auto-fill operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  AUTO_FILL = 5,

  /**
   * AI-assisted writing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  AI_WRITE = 6,

  /**
   * Redo operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  REDO = 7,

  /**
   * Undo operation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  UNDO = 8,

  /**
   * Component API call.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  CONTROLLER = 9,

  /**
   * Accessibility API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  ACCESSIBILITY = 10,

  /**
   * Cross-device photographing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  COLLABORATION = 11,

  /**
   * Stylus input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  STYLUS = 12
}

/**
 * Enumerates keyboard gradient effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum KeyboardGradientMode {

  /**
   * No gradient effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * Linear gradient effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  LINEAR_GRADIENT = 1
}

/**
 * Enumerates keyboard fluid lighting effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare enum KeyboardFluidLightMode {

  /**
   * No fluid lighting effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  NONE = 0,

  /**
   * Background fluid lighting effect enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  BACKGROUND_FLUID_LIGHT = 1
}

/**
 * Enumerates the text layout directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum TextDirection {

  /**
   * From left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LTR = 0,

  /**
   * From right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  RTL = 1,

  /**
   * Follows the component layout direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DEFAULT = 2,

  /**
   * Follows the writing direction of the content. For example, for right-to-left (RTL) languages (such as Tibetan and
   * Uyghur), the text is laid out from right to left. For left-to-right (LTR) languages (such as Chinese and English
   * ), the text is laid out from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  AUTO = 3
}

/**
 * Describes the keyboard visual style configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 */
declare interface KeyboardAppearanceConfig {

  /**
   * Keyboard gradient effect.
   *
   * Default value: **KeyboardGradientMode.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  gradientMode?: KeyboardGradientMode;

  /**
   * Keyboard fluid lighting effect.
   *
   * Default value: **KeyboardFluidLightMode.NONE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  fluidLightMode?: KeyboardFluidLightMode;
}

/**
 * Defines the input method client type bound to an input component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface IMEClient {

  /**
   * Unique ID of the current input component. The value must be greater than or equal to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  nodeId: number;

  /**
   * Sets the extension configuration of an input method.
   *
   * @param { InputMethodExtraConfig } config - Extension configuration of an input method.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  setExtraConfig(config: InputMethodExtraConfig): void;
}

/**
 * Defines the vertical alignment mode of text. The default value is **BASELINE** (aligning along the baseline).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum TextVerticalAlign {

  /**
   * Aligns text along the baseline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  BASELINE = 0,

  /**
   * Aligns text to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM = 1,

  /**
   * Aligns text vertically to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CENTER = 2,

  /**
   * Aligns text to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TOP = 3
}

/**
 * Enumerates the vertical alignment directions of the text content area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare enum TextContentAlign {

  /**
   * Aligns the content area to the top.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  TOP = 0,

  /**
   * Aligns the content area to the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  CENTER = 1,

  /**
   * Aligns the content area to the bottom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  BOTTOM = 2
}

/**
 * An enumeration that defines the line corner style, i.e.,
 * the style of the brush when drawing a polyline at the corners of the line segments.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum StrokeJoinStyle {

  /**
   * The corner type is an acute angle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MITER_JOIN = 0,

  /**
   * The corner type is round.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ROUND_JOIN = 1,

  /**
   * The corner type is flat.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BEVEL_JOIN = 2
}

/**
 * Defines the text layout options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare interface TextLayoutOptions {

  /**
   * Layout width of the measured text. If not set, the width is the maximum width occupied by a single-line layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  constraintWidth?: LengthMetrics;
}

/**
 * Defines accessibility options for the span.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface AccessibilitySpanOptions {

  /**
   * Accessibility text, that is, accessible label name. If a component has no text property, it will not be announced
   * when selected by a screen reader. Setting this property allows you to define accessibility text for such
   * components, which will be announced by a screen reader to help users identify the selected component.
   *
   * Default value: **''**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description. This description provides users with a detailed explanation of the current component to
   * help users understand the intended operation and its consequences, especially when these consequences cannot be
   * directly obtained from the component's attributes and accessibility text alone.
   *
   * Default value: **''**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
   *
   * The options are as follows:
   *
   * **"auto"**: The component's recognizability is determined jointly by accessibility services and ArkUI.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility
   * services.
   *
   * The default value is **"auto"**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When accessibilityLevel is set to **"auto"**, the component's recognizability depends on the following factors:
   *
   * 1. The accessibility service internally determines whether the component can be recognized.
   * 2. If the parent component's **accessibilityGroup** property has **isGroup** set to **true**,
   * the accessibility service will not focus on its child components, making them unrecognizable.
   * 3. If the parent component's **accessibilityLevel** is set to **"no-hide-descendants"**,
   * the component will not be recognized by accessibility services.
   *
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the drag preview style for selected text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface SelectedDragPreviewStyle {

  /**
   * Drag preview color for selected text
   *
   * The default value follows the theme. When the default theme is applied, the drag preview is white in light mode
   * and black in dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color?: ResourceColor;
}

/**
 * Sets the voice button options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
interface VoiceButtonOptions {

  /**
   * Whether to enable or disable the voice button for the input box.
   *
   * **true**: The voice button is enabled. **false**: The voice button is disabled.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  enabled?: boolean;
}

/**
 * Defines font configurations.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare interface FontConfigs {

  /**
   * Font weight configuration. The default value is inherited from [FontWeightConfigs] (#fontweightconfigs24).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  fontWeightConfigs?: FontWeightConfigs;
}

/**
 * Defines font weight configurations. When the configuration object (including an empty object **{}**) is passed, the
 * default values are used for properties that are not explicitly set. When **null** or **undefined** is passed, default
 * values are not applied, and the font weight behavior is consistent with that of the parent component text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare interface FontWeightConfigs {

  /**
   * Whether to enable variable font weight adjustment. When **weight** is set to a non-multiple of 100 within
   * [100, 900], **enableVariableFontWeight** is used to set whether the **weight** value takes effect.
   *
   * Default value: **false**
   *
   * **true**: Enable variable font weight adjustment. If the value of **weight** is any integer within [100, 900],
   * the value is used. Otherwise, the default value **400** is used.
   *
   * **false**: Disable variable font weight adjustment. If the value of **weight** is a multiple of 100 within
   * [100, 900], the value is used. If **weight** is a non-multiple of 100, the default value **400** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  enableVariableFontWeight?: boolean;

  /**
   * Whether to automatically synchronize the font weight with the device's font weight setting.
   *
   * Default value: **true**
   *
   * **true**: The font weight is automatically synchronized when the device's font weight setting changes.
   *
   * **false**: The font weight is not automatically synchronized when the device's font weight setting changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  enableDeviceFontWeightCategory?: boolean;
}

/**
 * Defines incremental update policies for text rendering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum IncrementalUpdatePolicy {

  /**
   * Disable incremental updates. Full layout rendering is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * Enable incremental updates with paragraph-level cache.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PARAGRAPH_CACHE = 1
}