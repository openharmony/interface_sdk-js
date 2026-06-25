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
 * As a child of the [Text]{@link text} and [ContainerSpan]{@link container_span} components, the **ImageSpan**
 * component is used to display inline images.
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
   * @param { ResourceStr | PixelMap } value - Image source. Both local and network images are supported.<br>When using
   *     an image referenced using a relative path, for example, **ImageSpan("common/test.jpg")**, the **ImageSpan**
   *     component cannot be called across bundles or modules. Therefore, you are advised to use **$r** to reference
   *     image resources that need to be used globally.<br>- The supported formats include PNG, JPG, BMP, SVG, GIF, and
   *     HEIF.<br>- Base64 strings are supported. The value format is data:image/[png|jpeg|bmp|webp|heif];base64,
   *     [base64 data], where *[base64 data]* is a Base64 string.<br>- Character string prefixed with file://data/
   *     storage, which is used to read image resources in the file folder in the application installation directory.
   *     Ensure that the application has the read permission to the files in the specified path.
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
 * The attributes inherit from [BaseSpan]{@link BaseSpan}. Among the universal attributes, [size]{@link common},
 * [background]{@link common}, and [border]{@link common} are supported.
 *
 * Among all the universal events, only the [click event]{@link common} is supported. The following events are also
 * supported.
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
   * Sets the alignment mode of the image relative to the line height.
   *
   * @param { ImageSpanAlignment } value - Alignment mode of the image relative to the line height.<br>Default value:
   *     **ImageSpanAlignment.BOTTOM**
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
   * @param { ColorFilter | DrawingColorFilter } filter - 1. Color filter of the image. The input parameter is a 4 x 5
   *     RGBA transformation matrix.<br>The first row of the matrix represents a vector value of R (red), the second row
   *     represents a vector value of G (green), the third row represents a vector value of B (blue), and the fourth row
   *     represents a vector value of A (alpha). The four rows represent different RGBA vector values.<br>If the matrix
   *     contains entries of 1 on the diagonal and entries of 0 in other places, the original color of the image is
   *     retained.<br> **Calculation rule:**<br>If the input filter matrix is as follows:<br>!
   *     [image-matrix-1](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_1.png)<br>And the pixel point is
   *     [R, G, B, A] with color values in the [0, 255] range,<br>Then the color after filtering is [R', G', B', A'].<br
   *     >![image-matrix-2](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_2.png)<br>2. The ColorFilter
   *     type of **@ohos.graphics.drawing** can be used as the input parameter.<br>**NOTE**<br>The DrawingColorfilter
   *     type can be used in atomic services. The SVG image source takes effect only for the stroke attribute.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  colorFilter(filter: ColorFilter | DrawingColorFilter): ImageSpanAttribute;

  /**
   * Sets the image scale type.
   *
   * @param { ImageFit } value - Image scale type.<br>Default value: **ImageFit.Cover**
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
   * Sets whether to enable
   * [enhanced SVG tag parsing](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md). When this
   * feature is enabled, SVG image rendering behavior changes accordingly.
   *
   * After the **ImageSpan** component is created, the value of this attribute cannot be dynamically changed.
   *
   * @param { Optional<boolean> } enable - Whether to enable
   *     [enhanced SVG tag parsing capabilities](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md).
   *     <br>**true**: Enable enhanced SVG parsing. **false**: Use original SVG parsing.<br>Default value: **false**.
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
   * Sets the placeholder image displayed during image loading.
   *
   * @param { PixelMap } value - Placeholder image displayed during image loading. The
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap} type is supported.<br>Default value: **null**
   * @returns { ImageSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  alt(value: PixelMap): ImageSpanAttribute;
}

/**
 * As a child of the [Text]{@link text} and [ContainerSpan]{@link container_span} components, the **ImageSpan**
 * component is used to display inline images.
 *
 * > **NOTE**
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
 * Defines the callback triggered when the image is successfully loaded or decoded.
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
   * Unit: [px]{@link common}
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
   * Unit: [px]{@link common}
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
   * Unit: [px]{@link common}
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
   * Unit: [px]{@link common}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  componentHeight: number;

  /**
   * Loading status of the image.
   *
   * **NOTE**
   *
   * If the return value is **0**, the image is successfully loaded. If the return value is **1**, the image is
   * successfully decoded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  loadingStatus: number;

  /**
   * Actual rendered width of the image.
   *
   * Unit: [px]{@link common}
   *
   * **NOTE**
   *
   * This parameter is valid only when the return value of **loadingStatus** is **1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentWidth: number;

  /**
   * Actual rendered height of the image.
   *
   * Unit: [px]{@link common}
   *
   * **NOTE**
   *
   * This parameter is valid only when the return value of **loadingStatus** is **1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentHeight: number;

  /**
   * Offset of the rendered content relative to the component on the x-axis.
   *
   * Unit: [px]{@link common}
   *
   * **NOTE**
   *
   * This parameter is valid only when the return value of **loadingStatus** is **1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetX: number;

  /**
   * Offset of the rendered content relative to the component on the y-axis
   *
   * Unit: [px]{@link common}
   *
   * **NOTE**
   *
   * This parameter is valid only when the return value of **loadingStatus** is **1**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetY: number;
}