/*
* Copyright (C) 2023-2025 Huawei Device Co., Ltd.
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
/*** if arkts 1.2 */
import { Callback } from '../component/common';
import { Builder } from '../component/customComponent';
import { Direction } from '../component/enums';
import { Dimension, LengthMetrics, ResourceColor, ResourceStr, SizeOptions, VoidCallback } from '../component/units';
/*** endif */

/**
 * Enum for ChipSize
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
/**
 * Enum for ChipSize
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */

export declare enum ChipSize {

  /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NORMAL = "NORMAL",

  /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SMALL = "SMALL"
}

/**
 * Enum for AccessibilitySelectedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
export declare enum AccessibilitySelectedType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CLICKED = 0,

  /**
   * Checked type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CHECKED = 1,

  /**
   * Selected type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  SELECTED = 2
}

/**
 * Defines the icon common option.
 *
 * @interface IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the icon common option.
 *
 * @interface IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface IconCommonOptions {

  /**
   * Image resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Image resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  src: ResourceStr;

  /**
   * Image size option.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Image size option.
   *
   * @type { ?SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: SizeOptions;

  /**
   * Image filled color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Image filled color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fillColor?: ResourceColor;

  /**
   * Image filled color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activatedFillColor?: ResourceColor;
}

/**
 * Defines the suffix icon option.
 *
 * @interface SuffixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the suffix icon option.
 *
 * @interface SuffixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface SuffixIconOptions extends IconCommonOptions {

  /**
   * Called when the suffix icon is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Called when the suffix icon is clicked.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  action?: () => void;

  /**
   * Set accessibility text for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;
}

/**
 * Defines the prefix icon option.
 *
 * @interface PrefixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the prefix icon option.
 *
 * @interface PrefixIconOptions
 * @extends IconCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface PrefixIconOptions extends IconCommonOptions {}

/**
 * Defines accessibility icon options.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface AccessibilityOptions {
  /**
   * Set accessibility level for accessibility icon.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility text for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for accessibility icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines accessibility options of default close icon.
 *
 * @interface CloseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface CloseOptions extends AccessibilityOptions {}

/**
 * Defines chip symbolglyph options.
 *
 * @interface ChipSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ChipSymbolGlyphOptions {

  /**
   * Symbol normal.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  normal?: SymbolGlyphModifier;

  /**
   * Symbol activated.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines accessibility options of suffix symbol.
 *
 * @interface ChipSuffixSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'14','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ChipSuffixSymbolGlyphOptions {
  /**
   * Set normal accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  normalAccessibility?: AccessibilityOptions;

  /**
   * Set activated accessibility options for suffix symbol.
   *
   * @type { ?AccessibilityOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activatedAccessibility?: AccessibilityOptions;

  /**
   * Called when the suffix symbol is clicked.
   *
   * @type { ?VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  action?: VoidCallback;
}

/**
 * Defines label margin.
 *
 * @interface LabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines label margin.
 *
 * @interface LabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface LabelMarginOptions {

  /**
   * Left label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Left label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  left?: Dimension;

  /**
   * Right label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Right label margin length.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  right?: Dimension;
}

/**
 * Defines localized label margin.
 *
 * @interface LocalizedLabelMarginOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface LocalizedLabelMarginOptions {

   /**
   * start localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
   start?: LengthMetrics;

   /**
   * end localized label margin length.
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  end?: LengthMetrics;
}

/**
 * Defines label option.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines label option.
 *
 * @interface LabelOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface LabelOptions {

  /**
   * Text content.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Text content.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: string;

  /**
   * Text font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Text font size.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize?: Dimension;

  /**
   * Text font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Text font color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor?: ResourceColor;

  /**
   * Text font color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activatedFontColor?: ResourceColor;

  /**
   * Text font family.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Text font family.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontFamily?: string;

  /**
   * Label margin.
   *
   * @type { ?LabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Label margin.
   *
   * @type { ?LabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  labelMargin?: LabelMarginOptions;

   /**
   * Localized label margin.
   *
   * @type { ?LocalizedLabelMarginOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localizedLabelMargin?: LocalizedLabelMarginOptions;
}

/**
 * Defines chip options.
 *
 * @interface ChipOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines chip options.
 *
 * @interface ChipOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface ChipOptions {
  /**
   * Chip prefix icon.
   *
   * @type { ?PrefixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip prefix icon.
   *
   * @type { ?PrefixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  prefixIcon?: PrefixIconOptions;

  /**
   * Chip prefix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  prefixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Chip label.
   *
   * @type { LabelOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip label.
   *
   * @type { LabelOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  label: LabelOptions;

  /**
   * Chip suffix icon.
   *
   * @type { ?SuffixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip suffix icon.
   *
   * @type { ?SuffixIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  suffixIcon?: SuffixIconOptions;

  /**
   * Chip suffix symbol.
   *
   * @type { ?ChipSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  suffixSymbol?: ChipSymbolGlyphOptions;

  /**
   * Set options for suffix symbol.
   *
   * @type { ?ChipSuffixSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions;

  /**
   * Show close icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Show close icon.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  allowClose?: boolean;

  /**
   * Set options for default close icon when 'allowaClose' is true.
   *
   * @type { ?CloseOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  closeOptions?: CloseOptions;

  /**
   * Enable chip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Enable chip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enabled?: boolean;

  /**
   * Set whether chip is active or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activated?: boolean;

  /**
   * Chip background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor?: ResourceColor;

  /**
   * Chip background color when chip is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  activatedBackgroundColor?: ResourceColor;

  /**
   * Chip radius.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip radius.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  borderRadius?: Dimension;

  /**
   * Chip size.
   *
   * @type { ?ChipSize | SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Chip size.
   *
   * @type { ?ChipSize | SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: ChipSize | SizeOptions;

  /**
   * On close action.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * On close action.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onClose?: () => void;

  /**
   * On clicked action.
   *
   * @type { ?Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onClicked?: Callback<void>;

  /**
   * Indicates the attribute of the current chip direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
   direction?: Direction;

  /**
   * Set accessibility description for Chip.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for Chip.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility selected type for Chip.
   *
   * @type { ?AccessibilitySelectedType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilitySelectedType?: AccessibilitySelectedType;
}

/**
 * Build function of Chip.
 *
 * @param { ChipOptions } options - chip option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Build function of Chip.
 *
 * @param { ChipOptions } options - chip option.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Builder
export declare function Chip(options: ChipOptions): void;
