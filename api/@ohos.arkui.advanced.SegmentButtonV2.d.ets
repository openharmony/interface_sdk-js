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
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines segmented button item options.
 * 
 * > **Description**
 * >
 * > 1. If both **symbol** and **icon** are configured, **symbol** takes precedence.
 * >
 * > 2. If both **symbol** and **symbolModifier** are configured with HM Symbol resources, the resources specified by 
 * > **symbolModifier** take precedence.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export interface SegmentButtonV2ItemOptions {
    /**
     * Text of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    text?: ResourceStr;

    /**
     * Image icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    icon?: ResourceStr;

    /**
     * HM Symbol icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    symbol?: Resource;

    /**
     * Whether the segmented button item is available.
     * 
     * Default value: **true**
     * 
     * **true**: available; **false**: unavailable.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    enabled?: boolean;

    /**
     * Text modifier for the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    textModifier?: TextModifier;

    /**
     * Style modifier for the image icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    iconModifier?: ImageModifier;

    /**
     * Style modifier for the HM Symbol icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    symbolModifier?: SymbolGlyphModifier;

    /**
     * Accessibility text of the segmented button item. For details, see
     * [accessibilityText]{@link CommonMethod#accessibilityText(value: string)}.
     * 
     * Default value: **""**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    accessibilityText?: ResourceStr;

    /**
     * [Accessibility description]{@link CommonMethod#accessibilityDescription(value: string)} of the segmented button 
     * item.
     * 
     * Default value: **""**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level of the segmented button item. For details, see
     * [accessibilityLevel]{@link CommonMethod#accessibilityLevel}.
     * 
     * Default value: **"auto"**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines a callback invoked when the selected segmented button item changes.
 *
 * @param { number } selectedIndex - Index of the segmented button item. The first item is numbered 0, and subsequent
 *     items are numbered in ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type OnSelectedIndexChange = (selectedIndex: number) => void;

/**
 * Defines a callback invoked when the selected segmented button items change.
 *
 * @param { number[] } selectedIndexes - Indexes of the selected items in the segmented button. The first item is
 *     numbered 0, and subsequent items are numbered in ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type OnSelectedIndexesChange = (selectedIndexes: number[]) => void;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Item {
    /**
     * Text of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    text?: ResourceStr;

    /**
     * Image icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    icon?: ResourceStr;

    /**
     * HM Symbol icon of the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    symbol?: Resource;

    /**
     * Whether the segmented button item is enabled.
     * 
     * Default value: **true**
     * 
     * **true**: enabled. **false**: disabled.
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    enabled: boolean;

    /**
     * Text modifier for the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    textModifier?: TextModifier;

    /**
     * Image icon modifier for the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    iconModifier?: ImageModifier;

    /**
     * HM Symbol icon modifier for the segmented button item.
     * 
     * Default value: **undefined**
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    symbolModifier?: SymbolGlyphModifier;

    /**
     * [Accessibility text]{@link CommonMethod#accessibilityText(value: string)} of the segmented button item.
     * 
     * Default value: **""**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    accessibilityText?: ResourceStr;

    /**
     * [Accessibility description]{@link CommonMethod#accessibilityDescription(value: string)} of the segmented button 
     * item.
     * 
     * Default value: **""**
     * 
     * If the value is **undefined**, the default value is used.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    accessibilityDescription?: ResourceStr;

    /**
     * Accessibility level of the segmented button item [accessibilityLevel]{@link CommonMethod#accessibilityLevel}.
     * 
     * Default value: **"auto"**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * **Decorator:** @Trace
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Trace
    accessibilityLevel?: string;

    /**
     * Constructs a **SegmentButtonV2ItemOptions** instance.
     *
     * @param { SegmentButtonV2ItemOptions } options - Configuration parameters for the segmented button item.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    constructor(options: SegmentButtonV2ItemOptions);

    /**
     * Checks whether the segmented button item has text and icon configured. Difference from
     * [hasHybrid]{@link SegmentButtonV2Items#hasHybrid}: **hasHybrid** checks whether the component contains mixed icon
     * and text items, while this API checks whether a single item has text and icon configured.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    get isHybrid(): boolean;
}

/**
 * Represents items of the **SegmentButtonV2** component.
 * 
 * This parameter is inherited from Array\<[SegmentButtonV2Item]{@link SegmentButtonV2Item}>.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ObservedV2
export declare class SegmentButtonV2Items extends Array<SegmentButtonV2Item> {
    /**
     * Constructs a **SegmentButtonV2ItemOptions** instance.
     *
     * @param { SegmentButtonV2ItemOptions[] } items - Options of the item of the **SegmentButtonV2** component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    constructor(items: SegmentButtonV2ItemOptions[]);

    /**
     * Checks whether the component contains mixed icon and text items.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    get hasHybrid(): boolean;
}

/**
 * The segmented button component is used to create tab-type, single-selection, or multi-selection capsule segmented
 * buttons. It supports multiple option types such as text, icons, and symbols, as well as graphic-text hybrid
 * configurations, and allows customization of fonts, colors, corner radii, and other styles. The tab segmented button
 * is suitable for tab switching scenarios, the single-selection capsule segmented button is suitable for single-
 * selection switching scenarios, and the multi-selection capsule segmented button is suitable for multi-selection
 * filtering scenarios.
 *
 * > **NOTE**
 * >
 * > Since API version 26.0.0, when **backgroundSystemMaterial** is set to a system material with automatic color
 * > inversion, **itemFontColor**, **itemSelectedFontColor**, **itemIconFillColor**,
 * > **itemSelectedIconFillColor**, **itemSymbolFontColor**, and **itemSelectedSymbolFontColor** use special
 * > system resources that support color inversion, and the colors automatically adapt to the inverted color of the
 * > material background.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct TabSegmentButtonV2 {
    /**
     * Items of the segmented button.
     * 
     * When the value is **undefined**, no option information is displayed.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Index of the selected option in the segmented button. The first item is numbered 0, and subsequent items increase
     * sequentially.
     * 
     * Value range: [0, items length - 1]
     * 
     * When the value is **undefined**, no option is selected. When a valid value (including **0**) is passed, the
     * option at the corresponding index is selected. When the value is greater than items length - 1, the item at index
     * items length - 1 is selected. When the value is less than 0, the item at index 0 is selected.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly selectedIndex: number;

    /**
     * Callback invoked when the selected item of the segmented button changes.
     *
     * Default value: **undefined**, meaning the callback is not triggered when not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    $selectedIndex?: OnSelectedIndexChange;

    /**
     * Callback invoked when a segmented button item is clicked. The callback parameter is of the number type,
     * indicating the index of the clicked option. The first item is numbered 0, and subsequent items increase
     * sequentially.
     *
     * Default value: **undefined**, meaning the callback is not triggered when not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Minimum font scale multiplier for the text size of the segmented button item.
     * 
     * Value range: [0, 1]
     * 
     * Default value: **0**
     * 
     * **NOTE**
     * 
     * If the set minimum font scale value is less than 0, the value **0** is used. If the set minimum font scale value
     * is greater than 1, the value **1** is used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Maximum font scale multiplier for the text size of the segmented button item.
     * 
     * Value range: [1, 2]
     * 
     * Default value: **1**
     * 
     * **NOTE**
     * 
     * If the set value is less than 1, the value **1** is used. If the set value is greater than 2, the value **2** is
     * used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Spacing between segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `LengthMetrics.vp(0)`
     * 
     * **NOTE**
     * 
     * Percentage types are not supported. Abnormal values are processed as the default value.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Font size of the unselected option in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * **NOTE**
     * 
     * Percentage types are not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Font size of the selected option in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * **NOTE**
     * 
     * Percentage types are not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemSelectedFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Font color of the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Font color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemSelectedFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Font weight of the unselected option in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * If the value is out of range, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemFontWeight** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Font weight of the selected option in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * If the value is out of range, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemSelectedFontWeight** does not take
     * effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Corner radius of the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.segment_button_v2_selected_corner_radius')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Background color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.segment_button_v2_tab_selected_item_background')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Size of the image icon in the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
     * 
     * If the value is out of range, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **iconModifier**\/**width** or **height** attribute, **itemIconSize** does not take
     * effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Icon color of the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemIconFillColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Icon color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemSelectedIconFillColor** does not take
     * effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Size of the HM Symbol type icon in the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `20fp`
     * 
     * **NOTE**
     * 
     * Percentage types are not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **symbolModifier**\/**fontSize** attribute, **itemSymbolFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * Color of the HM Symbol type icon for the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSymbolFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * Color of the HM Symbol type icon for the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **NOTE**
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSelectedSymbolFontColor** does not take
     * effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

    /**
     * Minimum height of the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value:
     * 
     * When there are only text-only or icon-only options:
     * `$r('sys.float.segment_button_v2_singleline_selected_height')`; when there are mixed icon and text items:
     * `$r('sys.float.segment_button_v2_doubleline_selected_height')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Padding of the segmented button item.
     * 
     * Default value: 
     * `{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Shadow of the segmented button item.
     * 
     * Default value: **ShadowStyle.OUTER_DEFAULT_XS**
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemShadow?: ShadowOptions | ShadowStyle;

    /**
     * Background color of the segmented button.
     * 
     * Default value: `$r('sys.color.segment_button_v2_tab_button_background')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundColor?: ColorMetrics;

    /**
     * Blur material of the segmented button background.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundBlurStyle?: BlurStyle;

    /**
     * Blur material parameters of the segmented button background.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Background effect parameters of the segmented button.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundEffect?: BackgroundEffectOptions;

    /**
     * Corner radius of the segmented button background.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.segment_button_v2_background_corner_radius')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBorderRadius?: LengthMetrics;

    /**
     * Minimum height of the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: when there are only text-only or icon-only options:
     * `$r('sys.float.segment_button_v2_singleline_background_height')`; when there are mixed icon and text items:
     * `$r('sys.float.segment_button_v2_doubleline_background_height')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonMinHeight?: LengthMetrics;

    /**
     * Padding of the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.padding_level1')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonPadding?: LengthMetrics;

    /**
     * Layout direction of the segmented button.
     * 
     * Default value: **Direction.Auto**
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * System material of the background of the segmented button component. Different system materials have different
     * attribute effects. After a material is passed in, the animation effect of **SegmentButtonV2** changes.
     *
     * When a system material is used, the segmented button supports the capability of the background of the selected
     * item following the finger drag. The index of the selected item remains unchanged during the drag and is updated
     * when the drag ends.
     *
     * Default value: no material effect.
     *
     * This member is read-only and cannot be changed.
     *
     * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic
     */
    @Param
    readonly backgroundSystemMaterial?: uiMaterial.Material;

    /**
     * Whether to enable the attribute animation of the segmented button when the **selectedIndex** value is modified
     * through a variable.
     *
     * The value **true** enables the attribute animation of the segmented button. When this attribute is not configured
     * or the value is **false**, the attribute animation of the segmented button is disabled and the default switching
     * animation effect of the component is used.
     *
     * Default value: **false**
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    @Param
    readonly enableStateAnimation?: boolean;

    /**
     * Sets the build function of the segmented button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    build(): void;
}

/**
 * The segmented button component is used to create tab-type, single-selection, or multi-selection capsule segmented
 * buttons. It supports multiple option types such as text, icons, and symbols, as well as graphic-text hybrid
 * configurations, and allows customization of fonts, colors, corner radii, and other styles. The tab segmented button
 * is suitable for tab switching scenarios, the single-selection capsule segmented button is suitable for single-
 * selection switching scenarios, and the multi-selection capsule segmented button is suitable for multi-selection
 * filtering scenarios.
 *
 * > **NOTE**
 * >
 * > Since API version 26.0.0, when **backgroundSystemMaterial** is set to a system material with automatic color
 * > inversion, **itemFontColor**, **itemSelectedFontColor**, **itemIconFillColor**,
 * > **itemSelectedIconFillColor**, **itemSymbolFontColor**, and **itemSelectedSymbolFontColor** use special
 * > system resources that support color inversion, and the colors automatically adapt to the inverted color of the
 * > material background.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct CapsuleSegmentButtonV2 {
    /**
     * Items of the segmented button.
     * 
     * When the value is **undefined**, no item information is displayed.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Index of the selected option in the segmented button. The first item is numbered 0, and subsequent items are
     * numbered sequentially.
     * 
     * Value range: [0, items length - 1]
     * 
     * When the value is **undefined**, no option is selected. When a valid value (including **0**) is passed, the
     * option at the corresponding index is selected. When the value is greater than items length - 1, the item at index
     * items length - 1 is selected. When the value is less than 0, the item at index 0 is selected.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly selectedIndex: number;

    /**
     * Callback invoked when the selected item of the segmented button changes.
     *
     * Default value: **undefined**, meaning the callback is not triggered when not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    $selectedIndex?: OnSelectedIndexChange;

    /**
     * Callback invoked when a segmented button item is clicked. The callback parameter is of the number type,
     * indicating the index of the clicked option. The first item is numbered 0, and subsequent items are numbered
     * sequentially.
     *
     * Default value: **undefined**, meaning the callback is not triggered when not set.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Minimum font scale multiplier for the text size of the segmented button item.
     * 
     * Value range: [0, 1]
     * 
     * Default value: **0**
     * 
     * **NOTE**
     * 
     * If the set minimum font scale value is less than 0, the value **0** is used. If the set minimum font scale value
     * is greater than 1, the value **1** is used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Maximum font scale multiplier for the text size of the segmented button item.
     * 
     * Value range: [1, 2]
     * 
     * Default value: **1**
     * 
     * **NOTE**
     * 
     * If the set value is less than 1, the value **1** is used. If the set value is greater than 2, the value **2** is
     * used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Spacing between segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `LengthMetrics.vp(0)`
     * 
     * **Note:**
     * 
     * Percentage types are not supported. Abnormal values are handled as the default value.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Font color of the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Font color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemSelectedFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Font size of the unselected option in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * **Note:**
     * 
     * Percentage types are not supported. Abnormal values are handled as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Font size of the selected option in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * **Note:**
     * 
     * Percentage types are not supported. Abnormal values are handled as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemSelectedFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Font weight of the unselected option in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * If the value is out of range, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemFontWeight** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Font weight of the selected option in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * If the value is out of range, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemSelectedFontWeight** does not take
     * effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Corner radius of the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.segment_button_v2_selected_corner_radius')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Background color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.comp_background_emphasize')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Size of the image icon in the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
     * 
     * If the value is out of range, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **iconModifier**\/**width** or **height** attribute, **itemIconSize** does not take
     * effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Icon color of the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemIconFillColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Icon color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemSelectedIconFillColor** does not take
     * effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Size of the HM Symbol-type icon in the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `20fp`
     * 
     * **Note:**
     * 
     * Percentage types are not supported. Abnormal values are handled as the default value.
     * 
     * When **items** sets the **symbolModifier**\/**fontSize** attribute, **itemSymbolFontSize** does not take effect.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * HM Symbol-type icon color of the unselected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSymbolFontColor** does not take effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * HM Symbol-type icon color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * **Note:**
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSelectedSymbolFontColor** does not take
     * effect.
     * 
     * When **backgroundSystemMaterial** is set to a system material with automatic color inversion, this attribute uses
     * a special system resource that supports color inversion, and the color automatically adapts to the inverted color
     * of the material background.
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

    /**
     * Minimum height of the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value:
     * 
     * When there are only text-only or icon-only options:
     * `$r('sys.float.segment_button_v2_singleline_selected_height')`; when there are mixed icon and text items:
     * `$r('sys.float.segment_button_v2_doubleline_selected_height')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Padding of the segmented button item.
     * 
     * Default value: 
     * `{ top: LengthMetrics.resource($r('sys.float.padding_level2')), bottom: LengthMetrics.resource($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4')) }`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Shadow of the segmented button item.
     * 
     * Default value: **ShadowStyle.OUTER_DEFAULT_XS**
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemShadow?: ShadowOptions | ShadowStyle;

    /**
     * Background color of the segmented button.
     * 
     * Default value: `$r('sys.color.segment_button_v2_tab_button_background')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundColor?: ColorMetrics;

    /**
     * Blur material of the segmented button background.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundBlurStyle?: BlurStyle;

    /**
     * Blur material parameters of the segmented button background.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Background effect parameters of the segmented button.
     * 
     * Default value: **undefined**
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBackgroundEffect?: BackgroundEffectOptions;

    /**
     * Corner radius of the segmented button background.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.segment_button_v2_background_corner_radius')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonBorderRadius?: LengthMetrics;

    /**
     * Minimum height of the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: when there are only text-only or icon-only options:
     * `$r('sys.float.segment_button_v2_singleline_background_height')`; when there are mixed icon and text items:
     * `$r('sys.float.segment_button_v2_doubleline_background_height')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonMinHeight?: LengthMetrics;

    /**
     * Padding of the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `$r('sys.float.padding_level1')`
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly buttonPadding?: LengthMetrics;

    /**
     * Layout direction of the segmented button.
     * 
     * Default value: **Direction.Auto**
     * 
     * If the value is out of range, the default value is used.
     * 
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * System material of the background of the segmented button component. Different system materials have different
     * attribute effects. After a material is passed in, the animation effect of **SegmentButtonV2** changes.
     *
     * When a system material is used, the segmented button supports the capability of the background of the selected
     * item following the finger drag. The index of the selected item remains unchanged during the drag and is updated
     * when the drag ends.
     *
     * Default value: no material effect.
     *
     * This member is read-only and cannot be changed.
     *
     * @type { ?uiMaterial.Material } material - System-styled material. [since 23 - 24]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi [since 23 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @crossplatform [since 26.0.0]
     * @atomicservice [since 26.0.0]
     * @since 23 dynamic
     */
    @Param
    readonly backgroundSystemMaterial?: uiMaterial.Material;

    /**
     * Whether to enable the attribute animation of the segmented button when the **selectedIndex** value is modified
     * through a variable.
     *
     * The value **true** means to enable the attribute animation of the segmented button; when this attribute is not
     * configured or the value is **false**, the attribute animation of the segmented button is not enabled, and the
     * default transition animation effect of the component is used.
     *
     * Default value: **false**
     *
     * This member is read-only and cannot be changed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    @Param
    readonly enableStateAnimation?: boolean;

    /**
     * Sets the build function of the segmented button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    build(): void;
}

/**
 * The segmented button component is used to create tab-type, single-selection, or multi-selection capsule segmented
 * buttons. It supports multiple option types such as text, icons, and symbols, as well as graphic-text hybrid
 * configurations, and allows customization of fonts, colors, corner radii, and other styles. The tab segmented button
 * is suitable for tab switching scenarios, the single-selection capsule segmented button is suitable for single-
 * selection switching scenarios, and the multi-selection capsule segmented button is suitable for multi-selection
 * filtering scenarios.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct MultiCapsuleSegmentButtonV2 {
    /**
     * Items of the segmented button.
     * 
     * When the value is **undefined**, no option information is displayed.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly items: SegmentButtonV2Items;

    /**
     * Indexes for the selected items of the segmented button. The first item is numbered 0, and subsequent items are
     * numbered sequentially.
     * 
     * When the value is **undefined**, no option is selected.
     * 
     * NOTE
     * 
     * Only valid button numbers are supported (the first button is numbered 0, and subsequent buttons are numbered
     * sequentially. Value range: [0, items length - 1]). If no item is selected, an empty array `[]` can be passed.
     * When an invalid number (less than 0 or greater than items length - 1) is passed, the corresponding option is not
     * selected.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Require
    @Param
    readonly selectedIndexes: number[];

    /**
     * Callback triggered when the selected item of the segmented button changes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    $selectedIndexes: OnSelectedIndexesChange;

    /**
     * Callback triggered when a segmented button item is clicked. The callback parameter is of the number type,
     * indicating the index of the clicked option. The first item is numbered 0, and subsequent items are numbered
     * sequentially.
     *
     * Default value: **undefined**. When not set, the callback is not triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Event
    onItemClicked?: Callback<number>;

    /**
     * Minimum font scale factor for the text size of segmented button items.
     * 
     * Value range: [0, 1]
     * 
     * Default value: **0**
     * 
     * NOTE
     * 
     * When the set minimum font scale value is less than 0, the value **0** is used. When the set minimum font scale
     * value is greater than 1, the value **1** is used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinFontScale?: number | Resource;

    /**
     * Maximum font scale factor for the text size of segmented button items.
     * 
     * Value range: [1, 2]
     * 
     * Default value: **1**
     * 
     * NOTE
     * 
     * When the set value is less than 1, the value **1** is used. When the set value is greater than 2, the value **2**
     * is used. Abnormal values do not take effect by default.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMaxFontScale?: number | Resource;

    /**
     * Space between segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: **LengthMetrics.vp(1)**
     * 
     * **NOTE**
     * 
     * Percentage values are not supported. If an invalid value is set, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSpace?: LengthMetrics;

    /**
     * Font color of unselected options in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemFontColor** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontColor?: ColorMetrics;

    /**
     * Font color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **textModifier**\/**fontColor** attribute, **itemSelectedFontColor** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontColor?: ColorMetrics;

    /**
     * Font size of unselected options in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * NOTE
     * 
     * Percentage type is not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemFontSize** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontSize?: LengthMetrics;

    /**
     * Font size of the selected option in the segmented button.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `14fp`
     * 
     * NOTE
     * 
     * Percentage type is not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **textModifier**\/**fontSize** attribute, **itemSelectedFontSize** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontSize?: LengthMetrics;

    /**
     * Font weight of unselected options in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * Values outside the value range are processed as the default value.
     * 
     * NOTE
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemFontWeight** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemFontWeight?: FontWeight;

    /**
     * Font weight of the selected option in the segmented button.
     * 
     * Default value: **FontWeight.Medium**
     * 
     * Values outside the value range are processed as the default value.
     * 
     * NOTE
     * 
     * When **items** sets the **textModifier**\/**fontWeight** attribute, **itemSelectedFontWeight** does not take
     * effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedFontWeight?: FontWeight;

    /**
     * Border radius of segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: **$r('sys.float.segment_button_v2_multi_corner_radius')**
     * 
     * If the value is out of the range, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBorderRadius?: LengthMetrics;

    /**
     * Background color of unselected segmented button items.
     * 
     * Default value: **$r('sys.color.segment_button_v2_multi_capsule_button_background')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBackgroundColor?: ColorMetrics;

    /**
     * Background effect of segmented button items.
     * 
     * Default value: **undefined**
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBackgroundEffect?: BackgroundEffectOptions;
    
    /**
     * Background blur style of segmented button items.
     * 
     * Default value: **undefined**
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBackgroundBlurStyle?: BlurStyle;
    
    /**
     * Background blur style options of segmented button items.
     * 
     * Default value: **undefined**
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

    /**
     * Background color of the selected segmented button item.
     * 
     * Default value: **$r('sys.color.comp_background_emphasize')**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedBackgroundColor?: ColorMetrics;

    /**
     * Size of image icons in segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }`
     * 
     * Values outside the value range are processed as the default value.
     * 
     * NOTE
     * 
     * When **items** sets the **iconModifier**\/**width** or height attribute, **itemIconSize** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconSize?: SizeT<LengthMetrics>;

    /**
     * Icon color of unselected options in the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemIconFillColor** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemIconFillColor?: ColorMetrics;

    /**
     * Icon color of the selected option in the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **iconModifier**\/**fillColor** attribute, **itemSelectedIconFillColor** does not take
     * effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedIconFillColor?: ColorMetrics;

    /**
     * Size of HM Symbol-type icons in segmented button items.
     * 
     * Value range: [0, +∞)
     * 
     * Default value: `20fp`
     * 
     * NOTE
     * 
     * Percentage type is not supported. Abnormal values are processed as the default value.
     * 
     * When **items** sets the **symbolModifier**\/**fontSize** attribute, **itemSymbolFontSize** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontSize?: LengthMetrics;

    /**
     * Color of HM Symbol-type icons in unselected options of the segmented button.
     * 
     * Default value: `$r('sys.color.font_secondary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSymbolFontColor** does not take effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSymbolFontColor?: ColorMetrics;

    /**
     * Color of HM Symbol-type icons in the selected option of the segmented button.
     * 
     * Default value: `$r('sys.color.font_on_primary')`
     * 
     * When the value is **undefined**, the default value is used.
     * 
     * NOTE
     * 
     * When **items** sets the **symbolModifier**\/**fontColor** attribute, **itemSelectedSymbolFontColor** does not take
     * effect.
     * 
     * This member is read-only and cannot be modified.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemSelectedSymbolFontColor?: ColorMetrics;

     /**
     * Minimum height of the segmented button item.
     * 
     * Value range: [0, +∞)
     * 
     * Default value:
     * 
     * **$r('sys.float.segment_button_v2_singleline_selected_height')** for text-only buttons and icon-only buttons, and
     * **$r('sys.float.segment_button_v2_doubleline_selected_height')** for text+icon buttons.
     * 
     * If the value is out of the range, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemMinHeight?: LengthMetrics;

    /**
     * Padding of the segmented button item.
     * 
     * Default value: 
     * **{top: LengthMetrics.resource ($r('sys.float.padding_level2')), bottom: LengthMetrics.resource ($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')), end: LengthMetrics.resource($r('sys.float.padding_level4'))}**
     * 
     * If the value is **undefined**, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly itemPadding?: LocalizedPadding;

    /**
     * Language direction of the segmented button.
     * 
     * Default value: **Direction.Auto**
     * 
     * If the value is out of the range, the default value is used.
     * 
     * This property is read-only.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    @Param
    readonly languageDirection?: Direction;

    /**
     * Sets the build function of the segmented button.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    build(): void;
}
