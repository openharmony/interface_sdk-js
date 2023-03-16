/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   * @since 7
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   * @since 7
   */
  Right,
}

/**
 * Alphabet index bar.
 * @since 7
 */
interface AlphabetIndexerInterface {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @since 7
   */
  (value: { arrayValue: Array<string>; selected: number }): AlphabetIndexerAttribute;
}

/**
 * Defines the alphabet index bar attribute functions.
 * @since 7
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
  color(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text color.
   * @since 7
   */
  selectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Font color of the pop-up prompt text.
   * @since 7
   */
  popupColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
   */
  selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Background color of the pop-up window index.
   * @since 7
   */
  popupBackground(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the selected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the selected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the unselected font color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of the unselected font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Set the background color of non-alphabetic part of the pop-up window.
   * @param { ResourceColor } value - indicates the color of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;

  /**
   * Whether to use pop-up index hints.
   * @since 7
   */
  usingPopup(value: boolean): AlphabetIndexerAttribute;

  /**
   * Select the text text style,
   * @since 7
   */
  selectedFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Select the text background color.
   * @since 7
   */
  popupFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Set the font style of non-alphabetic part of the prompt pop-up window.
   * Family and style are not supported currently and will be fixed in future.
   * @param { Font } value - indicates the style of the font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  popupItemFont(value: Font): AlphabetIndexerAttribute;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @since 7
   */
  itemSize(value: string | number): AlphabetIndexerAttribute;

  /**
   * Definitions fonts.
   * @since 7
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
   * @since 10
   */
  alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback.
   * @since 8
   */
  onSelect(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Index bar selection callback and return the strings which display on pop-up.
   * @since 8
   */
  onRequestPopupData(callback: (index: number) => Array<string>): AlphabetIndexerAttribute;

  /**
   * Pop-up selection callback.
   * @since 8
   */
  onPopupSelect(callback: (index: number) => void): AlphabetIndexerAttribute;

  /**
   * Sets the selected index.
   * @since 8
   */
  selected(index: number): AlphabetIndexerAttribute;

  /**
   * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
   * @since 8
   */
  popupPosition(value: Position): AlphabetIndexerAttribute;
}

/**
 * Defines AlphabetIndexer Component.
 * @since 7
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;

/**
 * Defines AlphabetIndexer Component instance.
 * @since 7
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;
