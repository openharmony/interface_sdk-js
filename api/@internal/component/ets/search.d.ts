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
 * The controller of the Search component inherits from [TextContentControllerBase]{@link TextContentControllerBase},
 * and the involved APIs include [getTextContentRect]{@link TextContentControllerBase#getTextContentRect},
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount},
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}, [addText]{@link TextContentControllerBase#addText},
 * [deleteText]{@link TextContentControllerBase#deleteText},
 * [getSelection]{@link TextContentControllerBase#getSelection},
 * [clearPreviewText]{@link TextContentControllerBase#clearPreviewText},
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder},
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward},
 * [scrollToVisible]{@link TextContentControllerBase#scrollToVisible}<!--Del-->and the system API
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->.
 *
 * ###### Import Object
 *
 * ```ts
 * controller: SearchController = new SearchController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class SearchController extends TextContentControllerBase {
  /**
   * Constructor of SearchController.
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
   * @param { number } value - Length from the start of the string to the cursor position.</br>When value is less than
   *     0, it is processed as 0. When value is greater than the string length, it is processed as the string length.
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
   * When the component is in focus, this API is called to set the text selection area and highlight it. The text is
   * selected and highlighted only when selectionStart is less than selectionEnd.
   *
   * > **NOTE**
   * >
   * > - If selectionStart or selectionEnd is set to undefined, it is treated as 0.
   * >
   * > - If selectionMenuHidden is set to true or the device is a 2-in-1 device, no menu is displayed when
   * > setTextSelection is called, even if options is set to MenuPolicy.SHOW.
   * >
   * > - If the selected text contains emojis, an emoji is selected when its start position falls within the set text
   * > selection area.
   *
   * @param { number } selectionStart - Start position of the text selection area. The start position of the text in the
   *     text box is 0.
   *     <br>If selectionStart is less than 0, it is treated as 0. If selectionStart is greater than the maximum text
   *     length, it is treated as the maximum text length.
   *     <br>
   * @param { number } selectionEnd - End position of the text selection area.
   *     <br>If selectionEnd is less than 0, it is treated as 0. If selectionEnd is greater than the maximum text
   *     length, it is treated as the maximum text length.
   *     <br>
   * @param { SelectionOptions } [options] - Configuration for the selected text.
   *     <br>Default value: MenuPolicy.DEFAULT.
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
   * Constant display style of the clear button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CONSTANT,

  /**
   * Constant hidden style of the clear button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INVISIBLE,

  /**
   * Input style of the clear button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INPUT,
}

/**
 * Enumerates the search input box types.
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
   * Pure number input mode.
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
   * Number input mode with a decimal point.
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
   * default after the component gains focus.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  ONE_TIME_CODE = 14
}

/**
 * Initialization parameters of Search.
 *
 * > **NOTE**
 * >
 * > To standardize the definition of anonymous objects, the element definitions here were modified in API version 18.
 * > The since version information of the historical anonymous objects is retained, which may result in the @since
 * > version number of an outer element being higher than that of an inner element. This does not affect the use of the
 * > API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare interface SearchOptions {
  /**
   * Sets the search text currently displayed. Pass this parameter when you need to set the initial text content of the
   * search box. If it is not passed, the search box is empty.
   *
   * Since API version 10, this parameter supports [$$](docroot://ui/state-management/arkts-two-way-sync.md) two-way
   * binding variables.
   *
   * Since API version 18, this parameter supports
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters) two-
   * way binding variables.
   *
   * Since API version 20, the Resource type is supported.
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
   * Sets the placeholder text displayed when there is no input. Pass this parameter when you need to customize the
   * placeholder text. If it is not passed, no placeholder text is displayed.
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
   * Sets the path of the search icon. The system search icon is used by default.
   *
   * **NOTE**
   *
   * The data source of icon supports
   * [displaying an image using a relative path](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#example-25-displaying-an-image-using-a-relative-path)
   * and network images.
   *
   * - The supported image formats include png, jpg, bmp, svg, gif, pixelmap, and heif.
   *
   * - Base64 strings are supported. Format data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data], where
   * [base64 data] is the Base64 string data.
   *
   * If this parameter is set together with the searchIcon attribute, searchIcon takes precedence.
   *
   * On wearable devices, the default icon size is 16 vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: string;

  /**
   * Sets the controller of the Search component. Pass this parameter when you need to operate the search box through
   * the controller (for example, setting the cursor position or stopping editing). If it is not passed, the controller-
   * related methods cannot be used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  controller?: SearchController;
}

/**
 * The search box component supports configuration of the search icon, clear button, search button, placeholder text,
 * custom keyboard, and other features. It is applicable to scenarios such as the search content input box of a browser
 * and in-app search.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs of later versions are marked with a superscript to
 * > indicate their earliest version.
 * >
 * > - This component supports only a single text style. To implement a rich text style, use the
 * > [RichEditor]{@link ./rich_editor} component.
 * >
 * > - To set whether to clear text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
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
   * @param { SearchOptions } [options] - Initialization options of the search box component. Pass this parameter when you
   *     need to set the initial value, placeholder text, icon, or controller of the search box. If this parameter is not
   *     passed, the default configuration is used. [since 18]
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
   * Icon size. The default unit is vp when no unit is specified. Percentage is not supported; if a percentage is
   * passed, it does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: Length;

  /**
   * Icon color. If not set, the default color is used (in light mode, '#99182431', which is dark gray with 60% opacity;
   * in dark mode, '#99ffffff', which is white with 60% opacity).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color?: ResourceColor;

  /**
   * Icon/image source. If not set, the system default icon is used.
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
   * Font size of the text button. If no unit is specified, the default unit is vp. Percentage is not supported. If a
   * percentage is passed in, it does not take effect.
   *
   * Default value: follows the theme. **Atomic service API:** This API is supported in atomic services since API
   * version 11.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontSize?: Length;

  /**
   * Font color of the text button. **Atomic service API:** This API is supported in atomic services since API version
   * 11.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Whether the button is grayed out and not clickable when the Search component has no text content.
   *
   * Default value: false
   *
   * true indicates that the button graying-out feature is enabled, and false indicates that it is not enabled.
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
   * Display state of the clear button on the right. Default value: CancelButtonStyle.INPUT.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * Icon of the clear button on the right. If not passed, the default clear icon style is used.
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
   * Display state of the clear button on the right. Default value: CancelButtonStyle.INPUT.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  style?: CancelButtonStyle;

  /**
   * Symbol icon of the clear button on the right. If not set, the default clear icon style is used.
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
 * Callback invoked when the search icon or search button is tapped, or when the search button on the soft keyboard is
 * pressed.
 *
 * @param { string } searchContent - Text content entered in the current search box.
 * @param { SubmitEvent } [event] - Submit event object, which can be used to keep the Search component in the editing
 *     state. If it is not passed in, the editing state cannot be kept.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SearchAttribute extends CommonMethod<SearchAttribute> {
  /**
   * Sets the search button at the end of the search box.
   *
   * Tapping the search button triggers both the onSubmit and onClick callbacks.
   *
   * On Wearable devices, the default font size is 18fp.
   *
   * @param { string } value - Text content of the search button at the end of the search box.
   *     <br>Since API version 20, the Resource type is supported. [since 8 - 19]
   * @param { ResourceStr } value - Text content of the search button at the end of the search box.
   *     <br>Since API version 20, the Resource type is supported. [since 20]
   * @param { SearchButtonOption } option - Configures the style of the search button at the end of the search box.
   *     <br>Default value:
   *     <br>{
   *     <br>fontSize: '16fp',
   *     <br>fontColor: '#ff3f97e9'
   *     <br>} [since 8 - 9]
   * @param { SearchButtonOptions } option - Configures the style of the search button at the end of the search box.
   *     <br>Default value:
   *     <br>{
   *     <br>fontSize: '16fp',
   *     <br>fontColor: '#ff3f97e9'
   *     <br>} [since 10]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  searchButton(value: ResourceStr, option?: SearchButtonOptions): SearchAttribute;

  /**
   * Sets the font color of the input text. If this API is not called, the default font color of the input text is '#FF1
   * 82431' (dark gray), and on Wearable devices the default is '#dbffffff' (white, with an opacity of 86%). fontSize,
   * fontStyle, fontWeight, and fontFamily are set in [textFont]{@link SearchAttribute#textFont}.
   *
   * > **NOTE**
   * >
   * > When both fontColor and [shaderStyle]{@link SearchAttribute#shaderStyle} are set, fontColor does not take effect.
   *
   * @param { ResourceColor } value - Font color of the input text.
   *     <br>**Note:**
   *     <br>When both fontColor and [shaderStyle]{@link SearchAttribute#shaderStyle} are set, fontColor does not take
   *     effect.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  fontColor(value: ResourceColor): SearchAttribute;

  /**
   * Sets the style of the search icon on the left. If this attribute is set together with the icon parameter, this
   * attribute takes effect preferentially.
   *
   * On Wearable devices, the default icon size is 16 vp.
   *
   * @param { IconOptions } value - Style of the search icon on the left. If this attribute is set together with the
   *     icon parameter, this attribute takes effect preferentially.<!--RP1-->
   *     <br>Default value in light mode:
   *     <br>{
   *     <br>size: '16vp',
   *     <br>color: '#99182431',
   *     <br>src: ' '
   *     <br>}
   *     <br>Default value in dark mode:
   *     <br>{
   *     <br>size: '16vp',
   *     <br>color: '#99ffffff',
   *     <br>src: ' '
   *     <br>} <!--RP1End--> [since 10 - 11]
   * @param { IconOptions | SymbolGlyphModifier } value - Style of the search icon on the left. If this attribute is set
   *     together with the icon parameter, this attribute takes effect preferentially.<!--RP1-->
   *     <br>Default value in light mode:
   *     <br>{
   *     <br>size: '16vp',
   *     <br>color: '#99182431',
   *     <br>src: ' '
   *     <br>}
   *     <br>Default value in dark mode:
   *     <br>{
   *     <br>size: '16vp',
   *     <br>color: '#99ffffff',
   *     <br>src: ' '
   *     <br>} <!--RP1End--> [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  searchIcon(value: IconOptions | SymbolGlyphModifier): SearchAttribute;

  /**
   * Sets the style of the clear button on the right. For details, see
   * [Example 2: Setting Search and Delete Icons](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-2-setting-search-and-delete-icons)
   * and
   * [Example 11: Setting a Custom Symbol-Type Cancel Button](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-11-setting-a-custom-symbol-type-cancel-button).
   * If this API is not used, the default clear button style is CancelButtonStyle.INPUT (input style), with an icon size
   * of 16 vp (18 fp on wearable devices) and a color of '#99ffffff' (white with 60% opacity).
   *
   * @param { object } value - Style of the clear button on the right. When style is CancelButtonStyle.CONSTANT, the
   *     clear style is displayed by default. [since 10 - 11]
   * @param { CancelButtonOptions | CancelButtonSymbolOptions } value - Style of the clear button on the right. When
   *     style is CancelButtonStyle.CONSTANT, the clear style is displayed by default. [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): SearchAttribute;

  /**
   * Sets whether to perform entity recognition on the selected text. This API depends on the text recognition
   * capability of the underlying device; otherwise, the setting does not take effect. If this API is not called, entity
   * recognition on the selected text is enabled by default, all types of entities are recognized, and the AI menu
   * feature is enabled by default.
   *
   * When enabled, entities such as email addresses, phone numbers, URLs, dates, and addresses in the selection can be
   * recognized, and the corresponding AI menu items are displayed in the text selection menu.
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
   * @param { boolean | undefined } enable - Whether to enable entity recognition on the selected text.
   *     <br>true: enables recognition; false: disables recognition.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  enableSelectedDataDetector(enable: boolean | undefined): SearchAttribute;

  /**
   * Sets the indentation of the first line of text. If this API is not called, the default indentation of the first
   * line is 0.
   *
   * @param { Dimension } value - Indentation of the first line of text.
   *     <br>Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Value range: greater than or equal to 0. If a negative value is set, the default value is used.
   * @returns { SearchAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  textIndent(value: Dimension): SearchAttribute;

  /**
   * Sets an input filter through a regular expression. Input that matches the expression is allowed to be displayed,
   * and input that does not match is filtered out. This is applicable to scenarios where the user input format needs to
   * be restricted, for example, allowing only letters, digits, or specific characters.
   *
   * In the single-character input scenario, only single-character matching is supported. In the multi-character input
   * scenario, string matching is supported, for example, pasting.
   *
   * If inputFilter is set and the input character is not an empty character, the text filtering effect attached to the
   * input box type (that is, the type API) becomes invalid.
   *
   * @param { ResourceStr } value - Regular expression of the input filter. Input that matches the expression is allowed
   *     to be displayed, and input that does not match is filtered out.
   * @param { Callback<string> } error - Returns the filtered content when the regular expression matching fails. This
   *     callback is not triggered if it is not passed in.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  inputFilter(value: ResourceStr, error?: Callback<string>): SearchAttribute;

  /**
   * Triggered when the input state changes. The component is in editing state when the cursor is present, and in non-
   * editing state when the cursor is absent.
   *
   * @param { Callback<boolean> } callback - Callback invoked when the editing state changes. The return value **true**
   *     indicates that text is being entered, and **false** indicates that the component has no focus and text cannot
   *     be entered.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onEditChange(callback: Callback<boolean>): SearchAttribute;

  /**
   * Sets the highlight color of the selected text. If this attribute is not used, the default color is '#007DFF'
   * (blue).
   *
   * @param { ResourceColor } value - Highlight color of the selected text. If the opacity is not set or is set to fully
   *     opaque, 20% opacity is used by default.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor(value: ResourceColor): SearchAttribute;

  /**
   * Sets the cursor style. If this API is not called, the default cursor width is 2.0 vp and the default color is '#007
   * DFF' (blue).
   *
   * > **NOTE**
   * >
   * > Since API version 12, this API supports setting the text handle color, and the cursor and text handle colors
   * > remain consistent.
   *
   * @param { CaretStyle } value - Cursor style.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  caretStyle(value: CaretStyle): SearchAttribute;

  /**
   * Sets the text color of the placeholder. If this API is not called, the default placeholder text color is '#99182431
   * ' (dark gray, with an opacity of 60%), and on Wearable devices the default is '#99ffffff' (white, with an opacity
   * of 60%).
   *
   * @param { ResourceColor } value - Text color of the placeholder.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderColor(value: ResourceColor): SearchAttribute;

  /**
   * Sets the placeholder text style, including font size, font weight, font family, and font style.
   *
   * On wearable devices, the default font size is 18fp.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register a custom font.
   *
   * @param { Font } value - Placeholder text style. If this parameter is not set, the default system font style is
   *     used.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  placeholderFont(value?: Font): SearchAttribute;

  /**
   * Sets the text style of the input text in the search box, including the font size, font weight, font family, and
   * font style.
   *
   * On wearable devices, the default font size is 18fp.
   *
   * > **NOTE**
   * >
   * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register a custom font.
   *
   * @param { Font } value - Text style of the input text in the search box. If this parameter is not set, the system
   *     default font style is used.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textFont(value?: Font): SearchAttribute;

  /**
   * Sets the Enter key type of the input method. If this API is not called, the default Enter key type of the input
   * method is EnterKeyType.Search.
   *
   * @param { EnterKeyType } value - Enter key type of the input method.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enterKeyType(value: EnterKeyType): SearchAttribute;

  /**
   * Triggered when the search icon or search button is clicked, or when the search button on the soft keyboard is
   * pressed.
   *
   * @param { function } callback - Callback for search submission, whose return value is the text entered in the
   *     current search box. [since 8 - 17]
   * @param { Callback<string> } callback - Callback for search submission, whose return value is the text entered in
   *     the current search box. [since 18]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSubmit(callback: Callback<string>): SearchAttribute;

  /**
   * Triggered when the search icon or search button is clicked, or when the search button on the soft keyboard is
   * pressed. When the event is submitted, a method is provided to keep the Search component in the editing state.
   *
   * @param { SearchSubmitCallback } callback - Callback invoked when the search icon or search button is clicked, or
   *     when the search button on the soft keyboard is pressed.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onSubmit(callback: SearchSubmitCallback): SearchAttribute;

  /**
   * Triggered when the input content changes.
   *
   * In this callback, if a cursor operation is performed, the developer needs to adjust the cursor logic based on the
   * previewText parameter in the preview scenario to adapt to the preview scenario.
   *
   * > **NOTE**
   * >
   * > onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. It can return false to intercept the change; returning true
   * > allows the change, and then onChange is triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   *
   * @param { function } callback - Callback invoked when the current input text content changes. [since 8 - 11]
   * @param { EditableTextOnChangeCallback } callback - Callback invoked when the current input text content
   *     changes. [since 12]
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: EditableTextOnChangeCallback): SearchAttribute;

  /**
   * Triggered when the text selection position or the cursor position in editing state changes.
   *
   * @param { function } callback - Callback for the text selection change or cursor position change. [since 10 - 17]
   * @param { OnTextSelectionChangeCallback } callback - Callback for the text selection change or cursor position
   *     change. [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onTextSelectionChange(callback: OnTextSelectionChangeCallback): SearchAttribute;

  /**
   * Triggered when the text content scrolls.
   *
   * @param { function } callback - Callback for text content scrolling. The callback parameters include totalOffsetX (
   *     horizontal scroll offset) and totalOffsetY (vertical scroll offset). [since 10 - 17]
   * @param { OnContentScrollCallback } callback - Callback for text content scrolling. The callback parameters include
   *     totalOffsetX (horizontal scroll offset) and totalOffsetY (vertical scroll offset). [since 18]
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  onContentScroll(callback: OnContentScrollCallback): SearchAttribute;

  /**
   * Triggered when a copy operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCopy and onCopy form a will/did timing pattern:
   * >
   * > - onWillCopy is triggered before the copy operation. It can return false to intercept the copy operation;
   * > returning true allows the copy, and then onCopy is triggered.
   * >
   * > - onCopy is triggered after the copy operation is completed and cannot intercept it.
   * >
   * > - The two can be used together: onWillCopy is used for interception control, and onCopy is used to obtain the
   * > copy result.
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
   * Triggered before a copy operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCopy and onCopy form a will/did timing pattern:
   * >
   * > - onWillCopy is triggered before the copy operation. Returning false intercepts the copy operation; returning
   * > true allows the copy, and then onCopy is triggered.
   * >
   * > - onCopy is triggered after the copy operation is completed and cannot intercept it.
   * >
   * > - The two can be used together: onWillCopy is used for interception control, and onCopy is used to obtain the
   * > copy result.
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the copy operation. When the callback
   *     returns a string, it indicates the text content to be copied. When the callback returns a boolean, it indicates
   *     whether the currently selected text is allowed to be copied. The value true means that the text is allowed to
   *     be copied, and false means that the text is not allowed to be copied.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onWillCopy(callback: Callback<string, boolean>): SearchAttribute;

  /**
   * Triggered when a cut operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCut and onCut form a will/did timing pattern:
   * >
   * > - onWillCut is triggered before the cut operation. It can return false to intercept the cut operation; returning
   * > true allows the cut, and then onCut is triggered.
   * >
   * > - onCut is triggered after the cut operation is completed and cannot be intercepted.
   * >
   * > - The two can be used together: onWillCut is used for interception control, and onCut is used to obtain the cut
   * > result.
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
   * Triggered before a cut operation is performed.
   *
   * > **NOTE**
   * >
   * > onWillCut and onCut form a will/did timing pattern:
   * >
   * > - onWillCut is triggered before the cut operation. Returning false intercepts the cut operation; returning true
   * > allows the cut, after which onCut is triggered.
   * >
   * > - onCut is triggered after the cut operation is completed and cannot intercept it.
   * >
   * > - The two can be used together: onWillCut is used for interception control, and onCut is used to obtain the cut
   * > result.
   *
   * @param { Callback<string, boolean> } callback - Callback invoked before the cut operation. When the callback
   *     parameter type is string, it indicates the text content to be cut. When the callback return value is boolean,
   *     it indicates whether the currently selected text is allowed to be cut. true: the text is allowed to be cut;
   *     false: the text is not allowed to be cut.
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
   * Sets whether the entered text can be copied. If this API is not called, device-local copy (CopyOptions.LocalDevice)
   * is supported by default.
   *
   * When CopyOptions.None is set, the text in the current Search component cannot be copied, cut, translated, shared,
   * searched, or assisted, but paste and select all are supported.
   *
   * When CopyOptions.None is set, dragging is not allowed.
   *
   * @param { CopyOptions } value - Whether the entered text can be copied.
   *     <br>**Note:**
   *     <br>When copyOption is not CopyOptions.LocalDevice or CopyOptions.CROSS_DEVICE,
   *     [enableSelectedDataDetector]{@link SearchAttribute#enableSelectedDataDetector} does not take effect.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): SearchAttribute;

  /**
   * Sets the maximum number of characters that can be entered in the text. By default, no maximum input character limit
   * is set. When the maximum character limit is reached, no more characters can be entered.
   *
   * @param { number } value - Maximum number of characters that can be entered in the text. Value range:
   *     [0, +∞). If the value is less than 0, the default value is used, and no limit is set.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  maxLength(value: number): SearchAttribute;

  /**
   * Sets the alignment of text in the search box. The supported alignment modes are TextAlign.Start, TextAlign.Center,
   * TextAlign.End, TextAlign.LEFT, and TextAlign.RIGHT. TextAlign.JUSTIFY is processed as TextAlign.Start. If this API
   * is not called, the default alignment is TextAlign.Start.
   *
   * > **NOTE**
   * >
   * > textAlign only adjusts the overall layout of the text and does not affect the display order of characters. To
   * > adjust the display order of characters, see
   * > [Bidirectional Text Layout and Alignment](docroot://ui/arkts-internationalization.md#bidirectional-text-layout-and-alignment).
   *
   * @param { TextAlign } value - Alignment of the text in the search box.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  textAlign(value: TextAlign): SearchAttribute;

  /**
   * Sets whether to proactively bring up the soft keyboard when Search gains focus by means other than tapping. If this
   * API is not called, the soft keyboard is proactively brought up by default.
   *
   * Since API version 10, focus gain is bound to the input method by default.
   *
   * @param { boolean } value - Whether to proactively bring up the soft keyboard when Search gains focus.
   *     <br>The value **true** means to proactively bring it up, and **false** means not to.
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enableKeyboardOnFocus(value: boolean): SearchAttribute;

  /**
   * Sets whether to hide the system text selection menu. If this API is not called, the system text selection menu is
   * displayed by default.
   *
   * @param { boolean } value - Whether to hide the system text selection menu.
   *     <br>When set to **true**, the system text selection menu is hidden when the input box is clicked to place the
   *     cursor, long-pressed, double-tapped, triple-tapped, or right-clicked.
   *     <br>When set to **false**, the system text selection menu is displayed.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectionMenuHidden(value: boolean): SearchAttribute;

  /**
   * Sets the minimum font size for text display. The string type supports the string form of the value of the number
   * type, and can carry a unit, for example, "10" or "10fp".
   *
   * It must be used together with [maxFontSize]{@link SearchAttribute#maxFontSize} and the layout size limit. Setting
   * it alone does not take effect.
   *
   * When the adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When minFontSize is less than or equal to 0, the adaptive font size does not take effect. In this case, the value
   * of size in the [textFont]{@link SearchAttribute#textFont} attribute takes effect; if it is not set, its default
   * value takes effect.
   *
   * @param { number | string | Resource } value - Minimum font size for text display.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  minFontSize(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the maximum font size for text display. The string type supports the string form of the value of the number
   * type, and can carry a unit, for example, "10" or "10fp".
   *
   * This attribute must be used together with [minFontSize]{@link SearchAttribute#minFontSize} and the layout size
   * limit. Setting it alone does not take effect.
   *
   * When the adaptive font size takes effect, the fontSize setting does not take effect.
   *
   * When maxFontSize is less than or equal to 0, or maxFontSize is less than minFontSize, the adaptive font size does
   * not take effect. In this case, the size value in the [textFont]{@link SearchAttribute#textFont} attribute takes
   * effect; if it is not set, its default value takes effect.
   *
   * @param { number | string | Resource } value - Maximum font size for text display.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
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
   * @param { Optional<number | Resource> } scale - Minimum font scale factor for text. The value **undefined** is
   *     supported.
   *     <br>Value range: [0, 1]
   *     <br>**Note:**
   *     <br>If the value is less than 0, it is processed as 0. If the value is greater than 1, it is processed as 1. If
   *     the value is **undefined**, the original value is retained, and abnormal values do not take effect by default.
   *     <br>Before use, configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) file and
   *     the [app.json5](docroot://quick-start/app-configuration-file.md) file in the project. For details, see
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
   * Sets the maximum font scale of the text.
   *
   * @param { Optional<number | Resource> } scale - Maximum font scale of the text. The value of the undefined type is
   *     supported.
   *     <br>Value range: [1, +∞)
   *     <br>**Note:**
   *     <br>If the value is less than 1, it is processed as 1. If the value is set to undefined, the original value is
   *     retained, and abnormal values do not take effect by default.
   *     <br>After the maxFontScale attribute is set, the content of the search component is scaled up to 2 times at
   *     most.
   *     <br>Before using this attribute, configure the
   *     [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) file and
   *     the [app.json5](docroot://quick-start/app-configuration-file.md) file in the project. For details, see
   *     [Example 19: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-19-setting-the-minimum-and-maximum-font-scale-factors).
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SearchAttribute;

  /**
   * Sets a custom keyboard.
   *
   * When a custom keyboard is set, the system input method is not opened after the input box is activated. Instead, the
   * specified custom component is loaded.
   *
   * The height of the custom keyboard can be set through the height attribute of the root node of the custom component.
   * The width cannot be set and the system default value is used.
   *
   * The custom keyboard is presented by overlaying the original UI. When the avoidance mode is not enabled or the input
   * box does not need to be avoided, the original UI of the application is not compressed or lifted.
   *
   * The custom keyboard cannot obtain focus, but it intercepts gesture events.
   *
   * By default, the custom keyboard is closed when the input control loses focus. Developers can also control the
   * closing of the keyboard through the [stopEditing]{@link SearchController#stopEditing} method.
   *
   * When a custom keyboard is set, the input from a physical keyboard can be avoided by binding the
   * [onKeyPreIme]{@link CommonMethod#onKeyPreIme} event.
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
   *     disabled. [since 10 - 21]
   * @param { CustomBuilder | ComponentContent | undefined } value - Custom keyboard. When the value is set to
   *     undefined, the custom keyboard is disabled. [since 22]
   * @param { KeyboardOptions } [options] - Whether the custom keyboard supports the avoidance feature. The default
   *     configuration is used when this parameter is not passed. [since 12]
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): SearchAttribute;

  /**
   * Sets the type, style, and color of the text decoration line. If this API is not called, the default decoration line
   * type is TextDecorationType.None (no decoration line), the color is Color.Black, the style is
   * TextDecorationStyle.SOLID, and the thickness scale is 1.0.
   *
   * > **NOTE**
   * >
   * > - When the lower edge outline of a character intersects with the decoration line, the underline avoidance rule is
   * > triggered, and the underline avoids the character at these positions. This commonly applies to English characters
   * > such as "g", "j", "y", "q", and "p".
   * >
   * > - When the color of the text decoration line is set to Color.Transparent, the decoration line color follows the
   * > font color of the first character in each line. When the color of the text decoration line is set to the
   * > transparent color hexadecimal value "#00FFFFFF", the decoration line color is set to transparent.
   *
   * @param { TextDecorationOptions } value - Text decoration line object.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  decoration(value: TextDecorationOptions): SearchAttribute;

  /**
   * Sets the character spacing of the text. When this parameter is set to a percentage, the default value is used. When
   * this parameter is set to 0, the default value is used. The string type supports the string form of a number value,
   * with an optional unit, for example, "10" and "10fp".
   *
   * When the value is negative, the text is compressed. If the negative value is too small, the content area of the
   * component is compressed to 0, and no content is displayed.
   *
   * This attribute takes effect on each character, including the character at the end of a line.
   *
   * @param { number | string | Resource } value - Character spacing of the text.
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  letterSpacing(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the line height of the text. If the value is not greater than 0, the line height is not limited and the font
   * size is adapted automatically. When the value is of the number type, the unit is fp.
   *
   * > **NOTE**
   * >
   * > When the font height of special characters far exceeds that of other characters in the same line, the text box
   * > may display unexpected anomalies such as truncation, occlusion, and changes in the relative position of content.
   * > In this case, developers need to adjust properties such as the component height and line height and modify the
   * > corresponding page layout.
   *
   * @param { number | string | Resource } value - Line height of the text.
   *     <br>When the value is of the number type, the unit is fp. When the value is of the string type, it supports the
   *     string form of a number-type value and can carry a unit, for example, "10" or "10fp".
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lineHeight(value: number | string | Resource): SearchAttribute;

  /**
   * Sets the input box type. If this API is not called, the default input box type is SearchType.NORMAL (basic input
   * mode without special restrictions).
   *
   * Different SearchType values bring up the corresponding keyboard type and restrict the input accordingly.
   *
   * > **NOTE**
   * >
   * > If the [inputFilter]{@link SearchAttribute#inputFilter} attribute is also set and the input character is not an
   * > empty character, the text filtering effect attached to the type API becomes invalid, and the filtering rules of
   * > inputFilter prevail.
   *
   * @param { SearchType } value - Input box type.
   *     <br>When [inputFilter]{@link SearchAttribute#inputFilter} is also set and the input character is not an empty
   *     character, the text filtering effect attached to the type API becomes invalid.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  type(value: SearchType): SearchAttribute;

  /**
   * Sets the font feature, such as monospaced digits.
   *
   * The format is: normal \| \<feature-tag-value\>.
   *
   * The format of \<feature-tag-value\> is: \<string\> \[ \<integer\> \| on \| off ].
   *
   * There can be multiple \<feature-tag-value\>, separated by commas.
   *
   * For example, the input format for using monospaced digits is: "ss01" on.
   *
   * @param { string } value - Font feature, used to set the advanced typographic capabilities of an OpenType font, such
   *     as ligatures and monospaced digits.
   *     <br>The format is: "ss01" on. For more supported attributes, see the
   *     [fontFeature]{@link TextAttribute#fontFeature} attribute list.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontFeature(value: string): SearchAttribute;

  /**
   * Triggered when input is about to be inserted.
   *
   * > **NOTE**
   * >
   * > onWillInsert and onDidInsert form a will/did timing pattern:
   * >
   * > - onWillInsert is triggered before the insertion operation. It can intercept the insertion by returning false;
   * > returning true allows the insertion, after which onDidInsert is triggered.
   * >
   * > - onDidInsert is triggered after the insertion is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillInsert is used for interception control, and onDidInsert is used to obtain
   * > the insertion result.
   *
   * @param { Callback<InsertValue, boolean> } callback - Callback invoked when input is about to be inserted.
   *     <br>Returning true indicates normal insertion, and returning false indicates no insertion.
   *     <br>This callback is not triggered during preview and candidate word operations.
   *     <br>It is supported only when the input is from the system input method.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillInsert(callback: Callback<InsertValue, boolean>): SearchAttribute;

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
   * > - The two can be used together, with onWillInsert for interception control and onDidInsert for obtaining the
   * > insertion result.
   *
   * @param { Callback<InsertValue> } callback - Callback invoked when input is completed.
   *     <br>Only supported in the scenario where the system input method is used for input.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidInsert(callback: Callback<InsertValue>): SearchAttribute;

  /**
   * Triggered when the content is about to be deleted.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onWillDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the delete operation. Returning false intercepts the delete operation;
   * > returning true allows the deletion, and then onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillDelete is used for interception control, and onDidDelete is used to obtain
   * > the deletion result.
   *
   * @param { Callback<DeleteValue, boolean> } callback - Callback invoked when the content is about to be deleted.
   *     <br>Returning true indicates normal deletion, and returning false indicates no deletion.
   *     <br>This callback is not triggered during the preview delete operation.
   *     <br>Only supported for input through the system input method.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDelete(callback: Callback<DeleteValue, boolean>): SearchAttribute;

  /**
   * Triggered when the deletion is complete.
   *
   * > **NOTE**
   * >
   * > - Tapping the clear button does not trigger the onDidDelete callback.
   * >
   * > - onWillDelete and onDidDelete form a will/did timing pattern:
   * >
   * > - onWillDelete is triggered before the deletion operation and can intercept the deletion by returning false;
   * > returning true allows the deletion, after which onDidDelete is triggered.
   * >
   * > - onDidDelete is triggered after the deletion is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillDelete is used for interception control, and onDidDelete is used to obtain
   * > the deletion result.
   *
   * @param { Callback<DeleteValue> } callback - Callback invoked when the deletion is complete.
   *     <br>Supported only in the scenario where the system input method is used for input.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDidDelete(callback: Callback<DeleteValue>): SearchAttribute;

  /**
   * Triggered before the search box is about to bind the input method.
   *
   * <!--Del-->
   *
   * Before the search box is about to bind the input method, you can set the keyboard style through the system API
   * [setKeyboardAppearanceConfig]{@link @ohos.arkui.UIContext:UIContext#setKeyboardAppearanceConfig} of `UIContext`. <!
   * --DelEnd-->
   *
   * Since API version 22, you can call [setExtraConfig]{@link IMEClient.setExtraConfig} of [IMEClient]{@link IMEClient}
   * to set the input method extension information. After the input method is bound successfully, the input method
   * receives the extension information and can implement custom functions based on it.
   *
   * IMEClient is valid only during the execution of onWillAttachIME and cannot be called asynchronously.
   *
   * > **NOTE**
   * >
   * > This API cannot be called in [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Callback<IMEClient> } callback - Callback invoked before the search box is about to bind the input method.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillAttachIME(callback: Callback<IMEClient>): SearchAttribute;

  /**
   * Sets custom menu extension items, allowing users to set the text content, icon, and callback method of the
   * extension items.
   *
   * When [disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems} or
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems} is
   * called to block the system service menu items in the text selection menu, the input parameter list of the callback
   * method [onCreateMenu]{@link EditMenuOptions.onCreateMenu} in the editMenuOptions API does not include the blocked
   * menu options.
   *
   * @param { EditMenuOptions } editMenu - Extension menu options, used to set the text content, icon, and callback
   *     method of the custom menu extension items. Use this parameter when custom options need to be added to the text
   *     selection menu.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  editMenuOptions(editMenu: EditMenuOptions): SearchAttribute;

  /**
   * Sets whether to enable input preview. If this API is not called, input preview is enabled by default.
   *
   * The preview content is defined as a temporary text state, and text interception is not supported.
   *
   * > **NOTE**
   * >
   * > "Input preview" describes a temporary text state. The input preview feature must be enabled in the input method.
   * > During text input, before the candidate words are confirmed, the marked text is displayed in the text box. For
   * > example, when entering Chinese through Pinyin, the Pinyin letters are displayed in the input box before the
   * > candidate words are confirmed. This state is called input preview.
   *
   * @param { boolean } enable - Whether to enable input preview.
   *     <br>The value **true** means to enable input preview, and **false** means the opposite.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enablePreviewText(enable: boolean): SearchAttribute;

  /**
   * Sets whether to enable haptic feedback. If this API is not used, haptic feedback is enabled by default.
   *
   * When haptic feedback is enabled, you need to set the **requestPermissions** field in the
   * [module.json5](docroot://quick-start/module-configuration-file.md) of the project to enable the vibration
   * permission. The configuration is as follows:
   *
   * @param { boolean } isEnabled - Whether to enable haptic feedback.
   *     <br>The value **true** means to enable haptic feedback, and **false** means the opposite.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  enableHapticFeedback(isEnabled: boolean): SearchAttribute;

  /**
   * Triggered when the text content is about to change.
   *
   * > **NOTE**
   * >
   * > - The callback timing of onWillChange is later than onWillInsert and onWillDelete, and earlier than onDidInsert
   * > and onDidDelete.
   * >
   * > - onWillChange and onChange form a will/did timing pattern:
   * >
   * > - onWillChange is triggered before the text changes. Returning false intercepts the change; returning true allows
   * > the change, and then onChange is triggered.
   * >
   * > - onChange is triggered after the change is complete and cannot intercept it.
   * >
   * > - The two can be used together: onWillChange is used for interception control, and onChange is used to obtain the
   * > change result.
   *
   * @param { Callback<EditableTextChangeValue, boolean> } callback - Callback invoked when the text content is about to
   *     change.
   *     <br>Returning true indicates a normal modification. Returning false indicates that this trigger is intercepted.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  onWillChange(callback: Callback<EditableTextChangeValue, boolean>): SearchAttribute;

  /**
   * Sets the text mode of the automatic capitalization mode. This API only provides the interface capability, and the
   * specific implementation is subject to the input method application. When this API is not called, no capitalization
   * conversion takes effect by default, and the specific implementation is subject to the input method application.
   *
   * @param { AutoCapitalizationMode } mode - Automatic capitalization mode, used to set the capitalization conversion
   *     rule of the input method. The specific implementation is subject to the input method application.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  autoCapitalizationMode(mode: AutoCapitalizationMode): SearchAttribute;

  /**
   * Vertically centers the text within a line by evenly distributing the line spacing to the top and bottom of the
   * line. This is applicable to scenarios where precise vertical centering of text is required in multi-line text
   * layout, such as mixed text and icon layout and multi-language mixed layout. If this API is not called, the line
   * spacing is not evenly distributed by default.
   *
   * @param { Optional<boolean> } halfLeading - Whether to vertically center the text.
   *     <br>true means the line spacing is evenly distributed to the top and bottom of the line, and false means it is
   *     not.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  halfLeading(halfLeading: Optional<boolean>): SearchAttribute;

  /**
   * Sets whether to prevent the back key event from being propagated upward. When set to true, the back key event is
   * intercepted and the default system back behavior is not triggered. When set to false, the back key event is
   * propagated upward normally. This API applies to scenarios where custom back key behavior is required, for example,
   * preventing the back key from directly exiting during a search to avoid misoperation, or displaying a confirmation
   * prompt before exiting. If this API is not called, the back key is blocked by default.
   *
   * @param { Optional<boolean> } isStopped - Whether to block the back key.
   *     <br>The value true means to block, and false means not to block.
   *     <br>An invalid value uses the default value.
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 15 dynamic
   */
  stopBackPress(isStopped: Optional<boolean>): SearchAttribute;

  /**
   * Sets the keyboard style displayed when the input box is pulled up. This takes effect only after the input method
   * adapts to it. If this API is not used, the default keyboard style is KeyboardAppearance.NONE_IMMERSIVE (non-
   * immersive mode). For details, see
   * [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).
   *
   * @param { Optional<KeyboardAppearance> } appearance - Keyboard style.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  keyboardAppearance(appearance: Optional<KeyboardAppearance>): SearchAttribute;

  /**
   * Sets the width of the text stroke. If this API is not called, the default value 0 is used, and no stroke is
   * applied.
   *
   * > **NOTE**
   * >
   * > When both strokeWidth and [shaderStyle]{@link SearchAttribute#shaderStyle} are set, shaderStyle does not take
   * > effect.
   *
   * @param { Optional<LengthMetrics> } width - Width of the text stroke. When the unit attribute of the LengthMetrics
   *     object is LengthUnit.PERCENT, the current setting does not take effect and the default value is used.
   *     <br>If the value is less than 0, solid characters are displayed; if the value is greater than 0, hollow
   *     characters are displayed.
   *     <br>**Note:**
   *     <br>When both strokeWidth and [shaderStyle]{@link SearchAttribute#shaderStyle} are set, shaderStyle does not
   *     take effect.
   *     <br>[strokeJoinStyle]{@link SearchAttribute#strokeJoinStyle} takes effect only when strokeWidth is used to set
   *     the text stroke.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeWidth(width: Optional<LengthMetrics>): SearchAttribute;

  /**
   * Sets the color of the text stroke.
   *
   * @param { Optional<ResourceColor> } color - Stroke color. If this API is not called, the default stroke color is the
   *     font color. If an invalid value is set, the default value is used. This attribute takes effect only when the
   *     stroke width is set through [strokeWidth]{@link SearchAttribute#strokeWidth}.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  strokeColor(color: Optional<ResourceColor>): SearchAttribute;

  /**
   * Sets whether to enable automatic spacing between Chinese and Western characters. If this API is not called,
   * automatic spacing between Chinese and Western characters is disabled by default.
   *
   * @param { Optional<boolean> } enabled - Whether to enable automatic spacing between Chinese and Western characters.
   *     <br>true enables automatic spacing, and false disables it.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  enableAutoSpacing(enabled: Optional<boolean>): SearchAttribute;

  /**
   * Sets the divider color of the input box.
   *
   * @param { Optional<ColorMetrics> } color - Sets the divider color.
   *     <br>By default, the system theme color is used: 0x33000000 in light mode, which indicates black (20% opacity),
   *     and 0x33FFFFFF in dark mode, which indicates white (20% opacity).
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  dividerColor(color: Optional<ColorMetrics>): SearchAttribute;

  /**
   * Sets whether to add spacing before the first line and after the last line to prevent text truncation. If this API
   * is not used, no spacing is added by default.
   *
   * @param { Optional<boolean> } include - Whether to add spacing before the first line and after the last line to
   *     prevent text truncation.
   *     <br>true indicates that spacing is added before the first line and after the last line; false indicates that
   *     spacing is not added.
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  includeFontPadding(include: Optional<boolean>): SearchAttribute;

  /**
   * For multi-line text stacking, supports adaptive line height based on the actual text height. This API takes effect
   * only when the line height is smaller than the actual text height. If this API is not used, the line height does not
   * adapt to the actual text height by default.
   *
   * @param { Optional<boolean> } enabled - Whether the line height adapts to the actual text height.
   *     <br>This API takes effect only when the line height is smaller than the actual text height.
   *     <br>The value **true** means the line height adapts to the actual text height, and **false** means the line
   *     height does not adapt to the actual text height.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fallbackLineSpacing(enabled: Optional<boolean>): SearchAttribute;

  /**
   * Sets whether to compress the leading punctuation at the beginning of a line. When enabled, the spacing to the left
   * of the leading punctuation is compressed, which is suitable for CJK text scenarios such as Chinese and Japanese
   * that pursue typographic aesthetics.
   *
   * > **NOTE**
   * >
   * > - Leading punctuation is not compressed by default.
   * >
   * > - For the punctuation that can be compressed, see the leading punctuation compression range in
   * > [ParagraphStyle]{@link @ohos.graphics.text:text.ParagraphStyle}.
   *
   * @param { Optional<boolean> } enabled - Whether to compress the leading punctuation at the beginning of a line.
   *     <br>true means to compress the leading punctuation; false means not to compress it.
   * @returns { SearchAttribute } - returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  compressLeadingPunctuation(enabled: Optional<boolean>): SearchAttribute;

  /**
   * Sets the backplane style for text dragging in the search box.
   *
   * @param { SelectedDragPreviewStyle | undefined } value - Backplane style for text dragging.
   *     <br>When set to undefined: the backplane color follows the theme, showing white in light mode and black in dark
   *     mode.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): SearchAttribute;

  /**
   * Specifies the text layout direction. If this API is not called, the default text layout direction follows the
   * component layout direction.
   *
   * @param { TextDirection | undefined } direction - Text layout direction.
   *     <br>When set to undefined, it is processed as TextDirection.DEFAULT, meaning that the text layout direction
   *     follows the component layout direction.
   * @returns { SearchAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  textDirection(direction: TextDirection | undefined): SearchAttribute;

  /**
   * Sets the corner style of the text stroke. This attribute takes effect only when the text stroke is set using
   * strokeWidth.
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - Corner style of the text stroke.
   *     <br>If the value is undefined, the style is processed as StrokeJoinStyle.MITER_JOIN. For details, see
   *     [StrokeJoinStyle]{@link StrokeJoinStyle}. In this case, the text corner is rendered as a sharp angle.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): SearchAttribute;

  /**
   * Sets the text shader effect, such as linear gradient and radial gradient. If this API is not called, no gradient
   * effect is applied by default.
   *
   * > **NOTE**
   * >
   * > - When both shaderStyle and [strokeWidth]{@link SearchAttribute#strokeWidth} are set, shaderStyle does not take
   * > effect.
   * >
   * > - When both shaderStyle and [fontColor]{@link SearchAttribute#fontColor} are set, fontColor does not take effect.
   *
   * @param { ShaderStyle | undefined } shader - Text shader effect.
   *     <br>**NOTE**
   *     <br>When both shaderStyle and [strokeWidth]{@link SearchAttribute#strokeWidth} are set, shaderStyle does not
   *     take effect.
   *     <br>When both shaderStyle and [fontColor]{@link SearchAttribute#fontColor} are set, fontColor does not take
   *     effect.
   *     <br>When the value is undefined, no gradient effect is applied.
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
 * The search box component supports configuration of the search icon, clear button, search button, placeholder text,
 * custom keyboard, and other features. It is applicable to scenarios such as the search content input box of a browser
 * and in-app search.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 8. New APIs of later versions are marked with a superscript to
 * > indicate their earliest version.
 * >
 * > - This component supports only a single text style. To implement a rich text style, use the
 * > [RichEditor]{@link ./rich_editor} component.
 * >
 * > - To set whether to clear text selection and handles when touching outside the text component, use the
 * > [setTextSelectionClearPolicy]{@link @ohos.arkui.UIContext:UIContext.setTextSelectionClearPolicy} API.
 *
 * ###### Child Components
 *
 * None
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