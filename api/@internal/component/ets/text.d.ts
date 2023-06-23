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
 * Provides an interface for writing texts.
 * @since 7
 */
/**
 * Provides an interface for writing texts.
 * @form
 * @since 9
 */
/**
 * Provides an interface for writing texts.
 * @form
 * @crossplatform
 * @since 10
 */
interface TextInterface {
  /**
   * Called when writing text.
   * @since 7
   */
  /**
   * Called when writing text.
   * @form
   * @since 9
   */
  /**
   * Called when writing text.
   * @form
   * @crossplatform
   * @since 10
   */
  (content?: string | Resource): TextAttribute;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {
  /**
   * Called when the font is set.
   * @param { Font } value - the text font size and weight and family and style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { TextAttribute } The attribute of the text.
   * @since 10
   */
  font(value: Font): TextAttribute;

  /**
   * Called when the font color is set.
   * @since 7
   */
  /**
   * Called when the font color is set.
   * @form
   * @since 9
   */
  /**
   * Called when the font color is set.
   * @form
   * @crossplatform
   * @since 10
   */
  fontColor(value: ResourceColor): TextAttribute;

  /**
   * Called when the font size is set.
   * @since 7
   */
  /**
   * Called when the font size is set.
   * @form
   * @since 9
   */
  /**
   * Called when the font size is set.
   * @form
   * @crossplatform
   * @since 10
   */
  fontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the minimum font size of the font is set.
   * @since 7
   */
  /**
   * Called when the minimum font size of the font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the minimum font size of the font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  minFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the maximum font size of the font is set.
   * @since 7
   */
  /**
   * Called when the maximum font size of the font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the maximum font size of the font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  maxFontSize(value: number | string | Resource): TextAttribute;

  /**
   * Called when the font style of a font is set.
   * @since 7
   */
  /**
   * Called when the font style of a font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the font style of a font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  fontStyle(value: FontStyle): TextAttribute;

  /**
   * Called when the font weight is set.
   * @since 7
   */
  /**
   * Called when the font weight is set.
   * @form
   * @since 9
   */
  /**
   * Called when the font weight is set.
   * @form
   * @crossplatform
   * @since 10
   */
  fontWeight(value: number | FontWeight | string): TextAttribute;

  /**
   * Called when the horizontal center mode of the font is set.
   * @since 7
   */
  /**
   * Called when the horizontal center mode of the font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the horizontal center mode of the font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  textAlign(value: TextAlign): TextAttribute;

  /**
   * Called when the vertical center mode of the font is set.
   * @since 7
   */
  /**
   * Called when the vertical center mode of the font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the vertical center mode of the font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  lineHeight(value: number | string | Resource): TextAttribute;

  /**
   * Called when the overflow mode of the font is set.
   * @since 7
   */
  /**
   * Called when the overflow mode of the font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the overflow mode of the font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  textOverflow(value: { overflow: TextOverflow }): TextAttribute;

  /**
   * Called when the font list of text is set.
   * @since 7
   */
  /**
   * Called when the font list of text is set.
   * @form
   * @since 9
   */
  /**
   * Called when the font list of text is set.
   * @form
   * @crossplatform
   * @since 10
   */
  fontFamily(value: string | Resource): TextAttribute;

  /**
   * Called when the maximum number of lines of text is set.
   * @since 7
   */
  /**
   * Called when the maximum number of lines of text is set.
   * @form
   * @since 9
   */
  /**
   * Called when the maximum number of lines of text is set.
   * @form
   * @crossplatform
   * @since 10
   */
  maxLines(value: number): TextAttribute;

  /**
   * Called when the text decoration of the text is set.
   * @since 7
   */
  /**
   * Called when the text decoration of the text is set.
   * @form
   * @since 9
   */
  /**
   * Called when the text decoration of the text is set.
   * @form
   * @crossplatform
   * @since 10
   */
  decoration(value: { type: TextDecorationType; color?: ResourceColor }): TextAttribute;

  /**
   * Called when the distance between text fonts is set.
   * @since 7
   */
  /**
   * Called when the distance between text fonts is set.
   * @form
   * @since 9
   */
  /**
   * Called when the distance between text fonts is set.
   * @form
   * @crossplatform
   * @since 10
   */
  letterSpacing(value: number | string): TextAttribute;

  /**
   * Called when the type of letter in the text font is set.
   * @since 7
   */
  /**
   * Called when the type of letter in the text font is set.
   * @form
   * @since 9
   */
  /**
   * Called when the type of letter in the text font is set.
   * @form
   * @crossplatform
   * @since 10
   */
  textCase(value: TextCase): TextAttribute;

  /**
   * Called when the baseline offset is set.
   * @since 7
   */
  /**
   * Called when the baseline offset is set.
   * @form
   * @since 9
   */
  /**
   * Called when the baseline offset is set.
   * @form
   * @crossplatform
   * @since 10
   */
  baselineOffset(value: number | string): TextAttribute;

  /**
   * Allow replication.
   * @form
   * @since 9
   */
  /**
   * Allow replication.
   * @form
   * @crossplatform
   * @since 10
   */
  copyOption(value: CopyOptions): TextAttribute;

  /**
   * Enable the selectable area can be dragged.
   * @type boolean
   * @default false
   * @since 9
   * @deprecated since 10
   * @useinstead common.CommonMethod#draggable
   */
  draggable(value: boolean): TextAttribute;

  /**
   * Called when the text shadow is set.
   * @param { ShadowOptions } value - The shadow options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @crossplatform
   * @since 10
   */
  textShadow(value: ShadowOptions): TextAttribute;

  /**
   * Called when the height adaptive policy is set.
   * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Called when the height adaptive policy is set.
   * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute;

  /**
   * Specify the indentation of the first line in a text-block.
   * @param { Length } value - The length of text indent.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Specify the indentation of the first line in a text-block.
   * @param { Length } value - The length of text indent.
   * @returns { TextAttribute } The attribute of the text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  textIndent(value: Length): TextAttribute;
}

/**
 * Defines Text Component instance.
 * @since 7
 */
/**
 * Defines Text Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Text Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const TextInstance: TextAttribute;

/**
 * Defines Text Component.
 * @since 7
 */
/**
 * Defines Text Component.
 * @form
 * @since 9
 */
/**
 * Defines Text Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Text: TextInterface;
