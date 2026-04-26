/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ImageKit
 */

import { AsyncCallback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type image from './@ohos.multimedia.image';
import type resourceManager from './@ohos.resourceManager';
import type rpc from './@ohos.rpc';
import lang from '../arkts/@arkts.lang';
import collections from '../arkts/@arkts.collections';
/**
 * The module provides APIs for image processing based on the [Sendable](docroot://arkts-utils/arkts-sendable.md) 
 * object. You can use the APIs to create a PixelMap object with specified properties or read pixels of an image (or 
 * even in a region of an image).
 *
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableImage {

  /**
   * Describes the size of an image.
   * It inherits from [lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable).
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Size extends lang.ISendable {
    /**
     * Height of the output image, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    height: number;

    /**
     * Width of the output image, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    width: number;
  }

  /**
   * Describes the region information.
   * It inherits from [lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable).
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Region extends lang.ISendable {
    /**
     * Region size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    size: Size;

    /**
     * X coordinate, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    x: number;

    /**
     * Y coordinate, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    y: number;
  }

  /**
   * Creates an ImageSource instance based on a given URI.
   *
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { string } uri - Image path. Currently, only the application sandbox path is supported.
   *     <br>The following formats are supported: .jpg, .png, .gif, .bmp, .webp, .dng
   *     [SVG](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg-tags), and ico.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImageSource instance based on a given file descriptor.
   *
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { number } fd - File descriptor.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(fd: number): ImageSource;

  /**
   * Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the 
   * pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call 
   * [sendableImage.createPixelMap]{@link sendableImage.createPixelMap}.
   *
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { ArrayBuffer } buf - Array of image buffers.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageReceiver instance based on the specified image size, format, and capacity.
   *
   * Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { Size } size - Default size of the image.
   * @param { ImageFormat } format - Image format, which is a constant of **image.ImageFormat**. (Currently, only
   *     **ImageFormat:JPEG** is supported.)
   * @param { number } capacity - Maximum number of images that can be accessed at the same time. This parameter is used
   *     only as an expected value. The actual capacity is determined by the device hardware.
   * @returns { ImageReceiver } ImageReceiver instance.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  function createImageReceiver(size: image.Size, format: image.ImageFormat, capacity: number): ImageReceiver;

  /**
   * ISendable is the parent type of all sendable types except null and undefined. It does not have any necessary 
   * methods or properties.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;

  /**
   * Create PixelMap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for PixelMap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function createPixelMap(colors: ArrayBuffer, options: image.InitializationOptions): Promise<PixelMap>;

  /**
   * Create PixelMap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for PixelMap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function createPixelMapSync(colors: ArrayBuffer, options: image.InitializationOptions): PixelMap;

  /**
   * Creates a PixelMap object based on MessageSequence parameter.
   *
   * @param { rpc.MessageSequence } sequence - rpc.MessageSequence parameter.
   * @returns { PixelMap } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980096 - Operation failed.
   * @throws { BusinessError } 62980097 - IPC error.
   * @throws { BusinessError } 62980115 - Invalid input parameter.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980177 - Abnormal API environment.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @throws { BusinessError } 62980179 - Abnormal buffer size.
   * @throws { BusinessError } 62980180 - FD mapping failed.
   * @throws { BusinessError } 62980246 - Failed to read the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap;

  /**
   * Creates a PixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @param { Region } region - The region to surface.
   * @returns { Promise<PixelMap> } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980115 - If the image parameter invalid.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function createPixelMapFromSurface(surfaceId: string, region: image.Region): Promise<PixelMap>;

  /**
   * Creates a sendable image PixelMap from image PixelMap.
   *
   * @param { image.PixelMap } pixelmap - the src pixelmap.
   * @returns { PixelMap } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - If the image parameter invalid. Possible causes:
   * 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function convertFromPixelMap(pixelmap: image.PixelMap): PixelMap;

  /**
   * Creates a image PixelMap from sendable image PixelMap.
   *
   * @param { PixelMap } pixelmap - the src pixelmap.
   * @returns { image.PixelMap } Returns the instance if the operation is successful.
   * Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - If the image parameter invalid. Possible causes:
   * 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function convertToPixelMap(pixelmap: PixelMap): image.PixelMap;

  /**
   * Sendable PixelMap instance.
   *
   * @typedef PixelMap
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PixelMap extends ISendable {
    /**
     * Whether the image pixelmap can be edited.
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly isEditable: boolean;

    /**
     * Reads image pixelmap data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixelmap data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads image pixelmap data and writes the data to an ArrayBuffer.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixelmap data will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * Reads image pixelmap data in an area. This method uses a promise to return the data read.
     *
     * @param { PositionArea } area Area from which the image pixelmap data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixels(area: image.PositionArea): Promise<void>;

    /**
     * Reads image pixelmap data in an area.
     *
     * @param { PositionArea } area Area from which the image pixelmap data will be read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsSync(area: image.PositionArea): void;

    /**
     * Writes image pixelmap data to the specified area. This method uses a promise to return
     * the operation result.
     *
     * @param { PositionArea } area Area to which the image pixelmap data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writePixels(area: image.PositionArea): Promise<void>;

    /**
     * Writes image pixelmap data to the specified area.
     *
     * @param { PositionArea } area Area to which the image pixelmap data will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writePixelsSync(area: image.PositionArea): void;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object. This method
     * uses a promise to return the result.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * Reads image data in an ArrayBuffer and writes the data to a PixelMap object.
     *
     * @param { ArrayBuffer } src A buffer from which the image data will be read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writeBufferToPixelsSync(src: ArrayBuffer): void;

    /**
     * Obtains pixelmap information about this image. This method uses a promise to return the information.
     *
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image pixelmap information.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getImageInfo(): Promise<image.ImageInfo>;

    /**
     * Get image information from image source.
     *
     * @returns { ImageInfo } the image information.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getImageInfoSync(): image.ImageInfo;

    /**
     * Obtains the number of bytes in each line of the image pixelmap.
     *
     * @returns { number } Number of bytes in each line.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getBytesNumberPerRow(): number;

    /**
     * Obtains the total number of bytes of the image pixelmap.
     *
     * @returns { number } Total number of bytes.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getPixelBytesNumber(): number;

    /**
     * Obtains the density of the image pixelmap.
     *
     * @returns { number } The number of density, in ppi.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getDensity(): number;

    /**
     * Set the transparent rate of pixelmap. This method uses a promise to return the result.
     *
     * @param { number } rate The value of transparent rate.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    opacity(rate: number): Promise<void>;

    /**
     * Set the transparent rate of pixelmap.
     *
     * @param { number } rate The value of transparent rate.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    opacitySync(rate: number): void;

    /**
     * Obtains new pixelmap with alpha information. This method uses a promise to return the information.
     *
     * @returns { Promise<PixelMap> } A Promise instance used to return the new image pixelmap.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAlphaPixelmap(): Promise<PixelMap>;

    /**
     * Obtains new pixelmap with alpha information.
     *
     * @returns { PixelMap } return the new image pixelmap. 
     * If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAlphaPixelmapSync(): PixelMap;

    /**
     * Image zoom in width and height. This method uses a promise to return the result.
     *
     * @param { number } x The zoom value of width.
     * @param { number } y The zoom value of height.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    scale(x: number, y: number): Promise<void>;

    /**
     * Image zoom in width and height.
     *
     * @param { number } x The zoom value of width.
     * @param { number } y The zoom value of height.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    scaleSync(x: number, y: number): void;

    /**
     * Image position transformation. This method uses a promise to return the result.
     *
     * @param { number } x The position value of width, in px.
     * @param { number } y The position value of height, in px.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    translate(x: number, y: number): Promise<void>;

    /**
     * Image position transformation.
     *
     * @param { number } x The position value of width, in px.
     * @param { number } y The position value of height, in px.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    translateSync(x: number, y: number): void;

    /**
     * Image rotation. This method uses a promise to return the result.
     *
     * @param { number } angle The rotation angle, in degrees.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    rotate(angle: number): Promise<void>;

    /**
     * Image rotation.
     *
     * @param { number } angle The rotation angle, in degrees.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    rotateSync(angle: number): void;

    /**
     * Image flipping. This method uses a promise to return the result.
     *
     * @param { boolean } horizontal Is flip in horizontal.
     * @param { boolean } vertical Is flip in vertical.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    flip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * Image flipping.
     *
     * @param { boolean } horizontal Is flip in horizontal.
     * @param { boolean } vertical Is flip in vertical.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    flipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * Crop the image. This method uses a promise to return the result.
     *
     * @param { Region } region The region to crop.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    crop(region: image.Region): Promise<void>;

    /**
     * Crop the image.
     *
     * @param { Region } region The region to crop.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    cropSync(region: image.Region): void;

    /**
     * Get color space of pixelmap.
     *
     * @returns { colorSpaceManager.ColorSpaceManager } If the operation fails, an error message is returned.
     * @throws { BusinessError } 62980101 - If the image data abnormal.
     * @throws { BusinessError } 62980103 - If the image data unsupport.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform  
     * @since 12 dynamiconly
     */
    getColorSpace(): colorSpaceManager.ColorSpaceManager;

    /**
     * Set color space of pixelmap.
     * 
     * This method is only used to set the colorspace property of PixelMap,
     * while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for pixelmap.
     * @throws { BusinessError } 62980111 - If the operation invalid.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform 
     * @since 12 dynamiconly
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void;

    /**
     * Is it stride Alignment
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly isStrideAlignment: boolean;

    /**
     * Apply color space of pixelmap, the pixels will be changed by input color space.
     * This method uses a promise to return the result.
     * 
     * This method is used to change color space of PixelMap.
     * Pixel data will be changed by calling this method.
     * If you want to set the colorspace property of PixelMap only,
     * use method {@Link #setColorSpace(colorSpaceManager.ColorSpaceManager)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - The color space for pixelmap.
     * @returns { Promise<void> } A Promise instance used to return the operation result. 
     * If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>;

    /**
     * Releases this PixelMap object. This method uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the instance release result. 
     * If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    release(): Promise<void>;

    /**
     * Marshalling PixelMap and write into MessageSequence.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * Creates a PixelMap object based on MessageSequence parameter.
     *
     * @param { rpc.MessageSequence } sequence rpc.MessageSequence parameter.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @throws { BusinessError } 62980096 - The operation failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    unmarshalling(sequence: rpc.MessageSequence): Promise<PixelMap>;
  }

  /**
   * Provides APIs to obtain image information. Before calling any API in ImageSource, you must use 
   * [sendableImage.createImageSource]{@link sendableImage.createImageSource(uri: string)} to create an ImageSource 
   * instance.
   *
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
    interface ImageSource {
    /**
     * Creates a PixelMap object based on decoding options. This API uses a promise to return the result.
     *
     * Images occupy a large amount of memory. When you finish using a PixelMap instance, call 
     * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, 
     * ensure that all asynchronous operations associated with the instance have finished and the instance is no longer 
     * needed.
     *
     * @param { DecodingOptions } options - Decoding options.
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    createPixelMap(options?: image.DecodingOptions): Promise<PixelMap>;

    /**
     * Releases this ImageSource instance. This API uses a promise to return the result.
     *
     * Images occupy a large amount of memory. When you finish using an ImageSource instance, call this API to free the 
     * memory promptly.
     *
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * Provides APIs for basic image operations, including obtaining image information and reading and writing image data.
   *
   * An Image instance is returned when [readNextImage]{@link sendableImage.ImageReceiver.readNextImage} and 
   * [readLatestImage]{@link sendableImage.ImageReceiver.readLatestImage} are called. This class inherits from 
   * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable).
   *
   * Images occupy a large amount of memory. When you finish using an Image instance, call 
   * [release]{@link sendableImage.PixelMap.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  interface Image extends lang.ISendable {
    /**
     * Image area to be cropped.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    clipRect: Region;

    /**
     * Image size.
     *
     * If the Image object stores camera preview stream data (YUV image data), the width and height in **size**
     * reflect the dimensions of the YUV image.
     *
     * If the Image object stores camera capture stream data (JPEG image data), given that it is an encoded file,
     * the width in **size** is the size of the JPEG file, while the height is set to **1**.
     *
     * The type of data stored in the Image object depends on whether the application passes the surface ID in the
     * receiver to a previewOutput or captureOutput object of the camera.
     *
     * For details about the best practices of camera preview and photo capture, see
     * [Dual-Channel Preview (ArkTS)](docroot://media/camera/camera-dual-channel-preview.md) and
     * [Photo Capture Sample (ArkTS)](docroot://media/camera/camera-shooting-case.md).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly size: Size;

    /**
     * Image format. For details, see 
     * [OH_NativeBuffer_Format](docroot://reference/apis-arkgraphics2d/c-apis/capi-buffer-common-h.md#oh_nativebuffer_format).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly format: number;

    /**
     * Image timestamp. Timestamps, measured in nanoseconds, are usually monotonically increasing. The specific meaning 
     * and baseline of these timestamps are determined by the image producer, which is the camera in the camera preview 
     * and photo scenarios. As a result, images from different producers may carry timestamps with distinct meanings and
     * baselines, making direct comparison between them infeasible. To obtain the generation time of a photo, you can 
     * use 
     * [getImageProperty]{@link @ohos.multimedia.image:image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
     * to read the related Exif information.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly timestamp: number;

    /**
     * Obtains the component buffer from the Image instance based on the color component type. This API uses a promise 
     * to return the result. The thread that runs **getComponent** is insecure.
     *
     * @param { ComponentType } componentType - Color component type of the image.
     * @returns { Promise<image.Component> } Promise used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    getComponent(componentType: image.ComponentType): Promise<image.Component>;

    /**
     * Releases this Image instance. This API uses a promise to return the result.
     *
     * The corresponding resources must be released before another image arrives.
     *
     * Images occupy a large amount of memory. When you finish using an Image instance, call this API to free the memory
     * promptly.
     *
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * Image receiver class. You can use it to obtain the surface ID of a component, read the latest image and the next 
   * image, and release **ImageReceiver** instances.
   *
   * Before calling any APIs in ImageReceiver, you must create an ImageReceiver instance.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  interface ImageReceiver {
    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly size: image.Size;

    /**
     * Maximum number of images that can be accessed at the same time. This parameter is used only as an expected value.
     *
     * The actual capacity is determined by the device hardware.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly capacity: number;

    /**
     * Image format.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly format: image.ImageFormat;

    /**
     * Obtains a surface ID for the camera or other components. This API uses a promise to return the result.
     *
     * @returns { Promise<string> } Asynchronously returns the surface ID.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * Reads the latest image from the ImageReceiver instance. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called to receive data only after the [on]{@link sendableImage.ImageReceiver.on} callback is 
     * > triggered. When the [Image]{@link sendableImage.ImageSource} object returned by this API is no longer needed, 
     * > call [release]{@link sendableImage.PixelMap.release} to release the object. New data can be received only after
     * > the release.
     *
     * @returns { Promise<Image> } Promise used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readLatestImage(): Promise<Image>;

    /**
     * Reads the next image from the ImageReceiver instance. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called to receive data only after the [on]{@link sendableImage.ImageReceiver.on} callback is 
     * > triggered. When the [Image]{@link sendableImage.ImageSource} object returned by this API is no longer needed, 
     * > call [release]{@link sendableImage.PixelMap.release} to release the object. New data can be received only after
     * > the release.
     *
     * @returns { Promise<Image> } Promise used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readNextImage(): Promise<Image>;

    /**
     * Listens for image arrival events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'imageArrival' } type - Type of event to listen for. The value is fixed at **'imageArrival'**, which is
     *     triggered when an image is received.
     * @param { AsyncCallback<void> } callback - Callback invoked for the event.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Releases this ImageReceiver instance. This API uses a promise to return the result.
     * Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call this API to free 
     * the memory promptly.
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }
}

export default sendableImage;