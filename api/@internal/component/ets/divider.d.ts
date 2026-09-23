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
 */

/**
 * The **Divider** component is used to separate content blocks and content elements.
 *
 * > **NOTE**
 * >
 * > If the divider appears with inconsistent thickness or becomes invisible, follow the instructions in
 * > [FAQs](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-pixelRoundForComponent.md#faqs).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
interface DividerInterface {
  /**
   * Creates a **Divider** component.
   *
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (): DividerAttribute;
}

/**
 * In addition to the [universal attributes]{@link CommonMethod}, the following attributes are supported.
 *
 * The [universal events]{@link CommonMethod} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare class DividerAttribute extends CommonMethod<DividerAttribute> {
  /**
   * Sets the direction of the divider. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { boolean } value - Whether the divider is vertical or horizontal.
   *     <br>**false**: A horizontal divider is used.
   *     <br>**true**: A vertical divider is used.
   *     <br>Default value: **false**
   *     <br>Invalid values are treated as the default value.
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  vertical(value: boolean): DividerAttribute;

  /**
   * Sets the color of the divider. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { ResourceColor } value - Color of the divider.
   *     <br>Default value: **'#33182431'**
   *     <br>Invalid values are treated as the default value.
   *     <br>You can set a common divider color using [WithTheme]{@link with_theme}.
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color(value: ResourceColor): DividerAttribute;

  /**
   * Sets the stroke width of the divider. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * > **NOTE**
   * >
   * > - The width of the divider cannot be in percentage.
   * >
   * > - When a horizontal divider is used, **strokeWidth** controls the height, and its priority is lower than that of
   * > the universal attribute [height]{@link CommonMethod#height(value: Length)}. When a vertical divider is used,
   * > **strokeWidth** controls the width, and its priority is lower than that of the universal attribute
   * > [width]{@link CommonMethod#width(value: Length)}.
   * >
   * > - If the size exceeds the value set by the universal attribute, the divider is clipped based on the universal
   * > attribute.
   * >
   * > - If the divider is not displayed due to 1-pixel rounding on the device hardware, 2 pixels are recommended.
   *
   * @param { number | string } value - Stroke width of the divider.<br/>Default value: **1px**  <br />Invalid values
   *     are treated as the default value. <br/>Unit: vp
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  strokeWidth(value: number | string): DividerAttribute;

  /**
   * Sets the line cap style of the divider. This attribute can be dynamically set using
   * [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { LineCapStyle } value - Line cap style of the divider.
   *     <br>Default value: **LineCapStyle.Butt**
   *     <br>Invalid values are treated as the default value.
   * @returns { DividerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  lineCap(value: LineCapStyle): DividerAttribute;
}

/**
 * The **Divider** component is used to separate content blocks and content elements.
 *
 * > **NOTE**
 * >
 * > If the divider appears with inconsistent thickness or becomes invisible, follow the instructions in
 * > [FAQs](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-pixelRoundForComponent.md#faqs).
 *
 * ## Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const Divider: DividerInterface;

/**
 * Defines Divider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const DividerInstance: DividerAttribute;
