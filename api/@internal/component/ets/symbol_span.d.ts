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
 */

/**
 * As a child component of the **Text** component, **SymbolSpan** is used to display the system preset small icon
 * symbols (Symbol icons) in text. It supports setting attributes such as color, size, font weight, rendering strategy,
 * and effect strategy, and is suitable for scenarios where icon symbols need to be embedded in text, such as status
 * indication and function identification. **SymbolSpan** supports only system preset symbol resources and can inherit
 * the attribute settings of the parent **Text** component.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. New APIs of later versions are marked with a superscript to
 * > indicate their
 * >
 * > - This component supports inheriting the attributes of the parent **Text** component. That is, if the child
 * > component does not set an attribute but the parent component does, the child component inherits all the attributes
 * > set by the parent component.
 * >
 * > - **SymbolSpan** does not gray out when dragged.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SymbolSpanInterface {
  /**
   *
   * Defines the constructor of SymbolSpan.
   * @param { Resource } value - Resource reference of the SymbolSpan component, for example, $r('sys.symbol.ohos_wifi'
   *     ). Only system preset symbol resources are supported. Referencing a non-symbol resource will cause display
   *     exceptions.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (value: Resource): SymbolSpanAttribute;
}

/**
 * The [universal attributes]{@link ./common} are not supported. Only the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class SymbolSpanAttribute extends CommonMethod<SymbolSpanAttribute> {
  /**
   * Sets the size of the **SymbolSpan** component. When the value is of the string type, the string form of a number
   * type value is supported, and a unit can be attached, for example, "10" and "10fp". If this API is not called, the
   * default component size is 16fp.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | string | Resource } value - Size of the SymbolSpan component.
   *     <br>Value range: [0, +∞)
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize(value: number | string | Resource): SymbolSpanAttribute;

  /**
   * Sets the color of the **SymbolSpan** component. If this API is not called, the default color varies with
   * [renderingStrategy]{@link SymbolSpanAttribute#renderingStrategy}. Under the single-color rendering strategy (SINGLE
   * ), the default is a single color. Under the multi-color rendering strategy (MULTIPLE_COLOR) and the layered
   * rendering strategy (MULTIPLE_OPACITY), the default is the preset multi-color configuration of the icon resource.
   * For details, see [SymbolRenderingStrategy]{@link SymbolRenderingStrategy}.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { Array<ResourceColor> } value - Color of the SymbolSpan component. For details about the specific color
   *     rendering modes and their descriptions, see [SymbolRenderingStrategy]{@link SymbolRenderingStrategy}.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor(value: Array<ResourceColor>): SymbolSpanAttribute;

  /**
   * Sets the font weight of the **SymbolSpan** component. If this API is not called, the default font weight is
   * FontWeight.Normal (normal weight, corresponding to the value 400).
   *
   * The **sys.symbol.ohos_lungs** icon does not support font weight setting.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | FontWeight | string } value - Font weight of the SymbolSpan component.
   *     <br>For the number type, the value range is [100, 900], with an interval of 100. The default value is 400. A
   *     larger value indicates a heavier font. For the string type, only the string form of the number type value is
   *     supported, for example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which
   *     correspond to the respective enum values in FontWeight. If the value is set too large, the font may be
   *     truncated in different fonts. If a value outside the value range or not meeting the interval requirement is
   *     passed, the default value is used.
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight(value: number | FontWeight | string): SymbolSpanAttribute;

  /**
   * Sets the font weight of the SymbolSpan component. It supports configuring, through FontWeightConfigs, whether to
   * enable variable font weight adjustment and whether to automatically update the font weight based on the device font
   * weight level. If this API is not called, the default font weight is FontWeight.Normal (normal weight, corresponding
   * to the value 400).
   *
   * The sys.symbol.ohos_lungs icon does not support setting fontWeight.
   *
   * @param { number | FontWeight | ResourceStr } value - Font weight of the SymbolSpan component.
   *     <br>The number type value range is [100, 900], with an interval of 100. The default value is 400. A larger
   *     value indicates a heavier font. The string type supports only the string form of the number type values, for
   *     example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the
   *     respective enum values in FontWeight. Setting an excessively large value may cause truncation with different
   *     fonts.
   *     <br>If the value is out of the value range, the default value is used. If the value does not meet the interval
   *     requirement, the passed value is used when enableVariableFontWeight of fontWeightConfigs is set to true;
   *     otherwise, the default value is used.
   * @param { FontWeightConfigs } [fontWeightConfigs] - Font weight configuration. Pass this parameter when variable
   *     font weight adjustment needs to be enabled (setting a fine-grained font weight value that is not an integer
   *     multiple of 100, such as 220 or 660) or when the font weight needs to be automatically updated based on the
   *     device font weight level.
   *     <br>Default value: { enableVariableFontWeight: false, enableDeviceFontWeightCategory: true }
   * @returns { SymbolSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs): SymbolSpanAttribute;

  /**
   * Sets the effect strategy of the SymbolSpan. If this API is not called, the default effect strategy is
   * SymbolEffectStrategy.NONE.
   *
   * NONE indicates no effect, which is suitable for static display scenarios. SCALE indicates an overall scaling
   * effect, which is suitable for scenarios that need to attract user attention, such as button click feedback.
   * HIERARCHICAL indicates a hierarchical effect, which is suitable for scenarios where the layered sense of an icon
   * needs to be highlighted.
   *
   * For the effects of different effect strategies, see
   * [Example 1: Setting Rendering and Animation Strategies](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolSpan.md#example-1-setting-rendering-and-animation-strategies).
   *
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolEffectStrategy } value - Effect strategy of SymbolSpan.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy(value: SymbolEffectStrategy): SymbolSpanAttribute;

  /**
   * Sets the rendering strategy of the SymbolSpan. If this API is not called, the default rendering strategy is
   * SymbolRenderingStrategy.SINGLE.
   *
   * SINGLE indicates single-color rendering, which is suitable for scenarios where icons with a unified color are
   * required. MULTIPLE_COLOR indicates multi-color rendering, which is suitable for scenarios where multiple layers of
   * an icon need to be displayed in different colors. MULTIPLE_OPACITY indicates layered rendering, which is suitable
   * for scenarios where the layered effect of an icon needs to be displayed.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolRenderingStrategy } value - Rendering strategy of SymbolSpan.
   * @returns { SymbolSpanAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolSpanAttribute;

  /**
   * Creates an attribute modifier.
   *
   * @param { AttributeModifier<SymbolSpanAttribute> } modifier - Modifier for dynamically setting attributes on the
   *     current component.
   * @returns { SymbolSpanAttribute } the attribute of the SymbolSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute>): SymbolSpanAttribute;
}

/**
 * As a child component of the **Text** component, **SymbolSpan** is used to display the system preset small icon
 * symbols (Symbol icons) in text. It supports setting attributes such as color, size, font weight, rendering strategy,
 * and effect strategy, and is suitable for scenarios where icon symbols need to be embedded in text, such as status
 * indication and function identification. **SymbolSpan** supports only system preset symbol resources and can inherit
 * the attribute settings of the parent **Text** component.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. New APIs of later versions are marked with a superscript to
 * > indicate their
 * >
 * > - This component supports inheriting the attributes of the parent **Text** component. That is, if the child
 * > component does not set an attribute but the parent component does, the child component inherits all the attributes
 * > set by the parent component.
 * >
 * > - **SymbolSpan** does not gray out when dragged.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const SymbolSpan: SymbolSpanInterface;

/**
 * Defines SymbolSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const SymbolSpanInstance: SymbolSpanAttribute;