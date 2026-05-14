/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
import type resourceManager from './@ohos.resourceManager';
import type rpc from './@ohos.rpc';

/**
 * # SVG Tags
 * 
 * The SVG tags are supported since API version 10. The used version is (SVG) 1.1, and the width and height of the SVG 
 * tag must be set. An XML declaration can be added to an SVG file and start with **<?xml**. The following tags are 
 * supported:
 * 
 * - a
 * - circle
 * - clipPath
 * - defs
 * - ellipse
 * - feBlend
 * - feColorMatrix
 * - feComposite
 * - feDiffuseLighting
 * - feDisplacementMap
 * - feDistantLight
 * - feFlood
 * - feGaussianBlur
 * - feImage
 * - feMorphology
 * - feOffset
 * - fePointLight
 * - feSpecularLighting
 * - feSpotLight
 * - feTurbulence
 * - filter
 * - g
 * - image
 * - line
 * - linearGradient
 * - mask
 * - path
 * - pattern
 * - polygon
 * - polyline
 * - radialGradient
 * - rect
 * - stop
 * - svg
 * - text
 * - textPath
 * - tspan
 * - use
 */
/**
 * The module provides capabilities for image decoding, encoding, editing, metadata processing, and image receiving.
 * This module contains the following classes:
 * 
 * - [ImageSource]{@link @ohos.multimedia.image:image.ImageSource}: provides the capabilities of obtaining 
 * [image information]{@link @ohos.multimedia.image:image.ImageInfo}, decoding images to PixelMaps or Pictures, and 
 * reading and modifying [image properties]{@link @ohos.multimedia.image:image.PropertyKey}. 
 * [Supported image formats for decoding]{@link @ohos.multimedia.image: image.ImageSource#supportedFormats}
 * include png, jpeg, bmp, gif, webp, dng, and heic<sup>12+</sup>.
 * - [ImagePacker]{@link @ohos.multimedia.image:image.ImagePacker}: provides the capability of encoding images into
 * compressed data streams or files. Encoding requires the ImageSource, PixelMap, or Picture of an image as the input. 
 * [Supported image formats for encoding]{@link @ohos.multimedia.image: image.ImagePacker#supportedFormats}
 * include jpeg, webp, png, heic<sup>12+</sup>, and gif<sup>18+</sup>.
 * - [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}: contains pixel data and 
 * [image information]{@link @ohos.multimedia.image:image.ImageInfo}. It can be used for reading/writing pixel data and 
 * performing operations such as cropping, scaling, translating, rotating, and mirroring. It can also be directly passed
 * to the [Image component]{@link Image} for display. Additionally, it provides APIs for 
 * obtaining and setting the color gamut and HDR metadata of images.
 * - [Picture]{@link @ohos.multimedia.image:image.Picture}: a multi-picture object composed of a main picture,
 * auxiliary pictures, and metadata. The main picture contains the primary image information; auxiliary pictures store
 * additional information related to the main picture; metadata stores other information related to the image.
 * Picture provides methods for obtaining the main picture, compositing HDR images, obtaining and setting auxiliary
 * pictures, and obtaining and setting metadata.
 * - [AuxiliaryPicture]{@link @ohos.multimedia.image:image.AuxiliaryPicture}: used to display special information
 * alongside the main picture, enriching the overall content of the image. The supported types of auxiliary pictures
 * can be found in [AuxiliaryPictureType]{@link @ohos.multimedia.image:image.AuxiliaryPictureType}.
 * - [Metadata]{@link @ohos.multimedia.image:image.Metadata}: used to store image metadata. The supported metadata types
 * can be found in [MetadataType]{@link @ohos.multimedia.image:image.MetadataType}. It includes Exif metadata and
 * watermark cropping metadata, both stored in Key-Value pairs. The keys for Exif metadata can be found in
 * [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}, and the keys for watermark cropping metadata can be
 * found in [FragmentPropertyKey]{@link @ohos.multimedia.image:image.FragmentMapPropertyKey}.
 * - [ImageReceiver]{@link @ohos.multimedia.image:image.ImageReceiver}: acts as a consumer of images, used for receiving
 * and reading images from a surface.
 * - [ImageCreator]{@link @ohos.multimedia.image:image.ImageCreator}: acts as a producer of images, used for writing
 * images into a surface.
 * - [Image]{@link @ohos.multimedia.image:image.Image}: used by ImageReceiver and ImageCreator for transferring image
 * objects, with the actual content determined by the producer. For example, the Image object provided by
 * a camera preview stream contains YUV data, whereas the Image object provided by a camera photo contains a JPEG file.
 *
 * @syscap SystemCapability.Multimedia.Image.Core [since 11]
 * @crossplatform [since 11]
 * @form [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace image {
  /**
   * Enumerates the pixel formats of images.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum PixelMapFormat {
    /**
     * Unknown format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：R(8bits), G(8bits),
     * B(8bits), A(8bits) and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    ARGB_8888 = 1,

    /**
     * The color information consists of three components: R (Red), G (Green), and B (Blue), which occupies five bits, 
     * six bits, and five bits, respectively. The total length is 16 bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    RGB_565 = 2,

    /**
     * The color information consists of four components: R (Red), G (Green), B (Blue), and alpha. Each component 
     * occupies 8 bits, and the total length is 32 bits. It corresponds to 
     * [CAMERA_FORMAT_RGBA_8888 in CameraFormat]{@link @ohos.multimedia.camera:camera.CameraFormat}.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    RGBA_8888 = 3,

    /**
     * The color information consists of four components: B (Blue), G (Green), R (Red), and alpha. Each component 
     * occupies 8 bits, and the total length is 32 bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    BGRA_8888 = 4,

    /**
     * The color information consists of three components: R (Red), G (Green), and B (Blue). Each component occupies 8 
     * bits, and the total length is 24 bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RGB_888 = 5,

    /**
     * The color information consists of only the alpha component, which occupies eight bits. Each row of pixels is 
     * composed of one or more pixels, and the data for each row is aligned to 4 bytes. If the byte count of a row is 
     * not a multiple of 4, blank bytes are padded at the end to ensure proper alignment.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ALPHA_8 = 6,

    /**
     * The color information consists of four components: R (Red), G (Green), B (Blue), and alpha. Each component
     * occupies 16 bits, and the total length is 64 bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    RGBA_F16 = 7,

    /**
     * YVU pixel arrangement, where the V component precedes the U component. The color information consists of the 
     * luminance component Y and the interleaved chrominance components V and U. The Y component occupies 8 bits, and 
     * the UV components occupy 4 bits on average due to 4:2:0 sampling. The total length is 12 bits on average. It 
     * corresponds to [CAMERA_FORMAT_YUV_420_SP in CameraFormat]{@link @ohos.multimedia.camera:camera.CameraFormat}.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NV21 = 8,

    /**
     * YUV pixel arrangement, where the U component precedes the V component. The color information consists of the 
     * luminance component Y and the interleaved chrominance components U and V. The Y component occupies 8 bits, and 
     * the UV components occupy 4 bits on average due to 4:2:0 sampling. The total length is 12 bits on average.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    NV12 = 9,

    /**
     * The color information consists of four components: R (Red), G (Green), B (Blue), and alpha. R, G, and B each 
     * occupy 10 bits, and alpha occupies 2 bits. The total length is 32 bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    RGBA_1010102 = 10,

    /**
     * The color information consists of the luminance component Y and the chrominance components Cb and Cr. Each 
     * component has effective 10 bits. In storage, the Y plane uses 16 bits per pixel (10 of which are effective). The 
     * UV plane is interleaved, with every four pixels taking up 32 bits of data (each chrominance component having 10 
     * effective bits), resulting in an average of 15 effective bits overall. It corresponds to 
     * [CAMERA_FORMAT_YCBCR_P010 in CameraFormat]{@link @ohos.multimedia.camera:camera.CameraFormat}.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_P010 = 11,

    /**
     * The color information consists of the luminance component Y and the chrominance components Cr and Cb. Each 
     * component has effective 10 bits. In storage, the Y plane uses 16 bits per pixel (10 of which are effective). The 
     * UV plane is interleaved, with every four pixels taking up 32 bits of data (each chrominance component having 10 
     * effective bits), resulting in an average of 15 effective bits overall. It corresponds to 
     * [CAMERA_FORMAT_YCRCB_P010 in CameraFormat]{@link @ohos.multimedia.camera:camera.CameraFormat}.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    YCRCB_P010 = 12,

    /**
    * Indicates that each pixel is stored on 8 bits, a YUV planar format comprised of Y plane only.
    *
    * @syscap SystemCapability.Multimedia.Image.Core
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    Y8 = 14,

    /**
     * Indicates that each pixel is stored on 8 bits, without 4-byte stride alignment.
     * Each pixel contains 1 component: ALPHA(8bits) and is stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @since 26.0.0 dynamic&static
     */
    ALPHA_U8 = 15,

    /**
     * Indicates that each pixel is stored on 16 bits.
     * Each pixel contains 1 component: ALPHA(16bits) and is stored from the higher-order to the lower-order bits in
     * FP16.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @since 26.0.0 dynamic&static
     */
    ALPHA_F16 = 16,

    /**
     * The storage format is ASTC 4x4 format, and the memory usage is only 1/4 of RGBA_8888.
     * This format is only used for direct display scenes and does not support pixel access or post-
     * processing editing.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    ASTC_4x4 = 102
  }

  /**
   * Enumerates the image quality levels.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum ResolutionQuality {
    /**
     * Low image quality, requiring a short decoding time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * Medium image quality, requiring a medium decoding time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIUM = 2,

    /**
     * High image quality, requiring a long decoding time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH = 3
  }

  /**
   * Describes the size of an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * Height
     *
     * Unit:px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * Width
     *
     * Unit:px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    width: int;
  }

  /**
   * Enumerates the types of Exchangeable Image File Format (Exif) data of an image.
   * 
   * - The key in the format example is **image.PropertyKey.*XXX*** (where *XXX* is the name of an enumeration name, for
   * example, **image.PropertyKey.NEW_SUBFILE_TYPE**).
   * - The format example is used only to show how to modify values and read results. For details about how to use them,
   * see 
   * [modifyImageProperty]{@link @ohos.multimedia.image:image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)}
   * (to modify a single Exif field), 
   * [modifyImageProperties]{@link @ohos.multimedia.image:image.ImageSource.modifyImageProperties(records: Record<PropertyKey, string|null>)}
   * (to modify multiple Exif fields), 
   * [getImageProperty]{@link @ohos.multimedia.image:image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
   * (to read a single Exif field), and 
   * [getImageProperties]{@link @ohos.multimedia.image:image.ImageSource.getImageProperties(key: Array<PropertyKey>)} (
   * to read multiple Exif fields).
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  enum PropertyKey {
    /**
     * Number of bits per sample. For example, for RGB, which has three components, the format is 8,8,8.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    BITS_PER_SAMPLE = 'BitsPerSample',

    /**
     * Image orientation.
     * 
     * 1: **Top-left**: The image is not rotated.
     * 
     * 2: **Top-right**: The image is flipped horizontally.
     * 
     * 3: **Bottom-right**: The image is rotated by 180°.
     * 
     * 4: **Bottom-left**: The image is flipped vertically.
     * 
     * 5: **Left-top**: The image is flipped horizontally and then rotated clockwise by 270°.
     * 
     * 6: **Right-top**: The image is rotated clockwise by 90°.
     * 
     * 7: **Right-bottom**: The image is vertically flipped and then rotated clockwise by 90°.
     * 
     * 8: **Left-bottom**: The image is rotated clockwise by 270°.
     * 
     * If an undefined value x is read, **Unknown Value x** is returned. The value of the property obtained is returned 
     * as a string. When modifying the property, you can specify the property either in the form of a number or a 
     * string.
     * 
     * For details about the image rotation angle, see 
     * [Obtaining the Rotation Angle of an Image](docroot://media/image/image-faqs/image-rotate-faq.md).
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    ORIENTATION = 'Orientation',

    /**
     * Image length.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    IMAGE_LENGTH = 'ImageLength',

    /**
     * Image width.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    IMAGE_WIDTH = 'ImageWidth',

    /**
     * Image latitude. The value must be in the format of degree,minute,second, for example, 39,54,7.542.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LATITUDE = 'GPSLatitude',

    /**
     * Image longitude. The value must be in the format of degree,minute,second, for example, 116,19,42.16.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LONGITUDE = 'GPSLongitude',

    /**
     * Latitude reference (Northern or Southern Hemisphere) of the image capture location.
     * 
     * 78: "North".
     * 
     * 83: "South".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LATITUDE_REF = 'GPSLatitudeRef',

    /**
     * Longitude reference (Eastern or Western Hemisphere) of the image capture location.
     * 
     * 69: "East".
     * 
     * 87: "West".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LONGITUDE_REF = 'GPSLongitudeRef',

    /**
     * Time when the original image data was generated, for example, 2022:09:06 15:48:00.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    DATE_TIME_ORIGINAL = 'DateTimeOriginal',

    /**
     * Exposure time, for example, 1/33 seconds.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    EXPOSURE_TIME = 'ExposureTime',

    /**
     * Type of the scene, for example, portrait, scenery, motion, and night.
     * 
     * 1: "Directly photographed", indicating that the image is directly captured by the image sensor.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    SCENE_TYPE = 'SceneType',

    /**
     * ISO sensitivity or ISO speed, for example, 400.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    ISO_SPEED_RATINGS = 'ISOSpeedRatings',

    /**
     * F number, for example, f/1.8.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    F_NUMBER = 'FNumber',

    /**
     * Date and time of image creation.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TIME = 'DateTime',

    /**
     * GPS timestamp.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    GPS_TIME_STAMP = 'GPSTimeStamp',
 
    /**
     * GPS date stamp.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    GPS_DATE_STAMP = 'GPSDateStamp',
 
    /**
     * Image description.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGE_DESCRIPTION = 'ImageDescription',
 
    /**
     * Manufacturer.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAKE = 'Make',
 
    /**
     * Device model.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MODEL = 'Model',
 
    /**
     * Photographing mode.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PHOTO_MODE = 'PhotoMode',
 
    /**
     * Sensitivity type.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SENSITIVITY_TYPE = 'SensitivityType',
 
    /**
     * Standard output sensitivity.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    STANDARD_OUTPUT_SENSITIVITY = 'StandardOutputSensitivity',
 
    /**
     * Recommended exposure index.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    RECOMMENDED_EXPOSURE_INDEX = 'RecommendedExposureIndex',
 
    /**
     * ISO speed.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    ISO_SPEED = 'ISOSpeedRatings',
 
    /**
     * Lens aperture. An example in the correct format is 4/1.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    APERTURE_VALUE = 'ApertureValue',
 
    /**
     * Exposure bias.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_BIAS_VALUE = 'ExposureBiasValue',
 
    /**
     * Metering mode.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    METERING_MODE = 'MeteringMode',
 
    /**
     * Light source. An example value is **Fluorescent**.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    LIGHT_SOURCE = 'LightSource',
 
    /**
     * Flash status.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH = 'Flash',
 
    /**
     * Focal length of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FOCAL_LENGTH = 'FocalLength',
 
    /**
     * User comments.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    USER_COMMENT = 'UserComment',
 
    /**
     * Pixel X dimension.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PIXEL_X_DIMENSION = 'PixelXDimension',
 
    /**
     * Pixel Y dimension.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PIXEL_Y_DIMENSION = 'PixelYDimension',
 
    /**
     * White balance.
     * 
     * 0: "Auto white balance."
     * 
     * 1: "Manual white balance."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    WHITE_BALANCE = 'WhiteBalance',
 
    /**
     * Focal length in 35mm film.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FOCAL_LENGTH_IN_35_MM_FILM = 'FocalLengthIn35mmFilm',
 
    /**
     * Capture mode.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    CAPTURE_MODE = 'HwMnoteCaptureMode',
 
    /**
     * Physical aperture.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PHYSICAL_APERTURE = 'HwMnotePhysicalAperture',

    /**
     * Roll angle.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ROLL_ANGLE = 'HwMnoteRollAngle',

    /**
     * Pitch angle.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    PITCH_ANGLE = 'HwMnotePitchAngle',

    /**
     * Photographing scene: food.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_FOOD_CONF = 'HwMnoteSceneFoodConf',

    /**
     * Photographing scene: stage.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_STAGE_CONF = 'HwMnoteSceneStageConf',

    /**
     * Photographing scene: blue sky.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_BLUE_SKY_CONF = 'HwMnoteSceneBlueSkyConf',

    /**
     * Photographing scene: green plant.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_GREEN_PLANT_CONF = 'HwMnoteSceneGreenPlantConf',

    /**
     * Photographing scene: beach.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_BEACH_CONF = 'HwMnoteSceneBeachConf',

    /**
     * Photographing scene: snow.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_SNOW_CONF = 'HwMnoteSceneSnowConf',

    /**
     * Photographing scene: sunset.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_SUNSET_CONF = 'HwMnoteSceneSunsetConf',

    /**
     * Photographing scene: flowers.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_FLOWERS_CONF = 'HwMnoteSceneFlowersConf',

    /**
     * Photographing scene: night.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_NIGHT_CONF = 'HwMnoteSceneNightConf',

    /**
     * Photographing scene: text.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_TEXT_CONF = 'HwMnoteSceneTextConf',

    /**
     * Number of faces.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    FACE_COUNT = 'HwMnoteFaceCount',

    /**
     * Focus mode.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    FOCUS_MODE = 'HwMnoteFocusMode',
  
    /**
     * Compression scheme used on the image data.
     * 
     * 1: "Uncompressed".
     * 
     * 2: "CCITT RLE".
     * 
     * 3: "T4/Group 3 Fax".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPRESSION = 'Compression',

    /**
     * Color space of the image data, for example, RGB or YCbCr.
     * 
     * 0: "Reversed mono".
     * 
     * 1: "Normal mono".
     * 
     * 2: "RGB".
     * 
     * 3: "Palette".
     * 
     * 5: "CMYK".
     * 
     * 6: "YCbCr".
     * 
     * 8: "CieLAB".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTOMETRIC_INTERPRETATION = 'PhotometricInterpretation',

    /**
     * Byte offset of each strip.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STRIP_OFFSETS = 'StripOffsets',

    /**
     * Number of components per pixel. The value is **3** for RGB and YCbCr images. The **JPEG** key is used in JPEG 
     * compressed data.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLES_PER_PIXEL = 'SamplesPerPixel',

    /**
     * Number of rows per strip.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ROWS_PER_STRIP = 'RowsPerStrip',

    /**
     * Number of bytes in each strip after compression.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STRIP_BYTE_COUNTS = 'StripByteCounts',

    /**
     * Number of pixels per ResolutionUnit in the image width (X) direction.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    X_RESOLUTION = 'XResolution',

    /**
     * Number of pixels per ResolutionUnit in the image height (Y) direction.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    Y_RESOLUTION = 'YResolution',

    /**
     * Storage format of components of each pixel, which can be chunky or planar.
     * 
     * 1: "Chunky format": chunky format.
     * 
     * 2: "Planar format": planar format.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PLANAR_CONFIGURATION = 'PlanarConfiguration',

    /**
     * Unit of measurement for XResolution and YResolution, in inches or centimeters.
     * 
     * 2: "Inch": measured in inches.
     * 
     * 3: "Centimeter": measured in centimeters.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RESOLUTION_UNIT = 'ResolutionUnit',

    /**
     * Transfer function for the image, which is usually used for color correction.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSFER_FUNCTION = 'TransferFunction',

    /**
     * Name and version number of the software used to create the image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOFTWARE = 'Software',

    /**
     * Person who created the image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ARTIST = 'Artist',

    /**
     * Chromaticity coordinates of the white point, the reference for "white", in the color space of the image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    WHITE_POINT = 'WhitePoint',

    /**
     * Chromaticities of the primaries of the image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PRIMARY_CHROMATICITIES = 'PrimaryChromaticities',

    /**
     * Coefficients for the conversion matrix that transforms image data from RGB to YCbCr.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_COEFFICIENTS = 'YCbCrCoefficients',

    /**
     * Subsampling factors used for the chrominance components of a YCbCr image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_SUB_SAMPLING = 'YCbCrSubSampling',

    /**
     * Positioning of subsampled chrominance components relative to luminance samples.
     * 
     * 1: "Centered": Cb/Cr chrominance components are centered relative to the luminance pixels (common practice).
     * 
     * 2: "Co-sited": Cb/Cr and Y sampling points align at the top-left corner.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_POSITIONING = 'YCbCrPositioning',

    /**
     * Reference values for black and white points.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    REFERENCE_BLACK_WHITE = 'ReferenceBlackWhite',

    /**
     * Copyright notice of the image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COPYRIGHT = 'Copyright',

    /**
     * Offset of the SOI marker of a JPEG interchange format bitstream.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    JPEG_INTERCHANGE_FORMAT = 'JPEGInterchangeFormat',

    /**
     * Number of bytes of the JPEG stream.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    JPEG_INTERCHANGE_FORMAT_LENGTH = 'JPEGInterchangeFormatLength',

    /**
     * Class of the program used by the camera to set exposure when the image was captured.
     * 
     * 0: "Not defined".
     * 
     * 1: "Manual".
     * 
     * 2: "Normal program".
     * 
     * 3: "Aperture priority".
     * 
     * 4: "Shutter priority".
     * 
     * 5: "Creative program (biased toward depth of field)".
     * 
     * 6: "Creative program (biased toward fast shutter speed)".
     * 
     * 7: "Portrait mode (for closeup photos with the background out of focus)".
     * 
     * 8: "Landscape mode (for landscape photos with the background in focus)".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_PROGRAM = 'ExposureProgram',

    /**
     * Spectral sensitivity of each channel of the camera.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPECTRAL_SENSITIVITY = 'SpectralSensitivity',

    /**
     * Opto-Electric Conversion Function (OECF) specified in ISO 14524.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OECF = 'OECF',

    /**
     * Version of the supported Exif standard.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXIF_VERSION = 'ExifVersion',

    /**
     * Date and time when the image was stored as digital data, in the format of YYYY:MM:DD HH:mm:ss.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_TIME_DIGITIZED = 'DateTimeDigitized',

    /**
     * Specific information about compressed data.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPONENTS_CONFIGURATION = 'ComponentsConfiguration',

    /**
     * Shutter speed, expressed in Additive System of Photographic Exposure (APEX) values.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SHUTTER_SPEED = 'ShutterSpeedValue',

    /**
     * Value of brightness, expressed in APEX values.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BRIGHTNESS_VALUE = 'BrightnessValue',

    /**
     * Smallest F number of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MAX_APERTURE_VALUE = 'MaxApertureValue',

    /**
     * Distance to the subject, in meters.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_DISTANCE = 'SubjectDistance',

    /**
     * Location and area of the main subject in the entire scene.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_AREA = 'SubjectArea',

    /**
     * Marker used by Exif/DCF manufacturers to record any required information.
     * 
     * This field is read-only in API versions 12 to 19 and is readable and writable in API version 20 and later.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MAKER_NOTE = 'MakerNote',

    /**
     * Tag used to record fractions of seconds for the **DateTime** tag.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME = 'SubsecTime',

    /**
     * Tag used to record fractions of seconds for the **DateTimeOriginal** tag.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME_ORIGINAL = 'SubsecTimeOriginal',

    /**
     * Tag used to record fractions of seconds for the **DateTimeDigitized** tag.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME_DIGITIZED = 'SubsecTimeDigitized',

    /**
     * FlashPix format version supported by an FPXR file. It is used to enhance device compatibility.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FLASHPIX_VERSION = 'FlashpixVersion',

    /**
     * Color space information, which is usually recorded as a color space specifier.
     * 
     * 1: "sRGB", indicating the standard sRGB color space. It is the typical default value.
     * 
     * 2: "Adobe RGB", indicating the Adobe RGB color space. It is not formally defined in Exif, but commonly used in 
     * practice.
     * 
     * 0xffff: "Uncalibrated", indicating that the color space is uncalibrated and unknown.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COLOR_SPACE = 'ColorSpace',

    /**
     * Name of an audio file related to the image data.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RELATED_SOUND_FILE = 'RelatedSoundFile',

    /**
     * Strobe energy at the time the image was captured, in Beam Candle Power Seconds (BCPS).
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FLASH_ENERGY = 'FlashEnergy',

    /**
     * Spatial frequency table of the camera or input device.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPATIAL_FREQUENCY_RESPONSE = 'SpatialFrequencyResponse',

    /**
     * Number of pixels in the image width (X) direction per FocalPlaneResolutionUnit.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_X_RESOLUTION = 'FocalPlaneXResolution',

    /**
     * Number of pixels in the image height (Y) direction per FocalPlaneResolutionUnit.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_Y_RESOLUTION = 'FocalPlaneYResolution',

    /**
     * Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution.
     * 
     * 2: "Inch": measured in inches.
     * 
     * 3: "Centimeter": measured in centimeters.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_RESOLUTION_UNIT = 'FocalPlaneResolutionUnit',

    /**
     * Location of the main subject relative to the left edge.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_LOCATION = 'SubjectLocation',

    /**
     * Exposure index selected at the time the image is captured.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_INDEX = 'ExposureIndex',

    /**
     * Type of the image sensor on the camera.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SENSING_METHOD = 'SensingMethod',

    /**
     * Image source.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FILE_SOURCE = 'FileSource',

    /**
     * Color Filter Array (CFA) geometric pattern of the image sensor.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CFA_PATTERN = 'CFAPattern',

    /**
     * Special processing on image data.
     * 
     * 0: "Normal process", indicating normal processing (no custom rendering).
     * 
     * 1: "Custom process", indicating custom processing (such as artistic effect, beauty, and HDR).
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CUSTOM_RENDERED = 'CustomRendered',

    /**
     * Exposure mode set when the image was captured.
     * 
     * 0: "Auto exposure."
     * 
     * 1: "Manual exposure."
     * 
     * 2: "Auto bracket."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE = 'ExposureMode',

    /**
     * Digital zoom ratio when the image was captured.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DIGITAL_ZOOM_RATIO = 'DigitalZoomRatio',

    /**
     * Type of the scene that was captured.
     * 
     * 0: "Standard."
     * 
     * 1: "Landscape."
     * 
     * 2: "Portrait."
     * 
     * 3: "Night scene."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_CAPTURE_TYPE = 'SceneCaptureType',

    /**
     * Degree of overall image gain adjustment.
     * 
     * 0: "Normal", no gain control.
     * 
     * 1: "Low gain up."
     * 
     * 2: "High gain up."
     * 
     * 3: "Low gain down."
     * 
     * 4: "High gain down."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GAIN_CONTROL = 'GainControl',

    /**
     * Direction of contrast processing used by the camera.
     * 
     * 0: "Normal", normal contrast.
     * 
     * 1: "Soft", soft contrast.
     * 
     * 2: "Hard", hard contrast.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONTRAST = 'Contrast',

    /**
     * Direction of saturation processing used by the camera.
     * 
     * 0:"Normal": normal saturation.
     * 
     * 1: "Low saturation."
     * 
     * 2: "High saturation."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SATURATION = 'Saturation',

    /**
     * Direction of sharpness processing used by the camera.
     * 
     * 0:"Normal": normal sharpness.
     * 
     * 1: "Soft."
     * 
     * 2: "Hard."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SHARPNESS = 'Sharpness',

    /**
     * Information about the photographing conditions of a specific camera model.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_SETTING_DESCRIPTION = 'DeviceSettingDescription',

    /**
     * Distance to the subject.
     * 
     * 0: "Unknown."
     * 
     * 1: "Macro."
     * 
     * 2: "Close view."
     * 
     * 3: "Distant view."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_DISTANCE_RANGE = 'SubjectDistanceRange',

    /**
     * Unique identifier assigned to each image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    IMAGE_UNIQUE_ID = 'ImageUniqueID',

    /**
     * GPS information version.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_VERSION_ID = 'GPSVersionID',

    /**
     * Whether the latitude is north or south latitude.
     * 
     * 0: Sea level, which is above sea level.
     * 
     * 1: "Sea level reference," which is below the sea level.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_ALTITUDE_REF = 'GPSAltitudeRef',

    /**
     * Altitude based on the reference in GPSAltitudeRef.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_ALTITUDE = 'GPSAltitude',

    /**
     * GPS satellites used for measurement.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SATELLITES = 'GPSSatellites',

    /**
     * Status of the GPS receiver when the image was recorded.
     * 
     * 'A': "Measurement in progress", GPS is working, satellite signals are locked, and location data is trustworthy.
     * 
     * 'V': "Measurement interrupted", GPS is not working, current positioning is unavailable, and location data may be 
     * missing or incorrect.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_STATUS = 'GPSStatus',

    /**
     * GPS measurement pmode. Whether the 2D (planar) or 3D (with height) measurement mode is used for GPS positioning.
     * 
     * 2: "2-dimensional measurement", (latitude+longitude).
     * 
     * 3: "3-dimensional measurement", (latitude + longitude + height).
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_MEASURE_MODE = 'GPSMeasureMode',

    /**
     * GPS Dilution of Precision (DOP), which reflects the precision of GPS measurements taken when the photo was 
     * captured.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DOP = 'GPSDOP',

    /**
     * Unit used to express the movement speed of the GPS receiver.
     * 
     * 'K': "km/h".
     * 
     * 'M': "mph".
     * 
     * 'N': "knots".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SPEED_REF = 'GPSSpeedRef',

    /**
     * Movement speed of the GPS receiver.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SPEED = 'GPSSpeed',

    /**
     * Which type of "North" is used as the reference for the direction angle.
     * 
     * 'T': "True direction", which is the geographic North Pole direction. This is the standard used for maps and 
     * navigation systems.
     * 
     * 'M': "Magnetic direction", which is the direction pointed to by the Earth's magnetic field. Note that magnetic 
     * declination varies by location and changes over time.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_TRACK_REF = 'GPSTrackRef',

    /**
     * Movement direction of the GPS receiver. Direction of movement (heading) of the camera at the moment the photo was
     * taken, measured in degrees.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_TRACK = 'GPSTrack',

    /**
     * Reference of the direction of the image when it was captured.
     * 
     * 'T': "True direction", which is the geographic North Pole direction. This is the standard used for maps and 
     * navigation systems.
     * 
     * 'M': "Magnetic direction", which is the direction pointed to by the Earth's magnetic field. Note that magnetic 
     * declination varies by location and changes over time.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_IMG_DIRECTION_REF = 'GPSImgDirectionRef',

    /**
     * Direction of the image when it was captured.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_IMG_DIRECTION = 'GPSImgDirection',

    /**
     * Geodetic survey data used by the GPS receiver.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_MAP_DATUM = 'GPSMapDatum',

    /**
     * Whether the latitude of the destination point is north or south latitude.
     * 
     * 78: "North".
     * 
     * 83: "South".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LATITUDE_REF = 'GPSDestLatitudeRef',

    /**
     * Latitude of the destination point.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LATITUDE = 'GPSDestLatitude',

    /**
     * Whether the longitude of the destination point is east or west longitude.
     * 
     * 69: "East".
     * 
     * 87: "West".
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LONGITUDE_REF = 'GPSDestLongitudeRef',

    /**
     * Longitude of the destination point.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LONGITUDE = 'GPSDestLongitude',

    /**
     * Reference of the bearing to the destination point.
     * 
     * 'T': "True direction", which is the geographic North Pole direction. This is the standard used for maps and 
     * navigation systems.
     * 
     * 'M': "Magnetic direction", which is the direction pointed to by the Earth's magnetic field. Note that magnetic 
     * declination varies by location and changes over time.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_BEARING_REF = 'GPSDestBearingRef',

    /**
     * Bearing to the destination point.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_BEARING = 'GPSDestBearing',

    /**
     * Unit used to express the distance to the destination point.
     * 
     * 'K': "km."
     * 
     * 'M': "miles."
     * 
     * 'N': "nautical miles."
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_DISTANCE_REF = 'GPSDestDistanceRef',

    /**
     * Distance to the destination point.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_DISTANCE = 'GPSDestDistance',

    /**
     * String that records the name of the method used for positioning.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_PROCESSING_METHOD = 'GPSProcessingMethod',

    /**
     * String that records the name of the GPS area.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_AREA_INFORMATION = 'GPSAreaInformation',

    /**
     * Whether differential correction is applied to the GPS receiver. It is critical to accurate location accuracy.
     * 
     * 0: "Without correction", which indicates that no differential correction is used.
     * 
     * 1:"Correction applied", which indicates that differential correction is used.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DIFFERENTIAL = 'GPSDifferential',

    /**
     * Serial number of the camera body.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BODY_SERIAL_NUMBER = 'BodySerialNumber',

    /**
     * Name of the camera owner.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CAMERA_OWNER_NAME = 'CameraOwnerName',

    /**
     * Whether the image is a composite image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPOSITE_IMAGE = 'CompositeImage',

    /**
     * Number of bits per pixel. It is specific to compressed data.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPRESSED_BITS_PER_PIXEL = 'CompressedBitsPerPixel',

    /**
     * DNG version. It encodes the DNG 4-tier version number.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DNG_VERSION = 'DNGVersion',

    /**
     * Size of the final image area, in raw image coordinates, taking into account extra pixels around the edges of the 
     * final image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT_CROP_SIZE = 'DefaultCropSize',

    /**
     * Gamma value.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GAMMA = 'Gamma',

    /**
     * ISO speed latitude yyy value of the camera or input device, which is defined in ISO 12232.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ISO_SPEED_LATITUDE_YYY = 'ISOSpeedLatitudeyyy',

    /**
     * ISO speed latitude zzz value of the camera or input device, which is defined in ISO 12232.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ISO_SPEED_LATITUDE_ZZZ = 'ISOSpeedLatitudezzz',

    /**
     * Manufacturer of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_MAKE = 'LensMake',

    /**
     * Model of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_MODEL = 'LensModel',

    /**
     * Serial number of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_SERIAL_NUMBER = 'LensSerialNumber',

    /**
     * Specifications of the lens.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_SPECIFICATION = 'LensSpecification',

    /**
     * Data type of a subfile, such as a full-resolution image, a thumbnail, or a part of a multi-frame image. The value
     * is a bit mask. The value 0 indicates a full-resolution image, **1** indicates a thumbnail, and **2** indicates a 
     * part of a multi-frame image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_SUBFILE_TYPE = 'NewSubfileType',

    /**
     * Time with an offset from UTC when the image was captured.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME = 'OffsetTime',

    /**
     * Time with an offset from UTC when the image was digitized. It helps to accurately adjust the timestamp.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME_DIGITIZED = 'OffsetTimeDigitized',

    /**
     * Time with an offset from UTC when the original image was created. It is critical for time-sensitive applications.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME_ORIGINAL = 'OffsetTimeOriginal',

    /**
     * Exposure time of source images of the composite image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_EXPOSURE_TIMES_OF_COMPOSITE_IMAGE = 'SourceExposureTimesOfCompositeImage',

    /**
     * Number of source images of the composite image.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_IMAGE_NUMBER_OF_COMPOSITE_IMAGE = 'SourceImageNumberOfCompositeImage',

    /**
     * Type of data contained in this subfile. This tag has been deprecated. Use **NewSubfileType** instead.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBFILE_TYPE = 'SubfileType',

    /**
     * Horizontal positioning error, in meters.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_H_POSITIONING_ERROR = 'GPSHPositioningError',

    /**
     * ISO sensitivity (ISO speed) used when the image was captured. It is the recommended field in Exif 2.3 and later. 
     * The earlier field, ISOSpeedRatings (Tag 0x8827), has the same data type and meaning. However, if both fields are 
     * present, the **PhotographicSensitivity** value should be used.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTOGRAPHIC_SENSITIVITY = 'PhotographicSensitivity',

    /**
     * Number of burst shooting times.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BURST_NUMBER = 'HwMnoteBurstNumber',

    /**
     * Face confidence.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_CONF = 'HwMnoteFaceConf',

    /**
     * Left eye centered.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_LEYE_CENTER = 'HwMnoteFaceLeyeCenter',

    /**
     * Mouth centered.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_MOUTH_CENTER = 'HwMnoteFaceMouthCenter',

    /**
     * Face pointer.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_POINTER = 'HwMnoteFacePointer',

    /**
     * Face rectangle.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_RECT = 'HwMnoteFaceRect',

    /**
     * Right eye centered.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_REYE_CENTER = 'HwMnoteFaceReyeCenter',

    /**
     * Smile score of for faces.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_SMILE_SCORE = 'HwMnoteFaceSmileScore',

    /**
     * Facial recognition algorithm version.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_VERSION = 'HwMnoteFaceVersion',

    /**
     * Whether the front camera is used to take a selfie.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FRONT_CAMERA = 'HwMnoteFrontCamera',

    /**
     * Pointer to the scene.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_POINTER = 'HwMnoteScenePointer',

    /**
     * Scene algorithm version.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_VERSION = 'HwMnoteSceneVersion',

    /**
     * Whether XMAGE is supported.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    IS_XMAGE_SUPPORTED = 'HwMnoteIsXmageSupported',

    /**
     * XMAGE watermark mode.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_MODE = 'HwMnoteXmageMode',

    /**
     * X1 coordinate of the watermark region.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_LEFT = 'HwMnoteXmageLeft',

    /**
     * Y1 coordinate of the watermark region.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_TOP = 'HwMnoteXmageTop',

    /**
     * X2 coordinate of the watermark region.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_RIGHT = 'HwMnoteXmageRight',

    /**
     * Y2 coordinate of the watermark region.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_BOTTOM = 'HwMnoteXmageBottom',

    /**
     * Cloud enhancement mode.
     * 
     * **Read/Write capability**: readable and writable.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT_MODE = 'HwMnoteCloudEnhancementMode',

    /**
     * Motion snapshot mode.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    WIND_SNAPSHOT_MODE = 'HwMnoteWindSnapshotMode',

    /**
     * Number of GIF loops. The value **0** means an infinite loop, and other values means the number of loops.
     * 
     * **Read/Write capability**: read-only
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GIF_LOOP_COUNT = 'GIFLoopCount'
  }  

  /**
   * Enumerates the image formats.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum ImageFormat {
    /**
     * YCBCR422 semi-planar format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    YCBCR_422_SP = 1000,

    /**
     * JPEG encoding format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    JPEG = 2000
  }

  /**
   * Enumerates the alpha types of images.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AlphaType {
    /**
     * Unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * There is no alpha or the image is opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    OPAQUE = 1,

    /**
     * Premultiplied alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PREMUL = 2,

    /**
     * RGB non-premultiplied alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    UNPREMUL = 3
  }

  /**
   * Enumerates the desired dynamic range of an image during decoding.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum DecodingDynamicRange {
    /**
     * The image is decoded based on the format. If the image is in HDR format, it is decoded based on the HDR content; 
     * otherwise, it is decoded based on the SDR content. The image source created by calling 
     * [CreateIncrementalSource]{@link @ohos.multimedia.image:image.CreateIncrementalSource(buf: ArrayBuffer)} is 
     * decoded into SDR content.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * The image is decoded according to the standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 1,

    /**
     * The image is decoded according to the high dynamic range. The image source created by calling 
     * [CreateIncrementalSource]{@link @ohos.multimedia.image:image.CreateIncrementalSource(buf: ArrayBuffer)} is 
     * decoded into SDR content.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR = 2
  }

  /**
   * Enumerates the desired dynamic range of an image during encoding.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum PackingDynamicRange {
    /**
     * Adaptive. The [pixelmap]{@link @ohos.multimedia.image:image.PixelMap} is encoded based on the format. If the
     * PixelMap is in HDR format, it is encoded based on the HDR content; otherwise, it is encoded based on the SDR
     * content.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * The image is decoded according to the standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 1,
  }

  /**
   * Enumerates the anti-aliasing levels.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @atomicservice [since 14]
   * @since 12 dynamic
   * @since 23 static
   */
  enum AntiAliasingLevel {
    /**
     * Nearest neighbor interpolation.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Bilinear interpolation.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * Bilinear interpolation with mipmap enabled. You are advised to use this value when zooming out an image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIUM = 2,

    /**
     * Cubic interpolation.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH = 3,
  }

  /**
   * Enumerates the scale modes of images.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum ScaleMode {
    /**
     * Reduces the image size to the dimensions of the target.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    FIT_TARGET_SIZE = 0,

    /**
     * Scales the image so that it fills the requested bounds of the target and crops the extra.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    CENTER_CROP = 1
  }

  /**
   * Enumerates the color component types of images.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamic
   * @since 23 static
   */
  enum ComponentType {
    /**
     * Luminance component.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_Y = 1,

    /**
     * Chrominance component.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_U = 2,

    /**
     * Chrominance component.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_V = 3,

    /**
     * JPEG type.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    JPEG = 4
  }

  /**
   * Enumerates the keys of HDR metadata used by [pixelmap]{@link @ohos.multimedia.image:image.PixelMap}.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrMetadataKey {
    /**
     * Metadata type used by [pixelmap]{@link @ohos.multimedia.image:image.PixelMap}.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_METADATA_TYPE = 0,

    /**
     * Static metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_STATIC_METADATA = 1,

    /**
     * Dynamic metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_DYNAMIC_METADATA = 2,

    /**
     * Metadata used by gain maps.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_GAINMAP_METADATA = 3,
  }

  /**
   * Enumerates the values available for **HDR_METADATA_TYPE** in [HdrMetadataKey]{@link image.HdrMetadataKey}.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrMetadataType {
    /**
     * No metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Metadata used for base graphics.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BASE = 1,

    /**
     * Metadata used for gain maps.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    GAINMAP = 2,

    /**
     * Metadata used for synthesized HDR graphics.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    ALTERNATE = 3,
  }

  /**
   * Enumerates the types of the memory used for image decoding.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum AllocatorType {
    /**
     * The system determines whether DMA memory or shared memory is used.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * DMA memory is used.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    DMA = 1,

    /**
     * Shared memory is used.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    SHARE_MEMORY = 2,
  }

  /**
   * Describes the region information.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface Region {
    /**
     * Region size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    size: Size;

    /**
     * X coordinate of the top-left corner of the region, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * Y coordinate of the top-left corner of the region, in px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Describes area information in an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PositionArea {
    /**
     * Pixels of the image. Only pixel data in BGRA_8888 format is supported.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    pixels: ArrayBuffer;

    /**
     * Offset for data reading, in bytes.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    offset: int;

    /**
     * Number of bytes from one row of pixels in memory to the next row of pixels in memory. The value of **stride** 
     * must be greater than or equal to the value of **region.size.width** multiplied by 4.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    stride: int;

    /**
     * Region to read or write. The width of the region to write plus the X coordinate cannot be greater than the width 
     * of the original image. The height of the region to write plus the Y coordinate cannot be greater than the height 
     * of the original image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    region: Region;
  }

  /**
   * Describes image information.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface ImageInfo {
    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    size: Size;

    /**
     * Pixel density, in ppi.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    density: int;

    /**
     * Number of bytes from one row of pixels in memory to the next row of pixels in memory.stride >= region.size.width*
     * 4 
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    stride: int;

    /**
     * Pixel format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pixelFormat: PixelMapFormat;

    /**
     * Alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    alphaType: AlphaType;

    /**
     * Actual image format (MIME type).
     * 
     * The supported formats for image decoding and image encoding are different. Do not directly use the actual image 
     * format obtained after decoding as the value of **format** in [PackingOption]{@link image.PackingOption} during 
     * image encoding.
     * 
     * You can use the **supportedFormats** property of 
     * [ImageSource]{@link @ohos.multimedia.image: image.ImageSource#supportedFormats} and 
     * [ImagePacker]{@link @ohos.multimedia.image: image.ImagePacker#supportedFormats} to view the 
     * supported formats for decoding and encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    mimeType: string;

    /**
     * Whether the image is an HDR image. The value **true** means an HDR image, and **false** means an SDR image. For 
     * [ImageSource]{@link @ohos.multimedia.image:image.ImageSource}, this parameter specifies whether the source image is in HDR 
     * format. For [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}, this parameter specifies whether the decoded PixelMap
     * is in HDR format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    isHdr: boolean;
  }

  /**
  * Describes the options for tiff image packing.
  *
  * @syscap SystemCapability.Multimedia.Image.ImagePacker
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  interface PackingOptionsForTiff {
    /**
    * Compression algorithm type: 3 (CCITT G3), 4 (CCITT G4), 5 (LZW).
    * - For binary image: must be 3 (G3) or 4 (G4), automatically uses 4 (G4).
    * - For Y8/RGB_888 format: automatically uses LZW (5), user setting is ignored.
    * The value should be an integer, Currently, only 3, 4, and 5 are supported.
    *
    * @syscap SystemCapability.Multimedia.Image.ImagePacker
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    compression?: int;

    /**
    * Image orientation.Default value is TOP_LEFT.
    *
    * @syscap SystemCapability.Multimedia.Image.ImagePacker
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    orientation?: Orientation;

    /**
    * Horizontal resolution.
    * The value must be greater than 0.
    *
    * @syscap SystemCapability.Multimedia.Image.ImagePacker
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    xResolution?: double;

    /**
    * Vertical resolution.
    * The value must be greater than 0.
    *
    * @syscap SystemCapability.Multimedia.Image.ImagePacker
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    yResolution?: double;

    /**
    * Resolution unit: 1 (No unit), 2 (Inch), 3 (Centimeter).
    * Currently, only 1, 2, and 3 are supported.
    *
    * @syscap SystemCapability.Multimedia.Image.ImagePacker
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
    resolutionUnit?: int;
  }

  /**
   * Enumerates the order of cropping and scaling.
   * 
   * If the **cropAndScaleStrategy** parameter is not specified in 
   * [DecodingOptions]{@link @ohos.multimedia.image:image.DecodingOptions} and both **desiredRegion** and 
   * **desiredSize** are set, the final decoding result may vary slightly due to differences in decoding algorithms used
   * for different image formats.
   * 
   * For example, if the original image size is 200x200, and you specify 
   * **desiredSize:{width: 150, height: 150}, desiredRegion:{x: 0, y: 0, width: 100, height: 100}**, the expectation is 
   * to decode the top-left 1/4 region of the original image and then scale the pixelMap size to 150x150.
   * 
   * For JPEG and WebP images (as well as some DNG images that decode a JPEG preview within the file and therefore are 
   * treated as JPEG format), the system first performs downsampling. For instance, it might downsample by 7/8 and then 
   * crop the region based on a 175x175 image size. As a result, the final cropped region will be slightly larger than 
   * the top-left 1/4 of the original image.
   * 
   * For SVG images, which are vector-based and can be scaled without losing clarity, the system scales the image based 
   * on the ratio of **desiredSize** to the original image size and then crops the region. This results in a decoded 
   * region that may differ from the exact 1/4 region of the original image.
   * 
   * To ensure consistent results when both **desiredRegion** and **desiredSize** are set, set the 
   * **cropAndScaleStrategy** parameter to **CROP_FIRST**.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 18 dynamic
   * @since 23 static
   */
  enum CropAndScaleStrategy {
    /**
     * If both **desiredRegion** and **desiredSize** are specified, the image is first scaled based on **desiredSize** 
     * and then cropped based on **desiredRegion**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    SCALE_FIRST = 1,

    /**
     * If both **desiredRegion** and **desiredSize** are specified, the image is first cropped based on 
     * **desiredRegion** and then scaled based on **desiredSize**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    CROP_FIRST = 2
  }

  /**
   * Packing image size limit.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PackingSizeLimit {
    /**
     * Maximum packing size
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxSize: Size;

    /**
     * Specify the scaling algorithm during zooming.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    level: AntiAliasingLevel;
  }

  /**
   * Describes the options for image encoding.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface PackingOption {
    /**
     * Format of the packed image.
     * 
     * Currently, only the following formats are supported: image/jpeg, image/webp, image/png, image/heic (or image/heif
     * )<sup>12+</sup>, image/sdr_astc_4x4<sup>18+</sup>, image/sdr_sut_superfast_4x4<sup>18+</sup> (depending on the 
     * hardware), and image/hdr_astc_4x4<sup>20+</sup>.
     * 
     * **NOTE**: The JPEG format does not support the alpha channel. If the JPEG format with the alpha channel is used 
     * for data encoding, the transparent color turns black.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    format: string;

    /**
     * Quality of the output image set. This parameter takes effect only for JPEG and HEIF images. The value range is 
     * [0, 100]. The value **0** means the lowest quality, and **100** means the highest quality. The higher the quality
     * , the larger the space occupied by the generated image. WebP and PNG images are lossless.
     * 
     * In the case of sdr_astc_4x4 encoding, the parameter can be set to **92** and **85**.
     * 
     * In the case of sut encoding, the parameter can be set to **92**.
     * 
     * (Available since API version 20) In the case of hdr_astc_4x4 encoding, the parameter can be set to **85**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    quality: int;

    /**
     * Size of the buffer for receiving the encoded data, in bytes. If this parameter is not set, the default value 25 
     * MB is used. If the size of an image exceeds 25 MB, you must specify the size. The value of **bufferSize** must be
     * greater than the size of the encoded image. The use of 
     * [packToFile]{@link @ohos.multimedia.image:image.ImagePacker.packToFile(source: ImageSource, fd: int, options: PackingOption, callback: AsyncCallback<void>)}
     * is not restricted by this parameter.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bufferSize?: int;

    /**
     * Desired dynamic range. The default value is **SDR**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 12 dynamic
     * @since 23 static
     */
    desiredDynamicRange?: PackingDynamicRange;

    /**
     * Whether encoding image property information, for example, Exif, is required. **true** if required, **false** 
     * otherwise. The default value is **false**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 12 dynamic
     * @since 23 static
     */
    needsPackProperties?: boolean;

    /**
     * This parameter is valid only when needsPackProperties is set to true. It specifies the maximum width and height
     *     of the thumbnail generated during encoding. If this parameter is not specified, no thumbnail will be
     *     generated during encoding.
     * The value should be an integer.
     * <br>Unit:px.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxEmbedThumbnailDimension?: int;

    /**
     * Options for tiff image packing.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
     tiffPackingOptions?: PackingOptionsForTiff;

    /**
     * The background color used when the image pixels are in RGBA format but the target encoding format does not
     * support transparency, such as "image/jpeg" or "image/heif".
     * The value must be a 24‑bit RGB integer expressed in hexadecimal notation (e.g., 0xRRGGBB).
     * The alpha channel is ignored.
     * Valid range: 0x000000 – 0xFFFFFF.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    backgroundColor?: int;

    /**
     * Indicates whether to carry GPS information when encoding the EXIF metadata.
     * Default value: true.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needsPackGPS?: boolean;

    /**
     * Packing image size limit.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeLimit?: PackingSizeLimit;
  }

  /**
   * Defines the options for encoding animated images.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 18 dynamic
   * @since 23 static
   */
  interface PackingOptionsForSequence {
    /**
     * Number of frames specified in GIF encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    frameCount: int;

    /**
     * Delay time of each frame in GIF encoding. The value must be greater than 0.
     * 
     * The unit is 10 milliseconds. For example, if this parameter is set to 10, the actual delay per frame is 100 ms.
     * 
     * If the array length is less than **frameCount**, the last value in the array will be used for the remaining 
     * frames.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    delayTimeList: Array<int>;

    /**
     * Array that defines how each image frame transitions. If the array length is less than **frameCount**, the last 
     * value in the array will be used for the remaining frames. The values can be:
     * 
     * - **0**: No operation is required.
     * - **1**: Keeps the image unchanged.
     * - **2**: Restores the background color.
     * - **3**: Restores to the previous state.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    disposalTypes?: Array<int>;

    /**
     * Number of times that the output image in GIF encoding loops. The value range is [0, 65535].
     * 
     * The value **0** means an infinite loop. If this field is not carried, loop playback is not performed.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    loopCount?: int;
  }

  /**
   * Describes the image properties.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead image.ImagePropertyOptions
   */
  interface GetImagePropertyOptions {
    /**
     * Index of the image. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11  
     * @useinstead image.ImagePropertyOptions#index
     */
    index?: number;

    /**
     * Default property value. The default value is null.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImagePropertyOptions#defaultValue
     */
    defaultValue?: string;
  }

  /**
   * Describes the image properties.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  interface ImagePropertyOptions {
    /**
     * Index of the image. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    index?: int;

    /**
     * Default property value. The default value is null.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    defaultValue?: string;
  }

  /**
   * Describes the image decoding options.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface DecodingOptions {
    /**
     * Index of the image to decode. The default value is **0**, indicating the first image. If this parameter is set to
     * N, the (N+1)th image is used. For single-frame images, the value is always **0**. For multi-frame images such as 
     * animations, the value ranges from 0 to (Number of frames – 1).
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    index?: int;

    /**
     * Sampling size of the thumbnail. The default value is **1**. Currently, the value can only be **1**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    sampleSize?: int;

    /**
     * Rotation angle. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rotate?: int;

    /**
     * Whether the image is editable. **true** if editable, **false** otherwise. The default value is **false**. If this
     * option is set to **false**, the image cannot be edited again, and operations such as writing pixels will fail.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    editable?: boolean;

    /**
     * Expected output size. The value must be a positive integer and defaults to the original image size. If the output
     * size is different from the original size, the output is stretched or scaled to the specified size.
     * 
     * Note: If both **desiredSize** and **desiredRegion** are passed to the decoding API, you must also include 
     * **cropAndScaleStrategy** to determine whether to crop or scale first. **CROP_FIRST** is recommended.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    desiredSize?: Size;

    /**
     * Rectangle specified by **Region** in the decoded image. When the original image is large and only a specific part
     * of the image is required, you can set this parameter to improve performance. The default value is the original 
     * image size.
     * 
     * Note: If both **desiredSize** and **desiredRegion** are passed to the decoding API, you must also include 
     * **cropAndScaleStrategy** to determine whether to crop or scale first. **CROP_FIRST** is recommended.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    desiredRegion?: Region;

    /**
     * Pixel format for decoding. The default value is **RGBA_8888**. Only RGBA_8888, BGRA_8888, and RGB_565 are 
     * supported. RGB_565 is not supported for images with alpha channels, such as PNG, GIF, ICO, and WEBP.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    desiredPixelFormat?: PixelMapFormat;

    /**
     * Pixel density, in ppi. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    fitDensity?: int;

    /**
     * Target color space. The default value is **UNKNOWN**.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    desiredColorSpace?: colorSpaceManager.ColorSpaceManager;
    
    /**
     * Desired dynamic range. The default value is **SDR**.
     * 
     * This property cannot be set for an image source created using 
     * [CreateIncrementalSource]{@link @ohos.multimedia.image:image.CreateIncrementalSource(buf: ArrayBuffer)}. By 
     * default, the image source is decoded as SDR content.
     * 
     * If the platform does not support HDR, the setting is invalid and the content is decoded as SDR content by 
     * default.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 12 dynamic
     * @since 23 static
     */
    desiredDynamicRange?: DecodingDynamicRange;

    /**
     * Image quality.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    resolutionQuality?: ResolutionQuality;

    /**
     * If **desiredRegion** and **desiredSize** are both specified, the order of cropping and scaling is determined.
     * 
     * Only **SCALE_FIRST** and **CROP_FIRST** are supported.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 18 dynamic
     * @since 23 static
     */
    cropAndScaleStrategy?: CropAndScaleStrategy;
  }

  /**
   * Describes the color components of an image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Component {
    /**
     * Color component type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly componentType: ComponentType;

    /**
     * Row stride. The camera preview stream data needs to be read by stride. For details, see 
     * [Solution to Screen Artifacts During Camera Preview](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-deal-stride-solution)
     * .
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rowStride: int;

    /**
     * Pixel stride.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly pixelStride: int;

    /**
     * Component buffer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * Defines PixelMap initialization options.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface InitializationOptions {
    /**
     * Image size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    size: Size;

    /**
     * Pixel format of the passed-in buffer data. The default value is **BGRA_8888**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    srcPixelFormat?: PixelMapFormat;

    /**
     * Pixel format of the generated PixelMap. The default value is **RGBA_8888**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    pixelFormat?: PixelMapFormat;

    /**
     * Whether the image pixels are editable. **true** if editable, **false** otherwise. The value **false** provides 
     * better image rendering and transmission performance. The default value is **false**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    editable?: boolean;

    /**
     * Alpha type. The default value is **IMAGE_ALPHA_TYPE_PREMUL**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    alphaType?: AlphaType;

    /**
     * Scale mode. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scaleMode?: ScaleMode;
  }

  /**
   * Defines image source initialization options.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface SourceOptions {
    /**
     * Pixel density of the image resource, in ppi.
     * 
     * If **desiredSize** is not set in [DecodingOptions]{@link image.DecodingOptions} and 
     * **SourceOptions.sourceDensity** and **DecodingOptions.fitDensity** are not 0, the PixelMap output after decoding 
     * will be scaled.
     * 
     * The formula for calculating the width after scaling is as follows (the same applies to the height): (width * 
     * fitDensity + (sourceDensity >> 1)) / sourceDensity.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    sourceDensity: int;

    /**
     * Image pixel format. The default value is **UNKNOWN**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    sourcePixelFormat?: PixelMapFormat;

    /**
     * Image pixel size. The default value is null.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    sourceSize?: Size;
  }

  /**
   * Describes the static metadata keys, that is, the values available for **HDR_STATIC_METADATA** in 
   * [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface HdrStaticMetadata {
    /**
     * The X-coordinate of the primary colors. Specifies the normalized X-coordinates of the display device's three
     * primary colors. The values are stored in an array of length 3, in the order of red, green, and blue (r, g, b).
     * Each value is represented in units of 0.00002 and must fall within the range [0.0, 1.0].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    displayPrimariesX: Array<double>;

    /**
     * The Y-coordinate of the primary colors. Specifies the normalized Y-coordinates of the display device's three
     * primary colors. The values are stored in an array of length 3, in the order of red, green, and blue (r, g, b).
     * Each value is represented in units of 0.00002 and must fall within the range [0.0, 1.0].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    displayPrimariesY: Array<double>;

    /**
     * The X-coordinate of the white point value. Specifies the normalized X-coordinate of the white point.
     * 
     * The value is represented in units of 0.00002 and must fall within the range [0.0, 1.0].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    whitePointX: double;

    /**
     * The Y-coordinate of the white point value. Specifies the normalized Y-coordinate of the white point.
     * 
     * The value is represented in units of 0.00002 and must fall within the range [0.0, 1.0].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    whitePointY: double;

    /**
     * Maximum luminance of the image's primary display.
     * The value is measured in units of 1, with a maximum allowed value of 65,535.
     *
     * Unit:nit.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    maxLuminance: double;

    /**
     * Minimum luminance of the image's primary display.
     * 
     * The value is measured in units of 0.0001, with a maximum allowed value of 6.55535.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    minLuminance: double;

    /**
     * Maximum brightness of displayed content.
     * 
     * The value is measured in units of 1, with a maximum allowed value of 65,535.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    maxContentLightLevel: double;

    /**
     * Maximum average brightness of displayed content.
     * 
     * The value is measured in units of 1, with a maximum allowed value of 65,535.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    maxFrameAverageLightLevel: double;
  }

  /**
   * Describes the data content of a single channel of the gain map. For details, see ISO 21496-1.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface GainmapChannel {
    /**
     * The per-component max gain map values.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    gainmapMax: double;

    /**
     * The per-component min gain map values.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    gainmapMin: double;

    /**
     * The per-component gamma values.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    gamma: double;

    /**
     * The per-component baseline offset.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    baseOffset: double;

    /**
     * The per-component alternate offset.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    alternateOffset: double;
  }

  /**
   * Describes the metadata keys used by a gain map, that is, the values available for **HDR_GAINMAP_METADATA** in 
   * [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}. For details, see ISO 21496-1.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  interface HdrGainmapMetadata {
    /**
     * The version used by the writer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    writerVersion: int;

    /**
     * The minimum version a parser needs to understand.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    miniVersion: int;

    /**
     * The number of gain map channels, with a value of 1 or 3.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    gainmapChannelCount: int;

    /**
     * Indicate whether to use the color space of the base image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    useBaseColorFlag: boolean;

    /**
     * The baseline hdr headroom.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */    
    baseHeadroom: double;

    /**
     * The alternate hdr headroom.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    alternateHeadroom: double;

    /**
     * The per-channel metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    channels: Array<GainmapChannel>;
  }

  /**
   * Describes the initialization options for ImageReceiver.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageReceiverOptions {
    /**
     * Image size, with both the width and height greater than 0.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    size?: Size;

    /**
     * Maximum number of images that can be accessed simultaneously.
     * The value range is all integers, The value must be a positive integer less than
     * or equal to 64.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capacity?: int;
  }

  /**
   * Describes the image buffer data.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageBufferData {
    /**
     * Row stride of each component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly rowStride: int[];

    /**
     * Pixel stride of each component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly pixelStride: int[];

    /**
     * Image data buffer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * Describes the HDR metadata values used by a PixelMap, which corresponds to the values available for 
   * [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   *
   * @unionmember { HdrMetadataType } Metadata value corresponding to the **HDR_METADATA_TYPE** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   * @unionmember { HdrStaticMetadata } Metadata value corresponding to the **HDR_STATIC_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   * @unionmember { ArrayBuffer } Metadata value corresponding to the **HDR_DYNAMIC_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   * @unionmember { HdrGainmapMetadata } Metadata value corresponding to the **HDR_GAINMAP_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey}.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  type HdrMetadataValue = HdrMetadataType | HdrStaticMetadata | ArrayBuffer | HdrGainmapMetadata;

  /**
   * Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specified
   * pixel format to initialize the PixelMap.
   * The following pixel formats are not supported for PixelMap creation:
   * RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4.
   *
   * @param { ArrayBuffer } pixels - The pixel data buffer used to initialize the PixelMap.
   *     The format of the pixel data can be specified by InitializationOptions.srcPixelFormat.
   *     The size of the buffer should be: image width * image height * bytes per pixel.
   * @param { InitializationOptions } param - Initialization options for the PixelMap.
   *     If InitializationOptions.pixelFormat is set to ASTC_4x4, it will be reset to the default value RGBA_8888.
   *     If InitializationOptions.srcPixelFormat is set to ASTC_4x4, it will be reset to the default value BGRA_8888.
   * @returns { Promise<PixelMap> } A Promise of the new PixelMap created.
   * @throws { BusinessError } 7600206 - Invalid parameter.
   *     Possible cause: Size of the pixel data buffer does not match InitializationOptions.size.
   * @throws { BusinessError } 7600207 - Unsupported pixel format.
   * @throws { BusinessError } 7600301 - Failed to allocate memory.
   *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
   * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
   *     Possible causes:
 	 *     1. Failed to perform pixel format conversion.
 	 *     2. Internal data is corrupted. Please check the logs for detailed information.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createPixelMapFromPixels(pixels: ArrayBuffer, param: InitializationOptions): Promise<PixelMap>;

  /**
   * Creates a PixelMap from existing pixel data. The pixel data will be copied and converted to the specified
   * pixel format to initialize the PixelMap.
   *
   * The following pixel formats are not supported for PixelMap creation:
   * RGBA_1010102, YCBCR_P010, YCRCB_P010, ASTC_4x4.
   *
   * @param { ArrayBuffer } pixels - The pixel data buffer used to initialize the PixelMap.
   *     The format of the pixel data can be specified by InitializationOptions.srcPixelFormat.
   *     The size of the buffer should be: image width * image height * bytes per pixel.
   * @param { InitializationOptions } param - Initialization options for the PixelMap.
   *     If InitializationOptions.pixelFormat is set to ASTC_4x4, it will be reset to the default value RGBA_8888.
   *     If InitializationOptions.srcPixelFormat is set to ASTC_4x4, it will be reset to the default value BGRA_8888.
   * @returns { PixelMap } The new PixelMap created.
   * @throws { BusinessError } 7600206 - Invalid parameter.
   *     Possible cause: Size of the pixel data buffer does not match InitializationOptions.size.
   * @throws { BusinessError } 7600207 - Unsupported pixel format.
   * @throws { BusinessError } 7600301 - Failed to allocate memory.
   *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
   * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
   *     Possible causes:
   *     1. Failed to perform pixel format conversion.
   *     2. Internal data is corrupted. Please check the logs for detailed information.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createPixelMapFromPixelsSync(pixels: ArrayBuffer, param: InitializationOptions): PixelMap;

  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  /**
   * Create pixelmap by data buffer.
   * 
   * It is recommended to use {@link createPixelMapFromPixels}.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function createPixelMap(colors: ArrayBuffer, options: InitializationOptions, callback: AsyncCallback<PixelMap>): void;

  /**
   * Create pixelmap by data buffer.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 8
   */
  /**
   * Create pixelmap by data buffer.
   * 
   * It is recommended to use {@link createPixelMapFromPixels}.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function createPixelMap(colors: ArrayBuffer, options: InitializationOptions): Promise<PixelMap>;

  /**
   * Create pixelmap by data buffer.
   * 
   * It is recommended to use {@link createPixelMapFromPixelsSync}.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function createPixelMapSync(colors: ArrayBuffer, options: InitializationOptions): PixelMap;

  /**
   * Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified
   * by allocatorType. By default, the system selects the memory type based on the image type, image size,
   * platform capability, etc. When processing the PixelMap returned by this interface, please always
   * consider the impact of stride.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } param Initialization options for pixelmap.
   * @param { AllocatorType } [allocatorType] Indicate which memory type will be used by the returned PixelMap.
   * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
   * @throws { BusinessError } 7600201 - Unsupported operation.
   * @throws { BusinessError } 7600301 - Memory alloc failed.
   * @throws { BusinessError } 7600302 - Memory copy failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function createPixelMapUsingAllocator(colors: ArrayBuffer, param: InitializationOptions,
    allocatorType?: AllocatorType): Promise<PixelMap>;

  /**
   * Create pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified
   * by allocatorType. By default, the system selects the memory type based on the image type, image size,
   * platform capability, etc. When processing the PixelMap returned by this interface, please always
   * consider the impact of stride.
   *
   * @param { ArrayBuffer } colors The image color buffer.
   * @param { InitializationOptions } param Initialization options for pixelmap.
   * @param { AllocatorType } [allocatorType] Indicate which memory type will be used by the returned PixelMap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 7600201 - Unsupported operation.
   * @throws { BusinessError } 7600301 - Memory alloc failed.
   * @throws { BusinessError } 7600302 - Memory copy failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function createPixelMapUsingAllocatorSync(colors: ArrayBuffer, param: InitializationOptions,
    allocatorType?: AllocatorType): PixelMap;

  /**
   * Creates an empty PixelMap.
   * 
   * The following pixel format is not supported for PixelMap creation: ASTC_4x4.
   *
   * @param { InitializationOptions } param - Initialization options for the PixelMap.
   *     If InitializationOptions.pixelFormat is set to ASTC_4x4, it will be reset to the default value RGBA_8888.
   * @returns { PixelMap } The new PixelMap created.
   * @throws { BusinessError } 7600206 - Invalid parameter.
   * @throws { BusinessError } 7600301 - Failed to allocate memory.
   *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
   * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
   *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createEmptyPixelMap(param: InitializationOptions): PixelMap;
  
  /**
   * Create an empty pixelmap.
   * 
   * It is recommended to use {@link createEmptyPixelMap}.
   *
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  function createPixelMapSync(options: InitializationOptions): PixelMap;

  /**
   * Create an empty pixelmap by data buffer based on opts, the memory type used by the PixelMap can be specified
   * by allocatorType. By default, the system selects the memory type based on the image type, image size,
   * platform capability, etc. When processing the PixelMap returned by this interface, please always
   * consider the impact of stride.
   *
   * @param { InitializationOptions } param Initialization options for pixelmap.
   * @param { AllocatorType } [allocatorType] Indicate which memory type will be used by the returned PixelMap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 7600201 - Unsupported operation.
   * @throws { BusinessError } 7600301 - Memory alloc failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20 dynamic
   * @since 23 static
   */
  function createPixelMapUsingAllocatorSync(param: InitializationOptions, allocatorType?: AllocatorType): PixelMap;

  /**
   * Transforms pixelmap from unpremultiplied alpha format to premultiplied alpha format.
   *
   * @param { PixelMap } src The source pixelmap.
   * @param { PixelMap } dst The destination pixelmap.
   * @param { AsyncCallback<void> } callback Callback used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the pixelMap.
   * @throws { BusinessError } 62980248 - Pixelmap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
function createPremultipliedPixelMap(src: PixelMap, dst: PixelMap, callback: AsyncCallback<void>): void;

  /**
   * Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { PixelMap } src The source pixelMap.
   * @param { PixelMap } dst The destination pixelmap.
   * @returns { Promise<void> } A Promise instance used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the pixelMap.
   * @throws { BusinessError } 62980248 - Pixelmap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
function createPremultipliedPixelMap(src: PixelMap, dst: PixelMap): Promise<void>;

  /**
   * Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { PixelMap } src The source pixelmap.
   * @param { PixelMap } dst The destination pixelmap.
   * @param { AsyncCallback<void> } callback Callback used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the pixelMap.
   * @throws { BusinessError } 62980248 - Pixelmap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
function createUnpremultipliedPixelMap(src: PixelMap, dst: PixelMap, callback: AsyncCallback<void>): void;

  /**
   * Transforms pixelmap from premultiplied alpha format to unpremultiplied alpha format.
   *
   * @param { PixelMap } src The source pixelmap.
   * @param { PixelMap } dst The destination pixelmap.
   * @returns { Promise<void> } A Promise instance used to return the operation result.
   * If the operation fails, an error message is returned.
   * @throws { BusinessError } 62980103 - The image data is not supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980246 - Failed to read the pixelMap.
   * @throws { BusinessError } 62980248 - Pixelmap not allow modify.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
function createUnpremultipliedPixelMap(src: PixelMap, dst: PixelMap): Promise<void>;

  /**
   * Creates a PixelMap object based on MessageSequence parameter.
   *
   * @param { rpc.MessageSequence } sequence - rpc.MessageSequence parameter.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
   * 2. Decoding process exception. 3. Insufficient memory.
   * @throws { BusinessError } 62980097 - IPC error. Possible cause: 1.IPC communication failed. 2. Image upload exception.
   * 3. Decode process exception. 4. Insufficient memory.
   * @throws { BusinessError } 62980115 - Invalid input parameter.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980177 - Abnormal API environment.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @throws { BusinessError } 62980179 - Abnormal buffer size.
   * @throws { BusinessError } 62980180 - FD mapping failed.
   * Possible cause: 1. Size and address does not match. 2. Memory map in memalloc failed.
   * @throws { BusinessError } 62980246 - Failed to read the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap;

  /**
   * Creates a PixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @param { Region } region - The region to surface.
   * @returns { Promise<PixelMap> } Returns the instance if the operation is successful;Otherwise, an exception will be thrown.
   * @throws { BusinessError } 62980115 - If the image parameter invalid.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function createPixelMapFromSurface(surfaceId: string, region: Region): Promise<PixelMap>;

  /**
   * Creates a PixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @param { Region } region - The region to surface.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  function createPixelMapFromSurfaceSync(surfaceId: string, region: Region): PixelMap;

  /**
   * Creates a PixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @returns { Promise<PixelMap> } Returns the instance if the operation is successful;Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function createPixelMapFromSurface(surfaceId: string): Promise<PixelMap>;

  /**
   * Creates a PixelMap object from surface id.
   *
   * @param { string } surfaceId - surface id.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, an exception will be thrown.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 15 dynamic
   * @since 23 static
   */
  function createPixelMapFromSurfaceSync(surfaceId: string): PixelMap;

  /**
   * Creates a PixelMap object based on the ID of a Surface with transformation.
   *
   * @param { string } surfaceId - ID of the Surface.
   * @param { boolean } transformEnabled - Whether to inverse transform the PixelMap to cancel out the transformation
   *     from the Surface.
   *     If true, the PixelMap will be transformed by the same amount from the Surface but in a reversed direction;
   *     if false, the PixelMap will not be transformed.
   * @returns { Promise<PixelMap> } A Promise of PixelMap instance if the operation is successful.
   *     Otherwise, an exception will be thrown.
   * @throws { BusinessError } 7600104 - Failed to get the data from Surface.
   * @throws { BusinessError } 7600201 - Unsupported operation, e.g. on cross-platform.
   * @throws { BusinessError } 7600206 - Invalid parameter.
   * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createPixelMapFromSurfaceWithTransformation(surfaceId: string, transformEnabled: boolean): Promise<PixelMap>;

  /**
   * Creates a PixelMap object based on the ID of a Surface with transformation.
   *
   * @param { string } surfaceId - ID of the Surface.
   * @param { boolean } transformEnabled - Whether to inverse transform the PixelMap to cancel out the transformation
   *     from the Surface.
   *     If true, the PixelMap will be transformed by the same amount from the Surface but in a reversed direction;
   *     if false, the PixelMap will not be transformed.
   * @returns { PixelMap } A PixelMap instance if the operation is successful.
   *     Otherwise, an exception will be thrown.
   * @throws { BusinessError } 7600104 - Failed to get the data from Surface.
   * @throws { BusinessError } 7600201 - Unsupported operation, e.g. on cross-platform.
   * @throws { BusinessError } 7600206 - Invalid parameter.
   * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createPixelMapFromSurfaceWithTransformationSync(surfaceId: string, transformEnabled: boolean): PixelMap;

  /**
   * Creates an ImageSource instance based on a given URI.
   * 
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { string } uri - Image path. Currently, only the application sandbox path is supported.
   *     <br>The following formats are supported: .jpg, .png, .gif, .bmp, .webp, .dng, .heic<sup>12+</sup> 
   *     (depending on the hardware), [.svg<sup>10+</sup>]{@link @ohos.multimedia.image:image.Functions#SVG Tags}, and
   *     .ico<sup>11+</sup>.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource | undefined } returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(uri: string): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on a given URI.
   * 
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { string } uri - Image path. Currently, only the application sandbox path is supported.
   *     <br>The following formats are supported: .jpg, .png, .gif, .bmp, .webp, .dng, .heic<sup>12+</sup> (depending on
   *     the hardware), [.svg<sup>10+</sup>]{@link @ohos.multimedia.image:image.Functions#SVG Tags}, and
   *     .ico<sup>11+</sup>.
   * @param { SourceOptions } options - Image properties, including the image pixel density, pixel format, and image
   *     size.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createImageSource(uri: string, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @param { SourceOptions } options The config of Image source.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(uri: string, options: SourceOptions): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on a given file descriptor.
   * 
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { int } fd - File descriptor.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function createImageSource(fd: int): ImageSource;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { int } fd - ID of a file descriptor
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(fd: int): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on a given file descriptor.
   * 
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { int } fd - File descriptor.
   * @param { SourceOptions } options - Image properties, including the image pixel density, pixel format, and image
   *     size.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createImageSource(fd: int, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the file descriptor.
   *
   * @param { int } fd ID of a file descriptor.
   * @param { SourceOptions } options The config of Image source.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(fd: int, options: SourceOptions): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the 
   * pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call 
   * [image.createPixelMapSync]{@link @ohos.multimedia.image:image.ImageSource.createPixelMapSync(options?: DecodingOptions)}
   * .
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { ArrayBuffer } buf - Array of image buffers.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(buf: ArrayBuffer): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on buffers. The data passed by **buf** must be undecoded. Do not pass the 
   * pixel buffer data such as RBGA and YUV. If you want to create a PixelMap based on the pixel buffer data, call 
   * [image.createPixelMapSync]{@link @ohos.multimedia.image:image.ImageSource.createPixelMapSync(options?: DecodingOptions)}
   * .
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { ArrayBuffer } buf - Array of image buffers.
   * @param { SourceOptions } options - Image properties, including the image pixel density, pixel format, and image
   *     size.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createImageSource(buf: ArrayBuffer, options: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @param { SourceOptions } options The config of Image source.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(buf: ArrayBuffer, options: SourceOptions): ImageSource | undefined;

  /**
   * Creates an ImageSource instance based on the raw file descriptor of an image resource file.
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { resourceManager.RawFileDescriptor } rawfile - Raw file descriptor of the image resource file.
   * @param { SourceOptions } options - Image properties, including the image pixel density, pixel format, and image
   *     size.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  function createImageSource(rawfile: resourceManager.RawFileDescriptor, options?: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the raw file descriptor.
   *
   * @param { resourceManager.RawFileDescriptor } rawfile - The raw file descriptor of the image.
   * @param { SourceOptions } [options] - The config of Image source.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createImageSource(rawfile: resourceManager.RawFileDescriptor, options?: SourceOptions)
      : ImageSource | undefined;

  /**
   * Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or 
   * writing of Exif information.
   * 
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   * 
   * The ImageSource instance created in incremental mode supports the following capabilities (applicable to synchronous
   * , callback, and promise modes):
   * 
   * - Obtaining image information: Call 
   * [getImageInfo]{@link @ohos.multimedia.image:image.ImageSource.getImageInfo(index: int, callback: AsyncCallback<ImageInfo>)}
   * to obtain image information by index, or call 
   * [getImageInfo]{@link @ohos.multimedia.image:image.ImageSource.getImageInfo(callback: AsyncCallback<ImageInfo>)} to 
   * directly obtain image information.
   * - Obtaining an image property: Call 
   * [getImageProperty]{@link @ohos.multimedia.image:image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
   * to obtain the value of a property with the specified index in an image.
   * - Obtaining image properties: Call 
   * [getImageProperties]{@link @ohos.multimedia.image:image.ImageSource.getImageProperties(key: Array<PropertyKey>)} to
   * obtain the values of properties with the given names in an image.
   * - Updating incremental data: Call 
   * [updateData]{@link @ohos.multimedia.image:image.ImageSource.updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int)}
   * .
   * - Creating a PixelMap object: Call 
   * [createPixelMap]{@link @ohos.multimedia.image:image.ImageSource.createPixelMap(options?: DecodingOptions)} or 
   * [createPixelMap]{@link @ohos.multimedia.image:image.ImageSource.createPixelMap(options: DecodingOptions, callback: AsyncCallback<PixelMap>)}
   * to create a PixelMap object based on decoding options; call 
   * [createPixelMap]{@link @ohos.multimedia.image:image.ImageSource.createPixelMap(callback: AsyncCallback<PixelMap>)} 
   * to create a PixelMap object based on default parameters.
   * - Releasing an ImageSource instance: Call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)}.
   *
   * @param { ArrayBuffer } buf - Incremental data.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  function CreateIncrementalSource(buf: ArrayBuffer): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer in incremental.
   *
   * @param { ArrayBuffer } buf The buffer of the image.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createIncrementalSource(buf: ArrayBuffer): ImageSource | undefined;

  /**
   * Creates an ImageSource instance in incremental mode based on buffers. Such an instance does not support reading or 
   * writing of Exif information.
   * 
   * The capabilities supported by the ImageSource instance created by this API are the same as those supported by the 
   * instance created by 
   * [CreateIncrementalSource(buf: ArrayBuffer): ImageSource]{@link image.CreateIncrementalSource(buf: ArrayBuffer)}.
   * Images occupy a large amount of memory. When you finish using an ImageSource instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageSource.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @param { ArrayBuffer } buf - Incremental data.
   * @param { SourceOptions } options - Image properties, including the image pixel density, pixel format, and image
   *     size.
   * @returns { ImageSource } ImageSource instance. If the operation fails, undefined is returned.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @since 9 dynamic
   */
  function CreateIncrementalSource(buf: ArrayBuffer, options?: SourceOptions): ImageSource;

  /**
   * Creates an ImageSource instance based on the buffer in incremental.
   *
   * @param { ArrayBuffer } buf - The buffer of the image.
   * @param { SourceOptions } [options] - The config of source.
   * @returns { ImageSource | undefined } Returns the ImageSource instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 23 static
   */
  function createIncrementalSource(buf: ArrayBuffer, 
      options?: SourceOptions): ImageSource | undefined;

  /**
   * Creates an ImagePacker instance.
   * 
   * Images occupy a large amount of memory. When you finish using an ImagePacker instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImagePacker.release(callback: AsyncCallback<void>)} to free the memory
   * promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have 
   * finished and the instance is no longer needed.
   *
   * @returns { ImagePacker } ImagePacker instance created.
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function createImagePacker(): ImagePacker;

  /**
   * Creates an ImageReceiver instance by specifying the image width, height, format, and capacity. The ImageReceiver 
   * acts as the receiver and consumer of images. Its parameter properties do not actually affect the received images. 
   * The configuration of image properties should be done on the sending side (the producer), such as when creating a 
   * camera preview stream with 
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * .
   * Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageReceiver.release(callback: AsyncCallback<void>)} to free the 
   * memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the 
   * instance have finished and the instance is no longer needed.
   *
   * @param { number } width - Default image width, in px. This parameter does not affect the width of the received
   *     image. The actual width is determined by the producer, for example, the camera.
   * @param { number } height - Default image height, in px. This parameter does not affect the height of the received
   *     image. The actual height is determined by the producer, for example, the camera.
   * @param { number } format - Image format, which is a constant of
   *     [ImageFormat]{@link @ohos.multimedia.image:image.ImageFormat}. (Currently, only **ImageFormat:JPEG** is
   *     supported. The format actually returned is determined by the producer, for example, camera.)
   * @param { number } capacity - Maximum number of images that can be accessed at the same time. This parameter is used
   *     only as an expected value. The actual capacity is determined by the device hardware.
   * @returns { ImageReceiver } ImageReceiver instance.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead image.createImageReceiver(size: Size, format: ImageFormat, capacity: int)
   */
  function createImageReceiver(width: number, height: number, format: number, capacity: number): ImageReceiver;

  /**
   * Creates an ImageReceiver instance by specifying the image size, format, and capacity. The ImageReceiver acts as the
   * receiver and consumer of images. Its parameter properties do not actually affect the received images. The 
   * configuration of image properties should be done on the sending side (the producer), such as when creating a camera
   * preview stream with 
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * .
   * Images occupy a large amount of memory. When you finish using an ImageReceiver instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageReceiver.release(callback: AsyncCallback<void>)} to free the 
   * memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the 
   * instance have finished and the instance is no longer needed.
   *
   * @param { Size } size - Default size of the image. This parameter does not affect the size of the received image.
   *     The actual returned size is determined by the producer, for example, the camera.
   * @param { ImageFormat } format - Image format, which is a constant of
   *     [ImageFormat]{@link @ohos.multimedia.image:image.ImageFormat}. (Currently, only **ImageFormat:JPEG** is
   *     supported. The format actually returned is determined by the producer, for example, camera.)
   * @param { int } capacity - Maximum number of images that can be accessed at the same time. This parameter is used
   *     only as an expected value. The actual capacity is determined by the device hardware.
   * @returns { ImageReceiver } ImageReceiver instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 11 dynamic
   */
  function createImageReceiver(size: Size, format: ImageFormat, capacity: int): ImageReceiver;

  /**
   * Creates an ImageReceiver instance.
   *
   * @param { Size } size - The default {@link Size} in pixels of the Images that this receiver will produce.
   * @param { ImageFormat } format - The format of the Image that this receiver will produce. This must be one of the
   *     {@link ImageFormat} constants.
   * @param { int } capacity - The maximum number of images the user will want to access simultaneously.
   * @returns { ImageReceiver | undefined } Returns the ImageReceiver instance if the operation is successful;
   *     returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 23 static
   */
  function createImageReceiver(size: Size, format: ImageFormat, capacity: int): ImageReceiver | undefined;

  /**
   * Creates an ImageReceiver instance.
   *
   * @param { ImageReceiverOptions } [options] Initialization options for the ImageReceiver.
   * @returns { ImageReceiver | undefined } ImageReceiver instance created. If the operation fails, undefined is
   *     returned.
   * @throws { BusinessError } 7900201 - Invalid parameter.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createImageReceiver(options?: ImageReceiverOptions): ImageReceiver | undefined;

  /**
   * Creates an ImageCreator instance by specifying the image width, height, format, and capacity.
   * Images occupy a large amount of memory. When you finish using an ImageCreator instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageCreator#release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { number } width - Default image width, in px.
   * @param { number } height - Default image height, in px.
   * @param { number } format - Image format, for example, YCBCR_422_SP or JPEG.
   * @param { number } capacity - Maximum number of images that can be accessed at the same time. This parameter is used
   *     only as an expected value. The actual capacity is determined by the device hardware.
   * @returns { ImageCreator } ImageCreator instance.
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead image.createImageCreator(size: Size, format: ImageFormat, capacity: int)
   */
  function createImageCreator(width: number, height: number, format: number, capacity: number): ImageCreator;

  /**
   * Creates an ImageCreator instance by specifying the image size, format, and capacity.
   * Images occupy a large amount of memory. When you finish using an ImageCreator instance, call 
   * [release]{@link @ohos.multimedia.image:image.ImageCreator#release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @param { Size } size - Default size of the image.
   * @param { ImageFormat } format - Image format, for example, YCBCR_422_SP or JPEG.
   * @param { int } capacity - Maximum number of images that can be accessed at the same time. This parameter is used
   *     only as an expected value. The actual capacity is determined by the device hardware.
   * @returns { ImageCreator } ImageCreator instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types;
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 11 dynamic
   * @since 23 static
   */
  function createImageCreator(size: Size, format: ImageFormat, capacity: int): ImageCreator;

  /**
   * The **PixelMap** class provides APIs to read or write image data and obtain image information. Before calling any
   * API in PixelMap, you must use
   * [image.createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   * to create a PixelMap object. Currently, the maximum size of a serialized PixelMap is 128 MB. A larger size will
   * cause a display failure. The size is calculated as follows: Width x Height x
   * [Bytes per pixel]{@link @ohos.multimedia.image:image.PixelMapFormat}.
   * Since API version 11, PixelMap supports cross-thread calls through [Worker]{@link @ohos.worker}. If a PixelMap
   * object is invoked by another thread through [Worker]{@link @ohos.worker}, all APIs of the PixelMap object cannot be
   * called in the original thread. Otherwise, error 501 is reported, indicating that the server cannot complete the
   * request.
   * Before calling any API in PixelMap, you can use
   * [image.createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   * to pass pixel data to create a PixelMap object, or use [ImageSource]{@link @ohos.multimedia.image:image} to decode
   * an image to a PixelMap object.
   * To develop an atomic service, use [ImageSource]{@link @ohos.multimedia.image:image} to create a PixelMap object.
   * Images occupy a large amount of memory. When you finish using a PixelMap instance, call
   * [release]{@link image.PixelMap.release()} to free the memory promptly. Before releasing the instance, ensure that
   * all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface PixelMap {
    /**
     * Whether the image pixels are editable. **true** if editable, **false** otherwise. The value **false** provides
     * better image rendering and transmission performance.<br>
     * This API can be used in atomic services since API version 11.<br>
     * This API can be used in ArkTS widgets since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly isEditable: boolean;

    /**
     * Reads the pixels of this PixelMap object based on the PixelMap's pixel format and writes the data to the buffer.
     * This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } dst - Buffer to which the pixels will be written. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads the pixels of this PixelMap object based on the PixelMap's pixel format and writes the data to the buffer.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { ArrayBuffer } dst - Buffer to which the pixels will be written. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readPixelsToBuffer(dst: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads the pixels of this PixelMap object based on the PixelMap's pixel format and writes the data to the buffer.
     * This API returns the result synchronously.
     *
     * @param { ArrayBuffer } dst - Buffer to which the pixels will be written. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * Reads all the pixel data from the PixelMap and writes the data to a buffer.
     * The resulting data will be in the same pixel format as the PixelMap.
     *
     * @param { ArrayBuffer } dst - The buffer to receive the pixel data from the PixelMap.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: Size of the buffer is too small.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readAllPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads all the pixel data from the PixelMap and writes the data to a buffer.
     * The resulting data will be in the same pixel format as the PixelMap.
     *
     * @param { ArrayBuffer } dst - The buffer to receive the pixel data from the PixelMap.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: Size of the buffer is too small.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readAllPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * Reads the pixels in the area specified by [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region
     * of this PixelMap object in the BGRA_8888 format and writes the data to the
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels buffer. This API uses a promise to return
     * the result.
     * You can use a formula to calculate the size of the memory to be applied for based on **PositionArea**.
     * YUV region calculation formula: region to read (region.size{width * height}) * 1.5 (1 * Y component + 0.25 * U
     * component + 0.25 * V component)
     * RGBA region calculation formula: region to read (region.size{width * height}) * 4 (1 * R component + 1 * G
     * component + 1 * B component + 1 * A component)
     *
     * @param { PositionArea } area - Area from which the pixels will be read.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readPixels(area: PositionArea): Promise<void>;

    /**
     * Reads the pixels in the area specified by [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region
     * of this PixelMap object in the BGRA_8888 format and writes the data to the
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels buffer. This API uses an asynchronous
     * callback to return the result.
     * You can use a formula to calculate the size of the memory to be applied for based on **PositionArea**.
     * YUV region calculation formula: region to read (region.size{width * height}) * 1.5 (1 * Y component + 0.25 * U
     * component + 0.25 * V component)
     * RGBA region calculation formula: region to read (region.size{width * height}) * 4 (1 * R component + 1 * G
     * component + 1 * B component + 1 * A component)
     *
     * @param { PositionArea } area - Area from which the pixels will be read.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    readPixels(area: PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Reads the pixels in the area specified by [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region
     * of this PixelMap object in the BGRA_8888 format and writes the data to the
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels buffer. This API returns the result
     * synchronously.
     *
     * @param { PositionArea } area - Area from which the pixels will be read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    readPixelsSync(area: PositionArea): void;

    /**
     * Reads pixel data from a certain area of the PixelMap to a buffer. The resulting data will be in BGRA_8888 format.
     *
     * @param { PositionArea } area - Area of the PixelMap to read the data.
     *     Data will be read from the PixelMap and copied into PositionArea.pixels.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     *     Possible causes: 1. PositionArea.pixels is too small. 2. PositionArea.region is out of range.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readPixelsToArea(area: PositionArea): Promise<void>;

    /**
     * Reads pixel data from a certain area of the PixelMap to a buffer. The resulting data will be in BGRA_8888 format.
     *
     * @param { PositionArea } area - Area of the PixelMap to read the data.
     *     Data will be read from the PixelMap and copied into PositionArea.pixels.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     *     Possible causes: 1. PositionArea.pixels is too small. 2. PositionArea.region is out of range.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readPixelsToAreaSync(area: PositionArea): void;

    /**
     * Reads the pixels in the [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region buffer in the
     * BGRA_8888 format and writes the data to the area specified by
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels in this PixelMap object. This API uses a
     * promise to return the result.
     * You can use a formula to calculate the size of the memory to be applied for based on **PositionArea**.
     * YUV region calculation formula: region to read (region.size{width * height}) * 1.5 (1 * Y component + 0.25 * U
     * component + 0.25 * V component)
     * RGBA region calculation formula: region to read (region.size{width * height}) * 4 (1 * R component + 1 * G
     * component + 1 * B component + 1 * A component)
     *
     * @param { PositionArea } area - Area to which the pixels will be written.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    writePixels(area: PositionArea): Promise<void>;

    /**
     * Reads the pixels in the [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region buffer in the
     * BGRA_8888 format and writes the data to the area specified by
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels in this PixelMap object. This API uses an
     * asynchronous callback to return the result.
     * You can use a formula to calculate the size of the memory to be applied for based on **PositionArea**.
     * YUV region calculation formula: region to read (region.size{width * height}) * 1.5 (1 * Y component + 0.25 * U
     * component + 0.25 * V component)
     * RGBA region calculation formula: region to read (region.size{width * height}) * 4 (1 * R component + 1 * G
     * component + 1 * B component + 1 * A component)
     *
     * @param { PositionArea } area - Area to which the pixels will be written.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    writePixels(area: PositionArea, callback: AsyncCallback<void>): void;

    /**
     * Reads the pixels in the [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.region buffer in the
     * BGRA_8888 format and writes the data to the area specified by
     * [PositionArea]{@link @ohos.multimedia.image:image.PositionArea}.pixels in this PixelMap object. This API returns
     * the result synchronously.
     *
     * @param { PositionArea } area - Area to which the pixels will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    writePixelsSync(area: PositionArea): void;

    /**
     * Writes data from a buffer to a certain area of the PixelMap. The source data must be in BGRA_8888 format.
     *
     * @param { PositionArea } area - Area of the PixelMap to write the data.
     *     Data will be copied from PositionArea.pixels to the PixelMap.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is not editable or is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     *     Possible causes: 1. PositionArea.pixels is too small. 2. PositionArea.region is out of range.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    writePixelsFromArea(area: PositionArea): Promise<void>;

    /**
     * Writes data from a buffer to a certain area of the PixelMap. The source data must be in BGRA_8888 format.
     *
     * @param { PositionArea } area - Area of the PixelMap to write the data.
     *     Data will be copied from PositionArea.pixels to the PixelMap.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is not editable or is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     *     Possible causes: 1. PositionArea.pixels is too small. 2. PositionArea.region is out of range.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    writePixelsFromAreaSync(area: PositionArea): void;

    /**
     * Reads the pixels in the buffer based on the PixelMap's pixel format and writes the data to this PixelMap object.
     * This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } src - Buffer from which the pixels are read. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * Reads the pixels in the buffer based on the PixelMap's pixel format and writes the data to this PixelMap object.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { ArrayBuffer } src - Buffer from which the pixels are read. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the pixels in the buffer are
     *     successfully written to the PixelMap, **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    writeBufferToPixels(src: ArrayBuffer, callback: AsyncCallback<void>): void;

    /**
     * Reads the pixels in the buffer based on the PixelMap's pixel format and writes the data to this PixelMap object.
     * This API returns the result synchronously.
     *
     * @param { ArrayBuffer } src - Buffer from which the pixels are read. The buffer size is obtained by calling
     *     [getPixelBytesNumber]{@link image.PixelMap.getPixelBytesNumber}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    writeBufferToPixelsSync(src: ArrayBuffer): void;

    /**
     * Reads the pixel data from a buffer and writes the data to the PixelMap.
     * The source data must be in the same pixel format as the PixelMap.
     *
     * @param { ArrayBuffer } src - The buffer that contains pixel data to be written to the PixelMap.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is not editable or is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: Size of the buffer is too small.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    writeAllPixelsFromBuffer(src: ArrayBuffer): Promise<void>;

    /**
     * Reads the pixel data from a buffer and writes the data to the PixelMap.
     * The source data must be in the same pixel format as the PixelMap.
     *
     * @param { ArrayBuffer } src - The buffer that contains pixel data to be written to the PixelMap.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is not editable or is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: Size of the buffer is too small.
     * @throws { BusinessError } 7600302 - Failed to copy the memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    writeAllPixelsFromBufferSync(src: ArrayBuffer): void;

    /**
     * Convert pixelmap to standard dynamic range.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @throws { BusinessError } 62980137 - Invalid image operation.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    toSdr(): Promise<void>;

    /**
     * Obtains the image information of a PixelMap. This API uses a promise to return the result.
     *
     * @returns { Promise<ImageInfo> } Promise used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getImageInfo(): Promise<ImageInfo>;

    /**
     * Obtains the image information. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo> } callback - Callback used to return the result. If the operation is successful
     *     , **err** is **undefined** and **data** is the image information obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getImageInfo(callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains the image information. This API returns the result synchronously.
     *
     * @returns { ImageInfo } Image information.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getImageInfoSync(): ImageInfo;

    /**
     * Obtains the number of bytes per row of this image. Unit: bytes.
     *
     * @returns { int } Number of bytes per row.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getBytesNumberPerRow(): int;

    /**
     * Obtains the total number of bytes of this image. Unit: bytes.
     *
     * @returns { int } Total number of bytes.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    getPixelBytesNumber(): int;

    /**
     * Obtains the pixel density of this image. Unit: ppi (pixels/inch)
     *
     * @returns { int } Pixel density, in ppi.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getDensity(): int;

    /**
     * Sets opacity of the PixelMap. Every pixel will be set to the same opacity value.
     *
     * @param { double } value - The target opacity value to be set. Unit: Percentage, Value range: (0,1].
     *     The valid range is (0.0, 1.0] where 1.0 is fully opaque and becoming transparent as it approaches 0.0.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: The specified value is out of range.
     * @throws { BusinessError } 7600207 - Unsupported data format. Possible cause: Alpha type is not supported.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setOpacity(value: double): Promise<void>;

    /**
     * Sets opacity of the PixelMap. Every pixel will be set to the same opacity value.
     *
     * @param { double } value - The target opacity value to be set. Unit: Percentage, Value range: (0,1].
     *     The valid range is (0.0, 1.0] where 1.0 is fully opaque and becoming transparent as it approaches 0.0.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: The specified value is out of range.
     * @throws { BusinessError } 7600207 - Unsupported data format. Possible cause: Alpha type is not supported.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setOpacitySync(value: double): void;

    /**
     * Sets an opacity rate for this image. This API uses an asynchronous callback to return the result. It is invalid
     * for YUV images.
     *
     * @param { double } rate - Opacity rate. The value range is (0,1].
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    opacity(rate: double, callback: AsyncCallback<void>): void;

    /**
     * Sets an opacity rate for this image. It is invalid for YUV images. This API uses a promise to return the result.
     *
     * @param { double } rate - Opacity rate. The value range is (0,1].
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    opacity(rate: double): Promise<void>;

    /**
     * Sets an opacity rate for this image. This API returns the result synchronously. It is invalid for YUV images.
     *
     * @param { double } rate - Opacity rate. The value range is (0,1].
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    opacitySync(rate: double): void;

    /**
     * Extracts the alpha channel from the current PixelMap to create a new ALPHA_U8 format PixelMap.
     *
     * @returns { Promise<PixelMap> } A Promise of the new ALPHA_U8 format PixelMap.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The current PixelMap has been released.
     * @throws { BusinessError } 7600106 - The current PixelMap has been passed across threads.
     * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
     *     Possible cause: Current PixelMap data is corrupted.
     * @throws { BusinessError } 7600306 - Failed to convert the data.
     *     Possible causes: 1. Failed to perform pixel format conversion. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    extractAlphaPixelMap(): Promise<PixelMap>;

    /**
     * Extracts the alpha channel from the current PixelMap to create a new ALPHA_U8 format PixelMap.
     *
     * @returns { PixelMap } A new ALPHA_U8 format PixelMap.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The current PixelMap has been released.
     * @throws { BusinessError } 7600106 - The current PixelMap has been passed across threads.
     * @throws { BusinessError } 7600305 - Failed to create the PixelMap.
     *     Possible cause: Current PixelMap data is corrupted.
     * @throws { BusinessError } 7600306 - Failed to convert the data.
     *     Possible causes: 1. Failed to perform pixel format conversion. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    extractAlphaPixelMapSync(): PixelMap;

    /**
     * Creates a PixelMap object that contains only the alpha channel information. This object can be used for the
     * shadow effect. It is invalid for YUV images. This API uses a promise to return the result.
     *
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createAlphaPixelmap(): Promise<PixelMap>;

    /**
     * Creates a PixelMap object that contains only the alpha channel information. This object can be used for the
     * shadow effect. It is invalid for YUV images. This API returns the result through a callback.
     *
     * @param { AsyncCallback<PixelMap> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is undefined and **data** is the PixelMap object obtained; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createAlphaPixelmap(callback: AsyncCallback<PixelMap>): void;

    /**
     * Creates a PixelMap object that contains only the alpha channel information. This object can be used for the
     * shadow effect. This API returns the result synchronously. It is invalid for YUV images.
     *
     * @returns { PixelMap } PixelMap object. If the operation fails, an error is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    createAlphaPixelmapSync(): PixelMap;

    /**
     * Scales the PixelMap in the horizontal and/or vertical dimensions.
     *
     * @param { double } x - The scale ratio of width. Unit: Percentage.
     * @param { double } y - The scale ratio of height. Unit: Percentage.
     * @param { AntiAliasingLevel } [level] - The anti-aliasing algorithm to be used. Default value: NONE.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyScale(x: double, y: double, level?: AntiAliasingLevel): Promise<void>;

    /**
     * Scales the PixelMap in the horizontal and/or vertical dimensions.
     *
     * @param { double } x - The scale ratio of width. Unit: Percentage.
     * @param { double } y - The scale ratio of height. Unit: Percentage.
     * @param { AntiAliasingLevel } [level] - The anti-aliasing algorithm to be used. Default value: NONE.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyScaleSync(x: double, y: double, level?: AntiAliasingLevel): void;

    /**
     * Scales this image based on the scale factors of the width and height. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scale(x: double, y: double, callback: AsyncCallback<void>): void;

    /**
     * Scales this image based on the scale factors of the width and height. This API uses a promise to return the
     * result.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    scale(x: double, y: double): Promise<void>;

    /**
     * Scales this image based on the scale factors of the width and height. This API returns the result synchronously.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    scaleSync(x: double, y: double): void;

    /**
     * Scales this image based on the specified anti-aliasing level and the scale factors for the width and height. This
     * API uses a promise to return the result.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @param { AntiAliasingLevel } level - Anti-aliasing level.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    scale(x: double, y: double, level: AntiAliasingLevel): Promise<void>;

    /**
     * Scales this image based on the specified anti-aliasing level and the scale factors for the width and height. This
     * API returns the result synchronously.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @param { AntiAliasingLevel } level - Anti-aliasing level.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    scaleSync(x: double, y: double, level: AntiAliasingLevel): void;

    /**
     * Creates an image that has been resized based on the specified anti-aliasing level and the scale factors of the
     * width and height. This API uses a promise to return the result.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @param { AntiAliasingLevel } level - Anti-aliasing level. The default value is **AntiAliasingLevel.NONE**.
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    createScaledPixelMap(x: double, y: double, level?: AntiAliasingLevel): Promise<PixelMap>;

    /**
     * Creates an image that has been resized based on the specified anti-aliasing level and the scale factors of the
     * width and height. This API returns the result synchronously.
     *
     * @param { double } x - Scale factor of the width.
     * @param { double } y - Scale factor of the height.
     * @param { AntiAliasingLevel } level - Anti-aliasing level. The default value is **AntiAliasingLevel.NONE**.
     * @returns { PixelMap } PixelMap object. If the operation fails, an error is thrown.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    createScaledPixelMapSync(x: double, y: double, level?: AntiAliasingLevel): PixelMap;

    /**
     * Repositions the PixelMap in the horizontal and/or vertical directions.
     *
     * @param { double } x - The distance in pixels to move in the horizontal direction. Unit: px.
     * @param { double } y - The distance in pixels to move in the vertical direction. Unit: px.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyTranslate(x: double, y: double): Promise<void>;

    /**
     * Repositions the PixelMap in the horizontal and/or vertical directions.
     *
     * @param { double } x - The distance in pixels to move in the horizontal direction. Unit: px.
     * @param { double } y - The distance in pixels to move in the vertical direction. Unit: px.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyTranslateSync(x: double, y: double): void;

    /**
     * Translates this image based on given coordinates. This API uses an asynchronous callback to return the result.
     * The size of the translated image is changed to width+X and height+Y. It is recommended that the new width and
     * height not exceed the width and height of the screen.
     *
     * @param { double } x - X coordinate to translate, in px.
     * @param { double } y - Y coordinate to translate, in px.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    translate(x: double, y: double, callback: AsyncCallback<void>): void;

    /**
     * Translates a PixelMap based on given coordinates. This API uses a promise to return the result.
     * The size of the translated image is changed to width+X and height+Y. It is recommended that the new width and
     * height not exceed the width and height of the screen.
     *
     * @param { double } x - X coordinate to translate, in px.
     * @param { double } y - Y coordinate to translate, in px.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    translate(x: double, y: double): Promise<void>;

    /**
     * Translates this image based on given coordinates. This API returns the result synchronously.
     * The size of the translated image is changed to width+X and height+Y. It is recommended that the new width and
     * height not exceed the width and height of the screen.
     *
     * @param { double } x - X coordinate to translate, in px.
     * @param { double } y - Y coordinate to translate, in px.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    translateSync(x: double, y: double): void;

    /**
     * Rotates the PixelMap.
     *
     * Note: YUV format PixelMaps only support rotation angles that are multiples of 90 degrees.
     *
     * @param { double } angle - The rotation angle in degrees. Unit: Degree.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyRotate(angle: double): Promise<void>;

    /**
     * Rotates the PixelMap.
     *
     * Note: YUV format PixelMaps only support rotation angles that are multiples of 90 degrees.
     *
     * @param { double } angle - The rotation angle in degrees. Unit: Degree.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. The resulting PixelMap size is too large. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyRotateSync(angle: double): void;

    /**
     * Rotates this image based on a given angle. This API uses an asynchronous callback to return the result.
     *
     * @param { double } angle - Angle to rotate. Unit: degrees.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    rotate(angle: double, callback: AsyncCallback<void>): void;

    /**
     * Rotates a PixelMap based on a given angle. This API uses a promise to return the result.
     *
     * @param { double } angle - Angle to rotate. Unit: degrees.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    rotate(angle: double): Promise<void>;

    /**
     * Rotates this image based on a given angle. This API returns the result synchronously.
     *
     * @param { double } angle - Angle to rotate. Unit: degrees.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rotateSync(angle: double): void;

    /**
     * Flips the PixelMap in the horizontal and/or vertical directions.
     *
     * @param { boolean } horizontal - Whether to flip horizontally.
     * @param { boolean } vertical - Whether to flip vertically.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory. Possible cause: The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyFlip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * Flips the PixelMap in the horizontal and/or vertical directions.
     *
     * @param { boolean } horizontal - Whether to flip horizontally.
     * @param { boolean } vertical - Whether to flip vertically.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600301 - Failed to allocate memory. Possible cause: The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyFlipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * Flips this image horizontally or vertically, or both. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { boolean } horizontal - Whether to flip the image horizontally. **true** to flip the image horizontally,
     *     **false** otherwise.
     * @param { boolean } vertical - Whether to flip the image vertically. **true** to flip the image vertically,
     *     **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    flip(horizontal: boolean, vertical: boolean, callback: AsyncCallback<void>): void;

    /**
     * Flips a PixelMap based on a given angle. This API uses a promise to return the result.
     *
     * @param { boolean } horizontal - Whether to flip the image horizontally. **true** to flip the image horizontally,
     *     **false** otherwise.
     * @param { boolean } vertical - Whether to flip the image vertically. **true** to flip the image vertically,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    flip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * Flips this image horizontally or vertically, or both. This API returns the result synchronously.
     *
     * @param { boolean } horizontal - Whether to flip the image horizontally. **true** to flip the image horizontally,
     *     **false** otherwise.
     * @param { boolean } vertical - Whether to flip the image vertically. **true** to flip the image vertically,
     *     **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    flipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * Crops the PixelMap.
     *
     * @param { Region } region - The region to crop.
     * @returns { Promise<void> } A Promise that resolves when the operation completes.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600204 - The specified region is invalid or out of range.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. Failed to process pixel data. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyCrop(region: Region): Promise<void>;

    /**
     * Crops the PixelMap.
     *
     * @param { Region } region - The region to crop.
     * @throws { BusinessError } 7600104 - Failed to get image data.
     *     Possible cause: Internal data is corrupted. Please check the logs for detailed information.
     * @throws { BusinessError } 7600105 - The PixelMap has been released.
     * @throws { BusinessError } 7600106 - The PixelMap has been passed to another thread.
     * @throws { BusinessError } 7600201 - Unsupported operation because the PixelMap is locked.
     * @throws { BusinessError } 7600204 - The specified region is invalid or out of range.
     * @throws { BusinessError } 7600301 - Failed to allocate memory.
     *     Possible causes: 1. Failed to process pixel data. 2. The system is out of memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    applyCropSync(region: Region): void;

    /**
     * Crops this image based on a given size. This API uses an asynchronous callback to return the result.
     *
     * @param { Region } region - Size of the image after cropping. The value cannot exceed the width or height of the
     *     image.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    crop(region: Region, callback: AsyncCallback<void>): void;

    /**
     * Crops a PixelMap based on a given size. This API uses a promise to return the result.
     *
     * @param { Region } region - Size of the image after cropping. The value cannot exceed the width or height of the
     *     image.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    crop(region: Region): Promise<void>;

    /**
     * Crops this image based on a given size. This API returns the result synchronously.
     *
     * @param { Region } region - Size of the image after cropping. The value cannot exceed the width or height of the
     *     image.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cropSync(region: Region): void;

    /**
     * Obtains the color space of this image.
     *
     * @returns { colorSpaceManager.ColorSpaceManager } Color space obtained.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getColorSpace(): colorSpaceManager.ColorSpaceManager;

    /**
     * Marshals this PixelMap object and writes it to a MessageSequence object.
     *
     * @param { rpc.MessageSequence } sequence - MessageSequence object.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error. Possible cause: 1.IPC communication failed. 2. Image upload
     *     exception.
     *     3. Decode process exception. 4. Insufficient memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * Unmarshals a MessageSequence object to obtain a PixelMap object. To create a PixelMap object in synchronous mode,
     * use [createPixelMapFromParcel]{@link @ohos.multimedia.image:image.createPixelMapFromParcel}.
     *
     * @param { rpc.MessageSequence } sequence - MessageSequence object that stores the PixelMap information.
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error. Possible cause: 1.IPC communication failed. 2. Image upload
     *     exception.
     *     3. Decode process exception. 4. Insufficient memory.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    unmarshalling(sequence: rpc.MessageSequence): Promise<PixelMap>;

    /**
     * Set color space of pixel map.
     *
     * This method is only used to set the colorspace property of pixelmap, while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)} or
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager, AsyncCallback<void>)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for pixel map.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Set color space of pixel map.
     *
     * This method is only used to set the colorspace property of pixelmap, while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)} or
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager, AsyncCallback<void>)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for pixel map.
     * @throws { BusinessError } 62980111 - If the operation invalid.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Set color space of pixel map.
     *
     * This method is only used to set the colorspace property of pixelmap, while all pixel data remains the same after calling this method.
     * If you want to change colorspace for all pixels, use method {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager)} or
     * {@Link #applyColorSpace(colorSpaceManager.ColorSpaceManager, AsyncCallback<void>)}.
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace The color space for pixel map.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void;

    /**
     * Whether the row data of the image is memory aligned. The value **true** means that the row data is memory-aligned
     * , and there may be blank bytes padded at the end of each row to meet alignment requirements. The value **false**
     * means that the row data is not memory-aligned, and rows are packed contiguously with no padding bytes at the end.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 11 dynamic
     * @since 23 static
     */
    readonly isStrideAlignment: boolean;

    /**
     * Performs color space conversion (CSC) on the image pixel color based on a given color space. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - Target color space. SRGB, DCI_P3, DISPLAY_P3,
     *     and ADOBE_RGB_1998 are supported.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager, callback: AsyncCallback<void>): void;

    /**
     * Performs Color Space Converters (CSC) on the image pixel color based on a given color space. This API uses a
     * promise to return the result.
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - Target color space. SRGB, DCI_P3, DISPLAY_P3,
     *     and ADOBE_RGB_1998 are supported.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>;

    /**
     * The method is used for the transformation of the image formats. Pixel data will be changed by calling this method.
     *
     * @param { PixelMapFormat } targetPixelFormat - The pixel format for pixelmap conversion.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @throws { BusinessError } 62980115 - Invalid input parameter.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980274 - The conversion failed.
     * @throws { BusinessError } 62980276 - The type to be converted is an unsupported target pixel format.
     * @throws { BusinessError } 62980178 - Failed to create the pixelmap.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    convertPixelFormat(targetPixelFormat: PixelMapFormat): Promise<void>;

    /**
     * Releases this PixelMap instance. After the release, any attempt to access the internal data of this object will
     * fail. This API uses an asynchronous callback to return the result.
     * Images occupy a large amount of memory. When you finish using a PixelMap instance, call this API to free the
     * memory promptly.
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * > **NOTE**
     * >
     * > Release occurs when an ArkTS object relinquishes control over its associated native object. The memory occupied
     * > by the native object is reclaimed only after all managing ArkTS objects have relinquished their control.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this PixelMap instance. After the release, any attempt to access the internal data of this object will
     * fail. This API uses a promise to return the result.
     * Images occupy a large amount of memory. When you finish using a PixelMap instance, call this API to free the
     * memory promptly.
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * > **NOTE**
     * >
     * > Release occurs when an ArkTS object relinquishes control over its associated native object. The memory occupied
     * > by the native object is reclaimed only after all managing ArkTS objects have relinquished their control.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Sets whether to detach from the original thread when this PixelMap is transmitted across threads. This API
     * applies to the scenario where the PixelMap needs to be released immediately.
     *
     * @param { boolean } detached - Whether to detach from the original thread. **true** to detach, **false**
     *     otherwise.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    setTransferDetached(detached: boolean): void;

    /**
     * Obtains the value of the metadata with a given key in this PixelMap.
     *
     * @param { HdrMetadataKey } key - Key of the HDR metadata.
     * @returns { HdrMetadataValue } Value of the metadata with the given key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource unavailable.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980302 - Memory copy failed. Possibly caused by invalid metadata value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    getMetadata(key: HdrMetadataKey): HdrMetadataValue;

    /**
     * Sets a memory name for this PixelMap.
     *
     * @param { string } name - Memory name, which can be set only for a PixelMap with the DMA or ASHMEM memory format.
     *     The name length for DMA memory settings should be within the range of 1 to 255 bytes. For ASHMEM memory
     *     settings, the name length should be within the range of 1 to 244 bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.The length of the input parameter is too
     *     long.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource unavailable.
     * @throws { BusinessError } 62980286 - Memory format not supported.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setMemoryNameSync(name: string): void;

    /**
     * Copies this PixelMap object. This API returns the result synchronously.
     *
     * @returns { PixelMap } PixelMap object. If the operation fails, an error is thrown.
     * @throws { BusinessError } 501 - Resource unavailable.
     * @throws { BusinessError } 62980102 - Image malloc abnormal. This status code is thrown when an error occurs
     *     during the process of copying data.
     * @throws { BusinessError } 62980103 - Image YUV And ASTC types are not supported.
     * @throws { BusinessError } 62980104 - Image initialization abnormal.
     *     This status code is thrown when an error occurs during the process of creating empty pixelmap.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    cloneSync(): PixelMap;

    /**
     * Copies this PixelMap object. This API uses a promise to return the result.
     *
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @throws { BusinessError } 501 - Resource unavailable.
     * @throws { BusinessError } 62980102 - Image malloc abnormal. This status code is thrown when an error occurs
     *     during the process of copying data.
     * @throws { BusinessError } 62980103 - Image YUV And ASTC types are not supported.
     * @throws { BusinessError } 62980104 - Image initialization abnormal.
     *     This status code is thrown when an error occurs during the process of creating empty pixelmap.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    clone(): Promise<PixelMap>;

    /**
     * Sets the value for the metadata with a given key in this PixelMap. This API uses a promise to return the result.
     *
     * @param { HdrMetadataKey } key - Key of the HDR metadata.
     * @param { HdrMetadataValue } value - Value of the metadata.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource unavailable.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980302 - Memory copy failed. Possibly caused by invalid metadata value.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    setMetadata(key: HdrMetadataKey, value: HdrMetadataValue): Promise<void>;

    /**
     * Checks whether the PixelMap is released. If so, then any method call that accesses the object's internal data will fail.
     *
     * @returns { boolean } True if the PixelMap is released, false otherwise.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 22 dynamic
     * @since 23 static
     */
    isReleased(): boolean;

    /**
     * Obtains the unique ID of this PixelMap.
     *
     * @returns { int } Unique ID. The value is a positive integer.
     * @throws { BusinessError } 7600201 - The PixelMap has been released.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 22 dynamic
     * @since 23 static
     */
    getUniqueId(): int;

    /**
     * Creates a cropped and scaled PixelMap based on current PixelMap.
     *
     * @param { Region } region The region of the source pixelmap to be cropped.
     * @param { double } x The scale ratio of width.
     * @param { double } y The scale ratio of height.
     * @param { AntiAliasingLevel } [level] The anti-aliasing algorithm to be used.
     *     The default value is AntiAliasingLevel.NONE.
     * @returns { PixelMap } return the new cropped and scaled pixelmap.
     * @throws { BusinessError } 7600201 - The PixelMap has been released.
     * @throws { BusinessError } 7600204 - Invalid region.
     * @throws { BusinessError } 7600205 - Unsupported memory format or pixel format.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 22 dynamic
     * @since 23 static
     */
    createCroppedAndScaledPixelMapSync(region: Region, x: double, y: double, level?: AntiAliasingLevel): PixelMap;

    /**
     * Creates a cropped and scaled PixelMap based on current PixelMap.
     *
     * @param { Region } region The region of the source pixelmap to be cropped.
     * @param { double } x The scale ratio of width.
     * @param { double } y The scale ratio of height.
     * @param { AntiAliasingLevel } [level] The anti-aliasing algorithm to be used.
     *     The default value is AntiAliasingLevel.NONE.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 7600201 - The PixelMap has been released.
     * @throws { BusinessError } 7600204 - Invalid region.
     * @throws { BusinessError } 7600205 - Unsupported memory format or pixel format.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 22 dynamic
     * @since 23 static
     */
    createCroppedAndScaledPixelMap(region: Region, x: double, y: double, level?: AntiAliasingLevel): Promise<PixelMap>;
  }

  /**
   * Describes compose parameters.
   *
   * @typedef HdrComposeOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface HdrComposeOptions {
    /**
     * Pixel format used for composite image, RGBA_1010102\YCBCR_P010\YCRCB_P010 are supported.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    desiredPixelFormat?: PixelMapFormat;
  }

  /**
   * An image that contains special information can be decoded into a picture object, which generally contains the main 
   * picture, auxiliary picture, and metadata. The main picture contains most information about the image and is mainly 
   * used to render the image. The auxiliary picture is used to store data related to but different from the main 
   * picture, revealing more comprehensive details. The metadata is generally used to store information about the image 
   * file. The picture object class is used to read or write picture objects. Before calling any API in Picture, you 
   * must use [image.createPicture]{@link @ohos.multimedia.image:image.createPicture} to create a Picture object.
   * 
   * Images occupy a large amount of memory. When you finish using a Picture instance, call 
   * [release]{@link image.Picture.release} to free the memory promptly. Before releasing the instance, ensure that all 
   * asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface Picture {
    /**
     * Obtains the PixelMap object of the main picture. This API returns the result synchronously.
     *
     * @returns { PixelMap } PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getMainPixelmap(): PixelMap;

    /**
     * Obtains the pixel map of the main image.
     *
     * @returns { PixelMap | undefined } Returns the pixel map.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getMainPixelmap(): PixelMap | undefined;

    /**
     * Generates a High Dynamic Range (HDR) image and obtains its PixelMap object. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
     * @throws { BusinessError } 7600901 - Inner unknown error. Please check the logs for detailed information.
     * @throws { BusinessError } 7600201 - Unsupported operation. e.g.,1. The picture does not has a gainmap.
     *     2. MainPixelMap's allocator type is not DMA.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getHdrComposedPixelmap(): Promise<PixelMap>;

    /**
     * Obtains the hdr pixel map. This method uses a promise to return the PixelMap object.
     *
     * @returns { Promise<PixelMap | undefined> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 7600901 - Unknown error.
     * @throws { BusinessError } 7600201 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getHdrComposedPixelmap(): Promise<PixelMap | undefined>;

    /**
     * Composites an HDR image and returns PixelMap of the image. Composition options (such as PixelMapFormat) can be
     * passed. This API uses a promise to return the result.
     *
     * The Picture object that calls this API must contain the main picture, gain map, and metadata.
     *
     * @param { HdrComposeOptions } [options] - Options for HDR composition.
     * @returns { Promise<PixelMap | undefined> } Promise, which returns the PixelMap object or **undefined**.
     * @throws { BusinessError } 7600201 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>;

    /**
     * Obtains the PixelMap object of the gain map.
     *
     * @returns { PixelMap | null } PixelMap object obtained. If there is no PixelMap object, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    getGainmapPixelmap(): PixelMap | null;

    /**
     * Sets an auxiliary picture.
     *
     * @param { AuxiliaryPictureType } type - Type of the auxiliary picture.
     * @param { AuxiliaryPicture } auxiliaryPicture - AuxiliaryPicture object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void;

    /**
     * Obtains an auxiliary picture by type.
     *
     * @param { AuxiliaryPictureType } type - Type of the auxiliary picture.
     * @returns { AuxiliaryPicture | null } AuxiliaryPicture object. If there is no AuxiliaryPicture object, null is
     *     returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null;

    /**
     * Sets the metadata for this Picture object. This API uses a promise to return the result.
     *
     * @param { MetadataType } metadataType - Metadata type.
     * @param { Metadata } metadata - Metadata object.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>;

    /**
     * Obtains the metadata of this Picture object. This API uses a promise to return the result.
     *
     * @param { MetadataType } metadataType - Metadata type.
     * @returns { Promise<Metadata> } Promise used to return the metadata.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getMetadata(metadataType: MetadataType): Promise<Metadata>;

    /**
     * Obtains the metadata of main picture.
     *
     * @param { MetadataType } metadataType The type of metadata.
     * @returns { Promise<Metadata | undefined> } Return the metadata of main picture.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: Unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getMetadata(metadataType: MetadataType): Promise<Metadata | undefined>;

    /**
     * Marshals this Picture object and writes it to a MessageSequence object.
     *
     * @param { rpc.MessageSequence } sequence - MessageSequence object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 62980097 - IPC error. Possible cause: 1.IPC communication failed. 2. Image upload
     *     exception.
     *     3. Decode process exception. 4. Insufficient memory.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * Releases this Picture object.
     * 
     * Images occupy a large amount of memory. When you finish using a Picture instance, call this API to free the 
     * memory promptly.
     * 
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    release(): void;
  }

  /**
   * Creates a Picture object based on a main PixelMap.
   * 
   * Images occupy a large amount of memory. When you finish using a Picture instance, call 
   * [release]{@link @ohos.multimedia.image:image.Picture.release} to free the memory promptly. Before releasing the 
   * instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no
   * longer needed.
   *
   * @param { PixelMap } mainPixelmap - Main PixelMap.
   * @returns { Picture } Picture object.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  function createPicture(mainPixelmap : PixelMap): Picture;

  /**
   * Creates a Picture object based on an HDR PixelMap and an SDR PixelMap. The system uses the HDR PixelMap and SDR 
   * PixelMap to generate a gainmap. The returned Picture object contains the SDR PixelMap and the generated gainmap, 
   * both in RGBA8888 format. This API uses a promise to return the result.
   *
   * @param { PixelMap } hdrPixelMap - HDR PixelMap, with 16-bit or 10-bit depth, in FP16/RGBA1010102/YCBCR_P010 format,
   *     and BT2020_HLG color space.
   * @param { PixelMap } sdrPixelMap - SDR PixelMap, with 8-bit depth, in RGBA8888/NV21 format, and P3 color space.
   * @returns { Promise<Picture> } Picture object that contains the SDR PixelMap and gainmap, both in RGBA8888 format.
   * @throws { BusinessError } 7600201 - Unsupported operation. HdrPixelMap's PixelMapFormat is not
   *     RGBA_F16\RGBA_1010102\YCBCR_P010, or its color space is not BT2020_HLG. Or sdrPixelMap's PixelMapFormat is not
   *     RGBA_8888\NV21\NV12, or its color space is not P3.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createPictureByHdrAndSdrPixelMap(hdrPixelMap: PixelMap, sdrPixelMap: PixelMap): Promise<Picture>;

  /**
   * Creates a Picture object from a MessageSequence object.
   * 
   * Images occupy a large amount of memory. When you finish using a Picture instance, call 
   * [release]{@link @ohos.multimedia.image:image.Picture.release} to free the memory promptly. Before releasing the 
   * instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no
   * longer needed.
   *
   * @param { rpc.MessageSequence } sequence - MessageSequence object that stores the Picture information.
   * @returns { Picture } Picture object.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 62980097 - IPC error. Possible cause: 1.IPC communication failed. 2. Image upload
   *     exception.
   *     3. Decode process exception. 4. Insufficient memory.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  function createPictureFromParcel(sequence: rpc.MessageSequence): Picture;

  /**
   * Creates an AuxiliaryPicture instance based on the ArrayBuffer image data, auxiliary picture size, and auxiliary 
   * picture type. This API accepts only continuous pixel data in BGRA format and will create an auxiliary picture in 
   * RGBA format.
   * 
   * Images occupy a large amount of memory. When you finish using an AuxiliaryPicture instance, call 
   * [release]{@link @ohos.multimedia.image:image.AuxiliaryPicture.release} to free the memory promptly. Before 
   * releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the 
   * instance is no longer needed.
   *
   * @param { ArrayBuffer } buffer - Image data stored in the buffer.
   * @param { Size } size - Size of the auxiliary picture, in px.
   * @param { AuxiliaryPictureType } type - Type of the auxiliary picture.
   * @returns { AuxiliaryPicture } AuxiliaryPicture instance.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  function createAuxiliaryPicture(buffer: ArrayBuffer, size: Size, type: AuxiliaryPictureType): AuxiliaryPicture;


  /**
   * Create an <b>AuxiliaryPicture</b> object, the memory type used by the AuxiliaryPicture can be specified by
   * allocatorType {@link IMAGE_ALLOCATOR_TYPE}. By default, the system selects the memory type based on the image type,
   * image size, platform capability, etc. When processing the AuxiliaryPicture returned by this interface, please
   * always consider the impact of stride. The created auxiliary picture is initialized with the input pixels.
   *
   * @param { AuxiliaryPictureInfo } auxiliaryPictureInfo - The basic information of the auxiliary picture.
   * @param { AllocatorType } [allocatorType] - Memory type.
   * @param { ArrayBuffer } [pixels] - Pixel data used to initialize the auxiliary picture.
   * @returns { AuxiliaryPicture } The AuxiliaryPicture object.
   * @throws { BusinessError } 7600205 - Unsupported allocator type, e.g., use shared memory to create a gainmap as
   *     only DMA supported hdr metadata.
   * @throws { BusinessError } 7600206 - Invalid parameter, size.height or size.width is less than or equal to 0.
   * @throws { BusinessError } 7600301 - Alloc memory failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function createAuxiliaryPictureUsingAllocator(auxiliaryPictureInfo: AuxiliaryPictureInfo,
    allocatorType?: AllocatorType, pixels?: ArrayBuffer): AuxiliaryPicture;

  /**
   * The **AuxiliaryPicture** class is used to read or write auxiliary picture data of an image and obtain auxiliary 
   * picture information of an image. The supported types of auxiliary pictures can be found in 
   * [AuxiliaryPictureType]{@link @ohos.multimedia.image:image.AuxiliaryPictureType}.
   * 
   * Before calling any API in AuxiliaryPicture, you must create an AuxiliaryPicture instance using 
   * [image.createAuxiliaryPicture]{@link @ohos.multimedia.image:image.createAuxiliaryPicture} or 
   * [getAuxiliaryPicture]{@link @ohos.multimedia.image:image.Picture.getAuxiliaryPicture} in Picture.
   * 
   * Images occupy a large amount of memory. When you finish using an AuxiliaryPicture instance, call 
   * [release]{@link image.AuxiliaryPicture.release} to free the memory promptly. Before releasing the instance, ensure 
   * that all asynchronous operations associated with the instance have finished and the instance is no longer needed.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface AuxiliaryPicture {
    /**
     * Reads pixels from an ArrayBuffer and writes the data to this AuxiliaryPicture object. This API uses a promise to 
     * return the result.
     *
     * @param { ArrayBuffer } data - Pixels of the auxiliary picture.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    writePixelsFromBuffer(data: ArrayBuffer): Promise<void>;

    /**
     * Reads pixels of this auxiliary picture and writes the data to an ArrayBuffer. This API uses a promise to return 
     * the result.
     *
     * @returns { Promise<ArrayBuffer> } Promise used to return the pixels of the auxiliary picture.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    readPixelsToBuffer(): Promise<ArrayBuffer>;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer | undefined> } A Promise instance used to return the pixel map data.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    readPixelsToBuffer(): Promise<ArrayBuffer | undefined>;

    /**
     * Obtains the type of this auxiliary picture.
     *
     * @returns { AuxiliaryPictureType } Type of the auxiliary picture.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getType(): AuxiliaryPictureType;

    /**
     * Obtains the type of auxiliary picture.
     *
     * @returns { AuxiliaryPictureType | undefined } Returns the type of auxiliary picture.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getType(): AuxiliaryPictureType | undefined;

    /**
     * Sets the metadata for this auxiliary picture. This API uses a promise to return the result.
     *
     * @param { MetadataType } metadataType - Metadata type, which is used to set the corresponding metadata.
     * @param { Metadata } metadata - Metadata object.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>;

    /**
     * Obtains the metadata of this auxiliary picture. This API uses a promise to return the result.
     *
     * @param { MetadataType } metadataType - Metadata type, which is used to obtain metadata of the corresponding type.
     * @returns { Promise<Metadata> } Promise that returns the metadata.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getMetadata(metadataType: MetadataType): Promise<Metadata>;

    /**
     * Obtains the metadata of auxiliary picture.
     *
     * @param { MetadataType } metadataType The type of metadata.
     * @returns { Promise<Metadata | undefined> } Return the metadata of auxiliary picture.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getMetadata(metadataType: MetadataType): Promise<Metadata | undefined>;

    /**
     * Obtains the auxiliary picture information.
     *
     * @returns { AuxiliaryPictureInfo } Auxiliary picture information.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getAuxiliaryPictureInfo(): AuxiliaryPictureInfo;

    /**
     * Obtains the information about this auxiliary picture.
     *
     * @returns { AuxiliaryPictureInfo | undefined } Returns the auxiliary picture information. If the operation fails,
     *     an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getAuxiliaryPictureInfo(): AuxiliaryPictureInfo | undefined;

    /**
     * Sets the auxiliary picture information.
     *
     * @param { AuxiliaryPictureInfo } info - Auxiliary picture information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     *     2.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setAuxiliaryPictureInfo(info: AuxiliaryPictureInfo): void;

    /**
     * Releases this AuxiliaryPicture object. No value is returned.
     * 
     * Images occupy a large amount of memory. When you finish using an AuxiliaryPicture instance, call this API to free
     * the memory promptly.
     * 
     * Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished
     * and the instance is no longer needed.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    release():void;
  }

  /**
   * Enumerates the auxiliary pictures types.
   * 
   * Auxiliary pictures do not directly participate in image display, and not all images contain auxiliary pictures.
   * 
   * Before obtaining and using a specific auxiliary picture, call 
   * [getAuxiliaryPicture]{@link @ohos.multimedia.image:image.Picture.getAuxiliaryPicture} in Picture to obtain the 
   * auxiliary picture.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum AuxiliaryPictureType {
    /**
     * Gain map.
     * 
     * It is used to generate HDR images more accurately.
     * 
     * HDR synthesis usually involves using the SDR main image, gain map, and 
     * [HDR metadata]{@link @ohos.multimedia.image:image.PixelMap.getMetadata} to calculate the luminance mapping.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    GAINMAP = 1,

    /**
     * Depth map.
     * 
     * It is used to store the distance between each pixel and the camera, and provides the 3D structure of the scene.
     * 
     * It is useful for tasks like 3D reconstruction, background separation, and scene understanding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_MAP = 2,

    /**
     * Unrefocus map.
     * 
     * It is used to store the pixel content that is not refocused during capture.
     * 
     * It is useful for post-processing effects such as portrait blurring, allowing users to select focus areas freely.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    UNREFOCUS_MAP = 3,

    /**
     * Linear map.
     * 
     * It records lighting, color, or other visual elements linearly, providing additional data for image processing.
     * 
     * It is useful for visual effect enhancement and color post-processing.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    LINEAR_MAP = 4,

    /**
     * Fragment map.
     * 
     * It records areas of the original image obscured by watermarks. These areas might be cropped from the original 
     * image or filled with placeholder pixel data.
     * 
     * It is useful for watermark removal and original image restoration.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    FRAGMENT_MAP = 5,
  }

  /**
   * Enumerates image metadata types.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum MetadataType {
    /**
     * Exif data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    EXIF_METADATA = 1,

    /**
     * Fragment map metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    FRAGMENT_METADATA = 2,

    /**
     * GIF image metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_METADATA = 5,

    /**
     * Metadata of a HEIFS image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HEIFS_METADATA = 15,

    /**
     * Metadata of a DNG image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_METADATA = 16,

    /**
     * Metadata of a WebP image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WEBP_METADATA = 17,

     /**
     * Metadata of a PNG image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
     PNG_METADATA = 19,

     /**
      * Metadata of a JFIF image.
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     JFIF_METADATA = 20,
 
     /**
      * Metadata of a TIFF image.
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     TIFF_METADATA = 21,

    /**
     * XMP metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XMP_METADATA = 22,

    /**
     * Metadata of a Avis image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AVIS_METADATA = 23
  }

  /**
   * The **Metadata** class provides APIs for storing image metadata. For details about the supported metadata types, 
   * see [MetadataType]{@link @ohos.multimedia.image:image.MetadataType}.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface Metadata {
    /**
     * Obtains the values of properties from the image's metadata. This API uses a promise to return the result.
     * For details about how to query the property values, see 
     * [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}, 
     * [FragmentMapPropertyKey]{@link @ohos.multimedia.image:image.FragmentMapPropertyKey}, 
     * [GifPropertyKey]{@link @ohos.multimedia.image:image.GifPropertyKey}, and 
     * [HeifsPropertyKey]{@link @ohos.multimedia.image:image.HeifsPropertyKey}.
     *
     * @param { Array<string> } key - Names of the properties.
     * @returns { Promise<Record<string, string | null>> } Promise used to return the property values. If the operation
     *     fails, an error code is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * Sets the values of properties for the image's metadata. This API uses a promise to return the result.
     * 
     * For details about how to query the property values, see 
     * [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}, 
     * [FragmentMapPropertyKey]{@link @ohos.multimedia.image:image.FragmentMapPropertyKey}, 
     * [GifPropertyKey]{@link @ohos.multimedia.image:image.GifPropertyKey}, and 
     * [HeifsPropertyKey]{@link @ohos.multimedia.image:image.HeifsPropertyKey}.
     *
     * @param { Record<string, string | null> } records - Array of properties and their values.
     * @returns { Promise<void> } Promise that returns no value. If the operation fails, an error code is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     *     metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * Obtains all properties and values from the image's metadata. This API uses a promise to return the result.
     * 
     * For details about how to query the property values, see 
     * [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}, 
     * [FragmentMapPropertyKey]{@link @ohos.multimedia.image:image.FragmentMapPropertyKey}, 
     * [GifPropertyKey]{@link @ohos.multimedia.image:image.GifPropertyKey}, and 
     * [HeifsPropertyKey]{@link @ohos.multimedia.image:image.HeifsPropertyKey}.
     *
     * @returns { Promise<Record<string, string | null>> } Promise used to return the values of all properties.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * Obtains the value of all properties in an image. This method uses a promise to return the property values
     * in array of records.
     *
     * @returns { Promise<Record<string, string | null> | undefined> } Array of Records instance used to
     *     return the property values.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    getAllProperties(): Promise<Record<string, string|null> | undefined>;

    /**
     * Clones the metadata. This API uses a promise to return the result.
     *
     * @returns { Promise<Metadata> } Promise used to return the metadata instance.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     */
    clone(): Promise<Metadata>;

    /**
     * Obtains a clone of metadata. This method uses a promise to return the metadata.
     *
     * @returns { Promise<Metadata | undefined> } A Promise instance used to return the metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 23 static
     */
    clone(): Promise<Metadata | undefined>;

    /**
     * Obtains the metadata in binary format. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> } Promise that returns the binary data of the metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
  
    /**
     * Replaces the current metadata with binary data. This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } blob - Binary data used to replace the metadata.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * Enumerates the fragment map information.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum FragmentMapPropertyKey {
    /**
     * X coordinate of the top-left corner of the fragment map in the original image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    X_IN_ORIGINAL = 'XInOriginal',

    /**
     * Y coordinate of the top-left corner of the fragment map in the original image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    Y_IN_ORIGINAL = 'YInOriginal',

    /**
     * Width of the fragment map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    WIDTH = 'FragmentImageWidth',

    /**
     * Height of the fragment map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    HEIGHT = 'FragmentImageHeight'
  }

  /**
   * Enumerates the GIF image information.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum GifPropertyKey {
    /**
     * Duration for playing each frame of a GIF image, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_DELAY_TIME = 'GifDelayTime',

    /**
     * Disposal type of each frame in a GIF image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_DISPOSAL_TYPE = 'GifDisposalType',

    /**
     * Whether the GIF image has a global color map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_HAS_GLOBAL_COLOR_MAP = 'GifHasGlobalColorMap',

    /**
     * Canvas width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_CANVAS_WIDTH = 'GifCanvasWidth',

    /**
     * Canvas height.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_CANVAS_HEIGHT = 'GifCanvasHeight',

    /**
     * Loop count.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_LOOP_COUNT = 'GifLoopCount',

    /**
     * Unclamped delay of each frame in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_UNCLAMPED_DELAY_TIME = 'GifUnclampedDelayTime'

  }

  /**
   * Enumerates the properties available for the metadata of a HEIFS image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum HeifsPropertyKey {
    /**
     * Playback duration of each frame in an HEIF image sequence, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HEIFS_DELAY_TIME = 'HeifsDelayTime',

    /**
     * Unclamped delay of each frame in milliseconds.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_UNCLAMPED_DELAY_TIME = 'HeifsUnclampedDelayTime',

    /**
     * Canvas height.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_CANVAS_HEIGHT = 'HeifsCanvasHeight',

    /**
     * Canvas width.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_CANVAS_WIDTH = 'HeifsCanvasWidth'
  }

  /**
   * Enumerates the properties available for the metadata of a DNG image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum DngPropertyKey {
    /**
     * The DNG version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_VERSION = 'DNGVersion',

    /**
     * The DNG backward version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_BACKWARD_VERSION = 'DNGBackwardVersion',

    /**
     * A unique camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNIQUE_CAMERA_MODEL = 'UniqueCameraModel',

    /**
     * A localized camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LOCALIZED_CAMERA_MODEL = 'LocalizedCameraModel',

    /**
     * The CFA (color filter array) plane color.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CFA_PLANE_COLOR = 'CFAPlaneColor',

    /**
     * The CFA (color filter array) layout.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CFA_LAYOUT = 'CFALayout',

    /**
     * The linearization table.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LINEARIZATION_TABLE = 'LinearizationTable',

    /**
     * The black level repeat dimension.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_REPEAT_DIM = 'BlackLevelRepeatDim',

    /**
     * The zero light encoding level.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL = 'BlackLevel',

    /**
     * The black level delta H.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_DELTA_H = 'BlackLevelDeltaH',

    /**
     * The black level delta V.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_DELTA_V = 'BlackLevelDeltaV',

    /**
     * The white level.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WHITE_LEVEL = 'WhiteLevel',

    /**
     * The default scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_SCALE = 'DefaultScale',

    /**
     * The default crop origin.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_CROP_ORIGIN = 'DefaultCropOrigin',

    /**
     * The default crop size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_CROP_SIZE = 'DefaultCropSize',

    /**
     * A transformation matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLOR_MATRIX1 = 'ColorMatrix1',

    /**
     * A transformation matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLOR_MATRIX2 = 'ColorMatrix2',

    /**
     * A calibration matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION1 = 'CameraCalibration1',

    /**
     * A calibration matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION2 = 'CameraCalibration2',

    /**
     * A dimensionality reduction matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    REDUCTION_MATRIX1 = 'ReductionMatrix1',

    /**
     * A dimensionality reduction matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    REDUCTION_MATRIX2 = 'ReductionMatrix2',

    /**
     * The analog balance.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALOG_BALANCE = 'AnalogBalance',

    /**
     * The as-shot neutral.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_NEUTRAL = 'AsShotNeutral',

    /**
     * The as-shot white, encoded as X‑Y chromaticity coordinates.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_WHITEXY = 'AsShotWhiteXY',

    /**
     * The baseline exposure.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_EXPOSURE = 'BaselineExposure',

    /**
     * The baseline noise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_NOISE = 'BaselineNoise',

    /**
     * The baseline sharpness.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_SHARPNESS = 'BaselineSharpness',

    /**
     * The Bayer green split.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BAYER_GREEN_SPLIT = 'BayerGreenSplit',

    /**
     * The linear response limit.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LINEAR_RESPONSE_LIMIT = 'LinearResponseLimit',

    /**
     * The serial number of the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_SERIAL_NUMBER = 'CameraSerialNumber',

    /**
     * Information about the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LENS_INFO = 'LensInfo',

    /**
     * The chroma blur radius.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CHROMA_BLUR_RADIUS = 'ChromaBlurRadius',

    /**
     * The anti-alias strength.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANTI_ALIAS_STRENGTH = 'AntiAliasStrength',

    /**
     * The shadow scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SHADOW_SCALE = 'ShadowScale',

    /**
     * The private data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_PRIVATE_DATA = 'DNGPrivateData',

    /**
     * Whether the EXIF MakerNote tag is safe.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MAKER_NOTE_SAFETY = 'MakerNoteSafety',

    /**
     * The first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CALIBRATION_ILLUMINANT1 = 'CalibrationIlluminant1',

    /**
     * The second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CALIBRATION_ILLUMINANT2 = 'CalibrationIlluminant2',

    /**
     * The best quality scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BEST_QUALITY_SCALE = 'BestQualityScale',

    /**
     * The unique identifier of raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_DATA_UNIQUE_ID = 'RawDataUniqueID',

    /**
     * The original raw file name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_NAME = 'OriginalRawFileName',

    /**
     * The original raw file data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_DATA = 'OriginalRawFileData',

    /**
     * The active area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ACTIVE_AREA = 'ActiveArea',

    /**
     * The masked areas.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MASKED_AREAS = 'MaskedAreas',

    /**
     * An ICC profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_ICC_PROFILE = 'AsShotICCProfile',

    /**
     * The as-shot pre-profile matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_PRE_PROFILE_MATRIX = 'AsShotPreProfileMatrix',

    /**
     * The current ICC profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CURRENT_ICC_PROFILE = 'CurrentICCProfile',

    /**
     * The current pre-profile matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CURRENT_PRE_PROFILE_MATRIX = 'CurrentPreProfileMatrix',

    /**
     * The colorimetric reference.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLORIMETRIC_REFERENCE = 'ColorimetricReference',

    /**
     * The camera calibration signature.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION_SIGNATURE = 'CameraCalibrationSignature',

    /**
     * The profile calibration signature.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_CALIBRATION_SIGNATURE = 'ProfileCalibrationSignature',

    /**
     * The extra camera profiles.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    EXTRA_CAMERA_PROFILES = 'ExtraCameraProfiles',

    /**
     * The "as-shot" camera profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_PROFILE_NAME = 'AsShotProfileName',

    /**
     * The applied noise reduction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NOISE_REDUCTION_APPLIED = 'NoiseReductionApplied',

    /**
     * The profile name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_NAME = 'ProfileName',

    /**
     * The profile hue/saturation map dimensions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DIMS = 'ProfileHueSatMapDims',

    /**
     * The first hue/saturation mapping table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DATA1 = 'ProfileHueSatMapData1',

    /**
     * The second hue/saturation mapping table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DATA2 = 'ProfileHueSatMapData2',

    /**
     * The profile tone curve.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_TONE_CURVE = 'ProfileToneCurve',

    /**
     * The profile embed policy.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_EMBED_POLICY = 'ProfileEmbedPolicy',

    /**
     * The profile copyright.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_COPYRIGHT = 'ProfileCopyright',

    /**
     * The first forward matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FORWARD_MATRIX1 = 'ForwardMatrix1',

    /**
     * The second forward matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FORWARD_MATRIX2 = 'ForwardMatrix2',

    /**
     * The preview application name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_APPLICATION_NAME = 'PreviewApplicationName',

    /**
     * The preview application version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_APPLICATION_VERSION = 'PreviewApplicationVersion',

    /**
     * The preview settings name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_SETTINGS_NAME = 'PreviewSettingsName',

    /**
     * The preview settings digest.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_SETTINGS_DIGEST = 'PreviewSettingsDigest',

    /**
     * The preview color space.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_COLOR_SPACE = 'PreviewColorSpace',

    /**
     * The preview date time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_DATE_TIME = 'PreviewDateTime',

    /**
     * An MD5 digest of the raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_IMAGE_DIGEST = 'RawImageDigest',

    /**
     * An MD5 digest of the data stored in the OriginalRawFileData.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_DIGEST = 'OriginalRawFileDigest',

    /**
     * The sub‑tile block size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SUB_TILE_BLOCK_SIZE = 'SubTileBlockSize',

    /**
     * The row interleave factor.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ROW_INTERLEAVE_FACTOR = 'RowInterleaveFactor',

    /**
     * The profile look table dimensions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_DIMS = 'ProfileLookTableDims',

    /**
     * The profile look table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_DATA = 'ProfileLookTableData',

    /**
     * The first opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST1 = 'OpcodeList1',

    /**
     * The second opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST2 = 'OpcodeList2',

    /**
     * The third opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST3 = 'OpcodeList3',

    /**
     * The noise profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NOISE_PROFILE = 'NoiseProfile',

    /**
     * The original default final size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_DEFAULT_FINAL_SIZE = 'OriginalDefaultFinalSize',

    /**
     * The original best quality final size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_BEST_QUALITY_FINAL_SIZE = 'OriginalBestQualityFinalSize',

    /**
     * The original default crop size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_DEFAULT_CROP_SIZE = 'OriginalDefaultCropSize',

    /**
     * The profile hue/saturation map encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_ENCODING = 'ProfileHueSatMapEncoding',

    /**
     * The profile look table encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_ENCODING = 'ProfileLookTableEncoding',

    /**
     * The baseline exposure offset.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_EXPOSURE_OFFSET = 'BaselineExposureOffset',

    /**
     * The default black render.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_BLACK_RENDER = 'DefaultBlackRender',

    /**
     * A modified MD5 digest of the raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NEW_RAW_IMAGE_DIGEST = 'NewRawImageDigest',

    /**
     * The gain between the main raw IFD and the preview IFD.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_TO_PREVIEW_GAIN = 'RawToPreviewGain',

    /**
     * The default user crop.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_USER_CROP = 'DefaultUserCrop',
  }

  /**
   * Enumerates the properties available for the metadata of a TIFF image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TiffPropertyKey {    
    /**
     * Compression scheme used for image data (e.g., None, LZW, JPEG, Deflate).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPRESSION = 'TiffCompression',

    /**
     * Defines how pixel colors are interpreted (e.g., RGB, grayscale).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PHOTOMETRIC_INTERPRETATION = 'TiffPhotometricInterpretation',

    /**
     * Tone transfer curve mapping pixel values to output intensity.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TRANSFER_FUNCTION = 'TiffTransferFunction',

    /**
     * Indicates image orientation for correct display rotation/flip.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION = 'TiffOrientation',

    /**
     * Horizontal resolution (pixels per resolution unit).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    X_RESOLUTION = 'TiffXResolution',

    /**
     * Vertical resolution (pixels per resolution unit).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    Y_RESOLUTION = 'TiffYResolution',

    /**
     * Unit for X/Y resolution.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RESOLUTION_UNIT = 'TiffResolutionUnit',

    /**
     * Chromaticity coordinates of the reference white point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WHITE_POINT = 'TiffWhitePoint',

    /**
     * Chromaticity coordinates of the RGB primaries.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRIMARY_CHROMATICITIES = 'TiffPrimaryChromaticities',

    /**
     * Height of each image tile in pixels.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TILE_LENGTH = 'TiffTileLength',

    /**
     * Width of each image tile in pixels.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TILE_WIDTH = 'TiffTileWidth',

    /**
     * Name of the document or image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DOCUMENT_NAME = 'TiffDocumentName',

    /**
     * Description of the image content.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IMAGE_DESCRIPTION = 'TiffImageDescription',

    /**
     * Name of the image creator or artist.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ARTIST = 'TiffArtist',

    /**
     * Copyright notice for the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COPYRIGHT = 'TiffCopyright',

    /**
     * Date and time associated with the image (typically last modification).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATE_TIME = 'TiffDateTime',

    /**
     * Manufacturer of the capture device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MAKE = 'TiffMake',

    /**
     * Model name/number of the capture device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODEL = 'TiffModel',

    /**
     * Software used to create or process the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SOFTWARE = 'TiffSoftware',

    /**
     * Host computer/system used for image processing.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HOST_COMPUTER = 'TiffHostComputer'
  }

  /**
   * Enumerates the properties available for the metadata of a JFIF image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum JfifPropertyKey {  
    /**
     * JFIF x density.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    X_DENSITY = 'JfifXDensity',

    /**
     * JFIF y density.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    Y_DENSITY = 'JfifYDensity',

    /**
     * JFIF density unit.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DENSITY_UNIT = 'JfifDensityUnit',

    /**
     * JFIF version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VERSION = 'JfifVersion',

    /**
     * whether the JFIF image is progressive.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IS_PROGRESSIVE = 'JfifIsProgressive'
  }

  /**
   * Enumerates the properties available for the metadata of a PNG image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PngPropertyKey {  
    /**
     * PNG x pixels per meter.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    X_PIXELS_PER_METER = 'PngXPixelsPerMeter',

    /**
     * PNG y pixels per meter.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    Y_PIXELS_PER_METER = 'PngYPixelsPerMeter',
	
    /**
     * PNG gamma.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GAMMA = 'PngGamma',

    /**
     * PNG interlacing mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INTERLACE_TYPE = 'PngInterlaceType',
	
    /**
     * PNG sRGB rendering intent.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SRGB_INTENT = 'PngSRGBIntent',
	
    /**
     * PNG color primary/white-point coordinates.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CHROMATICITIES = 'PngChromaticities',
	
    /**
     * PNG title.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TITLE = 'PngTitle',
	
    /**
     * PNG description.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DESCRIPTION = 'PngDescription',
	
    /**
     * PNG comment.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMMENT = 'PngComment',
	
    /**
     * PNG disclaimer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DISCLAIMER = 'PngDisclaimer',
	
    /**
     * PNG warning.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WARNING = 'PngWarning',
	
    /**
     * PNG author.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AUTHOR = 'PngAuthor',
	
    /**
     * PNG copyright.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COPYRIGHT = 'PngCopyright',
	
    /**
     * PNG creation time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CREATION_TIME = 'PngCreationTime',
	
    /**
     * PNG modification time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODIFICATION_TIME = 'PngModificationTime',
	
    /**
     * PNG software.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SOFTWARE = 'PngSoftware',
  }

  /**
   * HeifsMetadata implements Metadata
   * 
   * HEIF image sequence metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class HeifsMetadata implements Metadata {  
    /**
     * Playback duration of each frame in an HEIF image sequence, in ms.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly heifsDelayTime?: int;

    /**
     * Canvas height.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsCanvasHeight?: int;

    /**
     * Canvas width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsCanvasWidth?: int;

    /**
     * Unclamped delay of each frame in ms.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsUnclampedDelayTime?: int;

    /**
     * Creates an empty [HeifsMetadata]{@link @ohos.multimedia.image:image.HeifsMetadata} instance.
     *
     * @returns { HeifsMetadata } Empty **HeifsMetadata** instance.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): HeifsMetadata;

    /**
     * Obtains the property values of image metadata. This API returns the result asynchronously through a promise.
     *
     * @param { Array<string> } key - Names of the properties to query.
     * @returns { Promise<Record<string, string | null>> } Promise used to return the property values. If the operation
     *     fails, an error code is returned.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * Sets the values of specified properties in image metadata in batches. This API returns the result asynchronously 
     * through a promise.
     * 
     * For details about the properties, see 
     * [HeifsPropertyKey]{@link @ohos.multimedia.image:image.HeifsPropertyKey}.
     *
     * @param { Record<string, string | null> } records - Set of key-value pairs representing the **HeifsMetadata**
     *     properties and corresponding values.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * Obtains all properties and their values from the image metadata. This API returns the result asynchronously 
     * through a promise.
     * 
     * For details about the properties, see 
     * [HeifsPropertyKey]{@link @ohos.multimedia.image:image.HeifsPropertyKey}.
     *
     * @returns { Promise<Record<string, string | null>> } Promise used to return the values of all properties.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * Clones the HEIFS metadata. This API returns the result asynchronously through a promise.
     *
     * @returns { Promise<HeifsMetadata> } Promise used to return the HEIFS metadata instance.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<HeifsMetadata>;

    /**
     * Obtains the metadata in binary format. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> } Promise that returns the binary data of the metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;

    /**
     * Replaces the current metadata with binary data. This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } blob - Binary data used to replace the metadata.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * JFIF metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class JfifMetadata {  
    /**
     * JFIF x density.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly xDensity?: int;

    /**
     * JFIF y density.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly yDensity?: int;

    /**
     * JFIF density unit.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly densityUnit?: int;

    /**
     * JFIF version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly version?: int[];

    /**
     * whether the JFIF image is progressive.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly isProgressive?: boolean;
  }

  /**
   * Gif metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class GifMetadata {
    /**
     * Delay of each frame in milliseconds.
     * Unit: ms, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly delayTime?: int;

    /**
     * Unclamped delay of each frame in milliseconds.
     * Unit: ms, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly unclampedDelayTime?: int;

    /**
     * whether the GIF image has a global color map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly hasGlobalColorMap?: boolean;

    /**
     * Loop count.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly loopCount?: int;

    /**
     * Disposal type of each frame in the image.
     * 0 - No disposal specified.
     * 1 - Do not dispose.
     * 2 - Restore to background color.
     * 3 - Restore to previous.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly disposalType?: int;

    /**
     * Canvas height.
     * Unit: px, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly canvasHeight?: int;

    /**
     * Canvas width.
     * Unit: px, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly canvasWidth?: int;
  }


  /**
   * TIFF metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class TiffMetadata {  
    /**
     * Compression scheme used for image data (e.g., None, LZW, JPEG, Deflate).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly compression?: int;

    /**
     * Defines how pixel colors are interpreted (e.g., RGB, grayscale).
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly photometricInterpretation?: int;

    /**
     * Tone transfer curve mapping pixel values to output intensity.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly transferFunction?: string;

    /**
     * Indicates image orientation for correct display rotation/flip.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly orientation?: Orientation;

    /**
     * Horizontal resolution (pixels per resolution unit).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly xResolution?: double;

    /**
     * Vertical resolution (pixels per resolution unit).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly yResolution?: double;

    /**
     * Unit for X/Y resolution.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly resolutionUnit?: int;

    /**
     * Chromaticity coordinates of the reference white point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly whitePoint?: double[];

    /**
     * Chromaticity coordinates of the RGB primaries.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly primaryChromaticities?: double[];

    /**
     * Height of each image tile in pixels.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly tileLength?: int;

    /**
     * Width of each image tile in pixels.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly tileWidth?: int;

    /**
     * Name of the document or image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly documentName?: string;

    /**
     * Description of the image content.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly imageDescription?: string;

    /**
     * Name of the image creator or artist.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly artist?: string;

    /**
     * Copyright notice for the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly copyright?: string;

    /**
     * Date and time associated with the image (typically last modification).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly dateTime?: string;

    /**
     * Manufacturer of the capture device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly make?: string;

    /**
     * Model name/number of the capture device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly model?: string;

    /**
     * Software used to create or process the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly software?: string;

    /**
     * Host computer/system used for image processing.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly hostComputer?: string;
  }

  /**
   * Png metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class PngMetadata {
    /**
     * PNG x pixels per meter.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly xPixelsPerMeter?: int;
	
    /**
     * PNG y pixels per meter.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly yPixelsPerMeter?: int;
	
    /**
     * PNG gamma.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly gamma?: double;
	
    /**
     * PNG interlacing mode.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly interlaceType?: int;
	
    /**
     * PNG sRGB rendering intent.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly sRGBIntent?: int;
	
    /**
     * PNG color primary/white-point coordinates.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly chromaticities?: double[];
	
    /**
     * PNG title.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly title?: string;
	
    /**
     * PNG description.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly description?: string;
	
    /**
     * PNG comment.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly comment?: string;
	
    /**
     * PNG disclaimer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly disclaimer?: string;
	
    /**
     * PNG warning.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly warning?: string;
	
    /**
     * PNG author.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly author?: string;

    /**
     * PNG copyright.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly copyright?: string;

    /**
     * PNG creation time.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly creationTime?: string;

    /**
     * PNG modification time.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly modificationTime?: string;

    /**
     * PNG software.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly software?: string;
  }

  /**
   * Enumerates image orientation.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum Orientation {  
    /**
     * The image is not rotated.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOP_LEFT = 1,

    /**
     * The image is mirrored horizontally.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 2,

    /**
     * The image is rotated 180 degrees.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT = 3,

    /**
     * The image is mirrored vertically.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT = 4,

    /**
     * The image is mirrored horizontally, then rotated 270 degrees clockwise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LEFT_TOP = 5,

    /**
     * The image is rotated 90 degrees clockwise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RIGHT_TOP = 6,

    /**
     * The image is mirrored horizontally, then rotated 90 degrees clockwise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RIGHT_BOTTOM = 7,

    /**
     * The image is rotated 270 degrees clockwise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LEFT_BOTTOM = 8
  }

  /**
   * ExifMetadata implements Metadata
   * 
   * Exchangeable Image File Format (Exif) metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class ExifMetadata implements Metadata {  
    /**
     * Data type of a subfile (for example, basic types such as text or image, rather than specific storage formats).
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    newSubfileType?: int;

    /**
     * Data type of a subfile. It has been deprecated. Use **newSubfileType** instead.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subfileType?: int;
 
    /**
     * Image width. The unit is px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageWidth?: int;

    /**
     * Image length. The unit is px.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageLength?: int;

    /**
     * Number of bits for each pixel component. For example, RGB has 3 components with a format of 8,8,8.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bitsPerSample?: int[];

    /**
     * Algorithm standard for image compression.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compression?: int;

    /**
     * Pixel composition, such as RGB (Red, Green, Blue) and YCbCr (Luma, Blue-difference Chroma, Red-difference Chroma)
     * .
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photometricInterpretation?: int;

    /**
     * Image description.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageDescription?: string;

    /**
     * Manufacturer name of the capture device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    make?: string;

    /**
     * Camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    model?: string;

    /**
     * Strip storage offset of the image data, in bytes.
     * To improve the efficiency of large image access, the original pixel data is divided into multiple contiguous
     * blocks (called strips).
     * This property stores the starting offset of each strip in the file sequentially.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    stripOffsets?: int[];

    /**
     * Image orientation.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    orientation?: Orientation;

    /**
     * Number of color components per pixel, applicable to RGB and YCbCr color models.
     * Since both the models are three-component models (three color channels, or one luminance component plus two
     * chroma components), the standard value for this property is 3.
     * For JPEG-compressed images, this property will be replaced by the corresponding JPEG marker.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    samplesPerPixel?: int;

    /**
     * Number of rows per image strip.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rowsPerStrip?: int;
    
    /**
     * Number of bytes in each strip after compression.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    stripByteCounts?: int[];

    /**
     * Image resolution in the width direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xResolution?: double;

    /**
     * Image resolution in the height direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yResolution?: double;

    /**
     * Whether the pixel components are recorded in chunked or planar format.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    planarConfiguration?: int;

    /**
     * Unit of the image resolution in the width and height directions.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    resolutionUnit?: int;

    /**
     * Transfer function for the image, which is usually used for color correction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    transferFunction?: string;

    /**
     * Name and version number of the software used to create the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    software?: string;

    /**
     * Date and time when the image is created.
     * In this standard, it refers to the file date and time. The value format is *YYYY:MM:DD HH:MM:SS* (24-hour clock).
     * For example, 2025:12:15 18:44:59.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTime?: string;

    /**
     * Name of the person who creates the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    artist?: string;

    /**
     * Chromaticity of the image white point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    whitePoint?: double[];

    /**
     * Chromaticity of the image primaries.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    primaryChromaticities?: double[];

    /**
     * Image mode.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photoMode?: int;

    /**
     * Start of Image (SOI) marker of the JPEG bitstream in interchange format.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jpegInterchangeFormat?: int;

    /**
     * Number of bytes in the JPEG stream.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jpegInterchangeFormatLength?: int;

    /**
     * Transformation matrix coefficients for converting RGB image data to YCbCr image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrCoefficients?: double[];
     
    /**
     * Sampling ratios of the chroma components and luminance component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrSubSampling?: int[];

    /**
     * Position of chroma components relative to the luminance component.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrPositioning?: int;

    /**
     * Reference black point value and white point value.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    referenceBlackWhite?: double[];

    /**
     * Copyright notice of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    copyright?: string;

    /**
     * Exposure time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureTime?: double;

    /**
     * F number, for example, f/1.8.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fNumber?: double;

    /**
     * Class used for exposure setting when the camera captures a photo.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureProgram?: int;
    
    /**
     * Spectral sensitivity of each channel of the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    spectralSensitivity?: string;

    /**
     * GPS information format version identifier.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsVersionID?: int[];

    /**
     * GPS latitude reference. For example, **N** indicates north latitude, and **S** indicates south latitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLatitudeRef?: string;

    /**
     * GPS latitude.
     * The latitude is represented by three RATIONAL values (numeric values stored in fractional form), corresponding to
     * degrees, minutes, and seconds, in the **dd/1, mm/1, ss/1** format.
     * When using degrees and minutes, the minutes are stored with up to two decimal places, in the
     * **dd/1, mmmm/100, 0/1** format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLatitude?: double[];

    /**
     * GPS longitude reference. For example, **E** indicates east longitude, and **W** indicates west longitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLongitudeRef?: string;

    /**
     * GPS longitude.
     * The longitude is represented by three RATIONAL values (numeric values stored in fractional form), corresponding
     * to degrees, minutes, and seconds, in the **dd/1, mm/1, ss/1** format.
     * When using degrees and minutes, the minutes are stored with up to two decimal places, in the
     * **dd/1, mmmm/100, 0/1** format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLongitude?: double[];

    /**
     * GPS altitude reference.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAltitudeRef?: int;

    /**
     * GPS altitude based on **GPSAltitudeRef**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAltitude?: double;

    /**
     * GPS timestamp.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTimestamp?: double[];

    /**
     * GPS satellite used for measurement. Generally, the value is the GPS satellite's pseudo-random noise (PRN) number.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSatellites?: string;

    /**
     * Status of the GPS receiver when the image is recorded.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsStatus?: string;

    /**
     * GPS measurement mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsMeasureMode?: string;

    /**
     * Dilution of Precision (DOP) of the GPS data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDop?: double;

    /**
     * Speed unit of the GPS receiver.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSpeedRef?: string;

    /**
     * Speed of the GPS receiver.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSpeed?: double;

    /**
     * Reference for the GPS receiver movement direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTrackRef?: string;

    /**
     * Movement direction of the GPS receiver.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTrack?: double;

    /**
     * Reference of the image orientation.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsImgDirectionRef?: string;

    /**
     * Image orientation at the time of capture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsImgDirection?: double;

    /**
     * Geodetic data used by the GPS receiver.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsMapDatum?: string;

    /**
     * Latitude reference of the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLatitudeRef?: string;

    /**
     * Latitude of the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLatitude?: double[];

    /**
     * Longitude reference of the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLongitudeRef?: string;

    /**
     * Longitude of the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLongitude?: double[];

    /**
     * Bearing reference to the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestBearingRef?: string;
    
    /**
     * Bearing to the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestBearing?: double;

    /**
     * Unit used to express the distance to the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestDistanceRef?: string;
    
    /**
     * Distance to the destination.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestDistance?: double;

    /**
     * Name of the positioning method.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsProcessingMethod?: string;

    /**
     * String of the GPS area name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAreaInformation?: string;

    /**
     * GPS date stamp.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDateStamp?: string;

    /**
     * Whether differential correction has been applied to the GPS data, which is crucial for precise positioning
     * accuracy.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDifferential?: int;

    /**
     * Horizontal positioning error, in meters.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsHPositioningError?: double;

    /**
     * ISO speed and latitude of the camera or input device, which are specified in ISO 12232.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedRatings?: int;

    /**
     * Sensitivity of the camera or input device during image capture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photographicSensitivity?: int[];

    /**
     * Opto-Electric Conversion Function (OECF) specified in ISO 14524.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    oecf?: ArrayBuffer;

    /**
     * Sensitivity type.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sensitivityType?: int;

    /**
     * Standard output sensitivity.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    standardOutputSensitivity?: int;

    /**
     * GPS measurement mode.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    recommendedExposureIndex?: int;

    /**
     * Maximum dynamic range recordable by the camera sensor in a single exposure. The unit is EV.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedLatitudeyyy?: int;

    /**
     * Highlight retention capacity of the camera sensor in overexposure. The unit is EV.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedLatitudezzz?: int;

    /**
     * Version of the supported Exif standard.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exifVersion?: string;

    /**
     * Date and time when the original image data is generated.
     * For a digital still camera (DSC), the date and time when a photo is taken are recorded. The value format is *YYYY
     * :MM:DD HH:MM:SS* (24-hour clock).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTimeOriginal?: string;

    /**
     * Date and time when the image is stored as digital data.
     * For example, if a DSC captures an image and records the file at the same time, the values of **DateTimeOriginal**
     * and **DateTimeDigitized** are the same. The value format is *YYYY:MM:DD HH:MM:SS* (24-hour clock).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTimeDigitized?: string;

    /**
     * Geographical time zone of the device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTime?: string;

    /**
     * Geographical time zone of the device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTimeOriginal?: string;

    /**
     * Coordinated Universal Time (UTC) offset at the time of image digitization, which helps to precisely adjust the
     * timestamp.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTimeDigitized?: string;

    /**
     * Information about the compressed data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    componentsConfiguration?: string;

    /**
     * Image compression scheme. The unit is bit/pixel.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compressedBitsPerPixel?: double;

    /**
     * Shutter speed, expressed as an Additive System of Photographic Exposure (APEX) value.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    shutterSpeedValue?: double;

    /**
     * Lens aperture. The unit is APEX.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    apertureValue?: double;

    /**
     * Image brightness. The unit is APEX.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    brightnessValue?: double;

    /**
     * Exposure bias.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureBiasValue?: double;

    /**
     * Minimum aperture value of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    maxApertureValue?: double;

    /**
     * Distance from the capture device to the photographed object, in meters.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectDistance?: double;

    /**
     * Metering mode.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    meteringMode?: int;

    /**
     * Light source.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lightSource?: int;

    /**
     * Flash.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flash?: int;

    /**
     * Focal length of the lens, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalLength?: double;
    
    /**
     * Location and area of the main object in the entire scene.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectArea?: int[];
    
    /**
     * Information required by the Exif/Design rule for Camera File system (DCF) writer manufacturer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    makerNote?: ArrayBuffer;
    
    /**
     * User comments.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userComment?: string;

    /**
     * Second fraction of **DateTime**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTime?: string;
	
    /**
     * Second of **DateTimeOriginal**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTimeOriginal?: string;
	
    /**
     * Second of **DateTimeDigitized**.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTimeDigitized?: string;
	
    /**
     * FlashPix format version supported by the FlashPix Extension Resource (FPXR), which is used to enhance device
     * compatibility.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flashpixVersion?: string;
	
    /**
     * Color space information, which is usually recorded as a color space descriptor.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    colorSpace?: int;
	
    /**
     * Image size on the X axis (horizontal axis in a two-dimensional coordinate system).
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pixelXDimension?: int;
	
    /**
     * Image size on the Y axis (vertical axis in a two-dimensional coordinate system).
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pixelYDimension?: int;
	
    /**
     * Name of the audio file related to the image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    relatedSoundFile?: string;
	
    /**
     * Flash energy at the time the image is captured. The unit is beam candlepower seconds (BCPS).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flashEnergy?: double;
	
    /**
     * Spatial frequency table of the camera or input device.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    spatialFrequencyResponse?: ArrayBuffer;
	
    /**
     * Number of pixels per unit physical length in the X-axis of the sensor's physical plane.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneXResolution?: double;
	
    /**
     * Number of pixels per unit physical length in the Y-axis of the sensor's physical plane.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneYResolution?: double;
	
    /**
     * Measurement unit of **FocalPlaneXResolution** and **FocalPlaneYResolution**.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneResolutionUnit?: int;

    /**
     * Pixel coordinates of the primary object in the image (based on the origin in the upper left corner).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectLocation?: int[];
	
    /**
     * Exposure index selected at the time the image is captured.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureIndex?: double;
	
    /**
     * Type of the image sensor on the camera.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sensingMethod?: int;
	
    /**
     * Image source.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fileSource?: ArrayBuffer;
	
    /**
     * Scene type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneType?: ArrayBuffer;
	
    /**
     * Color filter array (CFA) geometric pattern of the image sensor.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cfaPattern?: ArrayBuffer;
	
    /**
     * Special processing of image data, such as HDR composition and AI scene enhancement.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    customRendered?: int;
	
    /**
     * Exposure mode.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureMode?: int;
	
    /**
     * White balance.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    whiteBalance?: int;
	
    /**
     * Digital zoom ratio used when the image is captured.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    digitalZoomRatio?: double;
	
    /**
     * Focal length of the 35 mm film.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalLengthIn35mmFilm?: int;

    /**
     * Type of the scene that is captured.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneCaptureType?: int;
	
    /**
     * Degree of overall image gain adjustment.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gainControl?: int;
	
    /**
     * Contrast optimization policy applied by the camera. For example, standard processing and contrast reduction.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    contrast?: int;
	
    /**
     * Color saturation adjustment policy applied by the camera. For example, standard processing and saturation
     * reduction.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    saturation?: int;
	
    /**
     * Edge enhancement processing method applied by the camera. For example, weak sharpening and standard sharpening.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sharpness?: int;
	
    /**
     * Capture condition information of a specific camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceSettingDescription?: ArrayBuffer;
	
    /**
     * Distance range to the object.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectDistanceRange?: int;
	
    /**
     * Unique ID assigned to each image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageUniqueId?: string;
	
    /**
     * Name of the camera owner.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cameraOwnerName?: string;
	
    /**
     * Serial number of the camera body.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bodySerialNumber?: string;
	
    /**
     * Specifications of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensSpecification?: double[];
	
    /**
     * Manufacturer of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensMake?: string;
	
    /**
     * Model of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensModel?: string;

    /**
     * Serial number of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensSerialNumber?: string;

    /**
     * Whether the image is a composite image.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compositeImage?: int;

    /**
     * Number of source images of the composite image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sourceImageNumberOfCompositeImage?: int[];

    /**
     * Exposure time of source images for the composite image, for example, 1/33 s.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sourceExposureTimesOfCompositeImage?: ArrayBuffer;

    /**
     * Gamma value of each component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gamma?: double;

    /**
     * Creates an empty [ExifMetadata]{@link @ohos.multimedia.image:image.ExifMetadata} instance.
     *
     * @returns { ExifMetadata } Empty **ExifMetadata** instance.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): ExifMetadata;

    /**
     * Obtains the property values from image metadata. This API returns the result asynchronously through a promise.
     * 
     * For details about the properties, see [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     *
     * @param { Array<string> } key - Names of the properties to query.
     * @returns { Promise<Record<string, string | null>> } Promise used to return the obtained image metadata property
     *     values.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * Sets the values of specified properties in image metadata in batches. This API returns the result asynchronously 
     * through a promise.
     * 
     * For details about the properties, see [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     *
     * @param { Record<string, string | null> } records - Set of key-value pairs representing properties and
     *     corresponding values of the **ExifMetadata** object.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * Obtains all properties and their values from the image metadata. This API returns the result asynchronously 
     * through a promise.
     *
     * @returns { Promise<Record<string, string | null>> } Promise used to return the values of all properties.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * Clones the Exif metadata. This API returns the result asynchronously through a promise.
     *
     * @returns { Promise<ExifMetadata> } Promise used to return the Exif metadata instance if the operation is
     *     successful.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<ExifMetadata>;

    /**
     * Obtains the metadata in binary format. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> } Promise that returns the binary data of the metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
	
    /**
     * Replaces the current metadata with binary data. This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } blob - Binary data used to replace the metadata.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * The XMAGE watermark is at the bottom of the photo.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const XMAGE_WATERMARK_MODE_AT_THE_BOTTOM : int = 9;

  /**
   * The XMAGE watermark is around the edges of the photo.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const XMAGE_WATERMARK_MODE_BORDER : int = 10;

  /**
   * Capture mode: professional.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_PROFESSIONAL : int = 2;

  /**
   * Capture mode: night view with front lens.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW : int = 7;

  /**
   * Capture mode: panorama.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_PANORAMA : int = 8;

  /**
   * Capture mode: tail light.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_TAIL_LIGHT : int = 9;

  /**
   * Capture mode: light graffiti.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_LIGHT_GRAFFITI : int = 10;

  /**
   * Capture mode: silky water.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_SILKY_WATER : int = 11;

  /**
   * Capture mode: star track.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_STAR_TRACK : int = 12;

  /**
   * Capture mode: wide aperture.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_WIDEAPERTURE : int = 19;

  /**
   * Capture mode: moving photos.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_MOVING_PHOTO : int = 20;

  /**
   * Capture mode: portrait.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_PORTRAIT : int = 23;

  /**
   * Capture mode: night view with rear lens.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_REAR_LENS_NIGHT_VIEW : int = 42;

  /**
   * Capture mode: super macro.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_SUPER_MACRO : int = 47;

  /**
   * Capture mode: snap shot.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  const CAPTURE_MODE_SNAP_SHOT : int = 62;

  /**
   * Enumerates the focus modes.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FocusMode {  
    /**
     * Intelligent autofocus.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_A = 0,

    /**
     * Single autofocus.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_S = 1,

    /**
     * Continuous auto focus.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_C = 2,

    /**
     * Manual focus.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MF = 3
  }

  /**
   * Enumerates the XMAGE color modes.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum XmageColorMode {  
    /**
     * Original.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NORMAL = 0,

    /**
     * Bright.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BRIGHT = 1,

    /**
     * Vivid.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SOFT = 2,

    /**
     * Mono.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MONO = 3
  }

  /**
   * MakerNoteHuaweiMetadata implements Metadata
   * 
   * Photo metadata from Huawei cameras.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class MakerNoteHuaweiMetadata implements Metadata {  
    /**
     * Whether XMAGE is supported. **true** indicates yes; **false** indicates no.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isXmageSupported?: boolean;

    /**
     * XMAGE watermark mode. For details, see [Constants]{@link @ohos.multimedia.image:image.Constants}.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageWatermarkMode?: int;

    /**
     * Horizontal coordinate of the left boundary of the effective content area (excluding the watermark coverage area)
     * on the original image, relative to the top-left origin of the image. The unit is px.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageLeft?: int;

    /**
     * Vertical coordinate of the top boundary of the effective content area (excluding the watermark coverage area) on
     * the original image, relative to the top-left origin of the image. The unit is px.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageTop?: int;

    /**
     * Horizontal coordinate of the right boundary of the effective content area (excluding the watermark coverage area)
     * on the original image, relative to the top-left origin of the image. The unit is px.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageRight?: int;

    /**
     * Vertical coordinate of the bottom boundary of the effective content area (excluding the watermark coverage area)
     * on the original image, relative to the top-left origin of the image. The unit is px.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageBottom?: int;

    /**
     * XMAGE color mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageColorMode?: XmageColorMode;

    /**
     * Whether the image has been cloud-enhanced. **true** indicates yes; **false** indicates no.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isCloudEnhanced?: boolean;

    /**
     * Cloud enhancement label.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cloudLabel?: string;

    /**
     * Whether the wind snapshot mode is used. **true** indicates yes; **false** indicates no.
     * This mode is a specialized photography mode designed for capturing fast-moving subjects or scenes prone to
     * blurring, such as in windy conditions or when photographing moving objects.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isWindSnapshot?: boolean;

    /**
     * Version number of the scene recognition algorithm.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneVersion?: int;

    /**
     * Capture scene: food confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneFoodConfidence?: int;

    /**
     * Capture scene: stage performance confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneStageConfidence?: int;

    /**
     * Capture scene: blue sky confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneBlueSkyConfidence?: int;

    /**
     * Capture scene: green plant confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneGreenPlantConfidence?: int;

    /**
     * Capture scene: beach confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneBeachConfidence?: int;

    /**
     * Capture scene: snow confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneSnowConfidence?: int;

    /**
     * Capture scene: sunset confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneSunsetConfidence?: int;

    /**
     * Capture scene: flower confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneFlowersConfidence?: int;

    /**
     * Capture scene: night scene confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneNightConfidence?: int;

    /**
     * Capture scene: text confidence.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneTextConfidence?: int;

    /**
     * Number of faces.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceCount?: int;

    /**
     * Confidences of a specified number of faces.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceConfidences?: int[];

    /**
     * Smile scores of a specified number of faces.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceSmileScores?: int[];

    /**
     * Capture mode.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    captureMode?: int;

    /**
     * Number of burst shots.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    burstNumber?: int;

    /**
     * Whether to use the front camera. **true** indicates yes; **false** indicates no.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isFrontCamera?: boolean;

    /**
     * Horizontal pan angle.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rollAngle?: int;

    /**
     * Pitch angle.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pitchAngle?: int;

    /**
     * Physical aperture, in fNumber.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    physicalAperture?: int;

    /**
     * Lens focus control policy, which determines how the camera adjusts the focal length.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focusMode?: FocusMode;

    /**
     * Returns an empty [MakerNoteHuaweiMetadata]{@link @ohos.multimedia.image:image.MakerNoteHuaweiMetadata} instance.
     *
     * @returns { MakerNoteHuaweiMetadata } Empty **MakerNoteHuaweiMetadata** instance.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): MakerNoteHuaweiMetadata;

    /**
     * Obtains the property values from image metadata. This API returns the result asynchronously through a promise.
     *
     * @param { Array<string> } key - Names of the properties to query.
     * @returns { Promise<Record<string, string | null>> } Promise used to return the obtained image metadata property
     *     values.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * Sets the values of specified properties in image metadata in batches. This API returns the result asynchronously 
     * through a promise.
     * 
     * For details about the properties, see [PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     *
     * @param { Record<string, string | null> } records - Array containing key-value pairs representing properties and
     *     their corresponding values of the **MakerNoteHuaweiMetadata** object to be modified.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * Obtains all properties and their values from the image metadata. This API returns the result asynchronously 
     * through a promise.
     *
     * @returns { Promise<Record<string, string | null>> } Promise used to return the values of all properties.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * Clones [MakerNoteHuaweiMetadata]{@link @ohos.multimedia.image:image.MakerNoteHuaweiMetadata} metadata. This API returns the result 
     * asynchronously through a promise.
     *
     * @returns { Promise<MakerNoteHuaweiMetadata> } Promise used to return the **MakerNoteHuaweiMetadata** metadata
     *     instance if metadata is successfully obtained.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<MakerNoteHuaweiMetadata>;

    /**
     * Obtains the metadata in binary format. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> } Promise that returns the binary data of the metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
	
    /**
     * Replaces the current metadata with binary data. This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } blob - Binary data used to replace the metadata.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * DNG metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  class DngMetadata {
    /**
     * The DNG version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngVersion?: int[];

    /**
     * The DNG backward compatibility version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngBackwardVersion?: int[];

    /**
     * A unique camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly uniqueCameraModel?: string;

    /**
     * A localized camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly localizedCameraModel?: string;

    /**
     * The CFA (color filter array) plane color.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cfaPlaneColor?: int[];

    /**
     * The CFA (color filter array) layout.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cfaLayout?: int;

    /**
     * The linearization table.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly linearizationTable?: int[];

    /**
     * The black level repeat dimension.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelRepeatDim?: int[];

    /**
     * The zero-light encoding level.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevel?: double[];

    /**
     * The black level delta H.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelDeltaH?: double[];

    /**
     * The black level delta V.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelDeltaV?: double[];

    /**
     * The white level.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly whiteLevel?: double[];

    /**
     * The default scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultScale?: double[];

    /**
     * The default crop origin.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultCropOrigin?: double[];

    /**
     * The default crop size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultCropSize?: int[];

    /**
     * A transformation matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorMatrix1?: double[];

    /**
     * A transformation matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorMatrix2?: double[];

    /**
     * A calibration matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibration1?: double[];

    /**
     * A calibration matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibration2?: double[];

    /**
     * A dimensionality reduction matrix under the first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly reductionMatrix1?: double[];

    /**
     * A dimensionality reduction matrix under the second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly reductionMatrix2?: double[];

    /**
     * The analog balance.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly analogBalance?: double[];

    /**
     * The as-shot neutral.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotNeutral?: double[];

    /**
     * The as-shot white, encoded as x-y chromaticity coordinates.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotWhiteXY?: double[];

    /**
     * The baseline exposure.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineExposure?: double;

    /**
     * The baseline noise.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineNoise?: double;

    /**
     * The baseline sharpness.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineSharpness?: double;

    /**
     * The Bayer green split.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly bayerGreenSplit?: int;

    /**
     * The linear response limit.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly linearResponseLimit?: double;

    /**
     * The serial number of the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraSerialNumber?: string;

    /**
     * Information about the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly lensInfo?: double[];

    /**
     * The chroma blur radius.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly chromaBlurRadius?: double;

    /**
     * The anti-alias strength.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly antiAliasStrength?: double;

    /**
     * The shadow scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly shadowScale?: double;

    /**
     * The private data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngPrivateData?: ArrayBuffer;

    /**
     * Whether the EXIF MakerNote tag is safe.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly makerNoteSafety?: boolean;

    /**
     * The first calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly calibrationIlluminant1?: int;

    /**
     * The second calibration illuminant.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly calibrationIlluminant2?: int;

    /**
     * The best quality scale.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly bestQualityScale?: double;

    /**
     * The unique identifier of raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawDataUniqueID?: string;

    /**
     * The original raw file name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileName?: string;

    /**
     * The original raw file data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileData?: ArrayBuffer;

    /**
     * The active area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly activeArea?: int[];

    /**
     * The masked areas.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly maskedAreas?: int[];

    /**
     * An ICC profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotICCProfile?: ArrayBuffer;

    /**
     * The as-shot pre-profile matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotPreProfileMatrix?: double[];

    /**
     * The current ICC profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly currentICCProfile?: ArrayBuffer;

    /**
     * The current pre-profile matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly currentPreProfileMatrix?: double[];

    /**
     * The colorimetric reference.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorimetricReference?: int;

    /**
     * The camera calibration signature.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibrationSignature?: string;

    /**
     * The profile calibration signature.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileCalibrationSignature?: string;

    /**
     * The extra camera profiles.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly extraCameraProfiles?: int[];

    /**
     * The as-shot camera profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotProfileName?: string;

    /**
     * The applied noise reduction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly noiseReductionApplied?: double;

    /**
     * The profile name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileName?: string;

    /**
     * The profile hue/saturation map dims.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapDims?: int[];

    /**
     * The first hue/saturation mapping table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapData1?: double[];

    /**
     * The second hue/saturation mapping table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapData2?: double[];

    /**
     * The profile tone curve.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileToneCurve?: double[];

    /**
     * The profile embed policy.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileEmbedPolicy?: int;

    /**
     * The profile copyright.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileCopyright?: string;

    /**
     * The first forward matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly forwardMatrix1?: double[];

    /**
     * The second forward matrix.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly forwardMatrix2?: double[];

    /**
     * The preview application name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewApplicationName?: string;

    /**
     * The preview application version.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewApplicationVersion?: string;

    /**
     * The preview settings name.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewSettingsName?: string;

    /**
     * The preview settings digest.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewSettingsDigest?: string;

    /**
     * The preview color space.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewColorSpace?: int;

    /**
     * The preview date time.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewDateTime?: string;

    /**
     * An MD5 digest of the raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawImageDigest?: string;

    /**
     * An MD5 digest of the data stored in the OriginalRawFileData.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileDigest?: string;

    /**
     * The sub‑tile block size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly subTileBlockSize?: int[];

    /**
     * The row interleave factor.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rowInterleaveFactor?: int;

    /**
     * The profile lookup table dimensions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableDims?: int[];

    /**
     * The profile lookup table data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableData?: double[];

    /**
     * The first opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList1?: ArrayBuffer;

    /**
     * The second opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList2?: ArrayBuffer;

    /**
     * The third opcode list.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList3?: ArrayBuffer;

    /**
     * The noise profile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly noiseProfile?: double[];

    /**
     * The original default final size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalDefaultFinalSize?: int[];

    /**
     * The original best quality final size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalBestQualityFinalSize?: int[];

    /**
     * The original default crop size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalDefaultCropSize?: double[];

    /**
     * The profile hue/saturation map encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapEncoding?: int;

    /**
     * The profile lookup table encoding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableEncoding?: int;

    /**
     * The baseline exposure offset.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineExposureOffset?: double;

    /**
     * The default black render.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultBlackRender?: int;

    /**
     * A modified MD5 digest of the raw image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly newRawImageDigest?: string;

    /**
     * The gain between the main raw IFD and the preview IFD.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawToPreviewGain?: double;

    /**
     * The default user crop.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultUserCrop?: int[];
  }

  /**
   * Enumerates the properties available for the metadata of a WebP image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum WebPPropertyKey {
    /**
     * Canvas Width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CANVAS_WIDTH = 'WebPCanvasWidth',

    /**
     * Canvas Height.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CANVAS_HEIGHT = 'WebPCanvasHeight',

    /**
     * Delay of each frame in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DELAY_TIME = 'WebPDelayTime',

    /**
     * Unclamped delay of each frame in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNCLAMPED_DELAY_TIME = 'WebPUnclampedDelayTime',

    /**
     * Loop count.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LOOP_COUNT = 'WebPLoopCount',
  }

  /**
   * WebP metadata.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  class WebPMetadata {
    /**
     * Canvas Width.
     * Unit: px, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly canvasWidth?: int;

    /**
     * Canvas Height.
     * Unit: px, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly canvasHeight?: int;

    /**
     * Delay of each frame.
     * Unit: ms, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly delayTime?: int;

    /**
     * Unclamped delay of each frame.
     * Unit: ms, The value should be an integer.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly unclampedDelayTime?: int;

    /**
     * Loop count.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly loopCount?: int;
  }

  /**
   * Enumerates XMP tag type.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum XMPTagType {
    /**
     * Unknown XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN = 0,

    /**
     * String XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STRING = 1,

    /**
     * Unordered array XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNORDERED_ARRAY = 2,

    /**
     * Ordered array XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ORDERED_ARRAY = 3,

    /**
     * Alternate array XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALTERNATE_ARRAY = 4,

    /**
     * Alternate text XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALTERNATE_TEXT = 5,

    /**
     * Structure XMP tag type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STRUCTURE = 6,
  }

  /**
   * Describes XMP namespace parameters.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPNamespace {
    /**
     * The uri of XMP namespace.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri: string;

    /**
     * The prefix of XMP namespace.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    prefix: string;
  }

  /**
   * XMP namespace: XMP basic.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const XMP_BASIC: XMPNamespace;

  /**
   * XMP namespace: XMP rights.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const XMP_RIGHTS: XMPNamespace;

  /**
   * XMP namespace: exif.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const EXIF: XMPNamespace;

  /**
   * XMP namespace: dublin core.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const DUBLIN_CORE: XMPNamespace;

  /**
   * XMP namespace: tiff.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const TIFF: XMPNamespace;

  /**
   * Describes XMP Tag parameters.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPTag {
    /**
     * The namespace of XMP tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xmpNamespace: XMPNamespace;

    /**
     * The name of XMP tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    name: string;

    /**
     * The type of XMP tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: XMPTagType;

    /**
     * The value of XMP tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value?: string;
  }

  /**
   * Describes XMP enumerate option parameters.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPEnumerateOptions {
    /**
     * The option that controls recursive enabling.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRecursive?: boolean;

    /**
     * Whether to return only qualifier data.
     * <br>Default value:false.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onlyQualifier?: boolean;
  }

  /**
   * XMPMetadata instance.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  class XMPMetadata {
    /**
     * Register a new namespace according to the xml namespace and prefix.
     *
     * @param { XMPNamespace } xmpNamespace - The xmp namespace.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Invalid namespace format.
     *     2. The uri is already registered. 3. The prefix is already registered.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public registerXMPNamespace(xmpNamespace: XMPNamespace): Promise<void>;

    /**
     * Set the XMP type and value of the XMP tag in the specified path.
     *
     * @param { string } path - The specified path of the target XMP tag.(e.g., "dc:title").
     * @param { XMPTagType } type - The specified XMP tag type.
     * @param { string } [value] - The specified value. If this parameter is not specified, the default value is empty.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Namespace is not registered.
     *     2. The path syntax is invalid. 3. The path does not match the type. 4. The value is invalid for the type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public setValue(path: string, type: XMPTagType, value?: string): Promise<void>;

    /**
     * Get a single XMP tag from specified path.
     *
     * @param { string } path - The specified path of the target XMP tag.(e.g., "dc:title").
     * @returns { Promise<XMPTag | null> } Promise used to return the XMP tag.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Namespace is not registered.
     *     2. The path syntax is invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public getTag(path: string): Promise<XMPTag | null>;

    /**
     * Remove the XMP tag from specified path.
     *
     * @param { string } path - The specified path of the target XMP tag.(e.g., "dc:title").
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Namespace is not registered.
     *     2. The path syntax is invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public removeTag(path: string): Promise<void>;

    /**
     * Enumerate the XMP tags from specified path and uses a callback to return the result.
     *
     * @param { function } callback - Callback used to return the XMP node and the corresponding XMPTag.
     *     The callback receives a path argument that follows the XMP namespace:path format.
     * @param { string } [rootPath] - Enumerate root path. If this parameter is not specified, the default value is root
     *     path.
     * @param { XMPEnumerateOptions } [options] - XMP enumerate option.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Namespace is not registered.
     *     2. The rootPath syntax is invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public enumerateTags(
      callback: (path: string, tag: XMPTag) => boolean,
      rootPath?: string,
      options?: XMPEnumerateOptions
    ): void;

    /**
     * Get all XMP tags from specified path.
     *
     * @param { string } [rootPath] - The specified path. If this parameter is not specified, the default value is root
     *     path.
     * @param { XMPEnumerateOptions } [options] - XMP enumerate option.
     * @returns { Promise<Record<string, XMPTag>> } A Promise instance used to return all XMP tags.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. Namespace is not registered.
     *     2. The rootPath syntax is invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public getTags(rootPath?: string, options?: XMPEnumerateOptions): Promise<Record<string, XMPTag>>;

    /**
     * Set a blob into the XMP metadata.
     *
     * @param { ArrayBuffer } buffer - blob data.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 7600206 - Invalid argument. Possible causes: 1. The buffer is empty or invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public setBlob(buffer: ArrayBuffer): Promise<void>;

    /**
     * Obtains the XMP metadata as a blob.
     *
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the ArrayBuffer of blob.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public getBlob(): Promise<ArrayBuffer>;
  }

  /**
 	 * Enumerates the properties available for the metadata of a Avis image.
 	 *
 	 * @syscap SystemCapability.Multimedia.Image.Core
 	 * @stagemodelonly
 	 * @since 26.0.0 dynamic&static
 	 */
 	enum AvisPropertyKey {
 	  /**
 	   * Delay of each frame in milliseconds.
 	   * 
 	   * @syscap SystemCapability.Multimedia.Image.Core
 	   * @stagemodelonly
 	   * @since 26.0.0 dynamic&static
 	   */
 	  DELAY_TIME = 'AvisDelayTime',
 	}

 	/**
 	 * Avis metadata.
 	 * 
 	 * @syscap SystemCapability.Multimedia.Image.Core
 	 * @stagemodelonly
 	 * @since 26.0.0 dynamic&static
 	 */
 	class AvisMetadata {
 	  /**
 	   * Delay of each frame. Unit: ms, The value should be an integer.
 	   * <br>Unit:ms.
 	   * 
 	   * @syscap SystemCapability.Multimedia.Image.Core
 	   * @stagemodelonly
 	   * @since 26.0.0 dynamic&static
 	   */
 	  readonly delayTime?: int;
 	}

  /**
   * Metadata set of an image.
   *
   * @typedef ImageMetadata
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageMetadata {  
    /**
     * Exif metadata.
     *
     * @type { ?ExifMetadata }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exifMetadata?: ExifMetadata;

    /**
     * Huawei Camera metadata.
     *
     * @type { ?MakerNoteHuaweiMetadata }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    makerNoteHuaweiMetadata?: MakerNoteHuaweiMetadata;

    /**
     * Heifs metadata.
     *
     * @type { ?HeifsMetadata }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    heifsMetadata?: HeifsMetadata;

    /**
     * Dng metadata.
     *
     * @type { ?DngMetadata }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    dngMetadata?: DngMetadata;

    /**
     * WebP metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    webPMetadata?: WebPMetadata;

    /**
     * Gif metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gifMetadata?: GifMetadata;

    /**
     * Tiff metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tiffMetadata?: TiffMetadata;

    /**
     * Jfif metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    jfifMetadata?: JfifMetadata;

    /**
     * Png metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pngMetadata?: PngMetadata;

    /**
     * XMP metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xmpMetadata?: XMPMetadata;

    /**
     * Avis metadata.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    avisMetadata?: AvisMetadata;
  }

  /**
   * Describes image decoding parameters.
   *
   * @typedef DecodingOptionsForPicture
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 13 dynamic
   * @since 23 static
   */
  interface DecodingOptionsForPicture {
    /**
     * Expected set of auxiliary picture types, default to decoding all auxiliary pictures.
     *
     * @type { Array<AuxiliaryPictureType> }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 13 dynamic
     * @since 23 static
     */
    desiredAuxiliaryPictures: Array<AuxiliaryPictureType>;

    /**
     * Desired size of the main pixel map. The value (0, 0) indicates that the pixels are decoded
     * based on the original image size.
     *
     * @type { ?Size }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    desiredSizeForMainPixelMap?: Size;

    /**
     * Desired Pixel format, RGBA_8888\BGRA_8888\RGB_565\NV12\NV21 are supported.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    desiredPixelFormat?: PixelMapFormat;
  }

  /**
   * Describes thumbnail decoding parameters.
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DecodingOptionsForThumbnail {
    /**
     * Flag to specify whether the thumbnail should be generated, if the image does not have a thumbnail.
     *
     * <br>Default value: true.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    generateThumbnailIfAbsent?: boolean;

    /**
     * This parameter is valid only when generateThumbnailIfAbsent is set to true. The width and height of the image
     *     cannot exceed the value of this parameter.
     * The value should be an integer.
     * <br>Unit:px.
     * <br>Default value:512.
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxGeneratedPixelDimension?: int;
  }

   /**
   * Describes auxiliary picture information.
   *
   * @typedef AuxiliaryPictureInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface AuxiliaryPictureInfo {
    /**
     * Indicates auxiliary picture type.
     *
     * @type { AuxiliaryPictureType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    auxiliaryPictureType: AuxiliaryPictureType;

    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    size: Size;

    /**
     * The number of byte per row.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    rowStride: int;

    /**
     * Indicates image format.
     *
     * @type { PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
     pixelFormat: PixelMapFormat;

    /**
     * Indicates color space for pixel map.
     *
     * @type { colorSpaceManager.ColorSpaceManager }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
     colorSpace: colorSpaceManager.ColorSpaceManager;
  }

  /**
   * Describes raw data in an image.
   *
   * @typedef ImageRawData
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface ImageRawData {  
    /**
     * Binary data of the raw image.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    buffer: ArrayBuffer;

    /**
     * Number of bits that each pixel actually occupies in the buffer data.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    bitsPerPixel: int;
  }

  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 6
   */
  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 10
   */
  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ImageSource {
    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param { int } index Sequence number of an image.
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    getImageInfo(index: int, callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains information about an image with the specified sequence number and uses a callback
     * to return the result.
     *
     * @param { int } index Sequence number of an image.
     * @param { AsyncCallback<ImageInfo | undefined> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImageInfo(index: int, callback: AsyncCallback<ImageInfo | undefined>): void;

    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    getImageInfo(callback: AsyncCallback<ImageInfo>): void;

    /**
     * Obtains information about this image and uses a callback to return the result.
     *
     * @param { AsyncCallback<ImageInfo | undefined> } callback Callback used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImageInfo(callback: AsyncCallback<ImageInfo | undefined>): void;

    /**
     * Get image information from image source.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Get image information from image source.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Get image information from image source.
     *
     * @param { number } index Sequence number of an image. The default value is 0, indicating the first image.
     * When the value is N, it refers to the (N-1)th image. In single-frame image scenarios, the value must be 0.
     * In multi-frame image scenarios such as animations, the valid range is 0 to (frame count - 1).
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Get image information from image source.
     *
     * @param { int } index Sequence number of an image. If this parameter is not specified, the default value 0 is used.
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    getImageInfo(index?: int): Promise<ImageInfo>;

    /**
     * Get image information from image source.
     *
     * @param { int } [index] Sequence number of an image.
     *     If this parameter is not specified, the default value 0 is used.
     * @returns { Promise<ImageInfo | undefined> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImageInfo(index?: int): Promise<ImageInfo | undefined>;

    /**
     * Get image information from image source synchronously.
     *
     * @param { int } index - Index of sequence images. If this parameter is not specified, default value is 0.
     * @returns { ImageInfo } The image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     */
    getImageInfoSync(index?: int): ImageInfo;

    /**
     * Get image information from image source synchronously.
     *
     * @param { int } [index] Index of sequence image. If this parameter is specified, default value is 0.
     * @returns { ImageInfo | undefined } The image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImageInfoSync(index?: int): ImageInfo | undefined;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    createPixelMap(options?: DecodingOptions): Promise<PixelMap>;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptions } [options] Image decoding parameters.
     * @returns { Promise<PixelMap | undefined> } A Promise instance used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMap(options?: DecodingOptions): Promise<PixelMap | undefined>;

    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    createPixelMap(callback: AsyncCallback<PixelMap>): void;

    /**
     * Creates a PixelMap object. This method uses a callback to return the object.
     *
     * @param { AsyncCallback<PixelMap | undefined> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMap(callback: AsyncCallback<PixelMap | undefined>): void;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<PixelMap> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    createPixelMap(options: DecodingOptions, callback: AsyncCallback<PixelMap>): void;

    /**
     * Creates a PixelMap object based on image decoding parameters. This method uses a callback to
     * return the object.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<PixelMap | undefined> } callback Callback used to return the PixelMap object.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMap(options: DecodingOptions, callback: AsyncCallback<PixelMap | undefined>): void;

    /**
     * Creates a PixelMap based on decoding parameters, the memory type used by the PixelMap can be specified by
     * allocatorType. By default, the system selects the memory type based on the image type, image size, platform
     * capability, etc. When processing the PixelMap returned by this interface, please always consider the impact of
     * stride.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AllocatorType } allocatorType Indicate which memory type will be used by the returned PixelMap.
     * @returns { Promise<PixelMap> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700101 - Bad source. e.g.,1. Image has invalid width or height. 2. Image source incomplete.
     * 3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large. This status code is thrown when an error occurs during the process of
     * checking size.
     * @throws { BusinessError } 7700201 - Unsupported allocator type, e.g., use share memory to decode a HDR image as
     * only DMA supported hdr metadata.
     * @throws { BusinessError } 7700203 - Unsupported options, e.g, cannot convert image into desired pixel format.
     * @throws { BusinessError } 7700301 - Failed to decode image.
     * @throws { BusinessError } 7700302 - Failed to allocate memory.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 15 dynamic
     */
    createPixelMapUsingAllocator(options?: DecodingOptions, allocatorType?: AllocatorType): Promise<PixelMap>;

    /**
     * Creates a PixelMap based on decoding parameters, the memory type used by the PixelMap can be specified by
     * allocatorType. By default, the system selects the memory type based on the image type, image size, platform
     * capability, etc. When processing the PixelMap returned by this interface, please always consider the impact of
     * stride.
     *
     * @param { DecodingOptions } [options] Image decoding parameters.
     * @param { AllocatorType } [allocatorType] Indicate which memory type will be used by the returned PixelMap.
     * @returns { Promise<PixelMap | undefined> } A Promise instance used to return the PixelMap object.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700201 - Unsupported allocator type. For example, use share memory to decode
     *     HDR image as only DMA supported HDR metadata.
     * @throws { BusinessError } 7700203 - Unsupported options, For example, unsupported desiredPixelFormat causes
     *     a failure in converting an imagge into the desired pixel format.
     * @throws { BusinessError } 7700301 - Failed to decode image.
     * @throws { BusinessError } 7700302 - Failed to allocate memory.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMapUsingAllocator(options?: DecodingOptions, allocatorType?: AllocatorType)
      : Promise<PixelMap | undefined>;

    /**
     * Create a PixelMap object based on image decoding parameters synchronously.
     *
     * @param { DecodingOptions } options - Image decoding parameters.
     * @returns { PixelMap } Return the PixelMap. If decoding fails, return undefined.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     */
    createPixelMapSync(options?: DecodingOptions): PixelMap;

    /**
     * Create a PixelMap object based on image decoding parameters synchronously.
     *
     * @param { DecodingOptions } [options] - Image decoding parameters.
     * @returns { PixelMap | undefined } Return the PixelMap. If decoding fails, return undefined.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMapSync(options?: DecodingOptions): PixelMap | undefined;

    /**
     * Creates a PixelMap based on decoding parameters synchronously, the memory type used by the PixelMap can be
     * specified by allocatorType. By default, the system selects the memory type based on the image type, image size,
     * platform capability, etc. When processing the PixelMap returned by this interface, please always consider the
     * impact of stride.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AllocatorType } allocatorType Indicate which memory type will be used by the returned PixelMap.
     * @returns { PixelMap } Return the PixelMap. If decoding fails, return undefined.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700101 - Bad source. e.g.,1. Image has invalid width or height. 2. Image source incomplete.
     * 3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large. This status code is thrown when an error occurs during the process of
     * checking size.
     * @throws { BusinessError } 7700201 - Unsupported allocator type, e.g., use share memory to decode a HDR image as
     * only DMA supported hdr metadata.
     * @throws { BusinessError } 7700203 - Unsupported options, e.g, cannot convert image into desired pixel format.
     * @throws { BusinessError } 7700301 - Failed to decode image.
     * @throws { BusinessError } 7700302 - Failed to allocate memory.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 15 dynamic
     */
    createPixelMapUsingAllocatorSync(options?: DecodingOptions, allocatorType?: AllocatorType): PixelMap;

    /**
     * Creates a PixelMap based on decoding parameters synchronously, the memory type used by the PixelMap can be
     * specified by allocatorType. By default, the system selects the memory type based on the image type, image size,
     * platform capability, etc. When processing the PixelMap returned by this interface, please always consider the
     * impact of stride.
     *
     * @param { DecodingOptions } [options] Image decoding parameters.
     * @param { AllocatorType } [allocatorType] Indicate which memory type will be used by the returned PixelMap.
     * @returns { PixelMap | undefined } Return the PixelMap. If decoding fails, return undefined.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700201 - Unsupported allocator type. For example, use share memory to decode
     *     HDR image as only DMA supported HDR metadata.
     * @throws { BusinessError } 7700203 - Unsupported options, For example, unsupported desiredPixelFormat cause
     *     a failure in converting an image into the desired pixel format.
     * @throws { BusinessError } 7700301 - Failed to decode image.
     * @throws { BusinessError } 7700302 - Failed to allocate memory.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPixelMapUsingAllocatorSync(options?: DecodingOptions, allocatorType?: AllocatorType): PixelMap | undefined;

    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a promise to
     * return the array. For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<Array<PixelMap>> } A Promise instance used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
     /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a promise to
     * return the array. For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @returns { Promise<Array<PixelMap>> } A Promise instance used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    createPixelMapList(options?: DecodingOptions): Promise<Array<PixelMap>>;

    /**
     * Creates a PixelMap array. This method uses a callback to return the array.
     * For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { AsyncCallback<Array<PixelMap>> } callback Callback used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PixelMap array. This method uses a callback to return the array.
     * For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { AsyncCallback<Array<PixelMap>> } callback Callback used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    createPixelMapList(callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a callback to
     * return the array. For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<Array<PixelMap>> } callback Callback used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a PixelMap array based on image decoding parameters. This method uses a callback to
     * return the array. For animated images such as GIF and WebP, this interface returns the image data of each frame.
     * For static images, it returns a single frame of image data.
     *
     * @param { DecodingOptions } options Image decoding parameters.
     * @param { AsyncCallback<Array<PixelMap>> } callback Callback used to return the PixelMap array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980109 - Failed to crop the image.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980173 - The DMA memory does not exist.
     * @throws { BusinessError } 62980174 - The DMA memory data is abnormal.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    createPixelMapList(options: DecodingOptions, callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * Obtains the array of delay time in an image. This method uses a promise to return the array.
     *
     * @returns { Promise<Array<int>> } A Promise instance used to return the array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the array of delay time in an image. This method uses a promise to return the array.
     *
     * @returns { Promise<Array<int>> } A Promise instance used to return the array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayTimeList(): Promise<Array<int>>;

    /**
     * Obtains the array of delay time in an image. This method uses a callback to return the array.
     *
     * @param { AsyncCallback<Array<int>> } callback Callback used to return the array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the array of delay time in an image. This method uses a callback to return the array.
     *
     * @param { AsyncCallback<Array<int>> } callback Callback used to return the array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDelayTimeList(callback: AsyncCallback<Array<int>>): void;

    /**
     * Obtains the array of disposal type in a gif image. This method uses a promise to return the array.
     *
     * @returns { Promise<Array<int>> } A Promise instance used to return the array.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getDisposalTypeList(): Promise<Array<int>>;

    /**
     * Obtains the count of frame in an image. This method uses a promise to return the number.
     *
     * @returns { Promise<int> } A Promise instance used to return the number.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the count of frame in an image. This method uses a promise to return the number.
     *
     * @returns { Promise<int> } A Promise instance used to return the number.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getFrameCount(): Promise<int>;

    /**
     * Obtains the count of frame in an image. This method uses a callback to return the number.
     *
     * @param { AsyncCallback<int> } callback Callback used to return the number.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the count of frame in an image. This method uses a callback to return the number.
     *
     * @param { AsyncCallback<int> } callback Callback used to return the number.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getFrameCount(callback: AsyncCallback<int>): void;

    /**
     * Obtains the value of a property in an image with the specified index. This method uses a
     * promise to return the property value in a string.
     *
     * @param { PropertyKey } key - Name of the property whose value is to be obtained.
     * @param { ImagePropertyOptions } options - Index of the image.
     * @returns { Promise<string> } A Promise instance used to return the property value. If the operation fails, the default value is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;3.Parameter verification failed;
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11
     */
    /**
     * Obtains the value of a property in an image with the specified index. This method uses a
     * promise to return the property value in a string.
     *
     * @param { PropertyKey } key - Name of the property whose value is to be obtained.
     * @param { ImagePropertyOptions } options - Index of the image.
     * @returns { Promise<string> } A Promise instance used to return the property value. If the operation fails, the default value is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;3.Parameter verification failed;
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    getImageProperty(key: PropertyKey, options?: ImagePropertyOptions): Promise<string>;

    /**
     * Obtains the value of a property in an image with the specified index. This method uses a
     * promise to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { GetImagePropertyOptions } options Index of the image.
     * @returns { Promise<string> } A Promise instance used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    /**
     * Obtains the value of a property in an image with the specified index. This method uses a
     * promise to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { GetImagePropertyOptions } options Index of the image.
     * @returns { Promise<string> } A Promise instance used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    getImageProperty(key: string, options?: GetImagePropertyOptions): Promise<string>;

    /**
     * Obtains the value of a property in this image. This method uses a callback to return the
     * property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { AsyncCallback<string> } callback Callback used to return the property value. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    /**
     * Obtains the value of a property in this image. This method uses a callback to return the
     * property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { AsyncCallback<string> } callback Callback used to return the property value. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    getImageProperty(key: string, callback: AsyncCallback<string>): void;

    /**
     * Obtains the value of a property in an image with the specified index. This method uses
     * a callback to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { GetImagePropertyOptions } options Index of the image.
     * @param { AsyncCallback<string> } callback Callback used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 7
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    /**
     * Obtains the value of a property in an image with the specified index. This method uses
     * a callback to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { GetImagePropertyOptions } options Index of the image.
     * @param { AsyncCallback<string> } callback Callback used to return the property value. If the operation fails, the default value is returned.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource#getImageProperty
     */
    getImageProperty(key: string, options: GetImagePropertyOptions, callback: AsyncCallback<string>): void;

    /**
     * Obtains the value of properties in an image. This method uses a promise to return the property values in array
     * of records.
     *
     * @param { Array<PropertyKey> } key - Name of the properties whose value is to be obtained.
     * @returns { Promise<Record<PropertyKey, string|null>> } Array of Records instance used to return the
     * property values. If the operation fails, the null is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed;
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     */
    getImageProperties(key: Array<PropertyKey>): Promise<Record<PropertyKey, string|null>>;

    /**
     * Obtains the value of properties in an image. This method uses a promise to return the property values in array
     * of records.
     *
     * @param { Array<PropertyKey> } key - Name of the properties whose value is to be obtained.
     * @returns { Promise<Record<string, string|null>> } Array of Records instance used to return the
     *     property values. If the operation fails, the null is returned.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 23 static
     */
    getImageProperties(key: Array<PropertyKey>): Promise<Record<string, string|null>>;

    /**
     * Obtains the value of a property in the image.
     *
     * @param { PropertyKey } key Property name.
     * @returns { string } Value of the property.
     * @throws { BusinessError } 7700101  - Bad source. e.g.,1. Image has invalid width or height. 2. Image
     * source incomplete. 3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata. For example, key is not supported.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 20 dynamic
     */
    getImagePropertySync(key: PropertyKey): string;

    /**
     * Obtains the value of a property in the image.
     *
     * @param { PropertyKey } key Property name.
     * @returns { string | undefined } Value of the property.
     * @throws { BusinessError } 7700101  - Bad source. e.g.,1. Image has invalid width or height. 2. Image
     * source incomplete. 3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata. For example, key is not supported.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImagePropertySync(key: PropertyKey): string | undefined;

    /**
     * Modify the value of a property in an image with the specified key. This method uses a
     * promise to return the property value in a string.
     *
     * @param { PropertyKey } key - Name of the property whose value is to be modified.
     * @param { string } value - The value to be set to property.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980133 - The EXIF data is out of range.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @throws { BusinessError } 62980146 - The EXIF data failed to be written to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11
     */
    /**
     * Modify the value of a property in an image with the specified key. This method uses a
     * promise to return the property value in a string.
     *
     * @param { PropertyKey } key - Name of the property whose value is to be modified.
     * @param { string } value - The value to be set to property.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980133 - The EXIF data is out of range.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @throws { BusinessError } 62980146 - The EXIF data failed to be written to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    modifyImageProperty(key: PropertyKey, value: string): Promise<void>;

    /**
     * Modify the value of a property in an image with the specified key. This method uses a
     * promise to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be modified.
     * @param { string } value The value to be set to property.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     * @deprecated since 11
     * @useinstead image.ImageSource#modifyImageProperty
     */
    /**
     * Modify the value of a property in an image with the specified key. This method uses a
     * promise to return the property value in a string.
     *
     * @param { string } key Name of the property whose value is to be modified.
     * @param { string } value The value to be set to property.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource#modifyImageProperty
     */
    modifyImageProperty(key: string, value: string): Promise<void>;

    /**
     * Modify the value of a property in an image with the specified key. This method uses a callback to return the
     * property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { string } value The value to be set to property.
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     * @deprecated since 11
     * @useinstead image.ImageSource#modifyImageProperty
     */
    /**
     * Modify the value of a property in an image with the specified key. This method uses a callback to return the
     * property value in a string.
     *
     * @param { string } key Name of the property whose value is to be obtained.
     * @param { string } value The value to be set to property.
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource#modifyImageProperty
     */
    modifyImageProperty(key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Modify the value of properties in an image with the specified keys.
     *
     * @param { Record<PropertyKey, string|null> } records - Array of the property Records whose values are to
     * be modified.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed;
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @throws { BusinessError } 62980146 - The EXIF data failed to be written to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     */
    modifyImageProperties(records: Record<PropertyKey, string|null>): Promise<void>;

    /**
     * Modify the value of properties in an image with the specified keys.
     *
     * @param { Record<string, string|null> } records - Array of the property Records whose values are to
     *     be modified.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     *     error message is returned.
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @throws { BusinessError } 62980146 - The EXIF data failed to be written to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 23 static
     */
    modifyImageProperties(records: Record<string, string|null>): Promise<void>;

    /**
     * Modify the value of properties in an image with the specified keys. The method is more efficient than
     * modifyImageProperties, as it completes batch data modifications in memory with a single write operation
     * to the file.
     *
     * @param { Record<string, string|null> } records - Property Records whose values are to be modified,
     *     when the value is set to null the tag will be removed.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails,
     *     an error message is returned.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata. For example, the property key is not supported,
     *     or the property value is invalid.
     * @throws { BusinessError } 7700304 - Failed to write image properties to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 22 dynamic
     * @since 23 static
     */
    modifyImagePropertiesEnhanced(records: Record<string, string | null>): Promise<void>;

    /**
     * Modify the value of properties in an image with the specified keys.The HwMnote read-only key is supported.
     *
     * @param { Record<string, string|null> } records - Property Records whose values are to be modified,
     *     when the value is set to null the tag will be removed.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails,
     *     an error message is returned.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata. For example, the property key is not supported,
     *     or the property value is invalid.
     * @throws { BusinessError } 7700304 - Failed to write image properties to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    modifyImageAllProperties(records: Record<string, string|null>): Promise<void>;

    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { number } value The offset of data.
     * <br>Unit:bytes.
     * @param { number } length The length fo buf.
     * <br>Unit:bytes.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { number } value The offset of data.
     * <br>Unit:bytes.
     * @param { number } length The length fo buf.
     * <br>Unit:bytes.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { int } offset The offset of data.
     * <br>Unit:bytes.
     * @param { int } length The length fo buf.
     * <br>Unit:bytes.
     * @returns { Promise<void> } A Promise instance used to return the property value.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int): Promise<void>;

    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { number } value The offset of data.
     * <br>Unit:bytes.
     * @param { number } length The length fo buf.
     * <br>Unit:bytes.
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 9
     */
    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { number } value The offset of data.
     * <br>Unit:bytes.
     * @param { number } length The length fo buf.
     * <br>Unit:bytes.
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10
     */
    /**
     * Update the data in the incremental ImageSource.
     *
     * @param { ArrayBuffer } buf The data to be updated.
     * @param { boolean } isFinished If is it finished.
     * @param { int } offset The offset of data.
     * <br>Unit:bytes.
     * @param { int } length The length fo buf.
     * <br>Unit:bytes.
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    updateData(
      buf: ArrayBuffer,
      isFinished: boolean,
      offset: int,
      length: int,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Releases an ImageSource instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Releases an ImageSource instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Creates a Picture object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptionsForPicture } options - Image decoding parameters.
     * @returns { Promise<Picture> } A Promise instance used to return the Picture object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700301 - Decode failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 13 dynamic
     */
    /**
     * Creates a Picture object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptionsForPicture } options - Image decoding parameters.
     * @returns { Promise<Picture> } A Promise instance used to return the Picture object.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700203 - Unsupported options. For example, unsupported desiredPixelFormat causes
     * a failure in converting an image into the desired pixel format.
     * @throws { BusinessError } 7700301 - Decode failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 24 dynamic
     */
    createPicture(options?: DecodingOptionsForPicture): Promise<Picture>

    /**
     * Creates a Picture object based on image decoding parameters. This method uses a promise to
     * return the object.
     *
     * @param { DecodingOptionsForPicture } [options] Image decoding parameters.
     * @returns { Promise<Picture | undefined> } A Promise instance used to return the Picture object.
     * @throws { BusinessError } 7700301 - Failed to decode image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPicture(options?: DecodingOptionsForPicture): Promise<Picture | undefined>

    /**
     * Decodes an image at the specified index into a Picture object.
     *
     * @param { int } index Image index.
     * @returns { Promise<Picture> } Promise that returns the Picture object.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700203 - Unsupported options. For example, index is invalid.
     * @throws { BusinessError } 7700301 - Decoding failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 20 dynamic
     */
    createPictureAtIndex(index: int): Promise<Picture>;

    /**
     * Decodes an image at the specified index into a Picture object.
     *
     * @param { int } index Image index.
     * @returns { Promise<Picture | undefined> } Promise that returns the Picture object.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700203 - Unsupported options. For example, index is invalid.
     * @throws { BusinessError } 7700301 - Decoding failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    createPictureAtIndex(index: int): Promise<Picture | undefined>;

    /**
     * Decodes to a SDR PixelMap, using a as wide gamut as possible.
     * For a SDR ImageSource, decodes to a SDR PixelMap using its native color space.
     * For a HDR ImageSource with a single-channel gainmap, decodes its base(SDR) image and ingores its gainmap.
     * For a HDR ImageSource with a three-channel gainmap, decodes to a SDR PixelMap using CM_DISPLAY_BT2020_SRGB
     * color space.
     * 
     * @returns { Promise<PixelMap> } Decoded PixelMap.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700301 - Decoding failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @since 20 dynamic
     */
    createWideGamutSdrPixelMap(): Promise<PixelMap>

    /**
     * Decodes to a SDR PixelMap, using a as wide gamut as possible.
     * For a SDR ImageSource, decodes to a SDR PixelMap using its native color space.
     * For a HDR ImageSource with a single-channel gainmap, decodes its base(SDR) image and ingores its gainmap.
     * For a HDR ImageSource with a three-channel gainmap, decodes to a SDR PixelMap using CM_DISPLAY_BT2020_SRGB
     * color space.
     * 
     * @returns { Promise<PixelMap | undefined> } Decoded PixelMap.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700301 - Decoding failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @since 23 static
     */
    createWideGamutSdrPixelMap(): Promise<PixelMap | undefined>

    /**
     * Supported image formats.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 6
     */
    /**
     * Supported image formats.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    readonly supportedFormats: Array<string>;

    /**
     * Reads image metadata. You can use propertyKeys to specify the keys of metadata. If propertyKeys is not
     * specified, all metadata that can be read is returned.
     *
     * @param { string[] } [propertyKeys] - Keys of metadata.
     * @param { int } [index] - Frame number. The first frame is used by default.
     * @returns { Promise<ImageMetadata> } Promise used to return the metadata.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata.
     * @throws { BusinessError } 7700204 - Invalid parameter. Possible causes: 1. The index is negative.
     *     2. The index is greater than or equal to the number of frames in the image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readImageMetadata(propertyKeys?: string[], index?: int): Promise<ImageMetadata>;

    /**
     * Write metadata into the image source.
     *
     * @param { ImageMetadata } imageMetadata - ImageMetadata to write into the image source.
     * @returns { Promise<void> } Returns void.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata.
     * @throws { BusinessError } 7700204 - Invalid parameter. Possible causes: The imageSource object is released.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    writeImageMetadata(imageMetadata: ImageMetadata): Promise<void>;

    /**
     * Check whether JPEG image is progressive. This method uses a promise to return the boolean.
     *
     * @returns { Promise<boolean> } A Promise instance used to return true if the ImageSource refers to
     *     a progressive JPEG, false otherwise. If the operation fails, an error message is returned.
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    isJpegProgressive(): Promise<boolean>;

    /**
     * Read metadata of the image source, use metadataType to specify metadata of interest. If metadataType
     * is not specified, all supported metadata will be returned.
     *
     * @param { MetadataType[] } [metadataTypes] - Metadata of interest.
     * @param { int }[index] - Index of interest, default is 0.
     * @returns { Promise<ImageMetadata> } Promise that returns the metadata of the image source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata.
     * @throws { BusinessError } 7700204 - Invalid parameter. Possible causes: 1.The index is negative.
     * 2. The index is greater than or equal to the number of frames in the image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readImageMetadataByType(metadataTypes?: MetadataType[], index?: int): Promise<ImageMetadata>;

    /**
    * Obtains raw data from an image.
    *
    * @returns { Promise<ImageRawData> } A Promise instance used to return image raw data.
    * @throws { BusinessError } 7700101 - Bad source.
    * @throws { BusinessError } 7700102 - Unsupported MIME type.
    * @syscap SystemCapability.Multimedia.Image.ImageSource
    * @stagemodelonly
    * @since 24 dynamic&static
    */
    createImageRawData(): Promise<ImageRawData>

    /**
     * Creates a thumbnail image based on image decoding parameters.
     * This method uses a promise to return the PixelMap object, which represents the thumbnail.
     *
     * @param { DecodingOptionsForThumbnail } [options] - Image decoding parameters for creating the thumbnail.
     * @returns { Promise<PixelMap | undefined> } A Promise instance used to return the PixelMap object representing
     *     the thumbnail.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700204 - Invalid parameter, e.g, invalid generate size.
     * @throws { BusinessError } 7700301 - Decode failed.
     * @throws { BusinessError } 7700303 - Image does not carry thumbnail data.
     * @throws { BusinessError } 7700305 - Thumbnail generation failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    createThumbnail(options?: DecodingOptionsForThumbnail): Promise<PixelMap | undefined>;

    /**
     * Synchronously creates a thumbnail image based on image decoding parameters.
     * This method returns a `PixelMap` object, which represents the generated thumbnail.
     *
     * @param { DecodingOptionsForThumbnail } [options] - Image decoding parameters for creating the thumbnail.
     * @returns { PixelMap | undefined } The PixelMap object representing the generated thumbnail.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large.
     * @throws { BusinessError } 7700204 - Invalid parameter, e.g, invalid generate size.
     * @throws { BusinessError } 7700301 - Decode failed.
     * @throws { BusinessError } 7700303 - Image does not carry thumbnail data.
     * @throws { BusinessError } 7700305 - Thumbnail generation failed.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    createThumbnailSync(options?: DecodingOptionsForThumbnail): PixelMap | undefined;
  }

  /**
   * Describes binary buffer info.
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BinaryBufferInfo {
    /**
     * Describes binary buffer size.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: Size;

    /**
     * Describes binary buffer.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    data: ArrayBuffer;

    /**
     * Bytes per row.If it is not specified, it will be calculated as (width + 7) / 8.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bytesPerRow?: int;
  }

  /**
   * ImagePacker instance.
   *
   * @typedef ImagePacker
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 6
   */
  /**
   * ImagePacker instance.
   *
   * @typedef ImagePacker
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform
   * @since 10
   */
  /**
   * ImagePacker instance.
   *
   * @typedef ImagePacker
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ImagePacker {
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: ImageSource, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: ImageSource, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { PackingOption } options Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @throws { BusinessError } 401 - If the parameter is invalid.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    packToData(source: ImageSource, options: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 8
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a callback to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @param { AsyncCallback<ArrayBuffer> } callback Callback used to return the packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: PixelMap, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 8
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } option Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: PixelMap, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { PackingOption } options Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @throws { BusinessError } 401 - If the parameter is invalid.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    packToData(source: PixelMap, options: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses a Pixelmap sequence into gif.
     *
     * @param { Array<PixelMap> } pixelmapSequence PixelMaps to be encoded.
     * @param { PackingOptionsForSequence } options Options for image packing.
     * @returns { Promise<ArrayBuffer> } encoded buffer.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types;3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Failed to encode image.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    packToDataFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, options: PackingOptionsForSequence): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image into a file and uses a callback to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { int } fd ID of a file descriptor.
     * @param { PackingOption } options Options for image packing.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid input parameter.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    packToFile(source: ImageSource, fd: int, options: PackingOption, callback: AsyncCallback<void>): void;

    /**
     * Compresses or packs an image into a file and uses a promise to return the result.
     *
     * @param { ImageSource } source Image to be processed.
     * @param { int } fd ID of a file descriptor.
     * @param { PackingOption } options Options for image packing.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid input parameter.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    packToFile(source: ImageSource, fd: int, options: PackingOption): Promise<void>;

    /**
     * Compresses or packs an image into a file and uses a callback to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { int } fd ID of a file descriptor.
     * @param { PackingOption } options Options for image packing.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid input parameter.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    packToFile(source: PixelMap, fd: int, options: PackingOption, callback: AsyncCallback<void>): void;

    /**
     * Compresses or packs an image into a file and uses a promise to return the result.
     *
     * @param { PixelMap } source PixelMap to be processed.
     * @param { int } fd ID of a file descriptor.
     * @param { PackingOption } options Options for image packing.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     * 2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     * The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid input parameter.
     * @throws { BusinessError } 62980119 - Failed to encode the image.
     * @throws { BusinessError } 62980120 - Add pixelmap out of range.
     * @throws { BusinessError } 62980172 - Failed to encode icc.
     * @throws { BusinessError } 62980252 - Failed to create surface.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    packToFile(source: PixelMap, fd: int, options: PackingOption): Promise<void>;

    /**
     * Compresses a Pixelmap sequence into gif.
     *
     * @param { Array<PixelMap> } pixelmapSequence PixelMaps to be encoded.
     * @param { int } fd File descriptor of the output encoded file.
     * @param { PackingOptionsForSequence } options Options for image packing.
     * @returns { Promise<void> } void.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types;3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Failed to encode image.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    packToFileFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, fd: int, options: PackingOptionsForSequence): Promise<void>;

     /**
     * Releases an ImagePacker instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    /**
     * Releases an ImagePacker instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases an ImagePacker instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    /**
     * Releases an ImagePacker instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Compresses or packs an image and uses a promise to return the result.
     *
     * @param { Picture } picture Picture to be processed.
     * @param { PackingOption } options Option for image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 13 dynamic
     * @since 23 static
     */
    packing(picture: Picture, options: PackingOption): Promise<ArrayBuffer>;

    /**
     * Compresses or packs an image into a file and uses a promise to return the result.
     *
     * @param { Picture } picture Picture to be processed.
     * @param { int } fd ID of a file descriptor.
     * @param { PackingOption } options Options for image packing.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 13 dynamic
     * @since 23 static
     */
    packToFile(picture: Picture, fd: int, options: PackingOption): Promise<void>

    /**
     * Compresses or packs an image into a file and uses a promise to return the result.
     *
     * @param { BinaryBufferInfo } bufferInfo - image buffer info.
     * @param { int } fd - ID of a file descriptor
     *     <br>The value must be a positive integer.
     * @param { PackingOptionsForTiff } [options] - Options for tiff image packing.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 7800202 - Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm
     *     mismatch.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packBinaryImageToTiffFile(bufferInfo: BinaryBufferInfo, fd: int, options?: PackingOptionsForTiff): Promise<void>;

    /**
     * Compresses or packs an image into a file and uses a promise to return the result.
     *
     * @param { BinaryBufferInfo } bufferInfo - image buffer info.
     * @param { PackingOptionsForTiff } [options] - Options for tiff image packing.
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the compressed or packed data.
     * @throws { BusinessError } 7800202 - Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm
     *     mismatch.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packBinaryImageToTiffData(bufferInfo: BinaryBufferInfo, options?: PackingOptionsForTiff): Promise<ArrayBuffer>;

    /**
     * Supported image formats.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 6
     */
    /**
     * Supported image formats.
     *
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    readonly supportedFormats: Array<string>;
  }

  /**
   * Provides basic image operations, including obtaining image information, and reading and writing image data.
   *
   * @typedef Image
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Image {
    /**
     * Gets the image area, which always covers the entire image and can not be modified.
     * clipRect.size equals to the size of the image.
     * clipRect.x and clipRect.y are always 0, indicating the top-left corner of the image.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    clipRect: Region;

    /**
     * Image size.
     *
     * @type { Size }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly size: Size;

    /**
     * Image format.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: int;

    /**
     * Image timestamp.
     * <br>Unit:ns.
     *
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp: long;

    /**
     * Color space of the image.
     *
     * @type { colorSpaceManager.ColorSpace }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly colorSpace: colorSpaceManager.ColorSpace;

    /**
     * Get component buffer from image and uses a callback to return the result.
     *
     * @param { ComponentType } componentType The component type of image.
     * @param { AsyncCallback<Component> } callback Callback used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getComponent(componentType: ComponentType, callback: AsyncCallback<Component>): void;

    /**
     * Get component buffer from image and uses a promise to return the result.
     *
     * @param { ComponentType } componentType The component type of image.
     * @returns { Promise<Component> } A Promise instance used to return the component buffer.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getComponent(componentType: ComponentType): Promise<Component>;

    /**
     * Release current image to receive another and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release current image to receive another and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains the image buffer data.
     *
     * @returns { ImageBufferData | null } Image data obtained. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBufferData(): ImageBufferData | null;

    /**
     * Obtains HDR metadata.
     * 
     * @param { HdrMetadataKey } key Key of the HDR metadata.
     * @returns { HdrMetadataValue | null } HDR metadata obtained. If no HDR metadata exists, null is returned.
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getMetadata(key: HdrMetadataKey): HdrMetadataValue | null;
  }

  /**
   * Image receiver object.
   *
   * @typedef ImageReceiver
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamic
   * @since 23 static
   */
  interface ImageReceiver {
    /**
     * Image size.
     *
     * @type { Size }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly size: Size;

    /**
     * Image capacity.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capacity: int;

    /**
     * Image format.
     *
     * @type { ImageFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: ImageFormat;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a callback to return the result.
     *
     * @param { AsyncCallback<string> } callback Callback used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    getReceivingSurfaceId(callback: AsyncCallback<string>): void;

    /**
     * Get an id which indicates a surface and can be used to set to Camera or other component can receive a surface
     * and uses a promise to return the result.
     *
     * @returns { Promise<string> } A Promise instance used to return the surface id.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * Get lasted image from receiver and uses a callback to return the result.
     *
     * @param { AsyncCallback<Image> } callback Callback used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readLatestImage(callback: AsyncCallback<Image>): void;

    /**
     * Get lasted image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the latest image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readLatestImage(): Promise<Image>;

    /**
     * Get next image from receiver and uses a callback to return the result.
     *
     * @param { AsyncCallback<Image> } callback Callback used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readNextImage(callback: AsyncCallback<Image>): void;

    /**
     * Get next image from receiver and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the next image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readNextImage(): Promise<Image>;

    /**
     * Subscribe callback when receiving an image
     *
     * @param { 'imageArrival' } type Callback used to return the next image.
     * @param { AsyncCallback<void> } callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Subscribe callback when receiving an image
     *
     * @param { AsyncCallback<void> } callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 23 static
     */
    onImageArrival(callback: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer
     *
     * @param { 'imageArrival' } type - Event type.
     * @param { AsyncCallback<void> } callback Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 13 dynamic
     */
    off(type: 'imageArrival', callback?: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer
     *s
     * @param { AsyncCallback<void> } callback Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 23 static
     */
    offImageArrival(callback?: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release image receiver instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Image creator object.
   *
   * @typedef ImageCreator
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9 dynamic
   * @since 23 static
   */
  interface ImageCreator {
    /**
     * Image capacity.
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capacity: int;

    /**
     * Image format.
     *
     * @type { ImageFormat }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: ImageFormat;

    /**
     * Apply for new graphic buffer from free queue and use a callback to return the result.
     *
     * @param { AsyncCallback<Image> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    dequeueImage(callback: AsyncCallback<Image>): void;

    /**
     * Apply for new graphic buffer from free queue and uses a promise to return the result.
     *
     * @returns { Promise<Image> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    dequeueImage(): Promise<Image>;

    /**
     * Queue buffer to dirty queue and uses a callback to return the result.
     *
     * @param { Image } image
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    queueImage(image: Image, callback: AsyncCallback<void>): void;

    /**
     * Queue buffer to dirty queue and uses a promise to return the result.
     *
     * @param { Image } image
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    queueImage(image: Image): Promise<void>;

    /**
     * Subscribe callback when releasing buffer
     *
     * @param { 'imageRelease' } type Callback used to return the operation result.
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     */
    on(type: 'imageRelease', callback: AsyncCallback<void>): void;

    /**
     * Subscribe callback when releasing buffer
     *
     * @param { AsyncCallback<void> } callback Callback used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 23 static
     */
    onImageRelease(callback: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer
     *
     * @param { 'imageRelease' } type - Event type.
     * @param { AsyncCallback<void> } callback Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 13 dynamic
     */
    off(type: 'imageRelease', callback?: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer
     *
     * @param { AsyncCallback<void> } callback Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 23 static
     */
    offImageRelease(callback?: AsyncCallback<void>): void;

    /**
     * Releases buffer in bufferqueue instance and uses a callback to return the result.
     *
     * @param { AsyncCallback<void> } callback Callback to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases buffer in bufferqueue instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Obtains the image formats (MIME types) that can be decoded.
   *
   * @returns { string[] } Returns an array of the supported image formats.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 20 dynamic
   * @since 23 static
   */
  function getImageSourceSupportedFormats(): string[];

  /**
   * Obtains the image formats (MIME types) that can be encoded.
   *
   * @returns { string[] } Returns an array of the supported image formats.
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 20 dynamic
   * @since 23 static
   */
  function getImagePackerSupportedFormats(): string[];
}

export default image;
