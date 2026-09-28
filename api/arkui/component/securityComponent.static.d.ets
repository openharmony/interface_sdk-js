/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { Dimension, Position, Edges, LocalizedEdges, ResourceColor, Padding, Length, SizeOptions, ConstraintSizeOptions, BorderRadiuses } from './units';
import { FontStyle, FontWeight, BorderStyle, TextHeightAdaptivePolicy, Axis, Alignment } from './enums';
import { ChainStyle, LocalizedAlignRuleOptions, AlignRuleOption, AttributeModifier, CommonMethod } from './common';
import { Resource } from '../../global/resource';
import { FocusBoxStyle } from './focus';

/**
 * Enumerates the layout directions of the icon and text on a security component.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SecurityComponentLayoutDirection {
  /**
   * The icon and text on the security component are arranged horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HORIZONTAL = 0,
  /**
   * The icon and text on the security component are arranged vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VERTICAL = 1
}

/**
 * Defines the screen reader role type of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SecurityComponentRoleType {
  /**
   * Null.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ROLE_NONE = 0,
  /**
   * Button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BUTTON = 1
}

/**
 * The universal attributes module for security components enables unified configuration of universal attributes
 * such as layout, size, text, icon, color, border, and interaction behaviors.
 *
 * This module is mainly used in the following scenarios:
 * - Set layout, size, text, icon, color, border, and interaction-related attributes for security components
 * such as [PasteButton]{@link ./pasteButton} and [SaveButton]{@link ./saveButton}.
 * - Adjust the display effect and interaction experience of security components while ensuring compliance with
 * the security component specifications. For specific constraints,
 * see [Constraints](docroot://security/AccessToken/security-component-overview.md#constraints).
 * - Reuse the universal attribute capabilities of security components through chained calls.
 *
 * ###### Key Enums
 * - [SecurityComponentLayoutDirection]{@link SecurityComponentLayoutDirection}: Enumeration of icon and text
 * layout directions for the security component. Specifies horizontal or vertical layout.
 * - [ButtonType]{@link ./button:ButtonType}: Enumeration of button styles for the security component. Specifies
 * capsule, circle, rounded rectangle, or normal button style.
 * ###### Key APIs
 * - [SecurityComponentMethod]{@link SecurityComponentMethod}: A collection of universal attribute methods for
 * security components. Configures layout, size, text, icon, color, border, and interaction attributes for
 * specific security components.
 * ###### Child Components
 * - Not supported
 *
 * Declares the interface for the method of a security component.
 *
 * @interface SecurityComponentMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SecurityComponentMethod {
  /**
   * Sets the icon size of the security component.
   *
   * @param { Dimension | undefined } value - Icon size of the security component, in vp by default when no unit is
   *     specified.
   *     <br>Default value: **16vp**.
   *     <br>Percentage strings are not supported.<br/>If an invalid value or unit is passed, the attribute does not
   *     take effect, and the component is displayed according to the default value.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconSize(value: Dimension | undefined): this;
  /**
   * Sets the layout direction of the icon and text on the security component.
   *
   * @param { SecurityComponentLayoutDirection | undefined } value - Indicates the layout direction of the icon and
   *     text.
   *     <br>Default value: SecurityComponentLayoutDirection.HORIZONTAL.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  layoutDirection(value: SecurityComponentLayoutDirection | undefined): this;
  /**
   * Sets the absolute position, which is the offset of the top-left corner of the security component relative to the
   * top-left corner of the parent container.
   *
   * @param { Position | undefined } value - Offset position of the security component's top-left corner relative to the
   *     parent container's top-left corner. Applicable to scenarios where the security component is placed in a fixed
   *     area of the page through absolute positioning.
   *     <br>When the unit is not explicitly specified, the unit is vp.
   *     <br/>It is recommended that you pass numeric coordinates for both **x** and **y**.<br/>If the parameter is
   *     **undefined** or **null**, or **x** and **y** are non-numeric types, this attribute does not take effect, and
   *     invalid coordinates are treated as **0**.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  position(value: Position | undefined): this;
  /**
   * Sets the anchor of the security component for moving the component with its top-left corner as the reference
   * point.
   *
   * @param { Position | undefined } value - Anchor of the security component for moving the component with its
   *     top-left corner as the reference point. Generally, this attribute is used in conjunction with **position()**
   *     and **offset()** for more precise positioning.
   *     <br>No default value.
   *     <br>This attribute does not take effect when it is set to an invalid value.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  markAnchor(value: Position | undefined): this;
  /**
   * Sets the coordinate offset of the security component relative to its own layout position.
   *
   * @param { Position | Edges | LocalizedEdges | undefined } value - Coordinate offset of the security component
   *     relative to its own layout position. This attribute does not affect the layout in the parent container. The
   *     offset is used only during drawing.
   *     <br>When the unit is not explicitly specified, the unit is vp.
   *     <br>No default value.
   *     <br>This attribute does not take effect when it is set to an invalid value.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset(value: Position | Edges | LocalizedEdges | undefined): this;
  /**
   * Sets the font size of the text for the security component.
   *
   * @param { Dimension | undefined } value - Font size of the text on the security component.
   *     <br>When the unit is not explicitly specified, the unit is fp.
   *     <br>Default value: $r('sys.float.ohos_id_text_size_button1')<br>Percentage
   *     strings are not supported.<br>This attribute does not take effect when it is set to an invalid value.<br>
   *     Note: When the security component text is not fully displayed, clicking it does not perform authorization. The
   *     **fontSize** setting determines whether the text can be fully displayed and thereby affects the authorization
   *     behavior of the security component.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontSize(value: Dimension | undefined): this;
  /**
   * Sets the font style of the text on the security component.
   *
   * @param { FontStyle | undefined } value - Font style of the text on the security component.
   *     <br>Default value: FontStyle.Normal.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontStyle(value: FontStyle | undefined): this;
  /**
   * Sets the font weight of the text on the security component.
   *
   * @param { int | FontWeight | string | Resource | undefined } value - Font weight of the text on the security
   *     component.
   *     <br>For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a
   *     heavier font weight.
   *     <br>For the string type, only numeric strings, for example, **'400'**, and the enumerated values of
   *     **FontWeight** are supported, including **'bold'**, **'bolder'**, **'lighter'**, **'regular'**, and
   *     **'medium'**.
   *     <br>The Resource type supports only **'integer'** and **'string'** formats. Values follow the number type
   *     specifications for the **'integer'** type and the string type specifications for the **'string'** type, both
   *     described earlier.
   *     <br>If **fontWeight** is not set for the component, the font weight is set to **FontWeight.Medium** by
   *     default. If **value** is **null**, a number outside the [100, 900] range, or a string that does not match the
   *     string format of **FontWeight** enums, the font weight is set to **FontWeight.Normal**.
   *     <br>When set to **undefined**, **FontWeight.Medium** is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontWeight(value: int | FontWeight | string | Resource | undefined): this;
  /**
   * Sets the font family of the text on the security component.
   *
   * @param { string | Resource | undefined } value - Font family of the text on the security component.
   *     <br>Default font: **'HarmonyOS Sans'**.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontFamily(value: string | Resource | undefined): this;
  /**
   * Sets the font color of the text on the security component.
   *
   * @param { ResourceColor | undefined } value - Font color of the text on the security component.
   *     <br>Default value: $r('sys.color.font_on_primary').
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fontColor(value: ResourceColor | undefined): this;
  /**
   * Sets the icon color of the security component.
   *
   * @param { ResourceColor | undefined } value - Icon color of the security component.
   *     <br>Default value: $r('sys.color.icon_on_primary').
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  iconColor(value: ResourceColor | undefined): this;
  /**
   * Sets the background color of the security component.
   *
   * @param { ResourceColor | undefined } value - Background color of the security component.
   *     <br>Default value: $r('sys.color.icon_emphasize').
   *     <br>If the alpha value of the upper eight bits of the security component's background color is less than
   *     **0x1a** (for example, **0x1800ff00**), the system will forcibly adjust this alpha value to **0xff**. This
   *     ensures the security component remains sufficiently visible and prevents users from inadvertently triggering
   *     authorization due to an overly transparent component.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor(value: ResourceColor | undefined): this;
  /**
   * Sets the border style of the security component.
   *
   * @param { BorderStyle | undefined } value - Border style of the security component.
   *     <br>No border style is set by default.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderStyle(value: BorderStyle | undefined): this;
  /**
   * Sets the border width of the security component.
   *
   * @param { Dimension | undefined } value - Border width of the security component.
   *     <br>Default value: **0vp**.
   *     <br>When the unit is not explicitly specified, the unit is vp.<br/>Percentage strings are not supported. This
   *     attribute does not take effect when it is set to an invalid value.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderWidth(value: Dimension | undefined): this;
  /**
   * Sets the border color of the security component.
   *
   * @param { ResourceColor | undefined } value - Border color of the security component.<br>No border color is set by
   *     default.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderColor(value: ResourceColor | undefined): this;
  /**
   * Sets the border radius of the security component, allowing individual setting of the four corner radii.
   *
   * The effect of **borderRadius** is influenced by [ButtonType]{@link ./button:ButtonType}. When **ButtonType** is
   * **Capsule** or **Circle**, the **borderRadius** setting does not take effect, and the corner radius is
   * automatically determined by the button type. When the **ButtonType** is **Normal** or **ROUNDED_RECTANGLE**, the
   * **borderRadius** setting takes effect.
   *
   * @param { Dimension | BorderRadiuses | undefined } radius - Border radius of the security component.
   *     <br>Default value: **0vp**.
   *     <br>When the unit is not explicitly specified, the unit is vp.<br>The Dimension type does not support
   *     setting percentage strings. The border radius is constrained by the component size, with a minimum value of
   *     **0** and a maximum value of half the smaller dimension of width and height. When an invalid value is set,
   *     this attribute does not take effect.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius(radius: Dimension | BorderRadiuses | undefined): this;
  /**
   * Sets the padding of the security component.
   *
   * @param { Padding | Dimension | undefined } value - Padding of the security component.
   *     <br>Default value: 8 vp for the top and bottom and 16 vp for the left and right.
   *     <br>When the unit is not explicitly specified, the unit is vp. <br>Note: Percentage strings are not supported.
   *     If a percentage string is set, the corresponding padding is **0**.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  padding(value: Padding | Dimension | undefined): this;
  /**
   * Sets the spacing between the icon and text in the security component.
   *
   * @param { Dimension | undefined } value - Spacing between the icon and text in the security component.
   *     <br>Default value: **4vp**.
   *     <br>When the unit is not explicitly specified, the unit is vp.
   *     <br>Note: Percentage strings are not supported. If a percentage string is set, the corresponding spacing
   *     between the icon and text is **0**. Negative values are treated as the default value.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textIconSpace(value: Dimension | undefined): this;
  /**
   * Sets the unique ID for the component. You shall guarantee its uniqueness. Upon successful invocation, the
   * component is assigned the specified ID for precise positioning of the component instance during testing. If this
   * API is used together with [id]{@link SecurityComponentMethod.id}, the value set later overrides the value set
   * earlier. You are advised to set only **id**.
   *
   * <br>This API is intended exclusively for app testing to verify attribute configurations and interactive behaviors
   * of security components. In production environments, use the public API [id]{@link SecurityComponentMethod.id}.
   *
   * @param { string | undefined } value - Unique ID for the component. You shall guarantee its uniqueness. This
   *     parameter is used to accurately locate security component instances by ID in test scenarios.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   * @test
   */
  key(value: string | undefined): this;
  /**
   * Sets the width of the security component. If not set, the width adapts to the element content. When used in
   * conjunction with adaptive font size attributes, the width setting affects whether the text is fully displayed.
   *
   * @param { Length | undefined } value - Width of the security component itself. If not set, the width adapts to the
   *     element content.
   *     <br>When the unit is not explicitly specified, the unit is vp.<br>When used in conjunction with
   *     [minFontSize]{@link SecurityComponentMethod.minFontSize},
   *     [maxFontSize]{@link SecurityComponentMethod.maxFontSize}, [maxLines]{@link SecurityComponentMethod.maxLines},
   *     and [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy} for adaptive font sizing, if
   *     the text on the security component is truncated, clicking the component does not perform authorization. If an
   *     invalid value is set, this attribute does not take effect.
   *     <br>When set to **undefined**, the width adapts to the element content.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width(value: Length | undefined): this;
  /**
   * Sets the height of the security component. If not set, the height adapts to the element content. When used in
   * conjunction with adaptive font size attributes, the height setting affects whether the text is fully displayed.
   *
   * @param { Length | undefined } value - Height of the security component. If not set, the height adapts to the
   *     element content.
   *     <br>If no unit is explicitly specified, the unit is vp.<br>When used in conjunction with
   *     [minFontSize]{@link SecurityComponentMethod.minFontSize},
   *     [maxFontSize]{@link SecurityComponentMethod.maxFontSize}, [maxLines]{@link SecurityComponentMethod.maxLines},
   *     and [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy} for adaptive font sizing, if
   *     the text on the security component is truncated, clicking the component does not perform authorization. If an
   *     invalid value is set, this attribute does not take effect.
   *     <br>When set to **undefined**, the height adapts to the element content.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height(value: Length | undefined): this;
  /**
   * Sets the width and height. If not set, the width and height adapt to the element content. The **size** method is
   * used to set both width and height at the same time. To set the width or height individually, use the
   * [width]{@link SecurityComponentMethod.width} or [height]{@link SecurityComponentMethod.height} method.
   *
   * @param { SizeOptions | undefined } value - Width and height of the security component. When this parameter is not
   *     specified, the security component automatically adapts its size to the element content.
   *     <br>If no unit is explicitly specified, the unit is vp. <br>When used in conjunction with
   *     [minFontSize]{@link SecurityComponentMethod.minFontSize},
   *     [maxFontSize]{@link SecurityComponentMethod.maxFontSize}, [maxLines]{@link SecurityComponentMethod.maxLines},
   *     and [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy} for adaptive font sizing, if
   *     the text on the security component is truncated, clicking the component does not perform authorization. If an
   *     invalid value is set, this attribute does not take effect.
   *     <br>When set to **undefined**, the width and height adapt to the element content.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size(value: SizeOptions | undefined): this;
  /**
   * Sets the constraint size, limiting the size range during component layout.
   *
   * @param { ConstraintSizeOptions | undefined } value - Constraint size, limiting the size range during component
   *     layout.
   *     <br>When the unit is not explicitly specified, the unit is vp.<br>**constraintSize** takes precedence over
   *     **width** and **height**. When used in conjunction with adaptive font size attributes, if the text on the
   *     security component is truncated, clicking the component does not perform authorization. The **constraintSize**
   *     setting affects whether the text is fully displayed.<br>For the value results, see
   *     [impact of constraintSize values on width/height]{@link SecurityComponentMethod.constraintSize}.
   *     <br>Default value:<br>{<br>minWidth: 0,<br>maxWidth: Infinity,<br>minHeight: 0,<br>maxHeight: Infinity<br>}.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constraintSize(value: ConstraintSizeOptions | undefined): this;
  /**
   * Sets the alignment of the icon and text on the security component.
   *
   * @param { Alignment | undefined } alignType - Alignment of the icon and text within the security component. The
   *     icon and text are aligned as a unit within the component's background area. The alignment is applied based on
   *     the **alignType** value after [padding]{@link SecurityComponentMethod.padding} takes effect, which also
   *     affects the visual result.
   *     <br>Default value: Alignment.Center.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  align(alignType: Alignment | undefined): this;
  /**
   * Sets the alignment rules for child components within a relative container. This API takes effect only when the
   * parent container is [RelativeContainer]{@link ./relativeContainer}. In the horizontal direction, **start** and
   * **end** in LocalizedAlignRuleOptions replace **left** and **right** in AlignRuleOption respectively, allowing the
   * layout to be mirrored in RTL mode. You are advised to use LocalizedAlignRuleOptions preferentially.
   *
   * @param { AlignRuleOption | LocalizedAlignRuleOptions | undefined } alignRule - Alignment rule configuration object
   *     that defines anchor alignment options (**top**, **bottom**, **left** or **start**, **right** or **end**, and
   *     **center**). Specifies the alignment position and method of the security component in
   *     [RelativeContainer]{@link ./relativeContainer}.
   *     <br>When set to **undefined**, this attribute does not take effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alignRules(alignRule: AlignRuleOption | LocalizedAlignRuleOptions | undefined): this;
  /**
   * Unique ID you assigned for the component.
   *
   * @param { string | undefined } id - Unique ID you assigned for the component.
   *     <br>Default value: ''.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id(id: string | undefined): this;
  /**
   * Sets the parameters of the chain in which the component is the head. This API takes effect only when the parent
   * container is [RelativeContainer]{@link ./relativeContainer}.
   *
   * @param { Axis | undefined } direction - Direction of the chain layout. Specifies the arrangement direction of the
   *     chain headed by this component in the [RelativeContainer]{@link ./relativeContainer}.
   *     <br>When set to **undefined**, this attribute does not take effect.
   * @param { ChainStyle | undefined } style - Style of the chain layout. Controls how child components are distributed
   *     within the chain, such as evenly distributed, aligned at both ends, or compactly arranged. For specific values
   *     and effects, see [ChainStyle]{@link ChainStyle}.
   *     <br>When set to **undefined**, this attribute does not take effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  chainMode(direction: Axis | undefined, style: ChainStyle | undefined): this;
  /**
   * Sets the minimum font scale factor for the text. When this API is invoked and the system font scaling causes the
   * text to shrink, the font scale factor will not fall below the set minimum scale factor.
   *
   * This API can be used in conjunction with [maxFontScale]{@link SecurityComponentMethod.maxFontScale}.
   * **minFontScale** controls the lower limit of the scale factor and **maxFontScale** controls the upper limit. They
   * can be set independently or together to precisely control font scaling.
   *
   * @param { double | Resource | undefined } scale - Minimum font scale factor for the text.
   *     <br>Value range: [0,1].
   *     <br>**NOTE**
   *     <br>If the set value is less than 0, the value **0** is used, meaning scaling down to any factor is allowed.
   *     If the set value is greater than 1, the value **1** is used, meaning font scaling is not allowed. If the value
   *     is **undefined**, **null**, or another invalid value, the attribute has no effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minFontScale(scale: double | Resource | undefined): this;
  /**
   * Sets the maximum font scale factor. When this API is invoked and the system font scaling causes the text to
   * enlarge, the font scale factor will not exceed the set maximum scale factor.
   *
   * This API can be used in conjunction with [minFontScale]{@link SecurityComponentMethod.minFontScale}.
   * **maxFontScale** controls the upper limit of the scale factor, and **minFontScale** controls the lower limit. They
   * can be set independently or together to precisely control font scaling.
   *
   * @param { double | Resource | undefined } scale - Maximum font scale factor for the text.
   *     <br>The value must be greater than or equal to 1.
   *     <br>
   *     **NOTE**<br>If the set value is less than 1, the value **1** is used. If the value is **undefined**,
   *     **null**, or another invalid value, the attribute has no effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxFontScale(scale: double | Resource | undefined): this;
  /**
   * Sets the maximum number of lines for text. By default, text wraps automatically. When this attribute is
   * specified, the text will display at most the specified number of lines. It can be used independently to limit
   * text lines, or in conjunction with [minFontSize]{@link SecurityComponentMethod.minFontSize},
   * [maxFontSize]{@link SecurityComponentMethod.maxFontSize}, and
   * [heightAdaptivePolicy]{@link SecurityComponentMethod.heightAdaptivePolicy}. When used with adaptive font size
   * attributes, if the security component text is not fully displayed, the click will not trigger authorization. The
   * **maxLines** setting affects whether the text can be fully displayed, thereby affecting the authorization
   * behavior of the security component.
   *
   * @param { int | Resource | undefined } line - Maximum number of lines for the text.
   *     <br>The number type accepts values in [1, +∞).
   *     The Resource type supports only integers in the range [1, +∞).
   *     <br>**NOTE**
   *     <br>A value less than 1 is handled as the default value **1000000**.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxLines(line: int | Resource | undefined): this;
  /**
   * Sets the minimum font size for text display.
   *
   * - When used in conjunction with [maxFontSize]{@link SecurityComponentMethod.maxFontSize} and
   * [maxLines]{@link SecurityComponentMethod.maxLines}, or in combination with layout size constraints, this
   * attribute enables font size adaptation. Using this attribute alone will not take effect.
   * - **minFontSize** must be smaller than **maxFontSize**. If the set value is greater than **maxFontSize**,
   * **maxFontSize** is used instead.
   * - When **minFontSize** is less than or equal to 0, adaptive font size does not take effect.
   * - When adaptive font size is effective, the **fontSize** setting does not take effect.
   * - If the security component text is not fully displayed, clicking does not trigger authorization. The
   * **minFontSize** setting affects text visibility, which in turn affects authorization behavior.
   *
   * @param { double | string | Resource | undefined } minSize - Minimum display font size of the text.
   *     <br>The value must be greater than 0.
   *     <br>When the unit is not explicitly specified, the unit is fp.<br> **minFontSize** must be less than
   *     **maxFontSize**. If the set value is greater than **maxFontSize**, **maxFontSize** is used instead. If this
   *     parameter is less than or equal to 0, the adaptive font size does not take effect.
   *     <br>When set to **undefined**, the adaptive font size does not take effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minFontSize(minSize: double | string | Resource | undefined): this;
  /**
   * Sets the maximum font size for text display.
   *
   * - When used in conjunction with [minFontSize]{@link SecurityComponentMethod.minFontSize} and
   * [maxLines]{@link SecurityComponentMethod.maxLines}, or in combination with layout size constraints, this
   * attribute enables font size adaptation. Using this attribute alone will not take effect.
   * - **maxFontSize** must be greater than **minFontSize**. If **maxFontSize** is less than **minFontSize**,
   * **minFontSize** will be treated as **maxFontSize**.
   * - When adaptive font size is effective, the **fontSize** setting does not take effect.
   * - If the security component text is not fully displayed, clicking does not trigger authorization. The
   * **maxFontSize** setting affects text visibility, which in turn affects authorization behavior.
   *
   * @param { double | string | Resource | undefined } maxSize - Maximum display font size of the text.
   *     <br>The value must be greater than 0.
   *     <br>When the unit is not explicitly specified, the unit is fp.
   *     <br>**NOTE**<br>When the set value is less than or equal to 0, the adaptive font size does not take effect.
   *     When an invalid value is set, this attribute does not take effect.
   *     <br>When set to **undefined**, the adaptive font size does not take effect.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxFontSize(maxSize: double | string | Resource | undefined): this;
  /**
   * Sets the method for text height adaptation. This is applicable to scenarios where the text display of a security
   * component needs to be dynamically adjusted to ensure complete text visibility under different sizes or language
   * environments.
   *
   * The security component text is laid out at [maxFontSize]{@link SecurityComponentMethod.maxFontSize}. If the text
   * can be completely displayed and no adaptive adjustment is needed, this API does not take effect. Otherwise,
   * adaptation proceeds according to the specified policy, as follows:
   * <br>**TextHeightAdaptivePolicy.MAX_LINES_FIRST**: prioritizes the
   * [maxLines]{@link SecurityComponentMethod.maxLines} attribute for adjusting the text height. If the layout size
   * with **maxLines** exceeds the layout constraints, the security component attempts to reduce the font size within
   * the range of [minFontSize]{@link SecurityComponentMethod.minFontSize} and
   * [maxFontSize]{@link SecurityComponentMethod.maxFontSize} to fit more text. If the text still cannot be fully
   * displayed, the security component adaptively adjusts its height to show all text.
   * <br>**TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**: prioritizes the
   * [minFontSize]{@link SecurityComponentMethod.minFontSize} attribute for adjusting the text height. If the text can
   * be laid out in a single line using **minFontSize**, the security component attempts to increase the font size
   * within the range of **minFontSize** and [maxFontSize]{@link SecurityComponentMethod.maxFontSize} to use the
   * largest possible font size. If the text cannot be laid out in a single line using **minFontSize**, the security
   * component attempts to use the [maxLines]{@link SecurityComponentMethod.maxLines} attribute for layout. If the
   * text still cannot be fully displayed, the security component adaptively adjusts its height to fully display the
   * text.
   * <br>**TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST**: prioritizes layout constraints for adjusting the text
   * height.
   * <br>If the layout size exceeds the constraints, the security component attempts to reduce the font size within
   * the range of [minFontSize]{@link SecurityComponentMethod.minFontSize} and
   * [maxFontSize]{@link SecurityComponentMethod.maxFontSize}. If the layout size still exceeds the constraints after
   * the font size is reduced to **minFontSize**, the security component truncates the excess lines. If the
   * [maxLines]{@link SecurityComponentMethod.maxLines} attribute is set, the number of lines does not exceed the
   * **maxLines** value (horizontal truncation may occur). If **maxLines** is not set, there is no limit on the number
   * of lines.
   * If the security component text is not fully displayed, clicking does not trigger authorization. Whether the text
   * is fully displayed depends on attributes such as **heightAdaptivePolicy**, **minFontSize**, **maxFontSize**,
   * **maxLines**, **width**, and **height**.
   *
   * @param { TextHeightAdaptivePolicy | undefined } policy - Policy for text height adaptation.
   *     <br>Default value: TextHeightAdaptivePolicy.MAX_LINES_FIRST.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  heightAdaptivePolicy(policy: TextHeightAdaptivePolicy | undefined): this;
  /**
   * Sets whether the security component is interactive.
   *
   * @param { boolean | undefined } respond - Whether the security component is interactive.
   *     <br>Default value: **true**
   *     <br>**true**: The component is interactive and responds to operations such as clicks.
   *     <br>**false**: The component is non-interactive and does not respond to operations such as clicks.
   *     <br>When set to **undefined**, the default value is used.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enabled(respond: boolean | undefined): this;
  /**
   * Sets the style of the system focus box for the security component.
   *
   * @param { FocusBoxStyle | undefined } style - Configuration object for the focus box style. Contains properties
   *     such as **margin** (the spacing between the focus box and the component) and **strokeColor** (the stroke
   *     color of the focus box) to customize the appearance of the system focus box.
   *     <br>When set to **undefined**, the shape of the focus box is consistent with that of the component
   *     background.
   * @returns { SecurityComponentMethod } Returns the attribute of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  focusBox(style: FocusBoxStyle | undefined): this;

  /**
   * Enables adaptive line height based on the actual text height for multi-line text.
   *
   * The **fallbackLineSpacing** attribute is closely coupled with the **lineHeight** attribute of
   * [RichEditorTextStyle]{@link ./richEditor:RichEditorTextStyle}. When the **lineHeight** value is less than the
   * actual rendering height of the text at
   * the current font size, the **fallbackLineSpacing** value determines whether the line height should adapt based
   * on the actual text height.
   *
   * @param { boolean | undefined } enabled - Whether the line height adapts based on the actual text height.<br/>
   *     **true**: The line height adapts based on the actual text height. **false**: The line height does not adapt
   *     based on the actual text height.
   *     <br>Default value: **false**.
   *     <br>When set to **undefined**, the security component keeps the default style.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  fallbackLineSpacing(enabled: boolean | undefined): this;

  /**
   * Specifies the next focus component for the screen reader.
   *
   * @param { string | undefined } nextId - The [unique ID]{@link SecurityComponentMethod.id} of the next component to
   *     be focused. If the unique ID does not correspond to any component, the setting is invalid.
   *     <br>When set to **undefined**, the security component keeps the default style.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityNextFocusId(nextId: string | undefined): this;

  /**
   * Sets the initial focus for the screen reader on the page, specifying the component that the screen reader
   * announces first after the page loads.
   *
   * @param { boolean | undefined } focus - Sets the initial focus of the screen reader on the page. **true** means the
   *     component is the default first focus on the current page; **false** or any other value is invalid.
   *     <br>When set to **undefined**, the security component keeps the default style.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDefaultFocus(focus: boolean | undefined): this;

  /**
   * Sets the accessibility component type. Each component type is announced in a specific way. You can modify the
   * component type based on your app's requirements to control how the component is announced and what content is
   * announced in accessibility mode.
   *
   * @param { SecurityComponentRoleType | undefined } role - The component type, such as button or chart, that
   *     determines how the component is announced by the screen reader. The specific type can be customized.
   *     <br>When set to **undefined**, the security component keeps the default style.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityRole(role: SecurityComponentRoleType | undefined): this;

  /**
   * Provides an accessibility description for the component. You can set detailed text descriptions to help users
   * understand the component's functionality and the actions it will perform.
   *
   * @param { string | Resource | undefined } description - Accessibility description for the component. Provides
   *     details about the component's operation, helping users understand what the current action does and its
   *     potential consequences. When the component is selected, if it has both text attributes and an accessibility
   *     description, the text content is announced first, followed by the accessibility description.
   *     <br>The default value is an empty string.
   *     <br>When set to **undefined**, the security component keeps the default style.
   * @returns { SecurityComponentMethod } Returns the attributes of the security component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  accessibilityDescription(description: string | Resource | undefined): this;
}
