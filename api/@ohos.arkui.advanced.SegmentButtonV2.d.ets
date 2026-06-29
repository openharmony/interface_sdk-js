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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textModifier?: TextModifier;

  /**
   * Image icon modifier for the segmented button item.
   *
   * Default value: **undefined**
   *
   * Decorator type: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iconModifier?: ImageModifier;

  /**
   * HM Symbol icon modifier for the segmented button item.
   *
   * Default value: **undefined**
   *
   * Decorator type: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  symbolModifier?: SymbolGlyphModifier;

  /**
   * [Accessibility text]{@link CommonMethod#accessibilityText(value: string)} of the segmented button item.
   *
   * Default value: **""**
   *
   * If the value is **undefined**, the default value is used.
   *
   * Decorator type: @Trace
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
   * Decorator type: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  accessibilityDescription?: ResourceStr;

  /**
   * [Accessibility level]{@link CommonMethod#accessibilityLevel} of the segmented button item.
   *
   * Default value: **"auto"**
   *
   * If the value is **undefined**, the default value is used.
   *
   * Decorator type: @Trace
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
 * @param { number } selectedIndex - Index of the selected segmented button item.
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
 * @param { number[] } selectedIndexes - Indexes of selected segmented button items.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 * @noninterop
 */
export type OnSelectedIndexesChange = (selectedIndexes: number[]) => void;

/**
 * Defines segmented button item.
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * Decorator type: @Trace
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
   * [Accessibility level]{@link CommonMethod#accessibilityLevel} of the segmented button item.
   *
   * Default value: **"auto"**
   *
   * If the value is **undefined**, the default value is used.
   *
   * Decorator type: @Trace
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
   * @param { SegmentButtonV2ItemOptions } options - Options of the item of the **SegmentButtonV2** component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options: SegmentButtonV2ItemOptions);

  /**
   * Checks whether the segmented button item contains both text and icon configurations.
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
 * This parameter is inherited from Array\<[SegmentButtonV2Item]{@link SegmentButtonV2Items}>.
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
   * Checks whether the component supports mixed icon and text items.
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
 * Defines segmented button with tab style.
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
   * If the value is **undefined**, the option information is not displayed.
   *
   * This property is read-only.
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
   * Index of the selected segmented button item. The index is zero-based and increments by 1.
   *
   * If the value is undefined, no item is selected. If the value is a non-positive value, the default value **0** is
   * used.
   *
   * This property is read-only.
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
   * Callback invoked when the selected item changes.
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
   * Callback invoked when a segmented button item is clicked.
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
   * Minimum font scale factor of the segmented button item text.
   *
   * Value range: [0, 1]
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * A value less than 0 is treated as **0**. A value greater than 1 is treated as **1**. Abnormal values are
   * ineffective by default.
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
  readonly itemMinFontScale?: number | Resource;

  /**
   * Maximum font scale factor of the segmented button item text.
   *
   * Value range: [1, 2]
   *
   * Default value: **1**
   *
   * **NOTE**
   *
   * A value less than 1 is treated as **1**. A value greater than 2 is treated as **2**. Abnormal values are
   * ineffective by default.
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
  readonly itemMaxFontScale?: number | Resource;

  /**
   * Space between segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **LengthMetrics.vp(0)**
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
   * Font size of unselected segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemFontSize** has no effect.
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
  readonly itemFontSize?: LengthMetrics;

  /**
   * Font size of the selected segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemSelectedFontSize** has no effect.
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
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Font color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.
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
  readonly itemFontColor?: ColorMetrics;

  /**
   * Font color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.
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
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Font weight of unselected segmented button items.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemFontWeight** has no effect.
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
  readonly itemFontWeight?: FontWeight;

  /**
   * Font weight of the selected segmented button item.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemSelectedFontWeight** has no effect.
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
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Border radius of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_selected_corner_radius')**.
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
   * Background color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.segment_button_v2_tab_selected_item_background')**
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
   * Image-type icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }**.
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **width** and **height** of **iconModifier** are set for **items**, **itemIconSize** has no effect.
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
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemIconFillColor** has no effect.
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
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemSelectedIconFillColor** has no effect.
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
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * HM Symbol icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **20fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **symbolModifier** is set for **items**, **itemSymbolFontSize** has no effect.
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
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * HM Symbol icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSymbolFontColor** has no effect.
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
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * HM Symbol icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSelectedSymbolFontColor** has no effect.
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
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Minimum height of the segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value:
   *
   * **$r('sys.float.segment_button_v2_singleline_selected_height')** for text-only buttons and icon-only buttons, and
   * **$r('sys.float.segment_button_v2_doubleline_selected_height')** for buttons with both an icon and text.
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
   * **{top: LengthMetrics.resource ($r('sys.float.padding_level2')), bottom: LengthMetrics.
   * resource ($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')),
   * end: LengthMetrics.resource($r('sys.float.padding_level4'))}**
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
   * Shadow of the segmented button item.
   *
   * Default value: **ShadowStyle.OUTER_DEFAULT_XS**
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
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * Background color of the segmented button.
   *
   * Default value: **$r('sys.color.segment_button_v2_tab_button_background')**
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
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * Background blur style of the segmented button.
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
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * Background blur style options of the segmented button.
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
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background blur effect options of the segmented button.
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
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * Background border radius of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_background_corner_radius')**
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
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * Minimum height of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_singleline_background_height')** for text-only buttons and icon-
   * only buttons, and **$r('sys.float.segment_button_v2_doubleline_background_height')** for buttons with both an
   * icon and text.
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
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * Padding of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.padding_level1')**
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
  readonly buttonPadding?: LengthMetrics;

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
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
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
   * Enable animation when selectedIndexes change.
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
 * Defines the segmented button with capsule style.
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
   * If the value is **undefined**, the option information is not displayed.
   *
   * This property is read-only.
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
   * Index of the selected segmented button item. The index is zero-based and increments by 1.
   *
   * If the value is undefined, no item is selected. If the value is a non-positive value, the default value **0** is
   * used.
   *
   * This property is read-only.
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
   * Callback invoked when the selected item changes.
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
   * Callback invoked when a segmented button item is clicked.
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
   * Minimum font scale factor of the segmented button item text.
   *
   * Value range: [0, 1]
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * A value less than 0 is treated as **0**. A value greater than 1 is treated as **1**. Abnormal values are
   * ineffective by default.
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
  readonly itemMinFontScale?: number | Resource;

  /**
   * Maximum font scale factor of the segmented button item text.
   *
   * Value range: [1, 2]
   *
   * Default value: **1**
   *
   * **NOTE**
   *
   * A value less than 1 is treated as **1**. A value greater than 2 is treated as **2**. Abnormal values are
   * ineffective by default.
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
  readonly itemMaxFontScale?: number | Resource;

  /**
   * Space between segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **LengthMetrics.vp(0)**
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
   * Font color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.
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
  readonly itemFontColor?: ColorMetrics;

  /**
   * Font color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.
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
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Font size of unselected segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemFontSize** has no effect.
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
  readonly itemFontSize?: LengthMetrics;

  /**
   * Font size of the selected segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemSelectedFontSize** has no effect.
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
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Font weight of unselected segmented button items.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemFontWeight** has no effect.
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
  readonly itemFontWeight?: FontWeight;

  /**
   * Font weight of the selected segmented button item.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemSelectedFontWeight** has no effect.
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
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Border radius of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_selected_corner_radius')**.
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
   * Background color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.segment_button_v2_tab_selected_item_background')**
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
   * Image-type icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }**.
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **width** and **height** of **iconModifier** are set for **items**, **itemIconSize** has no effect.
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
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemIconFillColor** has no effect.
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
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemSelectedIconFillColor** has no effect.
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
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * HM Symbol icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **20fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **symbolModifier** is set for **items**, **itemSymbolFontSize** has no effect.
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
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * HM Symbol icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSymbolFontColor** has no effect.
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
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * HM Symbol icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSelectedSymbolFontColor** has no effect.
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
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Minimum height of the segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value:
   *
   * **$r('sys.float.segment_button_v2_singleline_selected_height')** for text-only buttons and icon-only buttons, and
   * **$r('sys.float.segment_button_v2_doubleline_selected_height')** for buttons with both an icon and text.
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
   * **{top: LengthMetrics.resource ($r('sys.float.padding_level2')), bottom: LengthMetrics.
   * resource ($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')),
   * end: LengthMetrics.resource($r('sys.float.padding_level4'))}**
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
   * Shadow of the segmented button item.
   *
   * Default value: **ShadowStyle.OUTER_DEFAULT_XS**
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
  readonly itemShadow?: ShadowOptions | ShadowStyle;

  /**
   * Background color of the segmented button.
   *
   * Default value: **$r('sys.color.segment_button_v2_tab_button_background')**
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
  readonly buttonBackgroundColor?: ColorMetrics;

  /**
   * Background blur style of the segmented button.
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
  readonly buttonBackgroundBlurStyle?: BlurStyle;

  /**
   * Background blur style options of the segmented button.
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
  readonly buttonBackgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Background blur effect options of the segmented button.
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
  readonly buttonBackgroundEffect?: BackgroundEffectOptions;

  /**
   * Background border radius of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_background_corner_radius')**
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
  readonly buttonBorderRadius?: LengthMetrics;

  /**
   * Minimum height of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_singleline_background_height')** for text-only buttons and icon-
   * only buttons, and **$r('sys.float.segment_button_v2_doubleline_background_height')** for buttons with both an
   * icon and text.
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
  readonly buttonMinHeight?: LengthMetrics;

  /**
   * Padding of the segmented button.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.padding_level1')**
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
  readonly buttonPadding?: LengthMetrics;

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
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
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
   * Enable animation when selectedIndexes change.
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
 * Defines the segmented button with multi capsule style.
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
   * If the value is **undefined**, the option information is not displayed.
   *
   * This property is read-only.
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
   * Array of indexes of the selected segmented button items. The index is zero-based and increments by 1.
   *
   * If the value is **undefined**, no item is selected.
   *
   * **NOTE**
   *
   * Only valid button indexes are supported. An empty array [] indicates no selection.
   *
   * This property is read-only.
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
   * Callback invoked when the selected item changes.
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
   * Callback invoked when a segmented button item is clicked.
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
   * Minimum font scale factor of the segmented button item text.
   *
   * Value range: [0, 1]
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * A value less than 0 is treated as **0**. A value greater than 1 is treated as **1**. Abnormal values are
   * ineffective by default.
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
  readonly itemMinFontScale?: number | Resource;

  /**
   * Maximum font scale factor of the segmented button item text.
   *
   * Value range: [1, 2]
   *
   * Default value: **1**
   *
   * **NOTE**
   *
   * A value less than 1 is treated as **1**. A value greater than 2 is treated as **2**. Abnormal values are
   * ineffective by default.
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
   * Font color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemFontColor** has no effect.
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
  readonly itemFontColor?: ColorMetrics;

  /**
   * Font color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**.
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **textModifier** is set for **items**, **itemSelectedFontColor** has no effect.
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
  readonly itemSelectedFontColor?: ColorMetrics;

  /**
   * Font size of unselected segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemFontSize** has no effect.
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
  readonly itemFontSize?: LengthMetrics;

  /**
   * Font size of the selected segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value: **14fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **textModifier** is set for **items**, **itemSelectedFontSize** has no effect.
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
  readonly itemSelectedFontSize?: LengthMetrics;

  /**
   * Font weight of unselected segmented button items.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemFontWeight** has no effect.
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
  readonly itemFontWeight?: FontWeight;

  /**
   * Font weight of the selected segmented button item.
   *
   * Default value: **FontWeight.Medium**
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **fontWeight** of **textModifier** is set for **items**, **itemSelectedFontWeight** has no effect.
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
  readonly itemSelectedFontWeight?: FontWeight;

  /**
   * Border radius of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **$r('sys.float.segment_button_v2_selected_corner_radius')**.
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
   * Default value: **$r('sys.color.segment_button_v2_tab_selected_item_background')**
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
   * Image-type icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **{ width: LengthMetrics.vp(24), height: LengthMetrics.vp(24) }**.
   *
   * If the value is out of the range, the default value is used.
   *
   * **NOTE**
   *
   * When **width** and **height** of **iconModifier** are set for **items**, **itemIconSize** has no effect.
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
  readonly itemIconSize?: SizeT<LengthMetrics>;

  /**
   * Icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemIconFillColor** has no effect.
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
  readonly itemIconFillColor?: ColorMetrics;

  /**
   * Icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fillColor** of **iconModifier** is set for **items**, **itemSelectedIconFillColor** has no effect.
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
  readonly itemSelectedIconFillColor?: ColorMetrics;

  /**
   * HM Symbol icon size of segmented button items.
   *
   * Value range: [0, +∞)
   *
   * Default value: **20fp**
   *
   * **NOTE**
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * When **fontSize** of **symbolModifier** is set for **items**, **itemSymbolFontSize** has no effect.
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
  readonly itemSymbolFontSize?: LengthMetrics;

  /**
   * HM Symbol icon color of unselected segmented button items.
   *
   * Default value: **$r('sys.color.font_secondary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSymbolFontColor** has no effect.
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
  readonly itemSymbolFontColor?: ColorMetrics;

  /**
   * HM Symbol icon color of the selected segmented button item.
   *
   * Default value: **$r('sys.color.font_primary')**
   *
   * If the value is **undefined**, the default value is used.
   *
   * **NOTE**
   *
   * When **fontColor** of **symbolModifier** is set for **items**, **itemSelectedSymbolFontColor** has no effect.
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
  readonly itemSelectedSymbolFontColor?: ColorMetrics;

  /**
   * Minimum height of the segmented button item.
   *
   * Value range: [0, +∞)
   *
   * Default value:
   *
   * **$r('sys.float.segment_button_v2_singleline_selected_height')** for text-only buttons and icon-only buttons, and
   * **$r('sys.float.segment_button_v2_doubleline_selected_height')** for buttons with both an icon and text.
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
   * **{top: LengthMetrics.resource ($r('sys.float.padding_level2')), bottom: LengthMetrics.
   * resource ($r('sys.float.padding_level2')), start: LengthMetrics.resource($r('sys.float.padding_level4')),
   * end: LengthMetrics.resource($r('sys.float.padding_level4'))}**
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