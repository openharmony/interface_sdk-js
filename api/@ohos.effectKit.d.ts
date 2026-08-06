/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

/*** if arkts dynamic */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
/*** endif */
/*** if arkts static */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
import { FractionStop } from './arkui/component/common';
/*** endif */

/**
 * The Image Effect module provides basic capabilities for processing images, including brightness adjustment,
 * blurring, grayscale adjustment, and intelligent color picking. It is applicable to scenarios such as adding
 * filter effects in image editing apps, blurring the background image of app startup pages, automatically
 * extracting UI theme colors, and analyzing image color schemes.
 *
 * This module is used for offline processing of image.PixelMap to obtain visual effects, while uiEffect
 * (UI Effect Service) connects to the rendering service in real time to process screen frame buffers for
 * dynamic visual effects.
 *
 * This module provides the following classes:
 *
 * - [Filter]{@link effectKit.Filter}: an effect class used to add a specified effect to the effect chain, enabling combined processing
 *   of multiple image effects through chained calls.
 * - [Color]{@link effectKit.Color}: a class used to store the color picked.
 * - [ColorPicker]{@link effectKit.ColorPicker}: a smart color picker.
 *
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform [since 14]
 * @form [since 12]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace effectKit {

  /**
   * An image effect class used to add a specified effect to the effect chain through chained calls. It is suitable
   * for scenarios such as image filter processing, visual effect enhancement, and image beautification. Before
   * calling the methods of Filter, you need to create a Filter instance via createEffect. After adding effects,
   * you need to call getEffectPixelMap to obtain the processed image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Filter {

    /**
     * Adds the blur effect to the effect chain and returns the instance of the chain. The shader tile mode uses
     * DECAL. To specify the tile mode, use the blur(radius: double, tileMode: TileMode) API. It is commonly used
     * in scenarios such as background blurring, privacy information masking, frosted glass background effect, and
     * pop-up window background blur.
     *
     * > **NOTE**
     * >
     * > This API provides the blur effect for static images. To provide the real-time blur effect for components,
     *   use dynamic blur.
     *
     * @param { double } radius - Blur radius, in px. Value range: [0, +∞). A larger blur radius produces a more
     *     pronounced blur effect. Negative values produce no effect.
     * @returns { Filter } Returns the Filter instance with the added effects, for further adding effects or obtaining
     *     the processed image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    blur(radius: double): Filter;

    /**
     * Adds the blur effect to the effect chain and returns the instance of the chain. It supports selecting the
     * shader effect tile mode. It is commonly used in scenarios such as background blurring, privacy information
     * masking, frosted glass background effect, and pop-up window background blur.
     *
     * > **NOTE**
     * >
     * > This API provides the blur effect for static images. To provide the real-time blur effect for components,
     *   use dynamic blur.
     *
     * @param { double } radius - Blur radius, in px. Value range: [0, +∞). A larger blur radius produces a more
     *     pronounced blur effect. No effect is applied when a negative value is passed in.
     * @param { TileMode } tileMode - Shader tile mode, which affects the blur effect at the image edges.
     * @returns { Filter } Returns a Filter instance with the added effects, for continuing to add effects or obtaining
     *     the processed image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    blur(radius: double, tileMode: TileMode): Filter;

    /**
     * Adds the elliptical gradient blur effect to the filter linked list, and returns the head node of the linked list.
     *
     * @param { double } blurRadius - Blur radius, in pixels. The blur effect is proportional to the configured value.
     *     A larger value indicates a more obvious effect.
     * @param { EllipticalMaskCenter } center - Set the center point of the ellipse. [0, 0] represents the top-left
     *     corner of
     *     the component, and floating-point numbers are allowed. Values exceeding the boundary will be automatically
     *     truncated during implementation.
     * @param { EllipticalMaskRadius } maskRadius - Set the major axis and minor axis of the ellipse.
     *     A radius of 1 is equal to the height of the component. The value range is [0, 10],
     *     and floating-point numbers are allowed. Values exceeding the boundary
     *     will be automatically truncated during implementation.
     * @param { FractionStop[] } fractionStops - Gradient blur position and intensity array.
     *     The array length ranges from 0 to 12. It has no effect if the length is 0 or greater than 12.
     *     Both position and intensity values are between 0 and 1. Position 0 corresponds to the ellipse center,
     *     and position 1 corresponds to the ellipse boundary. Intensity 0 means no blur, while intensity 1 equals the
     *     blur effect of the input blur radius.
     * @returns { Filter } Final image effect.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter;

    /**
     * Adds the brightness effect to the effect chain and returns the instance of the chain. This method achieves
     * a brightness effect by adjusting the image brightness. It is commonly used in scenarios such as dark image
     * brightening, image preview brightness enhancement, and night mode image adaptation.
     *
     * @param { double } bright - Brightness level. The value range is [0, 1]. The value 0 means the image remains
     *     unchanged, and 1 means the image brightness is increased to the maximum. If the value is out of range,
     *     it is automatically corrected to 0.
     * @returns { Filter } Returns the Filter instance with the added effects, for further adding effects or obtaining
     *     the processed image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    brightness(bright: double): Filter;

    /**
     * Adds the grayscale effect to the effect chain and returns the instance of the chain. This method converts
     * a color image into a grayscale image by calculating the grayscale value through weighted RGB values. It is
     * commonly used in scenarios such as black-and-white style photo generation, image preprocessing decolorization,
     * and grayscale icon creation.
     *
     * @returns { Filter } Returns the Filter instance with the added effects, which can be used to continue adding
     *     effects or obtain the processed image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    grayscale(): Filter;

    /**
     * Adds the invert effect to the effect chain and returns the instance of the chain. This method inverts the
     * RGB color values of the image. It is commonly used in scenarios such as negative film effect, image artistic
     * processing, and night mode adaptation.
     *
     * @returns { Filter } Returns the Filter instance with the added effects, which can be used to continue adding
     *     effects or obtain the processed image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    invert(): Filter;

    /**
     * Performs color transformation on the image using a custom color matrix, adds the effect to the effect chain,
     * and returns the instance of the chain. It is commonly used in scenarios such as implementing custom color
     * effects not supported by preset filters, such as vintage tones and warm/cool tone adjustments.
     *
     * @param { Array<double> } colorMatrix - Custom color matrix. A 4x5 matrix used to create an effect filter.
     *     The array length must be 20. The first four columns correspond to the transformation coefficients of the
     *     R, G, B, and A channels, and the fifth column is the constant offset value. It is recommended that the
     *     element values be in the range [-1, 1]. Values outside this range may cause color value overflow or
     *     unexpected effects. If the array length is not 20, null is returned.
     * @returns { Filter } Filter instance with effects added, which can be used to add more effects or obtain the
     *     processed image.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
     * Obtains image.PixelMap of the source image to which the effect chain has been added. It is commonly used
     * in scenarios where the processed image needs to be saved or displayed.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 9 and deprecated since API version 11. Use getEffectPixelMap instead.
     *
     * @returns { image.PixelMap } image.PixelMap of the source image with the effect chain applied.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead effectKit.Filter#getEffectPixelMap
     */
    getPixelMap(): image.PixelMap;

    /**
     * Obtains image.PixelMap of the source image to which the effect chain has been added. CPU rendering is used
     * by default. This API uses a promise to return the result. To specify the rendering mode, use the
     * getEffectPixelMap(useCpuRender: boolean) API. It is commonly used in scenarios where the processed image
     * needs to be saved or displayed.
     *
     * > **NOTE**
     * >
     * > This method uses CPU rendering by default. The shader tile mode supports only DECAL, and other modes
     *   (CLAMP, REPEAT, MIRROR) are not supported. To use GPU rendering or learn about the impact of rendering
     *   modes on TileMode, see TileMode and getEffectPixelMap(useCpuRender: boolean).
     *
     * @returns { Promise<image.PixelMap> } - Promise used to return the image.PixelMap of the source image with
     *     the effect chain applied.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEffectPixelMap(): Promise<image.PixelMap>;

    /**
     * Obtains image.PixelMap of the source image with the linked list effect. The rendering mode (CPU rendering
     * or GPU rendering) can be specified. This API uses a promise to return the result.
     *
     * @param { boolean } useCpuRender - Specifies the rendering mode. The value true means CPU rendering, and false
     *     means GPU rendering. When GPU rendering is used, the support scope of the shader effect tile mode TileMode
     *     differs from that of CPU rendering. For details, see TileMode.
     * @returns { Promise<image.PixelMap> } - Promise used to return image.PixelMap of the source image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>;
  }

  /**
   * A color picker class used to obtain the main color from image data. It is suitable for scenarios such as
   * UI theme color extraction, image color scheme analysis, and intelligent color scheme recommendation, helping
   * developers dynamically generate harmonious color schemes based on image content. Before calling the methods
   * of ColorPicker, you need to create a ColorPicker instance via createColorPicker.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ColorPicker {

    /**
     * Reads the color value of the main color from the image and writes the result to a Color instance. This API
     * uses a promise to return the result. This API uses the image scaling algorithm to calculate the weighted
     * value of surrounding pixels and reduce the original image to one pixel to obtain the main color. It is
     * commonly used in scenarios such as automatic app theme color extraction, automatic UI color matching based
     * on images, and dynamic background color adjustment of music players based on album covers.
     *
     * @returns { Promise<Color> } Promise used to return the color value of the main color. If the operation fails,
     *     an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainColor(): Promise<Color>;

    /**
     * Reads the color value of the main color from the image and writes the result to a Color instance. This API
     * returns the result synchronously. This API uses the image scaling algorithm to calculate the weighted value
     * of surrounding pixels and reduces the original image to one pixel to obtain the main color. It is commonly
     * used in scenarios such as automatic app theme color extraction, automatic UI color matching based on images,
     * and dynamic background color adjustment of music players based on album covers.
     *
     * @returns { Color } Color value of the main color. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainColorSync(): Color;

    /**
     * Reads the color value with the largest proportion in the image and writes the result to a Color instance.
     * This API returns the result synchronously. This API uses the median cut algorithm to partition the color
     * space and obtains the average color of the color space with the largest proportion. It is commonly used in
     * scenarios such as identifying the largest color area in an image, such as icon background color extraction
     * and image content analysis.
     *
     * @returns { Color } Color value of the color with the largest proportion. If the operation fails, null is
     *     returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getLargestProportionColor(): Color;

    /**
     * Reads the top proportion colors from the image, with the number specified by colorCount, and writes the
     * results to an array of Color instances. This API returns the result synchronously. It is commonly used in
     * scenarios such as extracting the top multiple colors by proportion in an image, such as multi-tone color
     * scheme generation and image color distribution analysis.
     *
     * @param { int } colorCount - Number of colors to extract, rounded down. Before OpenHarmony 6.1, the value
     *     range is [1, 10]. If the number of colors to extract is greater than 10, the top 10 are taken.
     *     Since OpenHarmony 6.1, the value range is [1, 20]. If the number of colors to extract is greater than 20,
     *     the top 20 are taken.
     * @returns { Array<Color | null> } Array of colors, i.e., the top colorCount color values by proportion in the
     *     image, sorted by proportion.
     *     - If the number of colors obtained is less than the value of colorCount, the array size is the actual
     *     number obtained.
     *     - If the colors fail to be obtained or the number of colors obtained is less than 1, [null] is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

    /**
     * Synchronously returns the top proportion colors and their corresponding percentages from the image, with
     * the number specified by colorCount.
     *
     * @param { int } colorCount - Number of color values and their corresponding percentages, rounded down.
     *     Before OpenHarmony 6.1, the value range is [1, 10]. If the number of colors to extract is greater than 10,
     *     the top 10 are taken. Since OpenHarmony 6.1, the value range is [1, 20]. If the number of colors to
     *     extract is greater than 20, the top 20 are taken.
     * @returns { Map<Color | null, double | null> } Map of the top colorCount color values and their corresponding
     *     percentages by proportion in the image. The percentage value range is [0, 1].
     *     - If the number of colors obtained is less than the value of colorCount, the map size is the actual
     *     number obtained.
     *     - If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>;

    /**
     * Obtains the proportion of fully transparent pixels with alpha=0 in the image.
     *
     * @returns { double } Proportion of fully transparent pixels with alpha=0. The value range is [0, 1].
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 23 dynamic&static
     */
    getAlphaZeroTransparentProportion(): double;

    /**
     * Obtains the shade degree of the image. When the shade degree cannot be determined, the default value
     * UNKNOWN_SHADE_DEGREE_PICTURE is returned.
     *
     * @returns { PictureShadeDegree } Shade degree of the image.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getShadeDegree(): PictureShadeDegree;

    /**
     * Obtains the complexity degree of the image. When the complexity degree cannot be determined, the default
     * value UNKNOWN_COMPLEXITY_DEGREE_PICTURE is returned.
     *
     * @returns { PictureComplexityDegree } Complexity degree of the image.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getComplexityDegree(): PictureComplexityDegree;

    /**
     * Reads the color value with the highest saturation from the image and writes the result to a Color instance.
     * This API returns the result synchronously. It is commonly used in scenarios such as extracting the most vivid
     * color in an image, such as UI theme accent color extraction and icon highlight color selection.
     *
     * @returns { Color } Color value of the color with the highest saturation. If the operation fails, null is
     *     returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getHighestSaturationColor(): Color;

    /**
     * Reads the average color value from the image and writes the result to a Color instance. This API returns
     * the result synchronously. It is commonly used in scenarios such as obtaining the overall tone of an image,
     * such as image tone statistics and adaptive background color.
     *
     * @returns { Color } Average color value. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAverageColor(): Color;

    /**
     * Determines whether the specified color value is a black, white, or gray color, and returns true or false.
     * It is commonly used in scenarios such as determining whether a color belongs to the achromatic color system,
     * such as intelligent color scheme filtering and image color classification.
     *
     * @param { long } color - Color value to determine whether it is black, white, or gray. The format is
     *     0xAARRGGBB, and the value range is [0x0, 0xFFFFFFFF].
     * @returns { boolean } The value true means the color is black, white, or gray, and false means the opposite.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isBlackOrWhiteOrGrayColor(color: long): boolean;

    /**
     * Obtains the Morandi shadow color from the dominant color of the image and writes the result to a Color
     * instance. This API uses a specific color conversion algorithm to convert the dominant color into a Morandi
     * style shadow tone.
     *
     * @returns { Color } - Color value of the Morandi shadow color. If the image processing fails or the Morandi
     *     shadow color cannot be obtained, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getMorandiShadowColor(): Color;

    /**
     * Generates a stronger immersion color that merges with the background color and is deeper than the background
     * color, and writes the result to a Color instance. This API uses a color mixing algorithm to create a color
     * that is both harmonious with the background color and has a stronger immersive effect.
     *
     * @returns { Color } - Color value of the deepened immersion color. If the image processing fails or the
     *     immersion color cannot be generated, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getDeepenImmersionColor(): Color;

    /**
     * Generates an immersive background color that creates an immersive visual effect, and writes the result to a
     * Color instance. This API generates a color value suitable for use as an immersive background based on the
     * dominant color.
     *
     * @returns { Color } - Color value of the immersive background color. If the image processing fails or the
     *     immersive background color cannot be generated, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveBackgroundColor(): Color;

    /**
     * Generates an immersive foreground color that creates an immersive visual effect for text and content, and
     * writes the result to a Color instance. This API generates a color value suitable for use as an immersive
     * foreground based on the dominant color.
     *
     * @returns { Color } - Color value of the immersive foreground color. If the image processing fails or the
     *     immersive foreground color cannot be generated, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveForegroundColor(): Color;

    /**
     * Discriminates the light and dark degree of the picture. When the light and dark degree cannot be determined,
     * UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE is returned.
     *
     * @returns { PictureLightDegree } - Light and dark degree of the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    discriminatePictureLightDegree(): PictureLightDegree;

    /**
     * Generates a reverse color based on the image brightness discrimination result, and writes the result to a
     * Color instance. Based on the image light degree type obtained from the discriminatePictureLightDegree API,
     * a reverse color is generated. Only the extremely light color picture (EXTREMELY_LIGHT_COLOR_PICTURE) type
     * returns black; other types return white. It is used for UI themes or contrast calculations.
     *
     * @returns { Color } - Color value of the reverse color. If the image processing fails or the reverse color
     *     cannot be generated, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getReverseColor(): Color;
  }

  /**
   * Enum for the brightness of image colors.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 26.0.0 dynamic&static
   */
  enum PictureLightDegree {

    /**
     * Image with unknown brightness.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE = 0,

    /**
     * Extremely bright image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_LIGHT_COLOR_PICTURE = 1,

    /**
     * Bright image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    LIGHT_COLOR_PICTURE = 2,

    /**
     * Dark image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    DARK_COLOR_PICTURE = 3,

    /**
     * Extremely dark image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_DARK_COLOR_PICTURE = 4,

    /**
     * Colorful image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    FLOWERY_PICTURE = 5,

    /**
     * Extremely colorful image.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_FLOWERY_PICTURE = 6
  }

  /**
   * A color class used to store the color picking result. It is suitable for scenarios such as obtaining the main
   * color, the color with the largest proportion, and the color with the highest saturation from an image in
   * conjunction with ColorPicker, helping developers conveniently obtain and pass image color picking results.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Color {

    /**
     * Red component value. Value range: [0x0, 0xFF].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    red: int;

    /**
     * Green component value. Value range: [0x0, 0xFF].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    green: int;

    /**
     * Blue component value. Value range: [0x0, 0xFF].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    blue: int;

    /**
     * Alpha component value. Value range: [0x0, 0xFF].
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    alpha: int;
  }

  /**
   * Creates a Filter instance based on the input PixelMap. You can then add various image effects through chained
   * calls, and finally obtain the processed image via getEffectPixelMap.
   *
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   *     by decoding an image or directly created. For details, see Introduction to Image Kit.
   * @returns { Filter } Returns a Filter instance with no effects added, or null if the operation fails.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result.
   *
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   *     by decoding an image or directly created. For details, see Introduction to Image Kit.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return
   * the result.
   *
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   *     by decoding an image or directly created. For details, see Introduction to Image Kit.
   * @param { Array<double> } region - Color picking region of the image. The array contains four elements, with a
   *     value range of [0, 1]. Values outside this range are automatically truncated during implementation. The four
   *     elements represent the left, top, right, and bottom positions of the image region, respectively. The leftmost
   *     and topmost edges correspond to position 0, and the rightmost and bottommost edges correspond to position 1.
   *     The third element must be greater than the first element, and the fourth element must be greater than the
   *     second element.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>): Promise<ColorPicker>;

  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result.
   *
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   *     by decoding an image or directly created. For details, see Introduction to Image Kit.
   * @param { AsyncCallback<ColorPicker> } callback - Callback used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;

  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   *     by decoding an image or directly created. For details, see Introduction to Image Kit.
   * @param { Array<double> } region - Color picking region of the image. The array contains four elements, with a
   *     value range of [0, 1]. Values outside this range are automatically truncated during implementation. The four
   *     elements represent the left, top, right, and bottom positions of the image region, respectively. The leftmost
   *     and topmost edges correspond to position 0, and the rightmost and bottommost edges correspond to position 1.
   *     The third element must be greater than the first element, and the fourth element must be greater than the
   *     second element.
   * @param { AsyncCallback<ColorPicker> } callback - Callback used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>, callback: AsyncCallback<ColorPicker>): void;

  /**
   * Enumerates the tile modes of the shader effect.
   *
   * > **NOTE**
   * >
   * > Under CPU rendering, the shader tile mode supports only DECAL.
   * > Under GPU rendering, DECAL, CLAMP, REPEAT, and MIRROR modes are all supported.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 14 dynamic
   * @since 23 static
   */
  enum TileMode {

    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images so that
     * adjacent images always join.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * Enumerates the shade degrees of image colors.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureShadeDegree {

    /**
     * Default value. The shade degree of the image color is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_SHADE_DEGREE_PICTURE = 0,

    /**
     * The shade degree of the image color is extremely light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_LIGHT_PICTURE = 1,

    /**
     * The shade degree of the image color is very light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_LIGHT_PICTURE = 2,

    /**
     * The shade degree of the image color is light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    LIGHT_PICTURE = 3,

    /**
     * The shade degree of the image color is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_SHADE_PICTURE = 4,

    /**
     * The shade degree of the image color is dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    DARK_PICTURE = 5,

    /**
     * The shade degree of the image color is extremely dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_DARK_PICTURE = 6,
  }

  /**
   * Enumerates the complexity degree of the image.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureComplexityDegree {

    /**
     * Default value. The complexity degree of the image is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_COMPLEXITY_DEGREE_PICTURE = 0,

    /**
     * The complexity degree of the image is pure.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PURE_PICTURE = 1,

    /**
     * The complexity degree of the image is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_COMPLEXITY_PICTURE = 2,

    /**
     * The complexity degree of the image is very flowery.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_FLOWERY_PICTURE = 3,
  }

  /**
   * Defines the center point of the elliptical mask.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type EllipticalMaskCenter = [
  double,
  double
];

  /**
   * Defines the radius of the elliptical mask.
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type EllipticalMaskRadius = [
  double,
  double
];
}

export default effectKit;