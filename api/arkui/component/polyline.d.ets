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
import { Point } from "./polygon";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Define options used to construct a polyline.
 *
 * @interface PolylineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface PolylineOptions {
    /**
     * Polyline width.
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
     * Polyline height.
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
export declare interface PolylineAttribute extends CommonShapeMethod {
    /**
     * Called when the polyline is set to pass through the coordinate point list.
     *
     * @param { Array<Point> } value
     * @returns { PolylineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    points(value: Array<Point> | undefined): this;
    attributeModifier(modifier: AttributeModifier<PolylineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIPolylineAttribute extends UICommonShapeMethod {
    /**
     * Called when the polyline is set to pass through the coordinate point list.
     *
     * @param { Array<Point> } value
     * @returns { PolylineAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    points(value: Array<Point> | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<PolylineAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Polyline(
    options?: PolylineOptions, 
    @memo
    content_?: () => void,
): UIPolylineAttribute