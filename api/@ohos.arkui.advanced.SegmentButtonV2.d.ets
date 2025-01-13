/*
  * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file api/@ohos.arkui.advanced.SegmentedButton.d.ts
 * @kit ArkUI
 */

import { ColorMetrics, LengthMetrics } from '@ohos.arkui.node';
import { ImageModifier, SymbolGlyphModifier, TextModifier } from '@ohos.arkui.modifier';
import { SizeT } from '@ohos.arkui.node';

/**
 * Defines the options of the segmented button item.
 * 
 * @interface SegmentButtonV2ItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
export interface SegmentButtonV2ItemOptions {
    /**
     * Sets the text of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    text?: ResourceStr;

    /**
     * Sets the image icon of the segmented button item.
     * This field will be useless if the symbol field is sets.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    icon?: ResourceStr;

    /**
     * Sets the symbol icon of the segmented button item.
     * 
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    symbol?: Resource;

    /**
     * Sets whether segmented button item is enabled?
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    enabled?: boolean;

    /**
     * Sets modifier for the text of the segmented button item.
     * 
     * @type { ?TextModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    textModifier?: TextModifier;

    /**
     * Sets modifier for the image icon of the segmented button item.
     * 
     * @type { ?ImageModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    iconModifier?: ImageModifier;

    /**
     * Sets modifier for the symbol icon of the segmented button item.
     * 
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    symbolModifier?: SymbolGlyphModifier;

    /**
     * Sets the accessibility text of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    accessibilityText?: ResourceStr;

    /**
     * Sets the accessibility description of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Sets the accessibility level of the segmented button item.
     * 
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    accessibilityLevel?: string;
}

/**
 * The callback function that will be invoked when the selectedIndex of the segmented button is changed.
 * 
 * @typedef { function } OnSelectedIndexChange
 * @param { number } selectedIndex - the index of selected item
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
export type OnSelectedIndexChange = (selectedIndex: number) => void;

/**
 * The callback function that will be invoked when the selectedIndexes of the segmented button is changed.
 * 
 * @typedef { function } OnSelectedIndexesChange
 * @param { number[] } selectedIndexes - the index of selected items
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
export type OnSelectedIndexesChange = (selectedIndexes: number[]) => void;

/**
 * Defines segmented button item.
 * 
 * @interface SegmentButtonV2Item
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
@ObservedV2
export declare class SegmentButtonV2Item {
    /**
     * Sets the text of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace text?: ResourceStr;

    /**
     * Sets the image icon of the segmented button item.
     * This field will be useless if the symbol field is sets.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace icon?: ResourceStr;

    /**
     * Sets the symbol icon of the segmented button item.
     * 
     * @type { ?Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace symbol?: Resource;

    /**
     * Sets whether segmented button item is enabled?
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace enabled: boolean;

    /**
     * Sets modifier for the text of the segmented button item.
     * 
     * @type { ?TextModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace textModifier?: TextModifier;

    /**
     * Sets modifier for the image icon of the segmented button item.
     * 
     * @type { ?ImageModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace iconModifier?: ImageModifier;

    /**
     * Sets modifier for the symbol icon of the segmented button item.
     * 
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace symbolModifier?: SymbolGlyphModifier;

    /**
     * Sets the accessibility text of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace accessibilityText?: ResourceStr;

    /**
     * Sets the accessibility description of the segmented button item.
     * 
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace accessibilityDescription?: ResourceStr;

    /**
     * Sets the accessibility level of the segmented button item.
     * 
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Trace accessibilityLevel?: string;

    /**
     * The constructor of SegmentedButtonItem
     * 
     * @param { SegmentedButtonItemOptions } options - the options of the segmented button item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    constructor(options: SegmentButtonV2ItemOptions);

    /**
     * Is the segmented button item set with both text and icon?
     * 
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    get isHybrid(): boolean;
}

/**
 * Defines the items of the segmented button.
 * 
 * @extends Array<SegmentButtonV2Item>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
@ObservedV2
export declare class SegmentButtonV2Items extends Array<SegmentButtonV2Item> {
    /**
     * The constructor of SegmentedButtonItems
     * 
     * @param { SegmentButtonV2ItemOptions[] } items - the options array of the segmented button items
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    constructor(items: SegmentButtonV2ItemOptions[]);

    /**
     * Is there an option in the segmented button options that sets both text and icon?
     * 
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    get hasHybrid(): boolean;
}

/**
 * Defines segmented button with tab style.
 * 
 * @struct TabSegmentedButton
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
@ComponentV2
export declare struct TabSegmentButtonV2 {
    /**
     * Sets the items of the segmented button.
     * 
     * @type { SegmentButtonV2Items }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Sets the selected index of the segmented button.
     * 
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly selectedIndex: number;

    /**
     * Sets the callback function which will be invoked when the selected index of the segmented button is changed.
     * 
     * @type { ?OnSelectedIndexChange }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    $selectedIndex?: OnSelectedIndexChange;

    /**
     * Sets the callback function which will be invoked when the item of the segmented button is clicked.
     * 
     * @type { ?Callback<number> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Sets the min font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Sets the max font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Sets the space for all item of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Sets the font size for the text of all segmented button items that are not selected.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Sets the font size for the text of all segmented button selected items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Sets the font color for the text of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Sets the font color for the text of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Sets the font weight for the text of all segmented button items that are not selected.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Sets the font weight for the text of all segmented button selected items.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Sets the border radius for all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Sets the background color for all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Sets the size for the icon of all segmented button items.
     * 
     * @type { ?SizeT<LengthMetrics> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Sets the fill color for the icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Sets the fill color for the icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Sets the font size for the symbol icon of all segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

    /**
     * Sets the min height of all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Sets the padding of all segmented button items.
     * 
     * @type { ?LocalizedPadding }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Sets the shadow of all segmented button items.
     * 
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemShadow?: ShadowOptions | ShadowStyle;

    /**
     * Sets the background color of the segmented button.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundColor?: ColorMetrics;

    /**
     * Sets the background blur style of the segmented button.
     * 
     * @type { ?BlurStyle }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundBlurStyle?: BlurStyle;

    /**
     * Sets the background blur style options of the segmented button.
     * 
     * @type { ?BackgroundBlurStyleOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Sets the background effect of the segmented button.
     * 
     * @type { ?BackgroundEffectOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundEffect?: BackgroundEffectOptions;

    /**
     * Sets the border radius of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBorderRadius?: LengthMetrics;

    /**
     * Sets the min height of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonMinHeight?: LengthMetrics;

    /**
     * Sets the padding of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonPadding?: LengthMetrics;

    /**
     * Sets the language direction of the segmented button.
     * 
     * @type { ?Direction }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * Sets the build function of the segmented button.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    build(): void;
}

/**
 * Defines the segmented button with capsule style.
 * 
 * @struct CapsuleSegmentButtonV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
@ComponentV2
export declare struct CapsuleSegmentButtonV2 {
    /**
     * Sets the items of the segmented button.
     * 
     * @type { SegmentButtonV2Items }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Sets the selected index of the segmented button.
     * 
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly selectedIndex: number;

    /**
     * Sets the callback function which will be invoked when the selected index of the segmented button is changed.
     * 
     * @type { ?OnSelectedIndexChange }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    $selectedIndex?: OnSelectedIndexChange;

    /**
     * Sets the callback function which will be invoked when the item of the segmented button is clicked.
     * 
     * @type { ?Callback<number> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Sets the min font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Sets the max font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Sets the space for all item of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Sets the font color for the text of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Sets the font color for the text of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Sets the font size for the text of all segmented button items that are not selected.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Sets the font size for the text of all segmented button selected items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Sets the font weight for the text of all segmented button items that are not selected.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Sets the font weight for the text of all segmented button selected items.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Sets the border radius for all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Sets the background color for all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Sets the size for the icon of all segmented button items.
     * 
     * @type { ?SizeT<LengthMetrics> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Sets the fill color for the icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Sets the fill color for the icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Sets the font size for the symbol icon of all segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

    /**
     * Sets the min height of all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Sets the padding of all segmented button items.
     * 
     * @type { ?LocalizedPadding }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Sets the shadow of all segmented button items.
     * 
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemShadow?: ShadowOptions | ShadowStyle;

    /**
     * Sets the background color of the segmented button.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundColor?: ColorMetrics;

    /**
     * Sets the background blur style of the segmented button.
     * 
     * @type { ?BlurStyle }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundBlurStyle?: BlurStyle;

    /**
     * Sets the background blur style options of the segmented button.
     * 
     * @type { ?BackgroundBlurStyleOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Sets the background effect of the segmented button.
     * 
     * @type { ?BackgroundEffectOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBackgroundEffect?: BackgroundEffectOptions;

    /**
     * Sets the border radius of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonBorderRadius?: LengthMetrics;

    /**
     * Sets the min height of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonMinHeight?: LengthMetrics;

    /**
     * Sets the padding of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly buttonPadding?: LengthMetrics;

    /**
     * Sets the language direction of the segmented button.
     * 
     * @type { ?Direction }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * Sets the build function of the segmented button.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    build(): void;
}

/**
 * Defines the segmented button with capsule style.
 * 
 * @struct CapsuleSegmentButtonV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 16
 */
@ComponentV2
export declare struct MultiCapsuleSegmentButtonV2 {
    /**
     * Sets the items of the segmented button.
     * 
     * @type { SegmentButtonV2Items }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Sets the selection of the segmented button.
     * 
     * @type { number[] }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Require
    @Param
    readonly selectedIndexes: number[];

    /**
     * Sets the callback function will be invoked when the selectedInexes field of the segmented button is changed.
     * 
     * @type { ?OnSelectedIndexesChange } OnSelectedIndexesChange
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    $selectedIndexes: OnSelectedIndexesChange;

    /**
     * Sets the callback function will be invoked when the item of the segmented button is clicked.
     * 
     * @type { ?Callback<number> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Sets the min font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Sets the max font scale for all items of the segmented button.
     * 
     * @type { ?(number | Resource) }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Sets the space for each item of the segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Sets the font color for the text of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Sets the font color for the text of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Sets the font size for the text of all segmented button items that are not selected.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Sets the font size for the text of all segmented button selected items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Sets the font weight for the text of all segmented button items that are not selected.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Sets the font weight for the text of all segmented button selected items.
     * 
     * @type { ?FontWeight }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Sets the border radius for all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Sets the background color for all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBackgroundColor?: ColorMetrics;

    /**
     * Sets the background effect of all segmented button items that are not selected.
     * 
     * @type { ?BackgroundEffectOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBackgroundEffect?: BackgroundEffectOptions;
    
    /**
     * Sets the background blur style of all segmented button items that are not selected.
     * 
     * @type { ?BlurStyle }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBackgroundBlurStyle?: BlurStyle;
    
    /**
     * Sets the background blur style options of all segmented button items that are not selected.
     * 
     * @type { ?BackgroundBlurStyleOptions }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Sets the background color for all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Sets the size for the icon of all segmented button items.
     * 
     * @type { ?SizeT<LengthMetrics> }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Sets the fill color for the icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Sets the fill color for the icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Sets the font size for the symbol icon of all segmented button.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button items that are not selected.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * Sets the font color for the symbol icon of all segmented button selected items.
     * 
     * @type { ?ColorMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

     /**
     * Sets the min height of all segmented button items.
     * 
     * @type { ?LengthMetrics }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Sets the padding of all segmented button items.
     * 
     * @type { ?LocalizedPadding }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Sets the language direction of the segmented button.
     * 
     * @type { ?Direction }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * Sets the build function of the segmented button.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 16
     */
    build(): void;
}
