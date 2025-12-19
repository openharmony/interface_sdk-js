/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { Resource } from '../../global/resource';
import { ResourceColor } from "./units";
import { FontWeight } from "./enums";
import { CommonMethod, AttributeModifier } from "./common";
import { ComponentBuilder, CustomBuilder } from './builder';
/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SymbolRenderingStrategy {
    /**
     * The single rendering strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SINGLE = 0,
    /**
     * The multiple color rendering strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    MULTIPLE_COLOR = 1,
    /**
     * The multiple opacity rendering strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    MULTIPLE_OPACITY = 2
}
/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum SymbolEffectStrategy {
    /**
     * There is no effect strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    NONE = 0,
    /**
     * The scale effect strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    SCALE = 1,
    /**
     * The hierarchical effect strategy.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    HIERARCHICAL = 2
}
/**
 * The direction type of symbol effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EffectDirection {
    /**
     * The scale down animation of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    DOWN = 0,
    /**
     * The scale up animation of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    UP = 1
}
/**
 * Declare scope type of the symbol effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EffectScope {
    /**
     * The layered animation of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    LAYER = 0,
    /**
     * The whole animation of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    WHOLE = 1
}
/**
 * Declare fill style of symbol
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum EffectFillStyle {
    /**
     * The cumulative fill style of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    CUMULATIVE = 0,
    /**
     * The iterative fill style of symbol
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    ITERATIVE = 1
}
/**
 * Defines SymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class SymbolEffect {
}
/**
 * Defines ScaleSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ScaleSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectScope } [scope] -  The scope type of symbol effect.
     * @param { EffectDirection } [direction] - The direction of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(scope?: EffectScope, direction?: EffectDirection);
    /**
     * The scope type of symbol effect
     *
     * @type { ?EffectScope }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope?: EffectScope;
    /**
     * The direction of symbol effect
     *
     * @type { ?EffectDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: EffectDirection;
}
/**
 * Defines HierarchicalSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class HierarchicalSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectFillStyle } [fillStyle] -  The fill style of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(fillStyle?: EffectFillStyle);
    /**
     * The fill style of symbol effect
     *
     * @type { ?EffectFillStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    fillStyle?: EffectFillStyle;
}
/**
 * Defines AppearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class AppearSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectScope } [scope] -  The scope type of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(scope?: EffectScope);
    /**
     * The scope type of symbol effect
     *
     * @type { ?EffectScope }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope?: EffectScope;
}
/**
 * Defines DisappearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DisappearSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectScope } [scope] -  The scope type of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(scope?: EffectScope);
    /**
     * The scope type of symbol effect
     *
     * @type { ?EffectScope }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope?: EffectScope;
}
/**
 * Defines BounceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class BounceSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectScope } [scope] -  The scope type of symbol effect.
     * @param { EffectDirection } [direction] - The direction of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(scope?: EffectScope, direction?: EffectDirection);
    /**
     * The scope type of symbol effect
     *
     * @type { ?EffectScope }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope?: EffectScope;
    /**
     * The direction of symbol effect
     *
     * @type { ?EffectDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    direction?: EffectDirection;
}
/**
 * Defines ReplaceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ReplaceSymbolEffect extends SymbolEffect {
    /**
     * constructor.
     *
     * @param { EffectScope } [scope] -  The scope type of symbol effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    constructor(scope?: EffectScope);
    /**
     * The scope type of symbol effect
     *
     * @type { ?EffectScope }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    scope?: EffectScope;
}
/**
 * Defines PulseSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class PulseSymbolEffect extends SymbolEffect {
}
/**
 * Provides attribute for SymbolGlyph.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
export declare interface SymbolGlyphAttribute extends CommonMethod {
    /**
     * Called when the SymbolGlyph size is set.
     *
     * @param { double | string | Resource } value
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontSize(value: double | string | Resource | undefined): this;
    /**
     * Called when the SymbolGlyph color is set.
     *
     * @param { Array<ResourceColor> } value
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontColor(value: Array<ResourceColor> | undefined): this;
    /**
     * Called when the font symbolGlyph weight is set.
     *
     * @param { int | FontWeight | string } value
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default fontWeight(value: int | FontWeight | string | undefined): this;
    /**
     * Called when the symbolGlyph effect is set.
     *
     * @param { SymbolEffectStrategy } value
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default effectStrategy(value: SymbolEffectStrategy | undefined): this;
    /**
     * Called when the symbolGlyph rendering strategy is set.
     *
     * @param { SymbolRenderingStrategy } value
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
    /**
     *  Define effect options for SymbolGlyph.
     *
     * @param { SymbolEffect | undefined } symbolEffect - The symbol effect type
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default symbolEffect(symbolEffect: SymbolEffect | undefined): this;
    /**
     *  Define effect options for SymbolGlyph.
     *
     * @param { SymbolEffect | undefined } symbolEffect - The symbol effect type
     * @param { boolean | undefined } isActive - The active state of the effect
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default symbolEffect(symbolEffect: SymbolEffect | undefined, isActive: boolean | undefined): this;
    /**
     *  Define effect options for SymbolGlyph.
     *
     * @param { SymbolEffect | undefined } symbolEffect - The symbol effect type
     * @param { int | undefined } triggerValue - The trigger of the effect
     * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default symbolEffect(symbolEffect: SymbolEffect | undefined, triggerValue: int | undefined): this;
    /**
     * Called when the minimum font scale of the font is set.
     *
     * @param { Optional<double|Resource> } scale
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default minFontScale(scale: double | Resource | undefined): this;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { Optional<double|Resource> } scale
     * @returns { SymbolGlyphAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default maxFontScale(scale: double | Resource | undefined): this;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<SymbolGlyphAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
     * @returns { SymbolGlyphAttribute } the attribute of the SymbolGlyphAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<SymbolGlyphAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines SymbolGlyph Component.
 *
 * @param { Resource } [value]
 * @param { CustomBuilder } [content_]
 * @returns { SymbolGlyphAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SymbolGlyph(
    value?: Resource, 
    content_?: CustomBuilder,
): SymbolGlyphAttribute
