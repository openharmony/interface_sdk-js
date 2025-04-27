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


import { PointLightStyle, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { Alignment } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Options used to construct the stack.
 *
 * @interface StackOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface StackOptions {
    /**
     * Set the alignment of sub components within the container.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignContent?: Alignment;
}
export declare interface StackAttribute extends CommonMethod {
    /**
     * Called when the alignment of items in the container is set.
     *
     * @param { Alignment } value
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignContent(value: Alignment | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { StackAttribute } The attribute of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    pointLight(value: PointLightStyle | undefined): this;
    attributeModifier(modifier: AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIStackAttribute extends UICommonMethod {
    /**
     * Called when the alignment of items in the container is set.
     *
     * @param { Alignment } value
     * @returns { StackAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignContent(value: Alignment | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { StackAttribute } The attribute of the stack.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    pointLight(value: PointLightStyle | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<StackAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Stack(
    options?: StackOptions, 
    @memo
    content_?: () => void,
): UIStackAttribute