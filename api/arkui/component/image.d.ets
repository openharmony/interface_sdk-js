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


import image from '../../@ohos.multimedia.image';
import drawing from '../../@ohos.graphics.drawing';
import matrix4 from '../../@ohos.matrix4';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { ResourceStr, ResourceColor, ColorFilter, EdgeWidths } from "./units";
import { ImageFit, ImageRepeat, CopyOptions } from "./enums";
import { Resource } from '../../global/resource';
import { CommonMethod, PointLightStyle, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ImageRenderMode {
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Original,
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Template
}
/**
 * Specify image's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ImageContent {
    /**
     * Make image empty.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    EMPTY = 0
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 */
export declare enum DynamicRangeMode {
    /**
     * Allow image content to use an unrestricted extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    HIGH = 0,
    /**
     * Allow image content to use some extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    CONSTRAINT = 1,
    /**
     * Restrict the image content dynamic range to the standard range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    STANDARD = 2
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare enum ImageInterpolation {
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    None,
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Low,
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    Medium,
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    High
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum ImageRotateOrientation {
    /**
     * Rotate according to the image rotation
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    AUTO = 0,
    /**
     * Ignore the rotation of the image
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    UP = 1,
    /**
     * Based on image rotation, rotate clockwise 90 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    RIGHT = 2,
    /**
     * Based on image rotation, rotate clockwise 180 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DOWN = 3,
    /**
     * Based on image rotation, rotate clockwise 270 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    LEFT = 4
}
/**
 * ImageCompleteEvent
 *
 * @interface ImageCompleteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ImageCompleteEvent {
    /**
     * The width of the image source.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
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
     * @form
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
     * @form
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
     * @form
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
     * @form
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
     * @form
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
     * @form
     * @atomicservice
  
     * @since 20
     */
    contentHeight: number;
    /**
     * The actual draw is offset from the x-axis of the component itself.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
  
     * @since 20
     */
    contentOffsetX: number;
    /**
     * The actual draw is offset from the y-axis of the component itself.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
  
     * @since 20
     */
    contentOffsetY: number;
}
/**
 * Defines source size of image.
 *
 * @interface ImageSourceSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface ImageSourceSize {
    /**
     * Set width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width: number;
    /**
     * Set height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height: number;
}
/**
 * Defines the ColorContent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class ColorContent {
    /**
     * Indicates the ColorContent to original value.
     *
     * @type { ColorContent }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static readonly ORIGIN: ColorContent;
}
export declare interface ImageAttribute extends CommonMethod {
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource | image.PixelMap } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alt(value: string | Resource | image.PixelMap | undefined): this;
    /**
     * match Text Direction
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    matchTextDirection(value: boolean | undefined): this;
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fitOriginalSize(value: boolean | undefined): this;
    /**
     * fill Color
     *
     * @param { ResourceColor } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fillColor(value: ResourceColor | undefined): this;
    /**
     * fill Color
     *
     * @param { ResourceColor | ColorContent } color
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    fillColor(color: ResourceColor | ColorContent | undefined): this;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    objectFit(value: ImageFit | undefined): this;
    /**
     * Sets the matrix for the image.
     *
     * @param { matrix4.Matrix4Transit } matrix
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    imageMatrix(matrix: matrix4.Matrix4Transit | undefined): this;
    /**
     * Set the repeat style of the picture
     *
     * @param { ImageRepeat } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    objectRepeat(value: ImageRepeat | undefined): this;
    /**
     * Set the auto style of the picture
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    autoResize(value: boolean | undefined): this;
    /**
     * Sets the image rendering mode.
     *
     * @param { ImageRenderMode } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    renderMode(value: ImageRenderMode | undefined): this;
    /**
     * Set dynamic range mode of image.
     *
     * @param { DynamicRangeMode } value - Indicates the resizable options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    dynamicRangeMode(value: DynamicRangeMode | undefined): this;
    /**
     * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
     *
     * @param { ImageInterpolation } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    interpolation(value: ImageInterpolation | undefined): this;
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { ImageSourceSize } value - Image source size.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sourceSize(value: ImageSourceSize | undefined): this;
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    syncLoad(value: boolean | undefined): this;
    /**
     * Sets the color filter effect on the image.
     *
     * @param { ColorFilter | drawing.ColorFilter } value ColorFilter object.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    colorFilter(value: ColorFilter | drawing.ColorFilter | undefined): this;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Enable image dragging.
     * Default value is true.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    draggable(value: boolean | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    pointLight(value: PointLightStyle | undefined): this;
    /**
     * SVG anti-aliasing.
     * The range of the parameter values is (0.333, 1.333].
     * Default value is 0.0.
     *
     * @param { number } value - The degree of anti-aliasing.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    edgeAntialiasing(value: number | undefined): this;
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { ImageOnCompleteCallback } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onComplete(callback: ImageOnCompleteCallback | undefined): this;
    /**
     * This callback is triggered when an exception occurs during image loading.
     * The field of "message" carries the detailed information of failed image loading.
     *
     * @param { ImageErrorCallback } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onError(callback: ImageErrorCallback | undefined): this;
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onFinish(event: (() => void) | undefined): this;
    /**
     * Enable image analyzer.
     *
     * @param { boolean} enable
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    enableAnalyzer(enable: boolean | undefined): this;
    /**
     * Set image analyzer with config.
     *
     * @param { ImageAnalyzerConfig } config
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    analyzerConfig(config: ImageAnalyzerConfig | undefined): this;
    /**
     * Set image resizable options.
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    resizable(value: ResizableOptions | undefined): this;
    /**
     * Whether to support sensitive privacy information
     *
     * @param { boolean } supported - Whether to support sensitive privacy information.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    privacySensitive(supported: boolean | undefined): this;
    /**
     * Set the rotation angle of image.
     *
     * @param { ImageRotateOrientation } orientation
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    orientation(orientation: ImageRotateOrientation | undefined): this;
    attributeModifier(modifier: AttributeModifier<ImageAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * @typedef { function } ImageErrorCallback
 * @param { ImageError } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type ImageErrorCallback = (error: ImageError) => void;
/**
 * ImageOnCompleteCallback
 *
 * @typedef { function } ImageOnCompleteCallback
 * @param { ImageCompleteEvent } loadEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export type ImageOnCompleteCallback = (loadEvent?: ImageCompleteEvent) => void;
/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export declare interface ImageError {
    /**
     * Component width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    componentWidth: number;
    /**
     * Component height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    componentHeight: number;
    /**
     * Message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    message: string;
}
/**
 * Image resizable options
 *
 * @interface ResizableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface ResizableOptions {
    /**
     * Image slice widths.
     *
     * @type { ?EdgeWidths }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    slice?: EdgeWidths;
    /**
     * Image lattice.
     *
     * @type { ?drawing.Lattice }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    lattice?: drawing.Lattice;
}
export declare interface UIImageAttribute extends UICommonMethod {
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource | image.PixelMap } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    alt(value: string | Resource | image.PixelMap | undefined): this;
    /**
     * match Text Direction
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    matchTextDirection(value: boolean | undefined): this;
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fitOriginalSize(value: boolean | undefined): this;
    /**
     * fill Color
     *
     * @param { ResourceColor } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    fillColor(value: ResourceColor | undefined): this;
    /**
     * fill Color
     *
     * @param { ResourceColor | ColorContent } color
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    fillColor(color: ResourceColor | ColorContent | undefined): this;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    objectFit(value: ImageFit | undefined): this;
    /**
     * Sets the matrix for the image.
     *
     * @param { matrix4.Matrix4Transit } matrix
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    imageMatrix(matrix: matrix4.Matrix4Transit | undefined): this;
    /**
     * Set the repeat style of the picture
     *
     * @param { ImageRepeat } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    objectRepeat(value: ImageRepeat | undefined): this;
    /**
     * Set the auto style of the picture
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    autoResize(value: boolean | undefined): this;
    /**
     * Sets the image rendering mode.
     *
     * @param { ImageRenderMode } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    renderMode(value: ImageRenderMode | undefined): this;
    /**
     * Set dynamic range mode of image.
     *
     * @param { DynamicRangeMode } value - Indicates the resizable options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    dynamicRangeMode(value: DynamicRangeMode | undefined): this;
    /**
     * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
     *
     * @param { ImageInterpolation } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    interpolation(value: ImageInterpolation | undefined): this;
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { ImageSourceSize } value - Image source size.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    sourceSize(value: ImageSourceSize | undefined): this;
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    syncLoad(value: boolean | undefined): this;
    /**
     * Sets the color filter effect on the image.
     *
     * @param { ColorFilter | drawing.ColorFilter } value ColorFilter object.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    colorFilter(value: ColorFilter | drawing.ColorFilter | undefined): this;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    copyOption(value: CopyOptions | undefined): this;
    /**
     * Enable image dragging.
     * Default value is true.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    draggable(value: boolean | undefined): this;
    /**
     * Defines the PointLight
     *
     * @param { PointLightStyle } value - The point light style.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    pointLight(value: PointLightStyle | undefined): this;
    /**
     * SVG anti-aliasing.
     * The range of the parameter values is (0.333, 1.333].
     * Default value is 0.0.
     *
     * @param { number } value - The degree of anti-aliasing.
     * @returns { ImageAttribute } The attribute of the image.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    edgeAntialiasing(value: number | undefined): this;
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { ImageOnCompleteCallback } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onComplete(callback: ImageOnCompleteCallback | undefined): this;
    /**
     * This callback is triggered when an exception occurs during image loading.
     * The field of "message" carries the detailed information of failed image loading.
     *
     * @param { ImageErrorCallback } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onError(callback: ImageErrorCallback | undefined): this;
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    onFinish(event: (() => void) | undefined): this;
    /**
     * Enable image analyzer.
     *
     * @param { boolean} enable
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    @memo
    enableAnalyzer(enable: boolean | undefined): this;
    /**
     * Set image analyzer with config.
     *
     * @param { ImageAnalyzerConfig } config
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    analyzerConfig(config: ImageAnalyzerConfig | undefined): this;
    /**
     * Set image resizable options.
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    resizable(value: ResizableOptions | undefined): this;
    /**
     * Whether to support sensitive privacy information
     *
     * @param { boolean } supported - Whether to support sensitive privacy information.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 20
     */
    @memo
    privacySensitive(supported: boolean | undefined): this;
    /**
     * Set the rotation angle of image.
     *
     * @param { ImageRotateOrientation } orientation
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    orientation(orientation: ImageRotateOrientation | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<ImageAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Image(
    src: image.PixelMap | ResourceStr | DrawableDescriptor | image.PixelMap | ResourceStr | DrawableDescriptor | ImageContent, imageAIOptions?: ImageAIOptions, 
    @memo
    content_?: () => void,
): UIImageAttribute