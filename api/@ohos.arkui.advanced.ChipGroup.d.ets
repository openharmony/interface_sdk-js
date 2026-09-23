/*
* Copyright (C) 2024 Huawei Device Co., Ltd.
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

import { ChipSize, ChipSymbolGlyphOptions, CloseOptions, ChipSuffixSymbolGlyphOptions } from '@ohos.arkui.advanced.Chip';

import { SymbolGlyphModifier } from './@ohos.arkui.modifier';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines the common attributes of icons.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface IconOptions {

  /**
   * Icon source, which can be a specific image resource or an image address reference. For details, see 
   * [Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  src: ResourceStr;

  /**
   * Icon size. Percentages are not supported. Set this parameter when you need to customize the icon size.
   * 
   * Default value:
   *
   * - When **ChipItemStyle.size** is **ChipSize.SMALL**, the default value is:
   * **{width: $r('sys.float.chip_small_icon_size'), height: $r('sys.float.chip_small_icon_size')}**
   * - In other cases, the default value is:
   * **{width: $r('sys.float.chip_normal_icon_size'), height: $r('sys.float.chip_normal_icon_size')}**
   *
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: SizeOptions;
}

/**
 * Defines the configuration options for suffix icons.
 * 
 * Inherits from [IconOptions]{@link IconOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface SuffixImageIconOptions extends IconOptions {

  /**
   * Response event of the suffix icon. The callback is triggered when the user taps the suffix icon. Set this parameter
   * when you need to add custom interaction to the suffix icon, such as performing a search, opening a menu, or
   * deleting an item.
   * 
   * If the value is **undefined**, there is no suffix icon response event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;

  /**
   * Accessibility text attribute of the suffix icon. This attribute is used to further explain the suffix icon to
   * users. You can set a relatively detailed description for this attribute of the suffix icon to help users understand
   * the operation to be performed, especially the possible consequences that cannot be inferred from the suffix icon's
   * own attributes and accessibility text. When the suffix icon has both a text attribute and an accessibility
   * description attribute, the system first reads the text attribute of the suffix icon, followed by the content of the
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
   * @since 14 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the suffix icon. This description is used to explain the suffix icon to users in
   * detail. You should provide a thorough text description for this attribute of the suffix icon to help users
   * understand the operation to be performed and its possible consequences, especially when such consequences cannot be
   * directly inferred from the suffix icon's attributes and accessibility text. When the suffix icon has both a text
   * attribute and an accessibility description attribute, the system first reads the text attribute of the suffix icon,
   * followed by the content of the accessibility description attribute.
   * 
   * Default value: empty string.
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
   * Accessibility level of the suffix icon. This attribute controls whether the suffix icon can be recognized by
   * accessibility services. Set this parameter when you need to provide access support for users of accessibility
   * services, or when you need to exclude decorative icons from the accessibility tree.
   * 
   * Supported values:
   * 
   * **"auto"**: The suffix icon is converted to **"yes"** if an action exists, and to **"no"** if no action exists.
   * This applies to most scenarios.
   * 
   * **"yes"**: The suffix icon can be recognized by accessibility services. This applies to functional icons.
   * 
   * **"no"**: The suffix icon cannot be recognized by accessibility services. This applies to purely decorative icons.
   * 
   * **"no-hide-descendants"**: The suffix icon and all its child components cannot be recognized by accessibility
   * services. This applies to scenarios where an entire area needs to be hidden.
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
 * Defines the text attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface LabelOptions {

  /**
   * Text content displayed on the chip item. Used to set the text information shown on the chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  text: string;
}

/**
 * Defines the specific attributes of individual chips.
 * 
 * > **NOTE**
 * >
 * > When the **suffixSymbol** parameter is passed in, **allowClose** does not take effect. When the **suffixImageIcon**
 * > parameter is passed in but **suffixSymbol** is not, **allowClose** does not take effect. When neither
 * > **suffixSymbol** nor **suffixImageIcon** is passed in, **allowClose** determines whether the close icon is
 * > displayed. **suffixIcon** is deprecated. Use **suffixImageIcon** instead.
 * >
 * > **suffixSymbol** and **suffixImageIcon** are both suffix icons, and only one of them can be configured for the same
 * > chip item. If both are configured, only the one with the higher priority takes effect (priority: **suffixSymbol** >
 * > **suffixImageIcon**). **suffixIcon** is deprecated. Use **suffixImageIcon** instead.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupItemOptions {

  /**
   * Prefix image icon property. Set this parameter when an icon needs to be displayed before the chip to enhance visual
   * recognition or provide a functional hint.
   * 
   * Default value: no prefix image icon.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefixIcon?: IconOptions;

  /**
   * Prefix SymbolGlyph icon property. Set this parameter when a SymbolGlyph icon needs to be displayed before the chip
   * to enhance visual recognition or provide a functional hint.
   * 
   * Default value: no prefix SymbolGlyph icon.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Text content and style displayed on the chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  label: LabelOptions;

  /**
   * Suffix image icon property. Set this parameter when an image icon needs to be displayed after the chip to provide
   * an additional action or status hint.
   * 
   * Default value: no suffix image icon displayed.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * **Note:** When a value is passed to **suffixIcon**, **allowClose** does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 14
   * @useinstead ChipGroupItemOptions#suffixImageIcon
   */
  suffixIcon?: IconOptions;

  /**
   * Suffix image icon property. Set this parameter when an icon needs to be displayed after the chip to provide an
   * additional action or status hint.
   * 
   * **Note:** When a value is passed to **suffixImageIcon**, **allowClose** does not take effect. When both
   * **suffixSymbol** and **suffixImageIcon** are configured, only **suffixSymbol** takes effect and **suffixImageIcon**
   * does not.
   *
   * Default value: no suffix image icon displayed.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  suffixImageIcon?: SuffixImageIconOptions;

  /**
   * Suffix SymbolGlyph icon property. Set this parameter when a SymbolGlyph icon needs to be displayed after the chip
   * to provide an additional action or status hint.
   * 
   * **Note:** When a value is passed to **suffixSymbol**, **allowClose** does not take effect. **suffixSymbol** and
   * **suffixImageIcon** are mutually exclusive. Only one of them can be configured for the same chip. If both are
   * configured, only the one with the higher priority takes effect (priority: **suffixSymbol** > **suffixImageIcon**).
   *
   * Default value: no suffix SymbolGlyph icon displayed.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 12 dynamic
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Suffix symbol icon property, which configures the interaction function and accessibility attributes of the suffix
   * symbol icon. Set this parameter when a click event or accessibility support needs to be added to the suffix symbol
   * icon.
   * 
   * Default value: the default value of
   * [ChipSuffixSymbolGlyphOptions]{@link @ohos.arkui.advanced.Chip:ChipSuffixSymbolGlyphOptions} is used.
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
   * The value **false** means the close icon is not displayed, and **true** means the close icon is displayed.
   *
   * Set this parameter to **true** when users need to be allowed to delete or remove a chip, which applies to scenarios
   * such as edit mode and configurable tag lists.
   * 
   * Default value: **false**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * **Note:** When a value is passed to **suffixSymbol**, **allowClose** does not take effect. When no value is passed
   * to **suffixSymbol** but a value is passed to **suffixIcon** or **suffixImageIcon**, **allowClose** does not take
   * effect. When no value is passed to **suffixSymbol**, **suffixIcon**, or **suffixImageIcon**, **allowClose**
   * determines whether to display the close icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  allowClose?: boolean;

  /**
   * Accessibility reading and font size properties of the default close icon. Set this parameter when custom
   * accessibility reading content and font size need to be provided for the close icon.
   *
   * Default value: the default configuration in [CloseOptions]{@link @ohos.arkui.advanced.Chip:CloseOptions} is used.
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
   * Accessibility description of the chip in the **ChipGroup**. This description is used to explain the chip in the
   * **ChipGroup** to users in detail. Developers should provide a relatively detailed text description for this
   * attribute of the chip to help users understand the operation to be performed and its possible results, especially
   * when these results cannot be directly learned from the chip's attributes and accessibility text alone. If the chip
   * has both a label text attribute and an accessibility description attribute, when it is selected, the system first
   * announces the chip's label text attribute, and then announces the content of the accessibility description
   * attribute.
   * 
   * Default value: empty string.
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
   * Accessibility level of the chip in the **ChipGroup**. Controls whether the chip in the **ChipGroup** can be
   * recognized by accessibility services.
   * 
   * The supported values are:
   * 
   * **"auto"**: The chip in the **ChipGroup** is converted to **"yes"** when **action** is set, and to **"no"**
   * otherwise. This applies to most scenarios.
   * 
   * **"yes"**: The chip in the **ChipGroup** can be recognized by accessibility services, which applies to scenarios
   * where accessibility needs to be explicitly enabled.
   * 
   * **"no"**: The chip in the **ChipGroup** cannot be recognized by accessibility services, which applies to purely
   * decorative icon scenarios.
   * 
   * **"no-hide-descendants"**: The chip in the **ChipGroup** and all its child components cannot be recognized by
   * accessibility services, which applies to scenarios where the entire area needs to be hidden.
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
 * Defines the common attributes of chips.
 * 
 * > **NOTE**
 * >
 * > 1. The size settings for chips can be of two types: (1) **ChipSize**, which offers two size options, **NORMAL** and
 * > **SMALL**; (2) **SizeOptions**.
 * >
 * > 2. When **backgroundColor** and **selectedBackgroundColor** are set to **undefined**, the default background color
 * > is displayed. When an invalid value is passed in, the background color is transparent.
 * >
 * > 3. Starting from API version 26.0.0, when **backgroundSystemMaterial** is set to a system material with auto-
 * > invert, **fontColor** uses a system-predefined invertible color resource (such as `$r('sys.color.font_primary')`),
 * > and the color automatically adapts to the inverted color of the material background color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipItemStyle {

  /**
   * Chip size. To use it, import the **ChipSize** type from the **Chip** component. **ChipSize.NORMAL** applies to most
   * standard scenarios; **ChipSize.SMALL** applies to compact layouts or space-constrained scenarios; **SizeOptions**
   * applies to special scenarios where a custom precise size is required.
   * 
   * Default value: **ChipSize.NORMAL** or **{ height: 0, width: 0 }**
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  size?: ChipSize | SizeOptions;

  /**
   * Chip background color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_button_normal')**
   * 
   * **Note:** Since API version 26.0.0, when **backgroundSystemMaterial** is set, **backgroundColor** must be set to
   * **Color.Transparent**; otherwise, it conflicts with the system material. When **backgroundSystemMaterial** is
   * undefined, the **backgroundColor** attribute takes effect.
   *
   * When the value is **undefined**, the default value of **backgroundColor** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip text color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary')**
   * 
   * **Note:** Since API version 26.0.0, when **backgroundSystemMaterial** is set to a system material with auto-invert,
   * **fontColor** uses a system-predefined invertible color resource, and the text color automatically adapts to the
   * inverted color of the material background color.
   *
   * When the value is **undefined**, the default value of **fontColor** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Chip text color when selected.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary_contrary')**
   * 
   * **Note:** Since API version 26.0.0, when **selectedBackgroundSystemMaterial** is set to a system material with auto
   * -invert, **selectedFontColor** uses a system-predefined invertible color resource (for example,
   * `$r('sys.color.font_primary')`), and the color automatically adapts to the inverted color of the material
   * background color.
   *
   * When the value is **undefined**, the default value of **selectedFontColor** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * Chip background color when selected.
   * 
   * Default value: **$r('sys.color.ohos_id_color_emphasize')**
   * 
   * **Note:** Since API version 26.0.0, when **selectedBackgroundSystemMaterial** is set, **selectedBackgroundColor**
   * must be set to **Color.Transparent**; otherwise, it conflicts with the system material. When
   * **selectedBackgroundSystemMaterial** is **undefined**, the **selectedBackgroundColor** attribute takes effect.
   *
   * When the value is **undefined**, the default value of **selectedBackgroundColor** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedBackgroundColor?: ResourceColor;
}

/**
 * Defines the left and right padding of the chip group, and the spacing between chips.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupSpaceOptions {

  /**
   * Spacing between chips (percentages are not supported).
   * 
   * Value range:
   * 
   * number type: a value greater than or equal to 0 (for example, 0, 8, 16, 24.5).
   * 
   * string type: a string in fp | vp | px | lpx with the numeric part greater than or equal to 0 (for example, "8vp", "
   * 16fp", "12px", "10lpx").
   * 
   * **Note:** When a negative number, percentage, or invalid string format is passed, the default value is used.
   * 
   * Default value: **8**
   * 
   * Unit: vp
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  itemSpace?: string | number;

  /**
   * Left padding (percentages are not supported).
   *
   * When a negative number, percentage, or invalid string format is passed, the default value is used.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startSpace?: Length;

  /**
   * Right padding (percentages are not supported).
   *
   * When a negative number, percentage, or invalid string format is passed, the default value is used.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endSpace?: Length;
}

/**
 * Defines the trailing builder API, which is used to configure the display properties of the trailing icon and its
 * background area.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface IconItemOptions {

  /**
   * Custom Builder icon.
   * 
   * When the chip size is **ChipSize.SMALL**, the default icon size is **{width: '16vp', height: '16vp'}**.
   * 
   * When the chip size is **ChipSize.NORMAL**, the default icon size is **{width: '24vp', height: '24vp'}**.
   * 
   * To dynamically change the size, the [SymbolGlyphModifier]{@link ./arkui/SymbolGlyphModifier:SymbolGlyphModifier}
   * type must be used when [IconGroupSuffix]{@link IconGroupSuffix} is introduced.
   * 
   * When the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon: IconOptions;

  /**
   * Callback for the tap event on the trailing icon. It is triggered when the user taps the trailing icon. Set this
   * parameter to add custom interaction to the trailing icon, such as performing a specific operation or opening a
   * page.
   * 
   * When it is **undefined**, this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  action: Callback<void>;

  /**
   * Accessibility text attribute of the trailing icon. It is used to further explain the trailing icon to users.
   * Developers can set a relatively detailed explanatory text for this attribute of the trailing icon to help users
   * understand the operation to be performed. For example, help users understand the possible consequences of the
   * operation to be performed, especially when these consequences cannot be learned from the trailing icon's own
   * attributes and accessibility text. If the trailing icon has both a text attribute and an accessibility description
   * attribute, when the trailing icon is selected, the text attribute of the trailing icon is announced first, followed
   * by the content of the accessibility description attribute.
   *
   * Default value: empty string.
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
   * Accessibility description of the trailing icon. This description is used to explain the trailing icon to users in
   * detail. Developers should provide a relatively detailed text description for this attribute of the trailing icon to
   * help users understand the operation to be performed and its possible consequences, especially when these
   * consequences cannot be directly learned from the trailing icon's attributes and accessibility text alone. If the
   * trailing icon has both a text attribute and an accessibility description attribute, when the trailing icon is
   * selected, the system will first announce the text attribute of the trailing icon, and then announce the content of
   * the accessibility description attribute.
   *
   * Default value: empty string
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
   * Accessibility level of the trailing icon. Used to control whether the trailing icon can be recognized by
   * accessibility services. Set this parameter when you need to provide access support for accessibility service users,
   * or when you need to exclude decorative icons from the accessibility tree.
   *
   * Supported values:
   *
   * **"auto"**: The trailing icon is converted to **"yes"**, applicable to most scenarios.
   *
   * **"yes"**: The trailing icon can be recognized by accessibility services, applicable to functional icons.
   *
   * **"no"**: The trailing icon cannot be recognized by accessibility services, applicable to purely decorative icons.
   *
   * **"no-hide-descendants"**: The trailing icon and all its child components cannot be recognized by accessibility
   * services, applicable to scenarios where the entire area needs to be hidden.
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
}

/**
 * Defines the suffix icon option type for **ChipGroup**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 14 dynamic
 * @noninterop
 */
export interface SymbolItemOptions {

  /**
   * **SymbolGlyphModifier** configuration object for the trailing icon, used to set the icon's display style, rendering
   * mode, etc.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 14 dynamic
   */
  symbol: SymbolGlyphModifier;

  /**
   * Response event of the trailing icon. The callback is triggered when the user taps the tail icon. Set this parameter
   * when you need to add custom interaction to the tail icon, such as performing a specific operation or opening an
   * interface.
   *
   * If the value is **undefined**, there is no tail icon response event.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action: VoidCallback;

  /**
   * Accessibility text attribute of the trailing icon. This attribute is used to further explain the trailing icon to
   * users. You can set a relatively detailed description for this attribute of the trailing icon to help users
   * understand the operation to be performed, especially the possible consequences that cannot be inferred from the
   * trailing icon's own attributes and accessibility text. When the trailing icon has both a text attribute and an
   * accessibility description attribute, the system first reads the text attribute of the trailing icon, followed by
   * the content of the accessibility description attribute.
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
  accessibilityText?: ResourceStr;

  /**
   * Accessibility description of the trailing icon. This description is used to explain the trailing icon to users in
   * detail. You should provide a thorough text description for this attribute to help users understand the operation to
   * be performed and its possible results, especially when such results cannot be directly inferred from the trailing
   * icon's attributes and accessibility text. When a trailing icon that is selected has both a text attribute and an
   * accessibility description attribute, the system first reads the text attribute, followed by the content of the
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
   * @since 14 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Accessibility level of the trailing icon. Used to control whether the trailing icon can be recognized by
   * accessibility services. Set this parameter when you need to provide access support for users of accessibility
   * services, or when you need to exclude decorative icons from the accessibility tree.
   * 
   * Supported values:
   * 
   * **"auto"**: The trailing icon is converted to **"yes"**, applicable to most scenarios.
   * 
   * **"yes"**: The trailing icon can be recognized by accessibility services, applicable to scenarios where
   * accessibility access needs to be explicitly enabled.
   * 
   * **"no"**: The trailing icon cannot be recognized by accessibility services, applicable to purely decorative icon
   * scenarios.
   * 
   * **"no-hide-descendants"**: The trailing icon and all its child components cannot be recognized by accessibility
   * services, applicable to scenarios where the entire area needs to be hidden.
   * 
   * Default value: **"auto"**.
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
 * Defines the top and bottom padding of a **ChipGroup** component, which is used to control the overall height of the 
 * **ChipGroup**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export interface ChipGroupPaddingOptions {

  /**
   * Top padding of the **ChipGroup** (percentage not supported).
   *
   * If a negative number, percentage, or invalid string format is passed, the default value is used.
   * 
   * Default value: **14**
   * 
   * Unit: vp
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top: Length;

  /**
   * Bottom padding of the **ChipGroup** (percentage not supported).
   *
   * If a negative number, percentage, or invalid string format is passed, the default value is used.
   * 
   * Default value: **14**
   * 
   * Unit: vp
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: Length;
}

/**
 * The **ChipGroup** component provides chip group capabilities, supporting single-selection or multi-selection modes,
 * customizable styles, icons, and spacing, as well as selected state management and event callbacks. It is suitable for
 * various scenarios such as file categorization, resource filtering, tag selection, and content grouping, helping
 * developers quickly implement selection functionality while delivering a consistent visual and interactive experience.
 *
 * > **NOTE**
 * >
 * > With **SymbolGlyphModifier**, neither modifying the animation type with **symbolEffect** nor setting the effect
 * > strategy with [effectStrategy]{@link SymbolGlyphAttribute#effectStrategy} is supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
@Component
export declare struct IconGroupSuffix {

  /**
   * Array of custom items displayed in the trailing area. The array supports **IconItemOptions** (image icon),
   * **SymbolGlyphModifier** (symbol icon), or **SymbolItemOptions** (symbol icon configuration) types.
   *
   * @type { Array<IconItemOptions | SymbolGlyphModifier> } [since 12 - 13]
   * @type { Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions> } [since 14]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Require
  @Prop
  items: Array<IconItemOptions | SymbolGlyphModifier | SymbolItemOptions>;

  /**
   * System material style of the component. Different materials have different effects and can affect the
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, [border]{@link CommonMethod#border},
   * and [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} visual properties of the component.
   * When a system material with auto-invert is set, if **fontColor** uses a system-predefined invertible color resource
   * (such as `$r('sys.color.font_primary')`), the color automatically adapts to the inverted color of the material
   * background color.
   *
   * Default value: **undefined**
   *
   * When the **value** is **undefined**, no material style is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  iconBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * The **ChipGroup** component provides chip group capabilities, supporting single-selection or multi-selection modes,
 * customizable styles, icons, and spacing, as well as selected state management and event callbacks. It is suitable for
 * various scenarios such as file categorization, resource filtering, tag selection, and content grouping, helping
 * developers quickly implement selection functionality while delivering a consistent visual and interactive experience.
 *
 * > **NOTE**
 * >
 * > 1. For the **selectedIndexes** and **multiple** APIs, when **multiple** is set to **false**, if
 * > **selectedIndexes** is not passed in, the first chip is selected by default. If the provided **selectedIndexes**
 * > contains more than one element, the chip at the first index is selected by default.
 * >
 * > 2. When using the **suffix** API, the **IconGroupSuffix** API must be imported. If it is not passed in,
 * > **suffix** will be empty.
 * >
 * > 3. The icon fill colors (**fillColor** and **activatedFillColor**) should be consistent with the font color
 * > (**fontColor**). If different colors are needed, use **prefixSymbol** when passing in
 * > [ChipGroupItemOptions]{@link ChipGroupItemOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
@Component
export declare struct ChipGroup {

  /**
   * Specific properties of each chip. For details, see [ChipGroupItemOptions[]]{@link ChipGroupItemOptions}.
   * 
   * If **undefined**, ChipGroup is empty by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Require
  @Prop
  items: ChipGroupItemOptions[];

  /**
   * Style of the chip, such as color and size. For details, see [ChipItemStyle]{@link ChipItemStyle}. Pass this
   * parameter when you need to customize the appearance of the chip, such as changing the background color, font color,
   * and size.
   * 
   * Default value:
   * 
   * **{
   * size: ChipSize.NORMAL,
   * backgroundColor: $r('sys.color.ohos_id_color_button_normal'),
   * fontColor: $r('sys.color.ohos_id_color_text_primary'),
   * selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'),
   * selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize')
   * }**
   * 
   * If **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  itemStyle?: ChipItemStyle;

  /**
   * Indexes of the selected chips, counted from 0.
   *
   * Value range: The index value is a non-negative integer and cannot exceed the length of the **items** array minus 1.
   *
   * If a negative number, an index value beyond the array range, or a non-integer is passed, the index value does not
   * take effect.
   * 
   * Default value: **[0]**
   * 
   * If **multiple** is **false** and **selectedIndexes** is an empty array, the first chip is selected by default. If
   * **selectedIndexes** contains multiple elements, only the first index takes effect.
   *
   * If **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  selectedIndexes?: Array<number>;

  /**
   * Whether to select multiple chips.
   * 
   * **true**: Multiple chips can be selected, which applies to scenarios where multiple options need to be selected at
   * the same time, such as multi-tag selection and multi-condition filtering. **false**: Only a single chip can be
   * selected, which applies to single-selection scenarios, such as single-item selection.
   * 
   * Default value: **false**
   * 
   * If **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  multiple?: boolean;

  /**
   * Left and right padding and spacing between chips. For details, see 
   * [ChipGroupSpaceOptions]{@link ChipGroupSpaceOptions}. Pass this parameter when the default spacing cannot meet the
   * layout requirements or when the spacing between chips needs to be adjusted according to the UI design.
   * 
   * Default value: **{ itemSpace: 8, startSpace: 16, endSpace: 16 }**
   * 
   * Unit: vp
   * 
   * If **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  chipGroupSpace?: ChipGroupSpaceOptions;

  /**
   * Top and bottom padding of the **ChipGroup**, used to control the overall height. The type is
   * [ChipGroupPaddingOptions]{@link ChipGroupPaddingOptions}. Pass this parameter when you need to adjust the vertical
   * space occupied by the **ChipGroup** component or match specific UI design requirements.
   * 
   * Default value: **{ top: 14, bottom: 14 }**
   * 
   * Unit: vp
   * 
   * If **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @Prop
  chipGroupPadding?: ChipGroupPaddingOptions;

  /**
   * System material style of the component. Different materials have different effects and can affect the
   * [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)}, [border]{@link CommonMethod#border},
   * and [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)} visual properties of the component.
   * When a system material with auto-invert is set, if **fontColor** uses a system-predefined invertible color resource
   * (such as `$r('sys.color.font_primary')`), the color automatically adapts to the inverted color of the material
   * background color. When **backgroundSystemMaterial** is set, **backgroundColor** should be set to
   * **Color.Transparent**, otherwise it will conflict with the system material.
   *
   * Default value: **undefined**
   *
   * If **undefined**, no material style is applied.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * System material style for the selected state of the component. Different materials have different effects and can
   * affect the [backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)},
   * [border]{@link CommonMethod#border}, and [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}
   * visual properties of the component when selected. When a system material with auto-invert is set, if
   * **selectedFontColor** uses a system-predefined invertible color resource (such as `$r('sys.color.font_primary')`),
   * the color automatically adapts to the inverted color of the material background color. When
   * **selectedBackgroundSystemMaterial** is set, **selectedBackgroundColor** should be set to **Color.Transparent**,
   * otherwise it will conflict with the system material.
   *
   * Default value: **undefined**
   *
   * If **undefined**, no material style is applied to the selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Prop
  selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Callback invoked when the chip state changes, used to listen for changes in the chip selected state. This callback
   * is triggered after the **selectedIndexes** attribute is updated. Developers can obtain the latest selected state in
   * the callback and perform corresponding operations, such as updating the UI, saving selected data, and triggering
   * business logic. Pass this parameter when you need to listen for the user's chip selection operation and execute the
   * corresponding business logic. If not passed, notifications of chip state changes cannot be received.
   * 
   * If **undefined**, this callback is not triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onChange?: Callback<Array<number>>;

  /**
   * Used to customize a builder. To display custom content on the rightmost side of the component, configure the
   * **suffix** attribute. When using the **suffix** attribute, reference the [IconGroupSuffix]{@link IconGroupSuffix}
   * API.
   * 
   * When not passed by default, there is no suffix.
   * 
   * If **undefined**, there is no suffix.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  @BuilderParam
  suffix?: Callback<void>;
}
