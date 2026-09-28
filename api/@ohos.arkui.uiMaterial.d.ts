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
 * @file System Material
 * @kit ArkUI
 */

/**
 * This module provides APIs for system materials. Different system materials correspond to different UI effects, 
 * including the background color ([backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}), border 
 * color ([borderColor]{@link CommonMethod#borderColor}), border width ([borderWidth]{@link CommonMethod#borderWidth}), 
 * and shadow ([shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}).
 * 
 * > **NOTE**
 * >
 * > - This topic describes only system APIs provided by the module. For details about other public APIs, see 
 * > [System Material]{@link uiMaterial}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 23 - 24]
 * @publicapi [since 26.0.0]
 * @stagemodelonly
 * @crossplatform [since 26.0.0]
 * @form
 * @atomicservice [since 26.0.0]
 * @since 23 dynamic
 */
declare namespace uiMaterial {
  /**
   * Enumerates the system material types. This section contains only the system APIs of this module. For other public 
   * types, see [MaterialType]{@link uiMaterial.MaterialType}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @form
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  enum MaterialType {
    /**
     * No system material effect. The corresponding effects are: 
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)} is transparent, 
     * [borderColor]{@link CommonMethod#borderColor} is transparent, [borderWidth]{@link CommonMethod#borderWidth} is 0,
     * and no [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    NONE = 0,
    /**
     * Semi-transparent system material effect. The corresponding effects are:
     * 
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}: "#f2f1f3f5" in light mode and "#f230
     * 3131" in dark mode.
     * 
     * [borderColor]{@link CommonMethod#borderColor}: 
     * [token](docroot://ui/theme_skinning.md#system-default-token-color-values) value of 
     * theme.colors.compForegroundPrimary blended with 10% transparency (alpha value).
     * 
     * [borderWidth]{@link CommonMethod#borderWidth}: 1 vp.
     * 
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}: ShadowStyle.OUTER_DEFAULT_SM.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
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
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    IMMERSIVE = 2,
  }

  /**
   * Enumerates the material enabling states, indicating the states of the application-level immersive system material 
   * configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialState {  
    /**
     * Default state. The immersive system material is enabled by default for the 
     * [Dialog](docroot://ui/arkts-base-dialog-overview.md), [Toast](docroot://ui/arkts-create-toast.md), and 
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer} components if the background color, blur, and
     * shadow are not set for the components. The immersive system material is enabled by default for the text menu 
     * triggered by long-pressing or double-clicking after [copyOption]{@link TextAttribute#copyOption} is set in the 
     * [Text]{@link ./@internal/component/ets/text} component. For other components, whether the immersive system 
     * material is enabled is set by the application.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    DEFAULT = 0,
    /**
     * Enabled state. The immersive system material is enabled by default for the 
     * [Dialog](docroot://ui/arkts-base-dialog-overview.md), [Toast](docroot://ui/arkts-create-toast.md), 
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}, 
     * [ChipGroup]{@link @ohos.arkui.advanced.ChipGroup}, [Chip]{@link @ohos.arkui.advanced.Chip}, 
     * [Select]{@link ./@internal/component/ets/select}, [Menu Control]{@link ./@internal/component/ets/common}, 
     * [Toggle]{@link ./@internal/component/ets/toggle}, [SegmentButton]{@link @ohos.arkui.advanced.SegmentButton}, 
     * [SegmentButtonV2]{@link @ohos.arkui.advanced.SegmentButtonV2}, [Slider]{@link ./@internal/component/ets/slider}, 
     * and [SelectionMenu]{@link @ohos.arkui.advanced.SelectionMenu} components. After 
     * [copyOption]{@link TextAttribute#copyOption} is set for the [Text]{@link ./@internal/component/ets/text} 
     * component, the immersive system material is enabled by default for the text menu triggered by long-pressing or 
     * double-clicking. In this state, the immersive system material style takes precedence over the background color, 
     * blur, shadow, and border style set for the components. You need to set whether to enable the immersive system 
     * material for other components.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ENABLE = 1,
    /**
     * Disabled state. The immersive system material cannot be enabled for any component. Even if you set the immersive 
     * system material parameters for a component, the settings will not take effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    DISABLE = 2
  }

  /**
   * Provides material configuration information, including the material enabling state and material type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface MaterialInfo {  
    /**
     * Material enabling state.
     *
     * @default MaterialState.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    state: MaterialState;

    /**
     * System material type ID, indicating the material type corresponding to the current configuration. The value is 
     * used only for type identification and does not map to underlying features.
     *
     * @default MaterialType.IMMERSIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getMaterialInfo(): MaterialInfo;

  /**
   * Enumerates the material styles. The enum values suffixed with EC are set on 
   * [EffectComponent]{@link ./@internal/component/ets/effect_component}, and those suffixed with EC_SUB are set on the 
   * child components of EffectComponent. The two work together to achieve merged optimization of material effect 
   * rendering. The material blur set on EffectComponent will ultimately take effect on its child components. Different 
   * material styles correspond to different material parameters, mainly including the blur level and highlight effect 
   * of the material. For details, see [ImmersiveStyle]{@link uiMaterial.ImmersiveStyle}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum ImmersiveStyle {
    /**
     * Ultra-thin style, which provides a very strong transparent effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THIN = 0,
    /**
     * Thin style, which provides a strong transparent effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THIN = 1,
    /**
     * Regular style, which means the material layer is of regular thickness.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    REGULAR = 2,
    /**
     * Thick style, which provides a strong blur effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THICK = 3,
    /**
     * Ultra-thick style, which provides a very strong blur effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THICK = 4,

    /**
     * Ultra-thin style. The material layer is ultra-thin, providing a strong transparency effect.
     * 
     * Applicable to [EffectComponent]{@link ./@internal/component/ets/effect_component}. It must be used together with 
     * the corresponding EC_SUB suffix enum to achieve merged optimization of material effect rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THIN_EC = 5,
    /**
     * Thin style. The material layer is thin, providing a relatively strong transparency effect.
     * 
     * Applicable to EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THIN_EC = 6,
    /**
     * Regular style. The material layer has a moderate thickness, providing moderate transparency and blur effects.
     * 
     * Applicable to EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    REGULAR_EC = 7,
    /**
     * Thick style, providing a strong blur effect.
     * 
     * Applicable to EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THICK_EC = 8,
    /**
     * Ultra-thick style, providing a very strong blur effect.
     * 
     * Applicable to EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THICK_EC = 9,
    /**
     * Ultra-thin style. The material layer is ultra-thin, providing a strong transparency effect.
     * 
     * Applicable to the child components of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THIN_EC_SUB = 10,
    /**
     * Thin style. The material layer is thin, providing a relatively strong transparency effect.
     * 
     * Applicable to the child components of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THIN_EC_SUB = 11,
    /**
     * Regular style. The material layer has a moderate thickness, providing moderate transparency and blur effects.
     * 
     * Applicable to the child components of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    REGULAR_EC_SUB = 12,
    /**
     * Thick style, providing a strong blur effect.
     * 
     * Applicable to the child components of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THICK_EC_SUB = 13,
    /**
     * Ultra-thick style, providing a very strong blur effect.
     * 
     * Applicable to the child components of EffectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THICK_EC_SUB = 14
  }
  /**
   * Enumerates material levels, which indicate the computing power levels of devices. You can use 
   * [getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel} to obtain the material level of the current 
   * device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialLevel {  
    /**
     * Material level of devices with high-level computing power.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    EXQUISITE = 0,
    /**
     * Material level of devices with medium-level computing power.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GENTLE = 1,
    /**
     * Material level of devices with low-level computing power.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    SMOOTH = 2,
 	}
 	 
  /**
   * Obtains the global material level, which is related to the device computing power. This configuration item is 
   * defined by the device and cannot be modified.
   *
   * @returns { MaterialLevel } Material level of the device.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getGlobalMaterialLevel(): MaterialLevel;
 	 
  /**
   * Checks whether the current device supports immersive system materials (
   * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}). This configuration item is defined by the device and 
   * cannot be modified.
   *
   * @returns { boolean } Whether the current device supports immersive materials. The value **true** indicates that the
   *     current device supports immersive materials, and **false** indicates the opposite.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function isImmersiveMaterialSupported(): boolean;

  /**
   * Converts an [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial} material into an ImmersiveMaterial material 
   * applicable to [EffectComponent]{@link ./@internal/component/ets/effect_component}.
   * 
   * The [materialColor]{@link uiMaterial.ImmersiveOptions}, [applyShadow]{@link uiMaterial.ImmersiveOptions}, 
   * [interactive]{@link uiMaterial.ImmersiveOptions}, and [lightEffect]{@link uiMaterial.ImmersiveOptions} properties 
   * in the material do not take effect on the EffectComponent. If a material converted through this API has these 
   * properties configured, they will also not take effect.
   *
   * @param { uiMaterial.ImmersiveMaterial } material - Immersive material to convert.
   * @returns { uiMaterial.ImmersiveMaterial } Immersive material applicable to
   *     [EffectComponent]{@link ./@internal/component/ets/effect_component} after conversion.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function convertToECMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;
  /**
   * Converts an [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial} material into an ImmersiveMaterial material 
   * applicable to the child components of [EffectComponent]{@link ./@internal/component/ets/effect_component}.
   *
   * @param { uiMaterial.ImmersiveMaterial } material - Immersive material to convert.
   * @returns { uiMaterial.ImmersiveMaterial } Immersive material applicable to the child components of
   *     [EffectComponent]{@link ./@internal/component/ets/effect_component} after conversion.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function convertToECSubMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;

  /**
   * Immersive material parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface ImmersiveOptions {
    /**
     * Material style. Different styles correspond to different material parameters, which affect the material 
     * thickness.
     * 
     * Note: This parameter takes effect only for high- and medium-computing devices that support immersive materials.
     * 
     * Default value: **uiMaterial.ImmersiveStyle.REGULAR**
     *
     * @default uiMaterial.ImmersiveStyle.REGULAR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    style?: ImmersiveStyle;
    /**
     * Coloring of the material layer. For high- and medium-computing devices that support immersive materials, if this 
     * parameter is not specified or is set to **undefined**, no additional pure color effect is mixed. If this 
     * parameter is set to a valid color value, this parameter will mix a pure color effect for the material filter. If 
     * the color is completely opaque, the material filter effect will be blocked. For low-computing devices that 
     * support immersive materials, if this parameter is not specified or is set to **undefined**, the background color 
     * effect of the material on the devices takes effect. If this parameter is set to a valid color value, this 
     * parameter value is used as the value of the 
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)} attribute.
     * 
     * Note: This parameter takes effect on the display effect of all computing power devices that support immersive 
     * materials.
     * 
     * Default value: **undefined**
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
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
     * The automatic complementary color adaptation capability takes effect only when special resource values (listed in
     * Table 1) are set for some attribute APIs. Such attribute APIs include:
     * 
     * [fontColor]{@link TextAttribute#fontColor} of the **Text** component;
     * 
     * [fontColor]{@link ButtonAttribute#fontColor} of the **Button** component;
     * 
     * [fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)} of the **SymbolGlyph** component;
     * 
     * [fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)} of the **Image** component;
     * 
     * [placeholderColor]{@link SearchAttribute#placeholderColor}, [fontColor]{@link SearchAttribute#fontColor}, icon 
     * color in [searchIcon]{@link SearchAttribute#searchIcon}, icon color in 
     * [cancelButton]{@link SearchAttribute#cancelButton}, caret color in 
     * [caretStyle]{@link SearchAttribute#caretStyle}, and button color in 
     * [searchButton]{@link SearchAttribute#searchButton} under the **Search** component;
     * 
     * [BottomTabBarStyle]{@link BottomTabBarStyle} used by 
     * [tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)} of the 
     * **TabContent** component;
     * 
     * [prefixIcon]{@link @ohos.arkui.advanced.Chip:PrefixIconOptions}, 
     * [fillColor]{@link @ohos.arkui.advanced.Chip:IconCommonOptions} of the **suffixIcon** attribute, and 
     * [fontColor]{@link @ohos.arkui.advanced.Chip:LabelOptions} of the 
     * [label]{@link @ohos.arkui.advanced.Chip:LabelOptions} attribute under the **Chip** component;
     * 
     * [fontColor]{@link @ohos.arkui.advanced.ChipGroup:ChipItemStyle} of 
     * [itemStyle]{@link @ohos.arkui.advanced.ChipGroup:ChipGroup} of the **ChipGroup** component;
     * 
     * [fontColor]{@link TextAreaAttribute#fontColor} and [placeholderColor]{@link TextAreaAttribute#placeholderColor} 
     * of the **TextArea** component;
     * 
     * [fontColor]{@link TextInputAttribute#fontColor} and [placeholderColor]{@link TextInputAttribute#placeholderColor}
     * of the **TextInput** component;
     * 
     * [fontColor]{@link @ohos.arkui.advanced.SegmentButton:SegmentButtonOptions#fontColor} of the **SegmentButton** 
     * component;
     * 
     * [fontColor]{@link DigitIndicator#fontColor} of the **Swiper** component.
     * 
     * When the preceding APIs are used, the text and icon colors are automatically inverted.
     * 
     * Note: This parameter takes effect only for high- and medium-computing devices that support immersive materials.
     * 
     * Default value: **false**
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    colorInvert?: boolean;
    /**
     * Whether to add a shadow effect for a material.
     * 
     * If this parameter is set to **true**, the added shadow effect in the material always takes effect, which takes 
     * precedence over the general [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} attribute. If
     * this parameter is set to **false**, only the general shadow attribute takes effect.
     * 
     * Note: This parameter takes effect on the display effect of all computing power devices that support immersive 
     * materials.
     * 
     * Default value: **true**
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    applyShadow?: boolean;
    /**
     * Whether to enable the interactive deformation effect.
     * 
     * The value **true** indicates to enable the interactive deformation effect, and **false** indicates the opposite.
     * 
     * Note: This parameter takes effect on the display effect of all computing power devices that support immersive 
     * materials.
     * 
     * Default value: **false**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    interactive?: boolean;
    /**
     * Parameter for the light sensory interaction feedback effect. When a LightEffectOptions object is passed in, light
     * sensory interaction feedback is enabled; when null is passed in, the light sensory interaction feedback effect is
     * explicitly disabled; when not passed in, the default value is **undefined**, depending on whether the component 
     * has a default interactive light effect.
     * 
     * **Note:** This parameter takes effect only on the display effect of high- and medium- computing power devices 
     * that support immersive material.
     * 
     * Default value: undefined, meaning the light sensory interaction feedback effect is not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    lightEffect?: LightEffectOptions | null;
  }

  /**
   * Provides the light sensing interaction feedback configuration for immersive materials. Light sensing interaction 
   * feedback refers to the visual effect of dynamic light changes on the surface of a material when a user interacts 
   * with a component through touch. The configuration is used to customize the color of the light sensing feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface LightEffectOptions {  
    /**
     * Custom color of the light sensing feedback.
     * 
     * Default value: **Color.White**
     *
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    color?: ResourceColor;
 	}
 	
  /**
   * System material options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  interface MaterialOptions {
    /**
     * Material type. Select MaterialType.NONE when no material effect is needed, and MaterialType.SEMI_TRANSPARENT when
     * a semi-transparent background effect is needed.
     * 
     * Default value: MaterialType.NONE
     *
     * @default uiMaterial.MaterialType.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    type?: MaterialType;
  }

  /**
   * Base class for system material objects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @form
   * @atomicservice [since 26.0.0]
   * @since 23 dynamic
   */
  class Material {
    /**
     * A constructor used to create a **Material** object.
     *
     * @param { MaterialOptions } [options] - System material configuration option, including the material type. Pass
     *     this parameter when a material type (such as translucency effect) needs to be specified. If not passed, the
     *     default material configuration `{type:MaterialType.NONE}` is used, that is, no system material effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    constructor(options?: MaterialOptions);

    /**
     * Returns an empty material object, which is used to disable the immersive system material effect for a component. 
     * The usage method is **uiMaterial.Material.empty**.
     * 
     * In enabled mode, you can set `systemMaterial(uiMaterial.Material.empty)` to individually disable the immersive 
     * system material effect for a specific component. If the component does not support the component-level immersive 
     * system material API, the material effect cannot be disabled through this method.
     *
     * @returns { Material } Empty material object, indicating that there is no material effect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static get empty(): Material;
  }

  /**
   * Immersive material class, which inherits from [Material]{@link uiMaterial.Material}.
   * 
   * The immersive material has tiered performance based on whether the device supports immersive material and the 
   * device's computing power. You can use [isImmersiveMaterialSupported]{@link uiMaterial.isImmersiveMaterialSupported}
   * to determine whether the device supports immersive material, and use 
   * [getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel} to obtain the material level of the device. On 
   * devices that do not support immersive material, immersive material can be set but will have no effect. On high and 
   * medium computing power devices that support immersive material, the material effect is implemented through the 
   * material layer filter attribute [materialFilter]{@link CommonMethod#materialFilter} and the shadow attribute 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. When the 
   * [systemMaterial]{@link CommonMethod#systemMaterial} attribute takes effect, the previously set background color 
   * attribute [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)} is restored to transparent, 
   * and the previously set border width attribute [borderWidth]{@link CommonMethod#borderWidth} is restored to no 
   * border effect. On low computing power devices that support immersive material, the material effect is implemented 
   * through the background color attribute [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * border color attribute [borderColor]{@link CommonMethod#borderColor}, border width attribute 
   * [borderWidth]{@link CommonMethod#borderWidth}, and shadow attribute 
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}. The effect of the same material is 
   * influenced by the immersive light sensation configuration item in the system settings app. Under different 
   * intensity levels of immersive light sensation configuration, the material parameters and effects may vary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  class ImmersiveMaterial extends Material {
    /**
     * Constructs **ImmersiveMaterial**.
     *
     * @param { ImmersiveOptions } [options] - System material configuration options, including the material style and
     *     material layer coloring.
     *     <br>For details about the default values, see the default values of the parameters in the
     *     **ImmersiveOptions** API, that is,
     *     **{style:uiMaterial.ImmersiveStyle.REGULAR, materialColor:undefined, colorInvert:false, applyShadow:true, interactive:false, lightEffect:undefined}**.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
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
 * @crossplatform [since 26.0.0]
 * @form
 * @atomicservice [since 26.0.0]
 * @since 23 dynamic
 */
export default uiMaterial;