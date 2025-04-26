/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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


import { ResourceStr, ColorFilter } from "./units";
import { BaseSpan, UIBaseSpan } from "./span";
import { ImageSpanAlignment, ImageFit } from "./enums";
import { ImageErrorCallback } from "./image";
import drawing from '../../@ohos.graphics.drawing';
import image from '../../@ohos.multimedia.image';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod, UICommonMethod } from "./common";
export declare interface ImageSpanAttribute extends BaseSpan {
    /**
     * Called when the alignment of image span is set.
     *
     * @param { ImageSpanAlignment } value - The alignment type of image span.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    verticalAlign(value: ImageSpanAlignment | undefined): this;
    /**
     * Sets the color filter effect on the image span.
     *
     * @param { ColorFilter | drawing.ColorFilter } filter ColorFilter object.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    colorFilter(filter: ColorFilter | drawing.ColorFilter | undefined): this;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value - Image display mode.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    objectFit(value: ImageFit | undefined): this;
    /**
     * Sets a callback which is triggered when the image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { ImageCompleteCallback } callback - Triggered when the image is successfully loaded.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onComplete(callback: ImageCompleteCallback | undefined): this;
    /**
     * Sets a callback which is triggered when an exception occurs during image loading.
     * The field of "message" returned in the callback carries the detailed information of failed image loading.
     *
     * @param { ImageErrorCallback } callback - Triggered when an exception occurs during image loading.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onError(callback: ImageErrorCallback | undefined): this;
    /**
     * Placeholder displayed on load
     *
     * @param { PixelMap } value
     * @returns { ImageSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    alt(value: image.PixelMap | undefined): this;
    attributeModifier(modifier: AttributeModifier<ImageSpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Callback function triggered when the image is successfully loaded.
 *
 * @typedef { function } ImageCompleteCallback
 * @param { ImageLoadResult } result - the information about the successfully loaded image.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export type ImageCompleteCallback = (result: ImageLoadResult) => void;
/**
 * The information about the successfully loaded image.
 *
 * @interface ImageLoadResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ImageLoadResult {
    /**
     * The width of the image source.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    width: number;
    /**
     * The height of the image source.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    height: number;
    /**
     * The width of the component source.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    componentWidth: number;
    /**
     * The height of the component source.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    componentHeight: number;
    /**
     * The value of the status of the image being loaded successfully.
     * If the returned status value is 0, the image data is successfully loaded.
     * If the returned status value is 1, the image is successfully decoded.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    loadingStatus: number;
    /**
     * The width of the picture that is actually drawn.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentWidth: number;
    /**
     * The height of the picture that is actually drawn.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentHeight: number;
    /**
     * The offset between image content and image component on the X-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentOffsetX: number;
    /**
     * The offset between image content and image component on the Y-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contentOffsetY: number;
}
export declare interface UIImageSpanAttribute extends UIBaseSpan {
    /**
     * Called when the alignment of image span is set.
     *
     * @param { ImageSpanAlignment } value - The alignment type of image span.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    verticalAlign(value: ImageSpanAlignment | undefined): this;
    /**
     * Sets the color filter effect on the image span.
     *
     * @param { ColorFilter | drawing.ColorFilter } filter ColorFilter object.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    colorFilter(filter: ColorFilter | drawing.ColorFilter | undefined): this;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value - Image display mode.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    objectFit(value: ImageFit | undefined): this;
    /**
     * Sets a callback which is triggered when the image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { ImageCompleteCallback } callback - Triggered when the image is successfully loaded.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onComplete(callback: ImageCompleteCallback | undefined): this;
    /**
     * Sets a callback which is triggered when an exception occurs during image loading.
     * The field of "message" returned in the callback carries the detailed information of failed image loading.
     *
     * @param { ImageErrorCallback } callback - Triggered when an exception occurs during image loading.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onError(callback: ImageErrorCallback | undefined): this;
    /**
     * Placeholder displayed on load
     *
     * @param { PixelMap } value
     * @returns { ImageSpanAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    alt(value: image.PixelMap | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ImageSpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function ImageSpan(
    value: ResourceStr | image.PixelMap, 
    @memo
    content_?: () => void,
): UIImageSpanAttribute