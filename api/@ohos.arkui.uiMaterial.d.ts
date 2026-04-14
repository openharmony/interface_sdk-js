/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * Define the namespace for uiMaterial, which contains the definitions of HarmonyOS-style material objects.
 *
 * @namespace uiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @form
 * @since 23 dynamic
 */
/**
 * Define the namespace for uiMaterial, which contains the definitions of HarmonyOS-style material objects.
 *
 * @namespace uiMaterial
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare namespace uiMaterial {
  /**
   * Enum of the type of material.
   *
   * @enum { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  /**
   * Enum of the type of material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialType {
    /**
     * Material type with no effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    NONE = 0,
    /**
     * Material type for semitransparent style. It includes predefined backgroundColor, border, and shadow effects.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    SEMI_TRANSPARENT = 1,
    /**
     * Material type for immersive style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    IMMERSIVE = 2,
  }

  /**
   * Enum of the material state configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialState {
    /**
     * Default mode: Dialog, Toast, AlphabetIndexer, Text selection menu use immersive material by default.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    DEFAULT = 0,
    /**
     * Enable mode: The component uses immersive material by default.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ENABLE = 1,
    /**
     * Disable mode: All components disable immersive material.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    DISABLE = 2,
  }

  /**
   * Material information containing state and type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface MaterialInfo {
    /**
     * The material state configuration.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    state: MaterialState;

    /**
     * Currently configured material type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    type: MaterialType;
  }

  /**
   * Get material information from application configuration.
   * 
   * @returns { MaterialInfo } The material information containing state and type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getMaterialInfo(): MaterialInfo;

  /**
   * The enumeration of material styles. Different material styles have different thicknesses.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum ImmersiveStyle {
    /**
     * Ultra thin style. The material layer is ultra thin, with a very strong transparency effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THIN = 0,
    /**
     * Thin style. The material layer is thin, with a strong transparency effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THIN = 1,
    /**
     * Regular style. The material layer is regular.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    REGULAR = 2,
    /**
     * Thick style. The blur effect is strong.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THICK = 3,
    /**
     * Ultra thick style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THICK = 4,
  }

  /**
   * The parameters of immersive material.
   *
   * @interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
  */
  interface ImmersiveOptions {
    /**
     * The style of the material. Different styles correspond to different material parameters, which affect the
     * thickness of the material.
     *
     * @default uiMaterial.MaterialStyle.REGULAR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    style?: ImmersiveStyle,
    /**
     * The extra color of material level. This parameter will add a specified color effect to the material.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    materialColor?: ResourceColor,
    /**
     * It determines whether the child tree of a node that has a material object set automatically adapts the material
     * to the background color. If it is false, the color will not be automatically inverted. If it is true, the color
     * will be automatically inverted only when other conditions are met, for example, the material style is THIN or
     * ULTRA_THIN.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    colorInvert?: boolean,
    /**
     * It determines whether to add shadows of the material effect.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    applyShadow?: boolean,
    /**
     * It determines whether enable the spatial animation related to the material effect.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    enableAnimation?: boolean,
    /**
     * Whether the material supports interactive.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    interactive?: boolean,
  }
 	
  /**
   * Define the interface containing various material parameters.
   *
   * @interface MaterialOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  interface MaterialOptions {
    /**
     * The type of the material.
     *
     * @type { ?MaterialType }
     * @default uiMaterial.MaterialType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    type?: MaterialType,
  }

  /**
   * Define the class of material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  /**
   * Define the class of material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  class Material {
    /**
     * Constructor of material class.
     *
     * @param { MaterialOptions } [options] - the options to construct a material.
     *     <br>Default value:{type:uiMaterial.MaterialType.NONE}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    constructor(options?: MaterialOptions);
    /**
     * Disables the material effect
     *
     * @returns { Material }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static get empty(): Material;
  }

  /**
   * Define the class of immersive material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  class ImmersiveMaterial extends Material {
    /**
     * Constructor of ImmersiveMaterial class
     *
     * @param { ImmersiveOptions } [options] - the options to construct an immersive material.
     *     If this parameter is left blank. the default ImmersiveOptions is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(options?: ImmersiveOptions)
  }
}

/**
 * export uiMaterial namespace.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @form
 * @since 23 dynamic
 */
/**
 * export uiMaterial namespace.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26 dynamic
 */
export default uiMaterial;