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
 * @since arkts {'1.1':'14', '1.2':'20'}
 * @arkts 1.1&1.2
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
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
    */
    blur(radius: double): Filter;

    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @param { TileMode } tileMode - The tile mode of blur.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
    */
    blur(radius: double, tileMode: TileMode): Filter;

    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
    */
    brightness(bright: double): Filter;

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
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
    */
    grayscale(): Filter;

    /**
    * A invert effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 12
    */
    /**
    * A invert effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
    */
    invert(): Filter;

    /**
     * A custom effect is added to the image.
     *
     * @param { Array<double> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    /**
     * A custom effect is added to the image.
     *
     * @param { Array<double> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
    * Gets the PixelMap where all filter effects have been added to the image.
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
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since arkts {'1.1':'14', '1.2':'20'}
    * @arkts 1.1&1.2 
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
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2 
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
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
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
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
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
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
     */
    getLargestProportionColor(): Color;

    /**
     * Get top proportion color of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Get top proportion color of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

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
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
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
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
     */
    getAverageColor(): Color;

    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2 
     */
    isBlackOrWhiteOrGrayColor(color: int): boolean;
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
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Color {

    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    red: int;

    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    green: int;

    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    blue: int;

    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    alpha: int;
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
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
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
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>): Promise<ColorPicker>;

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
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
  
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>, callback: AsyncCallback<ColorPicker>): void;

  /**
   * TileMode enumeration description
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum TileMode {
    /**
     * Clamp mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    CLAMP = 0,

    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    REPEAT = 1,

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    MIRROR = 2,

    /**
     * Decal mode.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since arkts {'1.1':'14', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    DECAL = 3,
  }
}

export default effectKit;