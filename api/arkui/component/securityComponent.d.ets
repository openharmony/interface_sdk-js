/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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


import { Dimension, Position, Edges, LocalizedEdges, ResourceColor, Padding, Length, SizeOptions, ConstraintSizeOptions, BorderRadiuses } from "./units";
import { FontStyle, FontWeight, BorderStyle, TextHeightAdaptivePolicy, Axis, Alignment } from "./enums";
import { ChainStyle, LocalizedAlignRuleOptions, AlignRuleOption, AttributeModifier, CommonMethod, UICommonMethod } from "./common";
import { Resource } from '../../global/resource';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Enumerates the layout direction of the icon and text.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum SecurityComponentLayoutDirection {
    /**
     * Horizontal layout.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    HORIZONTAL = 0,
    /**
     * Vertical layout.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    VERTICAL = 1
}
export declare interface SecurityComponentMethod {
    /**
     * Icon size.
     *
     * @param { Dimension } value - Indicates the size of the icon.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    iconSize(value: Dimension | undefined): this;
    /**
     * Layout direction of the icon and text.
     *
     * @param { SecurityComponentLayoutDirection } value - Indicates the layout direction of the icon and text.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    layoutDirection(value: SecurityComponentLayoutDirection | undefined): this;
    /**
     * Position of the security component.
     *
     * @param { Position } value - Indicates the position of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    position(value: Position | undefined): this;
    /**
     * Anchor of the security component for positioning. The top start edge of the component is used as
     * the reference point for offset.
     *
     * @param { Position } value - Indicates the anchor of the component when it is positioned.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    markAnchor(value: Position | undefined): this;
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container.
     * The position is adjusted only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * Font size of the inner text.
     *
     * @param { Dimension } value - Indicates the font size of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fontSize(value: Dimension | undefined): this;
    /**
     * Font style of the inner text.
     *
     * @param { FontStyle } value - Indicates the font style of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Font weight of the inner text.
     *
     * @param { int | FontWeight | string } value - Indicates the font weight of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * Font family of the inner text.
     *
     * @param { string | Resource } value - Indicates the font family of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Font color of the inner text.
     *
     * @param { ResourceColor } value - Indicates the font color of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Color of the icon.
     *
     * @param { ResourceColor } value - Indicates the icon color in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    iconColor(value: ResourceColor | undefined): this;
    /**
     * Background color.
     *
     * @param { ResourceColor } value - Indicates the background color of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Style of the border.
     *
     * @param { BorderStyle } value - Indicates the border style of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    borderStyle(value: BorderStyle | undefined): this;
    /**
     * Width of the border.
     *
     * @param { Dimension } value - Indicates the border width of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    borderWidth(value: Dimension | undefined): this;
    /**
     * Color of the border.
     *
     * @param { ResourceColor } value - Indicates the border color of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    borderColor(value: ResourceColor | undefined): this;
    /**
     * Radius of the border.
     *
     * @param { Dimension } value - Indicates the border radius of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    borderRadius(value: Dimension | undefined): this;
    /**
     * Padding between the background border and icon/inner text.
     *
     * @param { Padding | Dimension } value - Indicates the padding of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    padding(value: Padding | Dimension | undefined): this;
    /**
     * Space between the inner text and icon.
     *
     * @param { Dimension } value - Indicates the space between the inner text and icon.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    textIconSpace(value: Dimension | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string } value - identify the key of the component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     * @test
     */
    key(value: string | undefined): this;
    /**
     * Sets the width of the component.
     *
     * @param { Length } value - Indicates the width of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    width(value: Length | undefined): this;
    /**
     * Sets the height of the component.
     *
     * @param { Length } value - Indicates the height of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    height(value: Length | undefined): this;
    /**
     * The size of the component.
     *
     * @param { SizeOptions } value - Indicates the size of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    size(value: SizeOptions | undefined): this;
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value - Indicates the constraint size of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * align
     *
     * @param { Alignment } alignType - Indicates the align type of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    align(alignType: Alignment | undefined): this;
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } alignRule
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    alignRules(alignRule: AlignRuleOption | undefined): this;
    /**
     * Specifies the localized alignRules of relative container
     *
     * @param { LocalizedAlignRuleOptions } alignRule
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    alignRules(alignRule: LocalizedAlignRuleOptions | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } description
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    id(description: string | undefined): this;
    /**
     * Specifies the direction and style of chain in relative container
     *
     * @param { Axis } direction - Indicates direction of the chain
     * @param { ChainStyle } style - Indicates style of the chain
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * Sets the minimum font scale factor for text.
     *
     * @param { number | Resource } scale Minimum font scale factor to set.
     * @returns { T } Returns the attributes of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Sets the maximum font scale factor for text.
     *
     * @param { number | Resource  } scale Maximum font scale factor to set.
     * @returns { T } Returns the attributes of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } line
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxLines(line: number | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } minSize
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    minFontSize(minSize: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } maxSize
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    maxFontSize(maxSize: number | string | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } policy - The height adaptive policy.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy(policy: TextHeightAdaptivePolicy | undefined): this;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     *  If it is set to false, click operations are not responded.
     *
     * @param { boolean } respond - Indicates whether the button is responded to.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enabled(respond: boolean | undefined): this;
}
export declare interface UISecurityComponentMethod {
    /**
     * Icon size.
     *
     * @param { Dimension } value - Indicates the size of the icon.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    iconSize(value: Dimension | undefined): this;
    /**
     * Layout direction of the icon and text.
     *
     * @param { SecurityComponentLayoutDirection } value - Indicates the layout direction of the icon and text.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    layoutDirection(value: SecurityComponentLayoutDirection | undefined): this;
    /**
     * Position of the security component.
     *
     * @param { Position } value - Indicates the position of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    position(value: Position | undefined): this;
    /**
     * Anchor of the security component for positioning. The top start edge of the component is used as
     * the reference point for offset.
     *
     * @param { Position } value - Indicates the anchor of the component when it is positioned.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    markAnchor(value: Position | undefined): this;
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container.
     * The position is adjusted only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    offset(value: Position | Edges | LocalizedEdges | undefined): this;
    /**
     * Font size of the inner text.
     *
     * @param { Dimension } value - Indicates the font size of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    fontSize(value: Dimension | undefined): this;
    /**
     * Font style of the inner text.
     *
     * @param { FontStyle } value - Indicates the font style of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    fontStyle(value: FontStyle | undefined): this;
    /**
     * Font weight of the inner text.
     *
     * @param { int | FontWeight | string } value - Indicates the font weight of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * Font family of the inner text.
     *
     * @param { string | Resource } value - Indicates the font family of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    fontFamily(value: string | Resource | undefined): this;
    /**
     * Font color of the inner text.
     *
     * @param { ResourceColor } value - Indicates the font color of the text in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    fontColor(value: ResourceColor | undefined): this;
    /**
     * Color of the icon.
     *
     * @param { ResourceColor } value - Indicates the icon color in the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    iconColor(value: ResourceColor | undefined): this;
    /**
     * Background color.
     *
     * @param { ResourceColor } value - Indicates the background color of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Style of the border.
     *
     * @param { BorderStyle } value - Indicates the border style of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    borderStyle(value: BorderStyle | undefined): this;
    /**
     * Width of the border.
     *
     * @param { Dimension } value - Indicates the border width of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    borderWidth(value: Dimension | undefined): this;
    /**
     * Color of the border.
     *
     * @param { ResourceColor } value - Indicates the border color of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    borderColor(value: ResourceColor | undefined): this;
    /**
     * Radius of the border.
     *
     * @param { Dimension } value - Indicates the border radius of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    borderRadius(value: Dimension | undefined): this;
    /**
     * Padding between the background border and icon/inner text.
     *
     * @param { Padding | Dimension } value - Indicates the padding of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    padding(value: Padding | Dimension | undefined): this;
    /**
     * Space between the inner text and icon.
     *
     * @param { Dimension } value - Indicates the space between the inner text and icon.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    textIconSpace(value: Dimension | undefined): this;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string } value - identify the key of the component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     * @test
     */
    @memo
    key(value: string | undefined): this;
    /**
     * Sets the width of the component.
     *
     * @param { Length } value - Indicates the width of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    width(value: Length | undefined): this;
    /**
     * Sets the height of the component.
     *
     * @param { Length } value - Indicates the height of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    height(value: Length | undefined): this;
    /**
     * The size of the component.
     *
     * @param { SizeOptions } value - Indicates the size of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    size(value: SizeOptions | undefined): this;
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value - Indicates the constraint size of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    constraintSize(value: ConstraintSizeOptions | undefined): this;
    /**
     * align
     *
     * @param { Alignment } alignType - Indicates the align type of the security component.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    align(alignType: Alignment | undefined): this;
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } alignRule
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    alignRules(alignRule: AlignRuleOption | undefined): this;
    /**
     * Specifies the localized alignRules of relative container
     *
     * @param { LocalizedAlignRuleOptions } alignRule
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    alignRules(alignRule: LocalizedAlignRuleOptions | undefined): this;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } description
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    id(description: string | undefined): this;
    /**
     * Specifies the direction and style of chain in relative container
     *
     * @param { Axis } direction - Indicates direction of the chain
     * @param { ChainStyle } style - Indicates style of the chain
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
    /**
     * Sets the minimum font scale factor for text.
     *
     * @param { number | Resource } scale Minimum font scale factor to set.
     * @returns { T } Returns the attributes of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    minFontScale(scale: number | Resource | undefined): this;
    /**
     * Sets the maximum font scale factor for text.
     *
     * @param { number | Resource  } scale Maximum font scale factor to set.
     * @returns { T } Returns the attributes of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontScale(scale: number | Resource | undefined): this;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } line
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxLines(line: number | undefined): this;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } minSize
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    minFontSize(minSize: number | string | Resource | undefined): this;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } maxSize
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    maxFontSize(maxSize: number | string | Resource | undefined): this;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } policy - The height adaptive policy.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    heightAdaptivePolicy(policy: TextHeightAdaptivePolicy | undefined): this;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     *  If it is set to false, click operations are not responded.
     *
     * @param { boolean } respond - Indicates whether the button is responded to.
     * @returns { T } Returns the attribute of the security component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enabled(respond: boolean | undefined): this;
}
