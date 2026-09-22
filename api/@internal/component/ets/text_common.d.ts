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
   * Date and time
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  DATE_TIME = 4
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
 * This configuration is only available for the [Text]{@link ./text} and [RichEditor]{@link ./rich_editor} components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TextDataDetectorConfig {
  /**
   * Sets the entity types for text recognition. When **types** is set to **null** or **[]**, all types of entities are
   * recognized; otherwise, only the specified types of entities are recognized.
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
   * Default value: **undefined**, which means the callback is not triggered.
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
   * Sets the entity color after text recognition succeeds.
   *
   * Default value: **'#ff0a59f7'**, which indicates blue (with 100% opacity).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Sets the decoration line style of the entity after text recognition succeeds.
   *
   * Default value:
   *
   * {
   *
   *  type: TextDecorationType.Underline,
   *
   *  color: the same as the entity color,
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
   * Sets whether to enable the preview menu displayed on long press after text recognition. The value **true**
   * indicates enabled, and **false** indicates disabled.
   *
   * Default value: **false**
   *
   * When [copyOptions]{@link RichEditorAttribute#copyOptions} is set to **None**, the preview menu is not displayed on
   * long press of an AI entity even if **enablePreviewMenu** is set to **true**.
   *
   * The actual device types supported by this API (phones and tablets) are fewer than those supported by its system
   * capability (phones, 2-in-1 devices, tablets, TVs, cars, and wearables). Due to hardware form limitations, this API
   * does not respond on 2-in-1 devices, TVs, cars, and wearables.
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
   * Position index of the inserted value, starting from 0.
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
   * Position index of the value to delete, starting from 0.
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
   * Since API version 12, on PC/2-in-1 devices, calling the setSelection API does not pop up a menu regardless of the
   * value of **options**. In addition, if a menu already exists in the component, calling the setSelection API closes
   * the menu.
   *
   * On non-2-in-1 devices, when **options** is set to **MenuPolicy.DEFAULT**, the following rules apply after the API
   * is called:
   *
   * 1. If the component has a menu with a selection handle, the menu remains open and is relocated according to the
   * selection.
   *
   * 2. If the component has a menu without a selection handle, the menu remains open and its position remains
   * unchanged.
   *
   * 3. If there is no menu open, no menu will appear after the selection.
   *
   * @param { number } selectionStart - Start position of the selection.
   *     <br>If the value is less than 0, it is processed as 0. If the value is greater than the text length, it is
   *     processed as the current text length.
   *     <br>Special value effect: when both selectionStart and selectionEnd are -1, all text is selected.
   * @param { number } selectionEnd - End position of the selection.
   *     <br>If the value is less than 0, it is processed as 0. If the value is greater than the text length, it is
   *     processed as the current text length.
   *     <br>Special value effect: when both selectionStart and selectionEnd are -1, all text is selected.
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
   * @returns { LayoutManager } Layout manager object used to obtain text layout information, such as the number of
   *     lines, line metrics, and glyph positions.
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
   * @param { number } offset - Caret offset position. The value ranges from 0 to the text length. If the value exceeds
   *     the content range, the setting fails.
   * @returns { boolean } Whether the cursor is set successfully.
   *     <br>The value **true** indicates that the cursor is set successfully, and **false** indicates the opposite.
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
   * @returns { PreviewText } Preview text information, including the start position index and text content of the
   *     preview text.
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
   * Start index of the preview text content, starting from 0.
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
   * @param { StyledString } styledString - Styled string.
   *     <br>**Note:**
   *     <br>The subclass [MutableStyledString]{@link MutableStyledString} of StyledString can also be used as the input
   *     parameter value.
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
 * ###### Objects to Import
 *
 * Take the Text component as an example. For a complete example, see
 * [Example 10: Obtaining Text Information](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md)
 * of the Text component.
 *
 * ```ts
 * controller: TextController = new TextController();
 * let layoutManager: LayoutManager = this.controller.getLayoutManager();
 * ```
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
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest total number of
   * > lines.
   *
   * @returns { number } Total number of lines of the component content. Returns 0 when
   *     [LayoutManager]{@link LayoutManager} is not bound to the component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getLineCount(): number;

  /**
   * Obtains the position information of the character close to the given coordinate.
   *
   * > **NOTE**
   * >
   * > - This API actually obtains the UTF-16 character offset, rather than the glyph offset.
   * >
   * > - After the text content changes, wait until the layout is complete before obtaining the latest position
   * > information.
   *
   * @param { number } x - Horizontal coordinate relative to the component.
   *     <br>Unit: px
   * @param { number } y - Vertical coordinate relative to the component.
   *     <br>Unit: px
   * @returns { PositionWithAffinity } Character position information. When [LayoutManager]{@link LayoutManager} is not
   *     bound to a component, an invalid value is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity;

  /**
   * Obtains the position information of the character closest to the specified coordinate.
   *
   * > **NOTE**
   * >
   * > - After the text content changes, wait until the layout is complete before obtaining the latest position
   * > information.
   * >
   * > - The character position returned by this API is the UTF-8 encoding offset.
   *
   * @param { number } x - X coordinate relative to the component.
   *     <br>Unit: px
   * @param { number } y - Y coordinate relative to the component.
   *     <br>Unit: px
   * @returns { PositionWithAffinity | undefined } Character position information. When
   *     [LayoutManager]{@link LayoutManager} is not bound to the component, this API returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getCharacterPositionAtCoordinate(x: number, y: number): PositionWithAffinity | undefined;

  /**
   * Obtains the position information of the character closest to the specified coordinate based on the specified
   * encoding type.
   *
   * Compared with
   * [getCharacterPositionAtCoordinate]{@link LayoutManager.getCharacterPositionAtCoordinate(x: number, y: number)},
   * this API supports specifying the encoding type (UTF-8 or UTF-16) used for the character position through the
   * encoding parameter.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest position
   * > information.
   *
   * @param { number } x - Horizontal coordinate relative to the component.
   *     <br>Unit: px
   * @param { number } y - Vertical coordinate relative to the component.
   *     <br>Unit: px
   * @param { TextEncoding } [encoding] - Encoding type used by the character position. In UTF-8 encoding, the character
   *     position is in bytes; in UTF-16 encoding, the character position is in UTF-16 code units.
   *     <br>Default value: TextEncoding.TEXT_ENCODING_UTF8.
   * @returns { PositionWithAffinity | undefined } Character position. Returns **undefined** when
   *     [LayoutManager]{@link LayoutManager} is not bound to a component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCharacterPositionAtCoordinate(
    x: number, y: number, encoding?: TextEncoding): PositionWithAffinity | undefined;

  /**
   * Obtains the information about the specified line, including line metrics, text style information, and font
   * properties.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest line information.
   *
   * @param { number } lineNumber - Line number, ranging from 0 to the actual number of lines minus 1, starting from 0.
   *     If the line number is less than 0 or exceeds the actual number of lines, an invalid value is returned.
   * @returns { LineMetrics } Line information, text style information, and font attribute information.
   *     <br>When the line number is less than 0 or exceeds the actual number of lines, an invalid value is returned.
   *     When [LayoutManager]{@link LayoutManager} is not bound to the component, an invalid value is returned.
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
   * > **NOTE**
   * >
   * > - After the text content changes, wait until the layout is complete before obtaining the latest drawing area
   * > information.
   * >
   * > - The [TextRange]{@link TextRange} of the **range** parameter is a UTF-16 character offset.
   *
   * @param { TextRange } range - Text range for which the drawing area is to be obtained.
   * @param { RectWidthStyle } widthStyle - Width specification of the returned rectangular area, used to control how
   *     the width of the returned rectangle is calculated. Different specification values affect the width boundary of
   *     the rectangle.
   * @param { RectHeightStyle } heightStyle - Height specification of the returned rectangular area, used to control how
   *     the height of the returned rectangle is calculated. Different specification values affect the height boundary
   *     of the rectangle.
   * @returns { Array<TextBox> } Array of rectangular areas. When [LayoutManager]{@link LayoutManager} is not bound to a
   *     component, an empty array is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

  /**
   * Obtains the glyph range and the actual character range based on the specified text character range. The character
   * offset of this API is in UTF-8 encoding.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest glyph range
   * > information.
   * > Take the text "世界Hello" as an example. The correspondence between the glyph index and the character index under
   * > UTF-8 encoding is as follows:
   *
   * | Text | 世 | 界 | H | e | l | l | o |
   * |---|---|---|---|---|---|---|---|
   * | Glyph Index Range | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   * | Character Index Range (UTF-8) | [0, 3] | [3, 6] | [6, 7] | [7, 8] | [8, 9] | [9, 10] | [10, 11] |
   *
   * The glyph index range of the character "世" is [0, 1]. Since a Chinese character occupies 3 bytes, its corresponding
   * character index range is [0, 3]. If the specified character index range is [0, 1], it is impossible to parse one-
   * third of a Chinese character, so the actual character index range is [0, 3].
   *
   * @param { TextRange } charRange - Character range of the text.
   * @returns { Array<TextRange> | undefined } The array contains two elements: the first element is the glyph range,
   *     and the second element is the actual character range.
   *     <br>When the returned range is an abnormal value, the elements in the range are -1.
   *     <br>When [LayoutManager]{@link LayoutManager} is not bound to a component, this API returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined;

  /**
   * Obtains the glyph range and the actual character range based on the specified encoding type and text character
   * range.
   *
   * Compared with
   * [getGlyphRangeForCharacterRange]{@link LayoutManager.getGlyphRangeForCharacterRange(charRange: TextRange)}, this
   * interface supports specifying the encoding type (UTF-8 or UTF-16) used for the character range through the encoding
   * parameter.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest glyph range
   * > information.
   * > Take the text "世界Hello" as an example. The correspondence between the glyph index and the character index under
   * > different encoding types is as follows:
   *
   * | Text | 世 | 界 | H | e | l | l | o |
   * |---|---|---|---|---|---|---|---|
   * | Glyph Index Range | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   * | Character Index Range (UTF-8) | [0, 3] | [3, 6] | [6, 7] | [7, 8] | [8, 9] | [9, 10] | [10, 11] |
   * | Character Index Range (UTF-16) | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   *
   * Under UTF-8 encoding, a Chinese character occupies 3 bytes. The glyph index range of "世" is [0, 1], and its
   * corresponding character index range is [0, 3]. If the specified character index range is [0, 1], it is impossible
   * to parse one-third of a Chinese character, so the actual character index range is [0, 3].
   *
   * Under UTF-16 encoding, the character index is measured in UTF-16 code units. A BMP character (such as "世") occupies
   * 1 code unit (2 bytes), and a supplementary plane character (such as an emoji) occupies 2 code units (a 4-byte
   * surrogate pair). The glyph index range of "世" is [0, 1], and its corresponding character index range is [0, 1].
   *
   * @param { TextRange } charRange - Character range of the text.
   * @param { TextEncoding } [encoding] - Encoding type used by the character range. In UTF-8 encoding, the character
   *     index is in bytes; in UTF-16 encoding, the character index is in UTF-16 code units.
   *     <br>Default value: TextEncoding.TEXT_ENCODING_UTF8
   * @returns { Array<TextRange> | undefined } The array contains two elements. The first element is the glyph range,
   *     and the second element is the actual character range.
   *     <br>When the returned range is an abnormal value, the elements in the range are -1.
   *     <br>When [LayoutManager]{@link LayoutManager} is not bound to the component, this interface will return
   *     undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getGlyphRangeForCharacterRange(charRange: TextRange, encoding?: TextEncoding): Array<TextRange> | undefined;

  /**
   * Obtains the character range and the actual glyph range based on the specified text glyph range. The character
   * offset of this API is UTF-8 encoding.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest character range
   * > information.
   * > Take the text "世界Hello" as an example. The correspondence between the glyph index and the character index under
   * > UTF-8 encoding is as follows:
   *
   * | Text | 世 | 界 | H | e | l | l | o |
   * |---|---|---|---|---|---|---|---|
   * | Glyph Index Range | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   * | Character Index Range (UTF-8) | [0, 3] | [3, 6] | [6, 7] | [7, 8] | [8, 9] | [9, 10] | [10, 11] |
   *
   * Its glyph index range is [0, 7]. Since a Chinese character occupies 3 bytes, its corresponding character index
   * range is [0, 11]. If the specified glyph index range is [0, 11], but there are only 7 glyphs in total, the actual
   * glyph index range is [0, 7].
   *
   * @param { TextRange } glyphRange - Glyph range of the text.
   * @returns { Array<TextRange> | undefined } The array contains two elements: the first element is the character
   *     range, and the second element is the actual glyph range.
   *     <br>When the returned range is an abnormal value, the elements in the range are -1.
   *     <br>When the [LayoutManager]{@link LayoutManager} is not bound to a component, this API returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined;

  /**
   * Obtains the character range and the actual glyph range based on the specified encoding type and text glyph range.
   *
   * Compared with
   * [getCharacterRangeForGlyphRange]{@link LayoutManager.getCharacterRangeForGlyphRange(glyphRange: TextRange)}, this
   * API supports specifying the encoding type (UTF-8 or UTF-16) used for the character range through the **encoding**
   * parameter.
   *
   * > **NOTE**
   * >
   * > After the text content changes, wait until the layout is complete before obtaining the latest character range
   * > information.
   * > Take the text "世界Hello" as an example. The correspondence between the glyph index and the character index under
   * > different encoding types is as follows:
   *
   * | Text | 世 | 界 | H | e | l | l | o |
   * |---|---|---|---|---|---|---|---|
   * | Glyph Index Range | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   * | Character Index Range (UTF-8) | [0, 3] | [3, 6] | [6, 7] | [7, 8] | [8, 9] | [9, 10] | [10, 11] |
   * | Character Index Range (UTF-16) | [0, 1] | [1, 2] | [2, 3] | [3, 4] | [4, 5] | [5, 6] | [6, 7] |
   *
   * Under UTF-8 encoding, its glyph index range is [0, 7]. Since a Chinese character occupies 3 bytes, the
   * corresponding character index range is [0, 11]. If the specified glyph index range exceeds the actual number of
   * glyphs (for example, [0, 11]), since there are only 7 glyphs in total, the returned actual glyph index range is
   * [0, 7].
   *
   * Under UTF-16 encoding, the character index is measured in UTF-16 code units. A BMP character (such as "世") occupies
   * 1 code unit (2 bytes), and a supplementary plane character (such as an emoji) occupies 2 code units (a 4-byte
   * surrogate pair). Its glyph index range is [0, 7], and the corresponding character index range is [0, 7]. If the
   * specified glyph index range exceeds the actual number of glyphs (for example, [0, 10]), since there are only 7
   * glyphs in total, the returned actual glyph index range is [0, 7].
   *
   * @param { TextRange } glyphRange - Glyph range of the text.
   * @param { TextEncoding } [encoding] - Encoding type used for the character range. With UTF-8 encoding, the character
   *     index is in bytes; with UTF-16 encoding, the character index is in UTF-16 code units.
   *     <br>Default value: TextEncoding.TEXT_ENCODING_UTF8
   * @returns { Array<TextRange> | undefined } The array contains two elements. The first element is the character
   *     range, and the second element is the actual glyph range.
   *     <br>When the returned range is an abnormal value, the elements in the range are -1.
   *     <br>When [LayoutManager]{@link LayoutManager} is not bound to a component, this interface returns undefined.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getCharacterRangeForGlyphRange(glyphRange: TextRange, encoding?: TextEncoding): Array<TextRange> | undefined;
}

/**
 * Text encoding types supported by the text layout query APIs.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum TextEncoding {
  /**
   * UTF-8 encoding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TEXT_ENCODING_UTF8 = 0,

  /**
   * UTF-16 encoding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TEXT_ENCODING_UTF16 = 1
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
   * Index of the glyph or character relative to the component. The value is an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  position: number;

  /**
   * Position affinity, which indicates the tendency of the caret position at glyph boundaries. For details about the
   * values, see the Affinity enum.
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
 * Represents the extension configuration of an input method.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare type InputMethodExtraConfig = import('../api/@ohos.inputMethod.ExtraConfig').InputMethodExtraConfig;

/**
 * Properties of a variable font.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 26.0.1]
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
   * Caret size. Percentage is not supported.
   *
   * Default value: '2vp'
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
   * Default value: '#ff007dff', which indicates blue.
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
   * @param { ResourceStr } id - Menu item identifier, used to create a TextMenuItemId object to identify the menu
   *     option.
   * @returns { TextMenuItemId } Menu item identifier object created based on the passed-in ID, used to identify a menu
   *     option.
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
   * @param { TextMenuItemId } id - TextMenuItemId object to compare.
   * @returns { boolean } Whether two TextMenuItemId values are equal.
   *     <br>The value **true** indicates that they are equal, and **false** indicates that they are not equal.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  equals(id: TextMenuItemId): boolean;

  /**
   * Default cut, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly CUT: TextMenuItemId;

  /**
   * Default copy, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly COPY: TextMenuItemId;

  /**
   * Default paste, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly PASTE: TextMenuItemId;

  /**
   * Default select all, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly SELECT_ALL: TextMenuItemId;

  /**
   * Collaboration service, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly COLLABORATION_SERVICE: TextMenuItemId;

  /**
   * Camera input, a first-level menu item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  static readonly CAMERA_INPUT: TextMenuItemId;

  /**
   * <!--RP1--><!--RP1End-->Polishes, summarizes, and formats the selected text, a first-level menu item. This menu
   * item depends on the large model capability; otherwise, it does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 13 dynamic
   */
  static readonly AI_WRITER: TextMenuItemId;

  /**
   * Translation, a first-level menu item. Provides translation service for the selected text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  static readonly TRANSLATE: TextMenuItemId;

  /**
   * Search, a first-level menu item. Provides search service for the selected text and opens the browser to search the
   * selected text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  static readonly SEARCH: TextMenuItemId;

  /**
   * Share, a first-level menu item. Provides share service for the selected text and opens the share window to share
   * the selected text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  static readonly SHARE: TextMenuItemId;

  /**
   * Open link, a first-level menu item. Provides a jump service for the selected URL and opens the browser to search or
   * the application page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly url: TextMenuItemId;

  /**
   * New email, a first-level menu item. Provides a jump service for the selected email address and opens the email
   * application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly email: TextMenuItemId;

  /**
   * Call, a first-level menu item. Provides a jump service for the selected phone number and opens the dialing page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly phoneNumber: TextMenuItemId;

  /**
   * Navigate, a first-level menu item. Provides a jump service for the selected address and opens the map application.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly address: TextMenuItemId;

  /**
   * New schedule, a first-level menu item. Provides a jump service for the selected date and time and opens the new
   * schedule page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly dateTime: TextMenuItemId;

  /**
   * <!--RP2--><!--RP2End-->Provides AI query capability for the selected text, a first-level menu item. This menu item
   * depends on the large model capability; otherwise, it does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  static readonly askAI: TextMenuItemId;

  /**
   * Auto fill, a first-level menu item. Tapping it expands the second-level menu item "Password vault". It is supported
   * only by [Search]{@link ./search}, [TextInput]{@link ./text_input}, [TextArea]{@link ./text_area}, or
   * [RichEditor]{@link ./rich_editor}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  static readonly autoFill: TextMenuItemId;

  /**
   * Password vault, a second-level menu item. Tapping this menu item opens the password vault application, which
   * provides the capability of auto-filling account and password. It is supported only by [Search]{@link ./search},
   * [TextInput]{@link ./text_input}, [TextArea]{@link ./text_area}, or [RichEditor]{@link ./rich_editor}.
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
   * Network images are not supported.
   *
   * Default value: undefined, which means no menu icon is displayed.
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
   * This field is supported only on 2-in-1 devices.
   *
   * Default value: undefined, which means no shortcut key hint is displayed.
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
 * Triggered when the menu is created.
 *
 * @param { Array<TextMenuItem> } menuItems - Menu items currently displayed.<br/>**NOTE** <br/>Modifications to the
 *     name, icon, and shortcut prompt of the default menu items do not take effect.
 * @returns { Array<TextMenuItem> } Processed menu items.
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
 * @param { Array<TextMenuItem> } menuItems - Menu items to be displayed.
 *     <br>**NOTE**
 *     <br>Modifications to the name, icon, and shortcut key hint of the default menu items do not take effect.
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
   * @param { Array<TextMenuItem> } menuItems - Menu items to be displayed.
   *     <br>**Note:**
   *     <br>Modifications to the name, icon, and shortcut key hint of the default menu items do not take effect.
   * @returns { Array<TextMenuItem> } Processed menu items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCreateMenu(menuItems: Array<TextMenuItem>): Array<TextMenuItem>;

  /**
   * Triggered when a menu item is tapped, used to handle the tap behavior of the menu item.
   *
   * @param { TextMenuItem } menuItem - Menu item.
   *     <br>**Note:**
   *     <br>Since API version 23, for a first-level menu item that supports an expandable second-level menu, such as
   *     auto-fill, only the system default logic is executed, and user-defined logic is not executed.
   * @param { TextRange } range - Selected text.
   * @returns { boolean } Execution logic of the menu item.
   *     <br>The value **true** indicates that the system default logic is intercepted and only the custom logic is
   *     executed.
   *     <br>The value **false** indicates that the custom logic is executed first, followed by the system logic.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onMenuItemClick(menuItem: TextMenuItem, range: TextRange): boolean;

  /**
   * Triggered before the menu is displayed after the text selection area changes. You can set menu data in this
   * callback.
   *
   * Similar to [onCreateMenu]{@link EditMenuOptions.onCreateMenu} but with a different trigger timing: onCreateMenu is
   * triggered when the menu is created and is suitable for initializing menu items; this API is triggered after each
   * selection area change and before the menu is displayed, and is suitable for dynamically adjusting the menu based on
   * the selected content. Both can be used at the same time.
   *
   * **Atomic service API:** This API supports use in atomic services since API version 20.
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
   * Type of the decoration line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: TextDecorationType;

  /**
   * Color of the decoration line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color: ResourceColor;

  /**
   * Style of the decoration line.
   *
   * Default value: TextDecorationStyle.SOLID
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: TextDecorationStyle;

  /**
   * Scale ratio of the decoration line thickness.
   *
   * Default value: 1.0
   *
   * Value range: [0, +∞)
   *
   * **Note:** Negative values are processed as the default value.
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
   * Whether to enable variable font weight adjustment. This font configuration item is used as an input parameter of
   * the
   * [fontWeight]{@link TextAttribute#fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)}
   * API. When the value of **weight** in the **fontWeight** API is a non-multiple-of-100 value within [100, 900],
   * **enableVariableFontWeight** determines whether the value of **weight** takes effect.
   *
   * Default value: **false**
   *
   * **true**: Variable font weight adjustment is enabled. In this case, if the value of **weight** is any integer
   * within [100, 900], the font weight is the value of **weight**; otherwise, the default value **400** is used.
   *
   * **false**: Variable font weight adjustment is disabled. In this case, if the value of **weight** is a multiple of 1
   * 00 within [100, 900], the font weight is the value of **weight**; if **weight** is a non-multiple-of-100 value, the
   * default value **400** is used.
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
 * Text change information, including the selection range before and after the change and the text content before the
 * change.
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
   * Preview text content information.
   *
   * Default value: undefined, indicating no preview text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  previewText?: PreviewText;

  /**
   * Changed text content information.
   *
   * Default value: undefined.
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
   * Displayed in the current window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 16 dynamic
   */
  DEFAULT = 0,

  /**
   * Preferentially displayed in a separate window. If a separate window is not supported, it is displayed in the
   * current window.
   *
   * **NOTE**
   *
   * Except for app main windows, app subwindows, system modal windows, and system desktop windows, other types of
   * windows do not support displaying the text selection menu in a separate window.
   *
   * The previewer does not support displaying the text selection menu in a separate window.
   *
   * [UIExtension]{@link @ohos.arkui.uiExtension:uiExtension} does not support displaying the text selection menu in a
   * separate window.
   *
   * When a text component is already displayed in a subwindow-type [Popup]{@link @ohos.arkui.advanced.Popup},
   * [Dialog]{@link @ohos.arkui.advanced.Dialog}, [Toast](docroot://ui/arkts-create-toast.md), or [Menu]{@link ./menu},
   * the corresponding text selection menu cannot be displayed in a separate window.
   *
   * When TextInput and TextArea support triggering AutoFill, the corresponding text selection menu cannot be displayed
   * in a separate window.
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
   * Display mode of the menu.
   *
   * Default value: TextMenuShowMode.DEFAULT
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
   * Whether the line spacing of the text takes effect only between lines.
   *
   * When set to true, the line spacing applies only between lines, with no extra line spacing above the first line or
   * below the last line. When set to false, line spacing exists both above the first line and below the last line.
   *
   * Default value: false
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
   * Font weight configuration. The default value inherits [FontWeightConfigs]{@link FontWeightConfigs}.
   * **Model constraint:** This interface can only be used in the Stage model.
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
   * Whether to enable variable font weight adjustment. When the font weight value **weight** is set to a non-hundred
   * value within [100, 900], **enableVariableFontWeight** determines whether the **weight** value takes effect.
   *
   * Default value: **false**
   *
   * **true**: Variable font weight adjustment is enabled. In this case, if **weight** is any integer within
   * [100, 900], the font weight is **weight**; otherwise, the default value 400 is used.
   *
   * **false**: Variable font weight adjustment is disabled. In this case, if **weight** is a hundred value within
   * [100, 900], the font weight is **weight**; if **weight** is a non-hundred value, the default value 400 is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  enableVariableFontWeight?: boolean;
  /**
   * Whether to automatically update the font weight with the device font weight level.
   *
   * Default value: **true**
   *
   * **true**: When the device font weight level changes, the font weight is automatically updated.
   *
   * **false**: When the device font weight level changes, the font weight is not automatically updated.
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
   *     <br>The default value of direction in [LinearGradientOptions]{@link LinearGradientOptions} is processed as NONE
   *     in [GradientDirection]{@link GradientDirection}.
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
   * A constructor used to create a **RadialGradientStyle** object.
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
   * A constructor used to create a **ColorShaderStyle** object.
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
 * Implements a carrier that stores the text content and style. It supports operations such as layout and drawing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare type Paragraph = import('../api/@ohos.graphics.text').default.Paragraph;

/**
 * Automatic capitalization mode type. It only provides the API capability, and the specific implementation is
 * determined by the input method app.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AutoCapitalizationMode {
  /**
   * Default state, no automatic case conversion is performed.
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
   * `overflowMode` configures the non-inline mode of the [TextArea]{@link ./text_area} component. When the number of
   * lines exceeds the configured `maxLines`, scrolling is enabled. It must be used together with
   * [textOverflow]{@link TextAreaAttribute#textOverflow}, and `MaxLinesMode` takes effect only when `textOverflow` is
   * set to None or Clip. By default, the value of `MaxLinesMode` is Clip, and text is truncated when the number of
   * lines exceeds `maxLines`.
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
   * Text layout direction is from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  LTR = 0,

  /**
   * Text layout direction is from right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  RTL = 1,

  /**
   * The text layout direction follows the component layout direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DEFAULT = 2,

  /**
   * The layout direction follows the actual text content. If the text is in an RTL (Right-to-Left) language (such as
   * Tibetan or Uyghur), the text layout direction is from right to left. If the text is in an LTR (Left-to-Right)
   * language (such as Chinese or English), the text layout direction is from left to right.
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
   * Sets the background color of the text during dragging.
   *
   * Default value: follows the theme. With the default theme, white is displayed in light mode and black in dark
   * mode.
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
   * Accessibility importance. Used to set whether the component can be recognized by the accessibility service.
   * The following values are supported:
   * "auto": The accessibility service and ArkUI comprehensively determine whether the component can be recognized by
   * the accessibility service.
   * "yes": The component can be recognized by the accessibility service.
   * "no": The component cannot be recognized by the accessibility service.
   * "no-hide-descendants": The component and all its child components cannot be recognized by the accessibility
   * service.
   * the default value is used.
   * **NOTE**
   * When accessibilityLevel is set to "auto", whether the component can be recognized by the accessibility service
   * depends on the following factors:
   * 1. Whether the component can be recognized is determined internally by the accessibility service, which makes its
   * own choice.
   * 2. If isGroup in the accessibilityGroup attribute of the parent component is set to true, the accessibility service
   * no longer focuses on the content of its child components, and the component cannot be recognized by the
   * accessibility service.
   * 3. If the accessibilityLevel attribute of the parent component is set to "no-hide-descendants", the component
   * cannot be recognized by the accessibility service.
   * Default value: "auto"
   * If the value is undefined.
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
 * Defines the style of line corners, that is, the brush style at the corners of line segments when drawing polylines.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum StrokeJoinStyle {

  /**
   * Sharp corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MITER_JOIN = 0,

  /**
   * Rounded corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ROUND_JOIN = 1,

  /**
   * Beveled corner.
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
 * Incremental update policy for text rendering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum IncrementalUpdatePolicy {
  /**
   * Disables incremental update and uses full layout rendering.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * Enables incremental update and uses paragraph-level cache. This policy takes effect only when the styled string
   * object bound to the text remains unchanged. If the styled string object changes, the cache cannot be hit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PARAGRAPH_CACHE = 1
}