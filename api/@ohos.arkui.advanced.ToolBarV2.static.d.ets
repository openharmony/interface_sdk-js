'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { ComponentV2 } from './arkui/component/customComponent';
import { ResourceStr } from './arkui/component/units';
import { ObservedV2, Param, Require, Trace } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { DividerModifier } from './arkui/DividerModifier';
import { ColorMetrics, LengthMetrics } from './arkui/Graphics';
import { Builder } from './arkui/component/builder';
/**
 * Declare enum ToolBarV2ItemState.
 *
 * @enum { int }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export declare enum ToolBarV2ItemState {
  /**
   * Enable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  ENABLE = 1,
  /**
   * Disable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  DISABLE = 2,
  /**
   * Activate type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  ACTIVATE = 3
}
/**
 * Defines toolBarV2 symbolGlyph.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2SymbolGlyph {
  /**
   * Modifier of toolbarV2's normal symbol.
   *
   * @type { SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public normal: SymbolGlyphModifier;
  /**
   * Modifier of toolbarV2's activated symbol.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public activated?: SymbolGlyphModifier;
  /**
   * The constructor used to create a ToolBarV2SymbolGlyph object.
   *
   * @param { ToolBarV2SymbolGlyphOptions } options - symbol info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  constructor(options: ToolBarV2SymbolGlyphOptions);
}
/**
 * Declare the options of ToolBarV2SymbolGlyph.
 *
 * @interface ToolBarV2SymbolGlyphOptions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export interface ToolBarV2SymbolGlyphOptions {
  /**
   * Modifier of toolbarV2's normal symbol.
   *
   * @type { SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  normal: SymbolGlyphModifier;
  /**
   * Modifier of toolbarV2's activated symbol.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  activated?: SymbolGlyphModifier;
}
/**
 * Declare type ToolBarV2ItemText.
 *
 * @class ToolBarV2ItemText.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2ItemText {
  /**
   * Define text content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public text: ResourceStr;
  /**
   * Define text fontColor.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * Text fontColor when the item is activated.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * The constructor used to create a ToolBarV2ItemText object.
   *
   * @param { ToolBarV2ItemTextOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  constructor(options: ToolBarV2ItemTextOptions);
}
/**
 * Declare the options of ToolBarV2ItemText.
 *
 * @interface ToolBarV2ItemTextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export interface ToolBarV2ItemTextOptions {
  /**
   * Define text content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  text: ResourceStr;
  /**
   * Define text fontColor.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  color?: ColorMetrics;
  /**
   * Text fontColor when the item is activated.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  activatedColor?: ColorMetrics;
}
/**
 * Defines the icon type of ToolBarV2 item.
 * @typedef { ToolBarV2ItemImage | ToolBarV2SymbolGlyph } ToolBarV2ItemIconType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export declare type ToolBarV2ItemIconType = ToolBarV2ItemImage | ToolBarV2SymbolGlyph;
/**
 * Declare type ToolBarV2ItemImage.
 *
 * @class ToolBarV2ItemImage.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2ItemImage {
  /**
   * Define icon resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public src: ResourceStr;
  /**
   * Define icon fillColor.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public color?: ColorMetrics;
  /**
   * Icon fillColor when the item is activated.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public activatedColor?: ColorMetrics;
  /**
   * The constructor used to create a ToolBarV2ItemImage object.
   *
   * @param { ToolBarV2ItemImageOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  constructor(options: ToolBarV2ItemImageOptions);
}
/**
 * Declare the options of ToolBarV2ItemImage.
 *
 * @interface ToolBarV2ItemImageOptions.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export interface ToolBarV2ItemImageOptions {
  /**
   * Define icon resource.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  src: ResourceStr;
  /**
   * Define icon fillColor.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  color?: ColorMetrics;
  /**
   * Icon fillColor when the item is activated.
   *
   * @type { ?ColorMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  activatedColor?: ColorMetrics;
}
/**
 * Declare type ToolBarV2Item.
 *
 * @class ToolBarV2Item
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
@ObservedV2
export declare class ToolBarV2Item {
  /**
   * Define text content.
   *
   * @type { ToolBarV2ItemText }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public content: ToolBarV2ItemText;
  /**
   * Define the action event.
   *
   * @type { ?ToolBarV2ItemAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public action?: ToolBarV2ItemAction;
  /**
   * Define icon resource.
   *
   * @type { ?ToolBarV2ItemIconType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public icon?: ToolBarV2ItemIconType;
  /**
   * Define item type.
   *
   * @type { ?ToolBarV2ItemState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public state?: ToolBarV2ItemState;
  /**
   * The accessibilityText of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of item.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Trace
  public accessibilityLevel?: string;
  /**
   * The constructor used to create a ToolBarV2Item object.
   *
   * @param { ToolBarV2ItemOptions } options - text info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  constructor(options: ToolBarV2ItemOptions);
}
/**
 * Declare the options of ToolBarV2Item.
 *
 * @interface ToolBarV2ItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export interface ToolBarV2ItemOptions {
  /**
   * Define text content.
   *
   * @type { ToolBarV2ItemText }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  content: ToolBarV2ItemText;
  /**
   * Define the action event.
   *
   * @type { ?ToolBarV2ItemAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  action?: ToolBarV2ItemAction;
  /**
   * Define icon resource.
   *
   * @type { ?ToolBarV2ItemIconType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  icon?: ToolBarV2ItemIconType;
  /**
   * Define item type.
   *
   * @type { ?ToolBarV2ItemState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  state?: ToolBarV2ItemState;
  /**
   * The accessibilityText of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of item.
   *
   * @type { ?string }
   * @default "auto".
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  accessibilityLevel?: string;
}
/**
 * Defines the action callback of ToolBarV2Item.
 * @typedef { function } ToolBarV2ItemAction
 * @param { int } index - toolBarV2's ItemAction.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export type ToolBarV2ItemAction = (index: int) => void;
/**
 * Declare ToolBarV2Modifier used in ToolBar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
export declare class ToolBarV2Modifier {
  /**
   * Sets the height of the toolBarV2.
   *
   * @param { LengthMetrics } height - toolBarV2's height.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  public height(height: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets the backgroundColor of the toolBarV2.
   *
   * @param { ColorMetrics } backgroundColor - toolBarV2's backgroundColor.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  public backgroundColor(backgroundColor: ColorMetrics): ToolBarV2Modifier;
  /**
   * Sets the left and right padding of the toolbarV2.
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  public padding(padding: LengthMetrics): ToolBarV2Modifier;
  /**
   * Sets whether or not to display the press status effect.
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarV2Modifier } returns the instance of the ToolBarV2Modifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  public stateEffect(stateEffect: boolean): ToolBarV2Modifier;
}
/**
 * Declare Component ToolBarV2
 *
 * @struct { ToolBarV2 }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20 static
 * @noninterop
 */
@ComponentV2
export declare struct ToolBarV2 {
  /**
   * Define toolbarV2 item list.
   *
   * @type { ToolBarV2Item[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Require
  @Param
  toolBarList: ToolBarV2Item[];
  /**
   * Define toolbarV2 activate item index, default is -1.
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Param
  activatedIndex?: int;
  /**
   * Define divider Modifier.
   *
   * @type { ?DividerModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Param
  dividerModifier?: DividerModifier;
  /**
   * Define toolbarV2 modifier.
   *
   * @type { ?ToolBarV2Modifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Param
  toolBarModifier?: ToolBarV2Modifier;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20 static
   */
  @Builder
  build(): void;
}