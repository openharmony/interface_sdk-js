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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */
import { CommonMethod, PixelMap, AttributeModifier } from "./common";
import { ResourceColor, Length } from "./units";
import { Resource } from '../../global/resource';
import { LineCapStyle, LineJoinStyle } from "./enums";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Viewport bounding box.
 *
 * @interface ViewportRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ViewportRect {
    /**
     * Viewport X coordinate.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x?: number | string;
    /**
     * Viewport Y coordinate.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y?: number | string;
    /**
     * Viewport width.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width?: number | string;
    /**
     * Viewport height.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height?: number | string;
}
export declare interface ShapeAttribute extends CommonMethod {
    /**
     * Viewport of shape
     *
     * @param { ViewportRect } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default viewPort(value: ViewportRect | undefined): this;
    /**
     * Called when the border color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default stroke(value: ResourceColor | undefined): this;
    /**
     * Called when the fill color is set.
     *
     * @param { ResourceColor } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default fill(value: ResourceColor | undefined): this;
    /**
     * Called when the offset of the starting point of border drawing is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeDashOffset(value: number | string | undefined): this;
    /**
     * Called when the gap of the border is set.
     *
     * @param { Array<Length> } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeDashArray(value: Array<Length> | undefined): this;
    /**
     * Called when the path endpoint drawing style is set.
     *
     * @param { LineCapStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeLineCap(value: LineCapStyle | undefined): this;
    /**
     * Called when the border corner drawing style is set.
     *
     * @param { LineJoinStyle } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeLineJoin(value: LineJoinStyle | undefined): this;
    /**
     * Called when the limit value for drawing acute angles as oblique angles is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeMiterLimit(value: number | string | undefined): this;
    /**
     * Called when the opacity of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeOpacity(value: number | string | Resource | undefined): this;
    /**
     * Called when the transparency of the border is set.
     *
     * @param { number | string | Resource } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default fillOpacity(value: number | string | Resource | undefined): this;
    /**
     * Called when the width of the border is set.
     *
     * @param { number | string } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default strokeWidth(value: number | string | undefined): this;
    /**
     * Called when setting whether anti aliasing is on.
     *
     * @param { boolean } value
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default antiAlias(value: boolean | undefined): this;
    /**
     * Called when shape mesh.
     *
     * @param { Array<number> } value
     * @param { number } column
     * @param { number } row
     * @returns { ShapeAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    default mesh(value: Array<number> | undefined, column: number | undefined, row: number | undefined): this;
    default attributeModifier(modifier: AttributeModifier<ShapeAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Shape(
    value?: PixelMap, 
    @memo
    content_?: () => void,
): ShapeAttribute
