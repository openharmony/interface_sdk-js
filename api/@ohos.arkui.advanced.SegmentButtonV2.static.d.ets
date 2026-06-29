
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
  * limitations under the License.@
  */

/**
 * @file api/@ohos.arkui.advanced.SegmentButtonV2.static.d.ets
 * @kit ArkUI
 */

import { 
    ResourceStr,
    Resource,
    LocalizedPadding,
    FontWeight,
    ShadowOptions,
    ShadowStyle,
    BlurStyle,
    BackgroundBlurStyleOptions,
    BackgroundEffectOptions,
    Direction,
    Callback,
    ComponentV2,
    Builder
} from './@ohos.arkui.component';

import { ObservedV2, Trace, Require, Param, Event } from './@ohos.arkui.stateManagement';

import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';

import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';

import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines the options of the segmented button item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface SegmentButtonV2ItemOptions {

  /**
   * Sets the text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  text?: ResourceStr;

  /**
   * Sets the image icon of the segmented button item.
   * This field will be useless if the symbol field is sets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  icon?: ResourceStr;

  /**
   * Sets the symbol icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  symbol?: Resource;

  /**
   * Sets whether segmented button item is enabled?.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * Sets modifier for the text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  textModifier?: TextModifier;

  /**
   * Sets modifier for the image icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  iconModifier?: ImageModifier;

  /**
   * Sets modifier for the symbol icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  symbolModifier?: SymbolGlyphModifier;

  /**
   * Sets the accessibility text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Sets the accessibility description of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Sets the accessibility level of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
 * The callback function that will be invoked when the selectedIndex of the segmented button is changed.
 *
 * @param { int } selectedIndex - the index of selected item.
 *     <br>The value should be an integer.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnSelectedIndexChange = (selectedIndex: int) => void;

/**
 * The callback function that will be invoked when the selectedIndexes of the segmented button is changed.
 *
 * @param { int[] } selectedIndexes - the index of selected items.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export type OnSelectedIndexesChange = (selectedIndexes: int[]) => void;

/**
 * Defines segmented button item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Item {

  /**
   * Sets the text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  text?: ResourceStr;

  /**
   * Sets the image icon of the segmented button item.
   * This field will be useless if the symbol field is sets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  icon?: ResourceStr;

  /**
   * Sets the symbol icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  symbol?: Resource;

  /**
   * Sets whether segmented button item is enabled?
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  enabled: boolean;

  /**
   * Sets modifier for the text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  textModifier?: TextModifier;

  /**
   * Sets modifier for the image icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  iconModifier?: ImageModifier;

  /**
   * Sets modifier for the symbol icon of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  symbolModifier?: SymbolGlyphModifier;

  /**
   * Sets the accessibility text of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityText?: ResourceStr;

  /**
   * Sets the accessibility description of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityDescription?: ResourceStr;

  /**
   * Sets the accessibility level of the segmented button item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Trace
  accessibilityLevel?: string;

  /**
   * The constructor of SegmentedButtonItem
   *
   * @param { SegmentButtonV2ItemOptions } options - the options of the segmented button item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(options: SegmentButtonV2ItemOptions);

  /**
   * Is the segmented button item set with both text and icon?
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  get isHybrid(): boolean;
}

/**
 * Defines the items of the segmented button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Items extends Array<SegmentButtonV2Item> {

  /**
   * The constructor of SegmentedButtonItems
   *
   * @param { int } length - the length of array.
   *     <br>The value should be an integer.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(length: int);

  /**
   * The constructor of SegmentedButtonItems
   *
   * @param { SegmentButtonV2ItemOptions[] } items - the options array of the segmented button items
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  constructor(items: SegmentButtonV2ItemOptions[]);

  /**
   * Is there an option in the segmented button options that sets both text and icon?
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  get hasHybrid(): boolean;
}

/**
 * Defines segmented button with tab style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct TabSegmentButtonV2 {

  /**
   * Sets the items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * Sets the selected index of the segmented button.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndex: int;

  /**
   * Sets the callback function which will be invoked when the selected index of the segmented button is changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndex?: OnSelectedIndexChange;

  /**
   * Sets the callback function which will be invoked when the item of the segmented button is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * Sets the min font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * Sets the max font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * Sets the space for all item of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * Sets the font size for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * Sets the font size for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Sets the font color for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * Sets the font color for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Sets the font weight for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * Sets the font weight for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Sets the border radius for all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * Sets the background color for all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * Sets the size for the icon of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Sets the fill color for the icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Sets the fill color for the icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * Sets the font size for the symbol icon of all segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Sets the min height of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * Sets the padding of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * Sets the shadow of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * Sets the background color of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * Sets the background blur style of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * Sets the background blur style options of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Sets the background effect of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * Sets the border radius of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * Sets the min height of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * Sets the padding of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * Sets the language direction of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

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
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Enable animation when selectedIndexes change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
 * Defines the segmented button with capsule style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct CapsuleSegmentButtonV2 {

  /**
   * Sets the items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * Sets the selected index of the segmented button.
   * The value should be an integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndex: int;

  /**
   * Sets the callback function which will be invoked when the selected index of the segmented button is changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndex?: OnSelectedIndexChange;

  /**
   * Sets the callback function which will be invoked when the item of the segmented button is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * Sets the min font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * Sets the max font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * Sets the space for all item of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * Sets the font color for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * Sets the font color for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Sets the font size for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * Sets the font size for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Sets the font weight for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * Sets the font weight for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Sets the border radius for all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * Sets the background color for all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * Sets the size for the icon of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Sets the fill color for the icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Sets the fill color for the icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * Sets the font size for the symbol icon of all segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Sets the min height of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * Sets the padding of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * Sets the shadow of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * Sets the background color of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * Sets the background blur style of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * Sets the background blur style options of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Sets the background effect of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * Sets the border radius of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * Sets the min height of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * Sets the padding of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly buttonPadding?: LengthMetrics;

  /**
   * Sets the language direction of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

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
  @Param
  readonly backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Enable animation when selectedIndexes change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  @Param
  readonly enableStateAnimation?: boolean;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
 * Defines the segmented button with capsule style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct MultiCapsuleSegmentButtonV2 {

  /**
   * Sets the items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly items: SegmentButtonV2Items;

  /**
   * Sets the selection of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Require
  @Param
  readonly selectedIndexes: int[];

  /**
   * Sets the callback function will be invoked when the selectedInexes field of the segmented button is changed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly $selectedIndexes?: OnSelectedIndexesChange;

  /**
   * Sets the callback function will be invoked when the item of the segmented button is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Event
  readonly onItemClicked?: Callback<int>;

  /**
   * Sets the min font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinFontScale?: double | Resource;

  /**
   * Sets the max font scale for all items of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMaxFontScale?: double | Resource;

  /**
   * Sets the space for each item of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSpace?: LengthMetrics;

  /**
   * Sets the font color for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontColor?: ColorMetrics;

  /**
   * Sets the font color for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Sets the font size for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontSize?: LengthMetrics;

  /**
   * Sets the font size for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Sets the font weight for the text of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemFontWeight?: FontWeight;

  /**
   * Sets the font weight for the text of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Sets the border radius for all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBorderRadius?: LengthMetrics;

  /**
   * Sets the background color for all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundColor?: ColorMetrics;

  /**
   * Sets the background effect of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundEffect?: BackgroundEffectOptions;

  /**
   * Sets the background blur style of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundBlurStyle?: BlurStyle;

  /**
   * Sets the background blur style options of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Sets the background color for all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedBackgroundColor?: ColorMetrics;

  /**
   * Sets the size for the icon of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Sets the fill color for the icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Sets the fill color for the icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * Sets the font size for the symbol icon of all segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button items that are not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * Sets the font color for the symbol icon of all segmented button selected items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Sets the min height of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemMinHeight?: LengthMetrics;

  /**
   * Sets the padding of all segmented button items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly itemPadding?: LocalizedPadding;

  /**
   * Sets the language direction of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Param
  readonly languageDirection?: Direction;

  /**
   * Sets the build function of the segmented button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   * @noninterop
   */
  @Builder
  build(): void;
}