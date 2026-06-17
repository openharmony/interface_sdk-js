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
 * 菜单MenuItem分组的标题和尾部信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface MenuItemGroupOptions {
    /**
     * 设置对应group的标题显示信息。 
     * 
     * 未设置时，不显示标题信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * 设置对应group的尾部显示信息。 
     * 
     * 未设置时，不显示尾部信息。
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
 * 该组件用来展示菜单MenuItem的分组。
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
     * @param { MenuItemGroupOptions } value - 包含设置MenuItemGroup的标题和尾部显示信息。<br/> 未设置时，不显示标题和尾部信息。
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
 * 该组件用来展示菜单MenuItem的分组。
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