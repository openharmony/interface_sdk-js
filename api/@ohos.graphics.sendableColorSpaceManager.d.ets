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
 * @kit ArkGraphics2D
 */

import lang from '../arkts/@arkts.lang';
import collections from '../arkts/@arkts.collections';
import colorSpaceManager from '@ohos.graphics.colorSpaceManager';

/**
 * The **sendableColorSpaceManager** module provides APIs for creating and managing sendable color space objects and
 * obtaining basic attributes of sendable color spaces.
 *
 * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
 * @crossplatform
 * @since 12 dynamiconly
 */
declare namespace sendableColorSpaceManager {
  /**
   * The ISendable type is redefined to align with the API specifications of the current module.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;
  /**
   * Implements management of color space objects.
   * Before calling any of the following APIs, you must use
   * [create()]{@link sendableColorSpaceManager.create(colorSpaceName: colorSpaceManager.ColorSpace)} to create a color
   * space manager.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  interface ColorSpaceManager extends ISendable {
    /**
     * Obtains the color space type.
     *
     * @returns { colorSpaceManager.ColorSpace } Color space type.
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getColorSpaceName(): colorSpaceManager.ColorSpace;

    /**
     * Obtains the coordinates of the white point in the color space.
     *
     * @returns { collections.Array<number> } Coordinates [x, y] of the white point.
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getWhitePoint(): collections.Array<number>;

    /**
     * Obtains the gamma of the color space.
     *
     * @returns { number } Gamma of the color space.
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getGamma(): number;
  }

  /**
   * Creates a standard color space object that is sendable.
   *
   * @param { colorSpaceManager.ColorSpace } colorSpaceName - Type of the color space.<br>**UNKNOWN** and **CUSTOM**
   *     cannot be used when creating standard color space objects.
   * @returns { ColorSpaceManager } Sendable color space object created.
   *     <br>This instance inherits from **ISendable** and can be passed by reference between concurrent ArkTS instances
   *     (including the main thread and the worker threads of TaskPool or Worker). For details, see
   *     [Using Sendable Objects](docroot://arkts-utils/sendable-guide.md).
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Incorrect parameter type.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 18600001 - The parameter value is abnormal.
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager;

  /**
   * Creates a custom color space object that is sendable.
   *
   * @param { colorSpaceManager.ColorSpacePrimaries } primaries - Primaries of the color space.
   * @param { number } gamma - Gamma value of the color space, which is a floating point number greater than 0.
   * @returns { ColorSpaceManager } Sendable color space object created.
   *     <br>The color space type is **CUSTOM**, which is one of the enumerated values of
   *     [colorSpaceManager.ColorSpace]{@link @ohos.graphics.colorSpaceManager:colorSpaceManager.ColorSpace}.
   *     <br>This instance inherits from **ISendable** and can be passed by reference between concurrent ArkTS instances
   *     (including the main thread and the worker threads of TaskPool or Worker). For details, see
   *     [Using Sendable Objects](docroot://arkts-utils/sendable-guide.md).
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Incorrect parameter type.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 18600001 - The parameter value is abnormal.
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager;
}

export default sendableColorSpaceManager;