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
import { ResourceStr } from './arkui/component/units';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { BuilderParam, Builder } from './arkui/component/builder';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class TabTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public value: ResourceStr;
  /**
   * Symbol resource for this menu item.
   *
   * @type { ?SymbolGlyphModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * Icon label for this menu item.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public label?: ResourceStr;
  /**
   * Whether to enable this menu item.
   *
   * @type { ?boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public isEnabled?: boolean;
  /**
   * Callback function when click on this menu item.
   *
   * @type { ?function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public action?: () => void;
  /**
   * The accessibilityText of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public accessibilityText?: ResourceStr;
  /**
   * The accessibilityDescription of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * The accessibilityLevel of this menu item.
   *
   * @type { ?string }
   * @default 'auto'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public accessibilityLevel?: string;
}
/**
 * Declaration of the tab item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class TabTitleBarTabItem {
  /**
   * Text description for this tab item.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public title: ResourceStr;
  /**
   * Icon resource for this tab item.
   *
   * @type { ?ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public icon?: ResourceStr;
  /**
   * Symbol resource for this tab item.
   *
   * @type { ?SymbolGlyphModifier }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public symbolStyle?: SymbolGlyphModifier;
}
/**
 * Declaration of the tabbed title bar.
 * @struct { TabTitleBar }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct TabTitleBar {
  /**
   * Tab items on the left side.
   *
   * @type { Array<TabTitleBarTabItem> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  tabItems: Array<TabTitleBarTabItem>;
  /**
   * Menu items on the right side.
   *
   * @type { ?Array<TabTitleBarMenuItem> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  menuItems?: Array<TabTitleBarMenuItem>;
  /**
   * Content builder. Each component corresponds to a tab item.
   * The builder needs to be transferred.
   *
   * @type { function }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @BuilderParam
  swiperContent: () => void;
  /**
   * The method to build component.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder
  build(): void;
}