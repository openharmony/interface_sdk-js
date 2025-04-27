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
 * @arkts 1.2
 */


import { CustomBuilder, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { ResourceStr } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines the option of MenuItemGroup.
 *
 * @interface MenuItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface MenuItemGroupOptions {
    /**
     * Defines the header display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * Defines the footer display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    footer?: ResourceStr | CustomBuilder;
}
export declare interface MenuItemGroupAttribute extends CommonMethod {
    attributeModifier(modifier: AttributeModifier<MenuItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIMenuItemGroupAttribute extends UICommonMethod {
    @memo
    attributeModifier(modifier: AttributeModifier<MenuItemGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function MenuItemGroup(
    value?: MenuItemGroupOptions, 
    @memo
    content_?: () => void,
): UIMenuItemGroupAttribute