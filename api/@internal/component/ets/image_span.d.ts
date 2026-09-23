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
 */

/**
 * **ImageSpan** is a child component of [Text]{@link ./text} and [ContainerSpan]{@link ./container_span}, used to
 * display inline images in text. It supports setting the image alignment, scale type, loading placeholder image, and
 * color filter, and is suitable for scenarios where images need to be embedded in text paragraphs to implement image-
 * text layout.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface ImageSpanInterface {
  /**
   *
   * Defines the constructor of ImageSpan.
   *
   * @param { ResourceStr | PixelMap } value - Image data source, which supports local and network images.
   *     <br>When a network image is used, the ohos.permission.INTERNET permission is required. For details about how to
   *     request the permission, see [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
   *     <br>When a relative path is used to reference an image resource, for example, `ImageSpan("common/test.jpg")`,
   *     cross-package or cross-module invocation of the ImageSpan component is not supported. You are advised to use
   *     `$r` to manage image resources that need to be used globally.
   *     <br>- The supported image formats include png, jpg, bmp, svg, gif, webp, and heif.
   *     <br>- `Base64` strings are supported. The format is `data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data]`,
   *     where `[base64 data]` is the `Base64` string data.
   *     <br>- Strings with the file://data/storage path prefix are supported, which are used to read image resources in
   *     the file folder under the installation directory of the application. Ensure that the files under the
   *     application installation directory have read permission.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value: ResourceStr | PixelMap): ImageSpanAttribute;
}

/**
 * The attributes inherit from [BaseSpan]{@link BaseSpan}. Among the universal attributes, [size]{@link ./common},
 * [background]{@link ./common}, and [border]{@link ./common} are supported.
 *
 * @extends CommonMethod<ImageSpanAttribute> [since 10 - 10]
 * @extends BaseSpan<ImageSpanAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare class ImageSpanAttribute extends BaseSpan<ImageSpanAttribute> {
  /**
   * Sets the alignment of the image based on the line height. It is suitable for adjusting the vertical alignment
   * between the image and text in image-text layout scenarios. If this API is not used, the default alignment is
   * **ImageSpanAlignment.BOTTOM**.
   *
   * @param { ImageSpanAlignment } value - Alignment mode of the image based on the line height.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign(value: ImageSpanAlignment): ImageSpanAttribute;

  /**
   * Sets the color filter for the image.
   *
   * @param { ColorFilter | DrawingColorFilter } filter - 1. Sets a color filter effect for the image. The input
   *     parameter is a 4x5 RGBA conversion matrix.
   *     <br>The first row of the matrix is used to calculate R' (the new red component), the second row to calculate G'
   *     (the new green component), the third row to calculate B' (the new blue component), and the fourth row to
   *     calculate A' (the new alpha component). The four rows represent different RGBA components.
   *     <br>When the diagonal values of the matrix are 1 and the other values are 0, the original colors of the image
   *     are retained.
   *     <br> **Calculation rule:**
   *     <br>If the input filter matrix is:
   *     <br>![image-matrix-1](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_1.png)
   *     <br>and the pixel is [R, G, B, A] with color values in the range [0, 255],
   *     <br>then the filtered color is [R', G', B', A']
   *     <br>![image-matrix-2](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_2.png)
   *     <br>2. Supports the ColorFilter type of @ohos.graphics.drawing as the input parameter.
   *     <br>**NOTE**
   *     <br>The DrawingColorFilter type in this API can be used in atomic services. For SVG image sources, the filter
   *     takes effect only on the stroke attribute.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  colorFilter(filter: ColorFilter | DrawingColorFilter): ImageSpanAttribute;

  /**
   * Sets the scale type of the image. It is suitable for controlling how the image is displayed in the container. If
   * this API is not used, the default scale type is **ImageFit.Cover**.
   *
   * @param { ImageFit } value - Scale type of the image.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit(value: ImageFit): ImageSpanAttribute;

  /**
   * Triggered when the image is successfully loaded or decoded. The size of the loaded image is returned.
   *
   * @param { ImageCompleteCallback } callback - Callback triggered when the image is successfully loaded or decoded.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComplete(callback: ImageCompleteCallback): ImageSpanAttribute;

  /**
   * Enables or disables the
   * [Enhanced SVG Tag Parsing](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md). When enabled,
   * new SVG parsing capabilities are supported, which is suitable for scenarios that require new SVG features. When
   * disabled, the original SVG parsing capability is retained, which is suitable for scenarios that require
   * compatibility with the display of SVG images in earlier versions. If this API is not used, the original SVG parsing
   * capability is retained by default.
   *
   * After the **ImageSpan** component is created, the value of this attribute cannot be dynamically changed.
   *
   * @param { Optional<boolean> } enable - Whether to enable the
   *     [Enhanced SVG Tag Parsing](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).
   *     <br>true: supports the new SVG parsing capability; false: retains the original SVG parsing capability.
   * @returns { ImageSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  supportSvg2(enable: Optional<boolean>): ImageSpanAttribute;

  /**
   * Triggered when an error occurs during image loading.
   *
   * @param { ImageErrorCallback } callback - Callback triggered when an error occurs during image loading.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onError(callback: ImageErrorCallback): ImageSpanAttribute;

  /**
   * Sets the placeholder image displayed during image loading. If this API is not used, the default value is **null**,
   * and no placeholder image is displayed.
   *
   * @param { PixelMap } value - Placeholder image displayed during image loading, which supports the
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} type.
   * @returns { ImageSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  alt(value: PixelMap): ImageSpanAttribute;

  /**
   * Sets the resizing options when the image is stretched. Stretching takes effect on the drag thumbnail and
   * placeholder image.
   *
   * When `top + bottom` is greater than the height of the original image or `left + right` is greater than the width of
   * the original image, the [ResizableOptions]{@link ResizableOptions} attribute does not take effect.
   *
   * When the parameter type of the component is an animated image,
   * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}, or SVG, this
   * attribute does not take effect.
   *
   * @param { ResizableOptions } value - Resizable image options when the image is stretched.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamiconly
   */
  resizable(value: ResizableOptions): ImageSpanAttribute;
}

/**
 * **ImageSpan** is a child component of [Text]{@link ./text} and [ContainerSpan]{@link ./container_span}, used to
 * display inline images in text. It supports setting the image alignment, scale type, loading placeholder image, and
 * color filter, and is suitable for scenarios where images need to be embedded in text paragraphs to implement image-
 * text layout.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 10. Newly added APIs will be marked with a superscript to indicate
 * > their
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const ImageSpan: ImageSpanInterface;

/**
 * Defines ImageSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const ImageSpanInstance: ImageSpanAttribute;

/**
 * Triggered when the image is successfully loaded and decoded.
 *
 * @param { ImageLoadResult } result - Object returned after the callback is triggered when an image is successfully
 *     loaded or decoded.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
type ImageCompleteCallback = (result: ImageLoadResult) => void;

/**
 * Describes the object returned after the callback is triggered when an image is successfully loaded or decoded.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageLoadResult {
  /**
   * Width of the image.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;
  /**
   * Height of the image.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
  /**
   * Width of the component.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  componentWidth: number;
  /**
   * Height of the component.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  componentHeight: number;
  /**
   * Status value of image loading success.
   *
   * **NOTE**
   *
   * When the returned status value is 0, it indicates image data load success. When the returned status value is 1, it
   * indicates image decoding success.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  loadingStatus: number;
  /**
   * Width of the image actually drawn.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * **NOTE**
   *
   * Valid only when loadingStatus returns 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentWidth: number;
  /**
   * Height of the image actually drawn.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * **NOTE**
   *
   * Valid only when loadingStatus returns 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentHeight: number;
  /**
   * X-axis offset of the actually drawn content relative to the component itself.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * **NOTE**
   *
   * Valid only when loadingStatus returns 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetX: number;
  /**
   * Y-axis offset of the actually drawn content relative to the component itself.
   *
   * Unit: [px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#basic-pixel-units)
   *
   * **NOTE**
   *
   * Valid only when loadingStatus returns 1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetY: number;
}