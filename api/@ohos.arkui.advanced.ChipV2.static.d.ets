'use static'

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
    Builder, Callback, ComponentV2, LocalizedPadding, Resource, ResourceStr, VoidCallback, Direction
} from './@ohos.arkui.component';
import { ImageModifier, SymbolGlyphModifier, TextModifier } from './@ohos.arkui.modifier';
import { Require, Param, ObservedV2, Trace } from './@ohos.arkui.stateManagement';
import { ColorMetrics, LengthMetrics, SizeT } from './@ohos.arkui.node';
import uiMaterial from '@ohos.arkui.uiMaterial';

/**
 * Enum for ChipV2Size
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare enum ChipV2Size {
  /**
   * Normal type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NORMAL = 'NORMAL',

  /**
   * Small type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SMALL = 'SMALL'
}

/**
 * Enum for ChipV2AccessibilitySelectedType
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export declare enum ChipV2AccessibilitySelectedType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CLICKED = 0,

  /**
   * Checked type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CHECKED = 1,

  /**
   * Selected type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED = 2
}

/**
 * Defines icon common config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2ImageIconConfig {
  /**
   * Image resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  src: ResourceStr;

  /**
   * Image size config.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: SizeT<LengthMetrics>;

  /**
   * Image filled color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fillColor?: ColorMetrics;

  /**
   * Image filled color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedFillColor?: ColorMetrics;

  /**
   * Modifier for the icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  modifier?: ImageModifier;
}

/**
 * Defining ChipV2 image icon config
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2ImageIcon extends ChipV2Icon {
  /**
   * Image resource.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public src: ResourceStr;

  /**
   * Image size config.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: SizeT<LengthMetrics>;

  /**
   * Image filled color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fillColor?: ColorMetrics;

  /**
   * Image filled color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedFillColor?: ColorMetrics;

  /**
   * Modifier for icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public modifier?: ImageModifier;

  /**
   * The constructor of ChipV2ImageIcon
   *
   * @param { ChipV2ImageIconConfig } config - config of icon common
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2ImageIconConfig);
}

/**
 * Defines suffix image icon config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SuffixImageIconConfig extends ChipV2ImageIconConfig, ChipV2AccessibilityConfig {
  /**
   * Called when suffix icon is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;
}

/**
 * Defines the suffix icon class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2SuffixImageIcon extends ChipV2ImageIcon {
  /**
   * Set accessibility level.
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
   * Set accessibility text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Set accessibility description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Called when suffix icon is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public action?: VoidCallback;

  /**
   * The constructor of ChipV2SuffixImageIcon
   *
   * @param { ChipV2SuffixImageIconConfig } config - config of suffix image icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SuffixImageIconConfig);
}

/**
 * Defines ChipV2 icon
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare abstract class ChipV2Icon {
  /**
   * The constructor of ChipV2Icon
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor();
}

/**
 * Defines the prefix image icon config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2PrefixImageIconConfig extends ChipV2ImageIconConfig {}

/**
 * Defines the prefix image icon class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2PrefixImageIcon extends ChipV2ImageIcon {
  /**
   * The constructor of ChipV2PrefixImageIcon
   *
   * @param { ChipV2PrefixImageIconConfig } config - config of prefix image icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2PrefixImageIconConfig);
}

/**
 * Defines accessibility config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2AccessibilityConfig {
  /**
   * Set accessibility level.
   *
   * @default auto
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityText?: ResourceStr;

  /**
   * Set accessibility description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;
}

/**
 * Defines accessibility.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2Accessibility {
  /**
   * Set accessibility level.
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
   * Set accessibility text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityText?: ResourceStr;

  /**
   * Set accessibility description.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * The constructor of ChipV2Accessibility
   *
   * @param { ChipV2AccessibilityConfig } config - config of accessibility
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2AccessibilityConfig);
}

/**
 * Defines config of default close icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2CloseConfig extends ChipV2AccessibilityConfig {
  /**
   * Set font size for the close icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;
}

/**
 * Defines default close icon class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2CloseIcon extends ChipV2Accessibility {
  /**
   * Set font size for the close icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * The constructor of ChipV2CloseIcon
   *
   * @param { ChipV2CloseConfig } config - config of close icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2CloseConfig);
}

/**
 * Defines chip symbol icon config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SymbolIconConfig {
  /**
   * Symbol normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  normal?: SymbolGlyphModifier;

  /**
   * Symbol activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activated?: SymbolGlyphModifier;
}

/**
 * Defines chip symbol icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export abstract class ChipV2SymbolIcon extends ChipV2Icon {
  /**
   * Symbol normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public normal?: SymbolGlyphModifier;

  /**
   * Symbol activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activated?: SymbolGlyphModifier;

  /**
   * The constructor of ChipV2SymbolIcon
   *
   * @param { ChipV2SymbolIconConfig } config - config of chip symbol icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SymbolIconConfig);
}

/**
 * Defines chip prefix symbol icon config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2PrefixSymbolIconConfig extends ChipV2SymbolIconConfig {}

/**
 * Defines chip prefix symbol icon.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2PrefixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * The constructor of ChipV2PrefixSymbolIcon
   *
   * @param { ChipV2PrefixSymbolIconConfig } config - config of chip prefix symbol icon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2PrefixSymbolIconConfig);
}

/**
 * Defines accessibility config of suffix symbol.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2SuffixSymbolIconConfig extends ChipV2SymbolIconConfig {
  /**
   * Set normal accessibility config for suffix symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  normalAccessibility?: ChipV2AccessibilityConfig;

  /**
   * Set activated accessibility config for suffix symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedAccessibility?: ChipV2AccessibilityConfig;

  /**
   * Called when suffix symbol is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  action?: VoidCallback;
}

/**
 * Defines accessibility of suffix symbol.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2SuffixSymbolIcon extends ChipV2SymbolIcon {
  /**
   * Set normal accessibility config for suffix symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public normalAccessibility?: ChipV2Accessibility;

  /**
   * Set activated accessibility config for suffix symbol.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedAccessibility?: ChipV2Accessibility;

  /**
   * Called when suffix symbol is clicked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public action?: VoidCallback;

  /**
   * The constructor of ChipV2SuffixSymbolIcon
   *
   * @param { ChipV2SuffixSymbolIconConfig } config - config of suffix symbol
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2SuffixSymbolIconConfig);
}

/**
 * Defines label margin.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LabelMarginConfig {
  /**
   * Left label margin length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  left?: LengthMetrics;

  /**
   * Right label margin length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  right?: LengthMetrics;
}

/**
 * Defines localized label margin.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LocalizedLabelMarginConfig {
  /**
   * start localized label margin length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  start?: LengthMetrics;

  /**
   * end localized label margin length.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  end?: LengthMetrics;
}

/**
 * Defines label config.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
export interface ChipV2LabelConfig {
  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  text: string;

  /**
   * Text font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;

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
   * Text font color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedFontColor?: ColorMetrics;

  /**
   * Text font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontFamily?: string;

  /**
   * Label margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  labelMargin?: ChipV2LabelMarginConfig;

  /**
   * Localized label margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;
  /**
   * Modifier for the label text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  modifier?: TextModifier;
}

/**
 * Defines chip label class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ObservedV2
export declare class ChipV2Label {
  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public text: string;

  /**
   * Text font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

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
   * Text font color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedFontColor?: ColorMetrics;

  /**
   * Text font family.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontFamily?: string;

  /**
   * Label margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public labelMargin?: ChipV2LabelMarginConfig;

  /**
   * Localized label margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public localizedLabelMargin?: ChipV2LocalizedLabelMarginConfig;
  
  /**
   * Modifier for the label text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Trace
  public modifier?: TextModifier;

  /**
   * The constructor of ChipV2Label
   *
   * @param { ChipV2LabelConfig } config - config of the chip label
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  constructor(config: ChipV2LabelConfig);
}

/**
 * Defines ChipV2 options interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface IChipV2OptionsConfig {
  /**
   * Chip label.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  label: ChipV2Label;

  /**
   * Chip prefix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  prefixIcon?: ChipV2Icon;

  /**
   * Chip suffix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  suffixIcon?: ChipV2Icon;

  /**
   * Show close icon.
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
  closeIcon?: ChipV2CloseIcon;

  /**
   * Enable chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  enabled?: boolean;

  /**
   * Set whether chip is active or not.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activated?: boolean;

  /**
   * Chip background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundColor?: ColorMetrics;

  /**
   * Chip background color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedBackgroundColor?: ColorMetrics;

  /**
   * Chip radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  borderRadius?: LengthMetrics;

  /**
   * Chip size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  size?: ChipV2Size | SizeT<LengthMetrics>;

  /**
   * Indicates the attribute of the current chip direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  direction?: Direction;

  /**
   * Set accessibility description for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilityLevel?: string;

  /**
   * Set accessibility selected type for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Maximum font scale for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  maxFontScale?: double | Resource;

  /**
   * Minimum font scale for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  minFontScale?: double | Resource;

  /**
   * Chip padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  padding?: LocalizedPadding;

  /**
   * Set font size for the label text and the close icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  fontSize?: LengthMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component which is activated. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * On close action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClose?: VoidCallback;

  /**
   * On clicked action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  onClicked?: Callback<void>;
}

/**
 * Defines chip options class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ObservedV2
export class ChipV2Options {
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
   * Chip prefix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public prefixIcon?: ChipV2Icon;

  /**
   * Chip suffix icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public suffixIcon?: ChipV2Icon;

  /**
   * Show close icon.
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
  public closeIcon?: ChipV2CloseIcon;

  /**
   * Enable chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public enabled?: boolean;

  /**
   * Set whether chip is active or not.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activated?: boolean;

  /**
   * Chip background color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundColor?: ColorMetrics;

  /**
   * Chip background color when chip is activated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedBackgroundColor?: ColorMetrics;

  /**
   * Chip radius.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public borderRadius?: LengthMetrics;

  /**
   * Chip size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public size?: ChipV2Size | SizeT<LengthMetrics>;
  /**
   * Indicates the attribute of the current chip direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public direction?: Direction;

  /**
   * Set accessibility description for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityDescription?: ResourceStr;

  /**
   * Set accessibility level for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilityLevel?: string;

  /**
   * Set accessibility selected type for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public accessibilitySelectedType?: ChipV2AccessibilitySelectedType;

  /**
   * Maximum font scale for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public maxFontScale?: double | Resource;

  /**
   * Minimum font scale for Chip.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public minFontScale?: double | Resource;

  /**
   * Chip padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public padding?: LocalizedPadding;

  /**
   * Set font size for the label text and the close icon.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public fontSize?: LengthMetrics;

  /**
   * Set system-styled materials for the component. Different materials have different effects, which can influence
   * the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public backgroundSystemMaterial?: uiMaterial.Material;

  /**
   * Set system-styled materials for the component which is activated. Different materials have different effects,
   * which can influence the backgroundColor, border, shadow, and other visual attributes of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  @Trace
  public activatedBackgroundSystemMaterial?: uiMaterial.Material;

  /**
   * On close action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  public onClose?: VoidCallback;

  /**
   * On clicked action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   * @noninterop
   */
  public onClicked?: Callback<void>;

  /**
   * The constructor of ChipV2Options
   *
   * @param { IChipV2OptionsConfig } config - config of the ChipV2Options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(config: IChipV2OptionsConfig);
}

/**
 * Defines chip component with V2 state management.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentV2
export declare struct ChipV2 {
  /**
   * Chip options.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Require
  @Param
  readonly chipV2Options: ChipV2Options;

  /**
   * Sets the build function of the chip.
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
  ChipV2,
  ChipV2Size,
  ChipV2AccessibilitySelectedType,
  ChipV2ImageIconConfig,
  ChipV2ImageIcon,
  ChipV2SuffixImageIconConfig,
  ChipV2SuffixImageIcon,
  ChipV2PrefixImageIconConfig,
  ChipV2PrefixImageIcon,
  ChipV2Icon,
  ChipV2AccessibilityConfig,
  ChipV2Accessibility,
  ChipV2CloseConfig,
  ChipV2CloseIcon,
  ChipV2SymbolIconConfig,
  ChipV2SymbolIcon,
  ChipV2PrefixSymbolIconConfig,
  ChipV2PrefixSymbolIcon,
  ChipV2SuffixSymbolIconConfig,
  ChipV2SuffixSymbolIcon,
  ChipV2LabelMarginConfig,
  ChipV2LocalizedLabelMarginConfig,
  ChipV2LabelConfig,
  ChipV2Label,
  IChipV2OptionsConfig,
  ChipV2Options
};
