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
 * @arkts 1.2
 */
import { Component } from './arkui/component/customComponent';
import { ResourceStr, Resource, ResourceColor } from './arkui/component/units';
import { PropRef, Observed, ObjectLink } from './arkui/stateManagement/decorator';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { DividerModifier } from './arkui/DividerModifier';
import { LengthMetrics } from './arkui/Graphics';
import { TabsController } from './arkui/component/tabs';
import { Builder } from './arkui/component/builder';
/**
 * Declare enum ItemState.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare enum ItemState {
  /**
   * Enable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ENABLE = 1,
  /**
   * Disable type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  DISABLE = 2,
  /**
   * Activate type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  ACTIVATE = 3
}
/**
 * Defines toolBar symbolGlyph options.
 *
 * @interface ToolBarSymbolGlyphOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export interface ToolBarSymbolGlyphOptions {
  /**
   * Modifier of toolbar's normal symbol.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  normal?: SymbolGlyphModifier;
  /**
   * Modifier of toolbar's activated symbol.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  activated?: SymbolGlyphModifier;
}
/**
 * Declare type ToolBarOption.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Observed
export declare class ToolBarOption {
  /**
   * Define text content.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  content: ResourceStr;
  /**
   * Define the action event.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  action?: () => void;
  /**
   * Define icon resource.
   *
   * @type { ?Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  icon?: Resource;
  /**
   * Define item type.
   *
   * @type { ?ItemState }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  state?: ItemState;
  /**
   * Define text fontColor.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  textColor?: ResourceColor;
  /**
   * Text fontColor when the item is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  activatedTextColor?: ResourceColor;
  /**
   * Define icon fillColor.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  iconColor?: ResourceColor;
  /**
   * Icon fillColor when the item is activated.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  activatedIconColor?: ResourceColor;
  /**
   * Item symbol icon.
   *
   * @type { ?ToolBarSymbolGlyphOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  toolBarSymbolOptions?: ToolBarSymbolGlyphOptions;
  /**
   * The accessibilityText of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of item.
   *
   * @type { ?string }
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  accessibilityLevel?: string;
}
/**
 * Declare ToolBarOptions use in ToolBar.
 * @extends Array<ToolBarOption>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Observed
export declare class ToolBarOptions extends Array<ToolBarOption> {
}
/**
 * Declare ToolBarModifier use in ToolBar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class ToolBarModifier {
  /**
   * Sets the height of the toolBar.
   *
   * @param { LengthMetrics } height - toolBar's height.
   * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  height(height: LengthMetrics): ToolBarModifier;
  /**
   * Sets the backgroundColor of the toolBar.
   *
   * @param { ResourceColor } backgroundColor - toolBar's backgroundColor.
   * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  backgroundColor(backgroundColor: ResourceColor): ToolBarModifier;
  /**
   * Sets the left and right padding of the toolbar.
   *
   * @param { LengthMetrics } padding - left and right padding.
   * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  padding(padding: LengthMetrics): ToolBarModifier;
  /**
   * Sets whether or not to display the press status effect.
   *
   * @param { boolean } stateEffect - press status effect.
   * @returns { ToolBarModifier } returns the instance of the ToolBarModifier.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  stateEffect(stateEffect: boolean): ToolBarModifier;
}
/**
 * Declare Component ToolBar.
 * @struct { ToolBar }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct ToolBar {
  /**
   * Define toolbar list array.
   *
   * @type { ToolBarOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @ObjectLink toolBarList: ToolBarOptions;
  /**
   * Define toolbar activate item index, default is -1.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef activateIndex?: number;
  /**
   * Define toolbar controller.
   *
   * @type { TabsController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  controller: TabsController;
  /**
   * Define divider Modifier.
   *
   * @type { ?DividerModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef dividerModifier?: DividerModifier;
  /**
   * Define toolbar modifier.
   *
   * @type { ?ToolBarModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @PropRef toolBarModifier?: ToolBarModifier;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder build(): void;
}