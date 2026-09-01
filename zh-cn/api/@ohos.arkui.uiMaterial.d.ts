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
 * @file 系统材质
 * @kit ArkUI
 */

/**
 * 本模块提供系统材质的接口定义。不同的系统材质对应不同的UI效果，包括背景色
 * [backgroundColor]{@link CommonMethod#backgroundColor}、边框颜色
 * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
 * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}、材质层滤镜
 * [materialFilter]{@link CommonMethod#materialFilter}效果。当前提供的系统材质为沉浸式材质类型
 * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}，沉浸式材质对象在不同设备上的表现存在差异，只有支持沉浸式材质的设备上设置才有效果，在不支持沉浸式材质的设备上可设置但无效
 * 果，可通过[uiMaterial.isImmersiveMaterialSupported]{@link uiMaterial.isImmersiveMaterialSupported}判断设备是否支持沉浸式材质。在支持沉浸式材质的设
 * 备上，材质效果在不同算力的设备上有分档表现，可通过[uiMaterial.getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel}获取设备的材质等级，分档效果具体
 * 参考[ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}的描述。
 * 
 * 开发指导请参考[沉浸光感](docroot://ui/arkts-immersive-light-sense.md)指南文档。
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
   * 系统材质类型枚举。
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
     * 无系统材质效果。对应的效果为背景色
     * [backgroundColor]{@link CommonMethod#backgroundColor}为
     * 透明色，边框颜色[borderColor]{@link CommonMethod#borderColor}为透明色，边框宽度[borderWidth]{@link CommonMethod#borderWidth}为0，无阴影
     * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    NONE = 0,
    /**
     * 半透明系统材质效果。对应的效果为：
     * 
     * 背景色[backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}：浅色模式为"#f2f1f3f5"，深色模式为"#f2303131"。
     * 
     * 边框颜色[borderColor]{@link CommonMethod#borderColor}为theme.colors.compForegroundPrimary的
     * [token](docroot://ui/theme_skinning.md#系统缺省token色值)值以10%透明度（alpha值）进行混合叠加。
     * 
     * 边框宽度[borderWidth]{@link CommonMethod#borderWidth}为1vp。
     * 
     * 阴影[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}为ShadowStyle.OUTER_DEFAULT_SM。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    SEMI_TRANSPARENT = 1,
    /**
     * 沉浸式材质类型。仅用于[MaterialInfo]{@link uiMaterial.MaterialInfo}接口的type属性标识当前配置的材质类型，不映射到底层功能。实际材质效果通过
     * [ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}类实现。
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
   * 材质使能状态枚举，表示应用级沉浸式系统材质配置的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialState {  
    /**
     * 默认模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}在组件本身未设置背景色、模糊参数和阴影参数时默认开启沉浸式系统材质；
     * [Text]{@link ./@internal/component/ets/text}设置[copyOption]{@link TextAttribute#copyOption}后长按或双击触发的文本菜单默认开启沉浸式系统材
     * 质；其他组件由应用主动设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    DEFAULT = 0,
    /**
     * 使能模式。[弹出框Dialog](docroot://ui/arkts-base-dialog-overview.md)、[即时反馈（Toast）](docroot://ui/arkts-create-toast.md)、
     * [AlphabetIndexer]{@link ./@internal/component/ets/alphabet_indexer}、
     * [ChipGroup]{@link @ohos.arkui.advanced.ChipGroup}、[Chip]{@link @ohos.arkui.advanced.Chip}、
     * [Select]{@link ./@internal/component/ets/select}、[菜单控制]{@link ./@internal/component/ets/common}、
     * [Toggle]{@link ./@internal/component/ets/toggle}、[SegmentButton]{@link @ohos.arkui.advanced.SegmentButton}、
     * [SegmentButtonV2]{@link @ohos.arkui.advanced.SegmentButtonV2}、[Slider]{@link ./@internal/component/ets/slider}、
     * [SelectionMenu]{@link @ohos.arkui.advanced.SelectionMenu}组件默认开启沉浸式系统材质；
     * [Text]{@link ./@internal/component/ets/text}设置[copyOption]{@link TextAttribute#copyOption}后长按或双击触发的文本菜单默认开启沉浸式系统材
     * 质。此模式下，沉浸式系统材质样式生效的优先级高于组件本身设置的背景色、模糊、阴影和边框样式。其他组件需开发者主动设置。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ENABLE = 1,
    /**
     * 禁用模式。所有组件禁止开启沉浸式系统材质，即使主动为组件设置沉浸式系统材质参数也不会生效。
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
   * 材质配置信息，包含材质使能状态和材质类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface MaterialInfo {  
    /**
     * 材质使能状态配置，决定当前应用沉浸式系统材质的使能模式。不同状态影响组件默认是否开启沉浸式系统材质效果，具体参考[MaterialState]{@link uiMaterial.MaterialState}枚举说明。
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
     * 系统材质类型标识，表示当前配置对应的材质类型。该值仅用于类型标识，不映射到底层功能。
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
   * 获取当前应用的材质配置信息。在需要根据材质使能状态决定组件是否开启或关闭沉浸式系统材质效果时，可调用此方法获取配置信息。返回的配置信息来自应用在
   * [module.json5](docroot://quick-start/module-configuration-file.md)中配置的metadata。只有在entry类型的module中配置的metadata才会生效。
   *
   * @returns { MaterialInfo } 返回当前应用的材质配置信息，包含材质使能状态和材质类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getMaterialInfo(): MaterialInfo;

  /**
   * 沉浸式材质样式枚举。不同的材质样式对应不同的材质参数，主要包括材质的模糊程度、高光效果等。开发者可根据UI场景需要选择合适的材质样式：悬浮按钮和轻量提示建议使用`ULTRA_THIN`或`THIN`样式，常规内容区域和卡片建议使用
   * `REGULAR`样式，需要强调层次感或遮挡背景的场景建议使用`THICK`或`ULTRA_THICK`样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum ImmersiveStyle {
    /**
     * 超薄样式。材质层超薄，具有很强的透明效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THIN = 0,
    /**
     * 薄样式。材质层薄，具有较强的透明效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THIN = 1,
    /**
     * 常规样式。材质层的厚度常规，具有适度的透明和模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    REGULAR = 2,
    /**
     * 厚样式。材质层厚，模糊效果较强。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    THICK = 3,
    /**
     * 超厚样式。材质层超厚，模糊效果很强。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    ULTRA_THICK = 4,

    /**
     * 超薄样式。材质层超薄，具有很强的透明效果。
     * 
     * 适用于[EffectComponent]{@link ./@internal/component/ets/effect_component}。配合对应的ULTRA_THICK_EC_SUB后缀样式枚举一起使用，以实现材质效果绘
     * 制的合并优化。设置在EffectComponent上的材质模糊最终将生效在子组件上。
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
     * 薄样式。材质层薄，具有较强的透明效果。
     * 
     * 适用于EffectComponent。配合对应的THIN_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 常规样式。材质层厚度适中，具有适度的透明与模糊效果。
     * 
     * 适用于EffectComponent。配合对应的REGULAR_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 厚样式。模糊效果强。
     * 
     * 适用于EffectComponent。配合对应的THICK_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 超厚样式。模糊效果很强。
     * 
     * 适用于EffectComponent。配合对应的ULTRA_THICK_EC_SUB后缀样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 超薄样式。材质层超薄，具有很强的透明效果。
     * 
     * 适用于EffectComponent的子组件。配合对应的ULTRA_THIN_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 薄样式。材质层薄，具有较强的透明效果。
     * 
     * 适用于EffectComponent的子组件。配合对应的THIN_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 常规样式。材质层厚度适中，具有适度的透明与模糊效果。
     * 
     * 适用于EffectComponent的子组件。配合对应的REGULAR_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 厚样式。模糊效果强。
     * 
     * 适用于EffectComponent的子组件。配合对应的THICK_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
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
     * 超厚样式。模糊效果很强。
     * 
     * 适用于EffectComponent的子组件。配合对应的ULTRA_THICK_EC样式枚举一起使用，以实现材质效果绘制的合并优化。
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
   * 材质等级枚举，表示设备的算力等级。可通过[uiMaterial.getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel}获取当前设备的材质等级。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enum MaterialLevel {  
    /**
     * 高算力设备的材质等级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    EXQUISITE = 0,
    /**
     * 中算力设备的材质等级。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    GENTLE = 1,
    /**
     * 低算力设备的材质等级。
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
   * 获取全局材质等级，与设备算力相关。在需要根据设备算力等级选择不同材质效果实现方式时，可调用此方法获取材质等级。该配置项由设备定义，不可修改。
   *
   * @returns { MaterialLevel } 返回设备的材质等级，表示设备算力档次，不同等级对应沉浸式材质在当前设备上的不同渲染效果级别。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function getGlobalMaterialLevel(): MaterialLevel;
 	 
  /**
   * 判断当前设备是否支持沉浸式系统材质[ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}。在开发需要沉浸式材质效果的功能时，可先调用此方法判断设备是否支持，以决定是否为组件设
   * 置沉浸式材质。该配置项由设备定义，不可修改。
   *
   * @returns { boolean } 当前设备是否支持ImmersiveMaterial。true表示当前设备支持ImmersiveMaterial，false表示不支持。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function isImmersiveMaterialSupported(): boolean;

  /**
   * 将一个[ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}材质转换为适用于
   * [EffectComponent]{@link ./@internal/component/ets/effect_component}的ImmersiveMaterial材质。与convertToECSubMaterial的区别：
   * 本方法转换后的材质适用于EffectComponent本身，且materialColor、applyShadow、interactive、lightEffect属性不会生效；convertToECSubMaterial转换后的材质
   * 适用于EffectComponent的子组件。两者通常配合使用，以实现材质效果绘制的合并优化。
   * 
   * EffectComponent组件上不生效材质中的[materialColor]{@link uiMaterial.ImmersiveOptions}、
   * [applyShadow]{@link uiMaterial.ImmersiveOptions}、[interactive]{@link uiMaterial.ImmersiveOptions}、
   * [lightEffect]{@link uiMaterial.ImmersiveOptions}属性，经过该接口转换后的材质若配置了上述属性，也将不会生效。
   *
   * @param { uiMaterial.ImmersiveMaterial } material - 待转换的沉浸式材质。注意：转换后材质中的
   *     [materialColor]{@link uiMaterial.ImmersiveOptions}、[applyShadow]{@link uiMaterial.ImmersiveOptions}、
   *     [interactive]{@link uiMaterial.ImmersiveOptions}、[lightEffect]{@link uiMaterial.ImmersiveOptions}属性将不会生效。
   * @returns { uiMaterial.ImmersiveMaterial } 经过转换后适用于
   *     [EffectComponent]{@link ./@internal/component/ets/effect_component}的沉浸式材质。转换后的材质不生效
   *     [materialColor]{@link uiMaterial.ImmersiveOptions}、[applyShadow]{@link uiMaterial.ImmersiveOptions}、
   *     [interactive]{@link uiMaterial.ImmersiveOptions}、[lightEffect]{@link uiMaterial.ImmersiveOptions}属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function convertToECMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;
  /**
   * 将一个[ImmersiveMaterial]{@link uiMaterial.ImmersiveMaterial}材质转换为适用于
   * [EffectComponent]{@link ./@internal/component/ets/effect_component}子组件的ImmersiveMaterial材质。
   *
   * @param { uiMaterial.ImmersiveMaterial } material - 经过转换后适用于
   *     [EffectComponent]{@link ./@internal/component/ets/effect_component}子组件的沉浸式材质，该材质配合EffectComponent使用以实现材质效果绘制的合并
   *     优化。
   * @returns { uiMaterial.ImmersiveMaterial } 经过转换后适用于
   *     [EffectComponent]{@link ./@internal/component/ets/effect_component}子组件的沉浸式材质。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  function convertToECSubMaterial(material: uiMaterial.ImmersiveMaterial) : uiMaterial.ImmersiveMaterial;

  /**
   * 沉浸式材质参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface ImmersiveOptions {
    /**
     * 材质样式。不同样式对应不同的材质参数，影响材质的厚度。
     * 
     * **说明**：该参数仅对支持沉浸式材质的高算力和中算力设备的显示效果生效。
     * 
     * 默认值：uiMaterial.ImmersiveStyle.REGULAR
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
     * 材质层赋色。对于支持沉浸式材质的高算力和中算力设备，若不设置该参数或该参数为undefined，不额外混合纯色效果；若设置该参数为有效颜色值，该参数会为材质层滤镜再混合一层纯色效果，若该颜色为纯不透明的颜色，会遮挡材质层滤镜效
     * 果。对于支持沉浸式材质的低算力设备，若不设置该参数或该参数为undefined，生效低算力设备材质自带的背景色效果；若设置该参数为有效颜色值，该参数作为背景色
     * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}属性值。
     * 
     * **说明**：该参数对支持沉浸式材质的所有档位的算力设备的显示效果生效。
     * 
     * 默认值：undefined
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
     * 设置了材质对象的节点的子树是否自动将颜色适配为材质背景色的反色。
     * 
     * 若为false，则不会自动反色。
     * 
     * 若为true，则当材质样式满足系统定义的反色条件(需要材质参数足够薄)时才会自动反色。具体能反色的材质由系统定义，材质样式为THIN或ULTRA_THIN，且与设置应用的沉浸光感的强弱配置相关。材质越薄、沉浸光感越强，越容易符
     * 合反色材质的要求。
     * 
     * 自动反色能力仅对部分属性接口设置特殊资源（见下表1）值时生效，生效的属性接口包括：
     * 
     * Text组件的[fontColor]{@link TextAttribute#fontColor}，
     * 
     * Button组件的[fontColor]{@link ButtonAttribute#fontColor}，
     * 
     * SymbolGlyph组件的[fontColor]{@link SymbolGlyphAttribute#fontColor(value: Array<ResourceColor>)}，
     * 
     * Image组件的[fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)}，
     * 
     * Search组件的[placeholderColor]{@link SearchAttribute#placeholderColor}、[fontColor]{@link SearchAttribute#fontColor}，
     * [searchIcon]{@link SearchAttribute#searchIcon}中的图标颜色、[cancelButton]{@link SearchAttribute#cancelButton}中的图标颜色、
     * [caretStyle]{@link SearchAttribute#caretStyle}中的光标颜色，[searchButton]{@link SearchAttribute#searchButton} 中的按钮颜色，
     * 
     * TabContent组件的
     * [tabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)}属性使用
     * [BottomTabBarStyle]{@link BottomTabBarStyle}，
     * 
     * Chip组件的[prefixIcon]{@link @ohos.arkui.advanced.Chip:PrefixIconOptions}、suffixIcon属性的
     * [fillColor]{@link @ohos.arkui.advanced.Chip:IconCommonOptions}，
     * [label]{@link @ohos.arkui.advanced.Chip:LabelOptions}属性的[fontColor]{@link @ohos.arkui.advanced.Chip:LabelOptions}
     * ，
     * 
     * ChipGroup组件的[itemStyle]{@link @ohos.arkui.advanced.ChipGroup:ChipItemStyle}的
     * [fontColor]{@link @ohos.arkui.advanced.ChipGroup:ChipItemStyle}，
     * 
     * TextArea组件的[fontColor]{@link TextAreaAttribute#fontColor}、
     * [placeholderColor]{@link TextAreaAttribute#placeholderColor}，
     * 
     * TextInput组件的[fontColor]{@link TextInputAttribute#fontColor}、
     * [placeholderColor]{@link TextInputAttribute#placeholderColor}，
     * 
     * SegmentButton组件的[fontColor]{@link @ohos.arkui.advanced.SegmentButton:SegmentButtonOptions#fontColor}，
     * 
     * Swiper组件的[fontColor]{@link DigitIndicator#fontColor}，
     * 
     * 使用以上接口时，其中的文本和图标颜色会自动反色。
     * 
     * **说明**：该参数仅对支持沉浸式材质的高算力和中算力设备的显示效果生效。
     * 
     * 默认值：false
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
     * 是否添加材质的阴影效果。
     * 
     * 当该参数为true时，材质中的阴影效果固定生效，优先于[shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}通用属性。当该参数为false
     * 时，shadow通用属性生效，材质的阴影效果不生效。
     * 
     * **说明**：该参数对支持沉浸式材质的所有档位的算力设备的显示效果生效。
     * 
     * 默认值：true
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
     * 是否启用交互形变效果。交互形变效果是指组件在用户交互时产生形变的视觉反馈效果。
     * 
     * 当该参数为true时，启用交互形变效果。当该参数为false时，不启用交互形变效果。
     * 
     * **说明**：该参数对支持沉浸式材质的所有档位的算力设备的显示效果生效。
     * 
     * 默认值：false
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    interactive?: boolean;
    /**
     * 光感交互反馈效果参数。传入LightEffectOptions对象时启用光感交互反馈；传入null时显式禁用光感交互反馈效果；不传入时默认为undefined，取决于组件是否默认有交互光感效果。
     * 
     * **说明**：该参数仅对支持沉浸式材质的高算力和中算力设备的显示效果生效。
     * 
     * 默认值：undefined，不设置光感交互反馈效果。
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
   * 沉浸式材质的光感交互反馈配置。光感交互反馈是指组件在用户触摸交互时，材质表面呈现动态光感变化的视觉效果。用于自定义反馈光感的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  interface LightEffectOptions {  
    /**
     * 自定义交互反馈光感的颜色。设置后，交互反馈光感将使用该颜色作为显示颜色，替代默认的白色光感效果。
     * 
     * 默认值：Color.White
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
   * 系统材质选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 23 dynamic
   */
  interface MaterialOptions {
    /**
     * 材质类型。当不需要材质效果时选择MaterialType.NONE，当需要半透明背景效果时选择MaterialType.SEMI_TRANSPARENT。
     * 
     * 默认值：MaterialType.NONE
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
   * 系统材质对象基类。
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
     * Material的构造函数。
     *
     * @param { MaterialOptions } [options] - 系统材质配置选项，包括材质类型。当需要指定材质类型（如半透明效果）时传入此参数，不传入时使用默认材质配置
     *     `{type:MaterialType.NONE}`，即无系统材质效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 23 dynamic
     */
    constructor(options?: MaterialOptions);

    /**
     * 返回空材质对象，用于组件单独关闭沉浸式系统材质效果。使用方式为`uiMaterial.Material.empty`。
     * 
     * 在ENABLE使能模式下，可通过设置`systemMaterial(uiMaterial.Material.empty)`来单独关闭某个组件的沉浸式系统材质效果。如果组件未支持组件级沉浸式系统材质接口，则无法通过此方法关闭材质
     * 效果。
     *
     * @returns { Material } 返回空材质对象，表示无材质效果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    static get empty(): Material;
  }

  /**
   * 沉浸式材质类，继承自[Material]{@link uiMaterial.Material}。
   * 
   * 沉浸式材质根据设备是否支持沉浸式材质和设备算力有分档表现，可通过
   * [uiMaterial.isImmersiveMaterialSupported]{@link uiMaterial.isImmersiveMaterialSupported}判断设备是否支持沉浸式材质，通过
   * [uiMaterial.getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel}获取设备的材质等级。在不支持沉浸式材质的设备上可设置沉浸式材质但无效果。在支持
   * 沉浸式材质的高算力和中算力设备上，通过材质层滤镜属性[materialFilter]{@link CommonMethod#materialFilter}和阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}属性实现材质效果，当
   * [systemMaterial]{@link CommonMethod#systemMaterial}属性生效后，已设置的背景色属性
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}会被恢复为透明色，已设置的边框宽度
   * [borderWidth]{@link CommonMethod#borderWidth}属性会被恢复为无边框效果。在支持沉浸式材质的低算力设备上，通过背景色
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}、边框颜色
   * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}属性实现材质效果。同一材质的效果，会受到系统设置应用中沉浸光感配置项的影响，不同强弱程度
   * 的沉浸光感配置下，材质的参数和效果存在差异。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  class ImmersiveMaterial extends Material {
    /**
     * ImmersiveMaterial的构造函数。创建沉浸式材质对象，仅在支持沉浸式材质的设备上有效果，在不支持沉浸式材质的设备上可设置但无效果，可通过
     * [uiMaterial.isImmersiveMaterialSupported]{@link uiMaterial.isImmersiveMaterialSupported}判断设备是否支持沉浸式材质。在支持沉浸式材质的设备
     * 上，根据设备算力等级有分档表现，可通过[uiMaterial.getGlobalMaterialLevel]{@link uiMaterial.getGlobalMaterialLevel}获取设备的材质等级。创建的
     * ImmersiveMaterial对象需通过组件的[systemMaterial]{@link CommonMethod#systemMaterial}通用属性设置到组件上才能生效。
     *
     * @param { ImmersiveOptions } [options] - 系统材质配置选项，包括材质样式、材质层赋色等。
     *     <br>默认值参考ImmersiveOptions接口各参数的默认值，即
     *     `{style:uiMaterial.ImmersiveStyle.REGULAR, materialColor:undefined, colorInvert:false, applyShadow:true, interactive:false, lightEffect:undefined}`。
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