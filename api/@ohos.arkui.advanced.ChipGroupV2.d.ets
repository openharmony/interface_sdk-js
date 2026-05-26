/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { ColorMetrics, LengthMetrics, SizeT } from '@ohos.arkui.node';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import {
  ChipV2Size,
  ChipV2ImageIconConfig,
  ChipV2SuffixImageIconConfig,
  ChipV2PrefixImageIconConfig,
  ChipV2LabelConfig,
  ChipV2CloseConfig,
  ChipV2SymbolIconConfig,
  ChipV2PrefixSymbolIconConfig,
  ChipV2SuffixSymbolIconConfig,
  ChipV2AccessibilityConfig,
  ChipV2ImageIcon,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIcon,
  ChipV2Label,
  ChipV2CloseIcon,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIcon
} from '@ohos.arkui.advanced.ChipV2';
import uiMaterial from './@ohos.arkui.uiMaterial';

/**
 * Defines chip item config.
 *
 * @interface ChipGroupV2ItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemConfig {

    /**
     * Prefix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    prefixIcon?: ChipV2PrefixImageIconConfig;

     /**
      * Prefix symbol icon.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     prefixSymbolIcon?: ChipV2PrefixSymbolIconConfig;

    /**
     * ChipV2 label.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    label: ChipV2LabelConfig;

    /**
     * Suffix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    suffixIcon?: ChipV2SuffixImageIconConfig;

     /**
      * Suffix symbol icon.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     suffixSymbolIcon?: ChipV2SuffixSymbolIconConfig;

    /**
     * Indicates whether to allow close.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    allowClose?: boolean;

    /**
     * Set config for default close icon when 'allowClose' is true.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    closeIcon?: ChipV2CloseConfig;

    /**
     * Set accessibility description for ChipGroupV2 item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for ChipGroupV2 item.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines chip group item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Item {
    /**
     * Prefix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public prefixIcon?: ChipV2PrefixImageIcon;

    /**
     * Prefix symbol icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public prefixSymbolIcon?: ChipV2PrefixSymbolIcon;

    /**
     * Chip label.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public label: ChipV2Label;

    /**
     * Suffix icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public suffixIcon?: ChipV2SuffixImageIcon;

    /**
     * Suffix symbol icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public suffixSymbolIcon?: ChipV2SuffixSymbolIcon;

    /**
     * Allow close.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public allowClose?: boolean;

    /**
     * Set config for default close icon when 'allowClose' is true.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public closeIcon?: ChipV2CloseConfig;

    /**
     * Set accessibility description for ChipGroupV2 item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for ChipGroupV2 item.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public accessibilityLevel?: string;

    /**
     * The constructor of ChipGroupV2Item
     *
     * @param { ChipGroupV2ItemConfig } config - config of the chip group item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2ItemConfig);
}

/**
 * Defines items of chip group.
 *
 * @extends Array<ChipGroupV2Item>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Items extends Array<ChipGroupV2Item> {
    /**
     * The constructor of ChipGroupV2Items
     *
     * @param { ChipGroupV2ItemConfig[] } items - config array of chip group items
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(items: ChipGroupV2ItemConfig[]);
}

/**
 * Defines ChipGroupV2 item style.
 *
 * @interface ChipGroupV2ItemStyleConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2ItemStyleConfig {

    /**
     * ChipV2 size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    size?: ChipV2Size | SizeT<LengthMetrics>;

    /**
     * ChipV2 item background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    backgroundColor?: ColorMetrics;

    /**
     * Text font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    fontColor?: ColorMetrics;

    /**
     * Selected Text font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedFontColor?: ColorMetrics;

    /**
     * Selected ChipV2 item background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedBackgroundColor?: ColorMetrics;

    /**
     * Set system-styled materials for the component. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    backgroundSystemMaterial?: uiMaterial.Material;

    /**
     * Set system-styled materials for the component when selected. Different materials have different effects,
     * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    selectedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines ChipGroupV2 item style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2ItemStyle {
    /**
     * ChipV2 size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public size?: ChipV2Size | SizeT<LengthMetrics>;
    /**
     * ChipV2 item background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public backgroundColor?: ColorMetrics;

    /**
     * Text font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public fontColor?: ColorMetrics;

    /**
     * Selected Text font color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public selectedFontColor?: ColorMetrics;

    /**
     * Selected chip item background color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public selectedBackgroundColor?: ColorMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component when selected. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  @Trace
  public selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * The constructor of ChipGroupV2ItemStyle
   *
   * @param { ChipGroupV2ItemStyleConfig } config - config of ChipGroupV2ItemStyle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(config: ChipGroupV2ItemStyleConfig);
}

/**
 * Defines chip group space config.
 *
 * @interface ChipGroupV2SpaceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SpaceConfig {

    /**
     * Space between items.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    itemSpace?: string | number;

    /**
     * Start space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    startSpace?: Length;

    /**
     * End space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    endSpace?: Length;
}

/**
 * Defines chip group space.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Space {
    /**
     * Space between items.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public itemSpace?: string | number;
    /**
     * Start space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public startSpace?: Length;

    /**
     * End space.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public endSpace?: Length;

    /**
     * The constructor of ChipGroupV2SpaceConfig
     *
     * @param { ChipGroupV2SpaceConfig } config - config of chip group space
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2SpaceConfig);
}

/**
 * Defines ChipGroupV2 IconItemConfig.
 *
 * @interface ChipGroupV2IconItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2IconItemConfig {
    /**
     * IconConfig.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    icon: ChipV2ImageIconConfig;

    /**
     * Icon Action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    action: Callback<void>;

    /**
     * Set accessibility text for icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for icon.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for icon.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines symbol item config.
 *
 * @interface ChipGroupV2SymbolItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2SymbolItemConfig {
    /**
     * Set symbol.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    symbol: SymbolGlyphModifier;

    /**
     * Called when the symbol item is clicked.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    action: VoidCallback;

    /**
     * Set accessibility text for symbol.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityText?: ResourceStr;

    /**
     * Set accessibility description for symbol.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityDescription?: ResourceStr;

    /**
     * Set accessibility level for symbol.
     *
     * @default auto
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    accessibilityLevel?: string;
}

/**
 * Defines ChipGroupV2 padding config.
 *
 * @interface ChipGroupV2PaddingConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ChipGroupV2PaddingConfig {
    /**
     * Top of chip group padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    top: Length;

    /**
     * Bottom of chip group padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    bottom: Length;
}

/**
 * Defines chip group padding.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ObservedV2
export declare class ChipGroupV2Padding {
    /**
     * Top of chip group padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public top: Length;

    /**
     * Bottom of chip group padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Trace
    public bottom: Length;

    /**
     * The constructor of ChipGroupV2PaddingConfig
     *
     * @param { ChipGroupV2PaddingConfig } config - config of ChipGroupV2 padding
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    constructor(config: ChipGroupV2PaddingConfig);
}

/**
 * Defines IconGroupSuffix.
 *
 * @struct { ChipGroupV2IconGroupSuffix }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2IconGroupSuffix {
  /**
   * Suffix item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  @Require
  @Param
  items: Array<ChipGroupV2IconItemConfig | SymbolGlyphModifier | ChipGroupV2SymbolItemConfig>;

  /**
   * IconGroupSuffix background system material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  @Param
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Build function for ChipGroupV2IconGroupSuffix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   * @noninterop
   */
  build(): void;
}

/**
 * Defines chipGroupV2.
 *
 * @struct { ChipGroupV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@ComponentV2
export declare struct ChipGroupV2 {

    /**
     * ChipV2 item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Require
    @Param
    items: ChipGroupV2Items;

    /**
     * Two-way binding callback method for ChipV2 item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    $items?: Callback<ChipGroupV2Items>;

    /**
     * ChipV2 item style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    itemStyle?: ChipGroupV2ItemStyle;

    /**
     * Selected ChipV2 item indexes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    selectedIndexes?: Array<number>;

    /**
     * Two-way binding callback method for selected ChipV2 item indexes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    $selectedIndexes?: Callback<Array<number>>;

    /**
     * Support multiple ChipV2 item selection.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    multiple?: boolean;

    /**
     * Left and right inner margins and spacing between ChipV2.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Param
    chipGroupSpace?: ChipGroupV2Space;

     /**
      * ChipGroupV2 padding (only support top and bottom).
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @stagemodelonly
      * @crossplatform
      * @atomicservice
      * @since 26.0.0 dynamic
      */
     @Param
     chipGroupPadding?: ChipGroupV2Padding;
    /**
     * Set system-styled materials for the component. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     * @noninterop
     */
    @Param
    backgroundSystemMaterial?: uiMaterial.Material;

    /**
     * Callback method when the chipV2 status changes
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @Event
    onChange?: Callback<Array<number>>;

    /**
     * The builder function which will be rendered in the suffix of ChipGroupV2.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     */
    @BuilderParam
    suffix?: Callback<void>;

    /**
     * Build function for ChipGroupV2
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 26.0.0 dynamic
     * @noninterop
     */
    build(): void;
}