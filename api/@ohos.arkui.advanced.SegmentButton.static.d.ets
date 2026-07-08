
'use static';
/*
  * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';

import {
  PropRef,
  ObjectLink,
  Link,
  Observed
} from './@ohos.arkui.stateManagement';

import {
  ResourceStr,
  SizeOptions,
  ResourceColor,
  PX,
  VP,
  FP,
  LPX,
  Resource,
  FontWeight,
  Padding,
  Dimension,
  LocalizedPadding,
  BlurStyle,
  Direction,
  LengthMetrics,
  Component,
  BuilderParam,
  Builder
} from './@ohos.arkui.component';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines text only item of SegmentButton.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface SegmentButtonTextItem {

  /**
   * The text of text only item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon only item of SegmentButton.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface SegmentButtonIconItem {

  /**
   * The icon of icon only item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon only item in the selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines icon and text item of SegmentButton.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface SegmentButtonIconTextItem {

  /**
   * The icon of icon and text item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines the DimensionNoPercentage type.
 *
 * @unionmember { PX }
 * @unionmember { VP }
 * @unionmember { FP }
 * @unionmember { LPX }
 * @unionmember { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type DimensionNoPercentage = PX | VP | FP | LPX | Resource;

/**
 * Defines the BorderRadiusMode type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare enum BorderRadiusMode {

  /**
   * Default mode, radius is auto calculated by framework.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  DEFAULT = 0,

  /**
   * Custom mode, radius can be set by developers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  CUSTOM = 1
}

/**
 * Defines SegmentButton common options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface CommonSegmentButtonOptions {

  /**
   * The font color of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontColor?: ResourceColor;

  /**
   * The font color of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontColor?: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontSize?: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @default $r('sys.float.ohos_id_text_size_body2')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontSize?: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @default FontWeight.Regular
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontWeight?: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @default FontWeight.Medium
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontWeight?: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @default $r('sys.color.ohos_id_color_button_normal')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundColor?: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedBackgroundColor?: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @default SizeOptions { width: 24, height: 24 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  imageSize?: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @default For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
   *     For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttonPadding?: Padding | Dimension;

  /**
   * The localized padding of buttons.
   *
   * @default For text only / icon only buttons LocalizedPadding
   *     { top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4),
   *     start: LengthMetrics.vp(8) }.
   *     For text & icon buttons LocalizedPadding
   *     { top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6),
   *     start: LengthMetrics.vp(8) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  textPadding?: Padding | Dimension;

  /**
   * The localized padding of text in button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  direction?: Direction;

  /**
   * The border radius mode of SegmentButton.
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * The background border radius of SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * The border radius of selected item in SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  itemBorderRadius?: LengthMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines the ItemRestriction type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type ItemRestriction<T> = Array<T>;

/**
 * Defines the SegmentButtonItemTuple type.
 *
 * @unionmember { ItemRestriction<SegmentButtonTextItem> }
 * @unionmember { ItemRestriction<SegmentButtonIconItem> }
 * @unionmember { ItemRestriction<SegmentButtonIconTextItem> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
declare type SegmentButtonItemTuple =
  ItemRestriction<SegmentButtonTextItem> |
  ItemRestriction<SegmentButtonIconItem> |
  ItemRestriction<SegmentButtonIconTextItem>;

/**
 * Defines SegmentButton tab options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface TabSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * The items of tab type of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttons: ItemRestriction<SegmentButtonTextItem>;
}

/**
 * Defines SegmentButton capsule options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface CapsuleSegmentButtonConstructionOptions extends CommonSegmentButtonOptions {

  /**
   * The items of capsule type of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttons: SegmentButtonItemTuple;

  /**
   * Support multiple selections flag.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  multiply?: boolean;
}

/**
 * Defines the type of SegmentButton options of tab type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface TabSegmentButtonOptions extends TabSegmentButtonConstructionOptions {

  /**
   * The type of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  type: "tab";
}

/**
 * Defines the type of SegmentButton options of capsule type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface CapsuleSegmentButtonOptions extends CapsuleSegmentButtonConstructionOptions {

  /**
   * The type of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  type: "capsule";
}

/**
 * Construct parameter types for SegmentButtonItemOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
interface SegmentButtonItemOptionsConstructorOptions {

  /**
   * The icon of icon and text item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of icon and text item in the selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of icon and text item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * The options for SegmentButton items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptions {

  /**
   * The icon of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * The accessibilityText of icon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconAccessibilityText?: ResourceStr;

  /**
   * The icon of selected item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIcon?: ResourceStr;

  /**
   * The accessibilityText of selectedIcon.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedIconAccessibilityText?: ResourceStr;

  /**
   * The text of item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * The accessibilityLevel of buttonItem.
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * The accessibilityDescription of buttonItem.
   *
   * @default ""
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * The constructor used to create a SegmentButtonOptionsArray object.
   *
   * @param { SegmentButtonItemOptionsConstructorOptions } options - item info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(options: SegmentButtonItemOptionsConstructorOptions);
}

/**
 * The class for SegmentButton item options array.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Observed
declare class SegmentButtonItemOptionsArray extends Array<SegmentButtonItemOptions> {

  /**
   * The constructor used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(elements: SegmentButtonItemTuple);

  /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(item: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem): int;

  /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * Appends new elements to the end of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item3 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  push(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item3: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * Removes the last element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  pop(): SegmentButtonItemOptions | undefined;

  /**
   * Removes the first element from SegmentButtonItemOptionsArray.
   *
   * @returns { SegmentButtonItemOptions | undefined } Returns the removed element.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  shift(): SegmentButtonItemOptions | undefined;

  /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(item: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem): int;

  /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,

  ): int;

  /**
   * Appends new elements to the start of SegmentButtonItemOptionsArray.
   *
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item1 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item2 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @param { SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem } item3 - New element to add to
   *     SegmentButtonItemOptionsArray.
   * @returns { int } Returns the new length of SegmentButtonItemOptionsArray.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  unshift(
    item1: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item2: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
    item3: SegmentButtonTextItem | SegmentButtonIconItem | SegmentButtonIconTextItem,
  ): int;

  /**
   * Changes the elements of SegmentButtonItemOptionsArray by removing or replacing existing elements and/or adding new
   * elements in place.
   *
   * @param { int } start - The zero-based location in the array from which to start removing elements.
   *     <br>The value should be an integer.
   * @param { int } deleteCount - The number of elements to remove.
   *     <br>The value should be an integer.
   * @param { SegmentButtonItemOptions[] } items - Elements to insert into the array in place of the deleted elements.
   * @returns { SegmentButtonItemOptions[] } Returns a SegmentButtonItemOptions array containing the deleted elements.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  splice(start: int, deleteCount: int, ...items: SegmentButtonItemOptions[]): SegmentButtonItemOptions[];

  /**
   * The function used to create a SegmentButtonItemOptionsArray object.
   *
   * @param { SegmentButtonItemTuple } elements - The SegmentButton items.
   * @returns { SegmentButtonItemOptionsArray } Returns the a new SegmentButtonItemOptionsArray object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  static create(elements: SegmentButtonItemTuple): SegmentButtonItemOptionsArray;
}

/**
 * The class for SegmentButton options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Observed
declare class SegmentButtonOptions {

  /**
   * The type of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  type: "tab" | "capsule";

  /**
   * The support multiple selections flag of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  multiply: boolean;

  /**
   * The buttons information of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttons: SegmentButtonItemOptionsArray;

  /**
   * The font color of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontColor: ResourceColor;

  /**
   * The font color of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontColor: ResourceColor;

  /**
   * The font size of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontSize: DimensionNoPercentage;

  /**
   * The font size of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontSize: DimensionNoPercentage;

  /**
   * The font weight of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  fontWeight: FontWeight;

  /**
   * The font weight of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedFontWeight: FontWeight;

  /**
   * The background color of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundColor: ResourceColor;

  /**
   * The background color of selected button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  selectedBackgroundColor: ResourceColor;

  /**
   * The image size of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  imageSize: SizeOptions;

  /**
   * The padding of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  buttonPadding: Padding | Dimension;

  /**
   * The localized padding of buttons.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedButtonPadding?: LocalizedPadding;

  /**
   * The padding of text in button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  textPadding: Padding | Dimension;

  /**
   * The localized padding of text in button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  localizedTextPadding?: LocalizedPadding;

  /**
   * The blurStyle of background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundBlurStyle: BlurStyle;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
   * @syscap SystemCapability.ArkUI.ArkUI.Full [since 23]
   * @systemapi [since 23 - 24]
   * @publicapi [since 26.0.0]
   * @stagemodelonly
   * @since 23 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * The constructor used to create a SegmentButtonOptions object.
   *
   * @param { TabSegmentButtonOptions | CapsuleSegmentButtonOptions } options - The options of SegmentButton.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(options: TabSegmentButtonOptions | CapsuleSegmentButtonOptions);

  /**
   * The function used to create a SegmentButtonOptions of tab type.
   *
   * @param { TabSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of tab type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  static tab(options: TabSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * The function used to create a SegmentButtonOptions of capsule type.
   *
   * @param { CapsuleSegmentButtonConstructionOptions } options - The options of SegmentButton.
   * @returns { SegmentButtonOptions } Returns the a new SegmentButtonOptions object of capsule type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  static capsule(options: CapsuleSegmentButtonConstructionOptions): SegmentButtonOptions;

  /**
   * Indicates the attribute of the current segment button direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  direction?: Direction;

  /**
   * The border radius mode of SegmentButton.
   *
   * @default BorderRadiusMode.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  borderRadiusMode?: BorderRadiusMode;

  /**
   * The background border radius of SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  backgroundBorderRadius?: LengthMetrics;

  /**
   * The border radius of selected item in SegmentButton.
   * Only takes effect when borderRadiusMode is set to BorderRadiusMode.Custom.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  itemBorderRadius?: LengthMetrics;
}

/**
 * Declare Component SegmentButton
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
declare struct SegmentButton {

  /**
   * The options of SegmentButton.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @ObjectLink
  options: SegmentButtonOptions;

  /**
   * The selectedIndex.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Link
  selectedIndexes: int[];

  /**
   * The max font scale of the segmented button option text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @PropRef
  maxFontScale: double | Resource;

  /**
   * The click event callback will be triggered when a option button of SegmentButton is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  onItemClicked?: Callback<int>;

  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;

  /**
   * Enable animation when selectedIndexes change.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @PropRef
  enableStateAnimation: boolean;
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
  SegmentButtonItemOptionsConstructorOptions,
  SegmentButtonItemOptions,
  BorderRadiusMode
}
