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


import { CommonShapeMethod, CommonMethod, UICommonShapeMethod, UICommonMethod, AttributeModifier } from "./common";
import { Length } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Defines Line constructor options.
 *
 * @interface LineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface LineOptions {
    /**
     * Width of the rectangle where the line resides.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width?: string | number;
    /**
     * Height of the rectangle where the line resides.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height?: string | number;
}
export declare interface LineAttribute extends CommonShapeMethod {
    /**
     * Coordinate of the start point of the line (relative coordinate).
     *
     * @param { Array<Length> } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    startPoint(value: Array<Length> | undefined): this;
    /**
     * Line end coordinates (relative coordinates).
     *
     * @param { Array<Length> } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    endPoint(value: Array<Length> | undefined): this;
    attributeModifier(modifier: AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UILineAttribute extends UICommonShapeMethod {
    /**
     * Coordinate of the start point of the line (relative coordinate).
     *
     * @param { Array<Length> } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    startPoint(value: Array<Length> | undefined): this;
    /**
     * Line end coordinates (relative coordinates).
     *
     * @param { Array<Length> } value
     * @returns { LineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    endPoint(value: Array<Length> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<LineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Line(
    options?: LineOptions, 
    @memo
    content_?: () => void,
): UILineAttribute