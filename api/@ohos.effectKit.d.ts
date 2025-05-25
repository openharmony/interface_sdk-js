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

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';

/**
 * @namespace effectKit
 * @since 9
 */
/**
 * @namespace effectKit
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * @namespace effectKit
 * @crossplatform
 * @form
 * @atomicservice
 * @since 14
 */

declare namespace effectKit {

  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @param { number } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A blur effect is added to the image.
    * @param { number } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { number } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14
    */
    blur(radius: number): Filter;

    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { number } radius - The degree of blur, the value is measured in pixels.
    * @param { TileMode } tileMode - The tile mode of blur.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 14
    */
    blur(radius: number, tileMode: TileMode): Filter;

    /**
    * A Brightness effect is added to the image.
    * @param { number } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Brightness effect is added to the image.
    * @param { number } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the brightness effect to the filter linked list, and returns the head node of the linked list.
    * @param { number } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14
    */
    brightness(bright: number): Filter;

    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the grayscale effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14
    */
    grayscale(): Filter;

    /**
    * A invert effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 12
    */
    /**
    * Adds the inversion effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @since 14
    */
    invert(): Filter;

    /**
     * A custom effect is added to the image.
     *
     * @param { Array<number> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    /**
     * Adds a custom effect to the filter linked list, and returns the head node of the linked list.
     *
     * @param { Array<number> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 14
     */
    setColorMatrix(colorMatrix: Array<number>): Filter;

    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added.
    * @returns { image.PixelMap } image.PixelMap.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    * @deprecated since 11
    * @useinstead effectKit.Filter#getEffectPixelMap
    */
    getPixelMap(): image.PixelMap;
  
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 11
    */
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added. This API uses a promise to return the result.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14
    */
    getEffectPixelMap(): Promise<image.PixelMap>;
  }

  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  interface ColorPicker {

    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API uses a promise to return the result.
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getMainColor(): Promise<Color>;

    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getMainColorSync(): Color;

    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the largest proportion from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getLargestProportionColor(): Color;

    /**
     * Get top proportion color of an image
     * @param { number } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains a given number of colors with the top proportions in the image. This API returns the result synchronously.
     * @param { number } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getTopProportionColors(colorCount: number): Array<Color | null>;

    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the highest saturation from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getHighestSaturationColor(): Color;

    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the average color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    getAverageColor(): Color;

    /**
     * Determine whether the color is black or white or gray
     * @param { number } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { number } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Checks whether a color is black, white, and gray.
     * @param { number } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    isBlackOrWhiteOrGrayColor(color: number): boolean;
  }

  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class that stores the color picked.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  interface Color {

    /**
     * Red
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Red
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the red component. The value range is [0x0, 0xFF].
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    red: number;

    /**
     * Green
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Green
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the green component. The value range is [0x0, 0xFF].
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    green: number;

    /**
     * Blue
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Blue
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the blue component. The value range is [0x0, 0xFF].
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    blue: number;

    /**
     * Alpha
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Alpha
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the alpha component. The value range is [0x0, 0xFF].
     * @type { number }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    alpha: number;
  }

  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a Filter instance based on a pixel map.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  function createColorPicker(source: image.PixelMap, region: Array<number>): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
  
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  function createColorPicker(source: image.PixelMap, region: Array<number>, callback: AsyncCallback<ColorPicker>): void;

  /**
   * Enumerates the tile modes of the shader effect
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 14
   */
  enum TileMode {
    /**
     * Clamp mode,Replicates the edge color if the shader effect draws outside of its original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14
     */
    CLAMP = 0,

    /**
     * Repeat mode,Repeats the shader effect in both horizontal and vertical directions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14
     */
    REPEAT = 1,

    /**
     * Mirror mode,Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14
     */
    MIRROR = 2,

    /**
     * Decal mode,	Renders the shader effect only within the original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14
     */
    DECAL = 3,
  }
}

export default effectKit;
