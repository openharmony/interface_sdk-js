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
 * @arkts 1.2
 */

import { AsyncCallback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type resourceManager from './@ohos.resourceManager';
import type rpc from './@ohos.rpc';

/**
 * This module provides the capability of image codec and access
 * @namespace image
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare namespace image {
  /**
   * Enumerates pixel map formats.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  enum PixelMapFormat {
    /**
     * Indicates an unknown format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    UNKNOWN = 0,

    /**
     * Indicates that each pixel is stored on 16 bits. Only the R, G, and B components are encoded
     * from the higher-order to the lower-order bits: red is stored with 5 bits of precision,
     * green is stored with 6 bits of precision, and blue is stored with 5 bits of precision.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    RGB_565 = 2,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    RGBA_8888 = 3,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    BGRA_8888 = 4,

    /**
     * Indicates that each pixel is stored on 24 bits. Each pixel contains 3 components：R(8bits), G(8bits), B(8bits)
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    RGB_888 = 5,

    /**
     * Indicates that each pixel is stored on 8 bits. Each pixel contains 1 component：ALPHA(8bits)
     * and is stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    ALPHA_8 = 6,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：B(8bits), G(8bits), R(8bits), A(8bits)
     * and are stored from the higher-order to the lower-order bits in F16.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    RGBA_F16 = 7,

    /**
     * Indicates that the storage order is to store Y first and then V U alternately each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NV21 = 8,

    /**
     * Indicates that the storage order is to store Y first and then U V alternately each occupies 8 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    NV12 = 9,

    /**
     * Indicates that each pixel is stored on 32 bits. Each pixel contains 4 components：
     * R(10bits), G(10bits), B(10bits), A(2bits) and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    RGBA_1010102 = 10,

    /**
     * Indicates that the storage order is to store Y first and then U V alternately each occupies 10 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    YCBCR_P010 = 11,

    /**
     * Indicates that the storage order is to store Y first and then V U alternately each occupies 10 bits
     * and are stored from the higher-order to the lower-order bits.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    YCRCB_P010 = 12,
  }

  /**
   * Enumerates image resolution quality.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 20
   */
  enum ResolutionQuality {
    /**
     * Low quality images, short decoding time.
     * 
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 20
     */
    LOW = 1,

    /**
     * Medium quality images, moderate decoding time.
     * 
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 20
     */
    MEDIUM = 2,

    /**
     * High quality images, longer decoding time.
     * 
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 20
     */
    HIGH = 3
  }

  /**
   * Describes the size of an image.
   *
   * @typedef Size
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface Size {
    /**
     * Height
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    height: int;

    /**
     * Width
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    width: int;
  }

  /**
   * Enumerates exchangeable image file format (Exif) information types of an image.
   *
   * @enum { string }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 20
   */
  enum PropertyKey {
    /**
     * Number of bits in each pixel of an image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    BITS_PER_SAMPLE = 'BitsPerSample',

    /**
     * Image rotation mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ORIENTATION = 'Orientation',

    /**
     * Image length.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    IMAGE_LENGTH = 'ImageLength',

    /**
     * Image width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    IMAGE_WIDTH = 'ImageWidth',

    /**
     * GPS latitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_LATITUDE = 'GPSLatitude',

    /**
     * GPS longitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_LONGITUDE = 'GPSLongitude',

    /**
     * GPS latitude reference. For example, N indicates north latitude and S indicates south latitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_LATITUDE_REF = 'GPSLatitudeRef',

    /**
     * GPS longitude reference. For example, E indicates east longitude and W indicates west longitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_LONGITUDE_REF = 'GPSLongitudeRef',

    /**
     * Shooting time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DATE_TIME_ORIGINAL = 'DateTimeOriginal',

    /**
     * Exposure time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    EXPOSURE_TIME = 'ExposureTime',

    /**
     * Scene type
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_TYPE = 'SceneType',

    /**
     * ISO speedratings
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ISO_SPEED_RATINGS = 'ISOSpeedRatings',

    /**
     * Aperture value
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    F_NUMBER = 'FNumber',

    /**
     * Date time
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    DATE_TIME = 'DateTime',

    /**
     * GPS time stamp
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    GPS_TIME_STAMP = 'GPSTimeStamp',
 
    /**
     * GPS date stamp
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    GPS_DATE_STAMP = 'GPSDateStamp',
 
    /**
     * Image description
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    IMAGE_DESCRIPTION = 'ImageDescription',
 
    /**
     * Make
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    MAKE = 'Make',
 
    /**
     * Model
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    MODEL = 'Model',
 
    /**
     * Photo mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    PHOTO_MODE = 'PhotoMode',
 
    /**
     * Sensitivity type
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    SENSITIVITY_TYPE = 'SensitivityType',
 
    /**
     * Standard output sensitivity
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    STANDARD_OUTPUT_SENSITIVITY = 'StandardOutputSensitivity',
 
    /**
     * Recommended exposure index
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    RECOMMENDED_EXPOSURE_INDEX = 'RecommendedExposureIndex',
 
    /**
     * ISO speed
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    ISO_SPEED = 'ISOSpeedRatings',
 
    /**
     * Aperture value
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    APERTURE_VALUE = 'ApertureValue',
 
    /**
     * Exposure bias value
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    EXPOSURE_BIAS_VALUE = 'ExposureBiasValue',
 
    /**
     * Metering mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    METERING_MODE = 'MeteringMode',
 
    /**
     * Light source
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    LIGHT_SOURCE = 'LightSource',
 
    /**
     * Flash
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    FLASH = 'Flash',
 
    /**
     * Focal length
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    FOCAL_LENGTH = 'FocalLength',
 
    /**
     * User comment
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    USER_COMMENT = 'UserComment',
 
    /**
     * Pixel x dimension
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    PIXEL_X_DIMENSION = 'PixelXDimension',
 
    /**
     * Pixel y dimension
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    PIXEL_Y_DIMENSION = 'PixelYDimension',
 
    /**
     * White balance
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    WHITE_BALANCE = 'WhiteBalance',
 
    /**
     * Focal length in 35mm film
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    FOCAL_LENGTH_IN_35_MM_FILM = 'FocalLengthIn35mmFilm',
 
    /**
     * Capture mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    CAPTURE_MODE = 'HwMnoteCaptureMode',
 
    /**
     * Physical aperture
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    PHYSICAL_APERTURE = 'HwMnotePhysicalAperture',

    /**
     * Roll Angle
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ROLL_ANGLE = 'HwMnoteRollAngle',

    /**
     * Pitch Angle
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    PITCH_ANGLE = 'HwMnotePitchAngle',

    /**
     * Capture Scene: Food
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_FOOD_CONF = 'HwMnoteSceneFoodConf',

    /**
     * Capture Scene: Stage
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_STAGE_CONF = 'HwMnoteSceneStageConf',

    /**
     * Capture Scene: Blue Sky
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_BLUE_SKY_CONF = 'HwMnoteSceneBlueSkyConf',

    /**
     * Capture Scene: Green Plant
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_GREEN_PLANT_CONF = 'HwMnoteSceneGreenPlantConf',

    /**
     * Capture Scene: Beach
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_BEACH_CONF = 'HwMnoteSceneBeachConf',

    /**
     * Capture Scene: Snow
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_SNOW_CONF = 'HwMnoteSceneSnowConf',

    /**
     * Capture Scene: Sunset
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_SUNSET_CONF = 'HwMnoteSceneSunsetConf',

    /**
     * Capture Scene: Flowers
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_FLOWERS_CONF = 'HwMnoteSceneFlowersConf',

    /**
     * Capture Scene: Night
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_NIGHT_CONF = 'HwMnoteSceneNightConf',

    /**
     * Capture Scene: Text
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_TEXT_CONF = 'HwMnoteSceneTextConf',

    /**
     * Face Count
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_COUNT = 'HwMnoteFaceCount',

    /**
     * Focus Mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FOCUS_MODE = 'HwMnoteFocusMode',
  
    /**
     * The scheme used for image compression.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COMPRESSION = 'Compression',

    /**
     * Pixel composition, such as RGB or YCbCr.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    PHOTOMETRIC_INTERPRETATION = 'PhotometricInterpretation',

    /**
     * For each strip, the byte offset of that strip.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    STRIP_OFFSETS = 'StripOffsets',

    /**
     * The number of components per pixel.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SAMPLES_PER_PIXEL = 'SamplesPerPixel',

    /**
     * The number of rows per strip of image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ROWS_PER_STRIP = 'RowsPerStrip',

    /**
     * The total number of bytes in each strip of image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    STRIP_BYTE_COUNTS = 'StripByteCounts',

    /**
     * The image resolution in the width direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    X_RESOLUTION = 'XResolution',

    /**
     * The image resolution in the height direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    Y_RESOLUTION = 'YResolution',

    /**
     * Indicates whether pixel components are recorded in a chunky or planar format.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    PLANAR_CONFIGURATION = 'PlanarConfiguration',

    /**
     * The unit used to measure XResolution and YResolution.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    RESOLUTION_UNIT = 'ResolutionUnit',

    /**
     * The transfer function for the image, typically used for color correction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    TRANSFER_FUNCTION = 'TransferFunction',

    /**
     * The name and version of the software used to generate the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SOFTWARE = 'Software',

    /**
     * The name of the person who created the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ARTIST = 'Artist',

    /**
     * The chromaticity of the white point of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    WHITE_POINT = 'WhitePoint',

    /**
     * The chromaticity of the primary colors of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    PRIMARY_CHROMATICITIES = 'PrimaryChromaticities',

    /**
     * The matrix coefficients for transformation from RGB to YCbCr image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    YCBCR_COEFFICIENTS = 'YCbCrCoefficients',

    /**
     * The sampling ratio of chrominance components to the luminance component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    YCBCR_SUB_SAMPLING = 'YCbCrSubSampling',

    /**
     * The position of chrominance components in relation to the luminance component.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    YCBCR_POSITIONING = 'YCbCrPositioning',

    /**
     * The reference black point value and reference white point value.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    REFERENCE_BLACK_WHITE = 'ReferenceBlackWhite',

    /**
     * Copyright information for the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COPYRIGHT = 'Copyright',

    /**
     * The offset to the start byte (SOI) of JPEG compressed thumbnail data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    JPEG_INTERCHANGE_FORMAT = 'JPEGInterchangeFormat',

    /**
     * The number of bytes of JPEG compressed thumbnail data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    JPEG_INTERCHANGE_FORMAT_LENGTH = 'JPEGInterchangeFormatLength',

    /**
     * The class of the program used by the camera to set exposure when the picture is taken.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    EXPOSURE_PROGRAM = 'ExposureProgram',

    /**
     * Indicates the spectral sensitivity of each channel of the camera used.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SPECTRAL_SENSITIVITY = 'SpectralSensitivity',

    /**
     * Indicates the Opto-Electric Conversion Function (OECF) specified in ISO 14524.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    OECF = 'OECF',

    /**
     * The version of the Exif standard supported.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    EXIF_VERSION = 'ExifVersion',

    /**
     * The date and time when the image was stored as digital data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DATE_TIME_DIGITIZED = 'DateTimeDigitized',

    /**
     * Information specific to compressed data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COMPONENTS_CONFIGURATION = 'ComponentsConfiguration',

    /**
     * The shutter speed, expressed as an APEX (Additive System of Photographic Exposure) value.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SHUTTER_SPEED = 'ShutterSpeedValue',

    /**
     * The brightness value of the image, in APEX units.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    BRIGHTNESS_VALUE = 'BrightnessValue',

    /**
     * The smallest F number of lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    MAX_APERTURE_VALUE = 'MaxApertureValue',

    /**
     * The distance to the subject, measured in meters.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBJECT_DISTANCE = 'SubjectDistance',

    /**
     * This tag indicate the location and area of the main subject in the overall scene.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBJECT_AREA = 'SubjectArea',

    /**
     * A tag for manufacturers of Exif/DCF writers to record any desired information.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    MAKER_NOTE = 'MakerNote',

    /**
     * A tag for record fractions of seconds for the DateTime tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBSEC_TIME = 'SubsecTime',

    /**
     * A tag used to record fractions of seconds for the DateTimeOriginal tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBSEC_TIME_ORIGINAL = 'SubsecTimeOriginal',

    /**
     * A tag used to record fractions of seconds for the DateTimeDigitized tag.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBSEC_TIME_DIGITIZED = 'SubsecTimeDigitized',

    /**
     * This tag denotes the Flashpix format version supported by an FPXR file, enhancing device compatibility.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FLASHPIX_VERSION = 'FlashpixVersion',

    /**
     * The color space information tag, often recorded as the color space specifier.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COLOR_SPACE = 'ColorSpace',

    /**
     * The name of an audio file related to the image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    RELATED_SOUND_FILE = 'RelatedSoundFile',

    /**
     * Strobe energy at image capture, in BCPS.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FLASH_ENERGY = 'FlashEnergy',

    /**
     * Camera or input device spatial frequency table.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SPATIAL_FREQUENCY_RESPONSE = 'SpatialFrequencyResponse',

    /**
     * Pixels per FocalPlaneResolutionUnit in the image width.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FOCAL_PLANE_X_RESOLUTION = 'FocalPlaneXResolution',

    /**
     * Pixels per FocalPlaneResolutionUnit in the image height.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FOCAL_PLANE_Y_RESOLUTION = 'FocalPlaneYResolution',

    /**
     * Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FOCAL_PLANE_RESOLUTION_UNIT = 'FocalPlaneResolutionUnit',

    /**
     * Location of the main subject, relative to the left edge.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBJECT_LOCATION = 'SubjectLocation',

    /**
     * Selected exposure index at capture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    EXPOSURE_INDEX = 'ExposureIndex',

    /**
     * Image sensor type on the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SENSING_METHOD = 'SensingMethod',

    /**
     * Indicates the image source.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FILE_SOURCE = 'FileSource',

    /**
     * Color filter array (CFA) geometric pattern of the image sensor.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    CFA_PATTERN = 'CFAPattern',

    /**
     * Indicates special processing on image data.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    CUSTOM_RENDERED = 'CustomRendered',

    /**
     * Exposure mode set when the image was shot.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    EXPOSURE_MODE = 'ExposureMode',

    /**
     * Digital zoom ratio at the time of capture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DIGITAL_ZOOM_RATIO = 'DigitalZoomRatio',

    /**
     * Type of scene captured.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_CAPTURE_TYPE = 'SceneCaptureType',

    /**
     * Degree of overall image gain adjustment.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GAIN_CONTROL = 'GainControl',

    /**
     * Direction of contrast processing applied by the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    CONTRAST = 'Contrast',

    /**
     * Direction of saturation processing applied by the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SATURATION = 'Saturation',

    /**
     * The direction of sharpness processing applied by the camera.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SHARPNESS = 'Sharpness',

    /**
     * Information on picture-taking conditions for a specific camera model.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DEVICE_SETTING_DESCRIPTION = 'DeviceSettingDescription',

    /**
     * Indicates the distance range to the subject.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBJECT_DISTANCE_RANGE = 'SubjectDistanceRange',

    /**
     * An identifier uniquely assigned to each image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    IMAGE_UNIQUE_ID = 'ImageUniqueID',

    /**
     * The version of the GPSInfoIFD.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_VERSION_ID = 'GPSVersionID',

    /**
     * Reference altitude used for GPS altitude.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_ALTITUDE_REF = 'GPSAltitudeRef',

    /**
     * The altitude based on the reference in GPSAltitudeRef.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_ALTITUDE = 'GPSAltitude',

    /**
     * The GPS satellites used for measurements.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_SATELLITES = 'GPSSatellites',

    /**
     * The status of the GPS receiver when the image is recorded.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_STATUS = 'GPSStatus',

    /**
     * The GPS measurement mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_MEASURE_MODE = 'GPSMeasureMode',

    /**
     * The GPS DOP (data degree of precision).
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DOP = 'GPSDOP',

    /**
     * The unit used to express the GPS receiver speed of movement.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_SPEED_REF = 'GPSSpeedRef',

    /**
     * The speed of GPS receiver movement.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_SPEED = 'GPSSpeed',

    /**
     * The reference for giving the direction of GPS receiver movement.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_TRACK_REF = 'GPSTrackRef',

    /**
     * The direction of GPS receiver movement.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_TRACK = 'GPSTrack',

    /**
     * The reference for the image's direction.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_IMG_DIRECTION_REF = 'GPSImgDirectionRef',

    /**
     * The direction of the image when captured.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_IMG_DIRECTION = 'GPSImgDirection',

    /**
     * Geodetic survey data used by the GPS receiver.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_MAP_DATUM = 'GPSMapDatum',

    /**
     * Indicates the latitude reference of the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_LATITUDE_REF = 'GPSDestLatitudeRef',

    /**
     * The latitude of the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_LATITUDE = 'GPSDestLatitude',

    /**
     * Indicates the longitude reference of the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_LONGITUDE_REF = 'GPSDestLongitudeRef',

    /**
     * The longitude of the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_LONGITUDE = 'GPSDestLongitude',

    /**
     * The reference for the bearing to the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_BEARING_REF = 'GPSDestBearingRef',

    /**
     * The bearing to the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_BEARING = 'GPSDestBearing',

    /**
     * The measurement unit for the distance to the target point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_DISTANCE_REF = 'GPSDestDistanceRef',

    /**
     * The distance to the destination point.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DEST_DISTANCE = 'GPSDestDistance',

    /**
     * A character string recording the name of the method used for location finding.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_PROCESSING_METHOD = 'GPSProcessingMethod',

    /**
     * A character string recording the name of the GPS area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_AREA_INFORMATION = 'GPSAreaInformation',

    /**
     * This field denotes if differential correction was applied to GPS data, crucial for precise location accuracy.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_DIFFERENTIAL = 'GPSDifferential',

    /**
     * The serial number of the camera body.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    BODY_SERIAL_NUMBER = 'BodySerialNumber',

    /**
     * The name of the camera owner.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    CAMERA_OWNER_NAME = 'CameraOwnerName',

    /**
     * Indicates whether the image is a composite image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COMPOSITE_IMAGE = 'CompositeImage',

    /**
     * The compression mode used for a compressed image, in unit bits per pixel.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    COMPRESSED_BITS_PER_PIXEL = 'CompressedBitsPerPixel',

    /**
     * The DNGVersion tag encodes the four-tier version number for DNG specification compliance.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DNG_VERSION = 'DNGVersion',

    /**
     * DefaultCropSize specifies the final image size in raw coordinates, accounting for extra edge pixels.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    DEFAULT_CROP_SIZE = 'DefaultCropSize',

    /**
     * Indicates the value of coefficient gamma.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GAMMA = 'Gamma',

    /**
     * The tag indicate the ISO speed latitude yyy value of the camera or input device that is defined in ISO 12232.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ISO_SPEED_LATITUDE_YYY = 'ISOSpeedLatitudeyyy',

    /**
     * The tag indicate the ISO speed latitude zzz value of the camera or input device that is defined in ISO 12232.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    ISO_SPEED_LATITUDE_ZZZ = 'ISOSpeedLatitudezzz',

    /**
     * The manufacturer of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    LENS_MAKE = 'LensMake',

    /**
     * The model name of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    LENS_MODEL = 'LensModel',

    /**
     * The serial number of the lens.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    LENS_SERIAL_NUMBER = 'LensSerialNumber',

    /**
     * Specifications of the lens used.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    LENS_SPECIFICATION = 'LensSpecification',

    /**
     * This tag provides a broad description of the data type in this subfile.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    NEW_SUBFILE_TYPE = 'NewSubfileType',

    /**
     * This tag records the UTC offset for the DateTime tag, ensuring accurate timestamps regardless of location.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    OFFSET_TIME = 'OffsetTime',

    /**
     * This tag records the UTC offset when the image was digitized, aiding in accurate timestamp adjustment.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    OFFSET_TIME_DIGITIZED = 'OffsetTimeDigitized',

    /**
     * This tag records the UTC offset when the original image was created, crucial for time-sensitive applications.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    OFFSET_TIME_ORIGINAL = 'OffsetTimeOriginal',

    /**
     * Exposure times of source images for a composite image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SOURCE_EXPOSURE_TIMES_OF_COMPOSITE_IMAGE = 'SourceExposureTimesOfCompositeImage',

    /**
     * The number of source images used for a composite image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SOURCE_IMAGE_NUMBER_OF_COMPOSITE_IMAGE = 'SourceImageNumberOfCompositeImage',

    /**
     * This deprecated tag indicates the data type in this subfile. Use NewSubfileType instead.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SUBFILE_TYPE = 'SubfileType',

    /**
     * This tag indicates horizontal positioning errors in meters.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GPS_H_POSITIONING_ERROR = 'GPSHPositioningError',

    /**
     * This tag indicates the sensitivity of the camera or input device when the image was shot.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    PHOTOGRAPHIC_SENSITIVITY = 'PhotographicSensitivity',

    /**
     * Burst Number
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    BURST_NUMBER = 'HwMnoteBurstNumber',

    /**
     * Face Conf
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_CONF = 'HwMnoteFaceConf',

    /**
     * Face Leye Center
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_LEYE_CENTER = 'HwMnoteFaceLeyeCenter',

    /**
     * Face Mouth Center
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_MOUTH_CENTER = 'HwMnoteFaceMouthCenter',

    /**
     * Face Pointer
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_POINTER = 'HwMnoteFacePointer',

    /**
     * Face Rect
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_RECT = 'HwMnoteFaceRect',

    /**
     * Face Reye Center
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_REYE_CENTER = 'HwMnoteFaceReyeCenter',

    /**
     * Face Smile Score
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_SMILE_SCORE = 'HwMnoteFaceSmileScore',

    /**
     * Face Version
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FACE_VERSION = 'HwMnoteFaceVersion',

    /**
     * Front Camera
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    FRONT_CAMERA = 'HwMnoteFrontCamera',

    /**
     * Scene Pointer
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_POINTER = 'HwMnoteScenePointer',

    /**
     * Scene Version
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    SCENE_VERSION = 'HwMnoteSceneVersion',

    /**
     * Is Xmage Supported
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    IS_XMAGE_SUPPORTED = 'HwMnoteIsXmageSupported',

    /**
     * Xmage Mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    XMAGE_MODE = 'HwMnoteXmageMode',

    /**
     * Xmage X1 Coordinate
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    XMAGE_LEFT = 'HwMnoteXmageLeft',

    /**
     * Xmage Y1 Coordinate
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    XMAGE_TOP = 'HwMnoteXmageTop',

    /**
     * Xmage X2 Coordinate
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    XMAGE_RIGHT = 'HwMnoteXmageRight',

    /**
     * Xmage Y2 Coordinate
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    XMAGE_BOTTOM = 'HwMnoteXmageBottom',

    /**
     * Cloud Enhancement Mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    CLOUD_ENHANCEMENT_MODE = 'HwMnoteCloudEnhancementMode',

    /**
     * Wind Snapshot Mode
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    WIND_SNAPSHOT_MODE = 'HwMnoteWindSnapshotMode',

    /**
     * GIF LOOP COUNT
     * If infinite loop returns 0, other values represent the number of loops
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    GIF_LOOP_COUNT = 'GIFLoopCount'
  }

  /**
   * Enumerates alpha types.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  enum AlphaType {
    /**
     * Indicates an unknown alpha type.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    UNKNOWN = 0,

    /**
     * Indicates that the image has no alpha channel, or all pixels in the image are fully opaque.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    OPAQUE = 1,

    /**
     * Indicates that RGB components of each pixel in the image are premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    PREMUL = 2,

    /**
     * Indicates that RGB components of each pixel in the image are independent of alpha and are not premultiplied by alpha.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    UNPREMUL = 3
  }

  /**
   * Enumerates decoding dynamic range.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum DecodingDynamicRange {
    /**
     * Decoding according to the content of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    AUTO = 0,

    /**
     * Decoding to standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    SDR = 1,

    /**
     * Decoding to high dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    HDR = 2
  }

  /**
   * Enumerates packing dynamic range.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum PackingDynamicRange {
    /**
     * Packing according to the content of the image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    AUTO = 0,

    /**
     * Packing to standard dynamic range.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    SDR = 1,
  }

  /**
   * Enumerates the anti-aliasing level.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @atomicservice
   * @since 20
   */
  enum AntiAliasingLevel {
    /**
     * Nearest-neighbor interpolation algorithm.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice
     * @since 20
     */
    NONE = 0,

    /**
     * Bilinear interpolation algorithm.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice
     * @since 20
     */
    LOW = 1,

    /**
     * Bilinear interpolation algorithm with mipmap linear filtering.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice
     * @since 20
     */
    MEDIUM = 2,

    /**
     * Cubic interpolation algorithm.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @atomicservice
     * @since 20
     */
    HIGH = 3,
  }

  /**
   * Enum for image scale mode.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  enum ScaleMode {
    /**
     * Indicates the effect that fits the image into the target size.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    FIT_TARGET_SIZE = 0,

    /**
     * Indicates the effect that scales an image to fill the target image area and center-crops the part outside the area.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    CENTER_CROP = 1
  }

  /**
   * Enumerates the HDR metadata types that need to be stored in Pixelmap.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum HdrMetadataKey {
    /**
     * Indicate the types of metadata that image needs to use.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    HDR_METADATA_TYPE = 0,

    /**
     * Static metadata key.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    HDR_STATIC_METADATA = 1,

    /**
     * Dynamic metadata key.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    HDR_DYNAMIC_METADATA = 2,

    /**
     * Gainmap metadata key.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    HDR_GAINMAP_METADATA = 3,
  }

  /**
   * Value for HDR_METADATA_TYPE.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum HdrMetadataType {
    /**
     * No metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    NONE = 0,

    /**
     * Indicates that metadata will be used for the base image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    BASE = 1,

    /**
     * Indicates that metadata will be used for the gainmap image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    GAINMAP = 2,

    /**
     * Indicates that metadata will be used for the alternate image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    ALTERNATE = 3,
  }

  /**
   * Describes region information.
   *
   * @typedef Region
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface Region {
    /**
     * Image size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    size: Size;

    /**
     * x-coordinate at the upper left corner of the image.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    x: int;

    /**
     * y-coordinate at the upper left corner of the image.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    y: int;
  }

  /**
   * Describes area information in an image.
   *
   * @typedef PositionArea
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface PositionArea {
    /**
     * Image data that will be read or written.
     *
     * @type { ArrayBuffer }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pixels: ArrayBuffer;

    /**
     * Offset for data reading.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    offset: int;

    /**
     * Number of bytes to read.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    stride: int;

    /**
     * Region to read.
     *
     * @type { Region }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    region: Region;
  }

  /**
   * Describes image information.
   *
   * @typedef ImageInfo
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface ImageInfo {
    /**
     * Indicates image dimensions specified by a {@link Size} interface.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    size: Size;

    /**
     * Indicates image default density.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    density: int;

    /**
     * The number of byte per row.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 20
     */
    stride: int;

    /**
     * Indicates image format.
     *
     * @type { PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pixelFormat: PixelMapFormat;

    /**
     * Indicates image alpha type.
     *
     * @type { AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alphaType: AlphaType;

    /**
     * Indicates image mime type.
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 20
     */
    mimeType: string;

    /**
     * Indicates whether the image high dynamic range
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    isHdr: boolean;
  }

  /**
   * Describes the option for image packing.
   *
   * @typedef PackingOption
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface PackingOption {
    /**
     * Multipurpose Internet Mail Extensions (MIME) format of the target image, for example, image/jpeg.
     *
     * @type { string }
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    format: string;

    /**
     * Quality of the target image. The value is an integer ranging from 0 to 100. A larger value indicates better.
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    quality: int;

    /**
     * BufferSize of the target image.
     * If this bufferSize is less than or equal to 0, it will be converted to 10MB.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    bufferSize?: int;

    /**
     * The desired dynamic range of the target image.
     *
     * @type { ?PackingDynamicRange }
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 20
     */
    desiredDynamicRange?: PackingDynamicRange;

    /**
     * Whether the image properties can be saved, like Exif.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @since 20
     */
    needsPackProperties?: boolean;
  }

  /**
   * Describes image properties.
   *
   * @typedef ImagePropertyOptions
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @since 20
   */
  interface ImagePropertyOptions {
    /**
     * Default property value.
     *
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 20
     */
    defaultValue?: string;
  }

  /**
   * Describes image decoding parameters.
   *
   * @typedef DecodingOptions
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface DecodingOptions {
    /**
     * Number of image frames.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    index?: int;

    /**
     * Sampling ratio of the image pixel map.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    sampleSize?: int;

    /**
     * Rotation angle of the image pixel map. The value ranges from 0 to 360.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rotate?: int;

    /**
     * Whether the image pixel map is editable.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    editable?: boolean;

    /**
     * Width and height of the image pixel map. The value (0, 0) indicates that the pixels are decoded
     * based on the original image size.
     *
     * @type { ?Size }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    desiredSize?: Size;

    /**
     * Cropping region of the image pixel map.
     *
     * @type { ?Region }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    desiredRegion?: Region;

    /**
     * Data format of the image pixel map.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    desiredPixelFormat?: PixelMapFormat;

    /**
     * The density for image pixel map.
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    fitDensity?: int;

    /**
     * Color space of the image pixel map.
     *
     * @type { ?colorSpaceManager.ColorSpaceManager }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 20
     */
    desiredColorSpace?: colorSpaceManager.ColorSpaceManager;
    
    /**
     * The desired dynamic range of the image pixelmap.
     *
     * @type { ?DecodingDynamicRange }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @since 20
     */
    desiredDynamicRange?: DecodingDynamicRange;

    /**
     * Resolution Quality of the image.
     *
     * @type { ?ResolutionQuality }
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @systemapi
     * @since 20
     */
    resolutionQuality?: ResolutionQuality;
  }

  /**
   * Initialization options for pixelmap.
   *
   * @typedef InitializationOptions
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface InitializationOptions {
    /**
     * PixelMap size.
     *
     * @type { Size }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    size: Size;

    /**
     * PixelMap source format.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    srcPixelFormat?: PixelMapFormat;

    /**
     * PixelMap expected format.
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    pixelFormat?: PixelMapFormat;

    /**
     * Editable or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    editable?: boolean;

    /**
     * PixelMap expected alpha type.
     *
     * @type { ?AlphaType }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    alphaType?: AlphaType;

    /**
     * PixelMap expected scaling effect.
     *
     * @type { ?ScaleMode }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    scaleMode?: ScaleMode;
  }

  /**
   * Create an empty pixelmap.
   *
   * @param { InitializationOptions } options Initialization options for pixelmap.
   * @returns { PixelMap } Returns the instance if the operation is successful;Otherwise, return undefined.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 20
   */
function createPixelMapSync(options: InitializationOptions): PixelMap;

  /**
   * Creates an ImageSource instance based on the URI.
   *
   * @param { string } uri Image source URI.
   * @returns { ImageSource } returns the ImageSource instance if the operation is successful; returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * Creates an ImagePacker instance.
   *
   * @returns { ImagePacker } Returns the ImagePacker instance if the operation is successful; returns null otherwise.
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function createImagePacker(): ImagePacker;

  /**
   * PixelMap instance.
   *
   * @typedef PixelMap
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface PixelMap {
    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixel map data will be written.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer.
     *
     * @param { ArrayBuffer } dst A buffer to which the image pixel map data will be written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    readPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * Obtains pixel map information about this image. This method uses a promise to return the information.
     *
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image pixel map information. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    getImageInfo(): Promise<ImageInfo>;

    /**
     * Get image information from image source.
     *
     * @returns { ImageInfo } the image information.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    getImageInfoSync(): ImageInfo;

    /**
     * Obtains the number of bytes in each line of the image pixel map.
     *
     * @returns { int } Number of bytes in each line.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    getBytesNumberPerRow(): int;

    /**
     * Obtains the total number of bytes of the image pixel map.
     *
     * @returns { int } Total number of bytes.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    getPixelBytesNumber(): int;

    /**
     * Obtains new pixel map with alpha information. This method uses a promise to return the information.
     *
     * @returns { Promise<PixelMap> } A Promise instance used to return the new image pixel map. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    createAlphaPixelmap(): Promise<PixelMap>;

    /**
     * Obtains new pixel map with alpha information.
     *
     * @returns { PixelMap } return the new image pixel map. If the operation fails, an error message is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    createAlphaPixelmapSync(): PixelMap;

    /**
     * Image zoom in width and height.
     *
     * @param { double } x The zoom value of width.
     * @param { double } y The zoom value of height.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scaleSync(x: double, y: double): void;

    /**
     * Image zoom in width and height with anti-aliasing.
     *
     * @param { double } x The zoom value of width.
     * @param { double } y The zoom value of height.
     * @param { AntiAliasingLevel } level The anti-aliasing algorithm to be used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - Resource Unavailable.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scaleSync(x: double, y: double, level: AntiAliasingLevel): void;

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
     * @since 20
     */
    flipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * Crop the image. This method uses a promise to return the result.
     *
     * @param { Region } region The region to crop.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    crop(region: Region): Promise<void>;

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
     * @since 20
     */
    cropSync(region: Region): void;

    /**
     * Releases this PixelMap object. This method uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the instance release result. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    release(): Promise<void>;
  }

  /**
   * Picture instance.
   *
   * @typedef Picture
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  interface Picture {
    /**
     * Obtains the pixel map of the main image.
     *
     * @returns { PixelMap } Returns the pixel map.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    getMainPixelmap(): PixelMap;
  }

  /**
   * Create a Picture object by the pixel map of the main image.
   *
   * @param { PixelMap } mainPixelmap The pixel map of the main image.
   * @returns { Picture } Returns the Picture object.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  function createPicture(mainPixelmap : PixelMap): Picture;

  /**
   * AuxiliaryPicture instance.
   *
   * @typedef AuxiliaryPicture
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  interface AuxiliaryPicture {
    /**
     * Reads auxiliary picture data in an ArrayBuffer and writes the data to a AuxiliaryPicture object. This method
     * uses a promise to return the result.
     *
     * @param { ArrayBuffer } data A buffer from which the auxiliary picture data will be read.
     * @returns { Promise<void> } A Promise instance used to return the operation result. If the operation fails, an
     * error message is returned.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    writePixelsFromBuffer(data: ArrayBuffer): Promise<void>;

    /**
     * Reads image pixel map data and writes the data to an ArrayBuffer. This method uses
     * a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> } A Promise instance used to return the pixel map data.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    readPixelsToBuffer(): Promise<ArrayBuffer>;

    /**
     * Obtains the type of auxiliary picture.
     *
     * @returns { AuxiliaryPictureType } Returns the type of auxiliary picture.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    getType(): AuxiliaryPictureType;

    /**
     * Set the metadata of auxiliary picture.
     *
     * @param { MetadataType } metadataType The type of metadata.
     * @param { Metadata } metadata The metadata of auxiliary picture.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     * metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>

    /**
     * Obtains the metadata of auxiliary picture.
     *
     * @param { MetadataType } metadataType The type of metadata.
     * @returns { Promise<Metadata> } Return the metadata of auxiliary picture.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     * metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    getMetadata(metadataType: MetadataType): Promise<Metadata>

    /**
     * Releases this AuxiliaryPicture object.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    release():void
  }

  /**
   * Enumerates auxiliary picture type.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum AuxiliaryPictureType {
    /**
     * Gain map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    GAINMAP = 1,

    /**
     * Depth map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    DEPTH_MAP = 2,

    /**
     * Unrefocus map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    UNREFOCUS_MAP = 3,

    /**
     * Linear map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    LINEAR_MAP = 4,

    /**
     * Fragment map.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    FRAGMENT_MAP = 5,
  }

  /**
   * Enumerates metadata type.
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  enum MetadataType {
    /**
     * EXIF metadata.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    EXIF_METADATA = 1,

    /**
     * Fragment metadata. 
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    FRAGMENT_METADATA = 2,
  }

  /**
   * Metadata instance.
   *
   * @typedef Metadata
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 20
   */
  interface Metadata {
    /**
     * Obtains the value of properties in an image. This method uses a promise to return the property values in array
     * of records.
     *
     * @param { Array<string> } key Name of the properties whose value is to be obtained.
     * @returns { Promise<Record<string, string | null>> } Array of Records instance used to return the property values.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     * metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    getProperties(key: Array<string>): Promise<Record<string, string | null>>

    /**
     * Modify the value of properties in an image with the specified keys.
     *
     * @param { Record<string, string | null> } records Array of the property Records whose values are to
     * be modified.
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 7600202 - Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The
     * metadata type does not match the auxiliary picture type.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    setProperties(records: Record<string, string | null>): Promise<void>

    /**
     * Obtains the value of all properties in an image. This method uses a promise to return the property values
     * in array of records.
     *
     * @returns { Promise<Record<string, string | null>> } Array of Records instance used to return the property values.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    getAllProperties(): Promise<Record<string, string | null>>

    /**
     * Obtains a clone of metadata. This method uses a promise to return the metadata.
     *
     * @returns { Promise<Metadata> } A Promise instance used to return the metadata.
     * @throws { BusinessError } 7600301 - Memory alloc failed.
     * @throws { BusinessError } 7600302 - Memory copy failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 20
     */
    clone(): Promise<Metadata>
  }

  /**
   * ImageSource instance.
   *
   * @typedef ImageSource
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  interface ImageSource {
    /**
     * Get image information from image source.
     *
     * @param { int } index Sequence number of an image. If this parameter is not specified, the default value 0 is used.
     * @returns { Promise<ImageInfo> } A Promise instance used to return the image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    getImageInfo(index?: int): Promise<ImageInfo>;

    /**
     * Get image information from image source synchronously.
     *
     * @param { int } index - Index of sequence images. If this parameter is not specified, default value is 0.
     * @returns { ImageInfo } The image information.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 20
     */
    getImageInfoSync(index?: int): ImageInfo;

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
     * @since 20
     */
    createPixelMap(options?: DecodingOptions): Promise<PixelMap>;

    /**
     * Create a PixelMap object based on image decoding parameters synchronously.
     *
     * @param { DecodingOptions } options - Image decoding parameters.
     * @returns { PixelMap } Return the PixelMap. If decoding fails, return undefined.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 20
     */
    createPixelMapSync(options?: DecodingOptions): PixelMap;

    /**
     * Releases an ImageSource instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 20
     */
    release(): Promise<void>;
  }

  /**
   * ImagePacker instance.
   *
   * @typedef ImagePacker
   * @syscap SystemCapability.Multimedia.Image.ImagePacker
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface ImagePacker {
    /**
     * Releases an ImagePacker instance and uses a promise to return the result.
     *
     * @returns { Promise<void> } A Promise instance used to return the operation result.
     * @syscap SystemCapability.Multimedia.Image.ImagePacker
     * @crossplatform
     * @since 20
     */
    release(): Promise<void>;
  }
}

export default image;
