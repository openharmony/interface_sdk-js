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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


import { CustomBuilder, CommonMethod, ShadowOptions, Optional, Callback, UICommonMethod, AttributeModifier } from "./common";
import { EllipsisMode, TextCase, LineBreakStrategy, TextAlign, FontStyle, FontWeight, WordBreak, TextOverflow, CopyOptions, TextHeightAdaptivePolicy, TextSelectableMode } from "./enums";
import { Resource, ResourceColor, Font, Length, LengthMetrics } from "./units";
import { TextDataDetectorConfig, LayoutManager, FontSettingOptions, EditMenuOptions } from "./textCommon";
import { DecorationStyleInterface, StyledString } from "./styledString";
import { SelectionMenuOptions } from "./richEditor";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Text overflow options.
 *
 * @interface TextOverflowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface TextOverflowOptions {
    /**
     * Text overflow option.
     *
     * @type { TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    overflow: TextOverflow;
}
export declare interface TextAttribute extends CommonMethod {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the text font size and weight and family and style.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font(value: Font | undefined): this;
    /**
     * Called when the font is set.
     *
     * @param { Font } fontValue - the text font size and weight and family and style.
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    font(fontValue: Font | undefined, options?: FontSettingOptions | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    minFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the minimum font scale of the font is set.
     *
     * @param { number | Resource } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { number | Resource  } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } weight
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontWeight(weight: number | FontWeight | string | undefined, options?: FontSettingOptions | undefined): this;
    /**
     * Set font line spacing.
     *
     * @param { LengthMetrics } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineSpacing(value: LengthMetrics | undefined): this;
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    textAlign(value: TextAlign | undefined): this;
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflowOptions } options - Text overflow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    textOverflow(options: TextOverflowOptions | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    maxLines(value: number | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    decoration(value: DecorationStyleInterface | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    letterSpacing(value: number | string | undefined): this;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    textCase(value: TextCase | undefined): this;
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    baselineOffset(value: number | string | undefined): this;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    draggable(value: boolean | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Length } value - The length of text indent.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textIndent(value: Length | undefined): this;
    /**
     * Set the word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    wordBreak(value: WordBreak | undefined): this;
    /**
     * Set the text line break strategy type.
     *
     * @param { LineBreakStrategy } strategy - The text line break strategy type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onCopy(callback: ((value: string) => void) | undefined): this;
    /**
     * Text selection is achieved by specifying the start and end positions of the text.
     *
     * @param { number } selectionStart - The start position of the selected text.
     * @param { number } selectionEnd - The end position of the selected text.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selection(selectionStart: number | undefined, selectionEnd: number | undefined): this;
    /**
     * Set the caret color for the selected text.
     *
     * @param { ResourceColor } color - The color of the selected text caret.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    caretColor(color: ResourceColor | undefined): this;
    /**
     * Set the selected background color of the text.
     *
     * @param { ResourceColor } color - The color of the selected text background.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBackgroundColor(color: ResourceColor | undefined): this;
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } value - The ellipsis mode.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ellipsisMode(value: EllipsisMode | undefined): this;
    /**
     * Enable data detector.
     *
     * @param { boolean } enable - Enable data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableDataDetector(enable: boolean | undefined): this;
    /**
     * Data detector with config.
     *
     * @param { TextDataDetectorConfig } config - The config of text data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    dataDetectorConfig(config: TextDataDetectorConfig | undefined): this;
    /**
     * Bind to the selection menu.
     *
     * @param { TextSpanType } spanType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { TextResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bindSelectionMenu(spanType: TextSpanType | undefined, content: CustomBuilder | undefined, responseType: TextResponseType | undefined, options?: SelectionMenuOptions | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTextSelectionChange(callback: ((selectionStart: number, selectionEnd: number) => void) | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of text component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fontFeature(value: string | undefined): this;
    /**
     * Set the marquee options.
     *
     * @param { Optional<TextMarqueeOptions> } options
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    marqueeOptions(options: TextMarqueeOptions | undefined): this;
    /**
     * Called when the text marquee state changes.
     *
     * @param { Callback<MarqueeState> } callback - callback of the marquee state change event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMarqueeStateChange(callback: Callback<MarqueeState> | undefined): this;
    /**
     * Whether to support sensitive privacy information
     *
     * @param { boolean } supported - Whether to support sensitive privacy information.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    privacySensitive(supported: boolean | undefined): this;
    /**
     * set text selectable and focusable
     *
     * @param { TextSelectableMode } mode
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    textSelectable(mode: TextSelectableMode | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Set the text with half leading.
     *
     * @param { boolean } halfLeading
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<TextAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum TextSpanType {
    /**
     * Only contains text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TEXT = 0,
    /**
     * Only contains image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    IMAGE = 1,
    /**
     * Contains both text and image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MIXED = 2,
    /**
     * When no other types are explicitly specified, this type will be matched.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 3
}
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum TextResponseType {
    /**
     * Right click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RIGHT_CLICK = 0,
    /**
     * Long press.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    LONG_PRESS = 1,
    /**
     * Selected by mouse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SELECT = 2,
    /**
     * When no other types are explicitly specified, this type will be matched.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 3
}
/**
 * Defines marquee state.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MarqueeState {
    /**
     * The marquee started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START = 0,
    /**
     * The marquee a round finished and start next round.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOUNCE = 1,
    /**
     * The marquee all finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    FINISH = 2
}
/**
 * Defines marquee start policy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum MarqueeStartPolicy {
    /**
     * Start marquee in any case. This is the default policy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DEFAULT = 0,
    /**
     * Start marquee only when get focus.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ON_FOCUS = 1
}
/**
 * Defines the options of Text.
 *
 * @interface TextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextOptions {
    /**
     * Text controller.
     *
     * @type { TextController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    controller: TextController;
}
/**
 * Defines the marquee options.
 *
 * @interface TextMarqueeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TextMarqueeOptions {
    /**
     * Is need start marquee.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    start: boolean;
    /**
     * The step size of the marquee.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    step?: number;
    /**
     * The rounds of the marquee.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    loop?: number;
    /**
     * The running direction of the marquee.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fromStart?: boolean;
    /**
     * The waiting time between each round of the marquee.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    delay?: number;
    /**
     * Set whether the text is faded out.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fadeout?: boolean;
    /**
     * The start policy for marquee.
     *
     * @type { ?MarqueeStartPolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    marqueeStartPolicy?: MarqueeStartPolicy;
}
/**
 * Defines the controller of Text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class TextController {
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    closeSelectionMenu(): void;
    /**
     * Update the styles of StyledString by setStyledString.
     *
     * @param { StyledString } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setStyledString(value: StyledString): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getLayoutManager(): LayoutManager;
}
export declare interface UITextAttribute extends UICommonMethod {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the text font size and weight and family and style.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    font(value: Font | undefined): this;
    /**
     * Called when the font is set.
     *
     * @param { Font } fontValue - the text font size and weight and family and style.
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    font(fontValue: Font | undefined, options?: FontSettingOptions | undefined): this;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    minFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontSize(value: number | string | Resource | undefined): this;
    /**
     * Called when the minimum font scale of the font is set.
     *
     * @param { number | Resource } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { number | Resource  } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } weight
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(weight: number | FontWeight | string | undefined, options?: FontSettingOptions | undefined): this;
    /**
     * Set font line spacing.
     *
     * @param { LengthMetrics } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineSpacing(value: LengthMetrics | undefined): this;
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    textAlign(value: TextAlign | undefined): this;
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    lineHeight(value: number | string | Resource | undefined): this;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { TextOverflowOptions } options - Text overflow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    textOverflow(options: TextOverflowOptions | undefined): this;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    maxLines(value: number | undefined): this;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    decoration(value: DecorationStyleInterface | undefined): this;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    letterSpacing(value: number | string | undefined): this;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    textCase(value: TextCase | undefined): this;
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    baselineOffset(value: number | string | undefined): this;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    draggable(value: boolean | undefined): this;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    textShadow(value: ShadowOptions | Array<ShadowOptions> | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Length } value - The length of text indent.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textIndent(value: Length | undefined): this;
    /**
     * Set the word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    wordBreak(value: WordBreak | undefined): this;
    /**
     * Set the text line break strategy type.
     *
     * @param { LineBreakStrategy } strategy - The text line break strategy type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onCopy(callback: ((value: string) => void) | undefined): this;
    /**
     * Text selection is achieved by specifying the start and end positions of the text.
     *
     * @param { number } selectionStart - The start position of the selected text.
     * @param { number } selectionEnd - The end position of the selected text.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selection(selectionStart: number | undefined, selectionEnd: number | undefined): this;
    /**
     * Set the caret color for the selected text.
     *
     * @param { ResourceColor } color - The color of the selected text caret.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    caretColor(color: ResourceColor | undefined): this;
    /**
     * Set the selected background color of the text.
     *
     * @param { ResourceColor } color - The color of the selected text background.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedBackgroundColor(color: ResourceColor | undefined): this;
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } value - The ellipsis mode.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    ellipsisMode(value: EllipsisMode | undefined): this;
    /**
     * Enable data detector.
     *
     * @param { boolean } enable - Enable data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableDataDetector(enable: boolean | undefined): this;
    /**
     * Data detector with config.
     *
     * @param { TextDataDetectorConfig } config - The config of text data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    dataDetectorConfig(config: TextDataDetectorConfig | undefined): this;
    /**
     * Bind to the selection menu.
     *
     * @param { TextSpanType } spanType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { TextResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    bindSelectionMenu(spanType: TextSpanType | undefined, content: CustomBuilder | undefined, responseType: TextResponseType | undefined, options?: SelectionMenuOptions | undefined): this;
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onTextSelectionChange(callback: ((selectionStart: number, selectionEnd: number) => void) | undefined): this;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of text component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fontFeature(value: string | undefined): this;
    /**
     * Set the marquee options.
     *
     * @param { Optional<TextMarqueeOptions> } options
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    marqueeOptions(options: TextMarqueeOptions | undefined): this;
    /**
     * Called when the text marquee state changes.
     *
     * @param { Callback<MarqueeState> } callback - callback of the marquee state change event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onMarqueeStateChange(callback: Callback<MarqueeState> | undefined): this;
    /**
     * Whether to support sensitive privacy information
     *
     * @param { boolean } supported - Whether to support sensitive privacy information.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    privacySensitive(supported: boolean | undefined): this;
    /**
     * set text selectable and focusable
     *
     * @param { TextSelectableMode } mode
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    textSelectable(mode: TextSelectableMode | undefined): this;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    editMenuOptions(editMenu: EditMenuOptions | undefined): this;
    /**
     * Set the text with half leading.
     *
     * @param { boolean } halfLeading
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    halfLeading(halfLeading: boolean | undefined): this;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    enableHapticFeedback(isEnabled: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TextAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Text(
    content?: string | Resource, value?: TextOptions, 
    @memo
    content_?: () => void,
): UITextAttribute