/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * The controller for the **Search** component inherits from
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class SearchController extends TextContentControllerBase {

  /**
   * A constructor used to create a **SearchController** object.
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
   * @param { number } value - Length from the start of the character string to the position where the caret is located.
   *     <br>Values less than 0 are treated as **0**. Values greater than the string length are treated as the string
   *     length.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  caretPosition(value: number): void;

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

  /**
   * Sets the text selection range and highlights the selected text when the component is focused. This API works only
   * when the value of **selectionStart** is less than that of **selectionEnd**.
   *
   * @param { number } selectionStart - Start position of the text selection range. The start position of text in the
   *     text box is 0.<br>A value less than 0 is handled as **0**. A value greater than the maximum text length is
   *     handled as the maximum text length.<br>
   * @param { number } selectionEnd - End position of the text selection range.<br>A value less than 0 is handled as
   *     **0**. A value greater than the maximum text length is handled as the maximum text length.<br>
   * @param { SelectionOptions } [options] - Configuration options for text selection.<br>Default value:
   *     **MenuPolicy.DEFAULT**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;
}

/**
 * Enum for the style of cancel button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum CancelButtonStyle {

  /**
   * The Cancel button is always displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CONSTANT = 0,

  /**
   * The Cancel button is always hidden.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INVISIBLE = 1,

  /**
   * The Cancel button is displayed when there is text input.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INPUT = 2,
}

/**
 * Enumerates the text input types of a search box.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SearchType {

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
   * Number input mode with a decimal point.
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
 * Describes the initialization options of the **Search** component.
 *
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is higher than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SearchOptions {

  /**
   * Sets the text input in the search text box.
   *
   * Since API version 10, this parameter supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * Since API version 18, this parameter supports two-way binding through
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * The Resource type is supported since API version 20.
   *
   * @type { ?string } [since 8 - 19]
   * @type { ?ResourceStr } [since 20]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value?: ResourceStr;

  /**
   * Text displayed when there is no input.
   *
   * @type { string } [since 8 - 9]
   * @type { ?ResourceStr } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholder?: ResourceStr;

  /**
   * Path to the search icon. By default, the system search icon is used.
   *
   * **NOTE**
   *
   * The icon data source supports both
   * [relative paths](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#example-25-displaying-an-image-using-a-relative-path)
   * and network images.
   *
   * - The supported formats include PNG, JPG, BMP, SVG, GIF, pixelmap, and HEIF.
   * - The Base64 string is supported in the following format: data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data],
   * where *[base64 data]* is a Base64 string.
   *
   * If this attribute and the **searchIcon** attribute are both set, the **searchIcon** attribute takes precedence.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: string;

  /**
   * Controller of the **Search** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: SearchController;
}

/**
 * The **Search** component provides an area for users to enter search queries.
 *
 * > **NOTE**
 *
 * > This component supports plain text only. For rich text, use the [RichEditor]{@link rich_editor} component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SearchInterface {

  /**
   *
   * Defines the constructor of Search.
   *
   * @param { object } options - Initialization options of the **Search** component. [since 8 - 17]
   * @param { SearchOptions } [options] - Initialization options of the **Search** component. [since 18]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: SearchOptions): SearchAttribute;
}

/**
 * Defines the icon options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface IconOptions {

  /**
   * Icon size. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: Length;

  /**
   * Icon color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Image source of the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  src?: ResourceStr;
}

/**
 * Defines the SearchButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
interface SearchButtonOptions {

  /**
   * Font size of the button. It cannot be set in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize?: Length;

  /**
   * Font color of the button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Whether to disable the search button when there is no text input.
   *
   * Default value: **false**
   *
   * **true**: The search button is disabled when there is no text input. **false**: The search button remains enabled
   * regardless of the text input.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  autoDisable?: Boolean;
}

/**
 * Defines the CancelButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface CancelButtonOptions {

  /**
   * Display state of the Cancel button on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * Icon of the Cancel button on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: IconOptions;
}

/**
 * Defines the CancelButton symbol options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
interface CancelButtonSymbolOptions {

  /**
   * Display state of the Cancel button on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * Symbol icon of the Cancel button on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: SymbolGlyphModifier;
}

/**
 * Called when the search icon, search button, or soft keyboard search button is clicked.
 *
 * @param { string } searchContent - Current text input.
 * @param { SubmitEvent } [event] - Submit event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;

/**
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 *
 * In addition to the [universal events]{@link common}, the following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SearchAttribute extends CommonMethod<SearchAttribute> {

  /**
   * Sets the text on the search button located next to the search text box.
   *
   * Clicking the search button triggers both **onSubmit** and **onClick** callbacks.
   *
   * The default font size on wearable devices is 18 fp.
   *
   * @param { string } value - Text on the search button located next to the search text box.<br>The Resource type is
   *     supported since API version 20. [since 8 - 19]
   * @param { ResourceStr } value - Text on the search button located next to the search text box.<br>The Resource type
   *     is supported since API version 20. [since 20]
   * @param { SearchButtonOption } option - Text style of the search button located next to the search text box.<br>
   *     Default value:<br>{<br>fontSize: '16fp',<br>fontColor: '#ff3f97e9'<br>} [since 8 - 9]
   * @param { SearchButtonOptions } option - Text style of the search button located next to the search text box.<br>
   *     Default value:<br>{<br>fontSize: '16fp',<br>fontColor: '#ff3f97e9'<br>} [since 10]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  searchButton(value: ResourceStr, option?: SearchButtonOptions): SearchAttribute;

  /**
   * Sets the font color of the input text. **fontSize**, **fontStyle**, **fontWeight**, and **fontFamily** are set in
   * the [textFont]{@link SearchAttribute#textFont} attribute.
   *
   * @param { ResourceColor } value - Font color of the input text.<br>Default value: **'#FF182431'**<br>Default value
   *     on wearable devices: **'#dbffffff' **
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): SearchAttribute;

  /**
   * Sets the style of the search icon on the left.
   *
   * The default icon size on wearable devices is 16 vp.
   *
   * @param { IconOptions } value - Style of the search icon on the left.<!--RP1--><br>Default value in light mode:<br>{
   *     <br>size: '16vp',<br>color: '#99182431',<br>src: ' '<br>}<br>Default value in dark mode:<br>{<br>size: '16vp',<
   *     br>color: '#99ffffff',<br>src: ' '<br>} <!--RP1End--> [since 10 - 11]
   * @param { IconOptions | SymbolGlyphModifier } value - Style of the search icon on the left.<!--RP1--><br>Default
   *     value in light mode:<br>{<br>size: '16vp',<br>color: '#99182431',<br>src: ' '<br>}<br>Default value in dark
   *     mode:<br>{<br>size: '16vp',<br>color: '#99ffffff',<br>src: ' '<br>} <!--RP1End--> [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  searchIcon(value: IconOptions | SymbolGlyphModifier): SearchAttribute;

  /**
   * Sets the style of the cancel button on the right. For details, see
   * [Example 2: Setting Search and Delete Icons](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-2-setting-search-and-delete-icons)
   * and
   * [Example 11: Setting a Custom Symbol-Type Cancel Button](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-11-setting-a-custom-symbol-type-cancel-button).
   *
   * The default icon size on wearable devices is 18 fp.
   *
   * @param { object } value - Style of the cancel button on the right.<br>Default value:<br>{<br>style:
   *     CancelButtonStyle.INPUT,<br>icon: {<br>size: '16vp',<br>color: '#99ffffff',<br>src: ' '<br>}<br>}<br>When style
   *     is set to **CancelButtonStyle.CONSTANT**, the cancel button is displayed in a default style. [since 10 - 11]
   * @param { CancelButtonOptions | CancelButtonSymbolOptions } value - Style of the cancel button on the right.<br>
   *     Default value:<br>{<br>style: CancelButtonStyle.INPUT,<br>icon: {<br>size: '16vp',<br>color: '#99ffffff',<br>
   *     src: ' '<br>}<br>}<br>When style is set to **CancelButtonStyle.CONSTANT**, the cancel button is displayed in a
   *     default style. [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): SearchAttribute;

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
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): SearchAttribute;

  /**
   * Sets the indent of the first line text.
   *
   * @param { Dimension } value - Indent of the first line text.<br>Default value: **0**
   * @returns { SearchAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): SearchAttribute;

  /**
   * Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be
   * displayed. Other inputs are filtered out.
   *
   * For single-character input scenarios, only single-character matching is supported; for multi-character input
   * scenarios (such as pasting), string matching is supported.
   *
   * If **inputFilter** is set and the entered characters are not null, the filtering effect attached to the text box
   * type (specified through the **type** attribute) does not take effect.
   *
   * @param { ResourceStr } value - Regular expression.
   * @param { Callback<string> } error - Filtered-out content to return when regular expression matching fails.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): SearchAttribute;

  /**
   * Called when the input state changes. The text box is in the editing state when it has the caret placed in it, and
   * is in the non-editing state otherwise.
   *
   * @param { Callback<boolean> } callback - Callback for editing state changes. The value **true** indicates that the
   *     text is being inserted, and **false** indicates that the text box is out of focus and text cannot be inserted.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onEditChange(callback: Callback<boolean>): SearchAttribute;

  /**
   * Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.
   *
   * @param { ResourceColor } value - Background color of the selected text.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): SearchAttribute;

  /**
   * Sets the caret style.
   *
   * @param { CaretStyle } value - Caret style.<br>Default value:<br>{<br>width: '2.0vp',<br>color: '#007DFF'<br>}
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): SearchAttribute;

  /**
   * Sets the placeholder text color. The default value on wearable devices is **'#99ffffff'**.
   *
   * @param { ResourceColor } value - Placeholder text color.<br>Default value: **'#99182431'**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderColor(value: ResourceColor): SearchAttribute;

  /**
   * Placeholder text style, including the font size, font weight, font family, and font style.
   *
   * @param { Font } value - Placeholder text style.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderFont(value?: Font): SearchAttribute;

  /**
   * Style of the text entered in the search box, including the font size, font weight, font family, and font style.
   *
   * The default font size on wearable devices is 18 fp.
   *
   * @param { Font } value - Text font of the search text box.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textFont(value?: Font): SearchAttribute;

  /**
   * Sets the type of the Enter key.
   *
   * @param { EnterKeyType } value - Type of the Enter key.<br>Default value: **EnterKeyType.Search**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType(value: EnterKeyType): SearchAttribute;

  /**
   * Called when the search icon, search button, or soft keyboard search button is clicked.
   *
   * @param { function } callback - Search submission callback, which returns the text content currently in the search
   *     box. [since 8 - 17]
   * @param { Callback<string> } callback - Search submission callback, which returns the text content currently in the
   *     search box. [since 18]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSubmit(callback: Callback<string>): SearchAttribute;

  /**
   * Invoked when the search icon, search button, or soft keyboard search button is clicked. The submission event
   * provides a method to maintain the edit state of the **Search** component.
   *
   * @param { SearchSubmitCallback } callback - Callback invoked when the search icon, search button, or soft keyboard
   *     search button is clicked.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onSubmit(callback: SearchSubmitCallback): SearchAttribute;

  /**
   * Called when the input in the text box changes.
   *
   * In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText**
   * parameter to ensure it works seamlessly within the preview display scenario.
   *
   * @param { function } callback - Callback invoked when the input in the text box changes. [since 8 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the input in the text box
   *     changes. [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): SearchAttribute;

  /**
   * Called when the text selection changes or the caret position changes during editing.
   *
   * @param { function } callback - Callback for text selection changes or caret position changes. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - Callback for text selection changes or caret position
   *     changes. [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): SearchAttribute;

  /**
   * Called when the text content is scrolled.
   *
   * @param { function } callback - Callback for text content scrolling. [since 10 - 17]
   * @param { OnContentScrollCallback } callback - Callback for text content scrolling. [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): SearchAttribute;

  /**
   * Called when a copy operation is performed.
   *
   * @param { function } callback - Callback used to return the copied text content. [since 8 - 17]
   * @param { Callback<string> } callback - Callback used to return the copied text content. [since 18]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCopy(callback: Callback<string>): SearchAttribute;

  /**
   * Called before using the Clipboard copy menu.
   *
   * @param { Callback<string, boolean> } callback - Callback used to check whether copy is allowed.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): SearchAttribute;

  /**
   * Called when a cut operation is performed.
   *
   * @param { function } callback - Callback used to return the cut text content. [since 8 - 17]
   * @param { Callback<string> } callback - Callback used to return the cut text content. [since 18]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCut(callback: Callback<string>): SearchAttribute;

  /**
   * Called before using the Clipboard cut menu.
   *
   * @param { Callback<string, boolean> } callback - Callback used to check whether cut is allowed.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCut(callback: Callback<string, boolean>): SearchAttribute;

  /**
   * Called when a paste operation is performed.
   *
   * @param { function } callback
   *     Executed when a paste operation is performed.
   *     { string } value - The text content to be pasted.
   *     { PasteEvent } event - The user-defined paste event. [since 8 - 17]
   * @param { OnPasteCallback } callback - Executed when a paste operation is performed.Callback used to return the
   *     pasted text content. [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onPaste(callback: OnPasteCallback): SearchAttribute;

  /**
   * Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, the **Search**
   * component supports paste and select-all operations, while other operations such as copy, cut, translate, and share,
   * as well as the Celia Writer assisted writing feature, are disabled.
   *
   * Dragging is not allowed when **CopyOptions.None** is set.
   *
   * @param { CopyOptions } value - Whether the input text can be copied.<br>Default value: **CopyOptions.LocalDevice**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): SearchAttribute;

  /**
   * Sets the maximum number of characters for text input. By default, there is no maximum number of characters. When
   * the maximum number is reached, no more characters can be entered.
   *
   * @param { number } value - Maximum number of characters for text input.<br> When the value is less than 0, the
   *     default value is used and no limit is applied.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  maxLength(value: number): SearchAttribute;

  /**
   * Sets the text alignment mode in the search text box. Currently, the following alignment modes are supported:
   * **TextAlign.Start**, **TextAlign.Center**, **TextAlign.End**, **TextAlign.LEFT**, and **TextAlign.RIGHT**.
   * **TextAlign.JUSTIFY** behaves the same as **TextAlign.Start**.
   *
   * @param { TextAlign } value - Text alignment mode in the search text box.<br>Default value: **TextAlign.Start**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): SearchAttribute;

  /**
   * Sets whether to pop up the soft keyboard when the **Search** component obtains focus in a way other than clicking.
   *
   * Since API version 10, the **Search** component is bound to the input method by default when it obtains focus.
   *
   * @param { boolean } value - Whether to automatically pop up the soft keyboard when the **Search** component gains
   *     focus.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.<br>Default value:
   *     **true**
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): SearchAttribute;

  /**
   * Sets whether to hide the system text selection menu.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.<br>**true**: Tapping, long-pressing,
   *     double-tapping, triple-tapping, or right-clicking the text box will not trigger the system text selection menu.
   *     <br>**false**: Tapping, long-pressing, double-tapping, triple-tapping, or right-clicking the text box will
   *     trigger the system text selection menu.<br>Default value: **false**
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): SearchAttribute;

  /**
   * Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [maxFontSize]{@link SearchAttribute#maxFontSize} or layout constraint settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If **minFontSize** is less than or equal to 0, the adaptive font size does not take effect. In this case, the value
   * of **size** in the [textFont]{@link SearchAttribute#textFont} attribute takes effect. If **size** is not set, the
   * default value applies.
   *
   * @param { number | string | Resource } value - Minimum font size.<br>Unit: [fp]{@link common}
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"**
   * or **"10fp"**, are supported.
   *
   * For the setting to take effect, this attribute must be used together with
   * [minFontSize]{@link SearchAttribute#minFontSize} or layout constraint settings.
   *
   * When the adaptive font size is used, the **fontSize** settings do not take effect.
   *
   * If **maxFontSize** is less than or equal to 0 or **maxFontSize** is less than **minFontSize**, the adaptive font
   * size does not take effect. In this case, the value of **size** in the [textFont]{@link SearchAttribute#textFont}
   * attribute takes effect. If **size** is not set, the default value applies.
   *
   * @param { number | string | Resource } value - Maximum font size.<br>Unit: [fp]{@link common}
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxFontSize(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Minimum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than
   *     1 is handled as **1**. Abnormal values are ineffective by default.<br>Before use, you need to configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and
   *     [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see
   *     [Example 19: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-19-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): SearchAttribute;

  /**
   * Sets the maximum font scale factor for text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale factor for text. The **undefined** type is
   *     supported.<br>Value range:
   *     [1, +∞)<br>**NOTE**<br>A value less than 1 is handled as **1**. Abnormal values are ineffective by default.<br>After the **maxFontScale** attribute is set, the content of the **Search** component can be scaled up to 2 times at most.<br>Before use, you need to configure the [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see [Example 19: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-19-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SearchAttribute;

  /**
   * Sets the custom keyboard.
   *
   * When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system
   * input method.
   *
   * The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and
   * its width is fixed at the default value.
   *
   * The custom keyboard is presented by overlaying the original screen. It is not compressed or lifted if avoid mode is
   * not enabled or avoidance is not needed for the text box.
   *
   * The custom keyboard cannot obtain focus, but it blocks gesture events.
   *
   * By default, the custom keyboard is closed when the input component loses focus. You can also use the
   * [stopEditing]{@link SearchController#stopEditing} API to close the keyboard.
   *
   * When setting a custom keyboard, you can bind the [onKeyPreIme]{@link CommonMethod#onKeyPreIme} event to prevent
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
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): SearchAttribute;

  /**
   * Sets the color, type, and style of the text decorative line.
   *
   * @param { TextDecorationOptions } value - Text decorative line options.<br>Default value: {<br> type:
   *     TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): SearchAttribute;

  /**
   * Sets the letter spacing for a text style. If the value specified is a percentage or **0**, the default value is
   * used. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are
   * supported.
   *
   * If the value specified is a negative value, the text is compressed. A negative value too small may result in the
   * text being compressed to 0 and no content being displayed.
   *
   * This setting applies to every character, including those at line endings.
   *
   * @param { number | string | Resource } value - Letter spacing.<br>Unit: [fp]{@link common}
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the text line height. If the value is less than or equal to **0**, the line height is not limited and the font
   * size is adaptive. If the value is of the number type, the unit fp is used.
   *
   * @param { number | string | Resource } value - Text line height.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the text box type.
   *
   * Different **SearchType** values trigger corresponding keyboard types and enforce input restrictions.
   *
   * @param { SearchType } value - Text box type.<br>Default value: **SearchType.NORMAL**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type(value: SearchType): SearchAttribute;

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
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): SearchAttribute;

  /**
   * Called when text is about to be inserted.
   *
   * @param { Callback<InsertValue, boolean> } callback - Callback invoked when text is about to be inserted.<br>It
   *     returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not invoked for pre-
   *     edit or candidate word operations.<br>It is available only for system input methods.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): SearchAttribute;

  /**
   * Called when text is inserted.
   *
   * @param { Callback<InsertValue> } callback - Callback invoked when text is inserted.<br>It is available only for
   *     system input methods.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): SearchAttribute;

  /**
   * Called when text is about to be deleted.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback invoked when text is about to be deleted.<br>It
   *     returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not invoked for text
   *     preview.<br>It is available only for system input methods.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): SearchAttribute;

  /**
   * Called when text is deleted.
   *
   * @param { Callback<DeleteValue> } callback - Callback invoked when text is deleted.<br>It is available only for
   *     system input methods.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): SearchAttribute;

  /**
   * Called when the search box is about to be bound to an input method.
   *
   * <!--Del-->
   *
   * Before the search box is bound to an input method, you can use the
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} API of
   * **UIContext** to set the keyboard style.<!--DelEnd-->
   *
   * From API version 22, the [setExtraConfig]{@link IMEClient.setExtraConfig} method of [IMEClient]{@link IMEClient}
   * can be called to set input method extension information. After the input method is bound, it receives this
   * extension information, which can be used to implement custom functionality.
   *
   * **IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.
   *
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<IMEClient> } callback - Called when the search box is about to be bound to an input method.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): SearchAttribute;

  /**
   * Sets the extended options of the custom menu, including the text content, icon, and callback.
   *
   * When
   * [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or
   *
   * [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)
   * is used to disable system service menu items in the text selection menu, the disabled menu options will be excluded
   * from the parameter list in the [onCreateMenu]{@link EditMenuOptions.onCreateMenu} callback of **editMenuOptions**.
   *
   * @param { EditMenuOptions } editMenu - Extended options of the custom menu.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): SearchAttribute;

  /**
   * Sets whether to enable preview text.
   *
   * The preview content is defined as a temporary, uncommitted input state. Currently, the text interception function
   * is not supported.
   *
   * @param { boolean } enable - Whether to enable preview text.<br>**true**: Preview text is enabled. **false**:
   *     Preview text is disabled.<br>Default value: **true**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): SearchAttribute;

  /**
   * Specifies whether to enable haptic feedback.
   *
   * To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions**
   * in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.<br>**true**: Haptic feedback is enabled.
   *     **false**: Haptic feedback is disabled.<br>Default value: **true**
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): SearchAttribute;

  /**
   * Sets the text auto-capitalization mode. This API provides the capability, but actual implementation depends on the
   * input method application.
   *
   * @param { AutoCapitalizationMode } mode - Auto-capitalization mode. The default state is inactive.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): SearchAttribute;

  /**
   * Enables half leading for text, which splits the leading equally between the top and bottom of the line.
   *
   * @param { Optional<boolean> } halfLeading - Whether half leading is enabled. Half leading refers to splitting the
   *     leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is
   *     enabled. **false**: Half leading is not enabled.<br>Default value: **false**
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): SearchAttribute;

  /**
   * Sets whether to prevent the back key event from being propagated.
   *
   * @param { Optional<boolean> } isStopped - Whether to prevent the back key event from being propagated.<br>**true**:
   *     Propagation is prevented. **false**: Propagation is allowed.<br>Default value: **true** The default value is
   *     used for abnormal values.
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): SearchAttribute;

  /**
   * Called when the text content is about to change.
   *
   * This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and
   * **onDidDelete**.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback invoked when the text content is about to
   *     change.<br>Returning **true** allows the change to proceed, while returning **false** cancels the change.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): SearchAttribute;

  /**
   * Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For
   * details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).
   *
   * @param { Optional<KeyboardAppearance> } appearance - Appearance of the keyboard.<br>Default value:
   *     **KeyboardAppearance.NONE_IMMERSIVE**
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): SearchAttribute;

  /**
   * Sets the text stroke width.
   *
   * @param { Optional<LengthMetrics> } width - Text stroke width. When the unit of **LengthMetrics** is px:<br>Values <
   *     0: solid text.<br>Values > 0: outlined text.<br>Default value: **0** (no stroke)
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): SearchAttribute;

  /**
   * Sets the text stroke color.
   *
   * @param { Optional<ResourceColor> } color - Stroke color. Default value: font color. Invalid values are treated as
   *     the default value.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): SearchAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.<
   *     br>**true**: Enabled. **false**: Disabled.<br>Default value: **false**
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): SearchAttribute;

  /**
   * Sets the color of the text box divider.
   *
   * @param { Optional<ColorMetrics> } color - Divider color.<br>By default, system theme colors are used: 0x33000000 in
   *     light mode (appears as light black), 0x33FFFFFF in dark mode (appears as light white).
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  dividerColor(color: Optional<ColorMetrics>): SearchAttribute;

  /**
   * Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no
   * spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing to the first and last lines to avoid text truncation.
   *     <br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and
   *     last lines.
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): SearchAttribute;

  /**
   * Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when
   * the line height is less than the actual text height. If this API is not set, the line height does not adapt to the
   * actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height is adapted to the actual text height.<br>**true**:
   *     Line height is adapted to the actual text height. **false**: Line height is not adapted to the actual text
   *     height.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): SearchAttribute;

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
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): SearchAttribute;

  /**
   * Sets the drag preview style for text being dragged in the search box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Drag preview style for text being dragged in the search
   *     box.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and
   *     black in dark mode.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): SearchAttribute;

  /**
   * Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Defines the text layout direction.<br>If this parameter is set to
   *     **undefined**, the text layout direction follows the component layout direction as defined by
   *     **TextDirection.DEFAULT**.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): SearchAttribute;

  /**
   * Set the join style of the stroke.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - The join style of stroke.
   *     Passing `undefined` resets it to the default value
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): SearchAttribute;

  /**
   * Set the shader style of the text, such as lineargradient or radialgradient.
   *
   * @param { ShaderStyle | undefined } shader - The shader style of the text.
   *     Passing `undefined` resets it to the default value.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  shaderStyle(shader: ShaderStyle | undefined): SearchAttribute;
}

/**
 * The **Search** component provides an area for users to enter search queries.
 *
 * > **NOTE**
 *
 * > This component supports plain text only. For rich text, use the [RichEditor]{@link rich_editor} component.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Search: SearchInterface;

/**
 * Defines Search Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const SearchInstance: SearchAttribute;