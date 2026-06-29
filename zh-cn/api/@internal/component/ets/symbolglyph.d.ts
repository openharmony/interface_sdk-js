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
 * 显示图标小符号的组件。<!--RP1--><!--RP1End-->
 * 
 * > **说明：**
 * 
 * > - 本模块接口仅可在Stage模型下使用。
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
   * 定义SymbolGlyph组件构造函数。
   *
   * @param { Resource } value - SymbolGlyph组件的资源名，如 $r('sys.symbol.ohos_wifi')。
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
 * 渲染模式的枚举值。
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
   * 单色模式（默认值）。
   * 
   * 可以设置一个或者多个颜色，默认为黑色。
   * 
   * 当设置多个颜色时，仅生效第一个颜色。
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
   * 多色模式。
   * 
   * 最多可以设置三个颜色。当只设置一个颜色时，修改symbol图标的第一层颜色，其他颜色保持默认颜色。
   * 
   * 颜色设置顺序与图标分层顺序匹配，当颜色数量大于图标分层时，多余的颜色不生效。
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
   * 分层模式。
   * 
   * 默认为黑色，可以设置一个或者多个颜色。当设置多个颜色时，仅生效第一个颜色。
   * 
   * 不透明度与图层相关，symbol通用图标的默认第一层透明度为100%、第二层透明度为50%、第三层透明度为20%。当设置的颜色包含透明度时，设置的透明度与每个图层的默认透明度进行叠加。
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
 * 动效类型的枚举值。设置动效后，动效启动即生效，无需触发。
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
   * 无动效（默认值）。
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
   * 整体缩放动效。
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
   * 层级动效。
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
 * 符号动效方向的枚举值。
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
   * 图标缩小再复原。
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
   * 图标放大再复原。
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
 * EffectScope的枚举值。
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
   * 分层模式。
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
   * 整体模式。
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
 * EffectFillStyle的枚举值。
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
   * 累加模式。
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
   * 迭代模式。
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
 * 替换动效类型的枚举值。
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
   * 默认替换动效：当前symbol完全消失后，新symbol出现。
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
   * 快速替换动效：当前symbol淡出的同时，新symbol淡入，产生更流畅、更快速的过渡效果。
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
   * 禁用动效：用带有斜杠遮罩层的symbol替换当前symbol，通常用于表示禁用或非活动状态。
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
 * 定义SymbolEffect类。
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
 * 定义ScaleSymbolEffect类，继承自父类SymbolEffect。
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
   * ScaleSymbolEffect的构造函数，缩放动效。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @param { EffectDirection } [direction] - 动效方向。<br/>默认值：EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * 动效范围。
   * 
   * 默认值：EffectScope.LAYER
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
   * 动效方向。
   * 
   * 默认值：EffectDirection.DOWN
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
 * 定义HierarchicalSymbolEffect类，继承自父类SymbolEffect。
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
   * HierarchicalSymbolEffect的构造函数，层级动效。
   *
   * @param { EffectFillStyle } [fillStyle] - 动效模式。<br/>默认值：EffectFillStyle.CUMULATIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(fillStyle?: EffectFillStyle);

  /**
   * 动效模式。
   * 
   * 默认值：EffectFillStyle.CUMULATIVE
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
 * 定义AppearSymbolEffect类，继承自父类SymbolEffect。
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
   * AppearSymbolEffect的构造函数，出现动效。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * 动效范围。
   * 
   * 默认值：EffectScope.LAYER
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
 * 定义DisappearSymbolEffect类，继承自父类SymbolEffect。
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
   * AppearSymbolEffect的构造函数，出现动效。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * 动效范围。
   * 
   * 默认值：EffectScope.LAYER
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
 * 定义BounceSymbolEffect类，继承自父类SymbolEffect。
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
   * ScaleSymbolEffect的构造函数，缩放动效。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @param { EffectDirection } [direction] - 动效方向。<br/>默认值：EffectDirection.DOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * 动效范围。
   * 
   * 默认值：EffectScope.LAYER
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
   * 动效方向。
   * 
   * 默认值：EffectDirection.DOWN
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
 * 定义ReplaceSymbolEffect类，继承自父类SymbolEffect。
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
   * AppearSymbolEffect的构造函数，出现动效。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(scope?: EffectScope);

  /**
   * ReplaceSymbolEffect的构造函数，替换动效。支持指定具体的替换动效类型。
   *
   * @param { EffectScope } [scope] - 动效范围。<br/>默认值：EffectScope.LAYER
   * @param { ReplaceEffectType } [replaceType] - 替换动效类型。<br/>默认值：ReplaceEffectType.SEQUENTIAL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  constructor(scope?: EffectScope, replaceType?: ReplaceEffectType);

  /**
   * 动效范围。
   * 
   * 默认值：EffectScope.LAYER
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
   * 替换动效类型。
   * 
   * 默认值：ReplaceEffectType.SEQUENTIAL
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
 * 定义PulseSymbolEffect类，继承自父类SymbolEffect，脉冲动效。
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
 * 支持[通用属性]{@link common}，不支持文本通用属性，仅支持以下特有属性：
 * 
 * 支持[通用事件]{@link common}。
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
   * 设置SymbolGlyph组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   * 
   * 组件的图标显示大小由fontSize控制，设置width或height后，其他通用属性仅对组件的占位大小生效。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { number | string | Resource } value - SymbolGlyph组件大小。<br/>默认值：16fp<br/>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br/>不支持设置百分比字符串。
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
   * 设置SymbolGlyph组件颜色。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Array<ResourceColor> } value - SymbolGlyph组件颜色。<br/> 当value为undefined时，使用图标的默认颜色，默认颜色跟随主题。
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
   * 设置SymbolGlyph组件的颜色，相比[fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)}接口，本接口支持传入
   * [ColorMetrics]{@link Graphics:ColorMetrics}类型参数。
   * 
   * > **说明：**
   * >
   * > 该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
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
   * 设置SymbolGlyph组件的渐变色效果。
   * 
   * 可以显示为径向渐变[RadialGradientStyle]{@link RadialGradientStyle}或线性渐变[LinearGradientStyle]{@link LinearGradientStyle}或纯色
   * [ColorShaderStyle]{@link ColorShaderStyle}的效果，shaderStyle的优先级高于[fontColor]{@link SymbolSpanAttribute#fontColor}和AI识
   * 别，纯色建议使用[fontColor]{@link SymbolSpanAttribute#fontColor}。
   *
   * @param { Array<ShaderStyle | undefined> | ShaderStyle } shader - 径向渐变或线性渐变或纯色。<br/>传入ShaderStyle时，覆盖所有层；传入数组时，数据项是
   *     ShaderStyle，则应用该层；数组项是undefined，则该层使用SymbolGlyph默认颜色，未设置的层也应用默认颜色。根据传入的参数区分处理径向渐变
   *     [RadialGradientStyle]{@link RadialGradientStyle}或线性渐变[LinearGradientStyle]{@link LinearGradientStyle}或纯色
   *     [ColorShaderStyle]{@link ColorShaderStyle}，最终设置到SymbolGlyph组件上显示为渐变色效果。<br>**说明：** <br/>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br>中心点请按百分比使用。如果使用的是非百分比（例如10PX），效果等同于设置
   *     1000%。<br>半径建议使用百分比。<br>百分比是基于图标大小的百分比，建议取值范围[0, 1)。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle): SymbolGlyphAttribute;

  /**
   * 设置SymbolGlyph组件粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“
   * bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。
   * 
   * sys.symbol.ohos_lungs图标不支持设置fontWeight。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { number | FontWeight | string } value - SymbolGlyph组件粗细。<br/>默认值：FontWeight.Normal
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
   * 设置SymbolGlyph组件图标小符号的粗细，支持通过FontWeightConfigs配置是否开启可变字重调节、是否开启随设备的字体粗细级别自动更新字重。
   *
   * @param { number | FontWeight | ResourceStr } value - SymbolGlyph组件图标小符号的粗细。<br/>number类型取值[100, 900]，取值间隔为100，默认为40
   *     0，取值越大，字体越粗。<br/>ResourceStr类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular”、“medium”分别对应
   *     FontWeight中相应的枚举值。<br/>默认值：FontWeight.Normal
   * @param { FontWeightConfigs } [fontWeightConfigs] - 字体粗细配置。<br/>默认值继承
   *     [FontWeightConfigs](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#fontweightconfigs24对象说明)。
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
   * 设置SymbolGlyph组件动效策略。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolEffectStrategy } value - SymbolGlyph组件动效策略。<br/>默认值：SymbolEffectStrategy.NONE
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
   * 设置SymbolGlyph组件渲染策略。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { SymbolRenderingStrategy } value - SymbolGlyph组件渲染策略。<br/>默认值：SymbolRenderingStrategy.SINGLE
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
   * 设置SymbolGlyph组件动效策略及播放状态。
   *
   * @param { SymbolEffect } [symbolEffect] - SymbolGlyph组件动效策略。<br/>默认值：
   *     [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}
   * @param { boolean } [isActive] - SymbolGlyph组件动效播放状态。<br/>true表示播放，false表示不播放。<br/>默认值：false
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
   * 设置SymbolGlyph组件动效策略及播放触发器。
   *
   * @param { SymbolEffect } [symbolEffect] - SymbolGlyph组件动效策略。<br/>默认值：
   *     [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)}
   * @param { number } [triggerValue] - SymbolGlyph组件动效播放触发器，在数值变更时触发动效。<br/>如果首次不希望触发动效，设置-1。
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
   * 设置SymbolGlyph组件最小的字体缩放倍数。
   *
   * @param { Optional<number|Resource> } scale - SymbolGlyph组件最小的字体缩放倍数。<br/>取值范围：[0, 1] <br/>设置为0，缩放最小。<br/>**说明：** <
   *     br/>设置的值小于0时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  minFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * 设置SymbolGlyph组件最大的字体缩放倍数。
   *
   * @param { Optional<number|Resource> } scale - SymbolGlyph组件最大的字体缩放倍数。<br/>取值范围：
   *     [1, +∞)<br/>**说明：** <br/>设置的值小于1时，按值为1处理，异常值默认不生效。
   * @returns { SymbolGlyphAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 18 dynamic
   */
  maxFontScale(scale: Optional<number|Resource>): SymbolGlyphAttribute;

  /**
   * 设置SymbolGlyph组件的阴影效果。
   *
   * @param { Optional<ShadowOptions> } shadow - SymbolGlyph组件的阴影效果。<br>单位：
   *     [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)<br>默认值：{<br>radius：0,<br>color：
   *     Color.Black,<br>offsetX：0,<br>offsetY：0<br>} <br>不支持fill、type属性和color中的ColoringStrategy枚举值。
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
 * 显示图标小符号的组件。<!--RP1--><!--RP1End-->
 * 
 * > **说明：**
 * 
 * > - 本模块接口仅可在Stage模型下使用。
 * 
 * ###### 子组件
 * 
 * 不支持子组件。
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
 * 定义SymbolGlyph组件实例。
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