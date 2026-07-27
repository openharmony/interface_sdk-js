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

import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle } from './common';
import { LengthMetrics } from '../Graphics';

/**
 * Defines the constructor options for UnionEffectContainer.
 *
 * @interface UnionEffectContainerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UnionEffectContainerOptions {
    /**
     * Spacing indicates the ease with which fusion occurs; it does not represent actual distance.
     * The larger the spacing, the easier it is for subcomponents to fuse, and the greater the degree of fusion.
     * Value constraint: Must be greater than or equal to 0.
     *
     * @type { ?double }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    spacing?: double;
}

/**
 * Mode Enum for Union Effects
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum UnionMode {
  /**
   * The effect of fusion deformation under smooth union.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SMOOTH_UNION = 0,
  /**
   * The effect of fusion deformation under gravity.
   * Need to use the useUnionEffect interface to specify the center of gravity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  GRAVITY_UNION = 1
}

/**
 * Defines the UnionEffectContainer attribute functions.
 *
 * @extends CommonMethod
 * @interface UnionEffectContainerAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare interface UnionEffectContainerAttribute extends CommonMethod {
    /**
     * Sets up point light source effects.
     *
     * @param { PointLightStyle } light - The point light style.
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default pointLight(light: PointLightStyle): this;
    /**
     * Sets union Mode of the UnionEffectContainer.
     *
     * @param { UnionMode | undefined } mode - The Union mode.
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
     * @param { AttributeModifier<UnionEffectContainerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
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
     * @unpublished
     * @stagemodelonly
     * @since 26.1.0 staticonly
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
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 */
@Builder
export declare function UnionEffectContainer(
  style_: CustomBuilderT<UnionEffectContainerAttribute>,
  content_?: CustomBuilder,
): UnionEffectContainerAttribute;
