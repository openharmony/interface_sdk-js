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
 * 图像效果模块提供了处理图像的基础能力，包括亮度调节、模糊化、灰度调节和智能取色等。effectKit用于离线处理图像（如pixelmap、png、jpeg）以获得视觉效果，而uiEffect则实时接入渲染服务，针对屏幕帧缓存进行处理以
 * 获得动态视觉效果。
 *
 * 该模块提供以下图像效果相关的常用功能：
 *
 * - [Filter]{@link effectKit.Filter}：效果类，用于添加指定效果到图像源。
 * - [Color]{@link effectKit.Color}：颜色类，用于保存取色的结果。
 * - [ColorPicker]{@link effectKit.ColorPicker}：智能取色器。
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
   * 图像效果类，用于将指定的效果添加到输入图像中。在调用Filter的方法前，需要先通过[createEffect]{@link effectKit.createEffect}创建一个Filter实例。
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
     * 将模糊效果添加到效果链表中，返回链表的头节点。
     *
     * > **说明：**
     * >
     * > 该接口为静态模糊接口，为静态图像提供模糊化效果，如果要对组件进行实时渲染的模糊，可以使用[动态模糊](docroot://ui/arkts-blur-effect.md)。
     *
     * @param { double } radius - 模糊半径，单位为px。模糊效果与所设置的值成正比，值越大效果越明显。
     * @returns { Filter } 返回已添加的图像效果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    blur(radius: double): Filter;

    /**
     * 将模糊效果添加到效果链表中，返回链表的头节点。
     *
     * > **说明：**
     * >
     * > 该接口为静态模糊接口，为静态图像提供模糊化效果，如果要对组件进行实时渲染的模糊，可以使用[动态模糊](docroot://ui/arkts-blur-effect.md)。
     *
     * @param { double } radius - 模糊半径，单位为px。模糊效果与所设置的值成正比，值越大效果越明显。
     * @param { TileMode } tileMode - 着色器效果平铺模式。影响图像边缘的模糊效果。目前仅支持CPU渲染，所以目前着色器平铺模式仅支持DECAL。
     * @returns { Filter } 返回已添加的图像效果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    blur(radius: double, tileMode: TileMode): Filter;

    /**
     * 将带有椭圆形遮罩的渐变模糊效果添加到效果链表中，返回链表的头节点。
     *
     * @param { double } blurRadius - 模糊半径，取正整数，单位为px，模糊半径大于60px时自动截断。 模糊效果与所设置的模糊半径值成正比，值越大效果越明显。
     * @param { EllipticalMaskCenter } center - 椭圆形遮罩的中心点坐标。
     * @param { EllipticalMaskRadius } maskRadius - 椭圆形遮罩在X轴和Y轴方向的半径。
     * @param { FractionStop[] } fractionStops - 渐变模糊位置与程度数组。 位置参数值须严格递增，二元数组个数不能小于2，最大为12。
     * @returns { Filter } 返回已添加的图像效果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter;

    /**
     * 将高亮效果添加到效果链表中，返回链表的头节点。
     *
     * @param { double } bright - 高亮程度，取值范围为[0, 1]，取值为0时图像保持不变，取值为1时图像达到预设的最大亮度。
     * @returns { Filter } 返回已添加的图像效果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    brightness(bright: double): Filter;

    /**
     * 将灰度效果添加到效果链表中，返回链表的头节点。
     *
     * @returns { Filter } 返回已添加的图像效果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    grayscale(): Filter;

    /**
     * 将反转效果添加到效果链表中，返回链表的头节点。
     *
     * @returns { Filter } 返回已添加的图像效果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    invert(): Filter;

    /**
     * 将自定义效果添加到效果链表中，返回链表的头节点。
     *
     * @param { Array<double> } colorMatrix - 自定义颜色矩阵。 <br>用于创建效果滤镜的 5x4 大小的矩阵，矩阵元素取值范围为[0, 1]，0和1代表的是矩阵中对应位置的颜色通道的权重，0代表该颜色通道不参与计算，1代表该颜色通道参与计算并保持原始权重。
     * @returns { Filter } 返回已添加的图像效果。
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
     * 获取已添加链表效果的源图像的image.PixelMap。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap()}替代。
     *
     * @returns { image.PixelMap } image.PixelMap.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead effectKit.Filter#getEffectPixelMap
     */
    getPixelMap(): image.PixelMap;

    /**
     * 获取已添加链表效果的源图像的image.PixelMap，使用CPU渲染，使用Promise异步回调。
     *
     * @returns { Promise<image.PixelMap> } - Promise used to return image.PixelMap of the source image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getEffectPixelMap(): Promise<image.PixelMap>;

    /**
     * 获取已添加链表效果的源图像的image.PixelMap，支持指定渲染模式（CPU渲染或者GPU渲染），使用Promise异步回调。
     *
     * @param { boolean } useCpuRender -  指定渲染模式。true表示使用CPU渲染，false表示使用GPU渲染。
     * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
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
   * 取色类，用于从一张图像数据中获取它的主要颜色。在调用ColorPicker的方法前，需要先通过
   * [createColorPicker]{@link effectKit.createColorPicker(source: image.PixelMap)}创建一个ColorPicker实例。
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
     * 读取图像主色的颜色值，结果写入[Color]{@link effectKit.Color}里，使用Promise异步回调。该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。
     *
     * @returns { Promise<Color> } Promise对象。返回图像主色对应的颜色值，失败时返回错误信息。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainColor(): Promise<Color>;

    /**
     * 读取图像主色的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。
     *
     * @returns { Color } Color实例，即图像主色对应的颜色值，失败时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainColorSync(): Color;

    /**
     * 读取图像中占比最多的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。该接口使用中位切分算法划分颜色空间，获取占比最多的颜色空间的平均颜色。
     *
     * @returns { Color } Color实例，即图像占比最多的颜色值，失败时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getLargestProportionColor(): Color;

    /**
     * 读取图像占比靠前的颜色值，个数由`colorCount`指定，结果写入[Color]{@link effectKit.Color}的数组里，使用同步方式返回。
     *
     * @param { int } colorCount - Number of colors to obtain. The value range is [1, 10]. If a non-integer is passed in
     *     , the value will be rounded down.
     * @returns { Array<Color | null> } Array of colors, sorted by proportion.
     *     - If the number of colors obtained is less than the value of colorCount, the array size is the actual number
     *     obtained.
     *     - If the colors fail to be obtained or the number of colors obtained is less than 1, [null] is returned.
     *     - If the value of colorCount is greater than 10, an array holding the first 10 colors with the top
     *     proportions is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

    /**
     * 读取图像占比靠前的颜色值以及对应比例，个数由`colorCount`指定，结果写入Color与其对应比例的字典中，使用同步方式返回。
     *
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.。
     * @returns { Map<Color | null, double | null> } Map of colors and percentages, sorted by proportion.
     *     - If the number of colors obtained is less than the value of colorCount, the map size is
     *     the actual number obtained.
     *     - If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.
     *     - If the value of colorCount is greater than 10, a map holding the first 10 colors with
     *     the top proportions is returned.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>;

    /**
     * 获取图像中完全透明的像素占比。
     *
     * @returns { double } 完全透明的像素占比，比例的取值范围为[0,1]。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 23 dynamic&static
     */
    getAlphaZeroTransparentProportion(): double;

    /**
     * 获取图像颜色深浅度。
     *
     * @returns { PictureShadeDegree } 图像颜色深浅度。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getShadeDegree(): PictureShadeDegree;

    /**
     * 获取图像内容复杂度。
     *
     * @returns { PictureComplexityDegree } 图像内容复杂度。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getComplexityDegree(): PictureComplexityDegree;

    /**
     * 读取图像饱和度最高的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。
     *
     * @returns { Color } Color实例，即图像饱和度最高的颜色值，失败时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getHighestSaturationColor(): Color;

    /**
     * 读取图像平均的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。
     *
     * @returns { Color } Color实例，即图像平均的颜色值，失败时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAverageColor(): Color;

    /**
     * 判断图像是否为黑白灰颜色，返回true或false。
     *
     * @param { long } color - 需要判断是否黑白灰色的颜色值，取值范围[0x0, 0xFFFFFFFF]。
     * @returns { boolean } 如果图像为黑白灰颜色，则返回true；否则返回false。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isBlackOrWhiteOrGrayColor(color: long): boolean;

    /**
     * Gets the Morandi shadow color from the dominant color.
     *
     * @returns { Color } - returns the Morandi shadow color converted from the dominant color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getMorandiShadowColor(): Color;

    /**
     * Generates a stronger immersion color that merges with the background color and is deeper than
     * the background color.
     *
     * @returns { Color } - returns the stronger immersion color that both blends with the background
     *     and appears deeper than the background.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getDeepenImmersionColor(): Color;

    /**
     * Generates an immersive background color that creates an immersive visual effect.
     *
     * @returns { Color } - returns the immersive background color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveBackgroundColor(): Color;

    /**
     * Generates an immersive foreground color that creates an immersive visual effect for text and content.
     *
     * @returns { Color } - returns the immersive foreground color.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveForegroundColor(): Color;

    /**
     * Discriminates the light and dark degree of the picture.
     *
     * @returns { PictureLightDegree } - returns the picture light and dark degree.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    discriminatePictureLightDegree(): PictureLightDegree;

    /**
     * Gets the reverse color based on the discriminatePictureLightDegree result.
     * When the picture light degree is EXTREMELY_LIGHT_COLOR_PICTURE, returns black color.
     * For other picture light degree types, returns white color.
     *
     * @returns { Color } - returns the reverse color for UI themes or contrast calculations.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getReverseColor(): Color;
  }

  /**
   * 图片深浅程度
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 26.0.0 dynamic&static
   */
  enum PictureLightDegree {

    /**
     * 未知光色度图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE = 0,

    /**
     * 极浅色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_LIGHT_COLOR_PICTURE = 1,

    /**
     * Light color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    LIGHT_COLOR_PICTURE = 2,

    /**
     * Dark color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    DARK_COLOR_PICTURE = 3,

    /**
     * Extremely dark color picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_DARK_COLOR_PICTURE = 4,

    /**
     * Flowery picture.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    FLOWERY_PICTURE = 5,

    /**
     * Extremely flowery picture.
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
   * 颜色类，用于保存取色的结果。
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
     * 红色分量值，取值范围[0x0, 0xFF]。
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
     * 绿色分量值，取值范围[0x0, 0xFF]。
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
     * 蓝色分量值，取值范围[0x0, 0xFF]。
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
     * 透明通道分量值，取值范围[0x0, 0xFF]。
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
   * 通过传入的PixelMap创建Filter实例。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。可通过图片解码或直接创建获得，具体可见
   *     [Image Kit简介](docroot://media/image/image-overview.md)。
   * @returns { Filter } 返回不带任何效果的Filter链表头节点，失败时返回null。
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform [since 14]
   * @form [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * 通过传入的PixelMap创建ColorPicker实例，使用Promise异步回调。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。
   * @returns { Promise<ColorPicker> } - Promise对象。返回创建的ColorPicker实例。
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
   * 通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用Promise异步回调。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。
   * @param { Array<double> } region - 指定图片的取色区域。 数组第三个元素需大于第一个元素，第四个元素需大于第二个元素。
   * @returns { Promise<ColorPicker> } - Promise对象。返回创建的ColorPicker实例。
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
   * 通过传入的PixelMap创建ColorPicker实例，使用callback异步回调。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
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
   * 通过传入的PixelMap创建选定取色区域的ColorPicker实例，使用callback异步回调。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。 可通过图片解码或直接创建获得，具体可见[Image Kit简介](docroot://media/image/image-overview.md)。
   * @param { Array<double> } region - 指定图片的取色区域。 数组第三个元素需大于第一个元素，第四个元素需大于第二个元素。
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
   * 着色器效果平铺模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 14 dynamic
   * @since 23 static
   */
  enum TileMode {

    /**
     * 如果着色器效果超出其原始边界，剩余区域使用着色器的边缘颜色填充。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    CLAMP = 0,

    /**
     * 在水平和垂直方向上重复着色器效果。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    REPEAT = 1,

    /**
     * 在水平和垂直方向上重复着色器效果，交替镜像图像，以便相邻图像始终接合。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * 仅在其原始边界内渲染着色器效果。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 23 static
     */
    DECAL = 3,
  }

  /**
   * 图片颜色深浅度的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureShadeDegree {

    /**
     * 默认值，图片颜色深浅度未知。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_SHADE_DEGREE_PICTURE = 0,

    /**
     * 图片颜色深浅度为极浅。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_LIGHT_PICTURE = 1,

    /**
     * 图片颜色深浅度为较浅。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_LIGHT_PICTURE = 2,

    /**
     * 图片颜色深浅度为略浅。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    LIGHT_PICTURE = 3,

    /**
     * 图片颜色深浅度为一般。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_SHADE_PICTURE = 4,

    /**
     * 图片颜色深浅度为较深。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    DARK_PICTURE = 5,

    /**
     * 图片颜色深浅度为极深。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXTREMELY_DARK_PICTURE = 6,
  }

  /**
   * 图片内容复杂度的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum PictureComplexityDegree {

    /**
     * 默认值，图片内容复杂度未知。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    UNKNOWN_COMPLEXITY_DEGREE_PICTURE = 0,

    /**
     * 图片内容复杂度为纯净。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PURE_PICTURE = 1,

    /**
     * 图片内容复杂度为一般。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    MODERATE_COMPLEXITY_PICTURE = 2,

    /**
     * 图片内容复杂度为复杂。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VERY_FLOWERY_PICTURE = 3,
  }

  /**
   * 定义椭圆形遮罩的中心点。
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
   * 定义椭圆形遮罩的半径。
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