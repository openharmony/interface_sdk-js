/*
* Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * 本模块提供管理抽象化色域对象的一些基础能力，包括色域对象的创建与色域基础属性的获取等。
 *
 * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
 * @crossplatform [since 11]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace colorSpaceManager {
  /**
   * 色域类型枚举。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum ColorSpace {
    /**
     * 未知的色域类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,

    /**
     * RGB色域为Adobe RGB(1998)类型。
     *
     * 转换函数为Adobe RGB(1998)类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ADOBE_RGB_1998 = 1,

    /**
     * RGB色域为DCI-P3类型。
     *
     * 转换函数为Gamma 2.6类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    DCI_P3 = 2,

    /**
     * RGB色域为DCI-P3类型。
     *
     * 转换函数为Gamma 2.6类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    DISPLAY_P3 = 3,

    /**
     * RGB色域为SRGB类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Full类型。
     *
     * 系统默认色域类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SRGB = 4,

    /**
     * RGB色域为BT709类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT709 = 6,

    /**
     * RGB色域为BT601_P类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT601_EBU = 7,

    /**
     * RGB色域为BT601_N类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT601_SMPTE_C = 8,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为HLG类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT2020_HLG = 9,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为PQ类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT2020_PQ = 10,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为HLG类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    P3_HLG = 11,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为PQ类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    P3_PQ = 12,

    /**
     * RGB色域为Adobe RGB(1998)类型。
     *
     * 转换函数为Adobe RGB(1998)类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    ADOBE_RGB_1998_LIMIT = 13,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DISPLAY_P3_LIMIT = 14,

    /**
     * RGB色域为SRGB类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    SRGB_LIMIT = 15,

    /**
     * RGB色域为BT709类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT709_LIMIT = 16,

    /**
     * RGB色域为BT601_P类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT601_EBU_LIMIT = 17,

    /**
     * RGB色域为BT601_N类型。
     *
     * 转换函数为BT709类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT601_SMPTE_C_LIMIT = 18,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为HLG类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT2020_HLG_LIMIT = 19,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为PQ类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    BT2020_PQ_LIMIT = 20,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为HLG类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    P3_HLG_LIMIT = 21,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为PQ类型。
     *
     * 编码范围为Limit类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    P3_PQ_LIMIT = 22,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为Linear类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LINEAR_P3 = 23,

    /**
     * RGB色域为SRGB类型。
     *
     * 转换函数为Linear类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LINEAR_SRGB = 24,

    /**
     * 与LINEAR_SRGB相同。
     *
     * RGB色域为BT709类型。
     *
     * 转换函数为Linear类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LINEAR_BT709 = LINEAR_SRGB,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为Linear类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LINEAR_BT2020 = 25,

    /**
     * 与SRGB相同。
     *
     * RGB色域为SRGB类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DISPLAY_SRGB = SRGB,

    /**
     * 与DISPLAY_P3相同。
     *
     * RGB色域为Display P3类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DISPLAY_P3_SRGB = DISPLAY_P3,

    /**
     * RGB色域为Display P3类型。
     *
     * 转换函数为HLG类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DISPLAY_P3_HLG = P3_HLG,

    /**
     * 与P3_PQ相同。
     *
     * RGB色域为Display P3类型。
     *
     * 转换函数为PQ类型。
     *
     * 编码范围为Full类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    DISPLAY_P3_PQ = P3_PQ,

    /**
     * RGB色域为BT2020类型。
     *
     * 转换函数为LOG类型。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @since 18 dynamic
     * @since 23 static
     */
    H_LOG = 26,

    /**
     * RGB色域为DISPLAY BT2020类型。
     *
     * 转换函数为SRGB类型。
     *
     * 编码范围为Full类型。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DISPLAY_BT2020_SRGB = 27,

    /**
     * 用户自定义色域类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    CUSTOM = 5
  }

  /**
   * 色域标准三原色（红、绿、蓝）和白色，基于现实世界的色度，使用(x, y)表示其在色彩空间中的位置。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ColorSpacePrimaries {
    /**
     * 标准红色在色彩空间的x坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    redX: double;

    /**
     * 标准红色在色彩空间的y坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    redY: double;

    /**
     * 标准绿色在色彩空间的x坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    greenX: double;

    /**
     * 标准绿色在色彩空间的y坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    greenY: double;

    /**
     * 标准蓝色在色彩空间的x坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    blueX: double;

    /**
     * 标准蓝色在色彩空间的y坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    blueY: double;

    /**
     * 标准白色在色彩空间的x坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    whitePointX: double;

    /**
     * 标准白色在色彩空间的y坐标值。
     *
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    whitePointY: double;
  }

  /**
   * 当前色域对象实例。
   * 下列API示例中都需先使用[create()]{@link colorSpaceManager.create(colorSpaceName: ColorSpace)}获取到ColorSpaceManager实例，再通过此实例调用对
   * 应方法。
   *
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ColorSpaceManager {
    /**
     * 获取色域类型。
     *
     * @returns { ColorSpace } 返回色域类型枚举值。
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 9 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getColorSpaceName(): ColorSpace;

    /**
     * 获取色域白点值。
     *
     * @returns { Array<double> } 返回色域白点值[x, y]。
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 9 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getWhitePoint(): Array<double>;

    /**
     * 获取色域gamma值。
     *
     * @returns { double } 返回色域gamma值。
     * @throws { BusinessError } 18600001 - The parameter value is abnormal. [since 9 - 22]
     * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
     * @crossplatform [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getGamma(): double;
  }

  /**
   * 创建标准色域对象。
   *
   * @param { ColorSpace } colorSpaceName - 标准色域类型枚举值。<br>UNKNOWN与CUSTOM不可用于直接创建色域对象。
   * @returns { ColorSpaceManager } 返回当前创建的色域对象实例。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Incorrect parameter type.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 18600001 - The parameter value is abnormal.
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function create(colorSpaceName: ColorSpace): ColorSpaceManager;

  /**
   * 创建用户自定义色域对象。
   *
   * @param { ColorSpacePrimaries } primaries - 色域标准三原色。
   * @param { double } gamma - 色域gamma值，取值为大于0的浮点数。
   * @returns { ColorSpaceManager } 返回当前创建的色域对象实例。
   *     <br>色域类型定义为[ColorSpace]{@link colorSpaceManager.ColorSpace}枚举值`CUSTOM`。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Incorrect parameter type.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 18600001 - The parameter value is abnormal.
   * @syscap SystemCapability.Graphic.Graphic2D.ColorManager.Core
   * @crossplatform [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function create(primaries: ColorSpacePrimaries, gamma: double): ColorSpaceManager;
}

export default colorSpaceManager;