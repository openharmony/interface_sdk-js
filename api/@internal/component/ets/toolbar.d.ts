/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * @file Defines toolbar attributes.
 * @kit ArkUI
 */

/**
 * Enumerates the placement options for toolbar items in the title bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare enum ToolBarItemPlacement {
  /**
   * Places the item at the start of the top bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_LEADING = 0,

  /**
   * Places the item at the end of the top bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  TOP_BAR_TRAILING = 1
}

/**
 * Provides optional parameters for **ToolBarItem** configuration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemOptions {
  /**
   * Placement position of the toolbar item.
   *
   * Default value: **ToolBarItemPlacement.TOP_BAR_LEADING**.
   *
   * **ToolBarItemPlacement.TOP_BAR_LEADING**: places the item at the start of the top bar.
   *
   * **ToolBarItemPlacement.TOP_BAR_TRAILING**: places the item at the end of the top bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  placement?: ToolBarItemPlacement;
}

/**
 * You can use the **ToolBarItem** component to add toolbar items to the title bar using the
 * [toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar) universal attribute.
 *
 * > **NOTE**
 * >
 * > This component is typically used with the
 * > [toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar) universal attribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
interface ToolBarItemInterface {
  /**
   * Creates a toolbar item at the beginning of the corresponding column in the title bar by default. The column
   * position is determined by the component's
   * [toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar) attribute
   * configuration.
   *
   * @param { ToolBarItemOptions } [options] - Optional parameters for **ToolBarItem**, including the **placement**
   *     parameter of the [ToolBarItemPlacement]{@link ToolBarItemPlacement} type.<br>Default value:
   *     **placement: ToolBarItemPlacement.TOP_BAR_LEADING**
   * @returns { ToolBarItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 20 dynamic
   */
  (options?: ToolBarItemOptions): ToolBarItemAttribute;
}

/**
 * The [universal attributes]{@link ./common} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare class ToolBarItemAttribute {}

/**
 * You can use the **ToolBarItem** component to add toolbar items to the title bar using the
 * [toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar) universal attribute.
 *
 * > **NOTE**
 * >
 * > This component is typically used with the
 * > [toolbar](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-toolbar.md#toolbar) universal attribute.
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItem: ToolBarItemInterface;

/**
 * Defines ToolBarItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 20 dynamic
 */
declare const ToolBarItemInstance: ToolBarItemAttribute;
