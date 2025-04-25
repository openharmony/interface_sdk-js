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
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define options used to construct a polygon.
 *
 * @interface PolygonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface PolygonOptions {
    /**
     * Polygon width.
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
     * Polygon height.
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
/**
 * Defines the Point interface
 *
 * @interface Point
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface Point {
    /**
     * The x-axis coordinate of the point.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x: number | string;
    /**
     * The y-axis coordinate of the point.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y: number | string;
}
export declare interface PolygonAttribute extends CommonShapeMethod {
    /**
     * Called when the vertex coordinate list of a polygon is set.
     *
     * @param { Array<Point> } value
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    points(value: Array<Point> | undefined): this;
    attributeModifier(modifier: AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIPolygonAttribute extends UICommonShapeMethod {
    /**
     * Called when the vertex coordinate list of a polygon is set.
     *
     * @param { Array<Point> } value
     * @returns { PolygonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    points(value: Array<Point> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<PolygonAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Polygon(
    options?: PolygonOptions, 
    @memo
    content_?: () => void,
): UIPolygonAttribute