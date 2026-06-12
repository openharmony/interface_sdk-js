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
 * 形状融合容器，会收集该容器内所有使用[useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined)}的后代组件形状，将收集的形状融合生效在容
 * 器上，作为该容器的绘制形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface UnionEffectContainerInterface {
    /**
     * Specify the construction options for the UnionEffectContainer to create the UnionEffectContainer component.
     *
     * @param { UnionEffectContainerOptions } [options] - UnionEffectContainer constructor options.
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
 * 融合效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum UnionMode {
  /**
   * 平滑的融合形变效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SMOOTH_UNION = 0,
  /**
   * 引力作用下的融合形变效果。
   * 
   * **说明：**
   * 
   * 设置该类型时，需要结合
   * [useUnionEffect]{@link CommonMethod#useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions)}并设置
   * [GravityCenterOptions]{@link GravityCenterOptions}的gravityCenter为true才能生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GRAVITY_UNION = 1
}

/**
 * 支持通用事件。
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
   * @param { PointLightStyle } light - 点光源样式。
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
   * @param { UnionMode } mode - 融合效果模式。
   * @returns { UnionEffectContainerAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  unionMode(mode: UnionMode): UnionEffectContainerAttribute;
}
  
/**
 * Defines UnionEffectContainer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare const UnionEffectContainer: UnionEffectContainerInterface;
  
/**
 * Defines UnionEffectContainer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare const UnionEffectContainerInstance: UnionEffectContainerAttribute;
