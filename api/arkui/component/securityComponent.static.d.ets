
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

import { Dimension, Position, Edges, LocalizedEdges, ResourceColor, Padding, Length, SizeOptions, ConstraintSizeOptions, BorderRadiuses } from './units';
import { FontStyle, FontWeight, BorderStyle, TextHeightAdaptivePolicy, Axis, Alignment } from './enums';
import { ChainStyle, LocalizedAlignRuleOptions, AlignRuleOption, AttributeModifier, CommonMethod } from './common';
import { Resource } from '../../global/resource';
import { memo, ComponentBuilder } from './../stateManagement/runtime';

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
}