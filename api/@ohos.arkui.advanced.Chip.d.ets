/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
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

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Enumerates the size types that can be specified for the **Chip** component, such as normal and small.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */

export declare enum ChipSize {

  /**
   * Normal-sized chip for regular display scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NORMAL = "NORMAL",

  /**
   * Small-sized chip for compact layout scenarios.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  SMALL = "SMALL"
}

/**
 * Defines the selected state types that can be specified for **Chip**. This API is used to control how the 
 * accessibility service conveys the component's selected state to users. Different selected state types provide 
 * different semantics and user experiences.
 * 
 * | Name| Value| Description|
 * | ---- | -- | ---- |
 * | CLICKED | 0 | Click type. The chip acts as a regular clickable component, without reporting any selected state to accessibility services. Use this type when the chip triggers an action but does not maintain a selected state.|
 * | CHECKED | 1 | Checkbox type. The chip reports its selected state to accessibility services using the [accessibilityChecked]{@link CommonMethod#accessibilityChecked} attribute. Use this type for multi-select scenarios, such as tag filtering and attribute selection.|
 * | SELECTED | 2 | Radio type. The chip reports its selected state to accessibility services using the [accessibilitySelected]{@link CommonMethod#accessibilitySelected} attribute. Use this type for single-select scenarios, such as navigation bar tabs and radio buttons.|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export declare enum AccessibilitySelectedType {
  /**
   * Click type. The chip acts as a regular clickable component, without reporting any selected state to accessibility 
   * services. Use this type when the chip triggers an action but does not maintain a selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CLICKED = 0,

  /**
   * Checkbox type. The chip reports its selected state to accessibility services using the 
   * [accessibilityChecked]{@link CommonMethod#accessibilityChecked} attribute. Use this type for multi-select 
   * scenarios, such as tag filtering and attribute selection.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  CHECKED = 1,

  /**
   * Radio type. The chip reports its selected state to accessibility services using the 
   * [accessibilitySelected]{@link CommonMethod#accessibilitySelected} attribute. Use this type for single-select 
   * scenarios, such as navigation bar tabs and radio buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  SELECTED = 2
}

/**
 * Defines the common icon options of the chip.
 * 
 * > **NOTE**
 * >
 * > **fillColor** and **activatedFillColor** take effect only when the icon format is SVG.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface IconCommonOptions {

  /**
   * Icon source, which can be a specific image path or an image reference.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  src: ResourceStr;

  /**
   * Icon size. Percentage is not supported. Abnormal values are handled as the default value.
   * 
   * Default value:
   * 
   * - When **ChipOptions.size** is **ChipSize.SMALL**, the default value is 
   * **{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}**
   * - When **ChipOptions.size** is **ChipSize.NORMAL**, the default value is 
   * **{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}**
   * 
   * Unit: vp
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size?: SizeOptions;

  /**
   * Icon fill color. This attribute takes effect only when the image format is SVG.
   * 
   * Default value: **$r('sys.color.chip_usually_icon_color')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fillColor?: ResourceColor;

  /**
   * Icon fill color when the **Chip** is activated. This attribute takes effect only when the image format is SVG.
   * 
   * Default value: **$r('sys.color.chip_active_icon_color')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFillColor?: ResourceColor;
}

/**
 * Defines the suffix icon options.
 * 
 * Inherits from [IconCommonOptions]{@link IconCommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface SuffixIconOptions extends IconCommonOptions {

  /**
   * Callback for the suffix icon tap event, with no parameters and no return value. It is triggered when the user taps 
   * the suffix icon.
   * 
   * When the value is **undefined**, no suffix icon event is set.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text attribute for the suffix icon. When the suffix icon does not contain a text attribute, the 
   * screen reader does not announce it upon selection, and the user cannot clearly know whether the suffix icon is 
   * currently selected. Developers can set accessibility text for such icons, which is announced by the screen reader 
   * upon selection.
   * 
   * Default value: **''**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description for the suffix icon. This description is used to explain the suffix icon to users in 
   * detail. Developers should provide a relatively detailed text description to help users understand the operation to 
   * be performed and its possible consequences, especially when these consequences cannot be directly learned from the 
   * suffix icon's attributes and accessibility text alone. If the suffix icon has both a text attribute and an 
   * accessibility description attribute, when the suffix icon is selected, the system first announces the text 
   * attribute of the suffix icon, and then announces the content of the accessibility description attribute.
   * 
   * Default value: **''**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level for the suffix icon. Controls whether the suffix icon can be recognized by accessibility 
   * services.
   * 
   * Supported values:
   * 
   * **"auto"**: Converted to **"yes"** if the component has an action, and to **"no"** otherwise.
   * 
   * **"yes"**: The component can be recognized by accessibility services.
   * 
   * **"no"**: The component cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: The component and all its child components cannot be recognized by accessibility 
   * services.
   * 
   * Default value: **"auto"**.
   * 
   * When the value is undefined, the default value is used.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;
}

/**
 * Defines the prefix icon options.
 * 
 * Inherits from [IconCommonOptions]{@link IconCommonOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
 * Defines the accessibility options of the suffix icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface AccessibilityOptions {
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
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Accessibility text, that is, accessible label name. If a component does not contain text information, it will not 
   * be announced by the screen reader when selected. In this case, the screen reader user cannot know which component 
   * is selected. To solve this problem, you can set accessibility text for components without text information. When 
   * such a component is selected, the screen reader announces the specified accessibility text, informing the user 
   * which component is selected.
   * 
   * Default value: **''**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description. You can provide comprehensive text explanations to help users understand the operation 
   * they are about to perform and its consequences, especially when these cannot be inferred from the component's 
   * attributes and accessibility text alone. If a component contains both text information and the accessible 
   * description, the text is announced first and then the accessible description, when the component is selected.
   * 
   * Default value: **''**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines the default close icon behavior attributes for the chip, including accessibility attributes. The default 
 * value of **accessibilityText** is **"Delete"**.
 * 
 * Inherits from [AccessibilityOptions]{@link AccessibilityOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface CloseOptions extends AccessibilityOptions {
  /**
   * Size of the default close icon of the **Chip** component. Percentage is not supported. If a percentage is passed, 
   * the default value is used.
   * 
   * Default value:
   * 
   * When **size** is **ChipSize.SMALL**, `$r('sys.float.chip_small_font_size')` 
   * 
   * Other cases: `$r('sys.float.chip_normal_font_size')` 
   * 
   * Unit: fp
   * 
   * If a negative number is passed, the default value is used. If the value is **undefined**, the default value is 
   * used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;
}

/**
 * Defines the prefix and suffix icon options.
 * 
 * > **NOTE**
 * >
 * > The animation type cannot be modified via 
 * > [SymbolEffect]{@link SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)} and 
 * > animations cannot be set via **effectStrategy**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipSymbolGlyphOptions {

  /**
   * Symbol type icon displayed for the **Chip** in the inactive state.
   * 
   * Default value: no prefix icon or suffix icon displayed
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Symbol type icon displayed for the **Chip** in the activated state.
   * 
   * Default value: no prefix icon or suffix icon displayed
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines the accessibility reading functional attributes and tap event callback of the symbol-type suffix icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface ChipSuffixSymbolGlyphOptions {
  /**
   * Accessibility settings for the normal state.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * Accessibility settings for the activated state.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * Callback for the suffix icon tap event, with no parameters and no return value. This callback is triggered when the
   * user taps the suffix icon.
   * 
   * When the value is **undefined**, no suffix icon event is set.
   * 
   * Default value: **undefined**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;
}

/**
 * Defines the spacing between the text and the left and right icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface LabelMarginOptions {

  /**
   * Spacing between the text and the left icon. Percentage is not supported.
   * 
   * Default value:
   * 
   * When **size** is **ChipSize.SMALL**, the default value of **left** is **4**
   * 
   * When **size** is **ChipSize.NORMAL**, the default value of left is **6**
   * 
   * Unit: vp
   * 
   * If the value is out of the value range, the default value is used.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: Dimension;

  /**
   * Spacing between the text and the right icon. This parameter cannot be set in percentage.
   * 
   * Default value:
   * 
   * When **size** is set to **ChipSize.SMALL**, the default value of **right** is **4**.
   * 
   * When **size** is set to **ChipSize.NORMAL**, the default value of **right** is **6**.
   * 
   * Unit: vp.
   * 
   * If the value is out of the range, the default value is used.
   * 
   * Value range: [0, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: Dimension;
}

/**
 * Defines the spacing between the localized text and the left and right icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface LocalizedLabelMarginOptions {

   /**
    * Margin between the text and the start-side icon. Percentage values are not supported.
    * 
    * Default values:
    * 
    * When **size** is **ChipSize.SMALL**, the default value of **start** is:
    * 
    * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
    * 
    * When **size** is **ChipSize.NORMAL**, the default value of **start** is:
    * 
    * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`
    * 
    * If the value is **undefined**, the default value is used.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
   start?: LengthMetrics;

   /**
   * Margin between the text and the end-side icon. Percentage values are not supported.
   * 
   * Default values:
   * 
   * When **size** is **ChipSize.SMALL**, the default value of **end** is:
   * 
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
   * 
   * When **size** is **ChipSize.NORMAL**, the default value of **end** is:
   * 
   * `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))`
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;
}

/**
 * Defines text configuration options.
 * 
 * > **NOTE**
 * >
 * > Starting from API version 26.0.0, when **backgroundSystemMaterial** is set to an auto-invert system material, 
 * > **fontColor** uses a special system resource that supports color inversion, and the text color automatically adapts
 * > to the inverted color of the material background. When **activatedBackgroundSystemMaterial** is set to an auto-
 * > invert system material, **activatedFontColor** uses a special system resource that supports color inversion, and 
 * > the text color of the chip in the activated state automatically adapts to the inverted color of the material 
 * > background.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface LabelOptions {

  /**
   * Text content displayed by the **Chip** component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: string;

  /**
   * Font size. Percentage is not supported. If a percentage is passed, the default value is used.
   * 
   * If a negative value is passed, the default value is used.
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_button2')**
   * 
   * Unit: fp
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: Dimension;

  /**
   * Text color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary')**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text color when the **Chip** is activated.
   * 
   * Default value: $r('sys.color.ohos_id_color_text_primary_contrary')
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFontColor?: ResourceColor;

  /**
   * Font style of the **Chip** component text.
   * 
   * Default value: **"HarmonyOS Sans"**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontFamily?: string;

  /**
   * Spacing between the text and the left/right icons.
   * 
   * Default values:
   * 
   * When **size** is **ChipSize.SMALL**, the default value is **{ left: 4, right: 4 }**.
   * 
   * When **size** is **ChipSize.NORMAL**, the default value is **{ left: 6, right: 6 }**
   * 
   * Unit: vp
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  labelMargin?: LabelMarginOptions;

  /**
   * Spacing between the localized text and the left/right icons.
   * 
   * Default values:
   * 
   * When **size** is **ChipSize.SMALL**:
   * 
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`
   * 
   * When **size** is **ChipSize.NORMAL**:
   * 
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),  end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

/**
 * Defines the style and specific style parameters of the **Chip** component.
 * 
 * > **NOTE**
 * >
 * > 1. When **suffixSymbol** is provided with an argument, **suffixIcon** and **allowClose** will not take effect. If 
 * > **suffixSymbol** is not provided, but **suffixIcon** is, **allowClose** will not take effect. If neither 
 * > **suffixSymbol** nor **suffixIcon** is provided, **allowClose** determines whether to display the close icon.
 * >
 * > 2. When **backgroundColor** and **activatedBackgroundColor** are set to **undefined**, the default background color
 * > is displayed. When they are set to invalid values, the background color is transparent.
 * >
 * > 3. When an icon is set for **prefixSymbol** or **suffixSymbol**, if the chip is in the inactive state, the icon 
 * > color **fontColor** is `[$r('sys.color.ohos_id_color_secondary')]`; if the chip is in the activated state, the icon
 * > color **fontColor** is `[$r('sys.color.ohos_id_color_text_primary_contrary')]`. In addition, when **size** is 
 * > **ChipSize.SMALL**, the default font size of the icon is `$r('sys.float.chip_small_icon_size')`; when **size** is 
 * > **ChipSize.NORMAL** or a custom size, the default font size of the icon is `$r('sys.float.chip_normal_icon_size')`.
 * >
 * > 4. When icons are set for **prefixIcon** and **suffixIcon**, the default value of **fillColor** is 
 * > `$r('sys.color.chip_usually_icon_color')`. The color parsing of **fillColor** is consistent with that of the 
 * > **Image** component.
 * >
 * > 5. When icons are set for **prefixIcon** and **suffixIcon**, the default value of **activatedFillColor** is 
 * > `$r('sys.color.chip_active_icon_color')`. The color parsing of **activatedFillColor** is consistent with that of 
 * > the **Image** component.
 * >
 * > 6. Starting from API version 26.0.0, when **backgroundSystemMaterial** is configured as an auto-invert material, 
 * > the fill color of **prefixIcon** and **suffixIcon**, as well as the text color of **prefixSymbol** and 
 * > **suffixSymbol** in the inactive state, will use system resources that support color inversion. These colors will 
 * > automatically match the inversion effect based on the background material. When 
 * > **activatedBackgroundSystemMaterial** is configured as an auto-invert material, the activated fill color of 
 * > **prefixIcon** and **suffixIcon**, as well as the text color of **prefixSymbol** and **suffixSymbol** in the 
 * > activated state, will also use system resources that support color inversion, achieving automatic adaptation to the
 * > background material inversion.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface ChipOptions {
  /**
   * Prefix icon of the Chip component, displayed on the left side of the component.
   * 
   * Default value: No prefix icon is displayed
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * When both **prefixIcon** and **prefixSymbol** are set, **prefixSymbol** takes effect and **prefixIcon** is ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * Prefix icon attribute, of the symbol type. Commonly used in scenarios requiring system standard icons or dynamic 
   * icon effects.
   * 
   * Default value: No prefix icon is displayed
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * When both **prefixIcon** and **prefixSymbol** are set, **prefixSymbol** takes effect and **prefixIcon** is ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Text content and style displayed on the Chip component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  label: LabelOptions;

  /**
   * Suffix icon of the Chip component, displayed on the right side of the component.
   * 
   * Default value: No suffix icon is displayed
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * When both **suffixIcon** and **suffixSymbol** are set, **suffixSymbol** takes effect and **suffixIcon** is ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * Suffix icon attribute, of the symbol type. Commonly used in scenarios requiring system standard icons or dynamic 
   * icon effects.
   * 
   * Default value: No suffix icon is displayed
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * When both **suffixIcon** and **suffixSymbol** are set, **suffixSymbol** takes effect and **suffixIcon** is ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Accessibility reading function attributes and tap event callback of the symbol-type suffix icon.
   * 
   * Default value: No corresponding attribute is set
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

  /**
   * Whether the close icon is displayed.
   * 
   * Default value: **true**
   * 
   * **true**: The close icon is displayed; **false**: The close icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **Note:** When **suffixSymbol** has a value passed in, **allowClose** does not take effect. When **suffixSymbol** 
   * has no value passed in but **suffixIcon** does, **allowClose** does not take effect. When neither **suffixSymbol** 
   * nor **suffixIcon** has a value passed in, **allowClose** determines whether the close icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  allowClose?: boolean;

  /**
   * Functional attributes of the default close icon, including accessibility reading and font size attributes. This 
   * takes effect only when the default close icon is displayed, that is, when **allowClose** is **true** and neither 
   * **suffixSymbol** nor **suffixIcon** has a value passed in.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  closeOptions?: CloseOptions;

  /**
   * Whether the Chip is available.
   * 
   * Default value: **true**
   * 
   * **true**: The Chip is available; **false**: The Chip is unavailable.
   * 
   * **Usage scenario**: Set to **false** to disable the Chip. This is suitable for scenarios where user operations need
   * to be prohibited, such as restricted permissions, incomplete data loading, or unmet conditions.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enabled?: boolean;

  /**
   * Whether the Chip is in the activated state.
   * 
   * Default value: **false**
   * 
   * **true**: The Chip is in the activated state; **false**: The Chip is in the non-activated state.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **Usage scenario**: Commonly used in tag selection scenarios to indicate the currently selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: boolean;

  /**
   * Background color of the Chip.
   * 
   * Default value: **$r('sys.color.ohos_id_color_button_normal')**
   * 
   * If the value is **undefined**, the default value is used. If an invalid value is assigned, the background color is 
   * transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background color of the Chip in the activated state.
   * 
   * Default value: **$r('sys.color.ohos_id_color_emphasize')**
   * 
   * If the value is **undefined**, the default value is used. If an invalid value is assigned, the background color is 
   * transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   * Corner radius of the Chip background. Percentage is not supported. If a percentage is passed in, the default value 
   * is used.
   * 
   * Value range: [0, +∞)
   * 
   * Default value: **$r('sys.float.ohos_id_corner_radius_button')**
   * 
   * Unit: vp
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  borderRadius?: Dimension;

  /**
   * Size of the **Chip**.
   * 
   * Default value: **ChipSize.NORMAL**
   * 
   * **Usage scenario**: **ChipSize.NORMAL** is suitable for common scenarios; **ChipSize.SMALL** is suitable for 
   * compact layout scenarios, such as tag lists and filter bars; custom **SizeOptions** is suitable for scenarios 
   * requiring specific sizes.
   * 
   * The **SizeOptions** type does not support percentage settings. Abnormal values are processed as the default value.
   * 
   * **Note:** [Aging adaptation](docroot://ui/arkui-support-for-aging-adaptation.md) does not take effect when **size**
   * specifies specific width and height, except when **size** is set to **{ height: 0, width: 0 }**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * Default close icon tap event callback. It has no parameters or return value. This callback is triggered when the 
   * user taps the default close icon.
   * 
   * If the value is **undefined**, the close icon tap event is not triggered.
   * 
   * **Note:** This takes effect only when the close icon is displayed, that is, when neither **suffixSymbol** nor 
   * **suffixIcon** has a value passed in and **allowClose** is **true**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClose?: () => void;

  /**
   * Tap event callback of the **Chip** component. It has no parameters or return value. This callback is triggered when
   * the user taps the **Chip** component.
   * 
   * If the value is **undefined**, the **Chip** cannot be tapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onClicked?: Callback<void>;

  /**
    * Layout direction.
    * 
    * Default value: **Direction.Auto**
    * 
    * If the value is **undefined**, the default value is used.
    * 
    * **Usage scenario**: Commonly used in internationalization scenarios to adapt to right-to-left (RTL) reading 
    * habits, such as Arabic, achieving a mirrored interface effect.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
   direction?: Direction;

  /**
   * Accessibility description of the Chip component. This is used to explain the current component to users in detail. 
   * Developers should provide detailed text descriptions to help users understand the operations to be performed and 
   * their results, especially when these results cannot be directly learned from the component attributes and 
   * accessibility text alone. If a component has both a text attribute and an accessibility description attribute, when
   * the component is selected, the system first reads out the text attribute of the component, followed by the content 
   * of the accessibility description attribute.
   * 
   * Default value: empty string
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the Chip component. This parameter controls whether the Chip component can be recognized by 
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
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityLevel?: string;

  /**
   * Type of selected state for the chip.
   * 
   * Default value:
   * 
   * If the **activated** property is set but **accessibilitySelectedType** is not specified, the default type is 
   * **CHECKED**. If the **activated** property is not set, the default type is **CLICKED**.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilitySelectedType?: AccessibilitySelectedType;

  /**
   * Maximum font scale factor for the text and icons of the **Chip** component.
   * 
   * Value range: [1, +∞)
   * 
   * If the set value is less than 1, the value 1 is used. Abnormal values do not take effect by default.
   * 
   * Default value: **1**
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **Usage scenario**: Suitable for accessibility scenarios where the upper limit of font scaling needs to be 
   * restricted, preventing layout overflow caused by excessively large fonts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * Minimum font scale factor for the text and icons of the **Chip** component.
   * 
   * **Value range:** [0, 1]
   * 
   * If the set value is less than 0, the value 0 is used. If the set value is greater than 1, the value 1 is used. 
   * Abnormal values do not take effect by default.
   * 
   * Default value: **1**
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **Usage scenario**: Suitable for scenarios where the lower limit of font scaling needs to be restricted, ensuring 
   * text readability.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * Padding of the Chip component.
   * 
   * Default values:
   * 
   * - When **size** is **ChipSize.SMALL** and **activated** is **true**, the default value is: 
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`
   * - When **size** is **ChipSize.SMALL** and **activated** is **false**, the default value is: 
   * `{ start: LengthMetrics.resource('sys.float.chip_small_text_padding'), end: LengthMetrics.resource('sys.float.chip_small_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`
   * - When **size** is not **ChipSize.SMALL** and **activated** is **true**, the default value is: 
   * `{ start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`
   * - When **size** is not **ChipSize.SMALL** and **activated** is **false**, the default value is: 
   * `{ start: LengthMetrics.resource('sys.float.chip_normal_text_padding'), end: LengthMetrics.resource('sys.float.chip_normal_text_padding'), top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}`
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  padding?: LocalizedPadding;

  /**
   * Uniform font size for the text and icons of the **Chip** component. Percentage is not supported. If a percentage is
   * passed in, the default value is used.
   * 
   * The priority of this **fontSize** is lower than the **fontSize** attributes in **prefixSymbol**, **label**, 
   * **suffixSymbol**, and **closeOptions**.
   * 
   * Default values:
   * 
   * - When **size** is **ChipSize.SMALL**, text: `$r('sys.float.chip_small_font_size')`; icon: 
   * `$r('sys.float.chip_small_icon_size')`
   * - In other cases, text: `$r('sys.float.chip_normal_font_size')`; icon: `$r('sys.float.chip_normal_icon_size')`
   * 
   * Unit: fp
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  fontSize?: Dimension;

  /**
   * System material style of the component. It is suitable for scenarios such as immersive background effects and semi-
   * transparent frosted glass effects. Different materials have different effects and can affect visual attributes such
   * as [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, 
   * [border]{@link CommonMethod#border}, and [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} of
   * the component.
   * 
   * Default value: **undefined**
   * 
   * If the value is **undefined**, no material style is applied.
   * 
   * **Note:** When **backgroundSystemMaterial** is set, **backgroundColor** should be set to **Color.Transparent**, 
   * otherwise it will conflict with the system material. When **backgroundSystemMaterial** is **undefined**, the 
   * **backgroundColor** attribute takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  
  /**
   * System material style of the component in the activated state. It is suitable for interactive scenarios where the 
   * material effect needs to be maintained or switched in the activated state, such as tag selection and state 
   * switching. Different materials have different effects and can affect visual attributes such as 
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, [border]{@link CommonMethod#border}, 
   * and [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} of the component.
   * 
   * Default value: **undefined**
   * 
   * If the value is **undefined**, no material style is applied.
   * 
   * **Note:** When **activatedBackgroundSystemMaterial** is set, **activatedBackgroundColor** should be set to 
   * **Color.Transparent**, otherwise it will conflict with the system material. When 
   * **activatedBackgroundSystemMaterial** is **undefined**, the **activatedBackgroundColor** attribute takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Creates a **Chip** component.
 *
 * @param { ChipOptions } options - Parameters of the **Chip** component, including size, enabled state, activated
 *     state, prefix/suffix icons, text content, background color, rounded corners, accessibility attributes, etc., used
 *     to customize the style and behavior of the **Chip** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function Chip(options: ChipOptions): void;
