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
import { ResourceStr } from './arkui/component/units';
import { Component } from './arkui/component/customComponent';
import { SymbolGlyphModifier } from './arkui/SymbolGlyphModifier';
import { Builder } from './arkui/component/builder';
/**
 * Declaration of the menu item on the right side.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
export declare class ComposeTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public value: ResourceStr;
  /**
   * Symbol resource for this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * Icon label for this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public label?: ResourceStr;
  /**
   * Whether to enable this menu item.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public isEnabled?: boolean;
  /**
   * Callback function when click on this menu item.
   *
   * @type { ?function }
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
   * @default "auto".The options are as follows:<br/>
   *     "auto":The value is converted to "yes" or "no" based on the component.
   *     "yes": the current component is selectable for the accessibility service.
   *     "no": The current component is not selectable for the accessibility service.
   *     "no-hide-descendants":The current component and all its child components are not selectable<br/>
   *     for the accessibility service.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  public accessibilityLevel?: string;
}
/**
 * Declaration of the composable title bar.
 * @struct { ComposeTitleBar }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 * @noninterop
 */
@Component
export declare struct ComposeTitleBar {
  /**
   * Avatar resource and event callback of this title bar.
   *
   * @type { ?ComposeTitleBarMenuItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  item?: ComposeTitleBarMenuItem;
  /**
   * Title of this title bar.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  title: ResourceStr;
  /**
   * Sub-title of this title bar.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  subtitle?: ResourceStr;
  /**
   * Menu items on the right side.
   *
   * @type { ?Array<ComposeTitleBarMenuItem> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  menuItems?: Array<ComposeTitleBarMenuItem>;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  @Builder
  build(): void;
}