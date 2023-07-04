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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SearchController extends TextContentControllerBase {
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
   * Exit edit state.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  stopEditing(): void;
}

/**
 * Enum for the style of cancel button
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum CancelButtonStyle {
  /**
   * The value of button style constant
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  CONSTANT,

  /**
   * The value of button style invisible
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  INVISIBLE,

  /**
   * The value of button style input
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  INPUT
}

/**
 * The construct function of search
 * @since 8
 */
/**
 * The construct function of search
 * @crossplatform
 * @since 10
 */
interface SearchInterface {
  (options?: {
    /**
     * Text input in the search text box
     * @type { string }
     * @since 8
     */
    value?: string;

    /**
     * Text displayed when there is no input
     * @type { string }
     * @since 8
     */
    /**
     * Text displayed when there is no input
     * @type { ResourceStr }
     * @since 10
     */
    placeholder?: ResourceStr;

    /**
     * Path to the search icon
     * @type { string }
     * @since 8
     */
    icon?: string;

    /**
     * Controller of the <Search> component
     * @type { SearchController }
     * @since 8
     */
    controller?: SearchController
  }): SearchAttribute;
}

/**
 * Defines the icon options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface IconOptions {
  /**
   * Set the icon size
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  size?: Length;

  /**
   * Set the icon color
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor;

  /**
   * Set the icon resource
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  src?: ResourceStr;
}

/**
 * Defines the cursor style
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface CaretStyle {
  /**
   * Set the cursor width
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  width?: Length,

  /**
   * Set the cursor color
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color?: ResourceColor,
}

/**
 * Defines the SearchButton options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SearchButtonOptions {
  /**
   * Set the SearchButton fontSize
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontSize?: Length;

  /**
   * Set the SearchButton fontColor
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontColor?: ResourceColor;
}

/**
 * The attribute function of search
 * @since 8
 */
/**
 * The attribute function of search
 * @crossplatform
 * @since 10
 */
declare class SearchAttribute extends CommonMethod<SearchAttribute> {
  /**
   * Set the search button text
   * @param { string } value - indicates the text of the search button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the search button text, fontSize and fontColor
   * @param { string } value - indicates the text of the search button.
   * @param { SearchButtonOption } option - indicates the fontSize and fontColor of the search button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  searchButton(value: string, option?: SearchButtonOption): SearchAttribute;

  /**
   * Set the text Color
   * @param { ResourceColor } value - indicates the color of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): SearchAttribute;

  /**
   * Set the search icon style
   * @param { IconOptions } value - indicates the style of the search icon.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  searchIcon(value: IconOptions): SearchAttribute;

  /**
   * Set the cancel button style
   * @param { {style?: CancelButtonStyle, icon?: IconOptions} } value - indicates the style of the cancel button.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  cancelButton(value: { style?: CancelButtonStyle, icon?: IconOptions }): SearchAttribute;

  /**
   * Set the cursor style
   * @param { CaretStyle } value - indicates the style of the cursor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  caretStyle(value: CaretStyle): SearchAttribute;

  /**
   * Set the place hold text color
   * @since 8
   */
  /**
   * Set the place hold text color
   * @crossplatform
   * @since 10
   */
  placeholderColor(value: ResourceColor): SearchAttribute;

  /**
   * Set the font used for place holder text
   * @since 8
   */
  /**
   * Set the font used for place holder text
   * @crossplatform
   * @since 10
   */
  placeholderFont(value?: Font): SearchAttribute;

  /**
   * Set the font used for input text
   * @since 8
   */
  /**
   * Set the font used for input text
   * @crossplatform
   * @since 10
   */
  textFont(value?: Font): SearchAttribute;

  /**
   * Call the function when clicked the search button
   * @since 8
   */
  /**
   * Call the function when clicked the search button
   * @crossplatform
   * @since 10
   */
  onSubmit(callback: (value: string) => void): SearchAttribute;

  /**
   * Call the function when editing the input text
   * @since 8
   */
  /**
   * Call the function when editing the input text
   * @crossplatform
   * @since 10
   */
  onChange(callback: (value: string) => void): SearchAttribute;

  /**
   * Called when the text selection changes.
   * @param { (selectionStart: number, selectionEnd: number) => void } callback - callback of the listened event.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): SearchAttribute;

  /**
   * Called when the content scrolls.
   * @param { (totalOffsetX: number, totalOffsetY: number) => void } callback - callback of the listened event.
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): SearchAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCopy(callback: (value: string) => void): SearchAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onCut(callback: (value: string) => void): SearchAttribute;

  /**
   * Called when using the Clipboard menu
   * @since 8
   */
  /**
   * Called when using the Clipboard menu
   * @crossplatform
   * @since 10
   */
  onPaste(callback: (value: string) => void): SearchAttribute;

  /**
   * Called when the copy option is set.
   * @since 9
   */
  /**
   * Called when the copy option is set.
   * @crossplatform
   * @since 10
   */
  copyOption(value: CopyOptions): SearchAttribute;

  /**
   * Called when the text align is set.
   * @since 9
   */
  /**
   * Called when the text align is set.
   * @crossplatform
   * @since 10
   */
  textAlign(value: TextAlign): SearchAttribute;

  /**
   * Sets whether request keyboard or not when on focus.
   * @param { boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
   * @crossplatform
   * @since 10
   */
  enableKeyboardOnFocus(value: boolean): SearchAttribute;

  /**
   * Controls whether the selection menu pops up.
   * @param { boolean } value
   * @default false
   * @returns { SearchAttribute } returns the instance of the SearchAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  selectionMenuHidden(value: boolean): SearchAttribute;
}

/**
 * Defines Search Component.
 * @since 8
 */
/**
 * Defines Search Component.
 * @crossplatform
 * @since 10
 */
declare const Search: SearchInterface;

/**
 * Defines Search Component instance.
 * @since 8
 */
/**
 * Defines Search Component instance.
 * @crossplatform
 * @since 10
 */
declare const SearchInstance: SearchAttribute;
