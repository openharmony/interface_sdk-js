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
 * Describes the header and footer of the menu item group.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface MenuItemGroupOptions {
    /**
     * Header of the menu item group.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * Footer of the menu item group.
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
 * The **MenuItemGroup** component represents a group of menu items.
 * 
 * > **NOTE**
 * >
 * > This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
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
     *
     * @param { MenuItemGroupOptions } value - Header and footer of the menu item group.
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
 * The **MenuItemGroup** component represents a group of menu items.
 * 
 * > **NOTE**
 * >
 * > This component is supported since API version 9. Newly added APIs will be marked with a superscript to indicate 
 * > their 
 * 
 * ###### Child Components
 * 
 * This component contains the [MenuItem]{@link menu_item} child component.
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