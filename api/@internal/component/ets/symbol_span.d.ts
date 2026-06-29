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
 * As a child component of the **Text** component, the **SymbolSpan** component is used to display small icons.
 *
 * > **NOTE**
 *
 * > - This component can inherit attribute settings from its parent component **Text**. This means that, if an
 * > attribute is not set in this component, it takes the value of the attribute (if set) from its parent component.
 * >
 * > - The **SymbolSpan** component is not dimmed when dragged.
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
   *
   * @param { Resource } value - Resource of the **SymbolSpan** component, for example, **$r('sys.symbol.ohos_wifi')**.
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
 * The [universal attributes]{@link common} are not supported. Only the following attributes are supported.
 *
 * The [universal events]{@link common} are not supported.
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
   * Sets the size of the symbol span. When using the string type, numeric string values with optional units, for
   * example, **"10"** or **"10fp"**, are supported.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | string | Resource } value - Size of the symbol span.<br>Default value: **16fp**<br>Unit:
   *     [fp]{@link common}
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
   * Sets the color of the symbol span.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { Array<ResourceColor> } value - Color of the symbol span.<br> Default value: depending on the rendering
   *     strategy
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
   * Sets the weight of the symbol span. For the number type, the value ranges from 100 to 900, at an interval of 100. A
   * larger value indicates a heavier font weight. The default value is **400**. For the string type, only strings of
   * the number type are supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and
   * **"medium"**, which correspond to the enumerated values in **FontWeight**.
   *
   * The **sys.symbol.ohos_lungs** icon does not support font weight setting.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | FontWeight | string } value - Weight of the symbol span.<br>Default value: **FontWeight.Normal**
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
   * Used to set the font weight of SymbolSpan.
   *
   * @param { number | FontWeight | ResourceStr } value - the SymbolSpan font weight.
   * @param { FontWeightConfigs } [fontWeightConfigs] - the configuration of font weight.
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
   * Sets the symbol effect of the symbol span.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolEffectStrategy } value - Symbol effect of the symbol span.<br>Default value:
   *     **SymbolEffectStrategy.NONE**
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
   * Sets the rendering strategy of the symbol span.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolRenderingStrategy } value - Rendering strategy of the symbol span.<br>Default value:
   *     **SymbolRenderingStrategy.SINGLE**
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
 * As a child component of the **Text** component, the **SymbolSpan** component is used to display small icons.
 *
 * > **NOTE**
 *
 * > - This component can inherit attribute settings from its parent component **Text**. This means that, if an
 * > attribute is not set in this component, it takes the value of the attribute (if set) from its parent component.
 * >
 * > - The **SymbolSpan** component is not dimmed when dragged.
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