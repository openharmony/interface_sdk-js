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
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare enum ImageRenderMode {
  /**
   * Render according to the original image, including colors.
   * @since 7
   */
  /**
   * Render according to the original image, including colors.
   * @form
   * @since 9
   */
  /**
   * Render according to the original image, including colors.
   * @form
   * @crossplatform
   * @since 10
   */
  Original,

  /**
   * Render the image as a template image, ignoring the color information of the image.
   * @since 7
   */
  /**
   * Render the image as a template image, ignoring the color information of the image.
   * @form
   * @since 9
   */
  /**
   * Render the image as a template image, ignoring the color information of the image.
   * @form
   * @crossplatform
   * @since 10
   */
  Template,
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare enum ImageInterpolation {
  /**
   * Do not use interpolated image data.
   * @since 7
   */
  /**
   * Do not use interpolated image data.
   * @form
   * @since 9
   */
  /**
   * Do not use interpolated image data.
   * @form
   * @crossplatform
   * @since 10
   */
  None,

  /**
   * Low usage of interpolated image data.
   * @since 7
   */
  /**
   * Low usage of interpolated image data.
   * @form
   * @since 9
   */
  /**
   * Low usage of interpolated image data.
   * @form
   * @crossplatform
   * @since 10
   */
  Low,

  /**
   * Interpolated image data is used moderately.
   * @since 7
   */
  /**
   * Interpolated image data is used moderately.
   * @form
   * @since 9
   */
  /**
   * Interpolated image data is used moderately.
   * @form
   * @crossplatform
   * @since 10
   */
  Medium,

  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   * @since 7
   */
  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   * @form
   * @since 9
   */
  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   * @form
   * @crossplatform
   * @since 10
   */
  High,
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
interface ImageInterface {
  /**
   * Set src to obtain images.
   * @since 7
   */
  /**
   * Set src to obtain images
   * @form
   * @since 9
   */
  /**
   * Set src to obtain images
   * @form
   * @param { PixelMap | ResourceStr | DrawableDescriptor } src
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;
}

/**
 * @since 7
 */
/**
 * @form
 * @since 9
 */
/**
 * @form
 * @crossplatform
 * @since 10
 */
declare class ImageAttribute extends CommonMethod<ImageAttribute> {
  /**
   * Placeholder displayed on load
   * @since 7
   */
  /**
   * Placeholder displayed on load
   * @form
   * @since 9
   */
  /**
   * Placeholder displayed on load
   * @form
   * @crossplatform
   * @since 10
   */
  alt(value: string | Resource): ImageAttribute;

  /**
   * match Text Direction
   * @since 7
   */
  /**
   * match Text Direction
   * @form
   * @since 9
   */
  /**
   * match Text Direction
   * @form
   * @crossplatform
   * @since 10
   */
  matchTextDirection(value: boolean): ImageAttribute;

  /**
   * Indicates whether the image follows the text direction.
   * @since 7
   */
  /**
   * Indicates whether the image follows the text direction.
   * @form
   * @since 9
   */
  /**
   * Indicates whether the image follows the text direction.
   * @form
   * @crossplatform
   * @since 10
   */
  fitOriginalSize(value: boolean): ImageAttribute;

  /**
   * fill Color
   * @since 7
   */
  /**
   * fill Color
   * @form
   * @since 9
   */
  /**
   * fill Color
   * @form
   * @crossplatform
   * @since 10
   */
  fillColor(value: ResourceColor): ImageAttribute;

  /**
   * Sets the zoom type of an image.
   * @since 7
   */
  /**
   * Sets the zoom type of an image.
   * @form
   * @since 9
   */
  /**
   * Sets the zoom type of an image.
   * @form
   * @crossplatform
   * @since 10
   */
  objectFit(value: ImageFit): ImageAttribute;

  /**
   * Set the repeat style of the picture
   * @since 7
   */
  /**
   * Set the repeat style of the picture
   * @form
   * @since 9
   */
  /**
   * Set the repeat style of the picture
   * @form
   * @crossplatform
   * @since 10
   */
  objectRepeat(value: ImageRepeat): ImageAttribute;

  /**
   * Set the auto style of the picture
   * @since 7
   */
  /**
   * Set the auto style of the picture
   * @form
   * @since 9
   */
  /**
   * Set the auto style of the picture
   * @form
   * @crossplatform
   * @since 10
   */
  autoResize(value: boolean): ImageAttribute;

  /**
   * Sets the image rendering mode.
   * @since 7
   */
  /**
   * Sets the image rendering mode.
   * @form
   * @since 9
   */
  /**
   * Sets the image rendering mode.
   * @form
   * @crossplatform
   * @since 10
   */
  renderMode(value: ImageRenderMode): ImageAttribute;

  /**
   * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
   * @since 7
   */
  /**
   * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
   * @form
   * @since 9
   */
  /**
   * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
   * @form
   * @crossplatform
   * @since 10
   */
  interpolation(value: ImageInterpolation): ImageAttribute;

  /**
   * Specifies the picture decoding size.
   * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
   * @since 7
   */
  /**
   * Specifies the picture decoding size.
   * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
   * @form
   * @since 9
   */
  /**
   * Specifies the picture decoding size.
   * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
   * @form
   * @crossplatform
   * @since 10
   */
  sourceSize(value: { width: number; height: number }): ImageAttribute;

  /**
   * Sets the synchronous or asynchronous mode for image loading.
   * The default parameter type is bool, and the default value is false.
   * @since 8
   */
  /**
   * Sets the synchronous or asynchronous mode for image loading.
   * The default parameter type is bool, and the default value is false.
   * @form
   * @since 9
   */
  /**
   * Sets the synchronous or asynchronous mode for image loading.
   * The default parameter type is bool, and the default value is false.
   * @form
   * @crossplatform
   * @since 10
   */
  syncLoad(value: boolean): ImageAttribute;

  /**
   * Sets the color filter effect on the image.
   * @param value ColorFilter object.
   * @form
   * @since 9
   */
  /**
   * Sets the color filter effect on the image.
   * @param value ColorFilter object.
   * @form
   * @crossplatform
   * @since 10
   */
  colorFilter(value: ColorFilter): ImageAttribute;

  /**
   * Allow replication.
   * @form
   * @since 9
   */
  /**
   * Allow replication.
   * @form
   * @crossplatform
   * @since 10
   */
  copyOption(value: CopyOptions): ImageAttribute;

  /**
   * Enable image dragging.
   * Default value is false.
   * @form
   * @since 9
   * @deprecated since 10
   * @useinstead common.CommonMethod#draggable
   */
  draggable(value: boolean): ImageAttribute;

  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   * @since 7
   */
  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   * @form
   * @crossplatform
   * @since 10
   */
  onComplete(
    callback: (event?: {
      width: number;
      height: number;
      componentWidth: number;
      componentHeight: number;
      loadingStatus: number;
      contentWidth: number;
      contentHeight: number;
      contentOffsetX: number;
      contentOffsetY: number;
    }) => void,
  ): ImageAttribute;

  /**
   * This callback is triggered when an exception occurs during image loading.
   * @since 7
   */
  /**
   * This callback is triggered when an exception occurs during image loading.
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when an exception occurs during image loading.
   * @form
   * @crossplatform
   * @since 10
   */
  onError(callback: (event?: {
    /**
     * Component width.
     * @form
     * @crossplatform
     * @since 10
     */
    componentWidth: number;

    /**
     * Component height.
     * @form
     * @crossplatform
     * @since 10
     */
    componentHeight: number
  }) => void): ImageAttribute;

  /**
   * This callback is triggered when an exception occurs during image loading.
   * The field of "message" carries the detailed information of failed image loading.
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when an exception occurs during image loading.
   * The field of "message" carries the detailed information of failed image loading.
   * @form
   * @crossplatform
   * @since 10
   */
  onError(callback: (event?: {
    /**
     * Component width.
     * @form
     * @crossplatform
     * @since 10
     */
    componentWidth: number;

    /**
     * Component height.
     * @form
     * @crossplatform
     * @since 10
     */
    componentHeight: number;

    /**
     * Message.
     * @form
     * @crossplatform
     * @since 10
     */
    message: string
  }) => void): ImageAttribute;

  /**
   * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
   * If the svg image is a wireless loop image, this callback is not triggered.
   * @since 7
   */
  /**
   * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
   * If the svg image is a wireless loop image, this callback is not triggered.
   * @form
   * @since 9
   */
  /**
   * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
   * If the svg image is a wireless loop image, this callback is not triggered.
   * @form
   * @crossplatform
   * @since 10
   */
  onFinish(event: () => void): ImageAttribute;
}

/**
 * Defines Image Component.
 * @since 7
 */
/**
 * Defines Image Component.
 * @form
 * @since 9
 */
/**
 * Defines Image Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Image: ImageInterface;

/**
 * Defines Image Component instance.
 * @since 7
 */
/**
 * Defines Image Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Image Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const ImageInstance: ImageAttribute;
