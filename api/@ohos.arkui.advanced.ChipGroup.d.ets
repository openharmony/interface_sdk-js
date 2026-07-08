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
   * Icon size. This parameter cannot be set in percentage.
   * 
   * Default value: **undefined**
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
   * Action of the suffix icon.
   * 
   * If the value is **undefined**, no suffix icon interaction event is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action?: VoidCallback;

  /**
   * Accessibility text, that is, accessibility label name, of the suffix icon. If an icon does not contain text 
   * information, it will not be announced by the screen reader when selected. In this case, the screen reader user 
   * cannot know which icon is selected. To solve this problem, you can set accessibility text for icons without text 
   * information. When such an icon is selected, the screen reader announces the specified accessibility text, informing
   * the user which icon is selected.
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
   * Accessible description of the suffix icon. You can provide comprehensive text explanations to help users understand
   * the operation they are about to perform and its potential consequences, especially when these cannot be inferred 
   * from the component's attributes and accessibility text alone. If an icon contains both text information and the 
   * accessible description, the text is announced first and then the accessible description, when the icon is selected.
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
   * Accessibility level of the suffix icon. It determines whether the icon can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" when **action** is set for the icon and as "no" otherwise.
   * 
   * **"yes"**: The icon can be recognized by accessibility services.
   * 
   * **"no"**: The icon cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the icon nor its child components can be recognized by accessibility services.
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
 * Defines the label configuration options.
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
   * Text of the chip.
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
 * > If **suffixIcon** is specified, **allowClose** has no effect.
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
   * Prefix image icon of the chip.
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
   * Prefix symbol glyph icon of the chip.
   * 
   * Default value: no prefix symbol glyph icon.
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
   * Text of the chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  label: LabelOptions;

  /**
   * Suffix image icon of the chip.
   * 
   * Default value: no suffix image icon.
   * 
   * If the value is **undefined**, the default value is used.
   * 
   * Note: This API is supported since API version 12 and deprecated since API version 14. You are advised to use 
   * **suffixImageIcon** instead.
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
   * Suffix image icon of the chip.
   * 
   * Default value: no suffix image icon.
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
   * Suffix symbol glyph icon of the chip.
   * 
   * Default value: no suffix symbol glyph icon.
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
   * Suffix symbol icon of the chip.
   * 
   * Default value: The suffix symbol icon has no function.
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
   * Whether to show the delete icon.
   * 
   * **true** to show, **false** to hide.
   * 
   * Default value: **false**
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  allowClose?: boolean;

  /**
   * Accessibility options of the default close icon.
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
   * Accessible description of the chip. You can provide comprehensive text explanations of the chip in **ChipGroup** to
   * help users understand the action they are about to perform and its potential consequences. This is particularly 
   * important when such outcomes cannot be directly inferred from the chip's own properties or its accessibility text. 
   * If a chip contains both text information and the accessible description, the text is announced first and then the 
   * accessible description, when the chip is selected.
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
   * Accessibility level of the chip. It determines whether the chip can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" by the system.
   * 
   * **"yes"**: The chip can be recognized by accessibility services.
   * 
   * **"no"**: The chip cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the chip nor its child components can be recognized by accessibility services.
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
 * Defines the common attributes shared by all chips.
 * 
 * > **NOTE**
 * >
 * > 1. The size settings for chips can be of two types: (1) **ChipSize**, which conveniently offers two size options, 
 * > **NORMAL** and **SMALL**; (2) **SizeOptions**.
 * >
 * > 2. If **backgroundColor** or **selectedBackgroundColor** is set to **undefined**, the default background color is 
 * > used. If an invalid value is provided, the background color is transparent.
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
   * Chip size. The ChipSize type needs to be imported from the Chip component.
   * 
   * Default value: **ChipSize.NORMAL** or **{ height: 0, width: 0 }**
   * 
   * If the value is **undefined**, the default value is used.
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
   * If this parameter is set to **undefined**, the default value is used.
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
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text color of the chip when it is activated.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary_contrary')**
   * 
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selectedFontColor?: ResourceColor;

  /**
   * Background color of the chip when it is activated.
   * 
   * Default value: **$r('sys.color.ohos_id_color_emphasize')**
   * 
   * If this parameter is set to **undefined**, the default value is used.
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
   * Spacing between chips. Percentage values are not supported.
   * 
   * Value range:
   * 
   * Number type: a value greater than or equal to 0 (for example, **0**, **8**, **16**, or **24.5**)
   * 
   * String type: a value greater than or equal to 0, with a unit of fp, vp, px, or lpx (for example, **"8vp"**, 
   * **"16fp"**, **"12px"**, or **"10lpx"**)
   * 
   * Not supported: negative values, percentage units, and invalid string formats.
   * 
   * Default value: **8**
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
  itemSpace?: string | number;

  /**
   * Left padding. Percentage values are not supported.
   * 
   * Default value: **16**
   * 
   * Unit: vp
   * 
   * If this parameter is set to **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startSpace?: Length;

  /**
   * Right padding. Percentage values are not supported.
   * 
   * Default value: **16**
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
  endSpace?: Length;
}

/**
 * Defines the configuration for the trailing builder, with constraints applied to background size and color settings.
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
   * Custom builder icon.
   * 
   * When the chip size is **ChipSize.SMALL**, the suffix is at {width: 16, height: 16} by default.
   * 
   * When the chip size is **ChipSize.NORMAL**, the suffix is at {width: 24, height: 24} by default.
   * 
   * To dynamically change the size, you must use the 
   * [SymbolGlyphModifier]{@link ./arkui/SymbolGlyphModifier:SymbolGlyphModifier} type when importing the 
   * [IconGroupSuffix]{@link IconGroupSuffix} API.
   * 
   * If the value is **undefined**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon: IconOptions;

  /**
   * Callback of custom builder items.
   * 
   * If the value is **undefined**, the event is unbound.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  action: Callback<void>;

  /**
   * Accessibility text, that is, accessibility label name, of the suffix icon. If an icon does not contain text 
   * information, it will not be announced by the screen reader when selected. In this case, the screen reader user 
   * cannot know which icon is selected. To solve this problem, you can set accessibility text for icons without text 
   * information. When such an icon is selected, the screen reader announces the specified accessibility text, informing
   * the user which icon is selected.
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
   * Accessible description of the suffix icon. You can provide comprehensive text explanations to help users understand
   * the operation they are about to perform and its potential consequences, especially when these cannot be inferred 
   * from the component's attributes and accessibility text alone. If an icon contains both text information and the 
   * accessible description, the text is announced first and then the accessible description, when the icon is selected.
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
   * Accessibility level of the suffix icon. It determines whether the icon can be recognized by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" when **action** is set for the icon and as "no" otherwise.
   * 
   * **"yes"**: The icon can be recognized by accessibility services.
   * 
   * **"no"**: The icon cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the icon nor its child components can be recognized by accessibility services.
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
 * Suffix icon option type of ChipGroup.
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
   * Settings of the trailing symbol item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 14 dynamic
   */
  symbol: SymbolGlyphModifier;

  /**
   * Action of the trailing symbol item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  action: VoidCallback;

  /**
   * Accessibility text of the trailing symbol item. If a trailing symbol item does not contain text information, it 
   * will not be announced by the screen reader when selected. In this case, the screen reader user cannot know which 
   * item is selected. To solve this problem, you can set accessibility text for trailing symbol items without text 
   * information. When such a trailing symbol item is selected, the screen reader announces the specified accessibility 
   * text, informing the user which item is selected.
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
   * Accessible description of the trailing symbol item. You can provide comprehensive text explanations to help users 
   * understand the operation they are about to perform and its potential consequences, especially when these cannot be 
   * inferred from the component's attributes and accessibility text alone. If a trailing symbol item contains both text
   * information and the accessible description, the text is announced first and then the accessible description, when 
   * the trailing symbol item is selected.
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
   * Accessibility level of the trailing symbol item. It determines whether the trailing symbol item can be recognized 
   * by accessibility services.
   * 
   * The options are as follows:
   * 
   * **"auto"**: It is treated as "yes" by the system.
   * 
   * **"yes"**: The trailing symbol item can be recognized by accessibility services.
   * 
   * **"no"**: The trailing symbol item cannot be recognized by accessibility services.
   * 
   * **"no-hide-descendants"**: Neither the trailing symbol item nor its child components can be recognized by 
   * accessibility services.
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
 * Defines the top and bottom padding of a **ChipGroup** component, which is used to control the overall height of the 
 * ChipGroup.
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
   * Top padding. Percentage values are not supported.
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
   * Bottom padding. Percentage values are not supported.
   * 
   * Default value: **14**
   * 
   * Unit: vp
   * 
   * If this parameter is set to **undefined**, the default value is used.
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
 * The **ChipGroup** component provides a set of chips for organizing and categorizing files or resource content.
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
   * Custom builder items.
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
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
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
 * > **NOTE**
 * >
 * > 1. When **multiple** is set to **false**, if **selectedIndexes** is not passed in, the first chip is automatically 
 * > selected by default. However, if the provided **selectedIndexes** includes multiple elements, the chip at the first
 * > index is selected by default.
 * >
 * > 2. To use the suffix functionality, the **IconGroupSuffix** API must be imported. If this API is not provided, the 
 * > suffix area will remain empty.
 * >
 * > 3. The icon fill colors (**fillColor** and **activedFillColor**) must match the font color (**fontColor**). If 
 * > different colors need to be set, use **prefixSymbol** when passing in 
 * > [ChipGroupSpaceOptions]{@link ChipGroupSpaceOptions}.
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
   * Specific attributes of each chip. For details, see [ChipGroupItemOptions[]]{@link ChipGroupItemOptions}.
   * 
   * If the value is **undefined**, the **ChipGroup** component is empty by default.
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
   * Style attributes of the chip, such as the color and size. For details, see [ChipItemStyle]{@link ChipItemStyle}.
   * 
   * Default value:
   * 
   * {  size: ChipSize.NORMAL, backgroundColor: $r('sys.color.ohos_id_color_button_normal'), fontColor: $r('
   * sys.color.ohos_id_color_text_primary'), selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'), 
   * selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize') }
   * 
   * If the value is **undefined**, the default value is used.
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
   * Index of the selected chip.
   * 
   * Default value: **[0]**
   * 
   * If the value is **undefined**, the default value is used.
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
   * **true**: Multiple chips can be selected. **false**: Only one chip can be selected.
   * 
   * Default value: **false**
   * 
   * If the value is **undefined**, the default value is used.
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
   * [ChipGroupSpaceOptions]{@link ChipGroupSpaceOptions}.
   * 
   * Default value: { itemSpace: 8, startSpace: 16, endSpace: 16 }
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
  @Prop
  chipGroupSpace?: ChipGroupSpaceOptions;

  /**
   * Top and bottom padding, used to control the overall height. The type is 
   * [ChipGroupPaddingOptions]{@link ChipGroupPaddingOptions}.
   * 
   * Default value: { top: 14, bottom: 14 }
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
  @Prop
  chipGroupPadding?: ChipGroupPaddingOptions;

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
  @Prop
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component when selected. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
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
   * Callback invoked when the chip status changes.
   * 
   * If the value is **undefined**, the event is unbound.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onChange?: Callback<Array<number>>;

  /**
   * Callback used to customize a builder. To display custom content on the rightmost side of the component, configure 
   * the **suffix** property. Use of the **suffix** property requires referencing the 
   * [IconGroupSuffix]{@link IconGroupSuffix} API.
   * 
   * By default, if this parameter is not passed, there is no suffix.
   * 
   * If the value is **undefined**, there is no suffix.
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