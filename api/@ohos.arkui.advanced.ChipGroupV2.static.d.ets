'use static';
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

import {
  BuilderParam, Builder, Callback, ComponentV2, ResourceStr, VoidCallback, Direction, Length
} from './@ohos.arkui.component';
import { SymbolGlyphModifier } from './@ohos.arkui.modifier';
import { Require, Param, ObservedV2, Trace, Event } from './@ohos.arkui.stateManagement';
import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';
import uiMaterial from '@ohos.arkui.uiMaterial';
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
  ChipV2ImageIcon,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIcon,
  ChipV2Label,
  ChipV2CloseIcon,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIcon
} from './@ohos.arkui.advanced.ChipV2';

/**
 * Defines chipV2 item config.
 *
 * @interface ChipGroupV2ItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2ItemConfig {
  /**
   * Prefix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixIcon?: ChipV2PrefixImageIconConfig;

  /**
   * Prefix symbol icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixSymbolIcon?: ChipV2PrefixSymbolIconConfig;

  /**
   * Chip label.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  label: ChipV2LabelConfig;

  /**
   * Suffix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixIcon?: ChipV2SuffixImageIconConfig;

  /**
   * Suffix symbol icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixSymbolIcon?: ChipV2SuffixSymbolIconConfig;

  /**
   * Allow close.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  allowClose?: boolean;

  /**
   * Set config for default close icon when 'allowClose' is true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  closeIcon?: ChipV2CloseConfig;

  /**
   * Set accessibility description for ChipGroupV2 item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for ChipGroupV2 item.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
 * Defines chip group item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Item {
  /**
   * Prefix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixIcon?: ChipV2PrefixImageIcon;

  /**
   * Prefix symbol icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixSymbolIcon?: ChipV2PrefixSymbolIcon;

  /**
   * Chip label.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public label: ChipV2Label;

  /**
   * Suffix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixIcon?: ChipV2SuffixImageIcon;

  /**
   * Suffix symbol icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixSymbolIcon?: ChipV2SuffixSymbolIcon;

  /**
   * Allow close.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public allowClose?: boolean;

  /**
   * Set config for default close icon when 'allowClose' is true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public closeIcon?: ChipV2CloseConfig;

  /**
   * Set accessibility description for ChipGroupV2 item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for ChipGroupV2 item.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * The constructor of ChipGroupV2Item
   *
   * @param { ChipGroupV2ItemConfig } config - config of the chip group item
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2ItemConfig);
}

/**
 * Defines items of chip group.
 *
 * @extends Array<ChipGroupV2Item>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Items extends Array<ChipGroupV2Item> {
  /**
   * The constructor of ChipGroupV2Items
   *
   * @param { ChipGroupV2ItemConfig[] } items - config array of chip group items
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(items: ChipGroupV2ItemConfig[]);
}

/**
 * Defines ChipGroupV2ItemStyleConfig.
 *
 * @interface ChipGroupV2ItemStyleConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2ItemStyleConfig {
  /**
   * ChipV2 size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * ChipItem background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundColor?: ColorMetrics;

  /**
   * Text font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontColor?: ColorMetrics;

  /**
   * Selected Text font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  selectedFontColor?: ColorMetrics;

  /**
   * Selected chip item background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  selectedBackgroundColor?: ColorMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component when selected. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  selectedBackgroundSystemMaterial?: uiMaterial.Material;
}

/**
 * Defines chip group item style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2ItemStyle {
  /**
   * ChipV2 size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * ChipItem background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * Text font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontColor?: ColorMetrics;

  /**
   * Selected Text font color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public selectedFontColor?: ColorMetrics;

  /**
   * Selected chip item background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public selectedBackgroundColor?: ColorMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component when selected. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public selectedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * The constructor of ChipGroupV2ItemStyle
   *
   * @param { ChipGroupV2ItemStyleConfig } config - config of chip group item style
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2ItemStyleConfig);
}

/**
 * Defines chip group space.
 *
 * @interface ChipGroupV2SpaceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2SpaceConfig {
  /**
   * Space between items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  itemSpace?: Length;

  /**
   * Start space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  startSpace?: Length;

  /**
   * End space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  endSpace?: Length;
}


/**
 * Defines chip group space class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Space {
  /**
   * Space between items.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public itemSpace?: Length;

  /**
   * Start space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public startSpace?: Length;

  /**
   * End space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public endSpace?: Length;

  /**
   * The constructor of ChipGroupV2Space
   *
   * @param { ChipGroupV2SpaceConfig } config - config of chip group space
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2SpaceConfig);
}

/**
 * Defines Icon Item Config.
 *
 * @interface ChipGroupV2IconItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2IconItemConfig {
  /**
   * IconConfig.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  icon: ChipV2ImageIconConfig;

  /**
   * Icon Action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: Callback<void>;

  /**
   * Set accessibility text for icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for icon.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
 * Defines symbol item config.
 *
 * @interface ChipGroupV2SymbolItemConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2SymbolItemConfig {
  /**
   * Set symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  symbol: SymbolGlyphModifier;

  /**
   * Called when the symbol item is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action: VoidCallback;

  /**
   * Set accessibility text for symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description for symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for symbol.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;
}

/**
 * Defines ChipGroupV2 padding config.
 *
 * @interface ChipGroupV2PaddingConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipGroupV2PaddingConfig {
  /**
   * Top of chip group padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  top: Length;

  /**
   * Bottom of chip group padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  bottom: Length;
}

/**
 * Defines chip group padding class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipGroupV2Padding {
  /**
   * Top of chip group padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public top: Length;

  /**
   * Bottom of chip group padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public bottom: Length;

  /**
   * The constructor of ChipGroupV2Padding
   *
   * @param { ChipGroupV2PaddingConfig } config - config of chip group padding
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipGroupV2PaddingConfig);
}

/**
 * Defines IconGroupSuffix.
 *
 * @struct { ChipGroupV2IconGroupSuffix }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2IconGroupSuffix {
  /**
   * Suffix item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  iconBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Build function for ChipGroupV2IconGroupSuffix
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Builder
  build(): void;
}

/**
 * Defines the suffix builder of the ChipGroupV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@Builder
export type ChipGroupV2SuffixBuilder = () => void;

/**
 * Defines chipGroupV2.
 *
 * @struct { ChipGroupV2 }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipGroupV2 {
  /**
   * ChipV2 item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Require
  @Param
  items: ChipGroupV2Items;

  /**
   * Two-way binding callback method for ChipV2 item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  $items?: Callback<ChipGroupV2Items>;

  /**
   * ChipV2 item style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  itemStyle?: ChipGroupV2ItemStyle;

  /**
   * Selected ChipV2 item indexes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  selectedIndexes?: Array<int>;

  /**
   * Two-way binding callback method for selected ChipV2 item indexes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Event
  $selectedIndexes?: Callback<Array<int>>;

  /**
   * Whether to select multiple ChipV2 items
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  multiple?: boolean;

  /**
   * Left and right inner margins and spacing between ChipV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  chipGroupSpace?: ChipGroupV2Space;

  /**
   * ChipGroupV2 padding (only support top and bottom).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  chipGroupPadding?: ChipGroupV2Padding;
  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Param
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Chip group callback. when chipV2 status is changed, this onChange is called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Event
  onChange?: Callback<Array<int>>;

  /**
   * The builder function which will be rendered in the suffix of ChipGroupV2.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @BuilderParam
  suffix?: ChipGroupV2SuffixBuilder;

  /**
   * Build function for ChipGroupV2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Builder
  build(): void;
}


export {
  ChipGroupV2,
  ChipGroupV2IconGroupSuffix,
  ChipGroupV2ItemConfig,
  ChipGroupV2Item,
  ChipGroupV2Items,
  ChipGroupV2ItemStyleConfig,
  ChipGroupV2ItemStyle,
  ChipGroupV2SpaceConfig,
  ChipGroupV2Space,
  ChipGroupV2IconItemConfig,
  ChipGroupV2SymbolItemConfig,
  ChipGroupV2PaddingConfig,
  ChipGroupV2Padding
};
