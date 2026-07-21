
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { CommonMethod, BlurStyle, Bindable } from './common';
import { ResourceColor, Length, Position } from "./units";
import { Font } from "./units";
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
/**
 * indexer align property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum IndexerAlign {

  /**
   * A dialog box is displayed on the right of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Right,

  /**
   * A dialog box is displayed on the start of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START,

  /**
   * A dialog box is displayed on the end of the index bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END
}
/**
 * AlphabetIndexer constructor options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AlphabetIndexerOptions {

  /**
   * Alphabetical index string array.
   * Anonymous Object Rectification.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arrayValue: Array<string>;

  /**
   * ID of the selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selected: int | Bindable<int>;
}
/**
 * Defines an AlphabetIndexer callback when onSelect.
 *
 * @param { int } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerSelectCallback = (index: int) => void;
/**
 * Defines an AlphabetIndexer callback when onPopupSelect.
 *
 * @param { int } index - selected index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerPopupSelectCallback = (index: int) => void;
/**
 * Defines an AlphabetIndexer callback when onRequestPopupData.
 *
 * @param { int } index - selected index
 * @returns { Array<string> } string array corresponding to the index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnAlphabetIndexerRequestPopupDataCallback = (index: int) => Array<string>;

/**
 * The AlphabetIndexerAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface AlphabetIndexerAttribute extends CommonMethod {
  /**
   * Definitions color.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default color(value: ResourceColor | undefined): this;

  /**
   * Select the text color.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedColor(value: ResourceColor | undefined): this;

  /**
   * Font color of the pop-up prompt text.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupColor(value: ResourceColor | undefined): this;

  /**
   * Select the text background color.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;

  /**
   * Background color of the pop-up window index.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupBackground(value: ResourceColor | undefined): this;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor | undefined } value - indicates the color of the selected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupSelectedColor(value: ResourceColor | undefined): this;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor | undefined } value - indicates the color of the unselected font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupUnselectedColor(value: ResourceColor | undefined): this;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   *
   * @param { ResourceColor | undefined } value - indicates the color of background.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemBackgroundColor(value: ResourceColor | undefined): this;

  /**
   * Whether to use pop-up index hints.
   *
   * @param { boolean | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default usingPopup(value: boolean | undefined): this;

  /**
   * Select the text text style,
   *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedFont(value: Font | undefined): this;

  /**
   * Select the text background color.
   *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupFont(value: Font | undefined): this;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font | undefined } value - indicates the style of the font.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemFont(value: Font | undefined): this;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * Default value: 16vp.
   *
   * @param { string | double | undefined } value
   *     undefined means setting to default value.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemSize(value: string | double | undefined): this;

  /**
   * Definitions fonts.
   *
   * @param { Font | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default font(value: Font | undefined): this;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   *
   * @param { IndexerAlign | undefined } value - indicates the alignment style of Alphabet index.
   * @param { Length | undefined } [offset] - indicates the horizontal space between pop-up window and indexer bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alignStyle(value: IndexerAlign | undefined, offset?: Length | undefined): this;

  /**
   * Index bar selection callback.
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerSelectCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSelect(callback: OnAlphabetIndexerSelectCallback | undefined): this;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerRequestPopupDataCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback | undefined): this;

  /**
   * Pop-up selection callback.
   * Anonymous Object Rectification.
   *
   * @param { OnAlphabetIndexerPopupSelectCallback | undefined } callback
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback | undefined): this;

  /**
   * Sets the selected index.
   *
   * @param { int | Bindable<int> | undefined } index
   *     undefined means unbinding the callback.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selected(index: int | Bindable<int> | undefined): this;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   *
   * @param { Position | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupPosition(value: Position | undefined): this;

  /**
   * Automatically collapses the characters when the indexer bar not high enough to display all characters.
   *
   * @param { boolean | undefined } value - A boolean value determines whether auto collapses is enabled for indexer
   *     bar.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCollapse(value: boolean | undefined): this;

  /**
   * Set the radius of the item of the pop-up window.
   * Default value: 24vp.
   *
   * @param { double | undefined } value
   *     undefined means setting to default value.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupItemBorderRadius(value: double | undefined): this;

  /**
   * Set the radius of the item of the indexer.
   * Default value: 8vp.
   *
   * @param { double | undefined } value
   *     undefined means setting to default value.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default itemBorderRadius(value: double | undefined): this;

  /**
   * Set the background blurStyle of title of the pop-up window.
   *
   * @param { BlurStyle | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupBackgroundBlurStyle(value: BlurStyle | undefined): this;

  /**
   * Set the background color of title of the pop-up window.
   *
   * @param { ResourceColor | undefined } value
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default popupTitleBackground(value: ResourceColor | undefined): this;

  /**
   * Enable or disable haptic feedback.
   *
   * @param { boolean | undefined } value - Default value is true, set false to disable haptic feedback.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(value: boolean | undefined): this;

  /**
   * Set the attribute modifier of the component.
   *
   * @param { AttributeModifier<AlphabetIndexerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
   *     Set the AlphabetIndexer modifier to the component.
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<AlphabetIndexerAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * Set alphabetIndexer options.
   *
   * @param { AlphabetIndexerOptions } info - indexer constructor options
   * @returns { AlphabetIndexerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 staticonly
   * @unpublished
   */
  default setAlphabetIndexerOptions(info: AlphabetIndexerOptions): this;
}

/**
 * Defines AlphabetIndexer Component
 *
 * @param { AlphabetIndexerOptions } options - indexer constructor options
 * @returns { AlphabetIndexerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function AlphabetIndexer(
    options: AlphabetIndexerOptions
): AlphabetIndexerAttribute;

/**
 * Defines AlphabetIndexer Component
 *
 * @param { CustomBuilderT<AlphabetIndexerAttribute> } style_ - AlphabetIndexer attribute instance
 * @returns { AlphabetIndexerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @unpublished
 */
@Builder
export declare function AlphabetIndexer(
 style_: CustomBuilderT<AlphabetIndexerAttribute>
): AlphabetIndexerAttribute;