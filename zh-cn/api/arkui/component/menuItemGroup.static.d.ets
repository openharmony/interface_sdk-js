'use static'
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
 * 该组件用来展示菜单MenuItem的分组。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * 
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 * 
 * ###### 子组件
 * 
 * 包含[MenuItem]{@link menu_item}子组件。
 * 
 * @file
 * @kit ArkUI
 */
import { CommonMethod } from './common';
import { CustomBuilder } from './builder';
import { ResourceStr } from './units';
import { ComponentBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuItemGroupOptions {
    /**
     * 设置对应group的标题显示信息。 
     * 
     * 未设置时，不显示标题信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * 设置对应group的尾部显示信息。 
     * 
     * 未设置时，不显示尾部信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    footer?: ResourceStr | CustomBuilder;
}

/**
 * 不支持[通用属性]{@link common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuItemGroupAttribute extends CommonMethod {
    /**
     * 设置MenuItemGroup组件的属性修改器。
     *
     * @param { AttributeModifier<MenuItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
     *     MenuItemGroup组件的属性修改器。<br/>CommonMethod：[通用属性]{@link common}
     * @returns { MenuItemGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    attributeModifier(
        modifier: AttributeModifier<MenuItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines MenuItem Component.
 *
 * @param { MenuItemGroupOptions } [value] - The options
 * @param { CustomBuilder } [content_] - container
 * @returns { MenuItemGroupAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function MenuItemGroup(
    value?: MenuItemGroupOptions, 
    content_?: CustomBuilder,
): MenuItemGroupAttribute