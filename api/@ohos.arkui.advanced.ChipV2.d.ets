/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';
import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines the size type that can be specified for the **ChipV2** component, such as a normal **ChipV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum ChipV2Size {
  /**
   * Normal **ChipV2**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NORMAL = 'NORMAL',

  /**
   * Small **ChipV2**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SMALL = 'SMALL',
}

/**
 * Defines the selected state types that can be specified for **ChipV2**. This API is used to control how the
 * accessibility service conveys the selected state of the component to users. Different selected state types provide
 * different semantics and user experiences.
 *
 * | Name | Value | Description |
 * | ---- | -- | ---- |
 * | CLICKED | 0 | Click type. The component does not report any selected state to the accessibility service and is used only as a clickable component. This is suitable for scenarios where an action is performed but no state is maintained, such as a regular button. |
 * | CHECKED | 1 | Check type. The component reports its selected state to the accessibility service through the [accessibilityChecked]{@link CommonMethod#accessibilityChecked} attribute. This is suitable for multi-select scenarios, such as tag filtering and attribute selection.|
 * | SELECTED | 2 | Select type. The component reports its selected state to the accessibility service through the [accessibilitySelected]{@link CommonMethod#accessibilitySelected} attribute. This is suitable for scenarios indicating the currently selected item, such as navigation bar tabs and single-select list items.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare enum ChipV2AccessibilitySelectedType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLICKED = 0,

  /**
   * Checked type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CHECKED = 1,

  /**
   * Selected type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SELECTED = 2
}

/**
 * Defines the common icon attribute configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2ImageIconConfig {
  /**
   * Icon image or image address reference.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  src: ResourceStr;

  /**
   * Icon size. Percentage values are not supported. If an invalid value is passed, the default value will be used.
   *
   * Default value:
   *
   * - When **ChipV2Options.size** is **ChipV2Size.SMALL**, the default value is
   * **{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}**.
   * - When **ChipV2Options.size** is **ChipV2Size.NORMAL**, the default value is
   * **{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}**.
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size?: SizeT<LengthMetrics>;

  /**
   * Icon fill color.
   *
   * Default value: **$r('sys.color.chip_usually_icon_color')**. The default value is not applied to non-SVG images.
   *
   * If the value is **undefined**, the default value is used.
   *
   * This attribute takes effect only when the image format is SVG.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fillColor?: ColorMetrics;

  /**
   * Icon fill color when **ChipV2** is activated.
   *
   * Default value: **$r('sys.color.chip_active_icon_color')**. The default value is not applied to non-SVG images.
   *
   * If the value is **undefined**, the default value is used.
   *
   * This attribute takes effect only when the image format is SVG.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedFillColor?: ColorMetrics;

  /**
   * Icon modifier, which is used to set common attributes of the icon. Pass this parameter when you need to dynamically
   * modify icon attributes (such as **opacity** and **objectFit**) through the modifier. If this parameter is not
   * passed or is **undefined**, the modifier is not applied, and the icon uses the default attribute settings.
   *
   * Default value: **undefined**, meaning the modifier is not applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  modifier?: ImageModifier;
}

/**
 * Defines the base class of icon images.
 *
 * This API inherits from [ChipV2Icon]{@link ChipV2Icon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2ImageIcon extends ChipV2Icon {
  /**
   * Icon image or image address reference.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public src: ResourceStr;

  /**
   * Icon size. Percentage values are not supported. If an invalid value is passed, the default value will be used.
   *
   * Default value:
   *
   * - When **ChipV2Options.size** is **ChipV2Size.SMALL**, the default value is
   * **{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}**.
   * - When **ChipV2Options.size** is **ChipV2Size.NORMAL**, the default value is
   * **{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}**.
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public size?: SizeT<LengthMetrics>;

  /**
   * Icon fill color.
   *
   * Default value: **$r('sys.color.chip_usually_icon_color')**. The default value is not applied to non-SVG images.
   *
   * If the value is **undefined**, the default value is used.
   *
   * This attribute takes effect only when the image format is SVG.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fillColor?: ColorMetrics;

  /**
   * Icon fill color when **ChipV2** is activated.
   *
   * Default value: **$r('sys.color.chip_active_icon_color')**. The default value is not applied to non-SVG images.
   *
   * If the value is **undefined**, the default value is used.
   *
   * This attribute takes effect only when the image format is SVG.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedFillColor?: ColorMetrics;

  /**
   * Icon modifier, which is used to set common attributes of the icon. Pass this parameter when you need to dynamically
   * modify icon attributes (such as **opacity** and **objectFit**) through the modifier. If this parameter is not
   * passed or is **undefined**, the modifier is not applied, and the icon uses the default attribute settings.
   *
   * Default value: **undefined**, meaning the modifier is not applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public modifier?: ImageModifier;

  /**
   * A constructor used to create a **ChipV2ImageIcon** object.
   *
   * @param { ChipV2ImageIconConfig } config - Common icon attribute configuration, which is used to set the basic
   *     display attributes of the image icon, including configuration options such as **src**, **size**, **fillColor**,
   *     **activatedFillColor**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2ImageIconConfig);
}

/**
 * Defines the attribute configuration of the suffix icon.
 *
 * This API inherits from [ChipV2ImageIconConfig]{@link ChipV2ImageIconConfig} and
 * [ChipV2AccessibilityConfig]{@link ChipV2AccessibilityConfig}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2SuffixImageIconConfig extends ChipV2ImageIconConfig, ChipV2AccessibilityConfig {
  /**
   * Callback for the suffix icon tap event. Pass in this callback when you need to bind a tap event to the suffix icon
   * and perform a custom operation (such as triggering a specific function or opening a dialog box). This callback is
   * invoked when the suffix icon is tapped.
   *
   * Default value: **undefined**, meaning no suffix icon event is set. When **undefined** or no value is passed,
   * tapping the suffix icon triggers no custom response.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: VoidCallback;
}

/**
 * Defines the suffix icon class.
 *
 * This API inherits from [ChipV2ImageIcon]{@link ChipV2ImageIcon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2SuffixImageIcon extends ChipV2ImageIcon {
  /**
   * Accessibility level. This attribute controls whether the suffix icon can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the current component is converted to **"yes"**.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * Accessibility text. When a component has no text attribute, the screen reader does not read it aloud when this
   * component is selected, making it difficult for users to identify the currently selected component. You can set
   * accessibility text for such components so that the screen reader reads the text aloud, helping users identify the
   * selected component.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description. This description is used to explain the current component to users in detail. You should
   * provide comprehensive text descriptions to help users understand the actions to be performed and their
   * consequences, especially when these consequences cannot be directly inferred from the component's attributes and
   * accessibility text. When a component that is selected has both a text attribute and an accessibility description
   * attribute, the system first reads the component's text attribute, followed by the accessibility description.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Callback for the suffix icon tap event. This callback is invoked when the suffix icon is tapped.
   *
   * Default value: no suffix icon event is set.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: VoidCallback;

  /**
   * A constructor used to create a **ChipV2SuffixImageIcon** object.
   *
   * @param { ChipV2SuffixImageIconConfig } config - Attribute configuration of the suffix icon, which is used to set
   *     the display attributes, accessibility functions, and tap events of the suffix Image icon. This parameter
   *     inherits from **ChipV2ImageIconConfig** and **ChipV2AccessibilityConfig** and includes configuration options
   *     such as **src**, **size**, **accessibilityLevel**, and **action**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SuffixImageIconConfig);
}

/**
 * Defines the base class of icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2Icon {
  /**
   * A constructor used to create a **ChipV2Icon** object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor();
}

/**
 * Defines the attribute configuration of the prefix icon.
 *
 * This API inherits from [ChipV2ImageIconConfig]{@link ChipV2ImageIconConfig}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2PrefixImageIconConfig extends ChipV2ImageIconConfig {}

/**
 * Defines the prefix icon class.
 *
 * This API inherits from [ChipV2ImageIcon]{@link ChipV2ImageIcon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2PrefixImageIcon extends ChipV2ImageIcon {
  /**
   * A constructor used to create a **ChipV2PrefixImageIcon** object.
   *
   * @param { ChipV2PrefixImageIconConfig } config - Attribute configuration of the prefix icon, which is used to set
   *     the display attributes of the prefix Image icon. This parameter inherits from **ChipV2ImageIconConfig** and
   *     includes configuration options such as **src**, **size**, and **fillColor**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2PrefixImageIconConfig);
}

/**
 * Defines the accessibility attribute configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2AccessibilityConfig {
  /**
   * Accessibility level. This attribute controls whether the component can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the current component is converted to **"yes"**.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * When the value is **undefined**, the default value is used.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility text. When a component has no text attribute, the screen reader does not read it aloud when this
   * component is selected, making it difficult for users to identify the currently selected component. You can set
   * accessibility text for such components so that the screen reader reads the text aloud, helping users identify the
   * selected component.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description. This description is used to explain the current component to users in detail. You should
   * provide comprehensive text descriptions to help users understand the actions to be performed and their
   * consequences, especially when these consequences cannot be directly inferred from the component's attributes and
   * accessibility text. When a component that is selected has both a text attribute and an accessibility description
   * attribute, the system first reads the component's text attribute, followed by the accessibility description.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines the accessibility attribute class of **ChipV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2Accessibility {
  /**
   * Accessibility level. This attribute controls whether the component can be recognized by accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the current component is converted to **"yes"**.
   *
   * **"yes"**: The current component can be recognized by accessibility services.
   *
   * **"no"**: The current component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The current component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * Accessibility text. When a component has no text attribute, the screen reader does not read it aloud when this
   * component is selected, making it difficult for users to identify the currently selected component. You can set
   * accessibility text for such components so that the screen reader reads the text aloud, helping users identify the
   * selected component.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Accessibility description. This description is used to explain the current component to users in detail. You should
   * provide comprehensive text descriptions to help users understand the actions to be performed and their
   * consequences, especially when these consequences cannot be directly inferred from the component's attributes and
   * accessibility text. When a component that is selected has both a text attribute and an accessibility description
   * attribute, the system first reads the component's text attribute, followed by the accessibility description.
   *
   * Default value: empty string.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * A constructor used to create a **ChipV2Accessibility** object.
   *
   * @param { ChipV2AccessibilityConfig } config - Accessibility attribute configuration of the component, including
   *     configuration options such as **accessibilityText**, **accessibilityDescription**, and **accessibilityLevel**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2AccessibilityConfig);
}

/**
 * Defines the functional attribute configuration for the close icon of the **ChipV2** component, including
 * accessibility attribute.
 *
 * This API inherits from [ChipV2AccessibilityConfig]{@link ChipV2AccessibilityConfig}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2CloseConfig extends ChipV2AccessibilityConfig {
  /**
   * Size of the default close icon of the **ChipV2** component. Percentage values are not supported. If a percentage
   * value is passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_small_font_size')`.
   *
   * When **size** is not **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_normal_font_size')`.
   *
   * Unit: fp
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;
}

/**
 * Defines the functional attribute class for the close icon of the **ChipV2** component, including accessibility
 * attribute.
 *
 * This API inherits from [ChipV2Accessibility]{@link ChipV2Accessibility}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2CloseIcon extends ChipV2Accessibility {
  /**
   * Size of the default close icon of the **ChipV2** component. Percentage values are not supported. If a percentage
   * value is passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_small_font_size')`.
   *
   * When **size** is not **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_normal_font_size')`.
   *
   * Unit: fp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * A constructor used to create a **ChipV2CloseIcon** object.
   *
   * @param { ChipV2CloseConfig } config - Close icon configuration, which is used to customize the size and
   *     accessibility attribute of the close icon. This parameter inherits from **ChipV2AccessibilityConfig** and
   *     includes configuration options such as **fontSize**, **accessibilityText**, and **accessibilityDescription**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2CloseConfig);
}

/**
 * Defines the attribute configuration of the symbol icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface ChipV2SymbolIconConfig {
  /**
   * Icon settings in the inactive state.
   *
   * Default value: no prefix icon or suffix icon is displayed. When the value is **undefined**, the default value is
   * used.
   *
   * Modifying the animation type using [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} and setting the animation effect using
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Icon settings in the active state.
   *
   * Default value: **undefined**, which means no prefix icon or suffix icon is displayed. When the value is
   * **undefined**, the default value is used.
   *
   * Modifying the animation type using [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} and setting the animation effect using
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} are not supported.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines the symbol icon class.
 *
 * This API inherits from [ChipV2Icon]{@link ChipV2Icon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export abstract class ChipV2SymbolIcon extends ChipV2Icon {
  /**
   * Icon settings in the inactive state.
   *
   * Default value: **undefined**, which means no prefix icon or suffix icon is displayed. When the value is
   * **undefined**, the default value is used.
   *
   * Modifying the animation type using [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} and setting the animation effect using
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} are not supported.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public normal?: SymbolGlyphModifier;

  /**
   * Icon settings in the active state.
   *
   * Default value: **undefined**, which means no prefix icon or suffix icon is displayed. When the value is
   * **undefined**, the default value is used.
   *
   * Modifying the animation type using [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} and setting the animation effect using
   * [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} are not supported.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activated?: SymbolGlyphModifier;

  /**
   * A constructor used to create a **ChipV2SymbolIcon** object.
   *
   * @param { ChipV2SymbolIconConfig } config - Attribute configuration of the symbol icon, which is used to set the
   *     display attributes of the symbol icon in different states, including configuration options such as **normal**
   *     and **activated**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SymbolIconConfig);
}

/**
 * Defines the attribute configuration of the prefix symbol icon.
 *
 * Inherits from [ChipV2SymbolIconConfig]{@link ChipV2SymbolIconConfig}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2PrefixSymbolIconConfig extends ChipV2SymbolIconConfig {}

/**
 * Defines the prefix symbol icon class.
 *
 * This API inherits from [ChipV2SymbolIcon]{@link ChipV2SymbolIcon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2PrefixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * A constructor used to create a **ChipV2PrefixSymbolIcon** object.
   *
   * @param { ChipV2PrefixSymbolIconConfig } config - Attribute configuration of the prefix symbol icon, which is used
   *     to set the display attributes of the prefix symbol icon. This parameter inherits from
   *     **ChipV2SymbolIconConfig** and includes configuration options such as **normal** and **activated**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2PrefixSymbolIconConfig);
}

/**
 * Defines the attribute configuration of the suffix symbol icon.
 *
 * This API inherits from [ChipV2SymbolIconConfig]{@link ChipV2SymbolIconConfig}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2SuffixSymbolIconConfig extends ChipV2SymbolIconConfig {
  /**
   * Accessibility attribute in the inactive state.
   *
   * Default value: **undefined**, meaning no content is read aloud.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  normalAccessibility?: ChipV2AccessibilityConfig;

  /**
   * Accessibility attribute in the active state.
   *
   * Default value: **undefined**, meaning no content is read aloud.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedAccessibility?: ChipV2AccessibilityConfig;

  /**
   * Callback for the suffix icon tap event, which is triggered when the suffix icon is tapped.
   *
   * Default value: no suffix icon event is set.
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: VoidCallback;
}

/**
 * Defines the suffix symbol icon class.
 *
 * This API inherits from [ChipV2SymbolIcon]{@link ChipV2SymbolIcon}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2SuffixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * Accessibility attribute in the inactive state.
   *
   * Default value: **undefined**, meaning no content is read aloud.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public normalAccessibility?: ChipV2Accessibility;

  /**
   * Accessibility attribute in the active state.
   *
   * Default value: **undefined**, meaning no content is read aloud.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedAccessibility?: ChipV2Accessibility;

  /**
   * Callback for the suffix icon tap event, which is triggered when the suffix icon is tapped.
   *
   * Default value: no suffix icon event is set.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public action?: VoidCallback;

  /**
   * A constructor used to create a **ChipV2SuffixSymbolIcon** object.
   *
   * @param { ChipV2SuffixSymbolIconConfig } config - Attribute configuration of the suffix symbol icon, which is used
   *     to set the display attributes and accessibility features of the suffix symbol icon. This parameter inherits
   *     from **ChipV2SymbolIconConfig** and includes configuration options such as **normal**, **activated**,
   *     **normalAccessibility**, **activatedAccessibility**, and **action**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2SuffixSymbolIconConfig);
}

/**
 * Defines the margin configuration between the text and the left and right icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LabelMarginConfig {
  /**
   * Margin between the text and the left icon. Percentage values are not supported. If a percentage value is passed in,
   * the default value is used.
   *
   * Default values:
   *
   * When there is no left icon, the default value of **left** is **0**.
   *
   * When there is a left icon and **size** is **ChipV2Size.SMALL**, the default value of **left** is **4**.
   *
   * When there is a left icon and **size** is **ChipV2Size.NORMAL**, the default value of **left** is **6**.
   *
   * Unit: vp
   *
   * If the value is out of range, the default value is used.
   *
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  left?: LengthMetrics;

  /**
   * Margin between the text and the right icon. Percentage values are not supported. If a percentage value is passed
   * in, the default value is used.
   *
   * Default values:
   *
   * When there is no right icon, the default value of **right** is **0**.
   *
   * When there is a right icon and **size** is **ChipV2Size.SMALL**, the default value of **right** is **4**.
   *
   * When there is a right icon and **size** is **ChipV2Size.NORMAL**, the default value of **right** is **6**.
   *
   * Unit: vp
   *
   * If the value is out of range, the default value is used.
   *
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  right?: LengthMetrics;
}

/**
 * Defines the margin configuration between the localized text and the left and right icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LocalizedLabelMarginConfig {
  /**
   * Margin between the text and the start-side icon. Percentage values are not supported. If a percentage value is
   * passed in, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value of **start** is:
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`.
   *
   * When **size** is **ChipV2Size.NORMAL**, the default value of **start** is:
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`.
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
   *
   * If the value is out of range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  start?: LengthMetrics;

  /**
   * Margin between the text and the end-side icon. Percentage values are not supported. If a percentage value is passed
   * in, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value of **end** is:
   *
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`.
   *
   * When **size** is **ChipV2Size.NORMAL**, the default value of **end** is:
   *
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`.
   *
   * Unit: vp
   *
   * Value range: [0, +∞)
   *
   * If the value is out of range, the default value is used.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  end?: LengthMetrics;
}

/**
 * Defines the text attribute configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipV2LabelConfig {
  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text: string;

  /**
   * Font size. Percentage values are not supported. When a percentage value is passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is **$r('sys.float.chip_small_font_size')**.
   *
   * In other cases, the default value is **$r('sys.float.chip_normal_font_size')**
   *
   * Unit: fp
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;

  /**
   * Font color.
   *
   * Default value: **$r('sys.color.chip_font_color')**
   *
   * When the value is **undefined**, the default value is used.
   *
   * When the value is invalid, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontColor?: ColorMetrics;

  /**
   * Font color when **ChipV2** is activated.
   *
   * Default value: **$r('sys.color.chip_activated_fontcolor')**
   *
   * When the value is **undefined**, the default value is used.
   *
   * When the value is invalid, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedFontColor?: ColorMetrics;

  /**
   * Font family.
   *
   * Default value: **"HarmonyOS Sans"**
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontFamily?: string;

  /**
   * Spacing between the text and the left/right icons.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is **{ left: 4, right: 4 }**.
   *
   * When **size** is **ChipV2Size.NORMAL**, the default value is **{ left: 6, right: 6 }**.
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  labelMargin?: ChipV2LabelMarginConfig;

  /**
   * Spacing between the localized text and the left/right icons.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, default value:
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`.
   *
   * When **size** is **ChipV2Size.NORMAL**, default value:
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`.
   *
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * Text modifier, which is used to set common text attributes. Pass this parameter when you need to dynamically modify
   * text attributes (such as **fontWeight** and **fontStyle**) through the modifier. When no value or **undefined** is
   * passed in, the modifier is not applied and the text uses default attribute settings.
   *
   * Default value: **undefined**, meaning that the modifier is not applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  modifier?: TextModifier;
}

/**
 * Defines the text attribute class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2Label {
  /**
   * Text content.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public text: string;

  /**
   * Font size. Percentage values are not supported. When a percentage value is passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is **$r('sys.float.chip_small_font_size')**.
   *
   * In other cases, the default value is **$r('sys.float.chip_normal_font_size')**
   *
   * Unit: fp
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * Font color.
   *
   * Default value: **$r('sys.color.chip_font_color')**
   *
   * When the value is **undefined**, the default value is used.
   *
   * When the value is invalid, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontColor?: ColorMetrics;

  /**
   * Font color when **ChipV2** is activated.
   *
   * Default value: **$r('sys.color.chip_activated_fontcolor')**
   *
   * When the value is **undefined**, the default value is used.
   *
   * When the value is invalid, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedFontColor?: ColorMetrics;

  /**
   * Font family.
   *
   * Default value: **"HarmonyOS Sans"**
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontFamily?: string;

  /**
   * Spacing between the text and the left/right icons.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, the default value is **{ left: 4, right: 4 }**.
   *
   * When **size** is **ChipV2Size.NORMAL**, the default value is **{ left: 6, right: 6 }**.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public labelMargin?: ChipV2LabelMarginConfig;

  /**
   * Spacing between the localized text and the left/right icons.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.SMALL**, default value:
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`.
   *
   * When **size** is **ChipV2Size.NORMAL**, default value:
   *
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`.
   *
   * When the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;

  /**
   * Text modifier, which is used to set common text attributes. Pass this parameter when you need to dynamically modify
   * text attributes (such as **fontWeight** and **fontStyle**) through the modifier. When no value or **undefined** is
   * passed in, the modifier is not applied and the text uses default attribute settings.
   *
   * Default value: **undefined**, meaning that the modifier is not applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public modifier?: TextModifier;

  /**
   * A constructor used to create a **ChipV2Label** object.
   *
   * @param { ChipV2LabelConfig } config - Text attribute configuration, which is used to set the text display
   *     attributes of **ChipV2**, including configuration options such as **text**, **fontSize**, **fontColor**,
   *     **activatedFontColor**, and **fontFamily**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipV2LabelConfig);
}

/**
 * Defines the configuration API of **ChipV2** options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface IChipV2OptionsConfig {
  /**
   * Text of **ChipV2**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  label: ChipV2Label;

  /**
   * Prefix icon of **ChipV2**.
   *
   * Default value: no prefix icon is displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  prefixIcon?: ChipV2Icon;

  /**
   * Suffix icon of **ChipV2**.
   *
   * Default value: no suffix icon is displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * Note: When a value is passed in **suffixIcon**, the **allowClose** attribute does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  suffixIcon?: ChipV2Icon;

  /**
   * Whether to display the close icon.
   *
   * When a value is passed in **suffixIcon**, **allowClose** does not take effect. When no value is passed in
   * **suffixIcon**, **allowClose** determines whether the close icon is displayed.
   *
   * Default value: **true**
   *
   * **true**: Display the close icon. **false**: The close icon is not displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  allowClose?: boolean;

  /**
   * Configuration of the close icon, including accessibility configuration. Set this attribute when you need to
   * customize the size or accessibility of the close icon.
   *
   * Default values:
   *
   * - Default size: When **size** is **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_small_font_size')`.
   * In other cases, the default value is `$r('sys.float.chip_normal_font_size')`.
   * - Default accessibility: No accessibility description.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  closeIcon?: ChipV2CloseIcon;

  /**
   * Whether **ChipV2** is available.
   *
   * Default value: **true**
   *
   * **true**: **ChipV2** is available. **false**: **ChipV2** is unavailable.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enabled?: boolean;

  /**
   * Whether **ChipV2** is activated.
   *
   * Default value: **false**
   *
   * **true**: **ChipV2** is activated. **false**: **ChipV2** is not activated.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activated?: boolean;

  /**
   * Background color of **ChipV2**.
   *
   * Default value: **$r('sys.color.chip_background_color')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * If the value is invalid, the background color is transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundColor?: ColorMetrics;

  /**
   * Background color of **ChipV2** when activated.
   *
   * Default value: **$r('sys.color.chip_container_activated_color')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * If the value is invalid, the background color is transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundColor?: ColorMetrics;

  /**
   * Rounded corner radius of the **ChipV2** background. Percentage values are not supported. If a percentage value is
   * passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.NORMAL**, the default **borderRadius** is
   * **$r('sys.float.chip_border_radius_normal')**.
   *
   * When **size** is **ChipV2Size.SMALL**, the default **borderRadius** is
   * **$r('sys.float.chip_border_radius_small')**.
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  borderRadius?: LengthMetrics;

  /**
   * Size of **ChipV2**.
   *
   * Default value: **ChipV2Size.NORMAL**
   *
   * The **SizeT<LengthMetrics>** type does not support percentage setting. If an invalid value is passed, the default
   * value will be used.
   *
   * **NOTE**
   *
   * [Aging-friendly design](docroot://ui/arkui-support-for-aging-adaptation.md) does not take effect when **size**
   * specifies a specific width and height, except when **size** is set to **{ height: 0, width: 0 }**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * Layout direction.
   *
   * Default value: **Direction.Auto**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction?: Direction;

  /**
   * Accessibility description of the **ChipV2** component. This description is used to explain the current component to
   * users in detail. You should provide a thorough text description for this attribute to help users understand the
   * operation to be performed and its possible results, especially when such results cannot be directly inferred from
   * the component's attributes and accessibility text. When a component that is selected has both a text attribute and
   * an accessibility description attribute, the system first reads the text attribute, followed by the content of the
   * accessibility description attribute.
   *
   * Default value: empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the **ChipV2** component. This parameter controls whether the component can be recognized by
   * accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the component is converted to **"yes"**.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Selected state type of the **ChipV2** component.
   *
   * Default value: When the **activated** attribute is **true** but **accessibilitySelectedType** is not specified, the
   * **CHECKED** type is used by default. When the **activated** attribute is **false** or not set, the **CLICKED** type
   * is used by default.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Maximum font scale factor for the text and icons of the **ChipV2** component.
   *
   * Value range: [1, +∞)
   *
   * If the set value is less than 1, the value **1** is used. Abnormal values do not take effect by default.
   *
   * Default value: **1**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * Minimum font scale factor for the text and icons of the **ChipV2** component.
   *
   * Value range: [0, 1]
   *
   * If the set value is less than 0, the value **0** is used. If the set value is greater than 1, the value **1** is
   * used. Abnormal values do not take effect by default.
   *
   * Default value: **1**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * Padding of the **ChipV2** component.
   *
   * Default values:
   *
   * - When **size** is **ChipV2Size.SMALL** and **activated** is **true**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is **ChipV2Size.SMALL** and **activated** is **false**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is not **ChipV2Size.SMALL** and **activated** is **true**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is not **ChipV2Size.SMALL** and **activated** is **false**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  padding?: LocalizedPadding;

  /**
   * Uniformly sets the font size of the text and icons of the **ChipV2** component. Percentage values are not
   * supported. If a percentage value is passed, the default value is used.
   *
   * The priority of this **fontSize** is lower than that of the **fontSize** attributes in **prefixIcon**, **label**,
   * **suffixIcon**, and **closeIcon**.
   *
   * Default values:
   *
   * - When **size** is **ChipV2Size.SMALL**, the default text value is `$r('sys.float.chip_small_font_size')`, and the
   * default icon value is `$r('sys.float.chip_small_icon_size')`.
   * - In other cases, the default text value is `$r('sys.float.chip_normal_font_size')`, and the default icon value is
   * `$r('sys.float.chip_normal_icon_size')`.
   *
   * Unit: fp
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  fontSize?: LengthMetrics;

  /**
   * System material style of the component. Different materials have different effects, which can affect the component'
   * s [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth},
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   *
   * Default value: **undefined**, meaning no material style is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * System material style of the activated component. Different materials have different effects, which can affect the
   * component's [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth},
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   *
   * Default value: **undefined**, meaning no material style is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Callback for the default close icon tap event.
   *
   * When **allowClose** is **true** and no value is passed to **suffixIcon**, this callback is invoked when the close
   * icon is tapped.
   *
   * Default value: The callback is not executed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClose?: VoidCallback;

  /**
   * Callback for the **ChipV2** tap event.
   *
   * When **enabled** is **true**, tapping **ChipV2** triggers the tap event. When **enabled** is **false**, the tap
   * event is not triggered.
   *
   * Default value: The callback is not executed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClicked?: Callback<void>;
}

/**
 * Defines the style and specific style parameters of the **ChipV2** component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipV2Options {
  /**
   * Text of **ChipV2**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public label: ChipV2Label;

  /**
   * Prefix icon of **ChipV2**.
   *
   * Default value: no prefix icon is displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * For the symbol icon, the default **fontColor** values are as follows: **normalFontColor**:
   * `[$r('sys.color.chip_usually_icon_color')]`, **activatedFontColor**: `[$r('sys.color.chip_active_icon_color')]`.
   * The default **fontSize** is 16.
   *
   * For the image icon, the default **fillColor** is `$r('sys.color.chip_usually_icon_color')`, and the default
   * **activatedFillColor** is `$r('sys.color.chip_active_icon_color')`. The color parsing of **fillColor** and
   * **activatedFillColor** is consistent with that of the **Image** component. The **fillColor** and
   * **activatedFillColor** attributes take effect only when the image format is SVG; for non-SVG images, the default
   * values are not applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public prefixIcon?: ChipV2Icon;

  /**
   * Suffix icon of **ChipV2**.
   *
   * Default value: no suffix icon is displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * Note: When a value is passed in **suffixIcon**, the **allowClose** attribute does not take effect.
   *
   * For the symbol icon, the default **fontColor** values are as follows: **normalFontColor**:
   * `[$r('sys.color.chip_usually_icon_color')]`, **activatedFontColor**: `[$r('sys.color.chip_active_icon_color')]`.
   * The default **fontSize** is 16.
   *
   * For the image icon, the default **fillColor** is `$r('sys.color.chip_usually_icon_color')`, and the default
   * **activatedFillColor** is `$r('sys.color.chip_active_icon_color')`. The color parsing of **fillColor** and
   * **activatedFillColor** is consistent with that of the **Image** component. The **fillColor** and
   * **activatedFillColor** attributes take effect only when the image format is SVG.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public suffixIcon?: ChipV2Icon;

  /**
   * Whether to display the close icon.
   *
   * When a value is passed in **suffixIcon**, **allowClose** does not take effect. When no value is passed in
   * **suffixIcon**, **allowClose** determines whether the close icon is displayed.
   *
   * Default value: **true**
   *
   * **true**: Display the close icon. **false**: The close icon is not displayed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public allowClose?: boolean;

  /**
   * Configuration of the close icon, including accessibility configuration. Set this attribute when you need to
   * customize the size or accessibility of the close icon.
   *
   * Default values:
   *
   * - Default size: When **size** is **ChipV2Size.SMALL**, the default value is `$r('sys.float.chip_small_font_size')`.
   * In other cases, the default value is `$r('sys.float.chip_normal_font_size')`.
   * - Default accessibility: No accessibility description.
   *
   * **fontSize** does not support percentage setting. If an invalid value is passed, the default value will be used.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public closeIcon?: ChipV2CloseIcon;

  /**
   * Whether **ChipV2** is available.
   *
   * Default value: **true**
   *
   * **true**: **ChipV2** is available. **false**: **ChipV2** is unavailable.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public enabled?: boolean;

  /**
   * Whether **ChipV2** is activated.
   *
   * Default value: **false**
   *
   * **true**: **ChipV2** is activated. **false**: **ChipV2** is not activated.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activated?: boolean;

  /**
   * Background color of **ChipV2**.
   *
   * Default value: **$r('sys.color.chip_background_color')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * If the value is invalid, the background color is transparent.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * Background color of **ChipV2** when activated.
   *
   * Default value: **$r('sys.color.chip_container_activated_color')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * If the value is invalid, the background color is transparent.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedBackgroundColor?: ColorMetrics;

  /**
   * Rounded corner radius of the **ChipV2** background. Percentage values are not supported. If a percentage value is
   * passed, the default value is used.
   *
   * Default values:
   *
   * When **size** is **ChipV2Size.NORMAL**, the default **borderRadius** is
   * **$r('sys.float.chip_border_radius_normal')**.
   *
   * When **size** is **ChipV2Size.SMALL**, the default **borderRadius** is
   * **$r('sys.float.chip_border_radius_small')**.
   *
   * Unit: vp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public borderRadius?: LengthMetrics;

  /**
   * Size of **ChipV2**.
   *
   * Default value: **ChipV2Size.NORMAL**
   *
   * The **SizeT<LengthMetrics>** type does not support percentage setting. If an invalid value is passed, the default
   * value will be used.
   *
   * **NOTE**
   *
   * [Aging-friendly design](docroot://ui/arkui-support-for-aging-adaptation.md) does not take effect when **size**
   * specifies a specific width and height, except when **size** is set to **{ height: 0, width: 0 }**.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;
  /**
   * Layout direction.
   *
   * Default value: **Direction.Auto**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public direction?: Direction;

  /**
   * Accessibility description of the **ChipV2** component. This description is used to explain the current component to
   * users in detail. You should provide a thorough text description for this attribute to help users understand the
   * operation to be performed and its possible results, especially when such results cannot be directly inferred from
   * the component's attributes and accessibility text. When the component that is selected has both a text attribute
   * and an accessibility description attribute, the system first reads the text attribute, followed by the content of
   * the accessibility description attribute.
   *
   * Default value: empty string.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the **ChipV2** component. This parameter controls whether the component can be recognized by
   * accessibility services.
   *
   * Supported values:
   *
   * **"auto"**: The attribute value of the component is converted to **"yes"**.
   *
   * **"yes"**: The component can be recognized by accessibility services.
   *
   * **"no"**: The component cannot be recognized by accessibility services.
   *
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility
   * services.
   *
   * Default value: **"auto"**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * Selected state type of the **ChipV2** component.
   *
   * Default value: When the **activated** attribute is **true** but **accessibilitySelectedType** is not specified, the
   * **CHECKED** type is used by default. When the **activated** attribute is **false** or not set, the **CLICKED** type
   * is used by default.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Maximum font scale factor for the text and icons of the **ChipV2** component.
   *
   * Value range: [1, +∞)
   *
   * If the set value is less than 1, the value **1** is used. Abnormal values do not take effect by default.
   *
   * Default value: **1**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public maxFontScale?: number | Resource;
  /**
   * Minimum font scale factor for the text and icons of the **ChipV2** component.
   *
   * Value range: [0, 1]
   *
   * If the set value is less than 0, the value **0** is used. If the set value is greater than 1, the value **1** is
   * used. Abnormal values do not take effect by default.
   *
   * Default value: **1**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public minFontScale?: number | Resource;
  /**
   * Padding of the **ChipV2** component.
   *
   * Default values:
   *
   * - When **size** is **ChipV2Size.SMALL** and **activated** is **true**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is **ChipV2Size.SMALL** and **activated** is **false**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is not **ChipV2Size.SMALL** and **activated** is **true**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   * - When **size** is not **ChipV2Size.SMALL** and **activated** is **false**, the default value is:
   * `{ start: LengthMetrics.resource('sys.float.chip_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public padding?: LocalizedPadding;

  /**
   * Uniformly sets the font size of the text and icons of the **ChipV2** component. Percentage values are not
   * supported. If a percentage value is passed, the default value is used.
   *
   * The priority of this **fontSize** is lower than that of the **fontSize** attributes in **prefixIcon**, **label**,
   * **suffixIcon**, and **closeIcon**.
   *
   * Default values:
   *
   * - When **size** is **ChipV2Size.SMALL**, the default text value is `$r('sys.float.chip_small_font_size')`, and the
   * default icon value is `$r('sys.float.chip_small_icon_size')`.
   * - In other cases, the default text value is `$r('sys.float.chip_normal_font_size')`, and the default icon value is
   * `$r('sys.float.chip_normal_icon_size')`.
   *
   * Unit: fp
   *
   * If the value is **undefined**, the default value is used.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * System material style of the component. Different materials have different effects, which can affect the component'
   * s [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth},
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   *
   * Default value: **undefined**, meaning no material style is applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * System material style of the activated component. Different materials have different effects, which can affect the
   * component's [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [borderColor]{@link CommonMethod#borderColor}, [borderWidth]{@link CommonMethod#borderWidth},
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} effect, and
   * [materialFilter]{@link CommonMethod#materialFilter} effect.
   *
   * Default value: **undefined**, meaning no material style is applied.
   *
   * **Decorator:** @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Callback for the default close icon tap event.
   *
   * When **allowClose** is **true** and no value is passed to **suffixIcon**, this callback is invoked when the close
   * icon is tapped.
   *
   * Default value: The callback is not executed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  public onClose?: VoidCallback;

  /**
   * Callback for the **ChipV2** tap event.
   *
   * When **enabled** is **true**, tapping **ChipV2** triggers the tap event. When **enabled** is **false**, the tap
   * event is not triggered.
   *
   * Default value: The callback is not executed.
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  public onClicked?: Callback<void>;

  /**
   * A constructor used to create a **ChipV2Options** object.
   *
   * @param { IChipV2OptionsConfig } config - Style configuration of **ChipV2**, which is used to customize the
   *     appearance and behavior of the **ChipV2** component, including configuration options such as **label**,
   *     **prefixIcon**, **suffixIcon**, **allowClose**, **activated**, and **backgroundColor**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: IChipV2OptionsConfig);
}

/**
 * The **ChipV2** component is a chip component that delivers rich styles and interaction capabilities. It provides
 * features such as prefix icons, suffix icons, active states, and close buttons, supports the symbol and image icon
 * types, and offers comprehensive accessibility capabilities. This component is suitable for scenarios such as search
 * history, email recipient lists, tag selection, filters, and contact display.
 *
 * This component is implemented based on
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2). Compared
 * with [state management V1](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v1),
 * state management V2 delivers enhanced capabilities for deep observation and management of data objects, and is no
 * longer limited to the component level. With state management V2, you can control component data and state more
 * flexibly, achieving more efficient UI refresh.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can only be used in the stage model.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ChipV2 {
  /**
   * Parameters of the **ChipV2** component, which are used to customize the appearance and behavior of the **ChipV2**
   * component, including configuration options such as **label**, **prefixIcon**, **suffixIcon**, **allowClose**,
   * **activated**, **backgroundColor**, and **size**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Require
  @Param
  readonly chipV2Options: ChipV2Options;

  /**
   * Constructs the UI structure of the advanced **ChipV2** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  build(): void;
}
