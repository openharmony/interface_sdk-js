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
 * MenuItem分组的标题和尾部信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface MenuItemGroupOptions {
    /**
     * 设置分组的标题，显示在分组中所有菜单项的顶部。 
     * 
     * 未设置时，不显示标题。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * 设置分组的菜单页脚，显示在分组中所有菜单项的底部。 
     * 
     * 未设置时，不显示菜单页脚。
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
 * 该组件用于展示MenuItem的分组，支持设置分组的标题和尾部信息，用于组织和管理菜单项的分类结构。适用于需要在菜单中按类别组织多个菜单项的场景，通过分组清晰地展示菜单的层次结构，提升菜单的可读性和用户体验。
 * 
 * > **说明：**
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
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
     * @param { MenuItemGroupOptions } value - 设置MenuItemGroup的标题和尾部信息。<br/> 未设置时，不显示标题和尾部信息。
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
 * 该组件用于展示MenuItem的分组，支持设置分组的标题和尾部信息，用于组织和管理菜单项的分类结构。适用于需要在菜单中按类别组织多个菜单项的场景，通过分组清晰地展示菜单的层次结构，提升菜单的可读性和用户体验。
 * 
 * > **说明：**
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 * 
 * ###### 子组件
 * 
 * 包含[MenuItem]{@link menu_item}子组件。
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
 * @noninterop [since 11]
 */
declare const MenuItemGroupInstance: MenuItemGroupAttribute;