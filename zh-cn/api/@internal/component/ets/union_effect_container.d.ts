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

/**
 * 形状融合容器，配合后代组件的[useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined)}属性使用。该容器会收集所有设置了
 * [useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined)}的后代组件形状，将收集的形状融合后作为该容器的绘制形状。若后代组件未设置
 * [useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined)}属性，则容器不会产生融合效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface UnionEffectContainerInterface {
    /**
     * 创建形状融合容器组件。
     *
     * @param { UnionEffectContainerOptions } [options] - UnionEffectContainer构造参数，用于决定收集到的后代组件形状的融合形变程度。
     *     <br>默认值：{spacing:0}
     * @returns { UnionEffectContainerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    (options?: UnionEffectContainerOptions): UnionEffectContainerAttribute;
}

/**
 * 设置UnionEffectContainer构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface UnionEffectContainerOptions {
    /**
     * spacing表示后代组件发生融合形变的程度。它不代表实际的间距，只有设置了使用祖先组件UnionEffectContainer融合效果的后代组件且后代组件靠近到一定程度时才会发生融合。
     * 
     * **说明：**
     * 
     * 设置的spacing大于0，且设置了祖先组件UnionEffectContainer融合效果的后代组件彼此靠近到一定程度，这些后代组件会开始相互融合形变，且随着距离的变近融合形变的效果越强。该值越大，后代组件彼此靠近时，它们的
     * 融合会越早开始，越容易发生融合形变。
     * 
     * 默认值：0，此时子组件形状会融合在一起，但不会有形变效果。
     * 
     * 取值范围：[0, +∞)。小于0时按0处理。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    spacing?: number;
}

/**
 * 设置融合效果模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum UnionMode {
  /**
   * 平滑的融合形变效果，适用于需要平滑过渡和自然连接的融合场景。
   * 
   * **说明：**
   * 
   * 设置该类型时，需后代组件设置
   * [useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions)}属性才能产生融合效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SMOOTH_UNION = 0,
  /**
   * 引力作用下的融合形变效果，适用于需要模拟引力吸引效果的融合场景，如元素间存在吸引和靠近趋势的视觉表现。
   * 
   * **说明：**
   * 
   * 设置该类型时，需配合
   * [useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions)}并设置
   * [GravityCenterOptions]{@link GravityCenterOptions}的gravityCenter为true才能生效；不满足上述条件时，GRAVITY_UNION效果不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GRAVITY_UNION = 1
}

/**
 * 支持通用属性，支持宽高设置。
 * 
 * **说明：**
 * 
 * 融合过程中容器会变成粘连的非线性形变效果，边框会变成融合后的粘连效果，故与边框相关的能力在融合形变过程中会发生变化，未支持融合形变效果的
 * 边框属性可能无法正常生效。目前与边框相关且支持融合形变效果的属性：
 * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}、
 * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、
 * [pointLight]{@link UnionEffectContainerAttribute#pointLight}。上述效果会绘制在融合后的形状上，属于UnionEffectContainer的绘制部分。
 * 
 * 在该组件上设置上述与边框相关支持融合形变效果的属性，绘制体现在该组件上，如果后代组件设置了同一个属性，实际上两个属性的设置相互独立，会绘
 * 制两次，一次发生在UnionEffectContainer组件的绘制中，一次发生在后代组件自身的属性绘制中。在无特殊设计需求时，不需要在使用祖先组件
 * UnionEffectContainer融合效果的后代组件中设置同一个支持融合形变效果的属性，避免融合效果因双重绘制而出现视觉异常。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare class UnionEffectContainerAttribute extends CommonMethod<UnionEffectContainerAttribute> {
  /**
   * 设置点光源样式。
   *
   * @param { PointLightStyle } light - Point light style.
   * @returns { UnionEffectContainerAttribute } The attribute of the UnionEffectContainer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  pointLight(light: PointLightStyle): UnionEffectContainerAttribute;

  /**
   * 设置融合效果模式。
   *
   * @param { UnionMode } mode - Union mode.
   * @returns { UnionEffectContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unionMode(mode: UnionMode): UnionEffectContainerAttribute;
}
  
/**
 * 定义UnionEffectContainer组件.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare const UnionEffectContainer: UnionEffectContainerInterface;
  
/**
 * 定义UnionEffectContainer组件实例.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare const UnionEffectContainerInstance: UnionEffectContainerAttribute;
