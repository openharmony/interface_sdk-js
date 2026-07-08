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
 * Provides a UnionEffectContainer Component that generates a component fusion effect for descendant components with
 * "useUnionEffect(true)" set inside it, when their distance is less than a certain threshold.
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
 * Sets the construction options of **UnionEffectContainer**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare interface UnionEffectContainerOptions {
    /**
     * Degree of union deformation of the descendant component. This parameter does not represent the actual spacing. 
     * Union occurs only when the descendant components use the union effect of the ancestor component 
     * **UnionEffectContainer** and they come close to a certain extent.
     * **NOTE**
     * If **spacing** is greater than 0 and the descendant components that use the union effect of the ancestor 
     * component **UnionEffectContainer** come close to a certain extent, the descendant components start to deform due 
     * to union. The closer the descendant components are, the stronger the deformation effect. A larger value indicates
     * that the union of descendant components starts earlier and is more likely to occur when the descendant components
     * come close to each other.
     * The Value must be greater than or equal to 0. Default value: **0**.
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
 * Enumerates the union modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum UnionMode {
  /**
   * Smooth union mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  SMOOTH_UNION = 0,
  /**
   * Gravity union mode.
   * 
   * **NOTE**
   * 
   * This mode takes effect only when 
   * [useUnionEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-use-union-effect-sys.md#useunioneffect-1)
   * is used and **gravityCenter** of 
   * [GravityCenterOptions](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-use-union-effect-sys.md#gravitycenteroptions)
   * is set to **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GRAVITY_UNION = 1
}

/**
 * Universal attributes are supported. The width and height can be set.
 * 
 * > **NOTE**
 * >
 * > - During the union, the container exhibits a sticky non-linear deformation effect, and its border will show a sticky
 * > effect after union. Therefore, border-related capabilities will be affected. Currently, the following border-
 * > related attributes support the union deformation effect: 
 * > [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border), 
 * > [outline](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-outline.md#outline), 
 * > [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}, 
 * > [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, and 
 * > [pointLight]{@link UnionEffectContainerAttribute#pointLight}. The above effects are drawn on the shape after union,
 * > which is the drawing part of **UnionEffectContainer**.
 * >
 * > - If the attributes related to the border and supporting the union deformation effect are set on the component, the
 * > drawing is displayed on the component. If the same attribute is set on the descendant component, the two attributes
 * > are set independently. The drawing is performed twice, once in the drawing of the **UnionEffectContainer** 
 * > component and once in the drawing of the descendant component. Generally, you do not need to set the same attribute
 * > that supports the union deformation effect on the descendant component that uses the union effect of the ancestor 
 * > component **UnionEffectContainer**. This prevents the deterioration of the union effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare class UnionEffectContainerAttribute extends CommonMethod<UnionEffectContainerAttribute> {
  /**
   * Sets the point light style.
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
   * Sets the union mode.
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