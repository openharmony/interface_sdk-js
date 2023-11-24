/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/units.d.ts" />

import { ResourceStr } from 'GlobalResource';

/**
 * Declaration of the menu item on the right side.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declaration of the menu item on the right side.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
export declare class SelectTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   * @type { ResourceStr }.
   * @since 10
   */
  /**
   * Icon resource for this menu item.
   * @type { ResourceStr }.
   * @atomicservice
   * @since 11
   */
  value: ResourceStr;

  /**
   * Whether to enable this menu item.
   * @type { boolean }.
   * @since 10
   */
  /**
   * Whether to enable this menu item.
   * @type { boolean }.
   * @atomicservice
   * @since 11
   */
  isEnabled?: boolean;

  /**
   * Callback function when click on this menu item.
   * @type { () => void }.
   * @since 10
   */
  /**
   * Callback function when click on this menu item.
   * @type { () => void }.
   * @atomicservice
   * @since 11
   */
  action?: () => void;
}

/**
 * Declaration of the selectable title bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Declaration of the selectable title bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
@Component
export declare struct SelectTitleBar {
  /**
   * Selected index of the initial options in the drop-down menu. The index of the first item is 0.
   * If this attribute is not set, the default value is -1. Which means, no menu item is selected.
   * @type { number }.
   * @since 10
   */
  /**
   * Selected index of the initial options in the drop-down menu. The index of the first item is 0.
   * If this attribute is not set, the default value is -1. Which means, no menu item is selected.
   * @type { number }.
   * @atomicservice
   * @since 11
   */
  @Prop selected: number;

  /**
   * Options inside the drop-down list.
   * @type { Array<SelectOption> }.
   * @since 10
   */
  /**
   * Options inside the drop-down list.
   * @type { Array<SelectOption> }.
   * @atomicservice
   * @since 11
   */
  options: Array<SelectOption>;

  /**
   * Menu items on the right side.
   * @type { Array<SelectTitleBarMenuItem> }.
   * @since 10
   */
  /**
   * Menu items on the right side.
   * @type { Array<SelectTitleBarMenuItem> }.
   * @atomicservice
   * @since 11
   */
  menuItems?: Array<SelectTitleBarMenuItem>;

  /**
   * Sub-title of this title bar.
   * @type { ResourceStr }.
   * @since 10
   */
  /**
   * Sub-title of this title bar.
   * @type { ResourceStr }.
   * @atomicservice
   * @since 11
   */
  subtitle?: ResourceStr;

  /**
   * The number displayed in a badge.
   * @type { number }.
   * @since 10
   */
  /**
   * The number displayed in a badge.
   * @type { number }.
   * @atomicservice
   * @since 11
   */
  badgeValue?: number;

  /**
   * Whether to hide the back arrow at the left side.
   * @type { boolean }.
   * @since 10
   */
  /**
   * Whether to hide the back arrow at the left side.
   * @type { boolean }.
   * @atomicservice
   * @since 11
   */
  hidesBackButton?: boolean;

  /**
   * Callback function when an option is selected
   * @type { (index: number) => void }.
   * @since 10
   */
  /**
   * Callback function when an option is selected
   * @type { (index: number) => void }.
   * @atomicservice
   * @since 11
   */
  onSelected?: ((index: number) => void);
}
