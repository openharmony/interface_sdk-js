/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * This module provides APIs for calculating text width and height, and supports configuring various text attributes (
 * such as the font size, style, weight, and line height). It is applicable to scenarios where the text size needs to be
 * obtained before component construction, such as adaptive layout, text clipping, and dynamic UI size adjustment, 
 * helping you achieve more precise layout calculation and performance optimization.
 * 
 * > **NOTE**
 * >
 * > - This module cannot be used in the file declaration of the [UIAbility]{@link @ohos.app.ability.UIAbility}. In 
 * > other words, the APIs of this module can be used only after a component instance is created; they cannot be called 
 * > in the lifecycle of the UIAbility.
 * >
 * > - To perform more complex text measurements, you are advised to use the measurement APIs under 
 * > [Paragraph]{@link @ohos.graphics.text:text.Paragraph}.
 * >
 * > - When calling the text measurement APIs, you are advised not to use 
 * > [ApplicationContext.setFontSizeScale]{@link ./application/ApplicationContext:ApplicationContext.setFontSizeScale} 
 * > to set the application font size scale at the same time. To ensure timing consistency, you are advised to listen 
 * > for font size scale changes on your own to guarantee the accuracy of measurement results.
 * >
 * > - For measuring text after truncation, direct use of the string length for truncation may lead to inaccuracies, 
 * > because certain Unicode characters (for example, emojis) have code points with a length greater than 1. As such, 
 * > you are advised to perform iterative processing based on Unicode code points during truncation.
 *
 * @file Text Measurement
 * @kit ArkUI
 */

/**
 * Provides attributes of the measured text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 */
export interface MeasureOptions {
  /**
   * Content of the measured text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  textContent: string | Resource;

  /**
   * Layout width of the measured text. Value range: [0, +∞).
   *
   * **Note:**
   *
   * The default unit is vp. The value cannot be a percentage. This parameter takes effect only in the
   * **measureTextSize** API. If it is not set, the text width is the maximum width of a single-line layout. If it is
   * set, the set value is used, which also affects the line breaking mode and height calculation result of the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  constraintWidth?: number | string | Resource;

  /**
   * Font size of the measured text. Value range:
   * [0, +∞). A value beyond the range causes an abnormal calculation result.
   *
   * Default value: **16**
   *
   * **Note:**
   *
   * The value cannot be a percentage.
   *
   * When **fontSize** is of the number type, the fp unit is used since API version 12, and the vp unit is used before
   * API version 12.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * Font style of the measured text.
   *
   * Default value: **FontStyle.Normal**
   *
   * The value range of the number type is [0, 1], with an interval of 1, corresponding to the enumerated values in
   * **FontStyle** in sequence. When the value is out of range, the default value **FontStyle.Normal** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontStyle?: number | FontStyle;

  /**
   * Font weight of the measured text. The value range of the number type is [100, 900], with an interval of 100. The
   * default value is **400**. A larger value indicates a heavier font weight. When the value is out of range or not on
   * an interval value, the default value **400** is used. For the string type, only strings of the number type, for
   * example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium" are supported, which correspond to
   * the enumerated values in **FontWeight**.
   *
   * Default value: **FontWeight.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontWeight?: number | string | FontWeight;

  /**
   * Font family of the measured text. The default font is **'HarmonyOS Sans'**, and currently only this font is
   * supported. When another font name is set, the default font **'HarmonyOS Sans'** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  fontFamily?: string | Resource;

  /**
   * Letter spacing of the measured text.
   *
   * Default value: **0**
   *
   * **Note:**
   *
   * The default unit is vp. The string type supports strings with units, for example, **'10px'** and **'10vp'**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  letterSpacing?: number | string;

  /**
   * Horizontal alignment mode of the measured text.
   *
   * Default value: **TextAlign.Start**
   *
   * The value range of the number type is [0, 3], with an interval of 1, corresponding to the enumerated values in
   * **TextAlign** in sequence. When the value is out of range, the default value **TextAlign.Start** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textAlign?: number | TextAlign;

  /**
   * Truncation mode when the measured text is too long. It takes effect only when used together with **maxLines**.
   *
   * Default value: **1**
   *
   * The value range of the number type is [0, 3], with an interval of 1, corresponding to the enumerated values in
   * **TextOverflow** in sequence. When the value is out of range, the default value **1** is used.
   *
   * **Note:** When set to **TextOverflow.Ellipsis**, it can be used together with **wordBreak.BREAK_ALL** and
   * **maxLines** to truncate English words by letter and display the excess part with an ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  overflow?: number | TextOverflow;

  /**
   * Maximum number of lines of the measured text. When the actual number of lines exceeds this value, the calculation
   * result of **measureTextSize** is based on the maximum number of lines, and the excess part is not included in the
   * height calculation.
   *
   * Value range: [0, INT32_MAX]. When a negative number or a value beyond the range is passed in, the default value is
   * used.
   *
   * Default value: no limit
   *
   * **Note:** It can be used together with **TextOverflow.Ellipsis** of **overflow** and **wordBreak.BREAK_ALL** to
   * truncate English words by letter and display the excess part with an ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  maxLines?: number;

  /**
   * Line height of the measured text, which affects the height calculation result and line spacing of multi-line text.
   * A larger value indicates larger line spacing.
   *
   * Value range: [0, +∞). The string type supports strings with units, for example, **'10px'** and **'10vp'**.
   *
   * Default value: the default line height of the system
   *
   * The default unit is vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  lineHeight?: number | string | Resource;

  /**
   * Baseline offset of the measured text.
   *
   * Default value: **0**. Unit: vp. The string type supports strings with units, for example, **'10px'** and
   * **'10vp'**.
   *
   * **Note:** A positive number indicates that the baseline is offset upward, and a negative number indicates that the
   * baseline is offset downward.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  baselineOffset?: number | string;

  /**
   * Case of the measured text.
   *
   * Default value: **TextCase.Normal**
   *
   * The value range of the number type is [0, 2], with an interval of 1, corresponding to the enumerated values in
   * **TextCase** in sequence. When the value is out of range, the default value **TextCase.Normal** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  textCase?: number | TextCase;

  /**
   * Indentation of the first line of text. Value range:
   * [0, +∞). When the value is out of range, the default value **0** is used.
   *
   * Default value: **0**.
   *
   * **Note:**
   *
   * The default unit is vp. The string type supports strings with units, for example, **'10px'** and **'10vp'**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  textIndent?: number | string;

  /**
   * Word breaking rule.
   *
   * Default value: **WordBreak.BREAK_WORD**
   *
   * **Note:**
   *
   * WordBreak.BREAK_ALL, when used together with **TextOverflow.Ellipsis** of **overflow** and **maxLines**, can
   * truncate English words by letter and display the excess part with an ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  wordBreak?: WordBreak;
}

/**
 * Defines the Measure interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 9 dynamic
 */
export default class MeasureText {
  /**
   * Measures the single-line display width of the specified text. For multi-line text (separated by newline characters
   * **\n**), this API returns the width of the longest line.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, you can use the [getMeasureUtils]{@link @ohos.arkui.UIContext:UIContext.getMeasureUtils}
   * > API in [UIContext]{@link @ohos.arkui.UIContext} to obtain the [MeasureUtils]{@link @ohos.arkui.UIContext} object
   * > associated with the current UI context.
   * >
   * > - **measureText** always measures single-line text width. Layout constraints in **options** (**constraintWidth**,
   * > **maxLines**, and more) do not affect results. For layout-constrained width measurement, use
   * > [measureTextSize]{@link @ohos.arkui.UIContext:MeasureUtils.measureTextSize}.
   *
   * @param { MeasureOptions } options - Information about the measured text.
   * @returns { number } Text width.
   *     <br>Unit: px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.MeasureUtils#measureText
   */
  static measureText(options: MeasureOptions): number;

  /**
   * Measures the width and height of the given text.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, you can use the [getMeasureUtils]{@link @ohos.arkui.UIContext:UIContext.getMeasureUtils}
   * > API in [UIContext]{@link @ohos.arkui.UIContext} to obtain the [MeasureUtils]{@link @ohos.arkui.UIContext} object
   * > associated with the current UI context.
   *
   * @param { MeasureOptions } options - Information about the measured text.
   * @returns { SizeOptions } Layout width and height occupied by the text.
   *     <br>**NOTE**
   *     <br>The return values for text width and height are both in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.MeasureUtils#measureTextSize
   */
  static measureTextSize(options: MeasureOptions): SizeOptions;
}