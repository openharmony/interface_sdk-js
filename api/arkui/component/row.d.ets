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


import { PointLightStyle, Optional, CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { VerticalAlign, FlexAlign } from "./enums";
import { SpaceType } from "./column";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define options used to construct a row.
 *
 * @interface RowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface RowOptions {
    /**
     * Row spacing.
     *
     * @type { ?(string | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    space?: string | number;
}
/**
 * Define options used to construct a row.
 *
 * @interface RowOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface RowOptionsV2 {
    /**
     * Vertical layout element spacing.
     *
     * @type { ?SpaceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    space?: SpaceType;
}
export declare interface RowAttribute extends CommonMethod {
    /**
     * Called when the vertical alignment is set.
     *
     * @param { VerticalAlign } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alignItems(value: VerticalAlign | undefined): this;
    /**
     * Called when the horizontal alignment is set.
     *
     * @param { FlexAlign } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    justifyContent(value: FlexAlign | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    pointLight(value: PointLightStyle | undefined): this;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { Optional<boolean> } isReversed - If the main axis is reversed.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    reverse(isReversed: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIRowAttribute extends UICommonMethod {
    /**
     * Called when the vertical alignment is set.
     *
     * @param { VerticalAlign } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alignItems(value: VerticalAlign | undefined): this;
    /**
     * Called when the horizontal alignment is set.
     *
     * @param { FlexAlign } value
     * @returns { RowAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    justifyContent(value: FlexAlign | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    pointLight(value: PointLightStyle | undefined): this;
    /**
     * Called when the Main-Axis's direction is set reversed or not
     *
     * @param { Optional<boolean> } isReversed - If the main axis is reversed.
     * @returns { RowAttribute } The attribute of the row.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    reverse(isReversed: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<RowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Row(
    options?: RowOptions | RowOptions | RowOptionsV2, 
    @memo
    content_?: () => void,
): UIRowAttribute