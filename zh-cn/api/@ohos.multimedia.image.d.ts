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
 * 本模块提供图片的解码、编码、编辑、元数据处理和图片接收等能力。
 * 
 * 本模块包含以下基础类：
 * 
 * - [ImageSource]{@link image.ImageSource}类，提供获取[图片信息]{@link image.ImageInfo}、将图片解码为PixelMap或Picture、读取和修改
 * [图片属性]{@link image.PropertyKey}的能力。[支持解码的图片格式](docroot://reference/apis-image-kit/arkts-apis-image-ImageSource.md#属性)
 * 包括png、jpeg、bmp、gif、webp、dng、heic<sup>12+</sup>、wbmp<sup>23+</sup>、heifs<sup>23+</sup>、tiff<sup>23+</sup>。
 * - [ImagePacker]{@link image.ImagePacker}类，提供将图片编码为压缩后的数据流或文件的能力。编码前需获取图片的ImageSource、PixelMap或Picture作为输入。
 * [支持编码的图片格式](docroot://reference/apis-image-kit/arkts-apis-image-ImagePacker.md#属性)包括jpeg、webp、png、heic<sup>12+</sup>、
 * gif<sup>18+</sup>。
 * - [PixelMap]{@link image.PixelMap}类，位图对象，包含像素数据以及[图片信息]{@link image.ImageInfo}。可用于读取或写入像素数据，进行裁剪、缩放、平移、旋转、镜像等操作，并可直接传
 * 给[Image组件]{@link ./@internal/component/ets/image}用于显示。还提供了获取和设置图片色域、HDR元数据的方法。
 * - [Picture]{@link image.Picture}类，多图对象，由主图、辅助图和元数据组成。其中，主图包含了主要图像信息；辅助图用于存储与主图相关的附加信息；元数据用于存储与图片相关的其他信息。Picture提供获取主图
 * 、合成HDR图、获取辅助图、设置辅助图、获取元数据、设置元数据等方法。
 * - [AuxiliaryPicture]{@link image.AuxiliaryPicture}类，辅助图一般用于辅助主图进行特殊信息的展示，使图像包含更丰富的信息。目前支持的辅助图的类型可参考
 * [AuxiliaryPictureType]{@link image.AuxiliaryPictureType}。
 * - [Metadata]{@link image.Metadata}类，以Key-Value的形式存储图像的元数据。目前支持的元数据类型可参考[MetadataType]{@link image.MetadataType}，包含
 * Exif元数据、水印裁剪图元数据和HEIF序列图像元数据。Exif元数据的Key可参考[PropertyKey]{@link image.PropertyKey}；水印裁剪图元数据的Key可参考
 * [FragmentMapPropertyKey]{@link image.FragmentMapPropertyKey}；HEIF序列图像元数据的Key可参考
 * [HeifsPropertyKey]{@link image.HeifsPropertyKey}。
 * - [ExifMetadata]{@link image.ExifMetadata}类，以Key-Value的形式存储图像的Exif元数据。Exif元数据的Key可参考
 * [PropertyKey]{@link image.PropertyKey}。
 * - [MakerNoteHuaweiMetadata]{@link image.MakerNoteHuaweiMetadata}类，以Key-Value的形式存储图像Huawei相机定义的照片元数据。Huawei相机定义的照片元数据的
 * Key可参考[PropertyKey]{@link image.PropertyKey}。
 * - [HeifsMetadata]{@link image.HeifsMetadata}类，以Key-Value的形式存储图像的HEIF序列图像元数据。HEIF序列图像元数据的Key可参考
 * [HeifsPropertyKey]{@link image.HeifsPropertyKey}。
 * - [WebPMetadata](docroot://reference/apis-image-kit/arkts-apis-image-WebPMetadata.md)类，以Key-Value的形式存储图像的WebP图像元数据。
 * WebP图像元数据的Key可参考[WebPPropertyKey]{@link image.WebPPropertyKey}。
 * - [GifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-GifMetadata.md)类，以Key-Value的形式存储图像的GIF图像元数据。GIF图像
 * 元数据的Key可参考[GifPropertyKey]{@link image.GifPropertyKey}。
 * - [JfifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-JfifMetadata.md)类，以Key-Value的形式存储图像的JFIF图像元数据。
 * JFIF图像元数据的Key可参考[JfifPropertyKey]{@link image.JfifPropertyKey}。
 * - [TiffMetadata](docroot://reference/apis-image-kit/arkts-apis-image-TiffMetadata.md)类，以Key-Value的形式存储图像的TIFF图像元数据。
 * TIFF图像元数据的Key可参考[TiffPropertyKey]{@link image.TiffPropertyKey}。
 * - [PngMetadata](docroot://reference/apis-image-kit/arkts-apis-image-PngMetadata.md)类，以Key-Value的形式存储图像的PNG图像元数据。PNG图像
 * 元数据的Key可参考[PngPropertyKey]{@link image.PngPropertyKey}。
 * - [AvisMetadata](docroot://reference/apis-image-kit/arkts-apis-image-AvisMetadata.md)类，以Key-Value的形式存储图像的AVIS图像元数据。
 * AVIS图像元数据的Key可参考[AvisPropertyKey]{@link image.AvisPropertyKey}。
 * - [ImageReceiver]{@link image.ImageReceiver}类，作为图片的消费者，用于从Surface中接收、读取图片。
 * - [ImageCreator]{@link image.ImageCreator}类，作为图片的生产者，用于将图片写入到Surface中。
 * - [Image]{@link image.Image}类，供ImageReceiver和ImageCreator使用，用于传输图片对象，其实际内容由生产者决定。如相机预览流提供的Image对象存储了YUV数据、相机拍照提供的
 * Image对象存储了JPEG文件。
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
   * 表示图片像素格式的枚举。
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
     * 未知格式。
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
     * 颜色信息由透明度（Alpha）与R（Red）、G（Green）、B（Blue）四部分组成，每个部分占8位，总共占32位，按照从高位到低位的顺序储存。该格式当前仅支持PixelMap的接口。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    ARGB_8888 = 1,

    /**
     * 颜色信息由R（Red）、G（Green）、B（Blue）三部分组成，R占5位，G占6位，B占5位，总共占16位，按照从高位到低位的顺序储存。
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
     * 颜色信息由R（Red）、G（Green）、B（Blue）与透明度（Alpha）四部分组成，每个部分占8位，总共占32位，按照从高位到低位的顺序储存。对应
     * [相机服务CameraFormat中的CAMERA_FORMAT_RGBA_8888]{@link @ohos.multimedia.camera:camera.CameraFormat}。
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
     * 颜色信息由B（Blue）、G（Green）、R（Red）与透明度（Alpha）四部分组成，每个部分占8位，总共占32位，按照从高位到低位的顺序储存。
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
     * 颜色信息由R（Red）、G（Green）、B（Blue）三部分组成，每个部分占8位，总共占24位，按照从高位到低位的顺序储存。
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
     * 颜色信息仅包含透明度（Alpha），每个像素占8位，按照从高位到低位的顺序储存。一个或多个像素组成一行像素，每行像素数据按4字节对齐，如果一行像素所占的字节数不是4的整数倍，则在行末填充空白字节以满足对齐要求。
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
     * 颜色信息由R（Red）、G（Green）、B（Blue）与透明度（Alpha）四部分组成，每个部分占16位，总共占64位，按照从高位到低位的顺序以FP16半精度浮点数的形式储存。
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
     * YVU像素排列，V分量在U分量之前。颜色信息由亮度分量Y和交错排列的色度分量V和U组成，其中Y分量占8位，UV分量因4:2:0采样平均占4位，总共平均占12位，按照从高位到低位的顺序储存。对应
     * [相机服务CameraFormat中的CAMERA_FORMAT_YUV_420_SP]{@link @ohos.multimedia.camera:camera.CameraFormat}。
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
     * YUV像素排列，U分量在V分量之前。颜色信息由亮度分量Y和交错排列的色度分量U和V组成，其中Y分量占8位，UV分量因4:2:0采样平均占4位，总共平均占12位，按照从高位到低位的顺序储存。
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
     * 颜色信息由R（Red）、G（Green）、B（Blue）与透明度（Alpha）四部分组成，其中R、G、B分别占10位，透明度占2位，总共占32位，按照从高位到低位的顺序储存。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    RGBA_1010102 = 10,

    /**
     * 颜色信息由亮度分量Y和色度分量Cb与Cr组成，每个分量有效10位，实际存储时，Y平面每个像素占16位数据（10位有效），UV平面交错排列，每4个像素占32位数据（每色度分量10位有效），平均有效占15位，按照从高位到低位的顺序
     * 储存。对应[相机服务CameraFormat中的CAMERA_FORMAT_YCBCR_P010]{@link @ohos.multimedia.camera:camera.CameraFormat}。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_P010 = 11,

    /**
     * 颜色信息由亮度分量Y和色度分量Cr与Cb组成，每个分量有效10位，实际存储时，Y平面每个像素占16位数据（10位有效），UV平面交错排列，每4个像素占32位数据（每色度分量10位有效），平均有效占15位，按照从高位到低位的顺序
     * 储存。对应[相机服务CameraFormat中的CAMERA_FORMAT_YCRCB_P010]{@link @ohos.multimedia.camera:camera.CameraFormat}。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    YCRCB_P010 = 12,

    /**
     * 仅包含Y平面（亮度）的单通道灰度格式，每个像素占8位，按照从高位到低位的顺序储存。
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
   * 枚举，画质效果等级类型。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum ResolutionQuality {
    /**
     * 低画质效果，解码耗时短。<br/
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * 中等画质效果，解码耗时中等。<br/
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIUM = 2,

    /**
     * 最高等级画质效果，解码耗时长。<br/
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH = 3
  }

  /**
   * 表示图片尺寸。
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
   * 表示Exif（Exchangeable image file format）图像信息的枚举。
   * 
   * - 格式示例中的key为：image.PropertyKey.XXX（XXX为枚举的名称，如：image.PropertyKey.NEW_SUBFILE_TYPE） 。
   * - 格式示例仅用于说明修改传值和读取结果的格式。具体接口使用方法请参考：
   * [modifyImageProperty]{@link image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)}（修改单个Exif字段）、
   * [modifyImageProperties]{@link image.ImageSource.modifyImageProperties(records: Record<PropertyKey, string|null>)}（修
   * 改多个Exif字段）、
   * [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}（读取单个
   * Exif字段）、[getImageProperties]{@link image.ImageSource.getImageProperties(key: Array<PropertyKey>)}（读取多个Exif字段）。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 10]
   * @since 7 dynamic
   * @since 23 static
   */
  enum PropertyKey {
    /**
     * 像素各分量的位数，如RGB，3分量，格式是8,8,8。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    BITS_PER_SAMPLE = 'BitsPerSample',

    /**
     * 图片方向。
     * 
     * 1："Top-left"，图像未旋转。
     * 
     * 2："Top-right"，镜像水平翻转。
     * 
     * 3："Bottom-right"，图像旋转180°。
     * 
     * 4："Bottom-left"，镜像垂直翻转。
     * 
     * 5："Left-top"，镜像水平翻转再顺时针旋转270°。
     * 
     * 6："Right-top"，顺时针旋转90°。
     * 
     * 7："Right-bottom"，镜像水平翻转再顺时针旋转90°。
     * 
     * 8："Left-bottom"，顺时针旋转270°。
     * 
     * 如果读到未定义值x会返回"Unknown Value x"。获取该属性时会以字符串的形式返回。修改该属性时既可以以数字形式指定，也可以以字符串形式指定。
     * 
     * 更多关于图片旋转角度的说明可参考：[如何获取图片的旋转角度信息](docroot://media/image/image-faqs/image-rotate-faq.md)。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    ORIENTATION = 'Orientation',

    /**
     * 图片长度。单位：像素（px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    IMAGE_LENGTH = 'ImageLength',

    /**
     * 图片宽度。单位：像素（px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    IMAGE_WIDTH = 'ImageWidth',

    /**
     * 图片纬度。修改时应按"度，分，秒"格式传入，如"39，54，7.542"
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LATITUDE = 'GPSLatitude',

    /**
     * 图片经度。修改时应按"度，分，秒"格式传入，如"116，19，42.16"
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LONGITUDE = 'GPSLongitude',

    /**
     * 用于标识图像拍摄地点的纬度方向（北半球或南半球）。
     * 
     * 78："North"。
     * 
     * 83："South"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LATITUDE_REF = 'GPSLatitudeRef',

    /**
     * 经度引用，例如W或E， 用于标识图像拍摄地点的经度方向（东半球或西半球）。
     * 
     * 69："East"。
     * 
     * 87："West"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 7 dynamic
     * @since 23 static
     */
    GPS_LONGITUDE_REF = 'GPSLongitudeRef',

    /**
     * 拍摄时间，例如2022:09:06 15:48:00。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    DATE_TIME_ORIGINAL = 'DateTimeOriginal',

    /**
     * 曝光时间。单位：秒（s）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    EXPOSURE_TIME = 'ExposureTime',

    /**
     * 拍摄场景模式，例如人像、风光、运动、夜景等。
     * 
     * 1："Directly photographed"，图像传感器直接拍摄。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    SCENE_TYPE = 'SceneType',

    /**
     * ISO感光度，例如400。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    ISO_SPEED_RATINGS = 'ISOSpeedRatings',

    /**
     * 光圈值，例如f/1.8。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    F_NUMBER = 'FNumber',

    /**
     * 日期时间。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TIME = 'DateTime',

    /**
     * GPS时间戳。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    GPS_TIME_STAMP = 'GPSTimeStamp',
 
    /**
     * GPS日期戳。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    GPS_DATE_STAMP = 'GPSDateStamp',
 
    /**
     * 图像信息描述。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGE_DESCRIPTION = 'ImageDescription',
 
    /**
     * 生产商。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAKE = 'Make',
 
    /**
     * 设备型号。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MODEL = 'Model',
 
    /**
     * 拍照模式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PHOTO_MODE = 'PhotoMode',
 
    /**
     * 灵敏度类型。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SENSITIVITY_TYPE = 'SensitivityType',
 
    /**
     * 标准输出灵敏度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    STANDARD_OUTPUT_SENSITIVITY = 'StandardOutputSensitivity',
 
    /**
     * 推荐曝光指数。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    RECOMMENDED_EXPOSURE_INDEX = 'RecommendedExposureIndex',
 
    /**
     * ISO速度等级。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    ISO_SPEED = 'ISOSpeedRatings',
 
    /**
     * 光圈值。格式如4/1。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    APERTURE_VALUE = 'ApertureValue',
 
    /**
     * 曝光偏差值。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    EXPOSURE_BIAS_VALUE = 'ExposureBiasValue',
 
    /**
     * 测光模式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    METERING_MODE = 'MeteringMode',
 
    /**
     * 光源。例如Fluorescent。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    LIGHT_SOURCE = 'LightSource',
 
    /**
     * 闪光灯，记录闪光灯状态。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FLASH = 'Flash',
 
    /**
     * 焦距。单位：毫米（mm）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FOCAL_LENGTH = 'FocalLength',
 
    /**
     * 用户注释。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    USER_COMMENT = 'UserComment',
 
    /**
     * 像素X尺寸。单位：像素（px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PIXEL_X_DIMENSION = 'PixelXDimension',
 
    /**
     * 像素Y尺寸。单位：像素（px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PIXEL_Y_DIMENSION = 'PixelYDimension',
 
    /**
     * 白平衡。
     * 
     * 0："Auto white balance"，自动白平衡。
     * 
     * 1："Manual white balance"，手动白平衡。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    WHITE_BALANCE = 'WhiteBalance',
 
    /**
     * 换算成35mm等效焦距。单位：毫米（mm）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    FOCAL_LENGTH_IN_35_MM_FILM = 'FocalLengthIn35mmFilm',
 
    /**
     * 捕获模式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    CAPTURE_MODE = 'HwMnoteCaptureMode',
 
    /**
     * 物理孔径，光圈大小。单位：毫米（mm）。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PHYSICAL_APERTURE = 'HwMnotePhysicalAperture',

    /**
     * 滚动角度。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ROLL_ANGLE = 'HwMnoteRollAngle',

    /**
     * 俯仰角度。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    PITCH_ANGLE = 'HwMnotePitchAngle',

    /**
     * 拍照场景：食物。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_FOOD_CONF = 'HwMnoteSceneFoodConf',

    /**
     * 拍照场景：舞台。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_STAGE_CONF = 'HwMnoteSceneStageConf',

    /**
     * 拍照场景：蓝天。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_BLUE_SKY_CONF = 'HwMnoteSceneBlueSkyConf',

    /**
     * 拍照场景：绿植。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_GREEN_PLANT_CONF = 'HwMnoteSceneGreenPlantConf',

    /**
     * 拍照场景：沙滩。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_BEACH_CONF = 'HwMnoteSceneBeachConf',

    /**
     * 拍照场景：下雪。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_SNOW_CONF = 'HwMnoteSceneSnowConf',

    /**
     * 拍照场景：日落。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_SUNSET_CONF = 'HwMnoteSceneSunsetConf',

    /**
     * 拍照场景：花。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_FLOWERS_CONF = 'HwMnoteSceneFlowersConf',

    /**
     * 拍照场景：夜晚。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_NIGHT_CONF = 'HwMnoteSceneNightConf',

    /**
     * 拍照场景：文本。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    SCENE_TEXT_CONF = 'HwMnoteSceneTextConf',

    /**
     * 人脸数量。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    FACE_COUNT = 'HwMnoteFaceCount',

    /**
     * 对焦模式。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    FOCUS_MODE = 'HwMnoteFocusMode',
  
    /**
     * 图像压缩方案。
     * 
     * 1："Uncompressed"。
     * 
     * 2："CCITT RLE"。
     * 
     * 3："T4/Group 3 Fax"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPRESSION = 'Compression',

    /**
     * 像素构成，例如RGB或YCbCr。
     * 
     * 0："Reversed mono"。
     * 
     * 1："Normal mono"。
     * 
     * 2："RGB"。
     * 
     * 3："Palette"。
     * 
     * 5："CMYK"。
     * 
     * 6："YCbCr"。
     * 
     * 8："CieLAB"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTOMETRIC_INTERPRETATION = 'PhotometricInterpretation',

    /**
     * 每个strip的字节偏移量。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STRIP_OFFSETS = 'StripOffsets',

    /**
     * 每个像素的分量数。由于该标准适用于RGB和YCbCr图像，因此该标签的值设置为 3。在JPEG压缩数据中，使用JPEG标记代替该标签。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLES_PER_PIXEL = 'SamplesPerPixel',

    /**
     * 每个strip的图像数据行数。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ROWS_PER_STRIP = 'RowsPerStrip',

    /**
     * 每个图像数据带的总字节数。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    STRIP_BYTE_COUNTS = 'StripByteCounts',

    /**
     * 图像宽度方向的分辨率。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    X_RESOLUTION = 'XResolution',

    /**
     * 图像高度方向的分辨率。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    Y_RESOLUTION = 'YResolution',

    /**
     * 表示像素组件的记录格式，chunky格式或是planar格式。
     * 
     * 1："Chunky format"，chunky格式。
     * 
     * 2："Planar format"，planar格式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PLANAR_CONFIGURATION = 'PlanarConfiguration',

    /**
     * 用于测量XResolution和YResolution的单位，英寸或者厘米。
     * 
     * 2："Inch"，英寸。
     * 
     * 3："Centimeter"，厘米。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RESOLUTION_UNIT = 'ResolutionUnit',

    /**
     * 图像的传递函数，通常用于颜色校正。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    TRANSFER_FUNCTION = 'TransferFunction',

    /**
     * 用于生成图像的软件名称和版本。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOFTWARE = 'Software',

    /**
     * 创建图像的用户名称。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ARTIST = 'Artist',

    /**
     * 用于指定图像的白点（white point）色度坐标，即图像颜色空间中被认为是“白色”的参考点。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    WHITE_POINT = 'WhitePoint',

    /**
     * 图像的主要颜色的色度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PRIMARY_CHROMATICITIES = 'PrimaryChromaticities',

    /**
     * 从RGB到YCbCr图像数据的转换矩阵系数，RGB→YCbCr转换时的加权系数。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_COEFFICIENTS = 'YCbCrCoefficients',

    /**
     * 色度分量与亮度分量的采样比率。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_SUB_SAMPLING = 'YCbCrSubSampling',

    /**
     * 色度分量相对于亮度分量的位置。
     * 
     * 1："Centered"，中心对齐（Centered），Cb/Cr分量的采样点相对于亮度像素点是居中对齐（常见）。
     * 
     * 2："Co-sited"，左上对齐（Co-sited）Cb/Cr分量和 Y 分量的采样点对齐在左上角。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    YCBCR_POSITIONING = 'YCbCrPositioning',

    /**
     * 参考黑点值和白点值。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    REFERENCE_BLACK_WHITE = 'ReferenceBlackWhite',

    /**
     * 图像的版权信息。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COPYRIGHT = 'Copyright',

    /**
     * JPEG压缩缩略图数据开始字节（SOI）的偏移。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    JPEG_INTERCHANGE_FORMAT = 'JPEGInterchangeFormat',

    /**
     * JPEG压缩缩略图数据的字节数。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    JPEG_INTERCHANGE_FORMAT_LENGTH = 'JPEGInterchangeFormatLength',

    /**
     * 拍照时相机用来设置曝光的程序的类别。
     * 
     * 0："Not defined"。
     * 
     * 1："Manual"。  
     * 
     * 2："Normal program"。
     * 
     * 3："Aperture priority"。
     * 
     * 4："Shutter priority"。
     * 
     * 5："Creative program (biased toward depth of field)"。
     * 
     * 6："Creative program (biased toward fast shutter speed)"。
     * 
     * 7："Portrait mode (for closeup photos with the background out of focus)"。
     * 
     * 8："Landscape mode (for landscape photos with the background in focus)"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_PROGRAM = 'ExposureProgram',

    /**
     * 表示所用相机的每个通道的光谱灵敏度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPECTRAL_SENSITIVITY = 'SpectralSensitivity',

    /**
     * 表示ISO 14524中规定的光电转换函数（OECF）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OECF = 'OECF',

    /**
     * 支持的Exif标准版本。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXIF_VERSION = 'ExifVersion',

    /**
     * 图像作为数字数据存储的日期和时间，格式为YYYY:MM:DD HH:mm:ss。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_TIME_DIGITIZED = 'DateTimeDigitized',

    /**
     * 压缩数据的特定信息。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPONENTS_CONFIGURATION = 'ComponentsConfiguration',

    /**
     * 快门速度，以APEX（摄影曝光的加法系统）值表示。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SHUTTER_SPEED = 'ShutterSpeedValue',

    /**
     * 图像的亮度值，以APEX单位表示。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BRIGHTNESS_VALUE = 'BrightnessValue',

    /**
     * 最小F数镜头。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MAX_APERTURE_VALUE = 'MaxApertureValue',

    /**
     * 测量单位为米的主体距离。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_DISTANCE = 'SubjectDistance',

    /**
     * 该标签指示整个场景中主要主体的位置和区域。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_AREA = 'SubjectArea',

    /**
     * Exif/DCF制造商使用的标签，用于记录任何所需信息。
     * 
     * 在API version 12-19，该字段为只读；从API version 20开始，该字段可读写。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    MAKER_NOTE = 'MakerNote',

    /**
     * 用于为DateTime标签记录秒的分数的标签。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME = 'SubsecTime',

    /**
     * 用于为DateTimeOriginal标签记录秒的分数的标签。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME_ORIGINAL = 'SubsecTimeOriginal',

    /**
     * 用于为DateTimeDigitized标签记录秒的分数的标签。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSEC_TIME_DIGITIZED = 'SubsecTimeDigitized',

    /**
     * 该标签表示FPXR文件支持的Flashpix格式版本，增强了设备兼容性。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FLASHPIX_VERSION = 'FlashpixVersion',

    /**
     * 色彩空间信息标签，通常记录为色彩空间指定符。
     * 
     * 1："sRGB"，sRGB标准色彩空间（常见默认值）。
     * 
     * 2："Adobe RGB"，exif中未定义，但大量相机使用。
     * 
     * 0xffff："Uncalibrated"，表示未校准，颜色空间不明确。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COLOR_SPACE = 'ColorSpace',

    /**
     * 与图像数据相关的音频文件的名称。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    RELATED_SOUND_FILE = 'RelatedSoundFile',

    /**
     * 图像捕获时的闪光能量，以BCPS表示。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FLASH_ENERGY = 'FlashEnergy',

    /**
     * 相机或输入设备的空间频率表。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPATIAL_FREQUENCY_RESPONSE = 'SpatialFrequencyResponse',

    /**
     * 图像宽度中每FocalPlaneResolutionUnit的像素。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_X_RESOLUTION = 'FocalPlaneXResolution',

    /**
     * 图像高度中每FocalPlaneResolutionUnit的像素。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_Y_RESOLUTION = 'FocalPlaneYResolution',

    /**
     * 测量FocalPlaneXResolution和FocalPlaneYResolution的单位。
     * 
     * 2："Inch"，英寸。
     * 
     * 3："Centimeter"，厘米。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FOCAL_PLANE_RESOLUTION_UNIT = 'FocalPlaneResolutionUnit',

    /**
     * 主要对象相对于左边缘的位置。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_LOCATION = 'SubjectLocation',

    /**
     * 捕获时选定的曝光指数。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_INDEX = 'ExposureIndex',

    /**
     * 相机上的图像传感器类型。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SENSING_METHOD = 'SensingMethod',

    /**
     * 表明图像来源。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FILE_SOURCE = 'FileSource',

    /**
     * 图像传感器的色彩滤光片（CFA）几何图案。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CFA_PATTERN = 'CFAPattern',

    /**
     * 指示图像数据上的特殊处理。
     * 
     * 0："Normal process"，正常处理（未自定义渲染）。
     * 
     * 1："Custom process"，自定义处理（如艺术效果、美颜、HDR）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CUSTOM_RENDERED = 'CustomRendered',

    /**
     * 拍摄时设置的曝光模式。
     * 
     * 0："Auto exposure"，自动曝光（Auto）。
     * 
     * 1："Manual exposure"，手动曝光（Manual）。
     * 
     * 2："Auto bracket"，自动曝光优先（Auto bracket）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    EXPOSURE_MODE = 'ExposureMode',

    /**
     * 捕获时的数字变焦比率。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DIGITAL_ZOOM_RATIO = 'DigitalZoomRatio',

    /**
     * 捕获的场景类型。
     * 
     * 0："Standard"，标准。
     * 
     * 1："Landscape"，风景。
     * 
     * 2："Portrait"，人像。
     * 
     * 3："Night scene"，夜景。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_CAPTURE_TYPE = 'SceneCaptureType',

    /**
     * 整体图像增益调整的程度。
     * 
     * 0："Normal"，无增益控制。
     * 
     * 1："Low gain up"，低增益提升。
     * 
     * 2："High gain up"，高增益提升。
     * 
     * 3："Low gain down"， 低增益降低。
     * 
     * 4："High gain down"，高增益降低。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GAIN_CONTROL = 'GainControl',

    /**
     * 相机应用的对比度处理方向。
     * 
     * 0："Normal"，正常对比度。
     * 
     * 1："Soft"，软对比度。
     * 
     * 2："Hard"，硬对比度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CONTRAST = 'Contrast',

    /**
     * 相机应用的饱和度处理方向。
     * 
     * 0："Normal"，正常。
     * 
     * 1："Low saturation"，低饱和度。
     * 
     * 2："High saturation"，高饱和度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SATURATION = 'Saturation',

    /**
     * 相机应用的锐度处理方向。
     * 
     * 0："Normal"，正常（Normal）。
     * 
     * 1："Soft"，柔和（Soft）。
     * 
     * 2："Hard"，硬（Hard）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SHARPNESS = 'Sharpness',

    /**
     * 特定相机模型的拍照条件信息。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEVICE_SETTING_DESCRIPTION = 'DeviceSettingDescription',

    /**
     * 表示主体到相机的距离范围。
     * 
     * 0："Unknown"，未知。
     * 
     * 1："Macro"，宏观。
     * 
     * 2："Close view"，近景。
     * 
     * 3："Distant view"，远景。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBJECT_DISTANCE_RANGE = 'SubjectDistanceRange',

    /**
     * 为每张图片唯一分配的标识符。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    IMAGE_UNIQUE_ID = 'ImageUniqueID',

    /**
     * GPS信息版本号。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_VERSION_ID = 'GPSVersionID',

    /**
     * 用于GPS高度的参照高度。
     * 
     * 0："Sea level"，海平面以上（Above Sea Level）。
     * 
     * 1："Sea level reference"，海平面以下（Below Sea Level）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_ALTITUDE_REF = 'GPSAltitudeRef',

    /**
     * 基于GPSAltitudeRef的高度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_ALTITUDE = 'GPSAltitude',

    /**
     * 用于测量的GPS卫星。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SATELLITES = 'GPSSatellites',

    /**
     * 录制图像时GPS接收器的状态。
     * 
     * 'A'："Measurement in progress"，GPS有效，已成功锁定卫星信号，位置数据可信；
     * 
     * 'V'："Measurement interrupted，GPS无效，当前未能定位，位置数据可能为空或不准。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_STATUS = 'GPSStatus',

    /**
     * GPS测量模式。用于表示图像拍摄时GPS定位使用的测量模式，即是使用2D（平面）定位还是3D（含高度）定位。
     * 
     * 2："2-dimensional measurement"，2D测量（纬度+经度）。
     * 
     * 3："3-dimensional measurement"，3D测量（纬度+经度+高度）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_MEASURE_MODE = 'GPSMeasureMode',

    /**
     * GPS DOP（数据精度等级），用于表示拍摄时GPS测量结果的定位精度水平。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DOP = 'GPSDOP',

    /**
     * 用来表示GPS接收器移动速度的单位。
     * 
     * 'K'："km/h"。
     * 
     * 'M'："mph"。
     * 
     * 'N'："knots"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SPEED_REF = 'GPSSpeedRef',

    /**
     * GPS接收器的移动速度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_SPEED = 'GPSSpeed',

    /**
     * GPS接收机移动方向的参照，用于说明这个角度是以哪个“北”为参考。
     * 
     * 'T'："True direction"，真北：地理极点方向，适合地图、导航。
     * 
     * 'M'："Magnetic direction"， 磁北：受地磁影响，磁偏角因地区和时间不同而变化。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_TRACK_REF = 'GPSTrackRef',

    /**
     * GPS接收机的移动方向。用于记录拍摄设备在拍照时的移动方向（行进方向），单位是角度（deg）
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_TRACK = 'GPSTrack',

    /**
     * 图像方向的参照。
     * 
     * 'T'："True direction"，真北：地理极点方向，适合地图、导航。
     * 
     * 'M'："Magnetic direction"， 磁北：受地磁影响，磁偏角因地区和时间不同而变化。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_IMG_DIRECTION_REF = 'GPSImgDirectionRef',

    /**
     * 拍摄时图像的方向。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_IMG_DIRECTION = 'GPSImgDirection',

    /**
     * GPS接收器使用的大地测量数据。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_MAP_DATUM = 'GPSMapDatum',

    /**
     * 目的地点的纬度参照。
     * 
     * 78："North"。
     * 
     * 83："South"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LATITUDE_REF = 'GPSDestLatitudeRef',

    /**
     * 目的地点的纬度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LATITUDE = 'GPSDestLatitude',

    /**
     * 目的地点的经度参照。
     * 
     * 69："East"。
     * 
     * 87："West"。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LONGITUDE_REF = 'GPSDestLongitudeRef',

    /**
     * 目的地点的经度。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_LONGITUDE = 'GPSDestLongitude',

    /**
     * 指向目的地点的方位参照。
     * 
     * 'T'："True direction"，真北：地理极点方向，适合地图、导航。
     * 
     * 'M'："Magnetic direction"，磁北：受地磁影响，磁偏角因地区和时间不同而变化。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_BEARING_REF = 'GPSDestBearingRef',

    /**
     * 目的地方位。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_BEARING = 'GPSDestBearing',

    /**
     * 目标点距离的测量单位。
     * 
     * 'K'："km"，公里。
     * 
     * 'M'："miles"，英里。
     * 
     * 'N'："nautical miles"，海里。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_DISTANCE_REF = 'GPSDestDistanceRef',

    /**
     * 到目的地点的距离。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DEST_DISTANCE = 'GPSDestDistance',

    /**
     * 记录定位方法名的字符串。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_PROCESSING_METHOD = 'GPSProcessingMethod',

    /**
     * 记录GPS区域名的字符串。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_AREA_INFORMATION = 'GPSAreaInformation',

    /**
     * 此字段表示GPS数据是否应用了差分校正，对于精确的位置准确性至关重要。
     * 
     * 0："Without correction"，没有使用差分校正。
     * 
     * 1："Correction applied"，使用差分校正。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_DIFFERENTIAL = 'GPSDifferential',

    /**
     * 相机机身的序列号。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BODY_SERIAL_NUMBER = 'BodySerialNumber',

    /**
     * 相机所有者的姓名。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CAMERA_OWNER_NAME = 'CameraOwnerName',

    /**
     * 表示图像是否为合成图像。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPOSITE_IMAGE = 'CompositeImage',

    /**
     * 用于压缩图像的压缩模式。单位：每像素位数（bit/px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    COMPRESSED_BITS_PER_PIXEL = 'CompressedBitsPerPixel',

    /**
     * DNG版本标签编码了符合DNG规范的四级版本号。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DNG_VERSION = 'DNGVersion',

    /**
     * DefaultCropSize指定了原始坐标中的最终图像大小，考虑了额外的边缘像素。单位：像素（px）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT_CROP_SIZE = 'DefaultCropSize',

    /**
     * 表示系数伽马的值。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GAMMA = 'Gamma',

    /**
     * 该标签指示摄像机或输入设备的ISO速度纬度yyy值，该值在ISO 12232中定义。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ISO_SPEED_LATITUDE_YYY = 'ISOSpeedLatitudeyyy',

    /**
     * 该标签指示摄像机或输入设备的ISO速度纬度zzz值，该值在ISO 12232中定义。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    ISO_SPEED_LATITUDE_ZZZ = 'ISOSpeedLatitudezzz',

    /**
     * 镜头的制造商。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_MAKE = 'LensMake',

    /**
     * 镜头的型号名称。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_MODEL = 'LensModel',

    /**
     * 镜头的序列号。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_SERIAL_NUMBER = 'LensSerialNumber',

    /**
     * 使用的镜头规格。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    LENS_SPECIFICATION = 'LensSpecification',

    /**
     * 在Exif中，"NewSubfileType"字段用于标识子文件的数据类型，如全分辨率图像、缩略图或多帧图像的一部分。其值是位掩码，0代表全分辨率图像，1代表缩略图，2代表多帧图像的一部分。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_SUBFILE_TYPE = 'NewSubfileType',

    /**
     * 在Exif中，OffsetTime字段表示与UTC（协调世界时）的时间偏移，用于确定照片拍摄的本地时间。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME = 'OffsetTime',

    /**
     * 此标签记录图像数字化时的UTC偏移量，有助于准确调整时间戳。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME_DIGITIZED = 'OffsetTimeDigitized',

    /**
     * 此标签记录原始图像创建时的UTC偏移量，对于时间敏感的应用至关重要。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    OFFSET_TIME_ORIGINAL = 'OffsetTimeOriginal',

    /**
     * 合成图像的源图像曝光时间。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_EXPOSURE_TIMES_OF_COMPOSITE_IMAGE = 'SourceExposureTimesOfCompositeImage',

    /**
     * 用于合成图像的源图像数量。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_IMAGE_NUMBER_OF_COMPOSITE_IMAGE = 'SourceImageNumberOfCompositeImage',

    /**
     * 此标签指示此子文件中的数据类型。标签已弃用，请使用NewSubfileType替代。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SUBFILE_TYPE = 'SubfileType',

    /**
     * 此标签指示水平定位误差。单位：米（m）。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GPS_H_POSITIONING_ERROR = 'GPSHPositioningError',

    /**
     * 用于表示图像拍摄时所用的感光度值（ISO 值），也叫ISO Speed。该字段是Exif 2.3后的推荐字段，ISOSpeedRatings（Tag 0x8827）是早期使用的字段，类型和含义相同，若两个字段都存在，以
     * `PhotographicSensitivity` 为主。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTOGRAPHIC_SENSITIVITY = 'PhotographicSensitivity',

    /**
     * 连拍次数。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    BURST_NUMBER = 'HwMnoteBurstNumber',

    /**
     * 人脸置信度。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_CONF = 'HwMnoteFaceConf',

    /**
     * 左眼中心。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_LEYE_CENTER = 'HwMnoteFaceLeyeCenter',

    /**
     * 嘴中心。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_MOUTH_CENTER = 'HwMnoteFaceMouthCenter',

    /**
     * 脸部指针。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_POINTER = 'HwMnoteFacePointer',

    /**
     * 脸部矩形。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_RECT = 'HwMnoteFaceRect',

    /**
     * 右眼中心。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_REYE_CENTER = 'HwMnoteFaceReyeCenter',

    /**
     * FaceCount张人脸的笑脸分数。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_SMILE_SCORE = 'HwMnoteFaceSmileScore',

    /**
     * 人脸算法版本信息。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FACE_VERSION = 'HwMnoteFaceVersion',

    /**
     * 是否是前置相机自拍。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    FRONT_CAMERA = 'HwMnoteFrontCamera',

    /**
     * 场景指针。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_POINTER = 'HwMnoteScenePointer',

    /**
     * 场景算法版本信息。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SCENE_VERSION = 'HwMnoteSceneVersion',

    /**
     * 是否支持XMAGE。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    IS_XMAGE_SUPPORTED = 'HwMnoteIsXmageSupported',

    /**
     * XMAGE水印模式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_MODE = 'HwMnoteXmageMode',

    /**
     * 水印区域X1坐标。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_LEFT = 'HwMnoteXmageLeft',

    /**
     * 水印区域Y1坐标。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_TOP = 'HwMnoteXmageTop',

    /**
     * 水印区域X2坐标。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_RIGHT = 'HwMnoteXmageRight',

    /**
     * 水印区域Y2坐标。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    XMAGE_BOTTOM = 'HwMnoteXmageBottom',

    /**
     * 云增强模式。
     * 
     * **读写能力：** 可读写。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT_MODE = 'HwMnoteCloudEnhancementMode',

    /**
     * 运动快拍模式。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    WIND_SNAPSHOT_MODE = 'HwMnoteWindSnapshotMode',

    /**
     * GIF图片循环次数。0表示无限循环，其他值表示循环次数。
     * 
     * **读写能力：** 只读。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    GIF_LOOP_COUNT = 'GIFLoopCount',

    /**
     * 个性色卡模板名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XTSTYLE_TEMPLATE_NAME = 'HwMnoteXtStyleTemplateName',

    /**
     * 个性色卡自定义光影。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XTSTYLE_CUSTOM_LIGHT_AND_SHADOW = 'HwMnoteXtStyleCustomLightAndShadow',

    /**
     * 个性色卡自定义饱和度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XTSTYLE_CUSTOM_SATURATION = 'HwMnoteXtStyleCustomSaturation',

    /**
     * 个性色卡自定义色调。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XTSTYLE_CUSTOM_HUE = 'HwMnoteXtStyleCustomHue',

    /**
     * 个性色卡曝光参数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XTSTYLE_EXPOSURE_PARAM = 'HwMnoteXtStyleExposureParam',
  }  

  /**
   * 表示图片格式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum ImageFormat {
    /**
     * YCBCR422半平面格式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    YCBCR_422_SP = 1000,

    /**
     * JPEG编码格式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    JPEG = 2000
  }

  /**
   * 表示图像的透明度类型的枚举。
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
     * 未知透明度类型。
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
     * 没有Alpha通道或图片不透明。
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
     * RGB通道预乘Alpha值。
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
     * RGB通道非预乘Alpha值。
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
   * 描述解码时期望的图像动态范围。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum DecodingDynamicRange {
    /**
     * 自适应，根据图片信息处理。即如果图片本身为HDR图片，则会按照HDR内容解码；反之按照SDR内容解码。通过
     * [CreateIncrementalSource]{@link image.CreateIncrementalSource}创建的ImageSource会解码为SDR内容。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * 按照标准动态范围处理图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 1,

    /**
     * 按照高动态范围处理图片。通过[CreateIncrementalSource]{@link image.CreateIncrementalSource}创建的ImageSource会解码为SDR内容。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR = 2
  }

  /**
   * 描述编码时期望的图像动态范围。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum PackingDynamicRange {
    /**
     * 自适应，根据[pixelmap]{@link image.PixelMap}内容处理。即如果pixelmap本身为HDR，则会按照HDR内容进行编码；反之按照SDR内容编码。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * 按照标准动态范围处理图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 1,
  }

  /**
   * 缩放时的插值算法。可根据缩放质量和性能需求选择合适的级别。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @atomicservice [since 14]
   * @since 12 dynamic
   * @since 23 static
   */
  enum AntiAliasingLevel {
    /**
     * 最近邻插值算法。
     * 
     * 速度最快，放大时会有明显的马赛克/锯齿感，适合对性能要求高、对画质要求低的快速缩放场景。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 双线性插值算法。
     * 
     * 适合一般缩放场景。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    LOW = 1,

    /**
     * 双线性插值算法，同时开启Mipmap。
     * 
     * 适合缩小图片的场景，能极好地消除大幅缩小时的混叠与纹理闪烁。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIUM = 2,

    /**
     * 三次卷积插值算法。
     * 
     * 适合对画质要求较高的放大场景。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    HIGH = 3,
  }

  /**
   * 表示图像的缩放模式的枚举。
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
     * 图像适合目标尺寸的效果。
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
     * 缩放图像以填充目标图像区域并居中裁剪区域外的效果。
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
   * 表示图像的组件类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamic
   * @since 23 static
   */
  enum ComponentType {
    /**
     * 亮度信息。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_Y = 1,

    /**
     * 色度信息。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_U = 2,

    /**
     * 色度信息。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    YUV_V = 3,

    /**
     * JPEG 类型。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    JPEG = 4
  }

  /**
   * 表示[PixelMap]{@link image.PixelMap}使用的HDR相关元数据信息的关键字的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrMetadataKey {
    /**
     * [PixelMap]{@link image.PixelMap}使用的元数据类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_METADATA_TYPE = 0,

    /**
     * 静态元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_STATIC_METADATA = 1,

    /**
     * 动态元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_DYNAMIC_METADATA = 2,

    /**
     * Gainmap使用的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR_GAINMAP_METADATA = 3,
  }

  /**
   * 表示[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_METADATA_TYPE关键字对应的值的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrMetadataType {
    /**
     * 无元数据内容。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 表示用于基础图的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BASE = 1,

    /**
     * 表示用于Gainmap图的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    GAINMAP = 2,

    /**
     * 表示用于合成后HDR图的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    ALTERNATE = 3,
  }

  /**
   * 表示用于图像解码的内存类型的枚举。开发者可根据场景选择合适的内存申请类型。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum AllocatorType {
    /**
     * 系统决定内存申请类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    AUTO = 0,

    /**
     * 使用DMA（Direct Memory Access，直接内存访问）的内存类型，适用于对解码及渲染性能有较高要求的场景。根据设备硬件的差异可能会在每行像素的末尾产生用于内存对齐的空白填充字节。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    DMA = 1,

    /**
     * 使用共享内存（Share Memory）的内存类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 15 dynamic
     * @since 23 static
     */
    SHARE_MEMORY = 2,
  }

  /**
   * 表示区域信息。
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
     * 区域大小。
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
     * 区域左上角横坐标。单位：像素（px）。
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
     * 区域左上角纵坐标。单位：像素（px）。
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
   * 表示图片指定区域内的数据。
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
     * 像素数据缓冲区。仅支持BGRA_8888格式的像素数据。
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
     * 偏移量。单位：字节（Byte）。
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
     * 跨距，内存中每行像素所占的空间。单位：字节（Byte）。stride >= region.size.width * 4，不满足时数据读取异常。
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
     * 区域信息，用于按区域进行图像数据的读写。写入的区域宽度加X坐标不能大于原图的宽度，写入的区域高度加Y坐标不能大于原图的高度。
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
   * 表示图片信息。
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
     * 图片大小。
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
     * 像素密度。单位：ppi（像素/英寸）。
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
     * 跨距，内存中每行像素所占的空间。单位：字节（Byte）。stride >= size.width * 4，不满足时数据读取异常。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    stride: int;

    /**
     * 像素格式。
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
     * 透明度。
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
     * 图片真实格式（MIME type）。
     * 
     * 图片解码和图片编码支持格式的范围不同，请避免直接将解码得到的图片真实格式作为图片编码时[PackingOption]{@link image.PackingOption}的format。
     * 
     * 可以使用ImageSource[属性](docroot://reference/apis-image-kit/arkts-apis-image-ImageSource.md#属性)中的supportedFormats和
     * ImagePacker[属性](docroot://reference/apis-image-kit/arkts-apis-image-ImagePacker.md#属性)中的supportedFormats查看解码和编码支持
     * 的格式范围。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    mimeType: string;

    /**
     * true表示图片为高动态范围（HDR），false表示图片非高动态范围（SDR）。对于[ImageSource]{@link image.ImageSource}，代表源图片是否为HDR；对于
     * [PixelMap]{@link image.PixelMap}，代表解码后的PixelMap是否为HDR。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    isHdr: boolean;
  }

  /**
   * 描述TIFF图像编码参数的选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PackingOptionsForTiff {
    /**
     * 该值应为整数，目前仅支持取3、4、5，分别对应压缩算法类型：3（CCITT G3）、4（CCITT G4）、5（LZW）。
     * 
     * - 对于二值图像：必须为3（G3）或4（G4），自动使用4（G4）。
     * - 对于Y8/RGB_888格式：自动使用LZW（5），不支持指定其他压缩算法。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    compression?: int;

    /**
     * 图像方向。默认值为TOP_LEFT。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    orientation?: Orientation;

    /**
     * 水平分辨率。该值必须大于0。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xResolution?: double;

    /**
     * 垂直分辨率。该值必须大于0。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    yResolution?: double;

    /**
     * 分辨率单位：1（无单位）、2（英寸）、3（厘米）。目前仅支持1、2、3。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resolutionUnit?: int;
  }

  /**
   * 表示裁剪与缩放的先后策略的枚举。
   * 
   * 如果在配置解码选项[DecodingOptions]{@link image.DecodingOptions}时，未填入参数cropAndScaleStrategy，并且同时设置了参数desiredRegion和
   * desiredSize，由于系统对于不同图片格式采用的解码算法不同，最终解码效果将略有差异。
   * 
   * 例如原始图片大小为200x200，传入desiredSize:{width: 150, height: 150}，desiredRegion:{x: 0, y: 0, width: 100, height: 100}，即预期解码原
   * 图左上角1/4区域，最终将pixelMap大小缩放至150x150返回。
   * 
   * 对于jpeg、webp图片（部分dng图片解码时会优先解码图片中的jpeg预览图，在此场景下也会被视为jpeg图片格式）会先进行下采样，例如按照7/8下采样，再基于175x175的图片大小进行区域裁剪，因此最终的区域内容稍大于原图
   * 的左上角1/4区域。
   * 
   * 对于svg图片，由于是矢量图，可以任意缩放不损失清晰度，在解码时会根据desiredSize与原图Size的比例选择缩放比例，再基于缩放后的图片大小进行区域裁剪，因此最终返回的解码区域会有所差异。
   * 
   * 针对该场景，建议在解码选项同时设置了desiredRegion与desiredSize时，参数cropAndScaleStrategy应传入CROP_FIRST保证效果一致。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 18 dynamic
   * @since 23 static
   */
  enum CropAndScaleStrategy {
    /**
     * 解码参数如果同时设置desiredRegion与desiredSize，先根据desiredSize进行缩放，再根据desiredRegion进行区域裁剪。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    SCALE_FIRST = 1,

    /**
     * 解码参数如果同时设置desiredRegion与desiredSize，先根据desiredRegion进行区域裁剪，再根据desiredSize进行缩放。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 18 dynamic
     * @since 23 static
     */
    CROP_FIRST = 2
  }

  /**
   * 图片编码的大小限制。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PackingSizeLimit {
    /**
     * 最大编码尺寸。
     * 
     * 当指定的width或者height大于0时，原图尺寸超过限制将保持原宽高比进行缩放，确保图像尺寸不超过该边界。
     * 
     * 默认值为{width: 0, height: 0}，表示不限制编码尺寸。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxSize: Size;

    /**
     * 缩放时采用的缩放算法。默认值是AntiAliasingLevel.NONE。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    level: AntiAliasingLevel;
  }

  /**
   * 表示图片编码选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface PackingOption {
    /**
     * 目标格式。</br>- 当[输入为ImageSource或PixelMap](docroot://media/image/image-encoding.md)时，支持"image/jpeg"、"image/webp"、"
     * image/png"和"image/heic（或者image/heif）"<sup>12+</sup>、"image/sdr_astc_4x4"<sup>18+</sup>、"image/sdr_sut_superfast_4
     * x4"<sup>18+</sup>（不同硬件设备支持情况不同）、"image/hdr_astc_4x4"<sup>20+</sup>。
     * 
     * - 当[输入为Picture](docroot://media/image/image-picture-encoding.md)时，仅支持"image/jpeg"和"image/heic（或者image/heif）"<sup>
     * 12+</sup>。
     * - gif图片编码需要输入多个PixelMap，并指定format为"image/gif"，使用
     * [packToDataFromPixelmapSequence]{@link image.ImagePacker.packToDataFromPixelmapSequence}或
     * [packToFileFromPixelmapSequence]{@link image.ImagePacker.packToFileFromPixelmapSequence}接口进行编码。
     * 
     * **说明：** 因为jpeg不支持透明通道，若使用带透明通道的数据编码jpeg格式，透明色将变为黑色。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    format: string;

    /**
     * 1. 编码中设定输出图片质量的参数，该参数仅对JPEG图片和HEIF图片生效。取值范围：[0, 100]。0质量最低，100质量最高，质量越高生成图片所占空间越大。WebP、PNG等图片均为无损编码。
     * 
     * 2.sdr_astc_4x4编码中，可以设定输出图片质量的参数，可选参数：92、85。
     * 
     * 3. sut编码中，设定输出图片质量可选参数：92。
     * 4. （API version 20支持）hdr_astc_4x4编码中，可以设定输出图片质量的参数，可选参数：85。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    quality: int;

    /**
     * 接收编码数据的缓冲区大小，单位：字节（Byte）。如果不设置大小，默认为25MB。如果编码图片超过25MB，需要指定大小。bufferSize需大于编码后图片大小。使用
     * [packToFile]{@link image.ImagePacker.packToFile(source: ImageSource, fd: int, options: PackingOption, callback: AsyncCallback<void>)}
     * 不受此参数限制。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    bufferSize?: int;

    /**
     * 目标动态范围。默认值为SDR。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 12 dynamic
     * @since 23 static
     */
    desiredDynamicRange?: PackingDynamicRange;

    /**
     * 是否需要编码图片属性信息，例如EXIF。true表示需要，false表示不需要。默认值为false。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 12 dynamic
     * @since 23 static
     */
    needsPackProperties?: boolean;

    /**
     * 用于指定编码过程中生成缩略图的最大边长（宽和高中较大的那一边），较短的一边会根据长边的缩放比例进行缩放。此参数仅在needsPackProperties设置为true时有效。
     * 
     * 该值应为整数，默认值为0。
     * 
     * 若未指定此参数，或根据该尺寸计算出生成的缩略图宽/高为0，则编码过程中不会生成缩略图。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxEmbedThumbnailDimension?: int;

    /**
      * TIFF图像编码选项。
      *
      * @syscap SystemCapability.Multimedia.Image.ImagePacker
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     tiffPackingOptions?: PackingOptionsForTiff;

    /**
     * 用于指定编码过程中透明区域填充的背景颜色。
     * 
     * 当图片像素为RGBA_8888，且编码的目标格式不支持透明度（如"image/jpeg"或"image/heif"）时，透明区域将填充为指定背景颜色（格式：0xRRGGBB），默认值为 0（黑色）。
     * 
     * PNG、WebP等支持透明度的格式会忽略此参数。
     * 
     * 颜色范围：0x000000 - 0xFFFFFF
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    backgroundColor?: int;

    /**
     * 是否在编码过程中保留GPS隐私信息。
     * 
     * true表示保留GPS信息，不进行隐私处理。false表示移除GPS信息（仅在源图像包含EXIF且needsPackProperties设置为true时生效）。默认值为true。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needsPackGPS?: boolean;

    /**
     * 用于指定编码输出图像的最大尺寸限制。
     * 
     * 当原图宽度或高度超过最大尺寸maxSize的限制时，保持宽高比不变进行等比例缩小，确保输出图像尺寸不超过指定边界。缩放过程由level参数控制采用的缩放算法。
     * 
     * 若未指定此参数，或根据最大尺寸计算的输出图宽/高为0，则按原图尺寸编码。
     * 
     * 单位：像素（px）。
     * 
     * 参数规则：
     * 
     * - maxSize = {0, 0}：不限制最大编码尺寸，按原图尺寸编码
     * - maxSize.width > 0而maxSize.height <= 0：限制最大宽度，高度不限（使用原图高度）
     * - maxSize.width <= 0而maxSize.height > 0：限制最大高度，宽度不限（使用原图宽度）
     * - maxSize.width > 0且maxSize.height > 0：宽高同时限制，选择较小的缩放比例
     * 
     * 默认值：{maxSize: {width: 0, height: 0}, level: AntiAliasingLevel.NONE}
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeLimit?: PackingSizeLimit;
  }

  /**
   * 描述动图编码参数的选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 18 dynamic
   * @since 23 static
   */
  interface PackingOptionsForSequence {
    /**
     * GIF编码中指定的帧数。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    frameCount: int;

    /**
     * GIF编码中设定每帧输出图像的延迟时间，取值需大于0。
     * 
     * - 单位：10毫秒（ms）。例如，取值为10时，实际单帧延迟是100毫秒。
     * - 如果长度小于frameCount，不足的部分将使用delayTimeList中的最后一个值进行填充。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    delayTimeList: Array<int>;

    /**
     * GIF编码中设定每帧输出图像的帧过渡模式，如果长度小于frameCount，不足的部分将使用disposalTypes中的最后一个值进行填充，可取值如下：
     * 
     * - 0：不需要任何操作。
     * - 1：保持图形不变。
     * - 2：恢复背景色。
     * - 3：恢复到之前的状态。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    disposalTypes?: Array<int>;

    /**
     * 表示在GIF编码中输出图片循环播放次数，取值范围为[0，65535]。
     * 
     * 0表示无限循环；若无此字段，则表示不循环播放。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    loopCount?: int;
  }

  /**
   * 表示查询图片属性的索引。
   * 
   * > **说明：**
   * >
   * > [ImagePropertyOptions]{@link image.ImagePropertyOptions}代替。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead image.ImagePropertyOptions
   */
  interface GetImagePropertyOptions {
    /**
     * 图片序号。默认值为0。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImagePropertyOptions#index
     */
    index?: number;

    /**
     * 默认属性值。默认值为空。
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
   * 表示查询图片属性的索引。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  interface ImagePropertyOptions {
    /**
     * 图片序号。默认值为0。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    index?: int;

    /**
     * 默认属性值。默认值为空。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    defaultValue?: string;
  }

  /**
   * 图像解码设置选项。
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
     * 解码图片序号。默认值为0，表示第一张图片。当取值为N时，表示第N+1张图片。单帧图片场景中index取值只能为0，动图等多帧图片场景中index的取值范围为：[0, (帧数-1)]。
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
     * 缩略图采样大小，默认值为1。当前只能取1。
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
     * 旋转角度。单位：角度（deg）。默认值为0。
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
     * 图像像素是否可被编辑。true表示可被编辑，false表示不可被编辑，默认值为false。
     * 
     * 当取值为false时，可提升图像的渲染和传输性能，但是图像不可被二次编辑。例如，writePixels操作将失败。
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
     * 期望输出大小，必须为正整数，若与原尺寸比例不一致，则会进行拉伸/缩放到指定尺寸，默认为原始尺寸。
     * 
     * 注意：若解码接口同时传入了desiredSize参数与desiredRegion参数，需进一步传入cropAndScaleStrategy参数指定缩放与裁剪的先后顺序，推荐设置CROP_FIRST。
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
     * 解码图像中由Region指定的矩形区域，当原始图像很大而只需要解码图像的一部分时，可以设置该参数，有助于提升性能，默认为原始大小。
     * 
     * 注意：若解码接口同时传入了desiredSize参数与desiredRegion参数，需进一步传入cropAndScaleStrategy参数指定缩放与裁剪的先后顺序，推荐设置CROP_FIRST。
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
     * 解码的像素格式。默认值为RGBA_8888。仅支持设置：RGBA_8888、BGRA_8888和RGB_565。有透明通道图片格式不支持设置RGB_565，如PNG、GIF、ICO和WEBP。
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
     * 图像像素密度。单位：ppi（像素/英寸）。默认值为0。
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
     * 目标色彩空间。默认值为UNKNOWN。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    desiredColorSpace?: colorSpaceManager.ColorSpaceManager;
    
    /**
     * 目标动态范围，默认值为SDR。
     * 
     * 通过[CreateIncrementalSource]{@link image.CreateIncrementalSource}创建的ImageSource不支持设置此属性，默认解码为SDR内容。
     * 
     * 如果平台不支持HDR，设置无效，默认解码为SDR内容。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 12 dynamic
     * @since 23 static
     */
    desiredDynamicRange?: DecodingDynamicRange;

    /**
     * 画质效果等级。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    resolutionQuality?: ResolutionQuality;

    /**
     * 解码参数如果同时设置desiredRegion与desiredSize，由此决定裁剪与缩放操作的先后策略。
     * 
     * 仅支持设置：SCALE_FIRST、CROP_FIRST。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 18 dynamic
     * @since 23 static
     */
    cropAndScaleStrategy?: CropAndScaleStrategy;
  }

  /**
   * 描述图像颜色分量。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Component {
    /**
     * 组件类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly componentType: ComponentType;

    /**
     * 行距。单位：字节（Byte）。读取相机预览流数据时，需要按stride进行读取，使用详情请参考
     * [相机预览花屏解决方案](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-deal-stride-solution)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rowStride: int;

    /**
     * 像素间距。单位：字节（Byte）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly pixelStride: int;

    /**
     * 组件缓冲区。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * PixelMap的初始化选项。
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
     * 创建的图片尺寸，宽高值必须为正整数。
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
     * 传入的缓冲区数据的像素格式。默认值为BGRA_8888。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    srcPixelFormat?: PixelMapFormat;

    /**
     * 生成的PixelMap的像素格式。默认值为RGBA_8888。
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
     * 图像像素是否可被编辑。true表示可被编辑，false表示不可被编辑。设为false时，可提升图像的渲染和传输性能，但是图像不可被二次编辑。例如，writePixels操作将失败。默认值为false。
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
     * 透明度。默认值为IMAGE_ALPHA_TYPE_PREMUL。
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
     * 缩放模式。默认值为FIT_TARGET_SIZE。
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
   * ImageSource的初始化选项。
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
     * 图片资源像素密度。单位：ppi（像素/英寸）。
     * 
     * 在解码参数[DecodingOptions]{@link image.DecodingOptions}未设置desiredSize的前提下，当前参数SourceOptions.sourceDensity与
     * DecodingOptions.fitDensity非零时将对解码输出的pixelmap进行缩放。
     * 
     * 缩放后宽计算公式如下(高同理)：(width * fitDensity + (sourceDensity >> 1)) / sourceDensity。
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
     * 图片像素格式，默认值为UNKNOWN。
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
     * 图像像素大小，默认值为空。
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
   * 静态元数据值，[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_STATIC_METADATA关键字对应的值。
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
   * Gainmap图单个通道的数据内容，参考ISO 21496-1。
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
   * Gainmap使用的元数据值，[HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_GAINMAP_METADATA关键字对应的值，参考ISO 21496-1。
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
   * ImageReceiver的初始化选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageReceiverOptions {
    /**
     * 图像的大小，包括宽与高，且值都大于0。单位：像素（px）。
     * 
     * 该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    size?: Size;

    /**
     * 可同时访问的最大图像数量。该值必须为正整数，且小于或等于64张。
     * 
     * 该参数仅作为期望值，实际capacity由设备硬件决定。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capacity?: int;
  }

  /**
   * 保存图像缓冲区数据的指针、不同颜色分量的行间距与像素间距信息。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageBufferData {
    /**
     * 颜色分量的行跨距。单位：字节（Byte）。
     * 
     * 对于编码后的图片如JPEG，该属性无意义。
     * 
     * 读取相机预览流数据时，需要按rowStride进行读取，使用详情请参考
     * [相机预览花屏解决方案](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-deal-stride-solution)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly rowStride: int[];

    /**
     * 颜色分量的像素间距。单位：字节（Byte）。
     * 
     * 对于编码后的图片如JPEG，该属性无意义。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly pixelStride: int[];

    /**
     * 图像缓冲区。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly byteBuffer: ArrayBuffer;
  }

  /**
   * PixelMap使用的HDR元数据值类型，与[HdrMetadataKey]{@link image.HdrMetadataKey}关键字对应。
   *
   * @unionmember { HdrMetadataType } Metadata value corresponding to the **HDR_METADATA_TYPE** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey }
   *     [HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_METADATA_TYPE关键字对应的元数据值类型。
   * @unionmember { HdrStaticMetadata } Metadata value corresponding to the **HDR_STATIC_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey }
   *     [HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_STATIC_METADATA关键字对应的元数据值类型。
   * @unionmember { ArrayBuffer } Metadata value corresponding to the **HDR_DYNAMIC_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey }
   *     [HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_DYNAMIC_METADATA关键字对应的元数据值类型，存储HDR动态元数据，格式遵循相关HDR动态元数据标准。
   * @unionmember { HdrGainmapMetadata } Metadata value corresponding to the **HDR_GAINMAP_METADATA** key in
   *     [HdrMetadataKey]{@link @ohos.multimedia.image:image.HdrMetadataKey }
   *     [HdrMetadataKey]{@link image.HdrMetadataKey}中HDR_GAINMAP_METADATA关键字对应的元数据值类型。
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamic
   * @since 23 static
   */
  type HdrMetadataValue = HdrMetadataType | HdrStaticMetadata | ArrayBuffer | HdrGainmapMetadata;

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
   * Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities.
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
   * Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixels} instead for better exception handling capabilities.
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
   * Starting from API 26.0.0, it is recommended to use {@link createPixelMapFromPixelsSync} instead for better exception handling capabilities.
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
   * Starting from API 26.0.0, it is recommended to use {@link createEmptyPixelMap} instead for better exception handling capabilities.
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
   * 通过传入的uri创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { string } uri - 图片路径，当前仅支持应用沙箱路径。
   *     <br>当前支持格式有：JPEG、PNG、GIF、BMP、WebP、DNG、HEIC<sup>12+</sup>、WBMP<sup>23+</sup>、HEIFS<sup>23+</sup>、TIFF<sup>23+</
   *     sup>、SVG<sup>10+</sup>（可参考[SVG标签说明](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明)）、ICO<sup>
   *     11+</sup>。从API版本26.0.0开始，增加支持AVIF、AVIS格式。
   *     <br>部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用
   *     [image.getImageSourceSupportedFormats]{@link image.getImageSourceSupportedFormats}接口，动态查询当前设备上的解码能力。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过传入的uri创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { string } uri - 图片路径，当前仅支持应用沙箱路径（可参考[使用说明](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#使用说明)）
   *     。
   *     <br>当前支持格式有：JPEG、PNG、GIF、BMP、WebP、DNG、HEIC<sup>12+</sup>、WBMP<sup>23+</sup>、HEIFS<sup>23+</sup>、TIFF<sup>23+</
   *     sup>、SVG<sup>10+</sup>（可参考[SVG标签说明](docroot://reference/apis-image-kit/arkts-apis-image-f.md#svg标签说明)）、ICO<sup>
   *     11+</sup>。从API版本26.0.0开始，增加支持AVIF、AVIS格式。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用
   *     [image.getImageSourceSupportedFormats]{@link image.getImageSourceSupportedFormats}接口，动态查询当前设备上的解码能力。
   * @param { SourceOptions } options - 图片属性，包括图片像素密度、像素格式和图片尺寸。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过传入文件描述符来创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { int } fd - 文件描述符fd。取值范围为[0，65535]。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过传入文件描述符来创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { int } fd - 文件描述符fd。取值范围为[0，65535]。
   * @param { SourceOptions } options - 图片属性，包括图片像素密度、像素格式和图片尺寸。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用
   * [image.createPixelMapSync]{@link image.createPixelMapSync}这一类接口。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buf - 图像缓冲区数组。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用
   * [image.createPixelMapSync]{@link image.createPixelMapSync}这一类接口。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buf - 图像缓冲区数组。
   * @param { SourceOptions } options - 图片属性，包括图片像素密度、像素格式和图片尺寸。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过图像资源文件的RawFileDescriptor创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { resourceManager.RawFileDescriptor } rawfile - 图像资源文件的RawFileDescriptor。
   * @param { SourceOptions } options - 图片属性，包括图片像素密度、像素格式和图片尺寸。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
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
   * 通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * 以增量方式创建的ImageSource实例，仅支持使用以下功能，同步、异步callback、异步Promise均支持。
   * 
   * - 获取图片信息：指定序号-[getImageInfo]{@link image.ImageSource.getImageInfo(index: int, callback: AsyncCallback<ImageInfo>)}、
   * 直接获取-[getImageInfo]{@link image.ImageSource.getImageInfo(callback: AsyncCallback<ImageInfo>)}
   * - 获取图片中给定索引处图像的指定属性键的值：
   * [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
   * - 批量获取图片中的指定属性键的值：[getImageProperties]{@link image.ImageSource.getImageProperties(key: Array<PropertyKey>)}
   * - 更新增量数据：
   * [updateData]{@link image.ImageSource.updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int)}
   * - 创建PixelMap对象：通过图片解码参数创建-[createPixelMap]{@link image.createPixelMap}、通过默认参数创建-
   * [createPixelMap]{@link image.createPixelMap} 、通过图片解码参数-[createPixelMap]{@link image.createPixelMap}
   * - 释放ImageSource实例：[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}
   *
   * @param { ArrayBuffer } buf - 增量数据。
   * @returns { ImageSource } 返回ImageSource，失败时返回undefined。
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
   * 通过缓冲区以增量的方式创建ImageSource实例，IncrementalSource不支持读写Exif信息。
   * 
   * 此接口支持的功能与[CreateIncrementalSource(buf: ArrayBuffer): ImageSource]{@link image.CreateIncrementalSource}所生成的实例支持的功能相
   * 同。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buf - 增量数据。
   * @param { SourceOptions } options - 图片属性，包括图片像素密度、像素格式和图片尺寸。
   * @returns { ImageSource } 返回ImageSource，失败时返回undefined。
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
   * 创建ImagePacker实例。
   * 
   * 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]{@link image.ImagePacker.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @returns { ImagePacker } 返回ImagePacker实例。
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  function createImagePacker(): ImagePacker;

  /**
   * 通过宽、高、图片格式、容量创建ImageReceiver实例。ImageReceiver做为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * 。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)}
   * 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11废弃，建议使用[createImageReceiver]{@link image.createImageReceiver}代替。
   *
   * @param { number } width - 图像的默认宽度。单位：像素（px）。该参数不会影响接收到的图片宽度，实际宽度由生产者决定，如相机。
   * @param { number } height - 图像的默认高度。单位：像素（px）。该参数不会影响接收到的图片高度，实际高度由生产者决定，如相机。
   * @param { number } format - 图像格式，取值为[ImageFormat]{@link image.ImageFormat}常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决定，如相机
   *     ）。
   * @param { number } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageReceiver } 如果操作成功，则返回ImageReceiver实例。
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead image.createImageReceiver(size: Size, format: ImageFormat, capacity: int)
   */
  function createImageReceiver(width: number, height: number, format: number, capacity: number): ImageReceiver;

  /**
   * 通过图片大小、图片格式、容量创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，它的参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * 。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)}
   * 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { Size } size - 图像的默认大小。单位：像素（px）。该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。
   * @param { ImageFormat } format - 图像格式，取值为[ImageFormat]{@link image.ImageFormat}常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决
   *     定，如相机）。
   * @param { int } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageReceiver } 如果操作成功，则返回ImageReceiver实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types;
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
   * 通过ImageReceiverOptions创建ImageReceiver实例。ImageReceiver作为图片的接收方、消费者，其参数属性实际上不会对接收到的图片产生影响。图片属性的配置应在发送方、生产者进行，如相机预览流
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * 。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)}
   * 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { ImageReceiverOptions } [options] - 创建ImageReceiver的属性，包括图片的默认大小和同时访问的最大图片数。
   *     <br>未传入options时，默认的size为1920*1080，单位为像素（px），表示期望接收宽为1920px，高为1080px的图片。
   *     <br>未传入options时，默认的capacity为3，表示期望同时最多有3张图片等待读取。
   * @returns { ImageReceiver | undefined } 操作成功时返回ImageReceiver实例，否则返回undefined。
   * @throws { BusinessError } 7900201 - Invalid parameter.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createImageReceiver(options?: ImageReceiverOptions): ImageReceiver | undefined;

  /**
   * 通过宽、高、图片格式、容量创建ImageCreator实例。
   * 
   * 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法
   * 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 11废弃，建议使用[createImageCreator]{@link image.createImageCreator}代替。
   *
   * @param { number } width - 图像的默认宽度。单位：像素（px）。
   * @param { number } height - 图像的默认高度。单位：像素（px）。
   * @param { number } format - 图像格式，如YCBCR_422_SP，JPEG。
   * @param { number } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageCreator } 如果操作成功，则返回ImageCreator实例。
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9 dynamiconly
   * @deprecated since 11
   * @useinstead image.createImageCreator(size: Size, format: ImageFormat, capacity: int)
   */
  function createImageCreator(width: number, height: number, format: number, capacity: number): ImageCreator;

  /**
   * 通过图片大小、图片格式、容量创建ImageCreator实例。
   * 
   * 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法
   * 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @param { Size } size - 图像的默认大小。单位：像素（px）。
   * @param { ImageFormat } format - 图像格式，如YCBCR_422_SP，JPEG。
   * @param { int } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageCreator } 如果操作成功，则返回ImageCreator实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types;
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
     * Reads the pixels of this PixelMap object based on the PixelMap's pixel format and writes the data to the buffer.
     * This API uses a promise to return the result.
     *
     * Starting from API 26.0.0, it is recommended to use {@link readAllPixelsToBuffer} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link readAllPixelsToBuffer} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link readAllPixelsToBufferSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link readPixelsToArea} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link readPixelsToArea} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link readPixelsToAreaSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link writePixelsFromArea} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link writePixelsFromArea} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link writePixelsFromAreaSync} instead for better exception handling capabilities.
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
     * Reads the pixels in the buffer based on the PixelMap's pixel format and writes the data to this PixelMap object.
     * This API uses a promise to return the result.
     *
     * Starting from API 26.0.0, it is recommended to use {@link writeAllPixelsFromBuffer} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link writeAllPixelsFromBuffer} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link writeAllPixelsFromBufferSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link setOpacity} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link setOpacity} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link setOpacitySync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link extractAlphaPixelMap} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link extractAlphaPixelMap} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link extractAlphaPixelMapSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyScale} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyScale} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyScaleSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyScale} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyScaleSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyTranslate} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyTranslate} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyTranslateSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyRotate} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyRotate} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyRotateSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyFlip} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyFlip} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyFlipSync} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyCrop} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyCrop} instead for better exception handling capabilities.
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
     * Starting from API 26.0.0, it is recommended to use {@link applyCropSync} instead for better exception handling capabilities.
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
     * Checks whether this PixelMap object is released. If released, any attempt to access the internal data of this
     * object will fail.
     * 
     * > **NOTE**
     * >
     * > Release occurs when an ArkTS object relinquishes control over its associated native object. The memory occupied
     * > by the native object is reclaimed only after all managing ArkTS objects have relinquished their control.
     *
     * @returns { boolean } Check result for whether the PixelMap object is released. **true** if released; **false**
     *     otherwise.
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
     * Creates an image that has been cropped and resized based on the specified cropping area, scale factors of the
     * width and height, and anti-aliasing level. This API returns the result synchronously.
     *
     * @param { Region } region - Area to crop. It must be within the original image's dimension (in pixels).
     * @param { double } x - Scale factor of the width. It must not be **0**.
     * @param { double } y - Scale factor of the height. It must not be **0**.
     * @param { AntiAliasingLevel } [level] - Anti-aliasing level. Default value: **NONE**.
     * @returns { PixelMap } PixelMap object. If the operation fails, an error is thrown.
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
     * Creates an image that has been cropped and resized based on the specified cropping area, scale factors of the
     * width and height, and anti-aliasing level. This API uses a promise to return the result.
     *
     * @param { Region } region - Area to crop. It must be within the original image's dimension (in pixels).
     * @param { double } x - Scale factor of the width. It must not be **0**.
     * @param { double } y - Scale factor of the height. It must not be **0**.
     * @param { AntiAliasingLevel } [level] - Anti-aliasing level. Default value: **NONE**.
     * @returns { Promise<PixelMap> } Promise used to return the PixelMap object.
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
   * Picture合成HDR时可配置的参数选项。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface HdrComposeOptions {
    /**
     * 用于合成图像的像素格式，支持RGBA_1010102、YCBCR_P010和YCRCB_P010格式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    desiredPixelFormat?: PixelMapFormat;
  }

  /**
   * HDR PixelMap分解为Picture的配置选项，分解后的Picture包含一张SDR主图和一张增益图（GainMap）。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface HdrDecomposeOptions {  
    /**
     * 是否生成全尺寸增益图。
     * 
     * true表示生成全尺寸增益图，增益图尺寸和主图一致；false表示不生成全尺寸增益图，增益图尺寸是主图的一半。默认值为false。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFullSizeGainmap?: boolean;

    /**
     * 分解后SDR PixelMap和增益图的像素格式。支持RGBA_8888、NV12、NV21。默认值为RGBA_8888。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    desiredPixelFormat?: PixelMapFormat;
  }

  /**
   * 将HDR PixelMap分解为包含SDR PixelMap和增益图（gainmap）的Picture对象。使用Promise异步回调。
   *
   * @param { PixelMap } hdrPixelMap - HDR PixelMap，像素格式需为RGBA_F16、RGBA_1010102、YCBCR_P010或YCRCB_P010。
   * @param { HdrDecomposeOptions } [options] - HDR分解配置选项，包含增益图尺寸和像素格式设置。
   * @returns { Promise<Picture | undefined> } Promise对象。返回包含SDR PixelMap和增益图的Picture对象。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 7600201 - Unsupported operation. hdrPixelMap's PixelMapFormat is not
   *     RGBA_F16\RGBA_1010102\YCBCR_P010\YCRCB_P010.
   * @throws { BusinessError } 7600206 - Invalid parameter. Possible cause: hdrPixelMap is empty.
   * @throws { BusinessError } 7600208 - HDR image decomposition failed. Possible causes: 1. Decomposition processing
   *     is not supported. 2. Processing error occurs.
   * @throws { BusinessError } 7600301 - Alloc memory failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function decomposeToPicture(hdrPixelMap : PixelMap, options?: HdrDecomposeOptions): Promise<Picture | undefined>;

  /**
   * Picture类，一些包含特殊信息的图片可以解码为Picture（也可以称为多图对象）。多图对象一般包含主图、辅助图和元数据。其中主图包含图像的大部分信息，主要用于显示图像内容；辅助图用于存储与主图相关但不同的数据，展示图像更丰富
   * 的信息；元数据一般用来存储关于图像文件的信息。多图对象类用于读取或写入多图对象。在调用Picture的方法前，需要先通过[image.createPicture]{@link image.createPicture}创建一个
   * Picture实例。
   * 
   * 由于图片占用内存较大，所以当Picture实例使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 13开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface Picture {
    /**
     * 获取主图的pixelmap。
     *
     * @returns { PixelMap } 同步返回PixelMap对象。
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
     * 合成HDR图并获取HDR图的pixelmap。使用Promise异步回调。
     *
     * @returns { Promise<PixelMap> } Promise对象，返回PixelMap。
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
     * 合成HDR图像并返回HDR图像的PixelMap，支持传入合成参数（如PixelMapFormat等）。使用Promise异步回调。
     * 
     * 调用该接口的Picture对象中必须包含主图、增益图和元数据。
     *
     * @param { HdrComposeOptions } [options] - 合成HDR的选项。
     * @returns { Promise<PixelMap | undefined> } Promise对象，返回PixelMap或undefined。
     * @throws { BusinessError } 7600201 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>;

    /**
     * 获取增益图的pixelmap。
     *
     * @returns { PixelMap | null } 返回Pixelmap对象，如果没有则返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    getGainmapPixelmap(): PixelMap | null;

    /**
     * 设置辅助图。
     *
     * @param { AuxiliaryPictureType } type - 辅助图类型。
     * @param { AuxiliaryPicture } auxiliaryPicture - 辅助图对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void;

    /**
     * 根据类型获取辅助图。
     *
     * @param { AuxiliaryPictureType } type - 辅助图类型。
     * @returns { AuxiliaryPicture | null } 返回AuxiliaryPicture对象，如果没有则返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null;

    /**
     * 设置主图的元数据。使用Promise异步回调。
     *
     * @param { MetadataType } metadataType - 元数据类型。
     * @param { Metadata } metadata - 元数据对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取主图的元数据。使用Promise异步回调。
     *
     * @param { MetadataType } metadataType - 元数据类型。
     * @returns { Promise<Metadata> } Promise对象。返回元数据。
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
     * 将picture序列化后写入MessageSequence。
     *
     * @param { rpc.MessageSequence } sequence - 新创建的MessageSequence。
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
     * 释放picture对象。
     * 
     * 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用该方法及时释放内存。
     * 
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    release(): void;

    /**
     * 将Picture对象的主图和增益图合成为HDR图，合成后原Picture的主图被替换为HDR图，原Picture的增益图被删除。使用Promise异步回调。
     * 
     * 调用该接口的Picture对象中必须包含主图、增益图。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600201 - Unsupported operation. e.g.,1. The picture does not have a gainmap.
     *     2. pixelMap's allocator type is not DMA.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hdrComposeToMainPixelmap(): Promise<void>;
  }

  /**
   * 通过主图的PixelMap创建一个Picture对象。
   * 
   * 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { PixelMap } mainPixelmap - 主图的PixelMap。
   * @returns { Picture } 返回Picture对象。
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  function createPicture(mainPixelmap : PixelMap): Picture;

  /**
   * 根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个增益图（gainmap），返回的Picture对象将包含SDR PixelMap和生成的gainmap
   * PixelMap，像素格式为RGBA8888。使用Promise异步回调。
   *
   * @param { PixelMap } hdrPixelMap - HDR PixelMap，位深16bit或10bit，像素格式为FP16/RGBA1010102/YCBCR_P010，色彩空间是BT2020_HLG。
   * @param { PixelMap } sdrPixelMap - SDR PixelMap，位深8bit，像素格式为RGBA8888/NV21，色彩空间是P3。
   * @returns { Promise<Picture> } 返回Picture包含sdr和gainmap，像素格式为RGBA8888。
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
   * Gainmap（增益图）参数设置选项。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface GainmapParams {  
    /**
     * 返回Picture中的Gainmap（增益图）是否使用全尺寸图。
     * 
     * true表示使用全尺寸图，宽高和主图一致；false表示不使用全尺寸图，宽高均为主图的一半。默认值为false。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFullSizeGainmap: boolean;
  }

  /**
   * 根据HDR PixelMap和SDR PixelMap创建Picture对象。系统将使用HDR和SDR PixelMap生成一个Gainmap（增益图），返回的Picture对象将包含SDR PixelMap和生成的Gainmap
   * PixelMap，像素格式为RGBA8888。Gainmap PixelMap的尺寸可以通过设置params进行选择。使用Promise异步回调。
   *
   * @param { PixelMap } hdrPixelMap - HDR PixelMap，位深16bit或10bit，像素格式为RGBA_F16/RGBA_1010102/YCBCR_P010，色彩空间是BT2020_HLG。
   * @param { PixelMap } sdrPixelMap - SDR PixelMap，位深8bit，像素格式为RGBA_8888/NV21，色彩空间是P3。
   * @param { GainmapParams } params - Gainmap Params，增益图参数设置选项，决定是否使用全尺寸增益图。
   * @returns { Promise<Picture> } Promise对象，返回Picture包含SDR和Gainmap，像素格式为RGBA_8888。
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 7600201 - Unsupported operation. HdrPixelMap's PixelMapFormat is not
   *     RGBA_F16\RGBA_1010102\YCBCR_P010, or its color space is not BT2020_HLG. Or sdrPixelMap's PixelMapFormat is
   *     not RGBA_8888\NV21\NV12, or its color space is not P3.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createPictureByHdrAndSdrPixelMap(hdrPixelMap: PixelMap, sdrPixelMap: PixelMap, 
      params: GainmapParams): Promise<Picture>;

  /**
   * 从MessageSequence中获取Picture。
   * 
   * 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { rpc.MessageSequence } sequence - 保存有Picture信息的MessageSequence。
   * @returns { Picture } 返回Picture对象。
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
   * 通过ArrayBuffer图片数据、辅助图尺寸、辅助图类型创建AuxiliaryPicture实例。该接口仅支持传入BGRA的连续像素数据，会创建出RGBA的辅助图。
   * 
   * 由于图片占用内存较大，所以当AuxiliaryPicture实例使用完成后，应主动调用[release]{@link image.AuxiliaryPicture.release}方法及时释放内存。释放时应确保该实例的所有异步方法
   * 均执行完成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buffer - 以buffer形式存放的图像数据。
   * @param { Size } size - 辅助图的尺寸。单位：像素（px）。
   * @param { AuxiliaryPictureType } type - 辅助图类型。
   * @returns { AuxiliaryPicture } 如果操作成功，则返回AuxiliaryPicture实例。
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  function createAuxiliaryPicture(buffer: ArrayBuffer, size: Size, type: AuxiliaryPictureType): AuxiliaryPicture;

  /**
   * 使用指定的内存类型，根据辅助图信息和像素数据创建辅助图对象。
   * 
   * > **说明：**
   * >
   * > - 在处理此接口返回的AuxiliaryPicture时，需要考虑内存中每行像素所占的空间的影响。
   * >
   * > - 创建的辅助图像会使用输入的像素进行初始化。
   *
   * @param { AuxiliaryPictureInfo } auxiliaryPictureInfo - 辅助图图像信息。
   *     <br>- 输入的ArrayBuffer的pixelFormat和最终创建出的辅助图的实际pixelFormat需与auxiliaryPictureInfo中指定的pixelFormat保持一致。
   *     <br>- 当AuxiliaryPictureType为GAINMAP时，AllocatorType仅支持传入AUTO/DMA。
   *     <br>- 当传入SHARE_MEMORY时，返回错误码7600205。
   * @param { AllocatorType } [allocatorType] - 图像解码的内存类型，AUTO及默认情况下按照DMA处理。
   * @param { ArrayBuffer } [pixels] - 以buffer形式存放的图像数据。
   *     <br>当未提供ArrayBuffer参数时，默认创建空白辅助图。
   * @returns { AuxiliaryPicture } 如果操作成功，则返回AuxiliaryPicture实例。
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
   * AuxiliaryPicture类，用于读取或写入图像的辅助图数据以及获取图像的辅助图信息。目前支持的辅助图类型可参考[AuxiliaryPictureType]{@link image.AuxiliaryPictureType}
   * 。
   * 
   * 在调用AuxiliaryPicture的方法前，需要通过[image.createAuxiliaryPicture]{@link image.createAuxiliaryPicture}或Picture的
   * [getAuxiliaryPicture]{@link image.Picture.getAuxiliaryPicture}创建一个AuxiliaryPicture实例。
   * 
   * 由于图片占用内存较大，所以当AuxiliaryPicture对象使用完成后，应主动调用[release]{@link image.AuxiliaryPicture.release}方法及时释放对象。释放时应确保该实例的所有异步方法
   * 均执行完成，且后续不再使用该对象。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 13开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface AuxiliaryPicture {
    /**
     * 读取ArrayBuffer中的辅助图片数据，并将数据写入AuxiliaryPicture对象。使用Promise异步回调。
     *
     * @param { ArrayBuffer } data - 辅助图像素数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    writePixelsFromBuffer(data: ArrayBuffer): Promise<void>;

    /**
     * 读取图像像素映射数据并将数据写入ArrayBuffer。使用Promise异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象。返回辅助图像素数据。
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
     * 获取辅助图的类型。
     *
     * @returns { AuxiliaryPictureType } 操作成功，返回辅助图的类型。
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
     * 设置辅助图元数据。使用Promise异步回调。
     *
     * @param { MetadataType } metadataType - 元数据的类型，用于设置对应的元数据。
     * @param { Metadata } metadata - 元数据对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 从辅助图中获取元数据。使用Promise异步回调。
     *
     * @param { MetadataType } metadataType - 元数据类型，用于获取对应类型的元数据。
     * @returns { Promise<Metadata> } Promise对象，返回元数据的Promise对象。
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
     * 获取有关此辅助图的图像信息。
     *
     * @returns { AuxiliaryPictureInfo } 返回辅助图图像信息。
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
     * 设置辅助图的图像信息。
     *
     * @param { AuxiliaryPictureInfo } info - 辅助图的图像信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    setAuxiliaryPictureInfo(info: AuxiliaryPictureInfo): void;

    /**
     * 释放辅助图对象，无返回值。
     * 
     * 由于图片占用内存较大，所以当AuxiliaryPicture对象使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    release():void;
  }

  /**
   * 表示辅助图的图像类型的枚举。
   * 
   * 辅助图不直接参与图片显示，且并非所有图片中都含有辅助图。
   * 
   * 在获取和使用特定辅助图前，应首先调用Picture的[getAuxiliaryPicture]{@link image.Picture.getAuxiliaryPicture}方法尝试获取该辅助图。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum AuxiliaryPictureType {
    /**
     * 增益图（Gain Map）。
     * 
     * 用于更准确地生成HDR图像。
     * 
     * HDR合成通常需要同时使用SDR主图、增益图和HDR元数据（[getMetadata]{@link image.PixelMap.getMetadata}）共同计算亮度映射关系。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    GAINMAP = 1,

    /**
     * 深度图（Depth Map）。
     * 
     * 用于存储每个像素与摄像头之间的距离信息，提供场景的三维结构。
     * 
     * 可用于3D重建、背景分离和场景理解等任务。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    DEPTH_MAP = 2,

    /**
     * 未重对焦原图（UnReFocus Map）。
     * 
     * 用于保存拍摄时未重对焦的图片像素内容。
     * 
     * 可用于人像虚化等后期处理，便于用户自由选择焦点区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    UNREFOCUS_MAP = 3,

    /**
     * 线性图（Linear Map）。
     * 
     * 以线性方式记录光照、颜色或其他视觉要素，为图像处理提供补充信息。
     * 
     * 可用于视觉效果增强与色彩后期处理。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    LINEAR_MAP = 4,

    /**
     * 水印裁剪图（Fragment Map）。
     * 
     * 记录原图中被水印遮挡的区域，可能是从原图裁剪得到，也可能只是填充特定数值的像素数据作为占位符。
     * 
     * 可用于水印移除、原图恢复等场景。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    FRAGMENT_MAP = 5,
    
    /**
     * 特殊增益图（LHDR Gain Map）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LHDR_GAINMAP = 10,
  }

  /**
   * 表示图片元数据类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum MetadataType {
    /**
     * exif数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    EXIF_METADATA = 1,

    /**
     * 水印裁剪图元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    FRAGMENT_METADATA = 2,

    /**
     * GIF图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_METADATA = 5,

    /**
     * HEIF序列图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HEIFS_METADATA = 15,

    /**
     * DNG图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_METADATA = 16,

    /**
     * WebP图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WEBP_METADATA = 17,

     /**
      * PNG图片元数据。
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     PNG_METADATA = 19,

     /**
      * JFIF图片元数据。
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     JFIF_METADATA = 20,
 
     /**
      * TIFF图片元数据。
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @stagemodelonly
      * @since 26.0.0 dynamic&static
      */
     TIFF_METADATA = 21,

    /**
     * XMP图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    XMP_METADATA = 22,

    /**
     * AVIS图片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AVIS_METADATA = 23
  }

  /**
   * Metadata类，用于存储图像的元数据。目前支持的元数据类型可参考[MetadataType]{@link image.MetadataType}。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 13开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface Metadata {
    /**
     * 获取图像中属性的值。使用Promise异步回调。
     * 
     * 如要查询属性值信息请参考[PropertyKey]{@link image.PropertyKey}、[FragmentMapPropertyKey]{@link image.FragmentMapPropertyKey}、
     * [GifPropertyKey]{@link image.GifPropertyKey}和[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @param { Array<string> } key - 要获取其值的属性的名称。
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据要获取的属性的值，如获取失败则返回错误码。
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
     * 批量设置图片元数据中的指定属性的值。使用Promise异步回调。
     * 
     * 如要查询属性值信息请参考[PropertyKey]{@link image.PropertyKey}、[FragmentMapPropertyKey]{@link image.FragmentMapPropertyKey}、
     * [GifPropertyKey]{@link image.GifPropertyKey}和[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @param { Record<string, string | null> } records - 要修改的属性和值的数组。
     * @returns { Promise<void> } Promise对象，如获取失败则返回错误码。
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
     * 获取图片中所有元数据的属性和值。使用Promise异步回调。
     * 
     * 如要查询属性值信息请参考[PropertyKey]{@link image.PropertyKey}、[FragmentMapPropertyKey]{@link image.FragmentMapPropertyKey}、
     * [GifPropertyKey]{@link image.GifPropertyKey}和[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据拥有的所有属性的值。
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
     * 对元数据进行克隆。使用Promise异步回调。
     *
     * @returns { Promise<Metadata> } Promise对象，成功返回元数据实例。
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
     * 以二进制数据的形式获取元数据。使用Promise异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象，返回元数据的二进制数据。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
  
    /**
     * 使用二进制数据替换当前元数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } blob - 要替换的二进制数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * 表示水印裁剪图图片信息的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum FragmentMapPropertyKey {
    /**
     * 水印裁剪图左上角在原始图中的X坐标。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    X_IN_ORIGINAL = 'XInOriginal',

    /**
     * 水印裁剪图左上角在原始图中的Y坐标。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    Y_IN_ORIGINAL = 'YInOriginal',

    /**
     * 水印裁剪图的宽。单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    WIDTH = 'FragmentImageWidth',

    /**
     * 水印裁剪图的高。单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    HEIGHT = 'FragmentImageHeight'
  }

  /**
   * 表示GIF图片信息的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum GifPropertyKey {
    /**
     * GIF图片钳制后的帧延迟时长。钳制范围为[100, 65535]。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_DELAY_TIME = 'GifDelayTime',

    /**
     * GIF图片的每帧处置方式。
     * 
     * - 0表示未指定。
     * - 1表示不处置。
     * - 2表示还原为背景色。
     * - 3表示还原为前一帧。
     * 
     * 该值为正整数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20 dynamic
     * @since 23 static
     */
    GIF_DISPOSAL_TYPE = 'GifDisposalType',

    /**
     * GIF图像是否包含全局调色板。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_HAS_GLOBAL_COLOR_MAP = 'GifHasGlobalColorMap',

    /**
     * GIF图像的画布宽度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_CANVAS_WIDTH = 'GifCanvasWidth',

    /**
     * GIF图像的画布高度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_CANVAS_HEIGHT = 'GifCanvasHeight',

    /**
     * GIF图片循环次数。
     * 
     * 取值为0或正整数。0表示无限循环，其他值表示实际循环次数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_LOOP_COUNT = 'GifLoopCount',

    /**
     * GIF图片未钳制的帧延迟时间。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    GIF_UNCLAMPED_DELAY_TIME = 'GifUnclampedDelayTime'

  }

  /**
   * 表示HEIF序列图片信息的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum HeifsPropertyKey {
    /**
     * HEIF序列图片的每帧延迟时长。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HEIFS_DELAY_TIME = 'HeifsDelayTime',

    /**
     * HEIF序列图片未钳制的帧延迟时长。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_UNCLAMPED_DELAY_TIME = 'HeifsUnclampedDelayTime',

    /**
     * HEIF序列图片的画布高度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_CANVAS_HEIGHT = 'HeifsCanvasHeight',

    /**
     * HEIF序列图片的画布宽度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HEIFS_CANVAS_WIDTH = 'HeifsCanvasWidth'
  }

  /**
   * 表示DNG图片信息的枚举。
   * 
   * > **说明：**
   * >
   * > - 关于字段的更详细描述请参考DNG协议文档DNG Specification 1.4.0.0。
   * >
   * > - 返回字段类型具体参考[DngMetadata]{@link image.DngMetadata}。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum DngPropertyKey {
    /**
     * DNG图片的版本号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_VERSION = 'DNGVersion',

    /**
     * DNG文件向后兼容的最低版本号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_BACKWARD_VERSION = 'DNGBackwardVersion',

    /**
     * 相机的唯一型号标识，用于区分不同设备。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNIQUE_CAMERA_MODEL = 'UniqueCameraModel',

    /**
     * 本地化后的相机型号名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LOCALIZED_CAMERA_MODEL = 'LocalizedCameraModel',

    /**
     * CFA各平面的颜色通道定义。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CFA_PLANE_COLOR = 'CFAPlaneColor',

    /**
     * CFA布局类型，如RGGB、BGGR等。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CFA_LAYOUT = 'CFALayout',

    /**
     * 线性化查找表，用于将原始传感器值映射为线性光强度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LINEARIZATION_TABLE = 'LinearizationTable',

    /**
     * 黑电平重复维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_REPEAT_DIM = 'BlackLevelRepeatDim',

    /**
     * 零光照下的编码电平，按CFA平面顺序排列。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL = 'BlackLevel',

    /**
     * 水平方向黑电平校正增量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_DELTA_H = 'BlackLevelDeltaH',

    /**
     * 垂直方向黑电平校正增量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BLACK_LEVEL_DELTA_V = 'BlackLevelDeltaV',

    /**
     * 白电平，表示传感器最大有效输出。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WHITE_LEVEL = 'WhiteLevel',

    /**
     * 默认缩放比例。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_SCALE = 'DefaultScale',

    /**
     * 默认裁剪区域的左上角坐标（x, y）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_CROP_ORIGIN = 'DefaultCropOrigin',

    /**
     * 默认裁剪区域的宽度和高度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_CROP_SIZE = 'DefaultCropSize',

    /**
     * 第一校准光源下的色彩变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLOR_MATRIX1 = 'ColorMatrix1',

    /**
     * 第二校准光源下的色彩变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLOR_MATRIX2 = 'ColorMatrix2',

    /**
     * 第一校准光源下的相机校准矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION1 = 'CameraCalibration1',

    /**
     * 第二校准光源下的相机校准矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION2 = 'CameraCalibration2',

    /**
     * 第一校准光源下的降维矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    REDUCTION_MATRIX1 = 'ReductionMatrix1',

    /**
     * 第二校准光源下的降维矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    REDUCTION_MATRIX2 = 'ReductionMatrix2',

    /**
     * 模拟增益平衡系数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALOG_BALANCE = 'AnalogBalance',

    /**
     * 拍摄时的中性白点。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_NEUTRAL = 'AsShotNeutral',

    /**
     * 拍摄时白点的CIE x-y色度坐标。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_WHITEXY = 'AsShotWhiteXY',

    /**
     * 基准曝光补偿值，单位：EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_EXPOSURE = 'BaselineExposure',

    /**
     * 基准噪声水平。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_NOISE = 'BaselineNoise',

    /**
     * 基准锐度增益。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_SHARPNESS = 'BaselineSharpness',

    /**
     * Bayer图像中两个绿色通道的分离程度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BAYER_GREEN_SPLIT = 'BayerGreenSplit',

    /**
     * 线性响应上限，有效值范围为[0.0, 1.0]。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LINEAR_RESPONSE_LIMIT = 'LinearResponseLimit',

    /**
     * 相机序列号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_SERIAL_NUMBER = 'CameraSerialNumber',

    /**
     * 镜头信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LENS_INFO = 'LensInfo',

    /**
     * 色度模糊半径。单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CHROMA_BLUR_RADIUS = 'ChromaBlurRadius',

    /**
     * 抗锯齿滤波器强度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANTI_ALIAS_STRENGTH = 'AntiAliasStrength',

    /**
     * 阴影区域缩放因子。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SHADOW_SCALE = 'ShadowScale',

    /**
     * 厂商私有数据块。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DNG_PRIVATE_DATA = 'DNGPrivateData',

    /**
     * EXIF MakerNote 是否安全可保留。0：不安全，1：安全
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MAKER_NOTE_SAFETY = 'MakerNoteSafety',

    /**
     * 第一校准光源类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CALIBRATION_ILLUMINANT1 = 'CalibrationIlluminant1',

    /**
     * 第二校准光源类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CALIBRATION_ILLUMINANT2 = 'CalibrationIlluminant2',

    /**
     * 最佳画质缩放比例。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BEST_QUALITY_SCALE = 'BestQualityScale',

    /**
     * 原始图像数据的唯一标识符。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_DATA_UNIQUE_ID = 'RawDataUniqueID',

    /**
     * 原始RAW文件名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_NAME = 'OriginalRawFileName',

    /**
     * 原始RAW文件的完整数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_DATA = 'OriginalRawFileData',

    /**
     * 有效图像区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ACTIVE_AREA = 'ActiveArea',

    /**
     * 被遮蔽区域列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MASKED_AREAS = 'MaskedAreas',

    /**
     * 拍摄时使用的ICC色彩配置文件。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_ICC_PROFILE = 'AsShotICCProfile',

    /**
     * 应用ICC配置文件前的预变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_PRE_PROFILE_MATRIX = 'AsShotPreProfileMatrix',

    /**
     * 当前使用的ICC色彩配置文件。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CURRENT_ICC_PROFILE = 'CurrentICCProfile',

    /**
     * 当前ICC配置文件前的预变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CURRENT_PRE_PROFILE_MATRIX = 'CurrentPreProfileMatrix',

    /**
     * 色度参考标准。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    COLORIMETRIC_REFERENCE = 'ColorimetricReference',

    /**
     * 相机校准签名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CAMERA_CALIBRATION_SIGNATURE = 'CameraCalibrationSignature',

    /**
     * 配置文件校准签名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_CALIBRATION_SIGNATURE = 'ProfileCalibrationSignature',

    /**
     * 额外相机配置文件索引列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    EXTRA_CAMERA_PROFILES = 'ExtraCameraProfiles',

    /**
     * 拍摄时使用的配置文件名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AS_SHOT_PROFILE_NAME = 'AsShotProfileName',

    /**
     * 已应用的降噪强度级别。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NOISE_REDUCTION_APPLIED = 'NoiseReductionApplied',

    /**
     * 色彩配置文件名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_NAME = 'ProfileName',

    /**
     * 色调/饱和度映射表维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DIMS = 'ProfileHueSatMapDims',

    /**
     * 第一组色调/饱和度映射表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DATA1 = 'ProfileHueSatMapData1',

    /**
     * 第二组色调/饱和度映射表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_DATA2 = 'ProfileHueSatMapData2',

    /**
     * 配置文件色调曲线。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_TONE_CURVE = 'ProfileToneCurve',

    /**
     * 配置文件嵌入策略。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_EMBED_POLICY = 'ProfileEmbedPolicy',

    /**
     * 配置文件版权信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_COPYRIGHT = 'ProfileCopyright',

    /**
     * 第一前向变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FORWARD_MATRIX1 = 'ForwardMatrix1',

    /**
     * 第二前向变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    FORWARD_MATRIX2 = 'ForwardMatrix2',

    /**
     * 预览图生成应用程序名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_APPLICATION_NAME = 'PreviewApplicationName',

    /**
     * 预览图生成应用程序版本。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_APPLICATION_VERSION = 'PreviewApplicationVersion',

    /**
     * 预览图处理设置名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_SETTINGS_NAME = 'PreviewSettingsName',

    /**
     * 预览图设置的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_SETTINGS_DIGEST = 'PreviewSettingsDigest',

    /**
     * 预览图色彩空间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_COLOR_SPACE = 'PreviewColorSpace',

    /**
     * 预览图生成时间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PREVIEW_DATE_TIME = 'PreviewDateTime',

    /**
     * 原始图像数据的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_IMAGE_DIGEST = 'RawImageDigest',

    /**
     * 原始RAW文件数据的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_RAW_FILE_DIGEST = 'OriginalRawFileDigest',

    /**
     * 图像分块存储，定义块的长和宽。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SUB_TILE_BLOCK_SIZE = 'SubTileBlockSize',

    /**
     * 行交织因子。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ROW_INTERLEAVE_FACTOR = 'RowInterleaveFactor',

    /**
     * ProfileLookTableData的维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_DIMS = 'ProfileLookTableDims',

    /**
     * 色彩表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_DATA = 'ProfileLookTableData',

    /**
     * 第一操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST1 = 'OpcodeList1',

    /**
     * 第二操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST2 = 'OpcodeList2',

    /**
     * 第三操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    OPCODE_LIST3 = 'OpcodeList3',

    /**
     * 噪声剖面参数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NOISE_PROFILE = 'NoiseProfile',

    /**
     * 原始默认最终输出尺寸（宽, 高）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_DEFAULT_FINAL_SIZE = 'OriginalDefaultFinalSize',

    /**
     * 原始最佳画质输出尺寸（宽, 高）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_BEST_QUALITY_FINAL_SIZE = 'OriginalBestQualityFinalSize',

    /**
     * 原始默认裁剪尺寸（宽, 高）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGINAL_DEFAULT_CROP_SIZE = 'OriginalDefaultCropSize',

    /**
     * 色调/饱和度映射表编码方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_HUE_SAT_MAP_ENCODING = 'ProfileHueSatMapEncoding',

    /**
     * 色彩表编码方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    PROFILE_LOOK_TABLE_ENCODING = 'ProfileLookTableEncoding',

    /**
     * 基准曝光偏移量，单位：EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    BASELINE_EXPOSURE_OFFSET = 'BaselineExposureOffset',

    /**
     * 默认黑场渲染方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_BLACK_RENDER = 'DefaultBlackRender',

    /**
     * 修改后原始图像数据的新MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    NEW_RAW_IMAGE_DIGEST = 'NewRawImageDigest',

    /**
     * 主RAW图与预览图之间的增益比。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    RAW_TO_PREVIEW_GAIN = 'RawToPreviewGain',

    /**
     * 默认用户裁剪区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_USER_CROP = 'DefaultUserCrop',
  }

  /**
   * 表示TIFF图片信息的枚举。
   * 
   * > **说明：**
   * >
   * > 返回字段类型具体参考[TiffMetadata](docroot://reference/apis-image-kit/arkts-apis-image-TiffMetadata.md)。
   * > | 名称 | 值 | 说明 |
   * > | ---- | -- | ---- |
   * > | DOCUMENT_NAME | 'TiffDocumentName' | 文档或图像的名称。 |
   * > | PHOTOMETRIC_INTERPRETATION | 'TiffPhotometricInterpretation' | 定义像素颜色的解释方式（如RGB、灰度）。 |
   * > | ORIENTATION | 'TiffOrientation' | 图像方向。
   * 
   * - 1表示"Top-left"，图像未旋转。
   * - 2表示"Top-right"，镜像水平翻转。
   * - 3表示"Bottom-right"，图像旋转180°。
   * - 4表示"Bottom-left"，镜像垂直翻转。
   * - 5表示"Left-top"，镜像水平翻转后再顺时针旋转270°。
   * - 6表示"Right-top"，顺时针旋转90°。
   * - 7表示"Right-bottom"，镜像水平翻转后再顺时针旋转90°。
   * - 8表示"Left-bottom"，顺时针旋转270°。
   * 
   * 若读到未定义值，会返回 `Unknown Value x`，其中 `x` 表示该标签的原始取值。 |
   * | RESOLUTION_UNIT | 'TiffResolutionUnit' | XResolution（水平分辨率）和YResolution（垂直分辨率）的单位，取值为英寸（Inch）或厘米（Centimeter）。 |
   * | COPYRIGHT | 'TiffCopyright' | 图像的版权信息。 |
   * | DATE_TIME | 'TiffDateTime' | 与图像关联的日期和时间（通常为最后修改时间）。 |
   * | IMAGE_DESCRIPTION | 'TiffImageDescription' | 图像信息描述。 |
   * | Y_RESOLUTION | 'TiffYResolution' | 垂直方向分辨率（每分辨率单位的像素数）。 |
   * | X_RESOLUTION | 'TiffXResolution' | 水平方向分辨率（每分辨率单位的像素数）。 |
   * | WHITE_POINT | 'TiffWhitePoint' | 用于指定图像的白点（white point）色度坐标，即图像颜色空间中被认为是“白色”的参考点。 |
   * | TILE_LENGTH | 'TiffTileLength' | 每个图像分块的高度。单位：像素（px）。 |
   * | TRANSFER_FUNCTION | 'TiffTransferFunction' | 图像的传递函数，通常用于颜色校正。 |
   * | TILE_WIDTH | 'TiffTileWidth' | 每个图像分块的宽度。单位：像素（px）。 |
   * | MAKE | 'TiffMake' | 拍摄设备制造商。 |
   * | MODEL | 'TiffModel' | 拍摄设备型号名称或编号。 |
   * | HOST_COMPUTER | 'TiffHostComputer' | 用于图像处理的主机或系统。 |
   * | COMPRESSION | 'TiffCompression' | TIFF图像数据所用的压缩方案。
   * 
   * - 1表示无压缩。
   * - 5表示LZW（基于字典的无损压缩算法）。
   * - 7表示JPEG基线。
   * - 8表示Deflate（基于LZ77+Huffman的无损压缩算法） |
   * | SOFTWARE | 'TiffSoftware' | 用于生成图像的软件名称和版本。 |
   * | PRIMARY_CHROMATICITIES | 'TiffPrimaryChromaticities' | 图像中RGB三原色的色度坐标。 |
   * | ARTIST | 'TiffArtist' | 创建图像的用户名称。 |
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
   * 表示JFIF图片信息的枚举。
   * 
   * > **说明：**
   * >
   * > 返回字段类型具体参考[JfifMetadata](docroot://reference/apis-image-kit/arkts-apis-image-JfifMetadata.md)。
   * > | 名称 | 值 | 说明 |
   * > | ---- | -- | ---- |
   * > | DENSITY_UNIT | 'JfifDensityUnit' | 用于定义JfifXDensity（水平像素密度）和JfifYDensity（垂直像素密度）的物理度量单位。
   * 
   * - 0表示无单位（仅像素宽高比）。
   * - 1表示每英寸像素数（DPI）。
   * - 2表示每厘米像素数（DPC）。
   * 
   * 该值为正整数。 |
   * | X_DENSITY | 'JfifXDensity' | JFIF图像X方向密度。 |
   * | Y_DENSITY | 'JfifYDensity' | JFIF图像Y方向密度。 |
   * | VERSION | 'JfifVersion' | JFIF图像版本。 |
   * | IS_PROGRESSIVE | 'JfifIsProgressive' | 图像是否采用渐进式编码，即图像在加载过程中按多次扫描逐步提升清晰度。true表示采用，false表示不采用。 |
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
   * 表示PNG图片信息的枚举。
   * 
   * > **说明：**
   * >
   * > 返回字段类型具体参考[PngMetadata](docroot://reference/apis-image-kit/arkts-apis-image-PngMetadata.md)。
   * > | 名称 | 值 | 说明 |
   * > | ---- | -- | ---- |
   * > | X_PIXELS_PER_METER | 'PngXPixelsPerMeter' | PNG图像X方向每米像素数。 |
   * > | MODIFICATION_TIME | 'PngModificationTime' | PNG图像的最后一次修改的时间。 |
   * > | SOFTWARE | 'PngSoftware' | 用于生成PNG图像的软件名称和版本。 |
   * > | COPYRIGHT | 'PngCopyright' | PNG图像的版权信息。 |
   * > | CREATION_TIME | 'PngCreationTime' | PNG图像的创建时间。 |
   * > | SRGB_INTENT | 'PngSRGBIntent' | PNG图像的sRGB（standard Red Green Blue，标准红绿蓝）渲染意图。
   * 
   * - 0表示感知意图。
   * - 1表示相对比色意图。
   * - 2表示饱和度意图。
   * - 3绝对色度意图。 |
   * | AUTHOR | 'PngAuthor' | PNG图像的作者。 |
   * | INTERLACE_TYPE | 'PngInterlaceType' | PNG图像的交错模式。
   * - 0表示无交错模式（图像按照从上到下、从左到右的顺序加载）。
   * - 1表示交错模式（通过多次扫描逐步显示图像，图像在加载过程中逐渐清晰）。 |
   * | WARNING | 'PngWarning' | PNG图像的警告信息。 |
   * | Y_PIXELS_PER_METER | 'PngYPixelsPerMeter' | PNG图像Y方向每米像素数。 |
   * | GAMMA | 'PngGamma' | PNG图像的系数伽马的值。 |
   * | CHROMATICITIES | 'PngChromaticities' | PNG图像的原色与白点色度坐标cHRM（primary chromaticities and white point）。该信息可用于与设备无关的色彩校正。 |
   * | DESCRIPTION | 'PngDescription' | PNG图像的描述。 |
   * | TITLE | 'PngTitle' | PNG图像的标题。 |
   * | COMMENT | 'PngComment' | PNG图像的注释。 |
   * | DISCLAIMER | 'PngDisclaimer' | PNG图像的免责声明。 |
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
   * HEIF序列图像元数据类，用于存储图像的元数据。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class HeifsMetadata implements Metadata {  
    /**
     * HEIF序列图片的每帧播放时长。单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly heifsDelayTime?: int;

    /**
     * HEIF序列图片的画布高度。
     * 
     * 单位为像素（px）。
     * 
     * 该值为正整数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsCanvasHeight?: int;

    /**
     * HEIF序列图片的画布宽度。
     * 
     * 单位为像素（px）。
     * 
     * 该值为正整数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsCanvasWidth?: int;

    /**
     * HEIF序列图片每帧未钳制的延迟时长。
     * 
     * 单位为毫秒（ms）。
     * 
     * 该值为正整数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly heifsUnclampedDelayTime?: int;

    /**
     * 创建一个空的[HeifsMetadata]{@link image.HeifsMetadata}实例。
     *
     * @returns { HeifsMetadata } 返回HeifsMetadata的空实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): HeifsMetadata;

    /**
     * 获取图像元数据的属性值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @param { Array<string> } key - 要获取的值的属性名称。
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据要获取的属性的值，如果获取失败则返回错误码。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * 批量设置图片元数据中的指定属性的值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @param { Record<string, string | null> } records - 用户要修改HeifsMetadata对象的属性和值的键值对集合。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * 获取图片中所有元数据的属性的值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     *
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据拥有的所有属性的值。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * 对Heifs元数据进行克隆。使用Promise异步回调。
     *
     * @returns { Promise<HeifsMetadata> } Promise对象，成功返回Heifs元数据实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<HeifsMetadata>;

    /**
     * 以二进制数据的形式获取元数据。使用Promise异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象，返回元数据的二进制数据。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;

    /**
     * 使用二进制数据替换当前元数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } blob - 要替换的二进制数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 表示图像方向类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum Orientation {  
    /**
     * 图像未旋转。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOP_LEFT = 1,

    /**
     * 图像是水平镜像的。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 2,

    /**
     * 图像旋转180度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT = 3,

    /**
     * 图像垂直镜像。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT = 4,

    /**
     * 图像水平镜像，然后顺时针旋转270度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LEFT_TOP = 5,

    /**
     * 图像顺时针旋转90度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RIGHT_TOP = 6,

    /**
     * 图像水平镜像，然后顺时针旋转90度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RIGHT_BOTTOM = 7,

    /**
     * 图像顺时针旋转270度。
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
   * Exif（Exchangeable image file format）元数据。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class ExifMetadata implements Metadata {  
    /**
     * 表示该子文件的数据类型（例如文本/图像等基本类型，而非具体存储格式）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    newSubfileType?: int;

    /**
     * 已弃用标签，表示该子文件中的数据类型。请使用newSubfileType替代。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subfileType?: int;
 
    /**
     * 图像宽度。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageWidth?: int;

    /**
     * 图像长度。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageLength?: int;

    /**
     * 像素各分量的位数。如RGB是3分量，格式是8，8，8。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bitsPerSample?: int[];

    /**
     * 用于图像压缩的算法标准。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compression?: int;

    /**
     * 像素组成，如RGB（红绿蓝，Red Green Blue）和YCbCr（亮度-蓝色色差-红色色差，Luma-Chrominance）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photometricInterpretation?: int;

    /**
     * 图像描述。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageDescription?: string;

    /**
     * 拍摄设备的品牌制造商名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    make?: string;

    /**
     * 相机型号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    model?: string;

    /**
     * 图像数据的分块存储偏移量，单位为字节（Byte）。
     * 
     * 为提高大图像访问效率，原始像素数据被分割为多个连续区块（称为条带）。
     * 
     * 此标签按顺序存储每个条带在文件中的起始位置偏移量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    stripOffsets?: int[];

    /**
     * 图像方向。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    orientation?: Orientation;

    /**
     * 记录每个像素的颜色分量数量，适用于RGB（红绿蓝，Red Green Blue）和YCbCr（亮度-蓝色色差-红色色差，Luma-Chrominance）色彩模型。
     * 
     * 由于这两种模型都是三分量模型（一个亮度分量加两个色度分量，或三个颜色通道），因此该标签的标准值为3。
     * 
     * 对于JPEG压缩图像，此标签将会被对应的JPEG标记替换。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    samplesPerPixel?: int;

    /**
     * 每条图像数据的行数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rowsPerStrip?: int;
    
    /**
     * 压缩后每个条带中的字节数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    stripByteCounts?: int[];

    /**
     * 宽度方向上的图像分辨率。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xResolution?: double;

    /**
     * 高度方向上的图像分辨率。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yResolution?: double;

    /**
     * 指示像素分量是以块状或平面格式记录。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    planarConfiguration?: int;

    /**
     * 用于测量宽度方向上的图像分辨率和高度方向上的图像分辨率的单位。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    resolutionUnit?: int;

    /**
     * 图像的传递函数，通常用于颜色校正。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    transferFunction?: string;

    /**
     * 用于生成图像的软件名称和版本。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    software?: string;

    /**
     * 图像创建的日期和时间。
     * 
     * 在本标准中，指文件更改的日期和时间。格式为：“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。例如：“2025:12:15 18:44:59”。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTime?: string;

    /**
     * 创建图像的人的姓名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    artist?: string;

    /**
     * 图像白点的色度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    whitePoint?: double[];

    /**
     * 图像原色的色度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    primaryChromaticities?: double[];

    /**
     * 照片模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photoMode?: int;

    /**
     * JPEG交换格式比特流的SOI（Start of Image）标记。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jpegInterchangeFormat?: int;

    /**
     * JPEG流的字节数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jpegInterchangeFormatLength?: int;

    /**
     * 用于将RGB图像数据转换为YCbCr图像数据的变换矩阵系数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrCoefficients?: double[];
     
    /**
     * 色度分量与亮度分量的采样比。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrSubSampling?: int[];

    /**
     * 色度分量相对于亮度分量的位置。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    yCbCrPositioning?: int;

    /**
     * 参考黑点值和白点值。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    referenceBlackWhite?: double[];

    /**
     * 图像的版权信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    copyright?: string;

    /**
     * 曝光时间。单位为秒（s）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureTime?: double;

    /**
     * 光圈值，如f/1.8。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fNumber?: double;

    /**
     * 相机在拍摄照片时用于设置曝光的程序类。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureProgram?: int;
    
    /**
     * 指示相机每个通道的光谱灵敏度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    spectralSensitivity?: string;

    /**
     * GPS信息的格式版本标识符。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsVersionID?: int[];

    /**
     * GPS纬度参考。例如，N表示北纬，S表示南纬。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLatitudeRef?: string;

    /**
     * GPS纬度。
     * 
     * 纬度用三个RATIONAL（分数形式存储的数值）值表示，分别是度、分和秒，格式为dd/1、mm/1、ss/1。
     * 
     * 当使用度数和分钟时，分钟分数最多保留两位小数，格式为dd/1，mmmm/100,0/1。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLatitude?: double[];

    /**
     * GPS经度参考。例如，E表示东经，W表示西经。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLongitudeRef?: string;

    /**
     * GPS经度。
     * 
     * 经度用三个RATIONAL（分数形式存储的数值）值表示，分别是度、分和秒，格式为dd/1、mm/1、ss/1。
     * 
     * 当使用度数和分钟时，分钟分数最多保留两位小数，格式为dd/1，mmmm/100，0/1。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsLongitude?: double[];

    /**
     * 用于GPS的参考高度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAltitudeRef?: int;

    /**
     * 基于GPSAltitudeRef中的参考高度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAltitude?: double;

    /**
     * GPS时间戳。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTimestamp?: double[];

    /**
     * 用于测量的GPS卫星。通常是它的伪随机噪声码（PRN）编号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSatellites?: string;

    /**
     * 记录图像时GPS接收器的状态。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsStatus?: string;

    /**
     * GPS测量模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsMeasureMode?: string;

    /**
     * GPS数据精度DOP精度衰减因子（Dilution of Precision）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDop?: double;

    /**
     * GPS接收器移动速度的单位。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSpeedRef?: string;

    /**
     * GPS接收器移动的速度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsSpeed?: double;

    /**
     * 提供GPS接收机运动方向的参考。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTrackRef?: string;

    /**
     * GPS接收器移动的方向。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsTrack?: double;

    /**
     * 图像方向的参考。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsImgDirectionRef?: string;

    /**
     * 拍摄时图像的方向。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsImgDirection?: double;

    /**
     * GPS接收机使用的大地测量数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsMapDatum?: string;

    /**
     * 指示目标点的纬度参考。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLatitudeRef?: string;

    /**
     * 目的地的纬度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLatitude?: double[];

    /**
     * 指示目标点的经度参考。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLongitudeRef?: string;

    /**
     * 目的地的经度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestLongitude?: double[];

    /**
     * 指向目的地的方位参考。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestBearingRef?: string;
    
    /**
     * 到达目的地的方位。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestBearing?: double;

    /**
     * 到目标点距离的测量单位。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestDistanceRef?: string;
    
    /**
     * 到目的地的距离。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDestDistance?: double;

    /**
     * 记录定位方法的名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsProcessingMethod?: string;

    /**
     * GPS区域名称的字符串。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsAreaInformation?: string;

    /**
     * GPS日期戳。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDateStamp?: string;

    /**
     * 是否对GPS数据应用了差分校正，这对精确定位精度至关重要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsDifferential?: int;

    /**
     * 水平定位误差。单位为米（m）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gpsHPositioningError?: double;

    /**
     * ISO 12232中指定的相机或输入设备的ISO速度和ISO纬度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedRatings?: int;

    /**
     * 拍摄图像时相机或输入设备的灵敏度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    photographicSensitivity?: int[];

    /**
     * ISO 14524中规定的光电转换函数（OECF）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    oecf?: ArrayBuffer;

    /**
     * 灵敏度类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sensitivityType?: int;

    /**
     * 标准输出灵敏度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    standardOutputSensitivity?: int;

    /**
     * 推荐曝光指数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    recommendedExposureIndex?: int;

    /**
     * 表示相机传感器在单次曝光中可记录的最大动态范围。单位为EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedLatitudeyyy?: int;

    /**
     * 表示相机传感器在过曝方向保护高光细节的能力边界。单位为EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isoSpeedLatitudezzz?: int;

    /**
     * 支持的Exif标准的版本。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exifVersion?: string;

    /**
     * 生成原始图像数据的日期和时间。
     * 
     * 对于DSC（Digital Still Camera 数码静态相机），会记录拍摄照片的日期和时间。格式为“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTimeOriginal?: string;

    /**
     * 将图像作为数字数据存储的日期和时间。
     * 
     * 例如，如果DSC捕获了图像，并同时记录了文件，则DateTimeOriginal和DateTimeDigitized将具有相同的内容。格式为“YYYY:MM:DD HH:MM:SS”，时间以24小时格式显示。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    dateTimeDigitized?: string;

    /**
     * 作为DateTime标签的补充元数据，解决因地理时区变化导致的时间戳歧义问题。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTime?: string;

    /**
     * 设备的地理时区位置。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTimeOriginal?: string;

    /**
     * 记录图像数字化时的UTC协调世界时（Coordinated Universal Time）偏移，有助于精确调整时间戳。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offsetTimeDigitized?: string;

    /**
     * 压缩数据的信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    componentsConfiguration?: string;

    /**
     * 图像压缩方案。单位为每像素比特。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compressedBitsPerPixel?: double;

    /**
     * 快门速度，表示为摄影曝光相加系统值APEX（Additive System of Photographic Exposure）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    shutterSpeedValue?: double;

    /**
     * 镜头光圈。单位为APEX。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    apertureValue?: double;

    /**
     * 图像的亮度值。单位为APEX。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    brightnessValue?: double;

    /**
     * 曝光偏差值。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureBiasValue?: double;

    /**
     * 镜头的最小光圈值。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    maxApertureValue?: double;

    /**
     * 拍照设备到被摄体的距离。单位为米（m）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectDistance?: double;

    /**
     * 测光模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    meteringMode?: int;

    /**
     * 光源。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lightSource?: int;

    /**
     * 闪光。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flash?: int;

    /**
     * 焦距。单位为毫米（mm）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalLength?: double;
    
    /**
     * 用于指示主要对象在整个场景中的位置和区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectArea?: int[];
    
    /**
     * Exif/相机文件系统设计规则DCF（Design rule for Camera File system）写入器制造商记录所需信息的标签。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    makerNote?: ArrayBuffer;
    
    /**
     * 用户评论。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    userComment?: string;

    /**
     * 记录DateTime标记的秒分数的标记。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTime?: string;
	
    /**
     * 记录DateTimeOriginal标记的秒数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTimeOriginal?: string;
	
    /**
     * 记录DateTimeDigitized标记的秒数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subsecTimeDigitized?: string;
	
    /**
     * FPXR（FlashPix Extension Resource）支持的FlashPix格式版本，用于增强设备兼容性。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flashpixVersion?: string;
	
    /**
     * 颜色空间信息标签，通常记录为颜色空间说明符。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    colorSpace?: int;
	
    /**
     * 图像在X轴上的（二维坐标系中的Horizontal Axis）尺寸。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pixelXDimension?: int;
	
    /**
     * 图像在Y轴上的（二维坐标系中的Vertical Axis）尺寸。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pixelYDimension?: int;
	
    /**
     * 与图像数据相关的音频文件的名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    relatedSoundFile?: string;
	
    /**
     * 图像捕获时的闪光灯能量。单位为光束烛光秒（BCPS，Beam Candlepower Seconds）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    flashEnergy?: double;
	
    /**
     * 相机或输入设备空间频率表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    spatialFrequencyResponse?: ArrayBuffer;
	
    /**
     * 传感器物理平面X轴方向上每单位物理长度的像素数量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneXResolution?: double;
	
    /**
     * 传感器物理平面Y轴方向上每单位物理长度的像素数量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneYResolution?: double;
	
    /**
     * FocalPlaneXResolution和FocalPlaneYResolution的测量单位。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalPlaneResolutionUnit?: int;

    /**
     * 图像中主体的像素坐标（基于左上角原点）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectLocation?: int[];
	
    /**
     * 拍摄时选定的曝光指数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureIndex?: double;
	
    /**
     * 摄像头的图像传感器类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sensingMethod?: int;
	
    /**
     * 指示图像源。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fileSource?: ArrayBuffer;
	
    /**
     * 场景类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneType?: ArrayBuffer;
	
    /**
     * 图像传感器的滤色器阵列CFA（Color Filter Array）几何图案。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cfaPattern?: ArrayBuffer;
	
    /**
     * 表示对图像数据的特殊处理，如HDR合成、AI场景增强。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    customRendered?: int;
	
    /**
     * 曝光模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exposureMode?: int;
	
    /**
     * 白平衡。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    whiteBalance?: int;
	
    /**
     * 拍摄时的数字变焦比。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    digitalZoomRatio?: double;
	
    /**
     * 换算成35mm等效焦距。单位为毫米（mm）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focalLengthIn35mmFilm?: int;

    /**
     * 拍摄的场景类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneCaptureType?: int;
	
    /**
     * 整体图像增益调整程度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gainControl?: int;
	
    /**
     * 相机应用的对比度优化策略。例如：标准处理、弱化对比度等。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    contrast?: int;
	
    /**
     * 相机应用的色彩饱和度调节策略。例如：标准、降饱和模式等。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    saturation?: int;
	
    /**
     * 相机应用的边缘增强处理方式。例如：弱锐化、标准锐化等。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sharpness?: int;
	
    /**
     * 特定相机型号的拍照条件信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    deviceSettingDescription?: ArrayBuffer;
	
    /**
     * 指示到对象的距离范围。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    subjectDistanceRange?: int;
	
    /**
     * 为每个图像分配的唯一标识符。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    imageUniqueId?: string;
	
    /**
     * 相机所有者的姓名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cameraOwnerName?: string;
	
    /**
     * 相机机身的序列号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    bodySerialNumber?: string;
	
    /**
     * 所用镜头的规格。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensSpecification?: double[];
	
    /**
     * 镜头的制造商。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensMake?: string;
	
    /**
     * 镜头的型号名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensModel?: string;

    /**
     * 镜头的序列号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    lensSerialNumber?: string;

    /**
     * 指示图像是否为合成图像。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    compositeImage?: int;

    /**
     * 用于合成图像的源图像数量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sourceImageNumberOfCompositeImage?: int[];

    /**
     * 合成图像的源图像的曝光时间，例如1/33秒。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sourceExposureTimesOfCompositeImage?: ArrayBuffer;

    /**
     * 每个组件的伽玛值。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    gamma?: double;

    /**
     * 创建一个空的[ExifMetadata]{@link image.ExifMetadata}实例。
     *
     * @returns { ExifMetadata } 返回ExifMetadata的空实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): ExifMetadata;

    /**
     * 获取图像的元数据属性值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[PropertyKey]{@link image.PropertyKey}。
     *
     * @param { Array<string> } key - 要获取的值的属性名称。
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回获取到的图像元数据属性值。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * 批量设置图片元数据中的指定属性的值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[PropertyKey]{@link image.PropertyKey}。
     *
     * @param { Record<string, string | null> } records - 用户要修改的ExifMetadata对象的属性和键值对的集合。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * 获取图片中所有元数据的属性和值。使用Promise异步回调。
     *
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据拥有的所有属性的值。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * 对Exif元数据进行克隆。使用Promise异步回调。
     *
     * @returns { Promise<ExifMetadata> } Promise对象，成功返回Exif元数据实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<ExifMetadata>;

    /**
     * 以二进制数据的形式获取元数据。使用Promise异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象，返回元数据的二进制数据。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
	
    /**
     * 使用二进制数据替换当前元数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } blob - 要替换的二进制数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * XMAGE水印模式：XMAGE水印固定位于图像底部中央。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const XMAGE_WATERMARK_MODE_AT_THE_BOTTOM = 9;

  /**
   * The XMAGE watermark is at the bottom of the photo.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const XMAGE_WATERMARK_MODE_AT_THE_BOTTOM : int;

  /**
   * XMAGE水印模式：XMAGE水印会自动调整到边界位置，系统根据图像内容选择最适合的边界区域。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const XMAGE_WATERMARK_MODE_BORDER = 10;

  /**
   * The XMAGE watermark is around the edges of the photo.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const XMAGE_WATERMARK_MODE_BORDER : int;

  /**
   * 拍摄模式：专业模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_PROFESSIONAL = 2;

  /**
   * Capture mode: professional.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_PROFESSIONAL : int;

  /**
   * 拍摄模式：前置摄像头夜景模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW = 7;

  /**
   * Capture mode: night view with front lens.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_FRONT_LENS_NIGHT_VIEW : int;

  /**
   * 拍摄模式：全景模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_PANORAMA = 8;

  /**
   * Capture mode: panorama.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_PANORAMA : int;

  /**
   * 拍摄模式：尾灯模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_TAIL_LIGHT = 9;

  /**
   * Capture mode: tail light.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_TAIL_LIGHT : int;

  /**
   * 拍摄模式：轻涂鸦模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_LIGHT_GRAFFITI = 10;

  /**
   * Capture mode: light graffiti.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_LIGHT_GRAFFITI : int;

  /**
   * 拍摄模式：缎面感水流模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_SILKY_WATER = 11;

  /**
   * Capture mode: silky water.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_SILKY_WATER : int;

  /**
   * 拍摄模式：星轨模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_STAR_TRACK = 12;

  /**
   * Capture mode: star track.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_STAR_TRACK : int;

  /**
   * 拍摄模式：广角模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_WIDEAPERTURE = 19;

  /**
   * Capture mode: wide aperture.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_WIDEAPERTURE : int;

  /**
   * 拍摄模式：动态照片模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_MOVING_PHOTO = 20;

  /**
   * Capture mode: moving photos.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_MOVING_PHOTO : int;

  /**
   * 拍摄模式：人像模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_PORTRAIT = 23;

  /**
   * Capture mode: portrait.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_PORTRAIT : int;

  /**
   * 拍摄模式：后镜头夜景模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_REAR_LENS_NIGHT_VIEW = 42;

  /**
   * Capture mode: night view with rear lens.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_REAR_LENS_NIGHT_VIEW : int;

  /**
   * 拍摄模式：超微距模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_SUPER_MACRO = 47;

  /**
   * Capture mode: super macro.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_SUPER_MACRO : int;

  /**
   * 拍摄模式：抓拍模式。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic
   */
  const CAPTURE_MODE_SNAP_SHOT = 62;

  /**
   * Capture mode: snap shot.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 static
   */
  const CAPTURE_MODE_SNAP_SHOT : int;

  /**
   * 表示焦点模式类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FocusMode {  
    /**
     * 自动对焦。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_A = 0,

    /**
     * 单次自动对焦。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_S = 1,

    /**
     * 连续自动对焦。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AF_C = 2,

    /**
     * 手动对焦。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MF = 3
  }

  /**
   * 表示XMAGE颜色模式类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum XmageColorMode {  
    /**
     * 标准模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NORMAL = 0,

    /**
     * 明亮模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BRIGHT = 1,

    /**
     * 柔焦模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SOFT = 2,

    /**
     * 黑白模式。
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
   * 来自Huawei相机的照片元数据。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class MakerNoteHuaweiMetadata implements Metadata {  
    /**
     * 是否支持XMAGE。true表示支持，false表示不支持。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isXmageSupported?: boolean;

    /**
     * XMAGE水印模式。具体取值请参考[Constants]{@link image}。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageWatermarkMode?: int;

    /**
     * 当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的左边界（相对于图片左上角原点）的水平坐标。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageLeft?: int;

    /**
     * 当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的上边界（相对于图片左上角原点）的垂直坐标。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageTop?: int;

    /**
     * 当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的右边界（相对于图片左上角原点）的水平坐标。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageRight?: int;

    /**
     * 当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的下边界（相对于图片左上角原点）的垂直坐标。单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageBottom?: int;

    /**
     * XMAGE颜色模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    xmageColorMode?: XmageColorMode;

    /**
     * 图像是否存在云端增强。true表示存在，false表示不存在。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isCloudEnhanced?: boolean;

    /**
     * 云增强标签。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cloudLabel?: string;

    /**
     * 是否采用风快照模式拍摄。true表示采用，false表示不采用。
     * 
     * 该模式是针对拍摄快速移动物体或容易产生模糊场景（如大风中、抓拍运动物体）的专门摄影。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isWindSnapshot?: boolean;

    /**
     * 场景识别算法版本号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneVersion?: int;

    /**
     * 拍摄场景：美食置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneFoodConfidence?: int;

    /**
     * 拍摄场景：舞台演出置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneStageConfidence?: int;

    /**
     * 拍摄场景：蓝天置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneBlueSkyConfidence?: int;

    /**
     * 拍摄场景：绿色植物置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneGreenPlantConfidence?: int;

    /**
     * 拍摄场景：海滩置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneBeachConfidence?: int;

    /**
     * 拍摄场景：雪景置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneSnowConfidence?: int;

    /**
     * 拍摄场景：日落置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneSunsetConfidence?: int;

    /**
     * 拍摄场景：花卉置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneFlowersConfidence?: int;

    /**
     * 拍摄场景：夜景置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneNightConfidence?: int;

    /**
     * 拍摄场景：文本置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    sceneTextConfidence?: int;

    /**
     * 人脸数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceCount?: int;

    /**
     * 对指定数量的面孔置信度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceConfidences?: int[];

    /**
     * 特定数量面孔的微笑得分。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    faceSmileScores?: int[];

    /**
     * 捕获模式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    captureMode?: int;

    /**
     * 连拍数量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    burstNumber?: int;

    /**
     * 是否使用前置摄像头。true表示使用，false表示不使用。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isFrontCamera?: boolean;

    /**
     * 左右滚动角度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rollAngle?: int;

    /**
     * 俯仰角度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pitchAngle?: int;

    /**
     * 物理光圈值。单位是fNumber。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    physicalAperture?: int;

    /**
     * 镜头对焦控制策略，决定相机如何调整焦距。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    focusMode?: FocusMode;

    /**
     * 返回[MakerNoteHuaweiMetadata]{@link image.MakerNoteHuaweiMetadata}的空实例。
     *
     * @returns { MakerNoteHuaweiMetadata } 返回MakerNoteHuaweiMetadata的空实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static createInstance(): MakerNoteHuaweiMetadata;

    /**
     * 获取图像中属性的值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[PropertyKey]{@link image.PropertyKey}。
     *
     * @param { Array<string> } key - 要获取其值的属性的名称。
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据要获取的属性的值，如获取失败则返回错误码。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>;

    /**
     * 批量设置图片元数据中的指定属性的值。使用Promise异步回调。
     * 
     * 要查询的属性的具体信息请参考[PropertyKey]{@link image.PropertyKey}。
     *
     * @param { Record<string, string | null> } records - 包含要修改的MakerNoteHuaweiMetadata对象属性键值对的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: unsupported metadata type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setProperties(records: Record<string, string | null>): Promise<void>;

    /**
     * 获取图片中所有元数据的属性和值。使用Promise异步回调。
     *
     * @returns { Promise<Record<string, string | null>> } Promise对象，返回元数据中定义的所有键值对。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getAllProperties(): Promise<Record<string, string | null>>;

    /**
     * 对[MakerNoteHuaweiMetadata]{@link image.MakerNoteHuaweiMetadata}元数据进行克隆。使用Promise异步回调。
     *
     * @returns { Promise<MakerNoteHuaweiMetadata> } Promise对象，当成功获取元数据时返回MakerNoteHuaweiMetadata元数据实例。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    clone(): Promise<MakerNoteHuaweiMetadata>;

    /**
     * 以二进制数据的形式获取元数据。使用Promise异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象，返回元数据的二进制数据。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBlob(): Promise<ArrayBuffer>;
	
    /**
     * 使用二进制数据替换当前元数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } blob - 要替换的二进制数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7600206 - Invalid parameter. Possible causes: The blob is empty or has a length of 0.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setBlob(blob: ArrayBuffer): Promise<void>;
  }

  /**
   * Dng图像元数据类，用于存储图像的元数据。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  class DngMetadata {
    /**
     * DNG图片的版本号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngVersion?: int[];

    /**
     * DNG文件向后兼容的最低版本号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngBackwardVersion?: int[];

    /**
     * 相机的唯一型号标识，用于区分不同设备。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly uniqueCameraModel?: string;

    /**
     * 本地化后的相机型号名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly localizedCameraModel?: string;

    /**
     * CFA（Color Filter Array）各平面的颜色通道定义。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cfaPlaneColor?: int[];

    /**
     * CFA（Color Filter Array）布局类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cfaLayout?: int;

    /**
     * 线性化查找表，用于将原始传感器值映射为线性光强度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly linearizationTable?: int[];

    /**
     * 黑电平重复维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelRepeatDim?: int[];

    /**
     * 零光照下的编码电平。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevel?: double[];

    /**
     * 水平方向黑电平校正增量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelDeltaH?: double[];

    /**
     * 垂直方向黑电平校正增量。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly blackLevelDeltaV?: double[];

    /**
     * 白电平，表示传感器最大有效输出。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly whiteLevel?: double[];

    /**
     * 默认缩放比例。格式为[水平缩放比例, 垂直缩放比例]。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultScale?: double[];

    /**
     * 默认裁剪区域的左上角坐标（x, y）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultCropOrigin?: double[];

    /**
     * 默认裁剪区域的宽度和高度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultCropSize?: int[];

    /**
     * 第一校准光源下的色彩变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorMatrix1?: double[];

    /**
     * 第二校准光源下的色彩变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorMatrix2?: double[];

    /**
     * 第一校准光源下的相机校准矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibration1?: double[];

    /**
     * 第二校准光源下的相机校准矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibration2?: double[];

    /**
     * 第一校准光源下的降维矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly reductionMatrix1?: double[];

    /**
     * 第二校准光源下的降维矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly reductionMatrix2?: double[];

    /**
     * 模拟增益平衡系数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly analogBalance?: double[];

    /**
     * 拍摄时的中性白点。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotNeutral?: double[];

    /**
     * 拍摄时白点的CIE（1931色彩空间） x-y色度坐标。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotWhiteXY?: double[];

    /**
     * 基准曝光补偿值，单位：EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineExposure?: double;

    /**
     * 基准噪声水平。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineNoise?: double;

    /**
     * 基准锐度增益。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineSharpness?: double;

    /**
     * Bayer图像中两个绿色通道的分离程度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly bayerGreenSplit?: int;

    /**
     * 线性响应上限。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly linearResponseLimit?: double;

    /**
     * 相机序列号。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraSerialNumber?: string;

    /**
     * 镜头信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly lensInfo?: double[];

    /**
     * 色度模糊半径。单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly chromaBlurRadius?: double;

    /**
     * 抗锯齿滤波器强度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly antiAliasStrength?: double;

    /**
     * 阴影区域缩放因子。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly shadowScale?: double;

    /**
     * 厂商私有数据块。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly dngPrivateData?: ArrayBuffer;

    /**
     * EXIF MakerNote是否安全可保留。true表示安全，false表示不安全。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly makerNoteSafety?: boolean;

    /**
     * 第一校准光源类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly calibrationIlluminant1?: int;

    /**
     * 第二校准光源类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly calibrationIlluminant2?: int;

    /**
     * 最佳画质缩放比例。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly bestQualityScale?: double;

    /**
     * 原始图像数据的唯一标识符。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawDataUniqueID?: string;

    /**
     * 原始RAW文件名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileName?: string;

    /**
     * 原始RAW文件的完整数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileData?: ArrayBuffer;

    /**
     * 有效图像区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly activeArea?: int[];

    /**
     * 被遮蔽区域列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly maskedAreas?: int[];

    /**
     * 拍摄时使用的ICC色彩配置文件。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotICCProfile?: ArrayBuffer;

    /**
     * 应用ICC配置文件前的预变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotPreProfileMatrix?: double[];

    /**
     * 当前使用的ICC色彩配置文件。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly currentICCProfile?: ArrayBuffer;

    /**
     * 当前ICC配置文件前的预变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly currentPreProfileMatrix?: double[];

    /**
     * 色度参考标准。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly colorimetricReference?: int;

    /**
     * 相机校准签名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly cameraCalibrationSignature?: string;

    /**
     * 配置文件校准签名。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileCalibrationSignature?: string;

    /**
     * 额外相机配置文件索引列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly extraCameraProfiles?: int[];

    /**
     * 拍摄时使用的配置文件名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly asShotProfileName?: string;

    /**
     * 已应用的降噪强度级别。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly noiseReductionApplied?: double;

    /**
     * 色彩配置文件名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileName?: string;

    /**
     * 色调/饱和度映射表维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapDims?: int[];

    /**
     * 第一组色调/饱和度映射表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapData1?: double[];

    /**
     * 第二组色调/饱和度映射表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapData2?: double[];

    /**
     * 配置文件色调曲线。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileToneCurve?: double[];

    /**
     * 配置文件嵌入策略。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileEmbedPolicy?: int;

    /**
     * 配置文件版权信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileCopyright?: string;

    /**
     * 第一前向变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly forwardMatrix1?: double[];

    /**
     * 第二前向变换矩阵。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly forwardMatrix2?: double[];

    /**
     * 预览图生成应用程序名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewApplicationName?: string;

    /**
     * 预览图生成应用程序版本。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewApplicationVersion?: string;

    /**
     * 预览图处理设置名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewSettingsName?: string;

    /**
     * 预览图设置的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewSettingsDigest?: string;

    /**
     * 预览图色彩空间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewColorSpace?: int;

    /**
     * 预览图生成时间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly previewDateTime?: string;

    /**
     * 原始图像数据的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawImageDigest?: string;

    /**
     * 原始RAW文件数据的MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalRawFileDigest?: string;

    /**
     * 图像分块存储，定义块的长和宽。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly subTileBlockSize?: int[];

    /**
     * 行交织因子。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rowInterleaveFactor?: int;

    /**
     * ProfileLookTableData的维度。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableDims?: int[];

    /**
     * 色彩表数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableData?: double[];

    /**
     * 第一操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList1?: ArrayBuffer;

    /**
     * 第二操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList2?: ArrayBuffer;

    /**
     * 第三操作码列表。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly opcodeList3?: ArrayBuffer;

    /**
     * 噪声剖面参数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly noiseProfile?: double[];

    /**
     * 原始默认最终输出尺寸。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalDefaultFinalSize?: int[];

    /**
     * 原始最佳画质输出尺寸。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalBestQualityFinalSize?: int[];

    /**
     * 原始默认裁剪尺寸。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly originalDefaultCropSize?: double[];

    /**
     * 色调/饱和度映射表编码方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileHueSatMapEncoding?: int;

    /**
     * 色彩表编码方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly profileLookTableEncoding?: int;

    /**
     * 基准曝光偏移量，单位：EV。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly baselineExposureOffset?: double;

    /**
     * 默认黑场渲染方式。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultBlackRender?: int;

    /**
     * 修改后原始图像数据的新MD5摘要。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly newRawImageDigest?: string;

    /**
     * 主RAW图与预览图之间的增益比。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly rawToPreviewGain?: double;

    /**
     * 默认用户裁剪区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly defaultUserCrop?: int[];
  }

  /**
   * 表示WebP图片信息的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum WebPPropertyKey {
    /**
     * WebP图片的画布像素宽度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CANVAS_WIDTH = 'WebPCanvasWidth',

    /**
     * WebP图片的画布像素高度。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CANVAS_HEIGHT = 'WebPCanvasHeight',

    /**
     * WebP图片钳制后的帧延迟时长。钳制范围为[100, 65535]。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DELAY_TIME = 'WebPDelayTime',

    /**
     * WebP图片未钳制的帧延迟时长。
     * 
     * 单位：毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNCLAMPED_DELAY_TIME = 'WebPUnclampedDelayTime',

    /**
     * WebP图片动画循环的次数。如果取值为0，则表示不限次数。
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
     * WebP图片动画循环的次数。如果取值为0，则表示不限次数。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readonly loopCount?: int;
  }

  /**
   * 表示XMP标签类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum XMPTagType {
    /**
     * 未知类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN = 0,

    /**
     * 字符串类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STRING = 1,

    /**
     * 无序数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Bag>。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNORDERED_ARRAY = 2,

    /**
     * 有序数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Seq>。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ORDERED_ARRAY = 3,

    /**
     * 备选数组类型。序列化时，此类型在XMP元数据中的格式为<rdf:Alt>。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALTERNATE_ARRAY = 4,

    /**
     * 多语言文本类型。序列化时，此类型为XMP格式的xml:lang限定符组成的备选数组。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALTERNATE_TEXT = 5,

    /**
     * 结构体类型。不同于数组元素，结构体字段可以属于不同的命名空间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STRUCTURE = 6,
  }

  /**
   * 表示XMP命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPNamespace {
    /**
     * XMP命名空间URI。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uri: string;

    /**
     * XMP命名空间前缀。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    prefix: string;
  }

  /**
   * XMP基础命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const XMP_BASIC: XMPNamespace;

  /**
   * XMP版权与权限命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const XMP_RIGHTS: XMPNamespace;

  /**
   * EXIF元数据命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const EXIF: XMPNamespace;

  /**
   * Dublin Core元数据命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const DUBLIN_CORE: XMPNamespace;

  /**
   * TIFF图像格式参数命名空间。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  const TIFF: XMPNamespace;

  /**
   * 表示XMP标签信息。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPTag {
    /**
     * XMP命名空间。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xmpNamespace: XMPNamespace;

    /**
     * XMP标签名称。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    name: string;

    /**
     * XMP标签类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: XMPTagType;

    /**
     * XMP标签值。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value?: string;
  }

  /**
   * 表示XMP枚举选项。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface XMPEnumerateOptions {
    /**
     * 表示是否进行递归遍历。
     * 
     * true表示进行递归遍历。false表示仅遍历直接子节点。默认为false。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isRecursive?: boolean;

    /**
     * 表示是否仅遍历限定符节点。
     * 
     * true表示仅遍历限定符节点。false表示遍历所有节点。默认为false。
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
   * 表示AVIS图片信息的枚举。
   * 
   * > **说明：**
   * >
   * > 返回字段类型具体参考[AvisMetadata](docroot://reference/apis-image-kit/arkts-apis-image-AvisMetadata.md)。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
 	enum AvisPropertyKey {
 	  /**
     * AVIS图片的每帧播放时长。
     * 
     * 单位：毫秒（ms）。
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
   * 图像的元数据集。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ImageMetadata {  
    /**
     * Exif元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    exifMetadata?: ExifMetadata;

    /**
     * 来自Huawei相机的照片元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    makerNoteHuaweiMetadata?: MakerNoteHuaweiMetadata;

    /**
     * HEIF序列图像元数据类，用于存储图像的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    heifsMetadata?: HeifsMetadata;

    /**
     * DNG图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    dngMetadata?: DngMetadata;

    /**
     * WebP图像元数据类，用于存储图像的元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    webPMetadata?: WebPMetadata;

    /**
     * GIF图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    gifMetadata?: GifMetadata;

    /**
     * TIFF图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    tiffMetadata?: TiffMetadata;

    /**
     * JFIF图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    jfifMetadata?: JfifMetadata;

    /**
     * PNG图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pngMetadata?: PngMetadata;

    /**
     * XMP元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xmpMetadata?: XMPMetadata;

    /**
     * AVIS图像元数据。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    avisMetadata?: AvisMetadata;
  }

  /**
   * 图像解码设置选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 13 dynamic
   * @since 23 static
   */
  interface DecodingOptionsForPicture {
    /**
     * 设置AuxiliaryPicture类型，当未指定或传入空的Array时，系统会解码所有可用的AuxiliaryPicture类型。 
     * 
     * 如果不希望解码任何辅助图，可以直接解码为PixelMap，使用PixelMap创建仅包含主图的Picture。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 13 dynamic
     * @since 23 static
     */
    desiredAuxiliaryPictures: Array<AuxiliaryPictureType>;

    /**
     * 期望输出主图大小（必须为正整数），默认为主图原始尺寸。单位：像素（px）。
     * 
     * 若主图原始尺寸与指定尺寸不一致，则会进行拉伸/缩放到指定尺寸。
     * 
     * 辅助图的宽度与高度均与主图按照同比例进行相应拉伸/缩放。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    desiredSizeForMainPixelMap?: Size;

    /**
     * 解码的像素格式。默认值为RGBA_8888。
     * 
     * 仅支持设置：RGBA_8888、BGRA_8888、RGB_565、NV12及NV21。
     * 
     * 当设置其他不支持的像素格式时，返回解码失败。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    desiredPixelFormat?: PixelMapFormat;
  }

  /**
   * 缩略图解码参数选项。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DecodingOptionsForThumbnail {
    /**
     * 指定图像无缩略图时是否生成缩略图。true表示生成，false表示不生成。默认值为true。
     * 
     * 当图片文件中无缩略图且generateThumbnailIfAbsent为false时，返回undefined（抛出错误码
     * [7700303 图片不包含缩略图数据](docroot://reference/apis-image-kit/errorcode-image.md#7700303-图片不包含缩略图数据)）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    generateThumbnailIfAbsent?: boolean;

    /**
     * 用于指定生成缩略图的最大边长（宽和高中较大的那一边），较短的一边会根据长边的缩放比例进行缩放。此参数仅在generateThumbnailIfAbsent设置为true时生效。
     * 
     * 该值应为整数，默认值为512。生成后的缩略图，宽和高都会限制在maxGeneratedPixelDimension以内。
     * 
     * 若按该参数计算后，缩略图的宽或高小于1像素（取整后为0），则不会生成缩略图。
     * 
     * 单位：像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxGeneratedPixelDimension?: int;
  }

   /**
   * 表示辅助图的图像信息。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface AuxiliaryPictureInfo {
    /**
     * 辅助图的图像类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    auxiliaryPictureType: AuxiliaryPictureType;

    /**
     * 图片大小。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    size: Size;

    /**
     * 行跨距。单位：字节（Byte）。应大于或等于图像每行像素数据所占的字节数，不满足时数据读取异常。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 13 dynamic
     * @since 23 static
     */
    rowStride: int;

    /**
      * 像素格式。
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @since 13 dynamic
      * @since 23 static
      */
     pixelFormat: PixelMapFormat;

    /**
      * 目标色彩空间。
      *
      * @syscap SystemCapability.Multimedia.Image.Core
      * @since 13 dynamic
      * @since 23 static
      */
     colorSpace: colorSpaceManager.ColorSpaceManager;
  }

  /**
   * 图像的RAW数据。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface ImageRawData {  
    /**
     * 图像缓冲区。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    buffer: ArrayBuffer;

    /**
     * 每个像素在缓冲区数据中实际占用的位数。单位：比特（bit）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    bitsPerPixel: int;
  }

  /**
   * ImageSource类，用于获取图片相关信息。
   * 
   * 在调用ImageSource的方法前，需要先通过[image.createImageSource]{@link image.createImageSource}构建一个ImageSource实例。
   * 
   * ImageSource的所有方法均不支持并发调用。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link image.ImageSource.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform [since 10]
   * @form [since 12]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface ImageSource {
    /**
     * 获取指定序号的图片信息。使用callback异步回调。
     *
     * @param { int } index - 创建ImageSource时的序号。默认值为0，表示第一张图片。当取值为N时，表示第N+1张图片。单帧图片场景中index取值只能为0，动图等多帧图片场景中index的取值范围为：
     *     [0, (帧数-1)]。
     * @param { AsyncCallback<ImageInfo> } callback - 回调函数。当获取图片信息成功，err为undefined，data为获取到的图片信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
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
     * 获取图片信息。使用callback异步回调。
     *
     * @param { AsyncCallback<ImageInfo> } callback - 回调函数。当获取图片信息成功，err为undefined，data为获取到的图片信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
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
     * 获取图片信息。使用Promise异步回调。
     *
     * @param { int } index - 创建ImageSource时的序号。默认值为0，表示第一张图片。当取值为N时，表示第N+1张图片。单帧图片场景中index取值只能为0，动图等多帧图片场景中index的取值范围为：
     *     [0, (帧数-1)]。
     * @returns { Promise<ImageInfo> } Promise对象，返回获取到的图片信息。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 6 dynamic
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
     * 获取指定序号的图片信息，使用同步形式返回图片信息。
     * 
     * > **说明：**
     * >
     * > 该方法为同步方法，调用时会阻塞当前线程，不建议在主线程中调用，否则可能导致应用卡顿、掉帧或响应延迟。具体场景参考
     * > [耗时任务并发场景简介](docroot://arkts-utils/time-consuming-task-overview.md)。
     *
     * @param { int } index - 创建ImageSource时的序号。默认值为0，表示第一张图片。当取值为N时，表示第N+1张图片。单帧图片场景中index取值只能为0，动图等多帧图片场景中index的取值范围为：
     *     [0, (帧数-1)]。
     * @returns { ImageInfo } 同步返回获取到的图片信息。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamic
     */
    getImageInfoSync(index?: int): ImageInfo;

    /**
     * Get image information from image source synchronously.
     *
     * @param { int } [index] - Index of sequence image. If this parameter is specified, default value is 0
     *     <br>The value range is all integers.
     * @returns { ImageInfo | undefined } The image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImageInfoSync(index?: int): ImageInfo | undefined;

    /**
     * 通过图片解码参数创建PixelMap对象。使用Promise异步回调。
     * 
     * 从API version 15开始，推荐使用[createPixelMapUsingAllocator]{@link image.createPixelMapUsingAllocator}，该接口可以指定输出pixelMap的
     * 内存类型[AllocatorType]{@link image.AllocatorType}，详情请参考
     * [图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @returns { Promise<PixelMap> } Promise对象，返回PixelMap。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
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
     * 通过默认参数创建PixelMap对象。使用callback异步回调。
     * 
     * 从API version 15开始，推荐使用[createPixelMapUsingAllocator]{@link image.createPixelMapUsingAllocator}，该接口可以指定输出pixelMap的
     * 内存类型[AllocatorType]{@link image.AllocatorType}，详情请参考
     * [图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { AsyncCallback<PixelMap> } callback - 回调函数，当创建PixelMap对象成功，err为undefined，data为获取到的PixelMap对象；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
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
     * 通过图片解码参数创建PixelMap对象。使用callback异步回调。
     * 
     * 从API version 15开始，推荐使用[createPixelMapUsingAllocator]{@link image.createPixelMapUsingAllocator}，该接口可以指定输出pixelMap的
     * 内存类型[AllocatorType]{@link image.AllocatorType}，详情请参考
     * [图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @param { AsyncCallback<PixelMap> } callback - 回调函数，当创建PixelMap对象成功，err为undefined，data为获取到的PixelMap对象；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @form [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
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
     * 使用指定的分配器根据图像解码参数异步创建PixelMap对象。使用Promise异步回调。接口使用详情请参考
     * [图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @param { AllocatorType } allocatorType - 用于图像解码的内存类型。默认值为AllocatorType.AUTO。
     * @returns { Promise<PixelMap> } Promise对象，返回PixelMap。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700101 - Bad source. e.g.,1. Image has invalid width or height. 2. Image source
     *     incomplete.
     *     3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large. This status code is thrown when an error occurs during the
     *     process of
     *     checking size.
     * @throws { BusinessError } 7700201 - Unsupported allocator type, e.g., use share memory to decode a HDR image as
     *     only DMA supported hdr metadata.
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
     * @param { DecodingOptions } [options] - Image decoding parameters.
     * @param { AllocatorType } [allocatorType] - Indicate which memory type will be used by the returned PixelMap.
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
     * 通过图片解码参数同步创建PixelMap对象。
     * 
     * 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * 
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * 
     * 从API version 15开始，推荐使用[createPixelMapUsingAllocatorSync]{@link image.createPixelMapUsingAllocatorSync}，该接口可以指定输出
     * pixelMap的内存类型[AllocatorType]{@link image.AllocatorType}，详情请参考
     * [图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * > **说明：**
     * >
     * > 该方法为同步方法，调用时会阻塞当前线程，不建议在主线程中调用，否则可能导致应用卡顿、掉帧或响应延迟。具体场景参考
     * > [耗时任务并发场景简介](docroot://arkts-utils/time-consuming-task-overview.md)。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @returns { PixelMap } 用于同步返回创建结果。
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
     * 根据指定的分配器同步创建一个基于图像解码参数的PixelMap对象。接口使用详情请参考[图片解码内存优化(ArkTS)](docroot://media/image/image-allocator-type.md)。
     * 
     * 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * 
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * 
     * > **说明：**
     * >
     * > 该方法为同步方法，调用时会阻塞当前线程，不建议在主线程中调用，否则可能导致应用卡顿、掉帧或响应延迟。具体场景参考
     * > [耗时任务并发场景简介](docroot://arkts-utils/time-consuming-task-overview.md)。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @param { AllocatorType } allocatorType - 用于图像解码的内存类型。默认值为AllocatorType.AUTO。
     * @returns { PixelMap } 用于同步返回创建结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 7700101 - Bad source. e.g.,1. Image has invalid width or height. 2. Image source
     *     incomplete.
     *     3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported mimetype.
     * @throws { BusinessError } 7700103 - Image too large. This status code is thrown when an error occurs during the
     *     process of
     *     checking size.
     * @throws { BusinessError } 7700201 - Unsupported allocator type, e.g., use share memory to decode a HDR image as
     *     only DMA supported hdr metadata.
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
     * @param { DecodingOptions } [options] - Image decoding parameters.
     * @param { AllocatorType } [allocatorType] - Indicate which memory type will be used by the returned PixelMap.
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
     * 通过图片解码参数创建PixelMap数组。使用Promise异步回调。
     * 
     * 针对动态图（如Gif、Webp），该接口会返回每帧图片数据；针对静态图，该接口会返回唯一的一帧图片数据。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * >
     * > - 此接口会一次性解码全部帧，当帧数过多或单帧图像过大时（如2000×3000像素的100帧GIF动图），会占用较大内存，造成系统内存紧张，此种情况推荐使用Image组件显示动图，Image组件采用逐帧解码，占用内存比此接
     * > 口少。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @returns { Promise<Array<PixelMap>> } 异步返回PixelMap数组。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
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
     * @since 10 dynamic
     * @since 23 static
     */
    createPixelMapList(options?: DecodingOptions): Promise<Array<PixelMap>>;

    /**
     * 通过默认参数创建PixelMap数组。使用callback异步回调。
     * 
     * 针对动态图（如Gif、Webp），该接口会返回每帧图片数据；针对静态图，该接口会返回唯一的一帧图片数据。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * >
     * > - 此接口会一次性解码全部帧，当帧数过多或单帧图像过大时，会占用较大内存，造成系统内存紧张，此种情况推荐使用Image组件显示动图，Image组件采用逐帧解码，占用内存比此接口少。
     *
     * @param { AsyncCallback<Array<PixelMap>> } callback - 回调函数，当创建PixelMap对象数组成功，err为undefined，data为获取到的PixelMap对象数组；否
     *     则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
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
     * @since 10 dynamic
     * @since 23 static
     */
    createPixelMapList(callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * 通过图片解码参数创建PixelMap数组。使用callback异步回调。
     * 
     * 针对动态图（如Gif、Webp），该接口会返回每帧图片数据；针对静态图，该接口会返回唯一的一帧图片数据。
     * 
     * > **说明：**
     * >
     * > - 该方法为非线程安全的方法，不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * >
     * > - 此接口会一次性解码全部帧，当帧数过多或单帧图像过大时，会占用较大内存，造成系统内存紧张，此种情况推荐使用Image组件显示动图，Image组件采用逐帧解码，占用内存比此接口少。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @param { AsyncCallback<Array<PixelMap>> } callback - 回调函数，当创建PixelMap对象数组成功，err为undefined，data为获取到的PixelMap对象数组；否
     *     则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980099 - The shared memory data is abnormal.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
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
     * @since 10 dynamic
     * @since 23 static
     */
    createPixelMapList(options: DecodingOptions, callback: AsyncCallback<Array<PixelMap>>): void;

    /**
     * 获取图像延迟时间数组。使用Promise异步回调。此接口仅用于gif图片和webp图片。
     *
     * @returns { Promise<Array<int>> } Promise对象，返回延迟时间数组。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getDelayTimeList(): Promise<Array<int>>;

    /**
     * 获取图像延迟时间数组。使用callback异步回调。此接口仅用于gif图片和webp图片。
     *
     * @param { AsyncCallback<Array<int>> } callback - 回调函数，当获取图像延迟时间数组成功，err为undefined，data为获取到的图像延时时间数组；否则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980149 - Invalid MIME type for the image source.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getDelayTimeList(callback: AsyncCallback<Array<int>>): void;

    /**
     * 获取图像帧过渡模式数组。使用Promise异步回调。此接口仅用于gif图片。
     *
     * @returns { Promise<Array<int>> } Promise对象，返回帧过渡模式数组。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
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
     * 获取图像帧数。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回图像帧数。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getFrameCount(): Promise<int>;

    /**
     * 获取图像帧数。使用callback异步回调。
     *
     * @param { AsyncCallback<int> } callback - 回调函数，当获取图像帧数成功，err为undefined，data为获取到的图像帧数；否则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980116 - Failed to decode the image.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980137 - Invalid media operation.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getFrameCount(callback: AsyncCallback<int>): void;

    /**
     * 获取图片中给定索引处图像的指定属性键的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>、WEBP<sup>23+</sup>和DNG<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     *
     * @param { PropertyKey } key - 图片属性名。
     * @param { ImagePropertyOptions } options - 图片属性，包括图片序号与默认属性值。
     * @returns { Promise<string> } Promise对象，返回图片属性值，如获取失败则返回属性默认值。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2
     *     .Incorrect parameter types;3.Parameter verification failed;
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980103 - The image data is not supported.
     * @throws { BusinessError } 62980110 - The image source data is incorrect.
     * @throws { BusinessError } 62980111 - The image source data is incomplete.
     * @throws { BusinessError } 62980112 - The image format does not match.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980118 - Failed to create the image plugin.
     * @throws { BusinessError } 62980122 - Failed to decode the image header.
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    getImageProperty(key: PropertyKey, options?: ImagePropertyOptions): Promise<string>;

    /**
     * 获取图片中给定索引处图像的指定属性键的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11废弃，建议使用
     * > [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}代
     * > 替。
     *
     * @param { string } key - 图片属性名。
     * @param { GetImagePropertyOptions } options - 图片属性，包括图片序号与默认属性值。
     * @returns { Promise<string> } Promise对象，返回图片属性值，如获取失败则返回属性默认值。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)
     */
    getImageProperty(key: string, options?: GetImagePropertyOptions): Promise<string>;

    /**
     * 获取图片中给定索引处图像的指定属性键的值。使用callback异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11废弃，建议使用
     * > [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}代
     * > 替。
     *
     * @param { string } key - 图片属性名。
     * @param { AsyncCallback<string> } callback - 回调函数，当获取图片属性值成功，err为undefined，data为获取到的图片属性值；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)
     */
    getImageProperty(key: string, callback: AsyncCallback<string>): void;

    /**
     * 获取图片指定属性键的值。使用callback异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11废弃，建议使用
     * > [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}代
     * > 替。
     *
     * @param { string } key - 图片属性名。
     * @param { GetImagePropertyOptions } options - 图片属性，包括图片序号与默认属性值。
     * @param { AsyncCallback<string> } callback - 回调函数，当获取图片属性值成功，err为undefined，data为获取到的图片属性值；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)
     */
    getImageProperty(key: string, options: GetImagePropertyOptions, callback: AsyncCallback<string>): void;

    /**
     * 批量获取图片中的指定属性键的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF、WEBP<sup>23+</sup>和DNG<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     *
     * @param { Array<PropertyKey> } key - 图片属性名的数组。
     * @returns { Promise<Record<PropertyKey, string|null>> } Promise对象，返回图片属性值，如获取失败则返回null。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2
     *     .Incorrect parameter types; 3.Parameter verification failed;
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
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
     * 获取图片Exif指定属性键的值，使用同步形式返回结果。
     * 
     * > **说明：**
     * >
     * > - 该方法仅支持JPEG、PNG、HEIF、WEBP<sup>23+</sup>和DNG<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * >
     * > - Exif信息是图片的元数据，包含拍摄时间、相机型号、光圈、焦距、ISO等。
     * >
     * > - 该方法为同步方法，调用时会阻塞当前线程，不建议在主线程中调用，否则可能导致应用卡顿、掉帧或响应延迟。具体场景参考
     * > [耗时任务并发场景简介](docroot://arkts-utils/time-consuming-task-overview.md)。
     *
     * @param { PropertyKey } key - 图片属性名。
     * @returns { string } 返回图片Exif中指定属性键的值（如获取失败则返回属性默认值），各个数据值作用请参考[PropertyKey]{@link image.PropertyKey}。
     * @throws { BusinessError } 7700101  - Bad source. e.g.,1. Image has invalid width or height. 2. Image
     *     source incomplete. 3. Read image data failed. 4. Codec create failed.
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
     *     source incomplete. 3. Read image data failed. 4. Codec create failed.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata. For example, key is not supported.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 23 static
     */
    getImagePropertySync(key: PropertyKey): string | undefined;

    /**
     * 通过指定的键修改图片属性的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > - 调用modifyImageProperty修改属性会改变属性字节长度，使用buffer创建的ImageSource调用modifyImageProperty会导致buffer内容覆盖，目前buffer创建的
     * > ImageSource不支持调用此接口，请改用fd或path创建的ImageSource。
     * >
     * > - 调用modifyImageProperty接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { PropertyKey } key - 图片属性名。
     * @param { string } value - 属性值。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2
     *     .Incorrect parameter types;
     * @throws { BusinessError } 62980123 - The image does not support EXIF decoding.
     * @throws { BusinessError } 62980133 - The EXIF data is out of range.
     * @throws { BusinessError } 62980135 - The EXIF value is invalid.
     * @throws { BusinessError } 62980146 - The EXIF data failed to be written to the file.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    modifyImageProperty(key: PropertyKey, value: string): Promise<void>;

    /**
     * 通过指定的键修改图片属性的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > - 调用modifyImageProperty修改属性会改变属性字节长度，使用buffer创建的ImageSource调用modifyImageProperty会导致buffer内容覆盖，目前buffer创建的
     * > ImageSource不支持调用此接口，请改用fd或path创建的ImageSource。
     * >
     * > - 从API version 9开始支持，从API version 11废弃，建议使用
     * > [modifyImageProperty]{@link image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)}代替。
     * >
     * > - 调用modifyImageProperty接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { string } key - 图片属性名。
     * @param { string } value - 属性值。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)
     */
    modifyImageProperty(key: string, value: string): Promise<void>;

    /**
     * 通过指定的键修改图片属性的值。使用callback异步回调。
     * 
     * 仅支持JPEG、PNG、HEIF<sup>12+</sup>和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > - 调用modifyImageProperty修改属性会改变属性字节长度，使用buffer创建的ImageSource调用modifyImageProperty会导致buffer内容覆盖，目前buffer创建的
     * > ImageSource不支持调用此接口，请改用fd或path创建的ImageSource。
     * >
     * > - 从API version 9开始支持，从API version 11废弃，建议使用
     * > [modifyImageProperty]{@link image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)}代替。
     * >
     * > - 调用modifyImageProperty接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { string } key - 图片属性名。
     * @param { string } value - 属性值。
     * @param { AsyncCallback<void> } callback - 回调函数，当修改图片属性值成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead image.ImageSource.modifyImageProperty(key: PropertyKey, value: string)
     */
    modifyImageProperty(key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * 批量通过指定的键修改图片属性的值。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF和WEBP<sup>23+</sup>（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > - 调用modifyImageProperties修改属性会改变属性字节长度，使用buffer创建的ImageSource调用modifyImageProperties会导致buffer内容覆盖，目前buffer创建的
     * > ImageSource不支持调用此接口，请改用fd或path创建的ImageSource。
     * >
     * > - 调用modifyImageProperties接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { Record<PropertyKey, string|null> } records - 包含图片属性名和属性值的数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified; 2
     *     .Incorrect parameter types; 3.Parameter verification failed;
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
     * 批量修改图片属性。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 调用该接口修改属性会改变属性字节长度，建议通过传入文件描述符来创建[image.createImageSource]{@link image.createImageSource}实例或通过传入的uri创建
     * > [image.createImageSource]{@link image.createImageSource}实例。
     * >
     * > - 该方法在内存中完成批量数据修改后会一次性写入文件，相比
     * > [modifyImageProperties]{@link image.ImageSource.modifyImageProperties(records: Record<PropertyKey, string|null>)}
     * > 更高效。
     * >
     * > - 支持修改JPEG、PNG、HEIF和WEBP文件类型的图片属性，图片需要包含Exif信息。
     * >
     * > - 调用modifyImagePropertiesEnhanced接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { Record<string, string|null> } records - 包含图片属性名和属性值的键值对集合。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 批量修改图片属性。使用Promise异步回调。
     * 
     * Exif属性中除"JPEGInterchangeFormat"/"JPEGInterchangeFormatLength"/"GIFLoopCount"字段外，其他均支持修改。
     * 
     * > **说明：**
     * >
     * > - 调用该接口修改属性会改变属性字节长度，建议通过传入文件描述符来创建[image.createImageSource]{@link image.createImageSource}实例或通过传入的uri创建
     * > [image.createImageSource]{@link image.createImageSource}实例。
     * >
     * > - 支持修改JPEG、PNG、HEIF和WEBP文件类型的图片属性，图片需要包含Exif信息。
     *
     * @param { Record<string, string|null> } records - 包含图片属性名和属性值的键值对集合。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 更新增量数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 存放增量数据的buffer。
     * @param { boolean } isFinished - true表示数据更新完成，当前buffer内存放最后一段数据；false表示数据还未更新完成，需要继续更新。
     * @param { int } offset - 即当前buffer中的数据首地址，相对于整个图片文件首地址的偏移量。单位：字节（Byte）。 [since 11]
     * @param { int } length - 当前buffer的长度。单位：字节（Byte）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    updateData(buf: ArrayBuffer, isFinished: boolean, offset: int, length: int): Promise<void>;

    /**
     * 更新增量数据。使用callback异步回调。
     *
     * @param { ArrayBuffer } buf - 存放增量数据的buffer。
     * @param { boolean } isFinished - true表示数据更新完成，当前buffer内存放最后一段数据；false表示数据还未更新完成，需要继续更新。
     * @param { int } offset - 即当前buffer中的数据首地址，相对于整个图片文件首地址的偏移量。单位：字节（Byte）。 [since 11]
     * @param { int } length - 当前buffer的长度。单位：字节（Byte）。
     * @param { AsyncCallback<void> } callback - 回调函数，当更新增量数据成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 9 dynamic
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
     * 释放ImageSource实例。使用callback异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，当资源释放成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放ImageSource实例。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 通过图片解码参数创建Picture对象。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法，及时释放内存。
     * 
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { DecodingOptionsForPicture } options - 解码参数。
     * @returns { Promise<Picture> } Promise对象，返回Picture。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7700301 - Decode failed.
     * @throws { BusinessError } 7700203 - Unsupported options. For example, unsupported desiredPixelFormat causes
     *     a failure in converting an image into the desired pixel format. [since 24]
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 13 dynamic
     */
    createPicture(options?: DecodingOptionsForPicture): Promise<Picture>;

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
    createPicture(options?: DecodingOptionsForPicture): Promise<Picture | undefined>;

    /**
     * 通过指定序号的图片创建Picture对象。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 支持GIF和HEIF<sup>23+</sup>图像序列格式。从API版本26.0.0开始，增加支持AVIS格式。
     * >
     * > - 由于图片占用内存较大，所以当Picture对象使用完成后，应主动调用[release]{@link image.Picture.release}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { int } index - 解码图片序号。图片序号有效的取值范围为：[0, (帧数-1)]。
     * @returns { Promise<Picture> } Promise对象，返回Picture。
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
    createPictureAtIndex(index : int): Promise<Picture | undefined>;

    /**
     * 创建SDR的PixelMap对象。当图片为带有3通道GainMap的HDR图片时，会将其基础图扩展为BT.2020色域的SDR图。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 对SDR图片源，按图片自带的色彩空间解码，输出SDR图。
     * >
     * > - 对带有单通道GainMap的HDR图片源，解码其基础图（SDR图），忽略GainMap。
     * >
     * > - 对带有3通道GainMap的HDR图片源，解码其基础图（SDR图），并将输出SDR图的色域扩展为
     * > [ColorSpace]{@link @ohos.graphics.colorSpaceManager:colorSpaceManager.ColorSpace}.DISPLAY_BT2020_SRGB。
     *
     * @returns { Promise<PixelMap> } Promise对象，返回PixelMap。
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
     * 支持的图片格式。
     * 
     * 包括：PNG、JPEG、BMP、GIF、WebP、DNG、HEIC<sup>12+</sup>、WBMP<sup>23+</sup>、HEIFS<sup>23+</sup>、TIFF<sup>23+</sup>。从API版本2
     * 6.0.0开始，增加支持AVIF、AVIS格式。
     * 
     * 部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用[image.getImageSourceSupportedFormats]{@link image.getImageSourceSupportedFormats}接口，
     * 动态查询当前设备上的解码能力。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    readonly supportedFormats: Array<string>;

    /**
     * 读取图像源的元数据，使用propertyKeys指定元数据字段。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF、WebP、DNG、GIF、TIFF、HEIFS、JFIF和AVIS（不同硬件设备支持情况不同）文件，且需要包含Exif信息。
     * 
     * > **说明：**
     * >
     * > 读取DNG格式图片时，该接口对部分propertyKeys有特殊处理。以下字段的字符串取值请参考[PropertyKey]{@link image.PropertyKey}中的值：
     * >
     * > - NewSubfileType、ImageWidth、ImageLength、DefaultCropSize、Orientation、Compression、PhotometricInterpretation、
     * > PlanarConfiguration、RowsPerStrip、StripOffsets、StripByteCounts、SamplesPerPixel、BitsPerSample、YCbCrCoefficients、
     * > YCbCrSubSampling、YCbCrPositioning、ReferenceBlackWhite、XResolution、YResolution、ResolutionUnit字段：返回主图相关的字段值。
     * >
     * > - ImageUniqueID字段：根据规范进行校验，不符合规范时会返回空字符串。
     * >
     * > - ExifVersion、FlashpixVersion、ColorSpace字段：当图片中不存在该标签时，返回错误码。
     * >
     * > - DNGVersion字段：当版本号小于1.0.0.0时，统一返回1.0.0.0。
     * >
     * > - GPSVersionID字段：当没有有效的GPS数据时，会清除GPS版本号并返回0。
     * >
     * > - GPSAltitudeRef字段：当未设置GPSAltitude时，会设置为0xFFFFFFFF。
     * >
     * > - ISOSpeedRatings字段：当该标签值为0或65535时，会优先使用推荐曝光指数，若不存在则依次使用标准输出灵敏度、ISO速度、曝光指数。
     * >
     * > - 从API version 24开始，支持读取DNG元数据。要查询的属性的具体信息请参考[DngPropertyKey]{@link image.DngPropertyKey}。
     * >
     * > - 从API version 24开始，支持读取HEIFS元数据。要查询的属性的具体信息请参考[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取PNG元数据。要查询的属性的具体信息请参考[PngPropertyKey]{@link image.PngPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取JFIF元数据。要查询的属性的具体信息请参考[JfifPropertyKey]{@link image.JfifPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取TIFF元数据。要查询的属性的具体信息请参考[TiffPropertyKey]{@link image.TiffPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取GIF元数据。要查询的属性的具体信息请参考[GifPropertyKey]{@link image.GifPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取JPEG、PNG、GIF、DNG、TIFF格式图片的XMP元数据。XMP元数据的操作方法可以参考
     * > [XMPMetadata](docroot://reference/apis-image-kit/arkts-apis-image-XMPMetadata.md)。
     * >
     * > - 从API版本26.0.0开始，支持读取AVIS元数据。要查询的属性的具体信息请参考[AvisPropertyKey]{@link image.AvisPropertyKey}。
     *
     * @param { string[] } [propertyKeys] - 图片属性名的数组。若未指定propertyKeys，则返回所有支持的元数据。
     * @param { int } [index] - 感兴趣的索引，默认值为0。
     * @returns { Promise<ImageMetadata> } Promise对象，返回ImageMetadata对象，其中含有图片属性名对应的metadata对象，通过ImageMetadata中的metadata对
     *     象可以获取图片属性值。
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
     * 批量修改图片属性。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 调用该接口修改属性会改变属性字节长度，建议通过传入文件描述符来创建[image.createImageSource]{@link image.createImageSource}实例或通过传入的uri创建
     * > [image.createImageSource]{@link image.createImageSource}实例。
     * >
     * > - 该方法在内存中完成批量数据修改后会一次性写入文件，相比
     * > [modifyImageProperties]{@link image.ImageSource.modifyImageProperties(records: Record<PropertyKey, string|null>)}
     * > 更高效。
     * >
     * > - 支持修改JPEG、PNG和HEIF文件类型的图片属性，图片需要包含Exif信息。修改属性前，先通过supportedFormats属性查询设备是否支持HEIF格式的Exif读写。
     * >
     * > - 从API版本26.0.0开始，支持修改JPEG、PNG、GIF格式图片的XMP元数据。XMP元数据的操作方法可以参考
     * > [XMPMetadata](docroot://reference/apis-image-kit/arkts-apis-image-XMPMetadata.md)。
     * >
     * > - 调用writeImageMetadata接口修改Exif字段时，必须确保对应的图片文件有写权限，否则会导致字段修改不成功。
     *
     * @param { ImageMetadata } imageMetadata - 图像的元数据集。若imageMetadata中的属性值都为空，则清空所有Exif元数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata.
     * @throws { BusinessError } 7700204 - Invalid parameter. Possible causes: The imageSource object is released.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    writeImageMetadata(imageMetadata: ImageMetadata): Promise<void>;

    /**
     * 判断Jpeg图片是否是渐进式图片。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示Jpeg图片是渐进式；返回false表示Jpeg图片不是渐进式。
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
     * 读取图像源的元数据，使用metadataTypes指定元数据类型。若未指定metadataTypes，则返回所有支持的元数据。使用Promise异步回调。
     * 
     * 该接口仅支持JPEG、PNG、HEIF、WebP、DNG、GIF、TIFF、HEIFS、JFIF和AVIS（不同硬件设备支持情况不同）文件。
     * 
     * > **说明：**
     * >
     * > - EXIF_METADATA元数据类型适用于JPEG、PNG、HEIF、WEBP和DNG格式图片。
     * >
     * > - HEIFS_METADATA元数据类型适用于HEIFS格式图片。
     * >
     * > - 当传入的MetadataType与图片格式无法匹配时，返回错误码7700102。
     * >
     * > - 从API version 24开始，支持读取DNG元数据。要查询的属性的具体信息请参考[DngPropertyKey]{@link image.DngPropertyKey}。
     * >
     * > - 从API version 24开始，支持读取HEIFS元数据。要查询的属性的具体信息请参考[HeifsPropertyKey]{@link image.HeifsPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取PNG元数据。要查询的属性的具体信息请参考[PngPropertyKey]{@link image.PngPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取JFIF元数据。要查询的属性的具体信息请参考[JfifPropertyKey]{@link image.JfifPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取TIFF元数据。要查询的属性的具体信息请参考[TiffPropertyKey]{@link image.TiffPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取GIF元数据。要查询的属性的具体信息请参考[GifPropertyKey]{@link image.GifPropertyKey}。
     * >
     * > - 从API版本26.0.0开始，支持读取JPEG、PNG、GIF、DNG、TIFF格式图片的XMP元数据。XMP元数据的操作方法可以参考
     * > [XMPMetadata](docroot://reference/apis-image-kit/arkts-apis-image-XMPMetadata.md)。
     * >
     * > - 从API版本26.0.0开始，支持读取AVIS元数据。要查询的属性的具体信息请参考[AvisPropertyKey]{@link image.AvisPropertyKey}。
     *
     * @param { MetadataType[] } [metadataTypes] - 元数据类型的数组。当该参数缺省时，获取全部支持的元数据。
     * @param { int }[index] - 图片帧序号，表示获取指定帧的元数据。默认值为0。
     *     <br>- 单帧图片场景中index取值只能为0。
     *     <br>- 动图等多帧图片场景中index的取值范围为[0, 帧数-1]。
     * @returns { Promise<ImageMetadata> } Promise对象。返回的ImageMetadata对象中含有对应的metadata对象，通过ImageMetadata中的metadata对象可以获取图
     *     片属性值。
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @throws { BusinessError } 7700202 - Unsupported metadata.
     * @throws { BusinessError } 7700204 - Invalid parameter. Possible causes: 1.The index is negative.
     *     2. The index is greater than or equal to the number of frames in the image.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    readImageMetadataByType(metadataTypes?: MetadataType[], index?: int): Promise<ImageMetadata>;

    /**
     * 获取图片原始数据。使用Promise异步回调。目前仅支持获取DNG图片类型的原始数据。
     *
     * @returns { Promise<ImageRawData> } Promise对象，返回ImageRawData对象，其中含有数据缓冲区和像素位数。
     * @throws { BusinessError } 7700101 - Bad source.
     * @throws { BusinessError } 7700102 - Unsupported MIME type.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    createImageRawData(): Promise<ImageRawData>;

    /**
     * 通过图片解码参数创建缩略图PixelMap对象。使用Promise异步回调。
     * 
     * 当前支持对JPEG和HEIF格式的图片创建缩略图PixelMap对象。
     * 
     * 优先解码图片文件中包含的缩略图。若图片文件中没有缩略图，则对原图进行解码。
     * 
     * > **说明：**
     * >
     * > - 不支持在同一个ImageSource实例上并发调用。
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @param { DecodingOptionsForThumbnail } [options] - 解码参数，控制是否生成缩略图以及生成缩略图的目标尺寸。
     *     <br>默认表现：
     *     <br>- 当图像有缩略图时，解码原始缩略图，返回的PixelMap对象的宽和高与原缩略图保持一致。
     *     <br>- 当原图文件无缩略图时，对原图进行解码后，根据解码参数options下采样生成缩略图，生成后的缩略图PixelMap对象宽和高都限制在512像素以内。
     * @returns { Promise<PixelMap | undefined> } Promise对象，返回PixelMap。
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
     * 通过图片解码参数同步创建缩略图。返回创建结果对应的[PixelMap]{@link image.PixelMap}对象。
     * 
     * 当前支持对JPEG和HEIF格式的图片创建缩略图PixelMap对象。
     * 
     * 优先解码图片文件中包含的缩略图。若图片文件中没有缩略图，则对原图进行解码。
     * 
     * > **说明：**
     * >
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release()}方法，及时释放内存。
     * >
     * > - 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     * >
     * > - 该方法为同步方法，调用时会阻塞当前线程，不建议在主线程中调用，否则可能导致应用卡顿、掉帧或响应延迟。具体场景参考
     * > [耗时任务并发场景简介](docroot://arkts-utils/time-consuming-task-overview.md)。
     *
     * @param { DecodingOptionsForThumbnail } [options] - 解码参数，控制是否生成缩略图以及生成缩略图的目标尺寸。
     *     <br>默认表现：
     *     <br>- 当图像有缩略图时，解码原始缩略图，返回的PixelMap对象的宽和高与原缩略图保持一致。
     *     <br>- 当原图文件无缩略图时，对原图进行解码后，根据解码参数options下采样生成缩略图，生成后的缩略图PixelMap对象宽和高都限制在512像素以内。
     * @returns { PixelMap | undefined } 用于同步返回创建结果。
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
   * 描述二值图像缓冲区内的信息及数据。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BinaryBufferInfo {
    /**
     * 图像尺寸，包含宽度和高度。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: Size;

    /**
     * 图像数据缓冲区，包含二值图像数据。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    data: ArrayBuffer;

    /**
     * 每行字节数。若未指定，将按(width + 7) / 8计算。该值应为整数。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bytesPerRow?: int;
  }

  /**
   * ImagePacker类，用于图片压缩和编码。
   * 
   * 在调用ImagePacker的方法前，需要先通过[image.createImagePacker]{@link image.createImagePacker}构建一个ImagePacker实例。
   * 
   * 编码期间，请避免修改或释放作为输入的ImageSource/PixelMap/Picture对象，以免出现crash或其他未定义行为。
   * 
   * 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用[release]{@link image.ImagePacker.release(callback: AsyncCallback<void>)}方法及时
   * 释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * 当前支持的格式有：JPEG、WebP、PNG、HEIC<sup>12+</sup>、GIF<sup>18+</sup>、从API版本26.0.0开始支持TIFF格式（不同硬件设备支持情况不同，可通过ImagePacker的
   * supportedFormats属性查看）。
   *
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface ImagePacker {
    /**
     * 图片压缩或重新编码。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > [packToData]{@link image.ImagePacker.packToData(source: ImageSource, options: PackingOption)}代替。
     *
     * @param { ImageSource } source - 编码的ImageSource。
     * @param { PackingOption } option - 设置编码参数。
     * @param { AsyncCallback<ArrayBuffer> } callback - 回调函数，当图片编码成功，err为undefined，data为获取到的压缩或编码数据；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: ImageSource, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * 图片压缩或重新编码。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > [packToData]{@link image.ImagePacker.packToData(source: ImageSource, options: PackingOption)}代替。
     *
     * @param { ImageSource } source - 编码的ImageSource。
     * @param { PackingOption } option - 设置编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回压缩或编码后的数据。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: ImageSource, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * 图片压缩或重新编码。使用Promise异步回调。
     *
     * @param { ImageSource } source - 编码的ImageSource。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回压缩或编码后的数据。
     * @throws { BusinessError } 401 - If the parameter is invalid.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 图片压缩或重新编码。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > [packToData]{@link image.ImagePacker.packToData(source: ImageSource, options: PackingOption)}代替。
     * > > **注意：**
     * >
     * > 接口如果返回"PixelMap mismatch"，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。
     *
     * @param { PixelMap } source - 编码的PixelMap资源。
     * @param { PackingOption } option - 设置编码参数。
     * @param { AsyncCallback<ArrayBuffer> } callback - 回调函数，当图片编码成功，err为undefined，data为获取到的压缩或编码数据；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: PixelMap, option: PackingOption, callback: AsyncCallback<ArrayBuffer>): void;

    /**
     * 图片压缩或重新编码。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > [packToData]{@link image.ImagePacker.packToData(source: ImageSource, options: PackingOption)}代替。
     * > > **注意：**
     * >
     * > 接口如果返回"PixelMap mismatch"，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。
     *
     * @param { PixelMap } source - 编码的PixelMap源。
     * @param { PackingOption } option - 设置编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回压缩或编码后的数据。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 13
     * @useinstead image.ImagePacker#packToData
     */
    packing(source: PixelMap, option: PackingOption): Promise<ArrayBuffer>;

    /**
     * 图片压缩或重新编码。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 接口如果返回401错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。
     *
     * @param { PixelMap } source - 编码的PixelMap源。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回压缩或编码后的数据。
     * @throws { BusinessError } 401 - If the parameter is invalid.
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 将多个PixelMap编码成GIF数据。使用Promise异步回调。
     *
     * @param { Array<PixelMap> } pixelmapSequence - 待编码的PixelMap序列。
     * @param { PackingOptionsForSequence } options - 动图编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回编码后的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types;3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Failed to encode image.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    packToDataFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, options: PackingOptionsForSequence): Promise<ArrayBuffer>;

    /**
     * 指定编码参数，将ImageSource直接编码进文件。使用callback异步回调。
     *
     * @param { ImageSource } source - 编码的ImageSource。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOption } options - 设置编码参数。
     * @param { AsyncCallback<void> } callback - 回调函数，当编码进文件成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 指定编码参数，将ImageSource直接编码进文件。使用Promise异步回调。
     *
     * @param { ImageSource } source - 编码的ImageSource。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 指定编码参数，将PixelMap直接编码进文件。使用callback异步回调。
     * 
     * > **注意：**
     * >
     * > 接口如果返回62980115错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。
     *
     * @param { PixelMap } source - 编码的PixelMap资源。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOption } options - 设置编码参数。
     * @param { AsyncCallback<void> } callback - 回调函数，当编码图片进文件成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 指定编码参数，将PixelMap直接编码进文件。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 接口如果返回62980115错误码，表明参数异常，可能是PixelMap对象被提前释放了。需要调用方排查，在该方法调用结束后再释放PixelMap对象。
     *
     * @param { PixelMap } source - 编码的PixelMap资源。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 62980096 - The operation failed. Possible cause: 1.Image upload exception.
     *     2. Decoding process exception. 3. Insufficient memory.
     * @throws { BusinessError } 62980101 - The image data is abnormal.
     * @throws { BusinessError } 62980106 - The image data is too large. This status code is thrown when an error occurs
     *     during the process of checking size.
     * @throws { BusinessError } 62980113 - Unknown image format.
     *     The image data provided is not in a recognized or supported format, or it may be corrupted.
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
     * 指定编码参数，将多个PixelMap编码成GIF文件。使用Promise异步回调。
     *
     * @param { Array<PixelMap> } pixelmapSequence - 待编码的PixelMap序列。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOptionsForSequence } options - 动图编码参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types;3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Failed to encode image.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 18 dynamic
     * @since 23 static
     */
    packToFileFromPixelmapSequence(pixelmapSequence: Array<PixelMap>, fd: int, options: PackingOptionsForSequence): Promise<void>;

     /**
     * 释放图片编码实例。使用callback异步回调。
     * 
     * 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，当释放图片编码实例成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放图片编码实例。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImagePacker实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 将图像压缩或重新编码。使用Promise异步回调。
     *
     * @param { Picture } picture - 编码的Picture对象。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回压缩或编码后的数据。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 13 dynamic
     * @since 23 static
     */
    packing(picture: Picture, options: PackingOption): Promise<ArrayBuffer>;

    /**
     * 指定编码参数，将Picture直接编码进文件。使用Promise异步回调。
     *
     * @param { Picture } picture - 编码的Picture资源。
     * @param { int } fd - 文件描述符。取值范围为[0，65535]。
     * @param { PackingOption } options - 设置编码参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 13 dynamic
     * @since 23 static
     */
    packToFile(picture: Picture, fd: int, options: PackingOption): Promise<void>;

    /**
     * 将二值图像数据编码到入参fd对应的TIFF文件。使用Promise异步回调。
     *
     * @param { BinaryBufferInfo } bufferInfo - 图像缓冲区信息。
     * @param { int } fd - 文件描述符ID。该值必须为正整数。
     * @param { PackingOptionsForTiff } [options] - TIFF图像编码选项。
     *     <br>未传入options时，默认的compression为4（CCITT G4）。
     *     <br>未传入options时，默认的orientation为1（TOP_LEFT），表示图像未旋转。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 7800202 - Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm
     *     mismatch.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packBinaryImageToTiffFile(bufferInfo: BinaryBufferInfo, fd: int, options?: PackingOptionsForTiff): Promise<void>;

    /**
     * 将二值图像数据编码为TIFF数据，以ArrayBuffer的形式返回。使用Promise异步回调。
     *
     * @param { BinaryBufferInfo } bufferInfo - 图像缓冲区信息。
     * @param { PackingOptionsForTiff } [options] - TIFF图像编码选项。
     *     <br>未传入options时，默认的compression为4（CCITT G4）。
     *     <br>未传入options时，默认的orientation为1（TOP_LEFT），表示图像未旋转。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回编码后的数据。
     * @throws { BusinessError } 7800202 - Invalid parameter. Possible causes: 1. Invalid FD; 2. Compression algorithm
     *     mismatch.
     * @throws { BusinessError } 7800301 - Encode failed.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    packBinaryImageToTiffData(bufferInfo: BinaryBufferInfo, options?: PackingOptionsForTiff): Promise<ArrayBuffer>;

    /**
     * 图片编码支持的格式，包括：JPEG、WebP、PNG、HEIC<sup>12+</sup>、GIF<sup>18+</sup>、从API版本26.0.0开始支持TIFF格式（不同硬件设备支持情况不同）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform [since 10]
     * @since 6 dynamic
     * @since 23 static
     */
    readonly supportedFormats: Array<string>;
  }

  /**
   * Image类，供ImageReceiver和ImageCreator使用，用于传输图片对象，其实际内容由生产者决定。如相机预览流提供的Image对象存储了YUV数据、相机拍照提供的Image对象存储了JPEG文件。
   * 
   * 调用[readNextImage]{@link image.ImageReceiver.readNextImage(callback: AsyncCallback<Image>)}和
   * [readLatestImage]{@link image.ImageReceiver.readLatestImage(callback: AsyncCallback<Image>)}接口时会返回Image实例。
   * 
   * Image的属性仅支持在创建时初始化，后续无法再修改，且其属性不对图片内容产生实际影响，请以图片生产者写入的属性为准，即以向[ImageReceiver]{@link image.ImageReceiver}发送图片数据的发送方实
   * 际写入的内容为准。
   * 
   * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用[release]{@link image.Image.release(callback: AsyncCallback<void>)}方法及时释放内存。释放时应确保该
   * 实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Image {
    /**
     * 要裁剪的图像区域。恒等于整个图像，不支持修改。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    clipRect: Region;

    /**
     * 图像大小。
     * 
     * 如果Image对象所存储的是相机预览流数据（YUV图像数据），那么获取到的size中的宽和高分别对应YUV图像的宽和高。
     * 
     * 如果Image对象所存储的是相机拍照流数据（JPEG图像数据），由于已是编码后的文件，size中的宽等于JPEG文件大小，高等于1。
     * 
     * Image对象所存储的数据是预览流还是拍照流，取决于应用将receiver中的surfaceId通过
     * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
     * 接口还是
     * [createPhotoOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPhotoOutput(profile: Profile, surfaceId: string)}
     * 接口传给相机。
     * 
     * 相机预览与拍照最佳实践请参考[双路预览(ArkTS)](docroot://media/camera/camera-dual-channel-preview.md)与
     * [拍照实践(ArkTS)](docroot://media/camera/camera-shooting-case.md)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly size: Size;

    /**
     * 图像格式，参考
     * [OH_NativeBuffer_Format](docroot://reference/apis-arkgraphics2d/capi-buffer-common-h.md#oh_nativebuffer_format)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: int;

    /**
     * 图像时间戳。时间戳以纳秒为单位，通常是单调递增的。时间戳的具体含义和基准取决于图像的生产者，在相机预览/拍照场景，生产者就是相机。来自不同生产者的图像的时间戳可能有不同的含义和基准，因此可能无法进行比较。如果要获取某张照片的生
     * 成时间，可以通过
     * [getImageProperty]{@link image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}接口读
     * 取EXIF时间戳信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readonly timestamp: long;

    /**
     * 图像色彩空间，色域枚举类型。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly colorSpace: colorSpaceManager.ColorSpace;

    /**
     * 根据图像的组件类型从图像中获取组件缓存。使用callback异步回调。
     *
     * @param { ComponentType } componentType - 图像的组件类型（目前仅支持ComponentType:JPEG，实际返回格式由生产者决定，如相机）。
     * @param { AsyncCallback<Component> } callback - 回调函数，当返回组件缓冲区成功，err为undefined，data为获取到的组件缓冲区；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getComponent(componentType: ComponentType, callback: AsyncCallback<Component>): void;

    /**
     * 根据图像的组件类型从图像中获取组件缓存。使用Promise异步回调。
     *
     * @param { ComponentType } componentType - 图像的组件类型（目前仅支持ComponentType:JPEG，实际返回格式由生产者决定，如相机）。
     * @returns { Promise<Component> } Promise对象，返回组件缓冲区。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getComponent(componentType: ComponentType): Promise<Component>;

    /**
     * 释放当前图像。使用callback异步回调。
     * 
     * 在接收另一个图像前必须先释放对应资源。
     * 
     * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，当图像释放成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放当前图像。使用Promise异步回调。
     * 
     * 在接收另一个图像前必须先释放对应资源。
     * 
     * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 从图像中获取ImageBufferData。
     * 
     * > **注意：**
     * >
     * > ImageBufferData中的byteBuffer是对内部缓存的浅拷贝，当Image的生命周期结束时，便不能对byteBuffer做任何操作，否则会导致未定义行为。
     *
     * @returns { ImageBufferData | null } 获取封装图像数据缓冲区的结构体，获取不到时返回空值。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getBufferData(): ImageBufferData | null;

    /**
     * 根据HDR元数据的类型从图像中获取HDR元数据。
     *
     * @param { HdrMetadataKey } key - HDR元数据的关键字，可用于查询对应值。
     * @returns { HdrMetadataValue | null } 返回关键字对应的HDR元数据的值。如果图像没有HDR元数据，返回空值。
     * @throws { BusinessError } 7600206 - Invalid parameter.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getMetadata(key: HdrMetadataKey): HdrMetadataValue | null;
  }

  /**
   * ImageReceiver类，用于获取组件surface id、接收最新的图片和读取下一张图片以及释放ImageReceiver实例。ImageReceiver作为图片的接收方和消费者，其参数属性实际上不会对接收到的图片产生影响。
   * 图片属性的配置应在发送方和生产者上进行，如相机预览流
   * [createPreviewOutput]{@link @ohos.multimedia.camera:camera.CameraManager.createPreviewOutput(profile: Profile, surfaceId: string)}
   * 。
   * 
   * 在调用以下方法前需要先通过[image.createImageReceiver]{@link image.createImageReceiver}创建ImageReceiver实例。
   * 
   * 从API version 23开始，更推荐使用[image.createImageReceiver]{@link image.createImageReceiver}，通过传入
   * [ImageReceiverOptions]{@link image.ImageReceiverOptions}创建ImageReceiver实例。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link image.ImageReceiver.release(callback: AsyncCallback<void>)}
   * 方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 9 dynamic
   * @since 23 static
   */
  interface ImageReceiver {
    /**
     * 图片大小。该参数不会影响接收到的图片大小，实际返回大小由生产者决定，如相机。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly size: Size;

    /**
     * 同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capacity: int;

    /**
     * 图像格式，取值为[ImageFormat]{@link image.ImageFormat}常量（目前仅支持 ImageFormat:JPEG，实际返回格式由生产者决定，如相机）。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: ImageFormat;

    /**
     * 用于获取一个surface id供Camera或其他组件使用。使用callback异步回调。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，当获取surface id成功，err为undefined，data为获取到的surface id；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    getReceivingSurfaceId(callback: AsyncCallback<string>): void;

    /**
     * 用于获取一个surface id供Camera或其他组件使用。使用Promise异步回调。
     *
     * @returns { Promise<string> } Promise对象，返回surface id。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * 从ImageReceiver读取最新的图片。使用callback异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link image.ImageReceiver.on(type: 'imageArrival', callback: AsyncCallback<void>)}回调触发后调用，才能正常的接收到数
     * > 据。且此接口返回的[Image]{@link image.Image}对象使用完毕后需要调用
     * > [release]{@link image.Image.release(callback: AsyncCallback<void>)}方法释放，释放后才可以继续接收新的数据。
     *
     * @param { AsyncCallback<Image> } callback - 回调函数，当读取最新图片成功，err为undefined，data为获取到的最新图片；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readLatestImage(callback: AsyncCallback<Image>): void;

    /**
     * 从ImageReceiver读取最新的图片。使用Promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link image.ImageReceiver.on(type: 'imageArrival', callback: AsyncCallback<void>)}回调触发后调用，才能正常的接收到数
     * > 据。且此接口返回的[Image]{@link image.Image}对象使用完毕后需要调用
     * > [release]{@link image.Image.release(callback: AsyncCallback<void>)}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } Promise对象，返回最新图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readLatestImage(): Promise<Image>;

    /**
     * 从ImageReceiver读取下一张图片。使用callback异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link image.ImageReceiver.on(type: 'imageArrival', callback: AsyncCallback<void>)}回调触发后调用，才能正常的接收到数
     * > 据。且此接口返回的[Image]{@link image.Image}对象使用完毕后需要调用
     * > [release]{@link image.Image.release(callback: AsyncCallback<void>)}方法释放，释放后才可以继续接收新的数据。
     *
     * @param { AsyncCallback<Image> } callback - 回调函数，当获取下一张图片成功，err为undefined，data为获取到的下一张图片；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readNextImage(callback: AsyncCallback<Image>): void;

    /**
     * 从ImageReceiver读取下一张图片。使用Promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link image.ImageReceiver.on(type: 'imageArrival', callback: AsyncCallback<void>)}回调触发后调用，才能正常的接收到数
     * > 据。且此接口返回的[Image]{@link image.Image}对象使用完毕后需要调用
     * > [release]{@link image.Image.release(callback: AsyncCallback<void>)}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } Promise对象，返回下一张图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    readNextImage(): Promise<Image>;

    /**
     * 接收图片时注册回调。使用callback异步回调。
     *
     * @param { 'imageArrival' } type - 注册事件的类型，固定为'imageArrival'，接收图片到达时触发。
     * @param { AsyncCallback<void> } callback - 回调函数，当注册事件触发成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * Subscribe callback when receiving an image.
     *
     * @param { AsyncCallback<void> } callback Callback used to return image.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 23 static
     */
    onImageArrival(callback: AsyncCallback<void>): void;

    /**
     * 释放buffer时移除注册回调。使用callback异步回调。
     *
     * @param { 'imageArrival' } type - 注册事件的类型，固定为'imageArrival'，释放buffer时触发。
     * @param { AsyncCallback<void> } callback - 移除的回调函数。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 13 dynamic
     */
    off(type: 'imageArrival', callback?: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer.
     *
     * @param { AsyncCallback<void> } [callback] - Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 23 static
     */
    offImageArrival(callback?: AsyncCallback<void>): void;

    /**
     * 释放ImageReceiver实例。使用callback异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，当释放ImageReceiver实例成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放ImageReceiver实例。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * ImageCreator类，作为图片的生产者，用于将图片写入到Surface中。
   * 
   * 在调用以下方法前需要先通过[image.createImageCreator]{@link image.createImageCreator}创建ImageCreator实例，ImageCreator不支持多线程。
   * 
   * 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用[release]{@link image.ImageCreator.release(callback: AsyncCallback<void>)}方法
   * 及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageCreator
   * @since 9 dynamic
   * @since 23 static
   */
  interface ImageCreator {
    /**
     * 同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capacity: int;

    /**
     * 图像格式。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    readonly format: ImageFormat;

    /**
     * 从空闲队列中获取buffer图片，用于绘制UI内容。使用callback异步回调。
     *
     * @param { AsyncCallback<Image> } callback - 回调函数，当获取最新图片成功，err为undefined，data为获取到的最新图片；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    dequeueImage(callback: AsyncCallback<Image>): void;

    /**
     * 从空闲队列中获取buffer图片，用于绘制UI内容。使用Promise异步回调。
     *
     * @returns { Promise<Image> } Promise对象，返回最新图片。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    dequeueImage(): Promise<Image>;

    /**
     * 将绘制好的图片放入队列。使用callback异步回调。
     *
     * @param { Image } image - 绘制好的buffer图像。
     * @param { AsyncCallback<void> } callback - 回调函数，当将图片放入队列成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    queueImage(image: Image, callback: AsyncCallback<void>): void;

    /**
     * 将绘制好的图片放入队列。使用Promise异步回调。
     *
     * @param { Image } image - 绘制好的buffer图像。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    queueImage(image: Image): Promise<void>;

    /**
     * 监听imageRelease事件。使用callback异步回调。
     *
     * @param { 'imageRelease' } type - 监听事件类型，如'imageRelease'。
     * @param { AsyncCallback<void> } callback - 回调函数，当监听事件触发成功，err为undefined，否则为错误对象。
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
     * 释放buffer时，移除注册的回调函数。使用callback异步回调。
     *
     * @param { 'imageRelease' } type - 监听事件类型，如'imageRelease'。
     * @param { AsyncCallback<void> } callback - 回调函数。当移除注册成功时，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 13 dynamic
     */
    off(type: 'imageRelease', callback?: AsyncCallback<void>): void;

    /**
     * Remove callback subscriptions when releasing buffer
     *
     * @param { AsyncCallback<void> } [callback] - Callback to be removed.
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 23 static
     */
    offImageRelease(callback?: AsyncCallback<void>): void;

    /**
     * 释放当前图像。使用callback异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，当图像释放成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放当前图像。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageCreator实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageCreator
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 获取支持解码的图片格式，图片格式以mime type表示。
   *
   * @returns { string[] } 支持解码的图片格式（mime type）列表。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @since 20 dynamic
   * @since 23 static
   */
  function getImageSourceSupportedFormats(): string[];

  /**
   * 获取支持编码的图片格式，图片格式以mime type表示。
   *
   * @returns { string[] } 支持编码的图片格式（mime type）列表。
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @since 20 dynamic
   * @since 23 static
   */
  function getImagePackerSupportedFormats(): string[];
}

export default image;