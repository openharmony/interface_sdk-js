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
 * 图像效果模块提供了处理图像的基础能力，包括亮度调节、模糊化、灰度调节和智能取色等，
 * 适用于图片编辑应用中添加滤镜效果、应用启动页背景图模糊处理、UI主题色自动提取、图片配色分析等场景。
 *
 * 本模块用于离线处理[image.PixelMap]{@link image.PixelMap}以获得视觉效果，
 * 而uiEffect（UI效果服务）则实时接入渲染服务，针对屏幕帧缓存进行处理以获得动态视觉效果。
 *
 * 该模块提供以下图像效果相关的常用功能：
 *
 * - [Filter]{@link effectKit.Filter}：效果类，用于将指定效果添加到效果链表中，通过链式调用实现多种图像效果的组合处理。
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
   * 图像效果类，用于通过链式调用将指定效果添加到效果链表中，适用于图片滤镜处理、视觉效果增强、图像美化等场景。
   * 在调用Filter的方法前，需要先通过[createEffect]{@link effectKit.createEffect}创建一个Filter实例。
   * 在添加效果后，需调用[getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap()}获取处理后的图像。
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
     * 将模糊效果添加到效果链表中，返回链表的实例。着色器平铺模式使用DECAL，如需指定平铺模式，
     * 可使用[blur]{@link effectKit.Filter.blur(radius: double, tileMode: TileMode)}接口。
     * 常用于实现背景虚化效果、隐私信息遮挡、毛玻璃背景效果、弹窗背景模糊等场景。
     *
     * > **说明：**
     * >
     * > 该接口为静态模糊接口，为静态图像提供模糊化效果，如果要对组件进行实时渲染的模糊，可以使用[动态模糊](docroot://ui/arkts-blur-effect.md)。
     *
     * @param { double } radius - 模糊半径，单位为px，取值范围为[0, +∞)。模糊半径值越大，模糊效果越明显。传入负数时无效果。
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    blur(radius: double): Filter;

    /**
     * 将模糊效果添加到效果链表中，返回链表的实例。支持选择着色器效果平铺模式，
     * 常用于实现背景虚化效果、隐私信息遮挡、毛玻璃背景效果、弹窗背景模糊等场景。
     *
     * > **说明：**
     * >
     * > 该接口为静态模糊接口，为静态图像提供模糊化效果，如果要对组件进行实时渲染的模糊，可以使用[动态模糊](docroot://ui/arkts-blur-effect.md)。
     *
     * @param { double } radius - 模糊半径，单位为px，取值范围为[0, +∞)。模糊半径值越大，模糊效果越明显。传入负数时无效果。
     * @param { TileMode } tileMode - 着色器效果平铺模式。影响图像边缘的模糊效果。
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
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
     * @param { FractionStop[] } fractionStops - 渐变模糊位置与程度数组。数组元素为二元数组，第一个元素表示位置，第二个元素表示模糊程度。
     *     位置取值范围为[0, 1]，椭圆中心对应位置0，椭圆边界对应位置1。模糊程度取值范围为[0, 1]，0表示无模糊，大于1的值自动转为1。
     *     位置参数值需严格递增，数组长度不能小于2，最大为12。
     * @returns { Filter } 返回已添加的图像效果。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter;

    /**
     * 将高亮效果添加到效果链表中，返回链表的实例。该方法通过调整图像亮度实现高亮效果，
     * 常用于暗图增亮处理、图片预览亮度增强、夜间模式图片适配等场景。
     *
     * @param { double } bright - 高亮程度，取值范围为[0, 1]，取值为0时图像保持不变，取值为1时图像亮度提升到最大值。超出范围时自动修正为0。
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    brightness(bright: double): Filter;

    /**
     * 将灰度效果添加到效果链表中，返回链表的实例。该方法将彩色图像转换为灰度图像，通过加权计算RGB值得到灰度值。
     * 常用于黑白风格照片生成、图片预处理去色、灰度图标制作等场景。
     *
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    grayscale(): Filter;

    /**
     * 将反转效果添加到效果链表中，返回链表的实例。该方法将图像的RGB颜色值进行反转，
     * 常用于实现底片效果、图片艺术处理、夜间模式适配等场景。
     *
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    invert(): Filter;

    /**
     * 通过自定义颜色矩阵对图像进行颜色变换处理，将效果添加到效果链表中，返回链表的实例。
     * 常用于实现预设滤镜不支持的自定义颜色效果，如复古色调、冷暖色调调整等场景。
     *
     * @param { Array<double> } colorMatrix - 自定义颜色矩阵。用于创建效果滤镜的4x5大小的矩阵，数组长度必须为20，
     * 前4列对应R、G、B、A通道的变换系数，第5列为常量偏移值。建议元素取值为[-1, 1]，超出此范围可能导致颜色值溢出或产生非预期效果。数组长度不为20时返回null。
     * @returns { Filter } 返回已添加效果的Filter实例，用于继续添加效果或获取处理后的图像。
     * @throws { BusinessError } 401 - 输入参数错误。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
     * 获取已添加链表效果的源图像的image.PixelMap。常用于图片处理后需要保存或显示结果的场景。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃，建议使用[getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap()}替代。
     *
     * @returns { image.PixelMap } 已添加效果的源图像的image.PixelMap。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead effectKit.Filter#getEffectPixelMap
     */
    getPixelMap(): image.PixelMap;

    /**
     * 获取已添加链表效果的源图像的image.PixelMap，默认使用CPU渲染，使用Promise异步回调。
     * 如需指定渲染模式，可使用[getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap(useCpuRender : boolean)}接口。
     * 常用于图片处理后需要保存或显示结果的场景。
     *
     * > **说明：**
     * >
     * > 该方法默认使用CPU渲染，着色器平铺模式仅支持DECAL，其他模式（CLAMP、REPEAT、MIRROR）暂不支持。
     * 如需使用GPU渲染或了解渲染模式对TileMode的影响，请参见[TileMode]{@link effectKit.TileMode}和
     * [getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap(useCpuRender : boolean)}。
     *
     * @returns { Promise<image.PixelMap> } - Promise对象。返回已添加链表效果的源图像的image.PixelMap。
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
     * 使用GPU渲染时，着色器效果平铺模式[TileMode]{@link effectKit.TileMode}的支持范围与CPU渲染不同，详见TileMode说明。
     * @returns { Promise<image.PixelMap> } - Promise对象。返回已添加链表效果的源图像的image.PixelMap。
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
   * 取色类，用于从一张图像数据中获取它的主要颜色，适用于UI主题色提取、图片配色分析、智能配色推荐等场景，
   * 可帮助开发者基于图片内容动态生成和谐的配色方案。在调用ColorPicker的方法前，需要先通过
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
     * 读取图像主色的颜色值，结果写入[Color]{@link effectKit.Color}里，使用Promise异步回调。
     * 该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。
     * 常用于应用主题色自动提取、UI界面根据图片自动配色、音乐播放器根据专辑封面动态调整背景色等场景。
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
     * 读取图像主色的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。
     * 该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。
     * 常用于应用主题色自动提取、UI界面根据图片自动配色、音乐播放器根据专辑封面动态调整背景色等场景。
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
     * 读取图像中占比最多的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。
     * 该接口使用中位切分算法划分颜色空间，获取占比最多的颜色空间的平均颜色。
     * 常用于识别图片中面积最大的颜色区域，如图标背景色提取、图片内容分析等场景。
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
     * 常用于提取图片中占比最高的多个颜色，如多色调配色方案生成、图片色彩分布分析等场景。
     *
     * @param { int } colorCount - 需要获取的颜色个数，向下取整。在OpenHarmony 6.1之前，取值范围为[1, 10]，取色个数大于10视为取前10个；从OpenHarmony 6.1开始，取值范围为[1, 20]，取色个数大于20视为取前20个。
     * @returns { Array<Color | null> } Color数组，即图像占比前`colorCount`的颜色值数组，按占比排序。
     *     - 当实际读取的特征色个数小于`colorCount`时，数组大小为实际特征色个数。
     *     - 取色失败或取色个数小于1返回`[null]`。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

    /**
     * 同步返回图像占比靠前的颜色值及其对应比例，个数由`colorCount`指定。
     *
     * @param { int } colorCount - 颜色值及对应比例的个数，向下取整。在OpenHarmony 6.1之前，取值范围为[1, 10]，取色个数大于10视为取前10个；从OpenHarmony 6.1开始，取值范围为[1, 20]，取色个数大于20视为取前20个。
     * @returns { Map<Color | null, double | null> } 图像占比前`colorCount`的颜色值与对应比例的字典，比例的取值范围为[0,1]。
     *     - 当实际读取的特征色个数小于`colorCount`时，字典大小为实际特征色个数。
     *     - 取色失败或取色个数小于1返回`Map()`。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
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
     * @returns { double } 完全透明的像素占比，比例的取值范围为[0, 1]。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 23 dynamic&static
     */
    getAlphaZeroTransparentProportion(): double;

    /**
     * 获取图像颜色深浅度。当无法判别图像颜色深浅度时，返回默认值UNKNOWN_SHADE_DEGREE_PICTURE。
     *
     * @returns { PictureShadeDegree } 图像颜色深浅度。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getShadeDegree(): PictureShadeDegree;

    /**
     * 获取图像内容复杂度。当无法判别图像内容复杂度时，返回默认值UNKNOWN_COMPLEXITY_DEGREE_PICTURE。
     *
     * @returns { PictureComplexityDegree } 图像内容复杂度。
     * @throws { BusinessError } 202 - 权限校验失败，非系统应用调用系统接口。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic
     * @since 23 static
     */
    getComplexityDegree(): PictureComplexityDegree;

    /**
     * 读取图像饱和度最高的颜色值，结果写入[Color]{@link effectKit.Color}里，使用同步方式返回。
     * 常用于提取图像中最鲜艳的颜色，如UI主题强调色提取、图标高亮色选择等场景。
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
     * 常用于获取图片整体色调，如图片色调统计、背景色自适应等场景。
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
     * 判断指定颜色值是否为黑白灰颜色，返回true或false。
     * 常用于判断颜色是否属于无彩色系，如智能配色过滤、图片颜色分类等场景。
     *
     * @param { long } color - 需要判断是否黑白灰色的颜色值，格式为0xAARRGGBB，取值范围为[0x0, 0xFFFFFFFF]。
     * @returns { boolean } true表示颜色为黑白灰色，false表示颜色不是黑白灰色。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform [since 14]
     * @form [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isBlackOrWhiteOrGrayColor(color: long): boolean;

    /**
     * 从图像的主色中获取莫兰迪阴影色，并将结果写入[Color]{@link effectKit.Color}。该接口通过特定的颜色转换算法，将主色调转换为具有莫兰迪风格的阴影色调。
     *
     * @returns { Color } - Color实例，即图像莫兰迪阴影色对应的颜色值。当图像处理失败或无法获取莫兰迪阴影色时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getMorandiShadowColor(): Color;

    /**
     * 生成与背景色融合且比背景色更深的强沉浸感颜色，并将结果写入[Color]{@link effectKit.Color}里。该接口通过颜色混合算法，创建一种既与背景色协调又具有更强沉浸感的颜色效果。
     *
     * @returns { Color } - Color实例，即图像强沉浸色对应的颜色值。当图像处理失败或无法生成沉浸色时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getDeepenImmersionColor(): Color;

    /**
     * 生成能够创造沉浸式视觉效果的沉浸式背景色，并将结果写入[Color]{@link effectKit.Color}里。该接口基于主色生成适合作为沉浸式背景的颜色值。
     *
     * @returns { Color } - Color实例，即图像沉浸式背景色对应的颜色值。当图像处理失败或无法生成沉浸式背景色时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveBackgroundColor(): Color;

    /**
     * 生成能够创造沉浸式视觉效果的沉浸式前景色，并将结果写入[Color]{@link effectKit.Color}里。该接口基于主色生成适合作为沉浸式前景的颜色值。
     *
     * @returns { Color } - Color实例，即图像沉浸式前景色对应的颜色值。当图像处理失败或无法生成沉浸式前景色时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getImmersiveForegroundColor(): Color;

    /**
     * 获取图片的明亮程度。当无法判别图片明亮程度时，返回UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE。
     *
     * @returns { PictureLightDegree } - 图像颜色明亮程度。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    discriminatePictureLightDegree(): PictureLightDegree;

    /**
     * 基于图像亮度判别结果生成反向颜色，并将结果写入[Color]{@link effectKit.Color}里。根据
     * [discriminatePictureLightDegree]{@link effectKit.ColorPicker.discriminatePictureLightDegree}接口获取的图片明亮类型得到一个反色，
     * 仅极亮色图片（EXTREMELY_LIGHT_COLOR_PICTURE）类型返回黑色，其他类型返回白色。用于界面主题或对比度计算。
     *
     * @returns { Color } - Color实例，即图像反向颜色对应的颜色值。当图像处理失败或无法生成反向颜色时返回null。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    getReverseColor(): Color;
  }

  /**
   * 图片颜色明亮度的枚举。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @stagemodelonly
   * @form
   * @since 26.0.0 dynamic&static
   */
  enum PictureLightDegree {

    /**
     * 未知明亮度的图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    UNKNOWN_LIGHT_COLOR_DEGREE_PICTURE = 0,

    /**
     * 极亮色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_LIGHT_COLOR_PICTURE = 1,

    /**
     * 亮色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    LIGHT_COLOR_PICTURE = 2,

    /**
     * 暗色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    DARK_COLOR_PICTURE = 3,

    /**
     * 极暗色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    EXTREMELY_DARK_COLOR_PICTURE = 4,

    /**
     * 花色图片。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @stagemodelonly
     * @form
     * @since 26.0.0 dynamic&static
     */
    FLOWERY_PICTURE = 5,

    /**
     * 极花色图片。
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
   * 颜色类，用于保存取色的结果，适用于配合ColorPicker获取图像主色、占比最多颜色、饱和度最高颜色等场景，
   * 可帮助开发者便捷地获取和传递图像取色结果。
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
     * 红色分量值，取值范围为[0x0, 0xFF]。
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
     * 绿色分量值，取值范围为[0x0, 0xFF]。
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
     * 蓝色分量值，取值范围为[0x0, 0xFF]。
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
     * 透明通道分量值，取值范围为[0x0, 0xFF]。
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
   * 通过传入的PixelMap创建Filter实例。后续可通过链式调用添加各种图像效果，
   * 最终通过[getEffectPixelMap]{@link effectKit.Filter.getEffectPixelMap()}获取处理后的图像。
   *
   * @param { image.PixelMap } source - image模块创建的PixelMap实例。可通过图片解码或直接创建获得，具体可见
   *     [Image Kit简介](docroot://media/image/image-overview.md)。
   * @returns { Filter } 返回一个未添加任何效果的Filter实例，失败时返回null。
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
   * @throws { BusinessError } 401 - 输入参数错误。
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
   * @throws { BusinessError } 401 - 输入参数错误。
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
     * @param { AsyncCallback<ColorPicker> } callback - 回调函数。返回创建的ColorPicker实例。
   * @throws { BusinessError } 401 - 输入参数错误。
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
     * @param { AsyncCallback<ColorPicker> } callback - 回调函数。返回创建的ColorPicker实例。
   * @throws { BusinessError } 401 - 输入参数错误。
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
   * CPU渲染下，着色器平铺模式仅支持DECAL。GPU渲染下，DECAL、CLAMP、REPEAT、MIRROR模式均支持。
   */

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