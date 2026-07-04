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
 * 本模块基于[Sendable](docroot://arkts-utils/arkts-sendable.md)对象，提供图片处理效果，包括通过属性创建PixelMap、读取图像像素数据、读取区域内的图片数据等。
 *
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableImage {

  /**
   * 表示图片尺寸。
   * 
   * 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Size extends lang.ISendable {
    /**
     * 输出图片的高，单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    height: number;

    /**
     * 输出图片的宽，单位：像素。
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
   * 表示区域信息。
   * 
   * 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Region extends lang.ISendable {
    /**
     * 区域大小。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    size: Size;

    /**
     * 区域横坐标。单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    x: number;

    /**
     * 区域纵坐标。单位：像素。
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
   * 通过传入的uri创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * @param { string } uri - 图片路径，当前仅支持应用沙箱路径。</br>当前支持格式有：.jpg .png .gif .bmp .webp .dng
   *     [SVG](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明) .ico。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * 通过传入文件描述符来创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * @param { number } fd - 文件描述符fd。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(fd: number): ImageSource;

  /**
   * 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用
   * [sendableImage.createPixelMap]{@link sendableImage.createPixelMap}这一类方法。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buf - 图像缓冲区数组。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * 通过图片大小、图片格式、容量创建ImageReceiver实例。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行
   * 完成，且后续不再使用该实例。
   *
   * @param { Size } size - 图像的默认大小。
   * @param { ImageFormat } format - 图像格式，取值为image.ImageFormat常量，目前仅支持 ImageFormat:JPEG。
   * @param { number } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageReceiver } 如果操作成功，则返回ImageReceiver实例。
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  function createImageReceiver(size: image.Size, format: image.ImageFormat, capacity: number): ImageReceiver;

  /**
   * ISendable是所有Sendable类型（除null和undefined）的父类型。自身没有任何必须的方法和属性。
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
     * ImageSource类，用于获取图片相关信息。在调用ImageSource的方法前，需要先通过
     * [sendableImage.createImageSource]{@link sendableImage.createImageSource}构建一个ImageSource实例。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行
     * 完成，且后续不再使用该实例。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    interface ImageSource {
    /**
     * 通过图片解码参数创建PixelMap对象。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，
     * 且后续不再使用该对象。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @returns { Promise<PixelMap> } Promise实例，用于异步返回创建结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    createPixelMap(options?: image.DecodingOptions): Promise<PixelMap>;

    /**
     * 释放ImageSource实例。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise实例，异步返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * 提供基本的图像操作，包括获取图像信息、读写图像数据。调用[readNextImage]{@link sendableImage.ImageReceiver.readNextImage}和
   * [readLatestImage]{@link sendableImage.ImageReceiver.readLatestImage}接口时会返回Image。继承自
   * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   * 
   * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再
   * 使用该实例。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  interface Image extends lang.ISendable {
    /**
     * 要裁剪的图像区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    clipRect: Region;

    /**
     * 图像大小。
     * 
     * 如果Image对象所存储的是相机预览流数据（YUV图像数据），那么获取到的size中的宽和高分别对应YUV图像的宽和高。
     * 
     * 如果Image对象所存储的是相机拍照流数据（JPEG图像数据），由于已是编码后的文件，size中的宽等于JPEG文件大小，高等于1。
     * 
     * Image对象所存储的数据是预览流还是拍照流，取决于应用将receiver中的surfaceId传给相机的是previewOutput还是captureOutput。
     * 
     * 相机预览与拍照最佳实践请参考[双路预览(ArkTS)](docroot://media/camera/camera-dual-channel-preview.md)与
     * [拍照实践(ArkTS)](docroot://media/camera/camera-shooting-case.md)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly size: Size;

    /**
     * 图像格式，参考
     * [OH_NativeBuffer_Format](docroot://reference/apis-arkgraphics2d/capi-buffer-common-h.md#oh_nativebuffer_format)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly format: number;

    /**
     * 图像时间戳。时间戳以纳秒为单位，通常是单调递增的。时间戳的具体含义和基准取决于图像的生产者，在相机预览/拍照场景，生产者就是相机。来自不同生产者的图像的时间戳可能有不同的含义和基准，因此可能无法进行比较。如果要获取某张照片的生
     * 成时间，可以通过
     * [getImageProperty]{@link @ohos.multimedia.image:image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
     * 接口读取相关的EXIF信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly timestamp: number;

    /**
     * 根据图像的组件类型从图像中获取组件缓存。使用Promise异步回调。getComponent是线程不安全的。
     *
     * @param { ComponentType } componentType - 图像的组件类型。
     * @returns { Promise<image.Component> } Promise实例，用于异步返回组件缓冲区。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    getComponent(componentType: image.ComponentType): Promise<image.Component>;

    /**
     * 释放当前图像。使用Promise异步回调。
     * 
     * 在接收另一个图像前必须先释放对应资源。
     * 
     * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用该方法及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } promise返回操作结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * 图像接收类，用于获取组件Surface ID，接收最新的图片和读取下一张图片，以及释放ImageReceiver实例。
   * 
   * 在调用以下方法前需要先创建ImageReceiver实例。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  interface ImageReceiver {
    /**
     * 图片大小。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly size: image.Size;

    /**
     * 同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly capacity: number;

    /**
     * 图像格式。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly format: image.ImageFormat;

    /**
     * 用于获取一个Surface ID供Camera或其他组件使用。使用promise异步回调。
     *
     * @returns { Promise<string> } 异步返回Surface ID。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * 从ImageReceiver读取最新的图片。使用promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link sendableImage.ImageReceiver.on}回调触发后调用，才能正常的接收到数据。且此接口返回的[Image]{@link sendableImage.Image}对象使
     * > 用完毕后需要调用[release]{@link sendableImage.PixelMap.release}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } 异步返回最新图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readLatestImage(): Promise<Image>;

    /**
     * 从ImageReceiver读取下一张图片。使用promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link sendableImage.ImageReceiver.on}回调触发后调用，才能正常的接收到数据。且此接口返回的[Image]{@link sendableImage.Image}对象使
     * > 用完毕后需要调用[release]{@link sendableImage.PixelMap.release}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } 异步返回下一张图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readNextImage(): Promise<Image>;

    /**
     * 接收图片时注册。使用callback异步回调。
     *
     * @param { 'imageArrival' } type - 注册事件的类型，固定为'imageArrival'，接收图片时触发。
     * @param { AsyncCallback<void> } callback - 注册的事件回调。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * 释放ImageReceiver实例。使用promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } 异步返回操作结果。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }
}

export default sendableImage;