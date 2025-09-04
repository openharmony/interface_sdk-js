
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
 * @arkts 1.2
 */

import { Dimension, Position, Edges, LocalizedEdges, ResourceColor, Padding, Length, SizeOptions, ConstraintSizeOptions, BorderRadiuses } from "./units";
import { FontStyle, FontWeight, BorderStyle, TextHeightAdaptivePolicy, Axis, Alignment } from "./enums";
import { ChainStyle, LocalizedAlignRuleOptions, AlignRuleOption, AttributeModifier, CommonMethod } from "./common";
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

/**
 * Declares the interface for the method of a security component.
 *
 * @interface SecurityComponentMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare interface SecurityComponentMethod {
  /**
   * Icon size.
   *
   * @param { Dimension | undefined } value - Indicates the size of the icon.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  iconSize(value: Dimension | undefined): this;
  /**
   * Layout direction of the icon and text.
   *
   * @param { SecurityComponentLayoutDirection | undefined } value - Indicates the layout direction of the icon and text.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  layoutDirection(value: SecurityComponentLayoutDirection | undefined): this;
  /**
   * Position of the security component.
   *
   * @param { Position | undefined } value - Indicates the position of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  position(value: Position | undefined): this;
  /**
   * Anchor of the security component for positioning. The top start edge of the component is used as
   * the reference point for offset.
   *
   * @param { Position | undefined } value - Indicates the anchor of the component when it is positioned.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
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
   * @param { Position | Edges | LocalizedEdges | undefined } value
   * @returns { SecurityComponentMethod }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  offset(value: Position | Edges | LocalizedEdges | undefined): this;
  /**
   * Font size of the inner text.
   *
   * @param { Dimension | undefined } value - Indicates the font size of the text in the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  fontSize(value: Dimension | undefined): this;
  /**
   * Font style of the inner text.
   *
   * @param { FontStyle | undefined } value - Indicates the font style of the text in the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  fontStyle(value: FontStyle | undefined): this;
  /**
   * Font family of the inner text.
   *
   * @param { string | Resource | undefined } value - Indicates the font family of the text in the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  fontFamily(value: string | Resource | undefined): this;
  /**
   * Font color of the inner text.
   *
   * @param { ResourceColor | undefined } value - Indicates the font color of the text in the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  fontColor(value: ResourceColor | undefined): this;
  /**
   * Color of the icon.
   *
   * @param { ResourceColor | undefined } value - Indicates the icon color in the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  iconColor(value: ResourceColor | undefined): this;
  /**
   * Background color.
   *
   * @param { ResourceColor | undefined } value - Indicates the background color of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  backgroundColor(value: ResourceColor | undefined): this;
  /**
   * Style of the border.
   *
   * @param { BorderStyle | undefined } value - Indicates the border style of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  borderStyle(value: BorderStyle | undefined): this;
  /**
   * Width of the border.
   *
   * @param { Dimension | undefined } value - Indicates the border width of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  borderWidth(value: Dimension | undefined): this;
  /**
   * Color of the border.
   *
   * @param { ResourceColor | undefined } value - Indicates the border color of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  borderColor(value: ResourceColor | undefined): this;
  /**
   * Radius of the border.
   *
   * @param { Dimension| BorderRadiuses | undefined } radius - Indicates the border radius of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  borderRadius(radius: Dimension | BorderRadiuses | undefined): this;
  /**
   * Padding between the background border and icon/inner text.
   *
   * @param { Padding | Dimension | undefined } value - Indicates the padding of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  padding(value: Padding | Dimension | undefined): this;
  /**
   * Space between the inner text and icon.
   *
   * @param { Dimension | undefined } value - Indicates the space between the inner text and icon.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  textIconSpace(value: Dimension | undefined): this;
  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string | undefined } value - identify the key of the component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 20
   * @test
   */
  key(value: string | undefined): this;
  /**
   * Sets the width of the component.
   *
   * @param { Length | undefined } value - Indicates the width of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  width(value: Length | undefined): this;
  /**
   * Sets the height of the component.
   *
   * @param { Length | undefined } value - Indicates the height of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  height(value: Length | undefined): this;
  /**
   * The size of the component.
   *
   * @param { SizeOptions | undefined } value - Indicates the size of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  size(value: SizeOptions | undefined): this;
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions | undefined } value - Indicates the constraint size of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  constraintSize(value: ConstraintSizeOptions | undefined): this;
  /**
   * align
   *
   * @param { Alignment | undefined } alignType - Indicates the align type of the security component.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  align(alignType: Alignment | undefined): this;
  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption | LocalizedAlignRuleOptions | undefined } alignRule
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  alignRules(alignRule: AlignRuleOption | LocalizedAlignRuleOptions | undefined): this;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string | undefined } description
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  id(description: string | undefined): this;
  /**
   * Specifies the direction and style of chain in relative container
   *
   * @param { Axis | undefined } direction - Indicates direction of the chain
   * @param { ChainStyle | undefined } style - Indicates style of the chain
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
  /**
   * Sets the minimum font scale factor for text.
   *
   * @param { double | Resource | undefined } scale Minimum font scale factor to set.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  minFontScale(scale: double | Resource | undefined): this;
  /**
   * Sets the maximum font scale factor for text.
   *
   * @param { double | Resource | undefined } scale Maximum font scale factor to set.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  maxFontScale(scale: double | Resource | undefined): this;
  /**
   * Called when the minimum font size of the font is set.
   *
   * @param { double | string | Resource | undefined } minSize
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  minFontSize(minSize: double | string | Resource | undefined): this;
  /**
   * Called when the maximum font size of the font is set.
   *
   * @param { double | string | Resource | undefined } maxSize
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  maxFontSize(maxSize: double | string | Resource | undefined): this;
  /**
   * Called when the height adaptive policy is set.
   *
   * @param { TextHeightAdaptivePolicy | undefined } policy - The height adaptive policy.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  heightAdaptivePolicy(policy: TextHeightAdaptivePolicy | undefined): this;
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean | undefined } respond - Indicates whether the button is responded to.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  enabled(respond: boolean | undefined): this;
}