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
 * The **SymbolGlyph** component represents a symbol glyph.<!--RP1--><!--RP1End-->
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
interface SymbolGlyphInterface {
  /**
   *
   * Defines the constructor of SymbolGlyph.
   *
   * @param { Resource } value - Resource of the **SymbolGlyph** component, for example, **$r('sys.symbol.ohos_wifi')**.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  (value?: Resource): SymbolGlyphAttribute;
}

/**
 * The symbol rendering strategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SymbolRenderingStrategy {

  /**
   * Single-color mode (default value).
   *
   * The default color is black.
   *
   * You can set one or multiple colors, but only the first color will be applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SINGLE = 0,

  /**
   * Multi-color mode.
   *
   * A maximum of three colors can be set. If only one color is set, it updates the color of the first layer, leaving
   * other colors at their default values.
   *
   * The sequence of color settings matches the layering order of the symbol; any colors beyond the number of symbol
   * layers will not take effect.
   *
   * Only color values are accepted. Opacity settings do not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MULTIPLE_COLOR = 1,

  /**
   * Layered mode.
   *
   * The default color is black. You can set one or multiple colors, but only the first color will be applied.
   *
   * Opacity is predefined for the layers: 100% for the first layer, 50% for the second layer, and 20% for the third
   * layer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  MULTIPLE_OPACITY = 2
}

/**
 * Enumerates symbol effect types. Once applied, the symbol effect becomes active instantly, eliminating the need for
 * triggering.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum SymbolEffectStrategy {

  /**
   * No effect (default value).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Scale effect as a whole.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SCALE = 1,

  /**
   * Hierarchical effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  HIERARCHICAL = 2,
}

/**
 * The direction type of symbol effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum EffectDirection {

  /**
   * The symbol scales down and then returns to its original size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DOWN = 0,

  /**
   * The symbol scales up and then returns to its original size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  UP = 1
}

/**
 * The scope type of the symbol effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum EffectScope {

  /**
   * Layered mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  LAYER = 0,

  /**
   * Whole mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  WHOLE = 1
}

/**
 * The fill style of symbol effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum EffectFillStyle {

  /**
   * Cumulative style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CUMULATIVE = 0,

  /**
   * Iterative style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  ITERATIVE = 1
}

/**
 * The replace effect type of symbol.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ReplaceEffectType {

  /**
   * Sequential replacement: The current symbol disappears before a new symbol appears. This is the default symbol
   * replacement effect type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  SEQUENTIAL = 0,

  /**
   * Cross-fade transition effect: The current symbol fades out while a new symbol fades in simultaneously.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  CROSS_FADE = 1,

  /**
   * Slash overlay effect: The current symbol is replaced with a symbol featuring diagonal slash, typically indicating
   * disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  SLASH_OVERLAY = 2
}

/**
 * Defines the **SymbolEffect** class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class SymbolEffect {}

/**
 * Defines ScaleSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class ScaleSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create a **ScaleSymbolEffect** instance, which comes with a scaling animation effect.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @param { EffectDirection } [direction] - Effect direction.<br>Default value: **EffectDirection.DOWN**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * Effect scope.
   *
   * Default value: **EffectScope.LAYER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  scope?: EffectScope;

  /**
   * Effect direction.
   *
   * Default value: **EffectDirection.DOWN**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: EffectDirection;
}

/**
 * Defines HierarchicalSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class HierarchicalSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create a **HierarchicalSymbolEffect** instance, which comes with a hierarchical animation
   * effect.
   *
   * @param { EffectFillStyle } [fillStyle] - Effect fill style.<br>Default value: **EffectFillStyle.CUMULATIVE**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(fillStyle?: EffectFillStyle);

  /**
   * Effect fill style.
   *
   * Default value: **EffectFillStyle.CUMULATIVE**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fillStyle?: EffectFillStyle;
}

/**
 * Defines AppearSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class AppearSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create an **AppearSymbolEffect** instance, which comes with an appear animation effect.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * Effect scope.
   *
   * Default value: **EffectScope.LAYER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  scope?: EffectScope;
}

/**
 * Defines DisappearSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class DisappearSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create an **AppearSymbolEffect** instance, which comes with an appear animation effect.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * Effect scope.
   *
   * Default value: **EffectScope.LAYER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  scope?: EffectScope;
}

/**
 * Defines BounceSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class BounceSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create a **ScaleSymbolEffect** instance, which comes with a scaling animation effect.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @param { EffectDirection } [direction] - Effect direction.<br>Default value: **EffectDirection.DOWN**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * Effect scope.
   *
   * Default value: **EffectScope.LAYER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  scope?: EffectScope;

  /**
   * Effect direction.
   *
   * Default value: **EffectDirection.DOWN**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: EffectDirection;
}

/**
 * Defines ReplaceSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class ReplaceSymbolEffect extends SymbolEffect {

  /**
   * A constructor used to create an **AppearSymbolEffect** instance, which comes with an appear animation effect.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * A constructor used to create a **ReplaceSymbolEffect** instance, which comes with a replace animation effect. The
   * replace effect type can be specified.
   *
   * @param { EffectScope } [scope] - Effect scope.<br>Default value: **EffectScope.LAYER**
   * @param { ReplaceEffectType } [replaceType] - Replacement effect type.<br>Default value:
   *     **ReplaceEffectType.SEQUENTIAL**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(scope?: EffectScope, replaceType?: ReplaceEffectType);

  /**
   * Effect scope.
   *
   * Default value: **EffectScope.LAYER**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  scope?: EffectScope;

  /**
   * Replacement effect type.
   *
   * Default value: **ReplaceEffectType.SEQUENTIAL**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  replaceType?: ReplaceEffectType;
}

/**
 * Defines PulseSymbolEffect class, which inherits from **SymbolEffect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class PulseSymbolEffect extends SymbolEffect {}

/**
 * The [universal attributes]{@link common} are supported. For text attributes, only the following attributes are
 * supported.
 *
 * The [universal events]{@link common} are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare class SymbolGlyphAttribute extends CommonMethod<SymbolGlyphAttribute> {

  /**
   * Sets the size of the **SymbolGlyph** component. When using the string type, numeric string values with optional
   * units, for example, **"10"** or **"10fp"**, are supported.
   *
   * The display size of the symbol glyph is controlled by the **fontSize** setting. Once **width** or **height** is
   * specified, other universal attributes will only affect the size of the component's placeholder, not the symbol
   * glyph itself.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | string | Resource } value - Size of the **SymbolGlyph** component.<br>Default value: **16fp**<br>
   *     Unit: [fp]{@link common}<br>Percentage strings are not supported.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize(value: number | string | Resource): SymbolGlyphAttribute;

  /**
   * Sets the color of the **SymbolGlyph** component.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { Array<ResourceColor> } value - Color of the **SymbolGlyph** component.<br> Default value: depending on the
   *     rendering strategy
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor(value: Array<ResourceColor>): SymbolGlyphAttribute;

  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor | ColorMetrics> | undefined } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontColor(value: Array<ResourceColor | ColorMetrics> | undefined): SymbolGlyphAttribute;

  /**
   * Applies a gradient or solid color shader effect to the **SymbolGlyph** component.
   *
   * This API supports [RadialGradientStyle]{@link RadialGradientStyle},
   * [LinearGradientStyle]{@link LinearGradientStyle}, and [ColorShaderStyle]{@link ColorShaderStyle}. When set,
   * **shaderStyle** takes precedence over [fontColor]{@link SymbolSpanAttribute#fontColor} and any AI-based styling. To
   * apply a simple solid color, using [fontColor]{@link SymbolSpanAttribute#fontColor} is recommended.
   *
   * @param { Array<ShaderStyle | undefined> | ShaderStyle } shader - Shader effect.<br>Input types and behavior:<br>
   *     Single **ShaderStyle** object: applies the specified effect to all layers. Array of **ShaderStyle** objects:
   *     applies the specified effect to the corresponding layer. Array of **undefined**: applies the default
   *     **SymbolGlyph** color to the corresponding layer. Layers unset retain their default color.<br> Based on the
   *     input, the system applies a radial gradient ([RadialGradientStyle]{@link RadialGradientStyle}), linear gradient
   *     ([LinearGradientStyle]{@link LinearGradientStyle}), or solid color ([ColorShaderStyle]{@link ColorShaderStyle})
   *     to the **SymbolGlyph** component.<br>**NOTE**<br>Unit: [vp]{@link common}<br>Specify the center point and
   *     radius using percentages. If a non-percentage value (e.g., **10px**) is provided, it will be interpreted as 100
   *     0%.<br>You are advised to specify the radius using percentages.<br>Percentages are relative to the icon's size.
   *     The recommended value range is [0, 1).
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle): SymbolGlyphAttribute;

  /**
   * Sets the font weight of the **SymbolGlyph** component. For the number type, the value ranges from 100 to 900, at an
   * interval of 100. A larger value indicates a heavier font weight. The default value is **400**. For the string type,
   * only strings of the number type are supported, for example, **"400"**, **"bold"**, **"bolder"**, **"lighter"**,
   * **"regular"**, and **"medium"**, which correspond to the enumerated values in **FontWeight**.
   *
   * The **sys.symbol.ohos_lungs** icon does not support font weight setting.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | FontWeight | string } value - Font weight of the **SymbolGlyph** component.<br>Default value:
   *     **FontWeight.Normal**
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight(value: number | FontWeight | string): SymbolGlyphAttribute;

  /**
   * Used to set the font weight of symbolGlyph.
   *
   * @param { number | FontWeight | ResourceStr } value - the symbolGlyph font weight.
   * @param { FontWeightConfigs } [fontWeightConfigs] - the configuration of font weight.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs): SymbolGlyphAttribute;

  /**
   * Sets the effect strategy of the **SymbolGlyph** component.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolEffectStrategy } value - Effect strategy of the **SymbolGlyph** component.<br>Default value:
   *     **SymbolEffectStrategy.NONE**
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  effectStrategy(value: SymbolEffectStrategy): SymbolGlyphAttribute;

  /**
   * Sets the rendering strategy of the **SymbolGlyph** component.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolRenderingStrategy } value - Rendering strategy of the **SymbolGlyph** component.<br>Default value:
   *     **SymbolRenderingStrategy.SINGLE**
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolGlyphAttribute;

  /**
   * Sets the symbol effect and effect state for the **SymbolGlyph** component.
   *
   * @param { SymbolEffect } [symbolEffect] - Symbol effect of the **SymbolGlyph** component.<br>Default value:
   *     [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}
   * @param { boolean } [isActive] - Whether the effect is active.<br>**true**: playing. **false**: not playing.<br>
   *     Default value: **false**.
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean): SymbolGlyphAttribute;

  /**
   * Sets the symbol effect and effect trigger for the **SymbolGlyph** component.
   *
   * @param { SymbolEffect } [symbolEffect] - Symbol effect of the **SymbolGlyph** component.<br>Default value:
   *     [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}
   * @param { number } [triggerValue] - Value that, when changed, initiates the animation of the **SymbolGlyph**
   *     component.<br>To prevent the motion effect from triggering initially, set it to **-1**.
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  symbolEffect(symbolEffect: SymbolEffect, triggerValue?: number): SymbolGlyphAttribute;

  /**
   * Sets the minimum font scale factor for the **SymbolGlyph** component.
   *
   * @param { Optional<number|Resource> } scale - Minimum font scale factor for the **SymbolGlyph** component.<br>Value
   *     range: [0, 1]<br>The value **0** results in the minimum scaling.<br>**NOTE**<br>A value less than 0 is handled
   *     as 0. A value greater than 1 is handled as 1. Abnormal values are ineffective by default.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * Sets the maximum font scale factor for the **SymbolGlyph** component.
   *
   * @param { Optional<number|Resource> } scale - Maximum font scale factor for the **SymbolGlyph** component.<br>Value
   *     range:
   *     [1, +∞)<br>**NOTE**<br>A value less than 1 is handled as **1**. Abnormal values are ineffective by default.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * Sets the shadow effect of the **SymbolGlyph** component.
   *
   * @param { Optional<ShadowOptions> } shadow - Shadow effect of the **SymbolGlyph** component.<br>Unit:
   *     [vp]{@link common}<br>Default value: {<br>radius: 0,<br>color: Color.Black<br>offsetX: 0,<br>offsetY: 0<br>} <
   *     br>The **fill** and **type** attributes, as well as the enumerated values of **ColoringStrategy** within the
   *     **color **attribute, are not supported.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  symbolShadow(shadow: Optional<ShadowOptions>): SymbolGlyphAttribute;
}

/**
 * The **SymbolGlyph** component represents a symbol glyph.<!--RP1--><!--RP1End-->
 *
 * > **NOTE**
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
declare const SymbolGlyph: SymbolGlyphInterface;

/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
declare const SymbolGlyphInstance: SymbolGlyphAttribute;