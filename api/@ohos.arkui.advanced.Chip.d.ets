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
 * Enumerates the chip size types.
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
   * Normal size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NORMAL = "NORMAL",

  /**
   * Small size.
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
 * Enumerates the selected state types of the chip. It allows you to specify how accessibility services convey the 
 * component's selected state to users. Different selected state types provide distinct semantics and user experiences.
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
   * Icon size. This parameter cannot be set in percentage.
   * 
   * Default value:
   * 
   * - When **ChipSize.SMALL** is used: 
   * **{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}**.
   * - When **ChipSize.NORMAL** is used: 
   * **{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}**.
   * 
   * Unit: vp.
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
   * Icon fill color.
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
   * Icon fill color when the chip is activated.
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
   * Action of the suffix icon.
   * 
   * If the value is **undefined**, no action is configured for the suffix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * Accessibility text, that is, accessibility label name, of the suffix icon. If a component does not contain text 
   * information, it will not be announced by the screen reader when selected. In this case, the screen reader user 
   * cannot know which component is selected. To solve this problem, you can set accessibility text for components 
   * without text information. When such a component is selected, the screen reader announces the specified 
   * accessibility text, informing the user which component is selected.
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
   * Accessible description of the suffix icon. You can provide comprehensive text explanations to help users understand
   * the operation they are about to perform and its potential consequences, especially when these cannot be inferred 
   * from the component's attributes and accessibility text alone. If a component contains both text information and the
   * accessible description, the text is announced first and then the accessible description, when the component is 
   * selected.
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

  /**
   * Accessibility level of the suffix icon. It determines whether the component can be recognized by accessibility 
   * services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" when **action** is set for the component and as "no" otherwise.
   * 
   * **"yes"**: The component can be recognized by accessibility services.
   * 
   * **"no"**: The component cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility 
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
   * Accessibility level. It determines whether the component can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" by the system.
   * 
   * **"yes"**: The component can be recognized by accessibility services.
   * 
   * **"no"**: The component cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility 
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
   * Default close icon size of the chip. Percentage is not supported.
   * 
   * Default value:
   * 
   * When **size** is **ChipSize.SMALL**:**$r('sys.float.chip_small_font_size')**.
   * 
   * Other cases: **$r('sys.float.chip_normal_font_size')**.
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
   * Sets the icon in the inactive state.
   * 
   * Default value: The prefix or suffix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  normal?: SymbolGlyphModifier;

  /**
   * Icon settings for the activated state.
   * 
   * Default value: The prefix or suffix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
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
 * Defines the accessibility options of the symbol-type suffix icon.
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
   * Action of the suffix icon.
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
   * Spacing between the text and the left icon. This parameter cannot be set in percentage.
   * 
   * Default value:
   * 
   * When **size** is set to **ChipSize.SMALL**, the default value of **left** is **4**.
   * 
   * When **size** is set to **ChipSize.NORMAL**, the default value of **left** is **6**.
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
    * Spacing between the text and the left icon. This parameter cannot be set in percentage.
    * 
    * Default value:
    * 
    * When **size** is set to **ChipSize.SMALL**, the default value of **start** is as follows:
    * 
    * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
    * 
    * When **size** is set to **ChipSize.NORMAL**, the default value of **start** is as follows:
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
   * Spacing between the text and the right icon. This parameter cannot be set in percentage.
   * 
   * Default value:
   * 
   * When **size** is set to **ChipSize.SMALL**, the default value of **end** is as follows:
   * 
   * `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))`
   * 
   * When **size** is set to **ChipSize.NORMAL**, the default value of **end** is as follows:
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
export interface LabelOptions {

  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: string;

  /**
   * Font size. This parameter cannot be set in percentage.
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_button2')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: Dimension;

  /**
   * Font color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Font color when the chip is activated.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary_contrary')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedFontColor?: ResourceColor;

  /**
   * Font family.
   * 
   * Default value: **"HarmonyOS Sans"**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontFamily?: string;

  /**
   * Spacing between the text and the left and right icons.
   * 
   * Default value:
   * 
   * When **size** is **ChipSize.SMALL**: **{ left: 4, right: 4 }**.
   * 
   * When **size** is **ChipSize.NORMAL**: **{ left: 6, right: 6 }**.
   * 
   * Unit: vp.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  labelMargin?: LabelMarginOptions;

  /**
   * Spacing between the localized text and the left and right icons.
   * 
   * Default value:
   * 
   * When **size** is set to **ChipSize.SMALL**, the default value is as follows:
   * 
   * `{  start: LengthMetrics.resource($r('sys.float.chip_small_text_margin')),
   * end: LengthMetrics.resource($r('sys.float.chip_small_text_margin')) }`
   * 
   * When **size** is set to **ChipSize.NORMAL**, the default value is as follows:
   * 
   * `{  start: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')),
   * end: LengthMetrics.resource($r('sys.float.chip_normal_text_margin')) }`
   * 
   * If the value is **undefined**, the default value is used.
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
 * Defines the type and style parameters of the chip.
 * 
 * > **NOTE**
 * >
 * > 1. When **suffixSymbol** is provided with an argument, **suffixIcon** and **allowClose** will not take effect. If 
 * > **suffixSymbol** is not provided, but **suffixIcon** is, **allowClose** still will not take effect. When neither 
 * > **suffixSymbol** nor **suffixIcon** is provided with arguments, **allowClose** determines whether the deletion icon
 * > is displayed.
 * >
 * > 2. If **undefined** is assigned to **backgroundColor** or **activatedBackgroundColor**, the default background 
 * > color is used. If an invalid value is specified, the background color is transparent.
 * >
 * > 3. Default font colors for **prefixSymbol** and **suffixSymbol**: **normalFontColor**: 
 * > **[$r('sys.color.ohos_id_color_primary')]**; **activatedFontColor**: 
 * > **[$r('sys.color.ohos_id_color_text_primary_contrary')]**. The default value of **fontColor** is **16**.
 * >
 * > 4. The default value of **fillColor** is **$r('sys.color.ohos_id_color_secondary')** for **prefixIcon** and 
 * > **$r('sys.color.ohos_id_color_primary')** for **suffixIcon**. The color parsing of **fillColor** is the same as 
 * > that of the **Image** component.
 * >
 * > 5. The default value of **activatedFillColor** in **prefixIcon** and **suffixIcon** is 
 * > **$r('sys.color.ohos_id_color_text_primary_contrary')**. The color parsing of **activatedFillColor** is the same as
 * > that of the **Image** component.
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
   * Prefix icon of the chip.
   * 
   * Default value: The prefix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * If both **prefixIcon** and **prefixSymbol** are set, the effect specified by **prefixSymbol** will be displayed, 
   * and **prefixIcon** will be ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * Symbol-type prefix icon of the chip.
   * 
   * Default value: The prefix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * If both **prefixIcon** and **prefixSymbol** are set, the effect specified by **prefixSymbol** will be displayed, 
   * and **prefixIcon** will be ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Text of the chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  label: LabelOptions;

  /**
   * Suffix icon of the chip.
   * 
   * Default value: The suffix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * If both **suffixIcon** and **suffixSymbol** are set, the effect specified by **suffixSymbol** will be displayed, 
   * and **suffixIcon** will be ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * Symbol-type suffix icon of the chip.
   * 
   * Default value: The suffix icon is not displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * If both **suffixIcon** and **suffixSymbol** are set, the effect specified by **suffixSymbol** will be displayed, 
   * and **suffixIcon** will be ignored.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Accessibility settings of the symbol-type suffix icon.
   * 
   * Default value: The suffix icon is not displayed.
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
   * Whether to display the close icon.
   * 
   * Default value: **true**
   * 
   * The value **true** means to show the delete icon, and **false** means the opposite.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  allowClose?: boolean;

  /**
   * Accessibility settings of the default close icon.
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
   * Whether the chip can be selected.
   * 
   * Default value: **true**
   * 
   * **true**: The chip can be selected.
   * 
   * **false**: The chip cannot be selected.
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
   * Whether the chip is activated.
   * 
   * Default value: **false**
   * 
   * **true**: The chip is activated.
   * 
   * **false**: The chip is not activated.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activated?: boolean;

  /**
   * Chip background color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_button_normal')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Background color of the chip when it is activated.
   * 
   * Default value: **$r('sys.color.ohos_id_color_emphasize')**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   * Radius of the rounded corner of the chip background. Percentage is not supported.
   * 
   * Default value: **$r('sys.float.ohos_id_corner_radius_button')**
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
   * Chip size.
   * 
   * Default value: **ChipSize.NORMAL**
   * 
   * The SizeOptions type parameter does not support percentage values. If an invalid value is provided, the system will
   * use the default value instead.
   * 
   * Note: [Aging-friendly design implementation](docroot://ui/arkui-support-for-aging-adaptation.md) does not take 
   * effect when size specifies specific width and height, except when size is set to { height: 0, width: 0 }.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * Event triggered when the close icon is clicked.
   * 
   * If the value is **undefined**, clicking the close icon will not trigger any event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClose?: () => void;

  /**
   * Chip click event.
   * 
   * If the value is **undefined**, the chip cannot be clicked.
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
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @stagemodelonly
    * @crossplatform
    * @atomicservice
    * @since 12 dynamic
    */
   direction?: Direction;

  /**
   * Accessible description of the chip. You can provide comprehensive text explanations to help users understand the 
   * operation they are about to perform and its potential consequences, especially when these cannot be inferred from 
   * the component's attributes and accessibility text alone. If a component contains both text information and the 
   * accessible description, the text is announced first and then the accessible description, when the component is 
   * selected.
   * 
   * The default value is an empty string.
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
   * Accessibility level of the chip. It determines whether the component can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" by the system.
   * 
   * **"yes"**: The component can be recognized by accessibility services.
   * 
   * **"no"**: The component cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility 
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
   * Maximum font scale factor for the text and icon of the chip.
   * Value range: [1, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  maxFontScale?: number | Resource;

  /**
   * Minimum font scale factor for the text and icon of the chip.
   * Value range: [0, 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minFontScale?: number | Resource;

  /**
   * Padding of the chip.
   * 
   * Default value:
   * 
   * - When **size** is **ChipSize.SMALL** and **activated** is **true**: 
   * **{ start: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),
   * end: LengthMetrics.resource('sys.float.chip_activated_small_text_padding'),
   * top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}**.
   * - When **size** is **ChipSize.SMALL** and **activated** is **false**: 
   * **{ start: LengthMetrics.resource('sys.float.chip_small_text_padding'),
   * end: LengthMetrics.resource('sys.float.chip_small_text_padding'),
   * top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}**.
   * - When **size** is not **ChipSize.SMALL** and **activated** is **true**: 
   * **{ start: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),
   * end: LengthMetrics.resource('sys.float.chip_activated_normal_text_padding'),
   * top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}**.
   * - When **size** is not **ChipSize.SMALL** and **activated** is **false**: 
   * **{ start: LengthMetrics.resource('sys.float.chip_normal_text_padding'),
   * end: LengthMetrics.resource('sys.float.chip_normal_text_padding'),
   * top: LengthMetrics.vp(4), bottom: LengthMetrics.vp(4)}**.
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
   * Uniform font size for both text and icons in the chip. Percentage values are not supported.
   * 
   * The priority of **fontSize** is lower than the **fontSize** property in **prefixSymbol**, **label**, 
   * **suffixSymbol**, and **closeOptions**.
   * 
   * Default value:
   * 
   * - When **size** is **ChipSize.SMALL**: **$r('sys.float.chip_small_font_size')** for text and 
   * **$r('sys.float.chip_small_icon_size')** for icons.
   * - Other cases: **$r('sys.float.chip_normal_font_size')** for text and **$r('sys.float.chip_normal_icon_size')** for
   * icons.
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
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  
  /**
   * Set system-styled materials for the component which is activated. Different materials have different effects, which
   * can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
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
 * Build function of Chip.
 *
 * @param { ChipOptions } options - Parameters of the chip.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @noninterop
 */
@Builder
export declare function Chip(options: ChipOptions): void;