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
 */
import { Resource } from '../../global/resource';
import { ResourceColor, ResourceStr, ColorMetrics } from "./units";
import { FontWeight } from "./enums";

import { CommonMethod, AttributeModifier, ShadowOptions } from "./common";
import { ComponentBuilder } from "./../stateManagement/runtime";

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod } from "./common";
import { CustomBuilder, CustomBuilderT } from './builder';
import { ShaderStyle, FontWeightConfigs } from "./textCommon";
/**
 * 渲染模式的枚举值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SymbolRenderingStrategy {
  /**
   * 单色渲染策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SINGLE = 0,
  /**
   * 多色渲染策略，最多可设置三种颜色，仅设置一种颜色时更新第一层颜色，其余保持默认值。仅支持颜色值，透明度设置不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MULTIPLE_COLOR = 1,
  /**
   * 分层渲染策略，默认颜色为黑色，可设置一种或多种颜色，但仅应用第一种颜色。预定义透明度：第一层100%，第二层50%，第三层20%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MULTIPLE_OPACITY = 2
}
/**
 * 动效类型的枚举值。设置动效后，动效启动即生效，无需触发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SymbolEffectStrategy {
  /**
   * 无动效策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,
  /**
   * 整体缩放动效策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCALE = 1,
  /**
   * 层级动效策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HIERARCHICAL = 2
}
/**
 * 动效方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectDirection {
  /**
   * 缩小动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWN = 0,
  /**
   * 放大动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UP = 1
}
/**
 * 动效范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectScope {
  /**
   * 分层动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAYER = 0,
  /**
   * 整体动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WHOLE = 1
}
/**
 * 动效模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EffectFillStyle {
  /**
   * 累加填充样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CUMULATIVE = 0,
  /**
   * 迭代填充样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ITERATIVE = 1
}
/**
 * Symbol的替换效果类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ReplaceEffectType {
  /**
   * 顺序替换动效，当前符号完全消失后新符号淡入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SEQUENTIAL = 0,
  /**
   * 交叉淡入淡出动效，当前符号淡出的同时新符号淡入。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CROSS_FADE = 1,
  /**
   * 斜线覆盖替换动效，用带有斜线的符号替换当前符号，通常用于表示禁用或非活跃状态。如果不存在对应的斜线符号变体，则不播放动画直接替换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SLASH_OVERLAY = 2
}
/**
 * SymbolEffect基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SymbolEffect {}
/**
 * ScaleSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ScaleSymbolEffect extends SymbolEffect {
  /**
   * ScaleSymbolEffect的构造函数，缩放动效。
   *
   * @param { EffectScope } [scope] -  动效范围。<br/>默认值：EffectScope.LAYER
   * @param { EffectDirection } [direction] - 动效方向。<br/>默认值：EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);
  /**
   * 动效范围。
   *
   * 默认值：EffectScope.LAYER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scope?: EffectScope;
  /**
   * 动效方向。
   *
   * 默认值：EffectDirection.DOWN
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: EffectDirection;
}
/**
 * HierarchicalSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class HierarchicalSymbolEffect extends SymbolEffect {
  /**
   * HierarchicalSymbolEffect的构造函数，层级动效。
   *
   * @param { EffectFillStyle } [fillStyle] -  动效模式。<br/>默认值：EffectFillStyle.CUMULATIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(fillStyle?: EffectFillStyle);
  /**
   * 动效模式。
   *
   * 默认值：EffectFillStyle.CUMULATIVE
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillStyle?: EffectFillStyle;
}
/**
 * AppearSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class AppearSymbolEffect extends SymbolEffect {
  /**
   * AppearSymbolEffect的构造函数，出现动效。
   *
   * @param { EffectScope } [scope] -  动效范围。<br/>默认值：EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(scope?: EffectScope);
  /**
   * 动效范围。
   *
   * 默认值：EffectScope.LAYER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scope?: EffectScope;
}
/**
 * DisappearSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DisappearSymbolEffect extends SymbolEffect {
  /**
   * AppearSymbolEffect的构造函数，出现动效。
   *
   * @param { EffectScope } [scope] -  动效范围。<br/>默认值：EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(scope?: EffectScope);
  /**
   * 动效范围。
   *
   * 默认值：EffectScope.LAYER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scope?: EffectScope;
}
/**
 * BounceSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BounceSymbolEffect extends SymbolEffect {
  /**
   * ScaleSymbolEffect的构造函数，缩放动效。
   *
   * @param { EffectScope } [scope] -  动效范围。<br/>默认值：EffectScope.LAYER
   * @param { EffectDirection } [direction] - 动效方向。<br/>默认值：EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);
  /**
   * 动效范围。
   *
   * 默认值：EffectScope.LAYER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scope?: EffectScope;
  /**
   * 动效方向。
   *
   * 默认值：EffectDirection.DOWN
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  direction?: EffectDirection;
}
/**
 * ReplaceSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ReplaceSymbolEffect extends SymbolEffect {
  /**
   * ReplaceSymbolEffect的构造函数，替换动效。支持指定具体的替换动效类型。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @param { ReplaceEffectType } [replaceType] - 替换动效类型。<br/>默认值：ReplaceEffectType.SEQUENTIAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(scope?: EffectScope, replaceType?: ReplaceEffectType);
  /**
   * 动效范围。
   *
   * 默认值：EffectScope.LAYER
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scope?: EffectScope;
  /**
   * 替换动效类型。
   *
   * 默认值：ReplaceEffectType.SEQUENTIAL
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  replaceType?: ReplaceEffectType;
}

/**
 * PulseSymbolEffect继承自父类SymbolEffect。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PulseSymbolEffect extends SymbolEffect {}

/**
 * 支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)，不支持文本通用属性，仅支持以下特有属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface SymbolGlyphAttribute extends CommonMethod {
  /**
   * 设置SymbolGlyph组件字体大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 组件的图标显示大小由fontSize控制，设置width或height后，其他通用属性仅对组件的占位大小生效。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { double | string | Resource | undefined } value
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置SymbolGlyph组件字体颜色。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { Array<ResourceColor> | undefined } value - SymbolGlyph组件字体颜色。<br/> 当value为undefined时，使用图标的默认颜色，默认颜色跟随主题。
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: Array<ResourceColor> | undefined): this;

  /**
   * 设置SymbolGlyph组件的字体颜色，相比[fontColor]{@link fontColor}接口，本接口支持传入
   * [ColorMetrics](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colormetrics12)类型参数。
   *
   * @param { Array<ResourceColor> | Array<ColorMetrics> | Array<ResourceColor | ColorMetrics> | undefined } value
      *     SymbolGlyph组件字体颜色。支持传入`ResourceColor`或`ColorMetrics`类型的数组。<br/> 当value为undefined时，使用图标的默认颜色，默认颜色跟随主题。
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default symbolColor(value: Array<ResourceColor> | Array<ColorMetrics> | Array<ResourceColor | ColorMetrics> | undefined): this;

  /**
   * 设置SymbolGlyph组件的渐变色效果。
   *
   * 可以显示为径向渐变[RadialGradientStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#radialgradientstyle20)或线
   * 性渐变[LinearGradientStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#lineargradientstyle20)或纯色
   * [ColorShaderStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#colorshaderstyle20)的效果，shaderStyle的优
   * 先级高于[fontColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolSpan.md#fontcolor)和AI识别，纯色建议使用
   * [fontColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-symbolSpan.md#fontcolor)。
   *
   * @param { Array<ShaderStyle | undefined> | ShaderStyle | undefined } shader - 径向渐变或线性渐变或纯色。<br/>传入ShaderStyle时，覆盖所
   *     有层；传入数组时，数据项是ShaderStyle，则应用该层；数组项是undefined，则该层使用SymbolGlyph默认颜色，未设置的层也应用默认颜色。根据传入的参数区分处理径向渐变
   *     [RadialGradientStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#radialgradientstyle20)或线性渐变
   *     [LinearGradientStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#lineargradientstyle20)或纯色
   *     [ColorShaderStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#colorshaderstyle20)，最终设置到
   *     SymbolGlyph组件上显示为渐变色效果。<br/>取值为undefined时，按无渐变色效果处理。
   *     <br>**说明：** <br/>单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *     <br>中心点请按百分比使用。如果使用的是非百分比（例如10PX），效果等同于设置1000%。
   *     <br>半径建议使用百分比。
   *     <br>百分比是基于图标大小的百分比，建议取值范围[0, 1)。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle | undefined): this;
  /**
   * 设置SymbolGlyph组件字体粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"
   * bolder"、"lighter"、"regular" 、"medium"分别对应FontWeight中相应的枚举值。
   *
   * sys.symbol.ohos_lungs图标不支持设置fontWeight。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { int | FontWeight | string | undefined } value - SymbolGlyph组件字体粗细。<br/>默认值：FontWeight.Normal<br/>取值为
   *     undefined时，按默认值处理。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | string | undefined): this;
  /**
   * 设置SymbolGlyph组件字体粗细及配置。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - SymbolGlyph组件字体粗细。<br/>默认值：FontWeight.Normal<br/>取值
   *     为undefined时，按默认值处理。
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined, fontWeightConfigs?: FontWeightConfigs): this;
  /**
   * 设置SymbolGlyph组件动效策略。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { SymbolEffectStrategy | undefined } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default effectStrategy(value: SymbolEffectStrategy | undefined): this;
  /**
   * 设置SymbolGlyph组件渲染策略。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在
   * > [attributeModifier](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier)
   * > 中调用。
   *
   * @param { SymbolRenderingStrategy | undefined } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default renderingStrategy(value: SymbolRenderingStrategy | undefined): this;
  /**
   * 设置SymbolGlyph组件动效策略。
   *
   * @param { SymbolEffect | undefined } symbolEffect - SymbolGlyph组件动效策略。<br/>默认值：
   *     [SymbolEffect]{@link default symbolEffect(symbolEffect: SymbolEffect | undefined)}<br/>取值为undefined时，按默认值处理。
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default symbolEffect(symbolEffect: SymbolEffect | undefined): this;
  /**
   * 设置SymbolGlyph组件动效策略及播放状态。
   *
   * @param { SymbolEffect | undefined } symbolEffect - SymbolGlyph组件动效策略。<br/>默认值：
   *     [SymbolEffect]{@link default symbolEffect(symbolEffect: SymbolEffect | undefined)}<br/>取值为undefined时，按默认值处理。
   * @param { boolean | undefined } isActive - SymbolGlyph组件动效播放状态。
   *     [SymbolEffect]{@link default symbolEffect(symbolEffect: SymbolEffect | undefined)}<br/>true表示播放，false表示不播放。<
   *     br/>默认值：false<br/>取值为undefined时，按默认值处理。
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default symbolEffect(symbolEffect: SymbolEffect | undefined, isActive: boolean | undefined): this;
  /**
   * 设置SymbolGlyph组件动效策略及播放触发器。
   *
   * @param { SymbolEffect | undefined } symbolEffect - SymbolGlyph组件动效策略。<br/>默认值：
   *     [SymbolEffect]{@link default symbolEffect(symbolEffect: SymbolEffect | undefined)}<br/>取值为undefined时，按默认值处理。
   * @param { int | undefined } triggerValue - SymbolGlyph组件动效播放触发器，在数值变更时触发动效。<br/>如果首次不希望触发动效，设置-1。<br/>取值为undefined
   *     时，按symbolEffect中的默认值处理。
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default symbolEffect(symbolEffect: SymbolEffect | undefined, triggerValue: int | undefined): this;
  /**
   * 设置SymbolGlyph组件最小的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale - SymbolGlyph组件最小的字体缩放倍数。<br/>取值范围：[0, 1] <br/>设置为0，缩放最小。<br/>
   *     **说明：** <br/>设置的值小于0时，按值为0处理。设置的值大于1时，按值为1处理。异常值默认不生效。<br/>取值为undefined时，不生效。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置SymbolGlyph组件最大的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale - SymbolGlyph组件最大的字体缩放倍数。<br/>取值范围：
   *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理，异常值默认不生效。<br/>取值为undefined时，不生效。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置SymbolGlyph组件的阴影效果。
   *
   * @param { ShadowOptions | undefined } shadow - SymbolGlyph组件的阴影效果。
   *     <br>单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) <br/>值为undefined时，与传以下值的效果一致：{
   *     <br>radius：0,
   *     <br>color：Color.Black,
   *     <br>offsetX：0,
   *     <br>offsetY：0
   *     <br>}
   *     <br>不支持fill、type属性和color中的ColoringStrategy枚举值。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default symbolShadow(shadow: ShadowOptions | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<SymbolGlyphAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<SymbolGlyphAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
   * 设置SymbolGlyph组件选项。
   *
   * @param { Resource } [value] - SymbolGlyph组件构造选项。
   * @returns { SymbolGlyphAttribute } Returns the instance of the SymbolGlyphAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setSymbolGlyphOptions(value?: Resource): this;
}

/**
 * 定义SymbolGlyph组件。
 *
 * @param { Resource } [value]
 * @returns { SymbolGlyphAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function SymbolGlyph(
    value?: Resource
): SymbolGlyphAttribute;

/**
 * 定义SymbolGlyph组件。
 *
 * @param { CustomBuilderT<SymbolGlyphAttribute> } style - SymbolGlyph选项实例。
 * @returns { SymbolGlyphAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function SymbolGlyph(
    style: CustomBuilderT<SymbolGlyphAttribute>,
): SymbolGlyphAttribute;