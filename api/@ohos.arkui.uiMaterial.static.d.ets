'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { ResourceColor } from '@ohos.arkui.component';

/**
 * This module provides APIs for system materials. Different system materials correspond to different UI effects, 
 * including the [background color]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
 * [border color]{@link CommonMethod#borderColor}, [border width]{@link CommonMethod#borderWidth}, 
 * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}, and material layer filter. The performance 
 * of a material object varies on devices with different computing power. The high, medium, and low levels of device 
 * computing power are determined by device vendors. For details about the level-based effect, see the description of 
 * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
 */
declare namespace uiMaterial {
  /**
   * Enumerates system material types.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  export enum MaterialType {
    /**
     * Material type with no effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,
    /**
     * Material type for semitransparent style. It includes predefined backgroundColor, border, and shadow effects.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    SEMI_TRANSPARENT = 1,
    /**
     * Immersive material type. It is used only by the **type** attribute of the 
     * [MaterialInfo]{@link uiMaterial.MaterialInfo} API to identify the current material type and does not map to 
     * underlying features. The actual material effect is implemented by the 
     * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial} class.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    IMMERSIVE = 2
  }

  /**
   * Enumerates the material enabling states, indicating the states of the application-level immersive system material 
   * configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export enum MaterialState {
    /**
     * Default state. The immersive system material is enabled by default for the 
     * [Dialog](docroot://ui/arkts-base-dialog-overview.md), [Toast](docroot://ui/arkts-create-toast.md), and 
     * [AlphabetIndexer]{@link alphabet_indexer} components if the background color, blur, and shadow are not set for 
     * the components. The immersive system material is enabled by default for the text menu triggered by long-pressing 
     * or double-clicking after [copyOption]{@link TextAttribute#copyOption} is set in the [Text]{@link text} component.
     * For other components, whether the immersive system material is enabled is set by the application.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * Enabled state. The immersive system material is enabled by default for the 
     * [Dialog](docroot://ui/arkts-base-dialog-overview.md), [Toast](docroot://ui/arkts-create-toast.md), 
     * [AlphabetIndexer]{@link alphabet_indexer}, [ChipGroup]{@link @ohos.arkui.advanced.ChipGroup}, 
     * [Chip]{@link @ohos.arkui.advanced.Chip}, [Select]{@link select}, [Menu Control]{@link common}, 
     * [Toggle]{@link toggle}, [SegmentButton]{@link @ohos.arkui.advanced.SegmentButton}, 
     * [SegmentButtonV2]{@link @ohos.arkui.advanced.SegmentButtonV2}, [Slider]{@link slider}, 
     * [bindSheet]{@link CommonMethod#bindSheet}, and [SelectionMenu]{@link @ohos.arkui.advanced.SelectionMenu}. After 
     * [copyOption]{@link TextAttribute#copyOption} is set for the [Text]{@link text} component, the immersive system 
     * material is enabled by default for the text menu triggered by long-pressing or double-clicking. In this state, 
     * the immersive system material style takes precedence over the background color, blur, shadow, and border style 
     * set for the components. You need to set whether to enable the immersive system material for other components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ENABLE = 1,
    /**
     * Disabled state. The immersive system material cannot be enabled for any component. Even if you set the immersive 
     * system material parameters for a component, the settings will not take effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    DISABLE = 2
  }

  /**
   * Provides material configuration information, including the material enabling state and material type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface MaterialInfo {
    /**
     * Material enabling state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    state: MaterialState;

    /**
     * Material type ID, indicating the material type corresponding to the current configuration. The value is used only
     * for type identification and does not map to underlying features.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    type: MaterialType;
  }

  /**
   * Obtains the material configuration information of this application. The returned configuration information comes 
   * from the metadata configured in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the 
   * application.
   *
   * @returns { MaterialInfo } Material configuration information of this application, including the material enabling
   *     state and material type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function getMaterialInfo(): MaterialInfo;

  /**
   * Enumerates immersive material styles. Different material styles correspond to different material parameters, 
   * including the blur degree and brightness.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export enum ImmersiveStyle {
    /**
     * Ultra-thin style, which provides a very strong transparent effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN = 0,
    /**
     * Thin style, which provides a strong transparent effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN = 1,
    /**
     * Regular style, which means the material layer is of regular thickness.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR = 2,
    /**
     * Thick style, which provides a strong blur effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK = 3,
    /**
     * Ultra-thick style, which provides a very strong blur effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK = 4,

    /**
     * Ultra thin style. The material layer is ultra thin, with a very strong transparency effect,
     * set on EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN_EC = 5,
    /**
     * Thin style. The material layer is thin, with a strong transparency effect, set on EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN_EC = 6,
    /**
     * Regular style. The material layer is regular, set on EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR_EC = 7,
    /**
     * Thick style. The blur effect is strong, set on EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK_EC = 8,
    /**
     * Ultra thick style, set on EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK_EC = 9,
    /**
     * Ultra thin style. The material layer is ultra thin, with a very strong transparency effect,
     * set on sub component of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THIN_EC_SUB = 10,
    /**
     * Thin style. The material layer is thin, with a strong transparency effect,
     * set on sub component of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THIN_EC_SUB = 11,
    /**
     * Regular style. The material layer is regular, set on sub component of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    REGULAR_EC_SUB = 12,
    /**
     * Thick style. The blur effect is strong, set on sub component of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    THICK_EC_SUB = 13,
    /**
     * Ultra thick style, set on sub component of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    ULTRA_THICK_EC_SUB = 14
  }
 
  /**
   * Convert from ImmersiveMaterial to another ImmersiveMaterial set on EffectComponent.
   *
   * @param { uiMaterial.ImmersiveMaterial } material - The ImmersiveMaterial.
   * @returns { uiMaterial.ImmersiveMaterial } The ImmersiveMaterial set on EffectComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function convertToECMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;
  /**
   * Convert from ImmersiveMaterial to another ImmersiveMaterial set on sub component of EffectComponent.
   *
   * @param { uiMaterial.ImmersiveMaterial } material - The ImmersiveMaterial.
   * @returns { uiMaterial.ImmersiveMaterial } The ImmersiveMaterial set on sub component of EffectComponent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export function convertToECSubMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;

  /**
   * Immersive material parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface ImmersiveOptions {
    /**
     * Material style. Different styles correspond to different material parameters, which affect the material 
     * thickness.
     * 
     * Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing 
     * power.
     * 
     * Default value: **ImmersiveStyle.REGULAR**
     *
     * @default uiMaterial.ImmersiveStyle.REGULAR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    style?: ImmersiveStyle;
    /**
     * Coloring of the material layer. This parameter is used to add a pure color effect for the material filter. The 
     * pure color must have a certain transparency value and cannot be completely opaque. Otherwise, the material filter
     * effect will be completely blocked.
     * 
     * Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing 
     * power.
     * 
     * Default value: **Color.Transparent**
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    materialColor?: ResourceColor;
    /**
     * Whether the subtree of the node of the material object automatically adapts the material to the complementary 
     * color of the background color.
     * 
     * **false** indicates the material is not automatically adapted to the complementary color of the background color.
     * 
     * **true** indicates that the material is automatically adapted to the complementary color of the background color 
     * only when the material layer is thin enough. The materials that can be adapted to the complementary color are 
     * defined by the system. Such materials must have at least the **THIN** or **ULTRA_THIN** style, and are related to
     * the strength configuration of the immersive light effect of the application. The thinner the material and the 
     * stronger the immersive light effect, the more likely the material meets the requirements for adapting to the 
     * complementary color.
     * 
     * The capability of automatically adapting the material to the complementary color takes effect only when special 
     * resource values are set for some attribute APIs. The attribute APIs include 
     * [fontColor]{@link TextAttribute#fontColor} of the **Text** component, 
     * [fontColor]{@link ButtonAttribute#fontColor} of the **Button** component, 
     * [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)} of the **SymbolGlyph** component, 
     * [fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)} of the **Image** component, icon colors in 
     * [placeholderColor]{@link SearchAttribute#placeholderColor}, [fontColor]{@link SearchAttribute#fontColor}, and 
     * [searchIcon]{@link SearchAttribute#searchIcon} of the **Search** component, icon colors in 
     * [cancelButton]{@link SearchAttribute#cancelButton}, caret colors in 
     * [caretStyle]{@link SearchAttribute#caretStyle}, and text and icon colors in 
     * [tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)} of the 
     * **TabContent** component when the [BottomTabBarStyle]{@link BottomTabBarStyle} style is used.
     * 
     * Note: This parameter takes effect only for the display effect of devices with high- and mid-level computing 
     * power.
     * 
     * Default value: **false**
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    colorInvert?: boolean;
    /**
     * Whether to add a shadow effect for a material.
     * 
     * If this parameter is set to **true**, the added shadow effect in the material always takes effect, which takes 
     * precedence over the general [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} attribute. If
     * this parameter is set to **false**, only the general shadow attribute takes effect.
     * 
     * Note: This parameter takes effect only for the display effect of devices with all levels of computing power.
     * 
     * Default value: **true**
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    applyShadow?: boolean;
    /**
     * Whether to set an interactive deformation effect for the component with a material set.
     * 
     * Note: This parameter takes effect for the display effect of devices with all levels of computing power.
     * 
     * Default value: **false**
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    interactive?: boolean;
    /**
     * Whether to set a light sensing interaction feedback effect for the component with a material set. If this 
     * parameter is set to null, the light sensing interaction feedback effect is disabled.
     * 
     * Note: This parameter takes effect for the display effect of devices with all levels of computing power.
     * 
     * Default value: **undefined**, indicating that the light sensing interaction feedback effect is not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    lightEffect?: LightEffectOptions | null;
  }

  /**
   * Provides the light sensing interaction feedback configuration for immersive materials. The configuration is used to
   * customize the color of the light sensing feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export interface LightEffectOptions {
    /**
     * Custom color of the light sensing feedback.
     * 
     * Default value: **Color.White**
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    color?: ResourceColor;
  }

  /**
   * Define the interface containing various material parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export interface MaterialOptions {
    /**
     * The type of the material.
     *
     * @default uiMaterial.MaterialType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    type?: MaterialType;
  }

  /**
   * Base class of the system material object on the UI.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  export class Material {
    /**
     * Constructor of material class.
     *
     * @param { MaterialOptions } [options] - the options to construct a material.
     *     <br>Default value:{type:uiMaterial.MaterialType.NONE}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: MaterialOptions);
    /**
     * Returns an empty material object, which is used to disable the immersive system material effect for a component. 
     * The usage method is **uiMaterial.Material.empty**.
     * 
     * In enabled state, you can disable the immersive system material effect for a component by setting 
     * **systemMaterial(uiMaterial.Material.empty)**. If the component does not support the component-level immersive 
     * system material API, the material effect cannot be disabled using this API.
     *
     * @returns { Material } Empty material object, indicating that there is no material effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    static get empty(): Material;
  }
  /**
   * Immersive material class, which inherits from [Material]{@link uiMaterial.MaterialType}.
   * 
   * The performance of an immersive material varies based on device computing power. The high, medium, and low levels 
   * of device computing power are determined by device vendors and defined in the system configuration files. On 
   * devices with high- and mid-level computing power, the filter and 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effects of the material layer are affected.
   * On devices with low-level computing power, the 
   * [background color]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * [border color]{@link CommonMethod#borderColor}, [border width]{@link CommonMethod#borderWidth}, and 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effects are affected. In addition, the 
   * effect of the same material is affected by the immersive light configuration in the application. The material 
   * parameters and effects vary depending on the immersive light configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  export class ImmersiveMaterial extends Material {
    /**
     * Constructs **ImmersiveMaterial**.
     *
     * @param { ImmersiveOptions } [options] - System material configuration options, including the material style and
     *     material layer coloring.<br>For details about the default values, see the default values of the parameters in
     *     the **ImmersiveOptions** API, that is,
     *     **{style:ImmersiveStyle.REGULAR, materialColor:Color.Transparent, colorInvert:false, applyShadow:true, interactive:false, lightEffect:undefined}**.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    constructor(options?: ImmersiveOptions);
  }  
}

/**
 * export uiMaterial namespace.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @since 23 static
 */
export default uiMaterial;