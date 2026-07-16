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
 * 本模块提供管理抽象化色域对象的一些基础能力，包括可共享的色彩管理的创建与可共享的色域基础属性的获取等。
 *
 * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
 * @crossplatform
 * @since 12 dynamiconly
 */
declare namespace sendableColorSpaceManager {
  /**
   * 为与当前模块的接口规范保持一致，重新定义了ISendable类型。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;
  /**
   * 当前可共享的色彩管理实例。
   * 下列API示例中都需先使用[create()]{@link sendableColorSpaceManager.create(colorSpaceName: colorSpaceManager.ColorSpace)}获取到
   * ColorSpaceManager实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  interface ColorSpaceManager extends ISendable {
    /**
     * 获取色域类型。
     *
     * @returns { colorSpaceManager.ColorSpace } Color space type.
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getColorSpaceName(): colorSpaceManager.ColorSpace;

    /**
     * 获取色域白点值。
     *
     * @returns { collections.Array<number> } Coordinates [x, y] of the white point.
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getWhitePoint(): collections.Array<number>;

    /**
     * 获取色域gamma值。
     *
     * @returns { number } 返回色域gamma值。
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 12 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    getGamma(): number;
  }

  /**
   * 创建标准可共享的色彩管理。
   *
   * @param { colorSpaceManager.ColorSpace } colorSpaceName - 标准色域类型枚举值。<br>UNKNOWN与CUSTOM不可用于直接创建色域对象。
   * @returns { ColorSpaceManager } 返回当前创建的可共享的色彩管理实例。
   *     <br>该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考
   *     [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Incorrect parameter type.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 18600001 - The parameter value is abnormal.
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager;

  /**
   * 创建用户自定义可共享的色彩管理实例。
   *
   * @param { colorSpaceManager.ColorSpacePrimaries } primaries - 色域标准三原色。
   * @param { number } gamma - 色域gamma值，取值为大于0的浮点数。
   * @returns { ColorSpaceManager } 返回当前创建的可共享的色彩管理实例。
   *     <br>色域类型定义为[colorSpaceManager.ColorSpace]{@link @ohos.graphics.colorSpaceManager:colorSpaceManager.ColorSpace}枚举值`
   *     CUSTOM`。
   *     <br>该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考
   *     [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。
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