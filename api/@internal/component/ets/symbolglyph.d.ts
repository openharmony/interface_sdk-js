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
 * The **SymbolGlyph** component is used to display system preset symbol glyphs. It supports setting style attributes
 * such as color, size, font weight, rendering strategy, and effect strategy, and is applicable to scenarios where
 * system icons need to be displayed in an application, such as navigation bar icons, button icons, and status indicator
 * icons. Compared with using image resources, **SymbolGlyph** offers advantages such as a smaller size, dynamic
 * coloring, and animation support.<!--RP1--><!--RP1End-->
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. Newly added APIs will be marked with a superscript to indicate
 * > their
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
   * @param { Resource } value - Resource name of the SymbolGlyph component, for example, $r('sys.symbol.ohos_wifi'). If
   *     it is not passed in, no icon is displayed.
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
 * Enumerates the rendering modes.
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
   * Monochrome mode (default value).
   *
   * One or more colors can be set, and the default is black.
   *
   * When multiple colors are set, only the first color takes effect.
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
   * Multicolor mode.
   *
   * Up to three colors can be set. When only one color is set, the first-layer color of the symbol icon is modified,
   * and the other colors remain the default colors.
   *
   * The color setting order matches the icon layer order. When the number of colors is greater than the number of icon
   * layers, the extra colors do not take effect.
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
   * The default is black, and one or more colors can be set. When multiple colors are set, only the first color takes
   * effect.
   *
   * The opacity is related to the layers. For a common symbol icon, the default opacity of the first layer is 100%,
   * that of the second layer is 50%, and that of the third layer is 20%. When the set color contains opacity, the set
   * opacity is superimposed with the default opacity of each layer.
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
  HIERARCHICAL = 2
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
 * Enumerates symbol replacement effect types.
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
 * Inherits from **SymbolEffect**.
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
   * @param { EffectScope } [scope] - Animation scope. For details about the specific enumeration values and
   *     descriptions, see EffectScope Enumeration Description.
   *     <br>Default value: EffectScope.LAYER
   * @param { EffectDirection } [direction] - Animation direction. For details about the specific enumeration values and
   *     descriptions, see EffectDirection Enumeration Description.
   *     <br>Default value: EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * Animation scope. For the specific enumeration values and descriptions, see EffectScope Enumeration Description.
   *
   * Default value: EffectScope.LAYER
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
   * Animation direction. For the specific enumeration values and descriptions, see EffectDirection Enumeration
   * Description.
   *
   * Default value: EffectDirection.DOWN
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
 * Inherits from **SymbolEffect**.
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
   * @param { EffectFillStyle } [fillStyle] - Animation mode. For the specific enumeration values and descriptions, see
   *     EffectFillStyle Enumeration Description.
   *     <br>Default value: EffectFillStyle.CUMULATIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(fillStyle?: EffectFillStyle);

  /**
   * Animation mode.
   *
   * Default value: EffectFillStyle.CUMULATIVE
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
 * Inherits from **SymbolEffect**.
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
   * @param { EffectScope } [scope] - Animation scope. For details about the specific enumeration values and
   *     descriptions, see EffectScope Enumeration Description.
   *     <br>Default value: EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * Animation scope. For details about the specific enumeration values and descriptions, see EffectScope Enumeration
   * Description.
   *
   * Default value: EffectScope.LAYER
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
 * Inherits from **SymbolEffect**.
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
   * A constructor used to create a **DisappearSymbolEffect** instance, which comes with a disappear animation effect.
   *
   * @param { EffectScope } [scope] - Animation scope. For specific enumeration values and descriptions, see EffectScope
   *     Enumeration Description.
   *     <br>Default value: EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * Animation scope. For details about the specific enumeration values and descriptions, see EffectScope Enumeration
   * Description.
   *
   * Default value: EffectScope.LAYER
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
 * Inherits from **SymbolEffect**.
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
   * A constructor used to create a **BounceSymbolEffect** instance, which comes with a bounce animation effect.
   *
   * @param { EffectScope } [scope] - Animation scope. For details about the specific enumeration values and
   *     descriptions, see EffectScope Enumeration Description.
   *     <br>Default value: EffectScope.LAYER
   * @param { EffectDirection } [direction] - Animation direction. For details about the specific enumeration values and
   *     descriptions, see EffectDirection Enumeration Description.
   *     <br>Default value: EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * Animation scope. For details about the specific enumeration values and descriptions, see EffectScope Enumeration
   * Description.
   *
   * Default value: EffectScope.LAYER
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
   * Animation direction. For details about the specific enumeration values and descriptions, see EffectDirection
   * Enumeration Description.
   *
   * Default value: EffectDirection.DOWN
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
 * Inherits from **SymbolEffect**.
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
   * A constructor used to create a **ReplaceSymbolEffect** instance, which comes with a replace animation effect.
   *
   * @param { EffectScope } [scope] - Animation scope. For details about the specific enumeration values and
   *     descriptions, see EffectScope Enumeration Description.
   *     <br>Default value: EffectScope.LAYER
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
   * @param { EffectScope } [scope] - Animation scope.
   *     <br>Default value: EffectScope.LAYER
   * @param { ReplaceEffectType } [replaceType] - Replacement animation type.
   *     <br>Default value: ReplaceEffectType.SEQUENTIAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(scope?: EffectScope, replaceType?: ReplaceEffectType);

  /**
   * Animation Scope. For details about the specific enumeration values and descriptions, see EffectScope Enumeration
   * Description.
   *
   * Default value: EffectScope.LAYER
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
   * Replacement Animation Type. For details about the specific enumeration values and descriptions, see
   * ReplaceEffectType Enumeration Description.
   *
   * Default value: ReplaceEffectType.SEQUENTIAL
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
 * Inherits from **SymbolEffect**.
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
 * The [universal attributes]{@link ./common} are supported. For text attributes, only the following attributes are
 * supported.
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
   * Sets the font size of the **SymbolGlyph** component. When the string type is used, numeric string values with
   * optional units, for example, **"10"** or **"10fp"**, are supported.
   *
   * The display size of the icon is controlled by **fontSize**. After **width** or **height** is set, other universal
   * attributes only take effect on the placeholder size of the component. If this API is not used, the default font
   * size is 16fp.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | string | Resource } value - Font size of the SymbolGlyph component.
   *     <br>Value range: [0, +∞)
   *     <br>Unit: [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>Percentage strings are not supported.
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
   * Sets the font color of the **SymbolGlyph** component.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { Array<ResourceColor> } value - Font color of the SymbolGlyph component.
   *     <br> When value is undefined, the default color of the icon is used, and the default color follows the theme.
   *     <br>The color setting effect varies with the rendering strategy. For details, see
   *     [SymbolRenderingStrategy]{@link SymbolRenderingStrategy}.
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
   * Sets the font color of the **SymbolGlyph** component. Compared with the
   * [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)} API, this API supports passing in a
   * parameter of the [ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics} type.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Array<ResourceColor | ColorMetrics> | undefined } value - Color of the **SymbolGlyph** component. An array
   *     of the `ResourceColor` or `ColorMetrics` type is supported.
   *     <br> When **value** is **undefined**, the default color of the icon is used, and the default color follows the
   *     theme.
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
   * Sets the font weight of the **SymbolGlyph** component. If this API is not used, the default font weight is
   * **FontWeight.Normal** (normal weight, corresponding to the value 400).
   *
   * The **sys.symbol.ohos_lungs** icon does not support font weight setting.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { number | FontWeight | string } value - Font weight of the SymbolGlyph component.
   *     <br>The value of the number type ranges from 100 to 900, with an interval of 100. The default value is 400. A
   *     larger value indicates a heavier font. The string type supports the string form of the number type value, for
   *     example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which correspond to the
   *     respective enum values in FontWeight. If the value is set too large, the font may be truncated in different
   *     fonts.
   *     <br>**Note:**
   *     <br>If a value outside the value range is passed, the default value is used. If a value that does not meet the
   *     interval requirement is passed, the default value is also used (only values that are integer multiples of 100
   *     are supported).
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
   * Sets the font weight of the symbol glyph in the **SymbolGlyph** component. It supports configuring, through
   * **FontWeightConfigs**, whether to enable variable font weight adjustment (after which fine-grained font weight
   * values that are not integer multiples of 100, such as 220 and 660, can be set) and whether to automatically update
   * the font weight based on the device font weight level (after which the component font weight is automatically
   * adjusted with the system font weight setting). If this API is not used, the default font weight is
   * **FontWeight.Normal** (normal weight, corresponding to the value 400).
   *
   * @param { number | FontWeight | ResourceStr } value - Font weight of the symbol glyph in the **SymbolGlyph**
   *     component.
   *     <br>For the number type, the value range is [100, 900], with an interval of 100. The default value is 400. A
   *     larger value indicates a heavier font. For the string type, only the string form of the number type value is
   *     supported, for example, "400", as well as "bold", "bolder", "lighter", "regular", and "medium", which
   *     correspond to the respective enum values in **FontWeight**. If the value is set too large, the font may be
   *     truncated in different fonts.
   *     <br>If the value passed in is out of the value range, the default value is used. If the value passed in does
   *     not meet the interval requirement, the passed-in value is used when **enableVariableFontWeight** of
   *     **fontWeightConfigs** is set to **true**; otherwise, the default value is used.
   * @param { FontWeightConfigs } [fontWeightConfigs] - Font weight configuration. Pass this parameter when variable
   *     font weight adjustment (setting fine-grained font weight values that are not integer multiples of 100, such as
   *     220 and 660) or automatic font weight update based on the device font weight level is required. The default
   *     value is inherited from [FontWeightConfigs]{@link FontWeightConfigs}.
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
   * Sets the effect strategy of the **SymbolGlyph** component. If this API is not used, the default effect strategy is
   * **SymbolEffectStrategy.NONE**.
   *
   * > **NOTE**
   * >
   * > - Since API version 12, this API is supported in [attributeModifier]{@link CommonMethod#attributeModifier}.
   * >
   * > - For animation attributes, only the **effectStrategy** attribute or a single **symbolEffect** attribute is
   * > supported. Mixing multiple animation attributes is not supported.
   * >
   * > - This API supports only the three preset animation types: NONE, SCALE, and HIERARCHICAL. After being set, the
   * > animation plays automatically. To use richer animation types (such as appear, disappear, bounce, replacement, and
   * > pulse animations) or to control the playback state and trigger timing of the animation, use the
   * > [symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} API. The
   * > two cannot be used at the same time. For details, see the description of the
   * > [symbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} API.
   *
   * @param { SymbolEffectStrategy } value - Animation strategy of the SymbolGlyph component.
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
   * Sets the rendering strategy of the **SymbolGlyph** component. If this API is not used, the default rendering
   * strategy is **SymbolRenderingStrategy.SINGLE**.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 12.
   *
   * @param { SymbolRenderingStrategy } value - Rendering strategy of the SymbolGlyph component.
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
   * Sets the effect strategy and playback state of the **SymbolGlyph** component. If this API is not used, the default
   * animation is a **SymbolEffect** object, and the default playback state is **false**.
   *
   * > **NOTE**
   * >
   * > For animation attributes, only the **effectStrategy** attribute or a single **symbolEffect** attribute is
   * > supported. Mixing multiple animation attributes is not supported.
   *
   * @param { SymbolEffect } [symbolEffect] - Animation strategy of the SymbolGlyph component.
   * @param { boolean } [isActive] - Playback state of the SymbolGlyph component animation.
   *     <br>The value **true** means to play, and **false** means not to play.
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
   * Sets the effect strategy and playback trigger of the **SymbolGlyph** component. If this API is not used, the
   * default animation is a **SymbolEffect** object, and the default trigger value is -1.
   *
   * @param { SymbolEffect } [symbolEffect] - Animation strategy of the SymbolGlyph component.
   * @param { number } [triggerValue] - Trigger for playing the animation of the SymbolGlyph component. The animation is
   *     triggered when the value changes.
   *     <br>Set this parameter to -1 if you do not want to trigger the animation on the first time.
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
   * Sets the minimum font scale factor of the SymbolGlyph component. Applicable to scenarios where you need to prevent
   * icons from becoming unrecognizable when the user's font scale setting is too small, for example, ensuring that
   * icons maintain a minimum readable size under any system font setting.
   *
   * @param { Optional<number|Resource> } scale - Minimum font scale factor of the SymbolGlyph component.
   *     <br>Value range: [0, 1]
   *     <br>When set to 0, the scale is minimized.
   *     <br>**Note:**
   *     <br>When the set value is less than 0, it is treated as 0. When the set value is greater than 1, it is treated
   *     as 1. Invalid values do not take effect by default. When not set, the minimum scale factor is not limited.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * Sets the maximum font scale factor of the SymbolGlyph component. Applicable to scenarios where you need to prevent
   * icons from exceeding the layout container or breaking interface consistency when the user's font scale setting is
   * too large, for example, limiting the maximum display size of icons in a small-sized container.
   *
   * @param { Optional<number|Resource> } scale - Maximum font scale factor of the SymbolGlyph component.
   *     <br>Value range: [1, +∞)
   *     <br>**Note:**
   *     <br>If the set value is less than 1, it is processed as 1. If not set, the maximum scale factor is not limited.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * Sets the shadow effect of the SymbolGlyph component. When this interface is not used to set the shadow, the default
   * shadow effect is {radius: 0, color: Color.Black, offsetX: 0, offsetY: 0}.
   *
   * @param { Optional<ShadowOptions> } shadow - Shadow effect of the SymbolGlyph component.
   *     <br>Unit: [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *     <br>**Note:**
   *     <br>Only the radius, color, offsetX, and offsetY attributes in ShadowOptions are supported. The fill and type
   *     attributes and the ColoringStrategy enum values in color are not supported.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  symbolShadow(shadow: Optional<ShadowOptions>): SymbolGlyphAttribute;

  /**
   * Applies a gradient or solid color shader effect to the **SymbolGlyph** component.
   *
   * Can be displayed as a radial gradient [RadialGradientStyle]{@link RadialGradientStyle}, a linear gradient
   * [LinearGradientStyle]{@link LinearGradientStyle}, or a solid color [ColorShaderStyle]{@link ColorShaderStyle}. The
   * priority of shaderStyle is higher than that of
   * [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)} and AI recognition. For solid
   * colors, [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)} is recommended.
   *
   * @param { Array<ShaderStyle | undefined> | ShaderStyle } shader - Radial gradient, linear gradient, or solid color.
   *     <br>When a ShaderStyle is passed in, it covers all layers. When an array is passed in, if a data item is
   *     ShaderStyle, it is applied to that layer; if an array item is undefined, that layer uses the default color of
   *     SymbolGlyph, and layers that are not set also use the default color. Based on the passed-in parameter, the
   *     radial gradient [RadialGradientStyle]{@link RadialGradientStyle}, linear gradient
   *     [LinearGradientStyle]{@link LinearGradientStyle}, or solid color [ColorShaderStyle]{@link ColorShaderStyle} is
   *     processed accordingly, and finally set on the SymbolGlyph component to display a gradient color effect.
   *     <br>**NOTE**
   *     <br>Use a percentage for the center point. If a non-percentage value (for example, 10PX) is used, the effect is
   *     equivalent to setting 1000%.
   *     <br>It is recommended to use a percentage for the radius.
   *     <br>The percentage is based on the icon size. The recommended value range is [0, 1).
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle): SymbolGlyphAttribute;
}

/**
 * The **SymbolGlyph** component is used to display system preset symbol glyphs. It supports setting style attributes
 * such as color, size, font weight, rendering strategy, and effect strategy, and is applicable to scenarios where
 * system icons need to be displayed in an application, such as navigation bar icons, button icons, and status indicator
 * icons. Compared with using image resources, **SymbolGlyph** offers advantages such as a smaller size, dynamic
 * coloring, and animation support.<!--RP1--><!--RP1End-->
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 11. Newly added APIs will be marked with a superscript to indicate
 * > their
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