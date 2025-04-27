/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { CommonMethod, CustomBuilder, UICommonMethod, AttributeModifier } from "./common";
import { TextHeightAdaptivePolicy, TextOverflow, VerticalAlign } from "./enums";
import { Dimension, Font, Length, LocalizedPadding, Padding, Resource, ResourceColor, ResourceStr, VoidCallback } from "./units";
import { ComponentContent } from '../ComponentContent';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Enum for the mode of the tab bar when selected.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum SelectedMode {
    /**
     * The value of indicator
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    INDICATOR,
    /**
     * The value of board
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BOARD
}
/**
 * Enum for the layout mode of the content in the tab bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum LayoutMode {
    /**
     * The the content is laid vertically or horizontally, according to its width.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO = 0,
    /**
     * The the content is laid vertically
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    VERTICAL = 1,
    /**
     * The the content is laid horizontally
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    HORIZONTAL = 2
}
/**
 * Provide an interface for the style of an indicator including color, height, width, border radius
 * and margin top
 *
 * @interface SubTabBarIndicatorStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface SubTabBarIndicatorStyle {
    /**
     * Define the color of the indicator
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Define the height of the indicator
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height?: Length;
    /**
     * Define the width of the indicator.
     * If it is 0, the width will be equal to the width of the content
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width?: Length;
    /**
     * Define the border radius of the indicator
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderRadius?: Length;
    /**
     * Define the margin top of the indicator
     *
     * @type { ?Length }
     * @default 8
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    marginTop?: Length;
}
/**
 * Provide an interface for the style of an indicator including border radius
 *
 * @interface BoardStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface BoardStyle {
    /**
     * Define the border radius of the board
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderRadius?: Length;
}
/**
 * TabBarLabelStyle object.
 *
 * @interface TabBarLabelStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TabBarLabelStyle {
    /**
     * overflow mode.
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    overflow?: TextOverflow;
    /**
     * Label max lines.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxLines?: number;
    /**
     * Min font size for adapted height.
     *
     * @type { ?(number | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    minFontSize?: number | ResourceStr;
    /**
     * Max font size for adapted height.
     *
     * @type { ?(number | ResourceStr) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    maxFontSize?: number | ResourceStr;
    /**
     * Adapt text height option.
     *
     * @type { ?TextHeightAdaptivePolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    heightAdaptivePolicy?: TextHeightAdaptivePolicy;
    /**
     * Font style.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    font?: Font;
    /**
     * The text color of the selected tab bar.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedColor?: ResourceColor;
    /**
     * The text color of the unselected tab bar.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    unselectedColor?: ResourceColor;
}
/**
 * TabBarIconStyle object.
 *
 * @interface TabBarIconStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TabBarIconStyle {
    /**
     * The icon color of the selected tab bar.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedColor?: ResourceColor;
    /**
     * The icon color of the unselected tab bar.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    unselectedColor?: ResourceColor;
}
/**
 * TabBarSymbol object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare class TabBarSymbol {
    /**
     * The properties of the symbol icon in the tab bar need to be unselected.
     *
     * @type { SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    normal: SymbolGlyphModifier;
    /**
     * The properties of the symbol icon in the tab bar need to be selected.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    selected?: SymbolGlyphModifier;
}
/**
 * Icon and text for TabBar.
 *
 * @typedef TabBarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface TabBarOptions {
    /**
     * TabBar icon.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    icon?: string | Resource;
    /**
     * TabBar text.
     *
     * @type { ?(string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    text?: string | Resource;
}
/**
 * Define SubTabBarStyle, the style is text and underline.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class SubTabBarStyle {
    /**
     * constructor.
     *
     * @param { ResourceStr } content - indicates the content of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(content: ResourceStr);
    /**
     * constructor.
     *
     * @param { ResourceStr | ComponentContent } content - indicates the content of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(content: ResourceStr | ComponentContent);
    /**
     * constructor
     *
     * @param { ResourceStr } content - indicates the content of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static of(content: ResourceStr): SubTabBarStyle;
    /**
     * Create a content object of the sub tab bar
     *
     * @param { ResourceStr | ComponentContent } content - indicates the content of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static of(content: ResourceStr | ComponentContent): SubTabBarStyle;
    /**
     * Set the style of the indicator when selected
     *
     * @param { SubTabBarIndicatorStyle } value - indicates the indicator style of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    indicator(value: SubTabBarIndicatorStyle): SubTabBarStyle;
    /**
     * Set the mode of the indicator when selected
     *
     * @param { SelectedMode } value - indicates the selected mode of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedMode(value: SelectedMode): SubTabBarStyle;
    /**
     * Set the style of the board when selected
     *
     * @param { BoardStyle } value - indicates the board style of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    board(value: BoardStyle): SubTabBarStyle;
    /**
     * Set the label style of the indicator
     *
     * @param { TabBarLabelStyle } value - indicates the label style of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelStyle(value: TabBarLabelStyle): SubTabBarStyle;
    /**
     * Set the padding of the sub tab bar
     *
     * @param { Padding | Dimension } value - indicates the padding of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    padding(value: Padding | Dimension): SubTabBarStyle;
    /**
     * Set the padding of the sub tab bar
     *
     * @param { LocalizedPadding } padding - indicates the padding of the sub tab bar
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    padding(padding: LocalizedPadding): SubTabBarStyle;
    /**
     * Set an id to the sub tab bar to identify it
     *
     * @param { string } value - id of the sub tab bar to identify it
     * @returns { SubTabBarStyle } the style of the sub tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id(value: string): SubTabBarStyle;
}
/**
 * Define BottomTabBarStyle, the style is icon and text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class BottomTabBarStyle {
    /**
     * constructor.
     *
     * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
     * @param { ResourceStr } text - indicates the text of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr);
    /**
     * of.
     *
     * @param { ResourceStr | TabBarSymbol } icon - indicates the icon of the bottom tab bar
     * @param { ResourceStr } text - indicates the text of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle;
    /**
     * Set the label style of the indicator
     *
     * @param { TabBarLabelStyle } value - indicates the label style of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    labelStyle(value: TabBarLabelStyle): BottomTabBarStyle;
    /**
     * Set the padding of the bottom tab bar
     *
     * @param { Padding | Dimension | LocalizedPadding } value - indicates the padding of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle;
    /**
     * Set the layout mode of the bottom tab bar
     *
     * @param { LayoutMode } value - indicates the layout mode of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    layoutMode(value: LayoutMode): BottomTabBarStyle;
    /**
     * Set the vertical alignment style of the bottom tab bar
     *
     * @param { VerticalAlign } value - indicates the vertical alignment of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    verticalAlign(value: VerticalAlign): BottomTabBarStyle;
    /**
     * Set the symmetric extensible of the bottom tab bar
     *
     * @param { boolean } value - indicates whether the bottom tab bar is extensible
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    symmetricExtensible(value: boolean): BottomTabBarStyle;
    /**
     * Set an id to the bottom tab bar to identify it
     *
     * @param { string } value - id of the bottom tab bar to identify it
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    id(value: string): BottomTabBarStyle;
    /**
     * Set the icon style of the bottom tab bar
     *
     * @param { TabBarIconStyle } style - indicates the icon style of the bottom tab bar
     * @returns { BottomTabBarStyle } the style of the bottom tab bar
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    iconStyle(style: TabBarIconStyle): BottomTabBarStyle;
}
export declare interface TabContentAttribute extends CommonMethod {
    /**
     * Set the content of the tab bar.
     *
     * @param { ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions } content
     * Set the content of the tab bar.
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions | undefined): this;
    /**
     * Called when the tab content will show.
     * @param { VoidCallback  } event
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillShow(event: VoidCallback | undefined): this;
    /**
     * Called when the tab content will hide.
     * @param { VoidCallback  } event
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onWillHide(event: VoidCallback | undefined): this;
    attributeModifier(modifier: AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UITabContentAttribute extends UICommonMethod {
    /**
     * Set the content of the tab bar.
     *
     * @param { ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions } content
     * Set the content of the tab bar.
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions | undefined): this;
    /**
     * Called when the tab content will show.
     * @param { VoidCallback  } event
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillShow(event: VoidCallback | undefined): this;
    /**
     * Called when the tab content will hide.
     * @param { VoidCallback  } event
     * @returns { TabContentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onWillHide(event: VoidCallback | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<TabContentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function TabContent(
    
    @memo
    content_?: () => void,
): UITabContentAttribute