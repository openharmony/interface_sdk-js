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

import { FontStyle, FontWeight, TextAlign, TextOverflow, TextCase, WordBreak } from '@ohos.arkui.component'
import { SizeOptions } from '@ohos.arkui.component';
import { Resource } from './global/resource'

/**
 * Defines the options of MeasureText.
 *
 * @interface MeasureOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export interface MeasureOptions {
  /**
   * Text to display.
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  textContent: string | Resource;

  /**
   * Text display area of width.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  constraintWidth?: number | string | Resource;

  /**
   * Font Size.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  fontSize?: number | string | Resource;

  /**
   * Font style.
   *
   * @type { ?(number | FontStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  fontStyle?: number | FontStyle;

  /**
   * Font weight.
   *
   * @type { ?(number | string | FontWeight) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  fontWeight?: number | string | FontWeight;

  /**
   * Font list of text.
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  fontFamily?: string | Resource;

  /**
   * Distance between text fonts.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  letterSpacing?: number | string;

  /**
   * Alignment of text.
   *
   * @type { ?(number | TextAlign) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  textAlign?: number | TextAlign;

  /**
   * Overflow mode of the font.
   *
   * @type { ?(number | TextOverflow) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  overflow?: number | TextOverflow;

  /**
   * Maximum number of lines of text.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  maxLines?: number;

  /**
   * Vertical center mode of the font.
   *
   * @type { ?(number | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  lineHeight?: number | string | Resource;

  /**
   * Baseline offset.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  baselineOffset?: number | string;

  /**
   * Type of letter in the text font
   *
   * @type { ?(number | TextCase) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  textCase?: number | TextCase;

  /**
   * Specify the indentation of the first line in a text-block.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  textIndent?: number | string;

  /**
   * Set the word break type.
   *
   * @type { ?WordBreak }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  wordBreak?: WordBreak;
}

/**
 * Defines the Measure interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 */
export default declare class MeasureText {
  /**
   * Displays the textWidth.
   *
   * @param { MeasureOptions } options - Options.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  static measureText(options: MeasureOptions): number;

  /**
   * Displays the text width and height.
   *
   * @param { MeasureOptions } options - Options of measure area occupied by text.
   * @returns { SizeOptions } width and height for text to display \
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}
