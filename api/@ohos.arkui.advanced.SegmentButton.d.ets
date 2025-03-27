/*
  * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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




/*** if arkts 1.2 */
import { BlurStyle, Callback, Component, Link, ObjectLink, Prop } from '../component/common';
import { Direction, FontWeight } from '../component/enums';
import { Dimension, FP, LPX, LocalizedPadding, PX, Padding, Resource, ResourceColor, ResourceStr, SizeOptions, VP } from '../component/units';
/*** endif */

/**
 * Defines text only item of SegmentButton.
 *
 * @interface SegmentButtonTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines text only item of SegmentButton.
 *
 * @interface SegmentButtonTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */

interface SegmentButtonTextItem {
  /**
   * The text of text only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The text of text only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon only item of SegmentButton.
 *
 * @interface SegmentButtonIconItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines icon only item of SegmentButton.
 *
 * @interface SegmentButtonIconItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SegmentButtonIconItem {
  /**
   * The icon of icon only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon only item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon only item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon only item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon and text item of SegmentButton.
 *
 * @interface SegmentButtonIconTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines icon and text item of SegmentButton.
 *
 * @interface SegmentButtonIconTextItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SegmentButtonIconTextItem {
  /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The text of icon and text item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines the DimensionNoPercentage type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the DimensionNoPercentage type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
 * Defines SegmentButton common options.
 *
 * @interface CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines SegmentButton common options.
 *
 * @interface CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CommonSegmentButtonOptions {
  /**
   * The font color of buttons.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font color of buttons.
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
   * The font color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontColor?: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font size of buttons.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize?: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font size of selected button.
   *
   * @type { ?DimensionNoPercentage }
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font weight of buttons.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight?: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font weight of selected button.
   *
   * @type { ?FontWeight }
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontWeight?: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The background color of SegmentButton.
   *
   * @type { ?ResourceColor }
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor?: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The background color of selected button.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @type { ?SizeOptions }
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The image size of buttons.
   *
   * @type { ?SizeOptions }
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageSize?: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @type { ?Padding | Dimension }
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *          For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The padding of buttons.
   *
   * @type { ?Padding | Dimension }
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *          For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttonPadding?: Padding | Dimension;

   /**
   * The localized padding of buttons.
   *
   * @type { ?LocalizedPadding }
   * @default For text only / icon only buttons LocalizedPadding
   * { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }.
   * For text & icon buttons LocalizedPadding
   * {{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @type { ?Padding | Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The padding of text in button.
   *
   * @type { ?Padding | Dimension }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textPadding?: Padding | Dimension;

   /**
   * The localized padding of text in button.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @type { ?BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The blurStyle of background.
   *
   * @type { ?BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: Direction;
}

/**
 * Defines the ItemRestriction type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the ItemRestriction type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type ItemRestriction<T> = [T, T, T?, T?, T?];

/**
 * Defines the SegmentButtonItemTuple type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the SegmentButtonItemTuple type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type SegmentButtonItemTuple = ItemRestriction<SegmentButtonTextItem> | ItemRestriction<SegmentButtonIconItem> | ItemRestriction<SegmentButtonIconTextItem>;

/**
 * Defines the SegmentButtonItemArray type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the SegmentButtonItemArray type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type SegmentButtonItemArray = Array<SegmentButtonTextItem> | Array<SegmentButtonIconItem> | Array<SegmentButtonIconTextItem>;

/**
 * Defines SegmentButton tab options.
 *
 * @interface TabSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines SegmentButton tab options.
 *
 * @interface TabSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {
  /**
   * The items of tab type of SegmentButton.
   *
   * @type { ItemRestriction<SegmentButtonTextItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * The items of tab type of SegmentButton.
   *
   * @type { ItemRestriction<SegmentButtonTextItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttons: ItemRestriction<SegmentButtonTextItem>;
}

/**
 * Defines SegmentButton capsule options.
 *
 * @interface CapsuleSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines SegmentButton capsule options.
 *
 * @interface CapsuleSegmentButtonConstructionOptions
 * @extends CommonSegmentButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {
  /**
   * The items of capsule type of SegmentButton.
   *
   * @type { SegmentButtonItemTuple }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The items of capsule type of SegmentButton.
   *
   * @type { SegmentButtonItemTuple }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttons: SegmentButtonItemTuple;

  /**
   * Support multiple selections flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Support multiple selections flag.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  multiply?: boolean;
}

/**
 * Defines the type of SegmentButton options of tab type.
 *
 * @interface TabSegmentButtonOptions
 * @extends TabSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the type of SegmentButton options of tab type.
 *
 * @interface TabSegmentButtonOptions
 * @extends TabSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface TabSegmentButtonOptions extends TabSegmentButtonConstructionOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "tab" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "tab" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: "tab";
}

/**
 * Defines the type of SegmentButton options of capsule type.
 *
 * @interface CapsuleSegmentButtonOptions
 * @extends CapsuleSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Defines the type of SegmentButton options of capsule type.
 *
 * @interface CapsuleSegmentButtonOptions
 * @extends CapsuleSegmentButtonConstructionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CapsuleSegmentButtonOptions extends CapsuleSegmentButtonConstructionOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: "capsule";
}

/**
 * Construct parameter types for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Construct parameter types for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface SegmentButtonItemOptionsConstructorOptions {
  /**
   * The icon of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of icon and text item in the selected state.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The text of icon and text item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * The options for SegmentButton items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * The options for SegmentButton items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Observed
declare class SegmentButtonItemOptions {
  /**
   * The icon of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of selected item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The icon of selected item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The text of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @type { ?ResourceStr }
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The constructor used to create a SegmentButtonOptionsArray object.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * The constructor used to create a SegmentButtonOptionsArray object.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(options: SegmentButtonItemOptionsConstructorOptions);
}

/**
 * The class for SegmentButton item options array.
 *
 * @extends Array<SegmentButtonItemOptions>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * The class for SegmentButton item options array.
 *
 * @extends Array<SegmentButtonItemOptions>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Observed
declare class SegmentButtonItemOptionsArray extends Array<SegmentButtonItemOptions> {
  /**
   * The constructor used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The constructor used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  push(...items: SegmentButtonItemArray): number;

  /**
   * Removes the last element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Removes the last element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * Removes the first element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Removes the first element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonItemArray } items - New elements to add to SegmentButtonItemOptionsArray.
   * @returns { number } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  unshift(...items: SegmentButtonItemArray): number;

  /**
   * Changes the elements of SegmentButtonItemOptionsArray by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - The zero-based location in the array from which to start removing elements.
   * @param { number } deleteCount - The number of elements to remove.
   * @param { SegmentButtonItemOptions[] } items - Elements to insert into the array in place of the deleted elements.
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * Changes the elements of SegmentButtonItemOptionsArray by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - The zero-based location in the array from which to start removing elements.
   * @param { number } deleteCount - The number of elements to remove.
   * @param { SegmentButtonItemOptions[] } items - Elements to insert into the array in place of the deleted elements.
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  splice(start: number, deleteCount: number, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * The function used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @returns { SegmentButtonItemOptionsArray } Returns the a new SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The function used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @returns { SegmentButtonItemOptionsArray } Returns the a new SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray;
}

/**
 * The class for SegmentButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * The class for SegmentButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Observed
declare class SegmentButtonOptions {
  /**
   * The type of SegmentButton.
   *
   * @type { "tab" | "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The type of SegmentButton.
   *
   * @type { "tab" | "capsule" }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type: "tab" | "capsule";

  /**
   * The support multiple selections flag of SegmentButton.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The support multiple selections flag of SegmentButton.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  multiply: boolean;

  /**
   * The buttons information of SegmentButton.
   *
   * @type { SegmentButtonOptionsArray }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The buttons information of SegmentButton.
   *
   * @type { SegmentButtonOptionsArray }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * The font color of buttons.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font color of buttons.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontColor: ResourceColor;

  /**
   * The font color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontColor: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font size of buttons.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSize: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font size of selected button.
   *
   * @type { DimensionNoPercentage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font weight of buttons.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeight: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The font weight of selected button.
   *
   * @type { FontWeight }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedFontWeight: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The background color of SegmentButton.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The background color of selected button.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @type { SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The image size of buttons.
   *
   * @type { SizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  imageSize: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The padding of buttons.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  buttonPadding: Padding | Dimension;

   /**
   * The localized padding of buttons.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The padding of text in button.
   *
   * @type { Padding | Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  textPadding: Padding | Dimension;

   /**
   * The localized padding of text in button.
   *
   * @type { ?LocalizedPadding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @type { BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The blurStyle of background.
   *
   * @type { BlurStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * The constructor used to create a SegmentButtonOptions object.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - The options of SegmentButton.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The constructor used to create a SegmentButtonOptions object.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - The options of SegmentButton.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * The function used to create a SegmentButtonOptions of tab type.
   *
   * @param { TabSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of tab type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The function used to create a SegmentButtonOptions of tab type.
   *
   * @param { TabSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of tab type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * The function used to create a SegmentButtonOptions of capsule type.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of capsule type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The function used to create a SegmentButtonOptions of capsule type.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of capsule type.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: Direction;
}

/**
 * Declare Component SegmentButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
 /**
 * Declare Component SegmentButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
@Component
declare struct SegmentButton {
  /**
   * The options of SegmentButton.
   *
   * @type { SegmentButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The options of SegmentButton.
   *
   * @type { SegmentButtonOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  @ObjectLink
  options: SegmentButtonOptions;

  /**
   * The selectedIndex.
   *
   * @type { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
   /**
   * The selectedIndex.
   *
   * @type { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  @Link
  selectedIndexes: number[];

  /**
   * The max font scale of the segmented button option text.
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  @Prop
  maxFontScale: number | Resource;

  /**
   * The click event callback will be triggered when a option button of SegmentButton is clicked.
   * 
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onItemClicked?: Callback<number>;
}

export {
  SegmentButton,
  SegmentButtonOptions,
  SegmentButtonItemOptionsArray,
  TabSegmentButtonOptions,
  TabSegmentButtonConstructionOptions,
  CapsuleSegmentButtonOptions,
  CapsuleSegmentButtonConstructionOptions,
  SegmentButtonTextItem,
  SegmentButtonIconItem,
  SegmentButtonIconTextItem,
  DimensionNoPercentage,
  CommonSegmentButtonOptions,
  ItemRestriction,
  SegmentButtonItemTuple,
  SegmentButtonItemArray,
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions
};
