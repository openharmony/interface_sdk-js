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
 * indexer align property.
 * @since 7
 */
/**
 * indexer align property.
 * @crossplatform
 * @since 10
 */
 declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   * @since 7
   */
   /**
   * A dialog box is displayed on the right of the index bar.
   * @crossplatform
   * @since 10
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   * @since 7
   */
  /**
   * A dialog box is displayed on the left of the index bar.
   * @crossplatform
   * @since 10
   */
  Right,
}

/**
 * Alphabet index bar.
 * @since 7
 */
/**
 * Alphabet index bar.
 * @crossplatform
 * @since 10
 */
interface AlphabetIndexerInterface {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @since 7
   */
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @crossplatform
   * @since 10
   */
  (value: { arrayValue: Array<string>; selected: number }): AlphabetIndexerAttribute;
}

/**
 * Defines the alphabet index bar attribute functions.
 * @since 7
 */
/**
 * Defines the alphabet index bar attribute functions.
 * @crossplatform
 * @since 10
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
  /**
   * Index bar selection callback.
   * @since 7
   * @deprecated since 8
   * @useinstead onSelect
   */
  onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Definitions color.
   * @since 7
   */
  /**
   * Definitions color.
   * @crossplatform
   * @since 10
   */
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text color.
   * @since 7
   */
  /**
   * Select the text color.
   * @crossplatform
   * @since 10
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   * @since 7
   */
  /**
   * Font color of the pop-up prompt text.
   * @crossplatform
   * @since 10
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
   */
  /**
   * Select the text background color.
   * @crossplatform
   * @since 10
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   * @since 7
   */
  /**
   * Background color of the pop-up window index.
   * @crossplatform
   * @since 10
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   * @since 7
   */
  /**
   * Whether to use pop-up index hints.
   * @crossplatform
   * @since 10
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * Select the text text style,
   * @since 7
   */
  /**
   * Select the text text style,
   * @crossplatform
   * @since 10
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
   */
  /**
   * Select the text background color.
   * @crossplatform
   * @since 10
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   * @param { Font } value - indicates the style of the font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   * @param { Font } value - indicates the style of the font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @since 7
   */
  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @crossplatform
   * @since 10
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   * @since 7
   */
  /**
   * Definitions fonts.
   * @crossplatform
   * @since 10
   */
  font(value: Font): AlphabetIndexerAttribute;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported,
   * which affects the pop-up position of the pop-up window.
   * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
   * @param { Length } offset - indicates the horizontal space between pop-up window and indexer bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback.
   * @since 8
   */
  /**
   * Index bar selection callback.
   * @crossplatform
   * @since 10
   */
  onSelect(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * @since 8
   */
  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * @crossplatform
   * @since 10
   */
  onRequestPopupData(callback: (index: number) => Array<string>): AlphabetIndexerAttribute;

  /**
   * Pop-up selection callback.
   * @since 8
   */
  /**
   * Pop-up selection callback.
   * @crossplatform
   * @since 10
   */
  onPopupSelect(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Sets the selected index.
   * @since 8
   */
  /**
   * Sets the selected index.
   * @crossplatform
   * @since 10
   */
  selected(index: number): AlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * @since 8
   */
  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * @crossplatform
   * @since 10
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;
}

/**
 * Defines AlphabetIndexer Component.
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component.
 * @crossplatform
 * @since 10
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;

/**
 * Defines AlphabetIndexer Component instance.
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component instance.
 * @crossplatform
 * @since 10
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;
