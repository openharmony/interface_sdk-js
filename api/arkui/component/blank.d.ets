/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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


import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { ResourceColor } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
export declare interface BlankAttribute extends CommonMethod {
    /**
     * color: set color.
     *
     * @param { ResourceColor } value
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    color(value: ResourceColor | undefined): this;
    attributeModifier(modifier: AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIBlankAttribute extends UICommonMethod {
    /**
     * color: set color.
     *
     * @param { ResourceColor } value
     * @returns { BlankAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    color(value: ResourceColor | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<BlankAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Blank(
    min?: number | string, 
    @memo
    content_?: () => void,
): UIBlankAttribute