'use static'
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

import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
import { LengthMetrics } from '../Graphics';

/**
 * UnionEffectContainer构造参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UnionEffectContainerOptions {
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
     * @since 23 static
     */
    spacing?: double;
}

/**
 * 融合效果枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum UnionMode {
  /**
   * 平滑的融合形变效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   */
  GRAVITY_UNION = 1
}

/**
 * UnionEffectContainer属性，支持通用属性，支持宽高设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UnionEffectContainerAttribute extends CommonMethod {
    /**
     * 设置点光源样式。
     *
     * @param { PointLightStyle } light - 点光源样式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default pointLight(light: PointLightStyle): this;
    /**
     * 设置融合效果模式。
     *
     * @param { UnionMode | undefined } mode - 融合效果模式。
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default unionMode(mode: UnionMode | undefined): this;
    /**
     * Sets the attribute modifier for UnionEffectContainer.
     *
     * @param { AttributeModifier<UnionEffectContainerAttribute> | AttributeModifier<CommonMethod> | undefined }
     *     modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<UnionEffectContainerAttribute>
        | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * Set UnionEffectContainer options.
     *
     * @param { UnionEffectContainerOptions } [options] - The options to create an UnionEffectContainer.
     * @returns { UnionEffectContainerAttribute } Returns instance of  UnionEffectContainerAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    default setUnionEffectContainerOptions(options?: UnionEffectContainerOptions): this;
}

/**
 * Provides a UnionEffectContainer Component that generates a component fusion effect for descendant components with
 * "useUnionEffect(true)" set inside it, when their distance is less than a certain threshold.
 *
 * @param { UnionEffectContainerOptions } [options] - The options to create a UnionEffectContainer.
 * @param { CustomBuilder } [content_] - Subcomponents of UnionEffectContainer
 * @returns { UnionEffectContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function UnionEffectContainer(
    options?:UnionEffectContainerOptions,
    content_?:CustomBuilder,
): UnionEffectContainerAttribute;

/**
 * Defines UnionEffectContainer
 *
 * @param { CustomBuilderT<UnionEffectContainerAttribute> } style_ - UnionEffectContainer attribute instance
 * @param { CustomBuilder } [content_] - container
 * @returns { UnionEffectContainerAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function UnionEffectContainer(
  style_: CustomBuilderT<UnionEffectContainerAttribute>,
  content_?: CustomBuilder,
): UnionEffectContainerAttribute;