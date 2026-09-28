/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */
/**
 * Describes the header and footer information of the menu item group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface MenuItemGroupOptions {
  /**
   * Header information of the menu item group, which is displayed at the top of all menu items in the group.
   *
   * If not set, no header is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  header?: ResourceStr | CustomBuilder;
  /**
   * Footer information of the menu item group, which is displayed at the bottom of all menu items in the group.
   *
   * If not set, no footer is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  footer?: ResourceStr | CustomBuilder;
}

/**
 * The **MenuItemGroup** component represents a group of menu items. It supports setting the header and footer
 * information of a group, and is used to organize and manage the classification structure of menu items. It is
 * applicable to scenarios where multiple menu items need to be organized by category in a menu. By grouping, it clearly
 * presents the hierarchical structure of the menu, improving the readability of the menu and the user experience.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
interface MenuItemGroupInterface {
  /**
   * Creates the MenuItemGroup component.
   *
   * @param { MenuItemGroupOptions } value - Header and footer of the menu item group.<br/> If this parameter is not
   *     set, the header and footer information is not displayed.
   * @returns { MenuItemGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  (value?: MenuItemGroupOptions): MenuItemGroupAttribute;
}

/**
 * Class for MenuItemGroupAttribute.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare class MenuItemGroupAttribute extends CommonMethod<MenuItemGroupAttribute> {}

/**
 * The **MenuItemGroup** component represents a group of menu items. It supports setting the header and footer
 * information of a group, and is used to organize and manage the classification structure of menu items. It is
 * applicable to scenarios where multiple menu items need to be organized by category in a menu. By grouping, it clearly
 * presents the hierarchical structure of the menu, improving the readability of the menu and the user experience.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate
 * > their
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * This component contains the [MenuItem]{@link ./menu_item} child component.
 *
 * ###### Sample
 *
 * For details, see [Example in Menu](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-menu.md#example).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const MenuItemGroup: MenuItemGroupInterface;

/**
 * Defines MenuItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @noninterop
 */
declare const MenuItemGroupInstance: MenuItemGroupAttribute;