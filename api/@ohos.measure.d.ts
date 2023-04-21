/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

/// <reference path="../component/units.d.ts" />

import { Resource } from 'GlobalResource';

/**
 * Defines the options of MeasureText.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
export interface MeasureOptions {

  /**
   * Text to display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ( string ) }
   * @since 9
   */
  /**
   * Text to display.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @type { ( string | Resource ) }
   * @since 10
   */
  textContent: string | Resource;

  /**
   * Text display area of width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  constraintWidth?: number | string | Resource;

  /**
   * Font Size.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  fontSize?: number | string | Resource;

  /**
   * Font style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  fontStyle?: number | FontStyle;

  /**
   * Font weight.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  fontWeight?: number | string | FontWeight;

  /**
   * Font list of text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  fontFamily?: string | Resource;

  /**
   * Distance between text fonts.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  letterSpacing?: number | string;

  /**
   * Alignment of text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textAlign?: number | TextAlign;

  /**
   * Overflow mode of the font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  overflow?: number | TextOverflow;

  /**
   * Maximum number of lines of text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  maxLines?: number;

  /**
   * Vertical center mode of the font.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  lineHeight?: number | string | Resource;

  /**
   * Baseline offset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  baselineOffset?: number | string;

  /**
   * Type of letter in the text font
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textCase?: number | TextCase;
}

/**
 * Defines the Measure interface.
 * since 9
 */
export default class MeasureText {

  /**
   * Displays the textWidth.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @param options Options.
   * @since 9
   */
  static measureText(options: MeasureOptions): number;

  /**
   * Displays the text width and height.
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display \
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}
