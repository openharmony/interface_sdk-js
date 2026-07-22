
'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import image from '../../@ohos.multimedia.image';
import drawing from '../../@ohos.graphics.drawing';
import matrix4 from '../../@ohos.matrix4';
import cacheDownload from '../../@ohos.request.cacheDownload';
import { BusinessError } from '../../@ohos.base';
import { DrawableDescriptor } from '../../@ohos.arkui.drawableDescriptor';
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { ResourceStr, ResourceColor, ColorFilter, EdgeWidths, ColorMetrics, VoidCallback } from "./units";
import { ImageFit, ImageRepeat, CopyOptions } from "./enums";
import { Resource } from '../../global/resource';
import { ComponentBuilder, CustomBuilder, Builder, CustomBuilderT, ConstructorT } from './builder';
import { AttributeModifier, CommonMethod, PointLightStyle, PixelMap, ContentTransitionEffect } from "./common";

/**
 * type DrawingColorFilter = drawing.ColorFilter
 * 
 * 颜色滤波器对象。
 *
 * @typedef { drawing.ColorFilter } DrawingColorFilter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DrawingColorFilter = drawing.ColorFilter;

/**
 * type ResolutionQuality = image.ResolutionQuality;
 * 
 * 画质效果等级类型。
 *
 * @typedef { image.ResolutionQuality } ResolutionQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export type ResolutionQuality = image.ResolutionQuality;

/**
 * type DrawingLattice = drawing.Lattice
 * 
 * 将图片按照矩形网格进行划分。
 *
 * @typedef { drawing.Lattice } DrawingLattice
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DrawingLattice = drawing.Lattice;

/**
 * type ImageMatrix = matrix4.Matrix4Transit
 * 
 * 当前的矩阵对象。
 *
 * @typedef { matrix4.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ImageMatrix = matrix4.Matrix4Transit;

/**
 * type RequestDownloadInfo = cacheDownload.DownloadInfo
 * 
 * 用于描述网络图片加载失败或异常时的下载信息。该对象包含本次下载任务的资源信息、网络信息以及性能统计信息，
 * 可用于定位加载异常的具体原因。
 *
 * @typedef { cacheDownload.DownloadInfo } RequestDownloadInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type RequestDownloadInfo = cacheDownload.DownloadInfo;

/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @since 23 static
 */
export declare enum ImageRenderMode {

  /**
     * Render according to the original image, including colors.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Original = 0,

  /**
     * Render the image as a template image, ignoring the color information of the image.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Template = 1
}

/**
 * 指定图像内容。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageContent {

  /**
     * 空图像。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMPTY = 0
}

/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DynamicRangeMode {

  /**
     * 不受限动态范围，最大限度进行图片提亮。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HIGH = 0,

  /**
     * 受限动态范围，受限进行图片提亮。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONSTRAINT = 1,

  /**
     * 标准动态范围，不进行图片提亮。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  STANDARD = 2
}

/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageInterpolation {

  /**
     * Do not use interpolated image data.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
     * Low usage of interpolated image data.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Low = 1,

  /**
     * Interpolated image data is used moderately.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Medium = 2,

  /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  High = 3
}

/**
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageRotateOrientation {

  /**
     * 读取图片携带的EXIF元数据作为显示方向，支持旋转和镜像。
     * 
     * [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}和
     * [DrawableDescriptor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#drawabledescriptor10)
     * 类型
     * 的图片不包含头信息，调用该接口时图片显示效果不变化。
     * 
     * ![imageRotateOrientation_0](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_0.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AUTO = 0,

  /**
     * 默认按照当前图片的像素数据进行显示，不做任何处理。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UP = 1,

  /**
     * 将当前图片顺时针旋转90度后显示。
     * 
     * ![imageRotateOrientation_2](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_2.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RIGHT = 2,

  /**
     * 将当前图片顺时针旋转180度后显示。
     * 
     * ![imageRotateOrientation_3](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_3.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWN = 3,

  /**
     * 将当前图片顺时针旋转270度后显示。
     * 
     * ![imageRotateOrientation_4](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_4.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LEFT = 4,

  /**
     * 将当前图片水平翻转后显示。
     * 
     * ![imageRotateOrientation_5](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_5.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UP_MIRRORED = 5,

  /**
     * 将当前图片水平翻转再顺时针旋转90度后显示。
     * 
     * ![imageRotateOrientation_6](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_6.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RIGHT_MIRRORED = 6,

  /**
     * 将当前图片垂直翻转后显示。
     * 
     * ![imageRotateOrientation_7](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_7.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOWN_MIRRORED = 7,

  /**
     * 将当前图片水平翻转再顺时针旋转270度后显示。
     * 
     * ![imageRotateOrientation_8](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_8.png)
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LEFT_MIRRORED = 8
}

/**
 * 图片数据加载成功和解码成功时触发回调的返回对象。
 * 
 * 当组件的参数类型为[AnimatedDrawableDescriptor]
 * {@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时该事件不触发。
 *
 * @interface ImageCompleteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ImageCompleteEvent {

  /**
     * 图片的宽。
     * 
     * 单位：像素
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: int;

  /**
     * 图片的高。
     * 
     * 单位：像素
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: int;

  /**
     * 组件的宽。
     * 
     * 单位：像素
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentWidth: int;

  /**
     * 组件的高。
     * 
     * 单位：像素
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentHeight: int;

  /**
     * 图片加载成功的状态值。
     * 
     * **说明：**
     * 
     * 返回的状态值为0时，表示图片数据加载成功。返回的状态值为1时，表示图片解码成功。
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  loadingStatus: int;

  /**
     * 图片实际绘制的宽度。
     * 
     * 单位：像素
     * 
     * **说明：**
     * 
     * 仅在loadingStatus返回1时有效。
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentWidth: int;

  /**
     * 图片实际绘制的高度。
     * 
     * 单位：像素
     * 
     * **说明：**
     * 
     * 仅在loadingStatus返回1时有效。
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentHeight: int;

  /**
     * 实际绘制内容相对于组件自身的x轴偏移。
     * 
     * 单位：像素
     * 
     * **说明：**
     * 
     * 仅在loadingStatus返回1时有效。
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentOffsetX: int;

  /**
     * 实际绘制内容相对于组件自身的y轴偏移。
     * 
     * 单位：像素
     * 
     * **说明：**
     * 
     * 仅在loadingStatus返回1时有效。
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  contentOffsetY: int;
}

/**
 * 图片解码尺寸。
 * 
 * > **说明：**
 * >
 * > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，
 * > 会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。
 *
 * @interface ImageSourceSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ImageSourceSize {

  /**
     * 图片解码尺寸宽度。
     * 
     * 单位：vp
     *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: double;

  /**
     * 图片解码尺寸高度。
     * 
     * 单位：vp
     *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: double;
}

/**
 * 设置图片占位图。
 *
 * @interface ImageAlt
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ImageAlt {

  /**
   * 加载过程中的占位图。
   *
   * @type { ?(ResourceStr | PixelMap) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ResourceStr | PixelMap;

  /**
   * 加载失败的占位图。
   *
   * @type { ?(ResourceStr | PixelMap) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  error?: ResourceStr | PixelMap;
}

/**
 * 指定颜色填充内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ColorContent {

  /**
     * 重置[fillColor]{@link fillColor}接口，效果上与不设置[fillColor]{@link fillColor}一致。
     *
   * @type { ColorContent }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static readonly ORIGIN: ColorContent;
}

/**
 * 属性的详细使用指导请参考
 * [添加属性](docroot://ui/arkts-graphics-display.md#添加属性)。除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @extends CommonMethod
 * @interface ImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ImageAttribute extends CommonMethod {

  /**
   * 设置加载时显示的占位图片。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - 图片资源类型。
   * @param { ImageAIOptions } [imageAIOptions] - Options for AI analyzer.
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setImageOptions(
        src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
        imageAIOptions?: ImageAIOptions
    ): this;

  /**
   * 设置加载时显示的占位图片。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - 图片资源类型
   * @param { ImageAIOptions } [imageAIOptions] - AI分析器的选项
   * @param { string } [reloadKey] - 图像重新加载参数
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setImageOptions(
        src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
        imageAIOptions?: ImageAIOptions,
        reloadKey?: string
    ): this;

  /**
     * 设置加载时显示的占位图片。
     *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - 图片资源类型。
   * @param { string } [reloadKey] - AI分析器的参数。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setImageOptions(
        src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
        reloadKey?: string
    ): this;

  /**
     * 设置图片加载过程中和加载失败时的占位图。
     * 
     * > **说明：**
     * >
     * > 通过[ImageAlt]{@link ImageAlt}配置占位图时，
     * > Image会根据用户配置的加载过程中和加载失败的占位图源生效，未配置时默认不显示。
     * 
     * 占位图支持使用[objectFit]{@link objectFit}设置填充效果，与图片的填充效果一致。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { string | Resource | PixelMap | ImageAlt | undefined } value - 设置图片加载过程中和加载失败时的占位图，
     *     支持本地图片（png、jpg、bmp、svg、gif和heif类型），支持
     *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}
     *     类型图片，不支持网络图片。<br>- 支持`Base64`字符串。<br>-支持file://路径前缀的字符串，应用沙箱URI：
     *     file://<bundleName>/<sandboxPath>。应用沙箱路径URI构造可参考
     *     [constructor]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用
     *     [fileUri.getUriFromPath(path)]{@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，
     *     然后传入显示。同时需要保证目录包路径下的文件有可读权限。
     *     <br>当value的值为undefined时，图片加载过程中和加载失败时的占位图显示为空白。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alt(value: string | Resource | PixelMap | ImageAlt | undefined): this;

  /**
     * 设置图片是否跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { boolean | undefined } value - 图片是否跟随系统语言方向。
     *     <br/> 设置undefined时，按默认值处理。<br/>默认值：false，false表示图片不跟随系统语言方向，
     *     true表示图片跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default matchTextDirection(value: boolean | undefined): this;

  /**
     * 设置图片的显示尺寸是否跟随图源尺寸。
     * 
     * 图片组件已设置width、height属性时，fitOriginalSize属性不生效。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { boolean | undefined } value - 图片的显示尺寸是否跟随图源尺寸。<br/> 设置undefined时，按默认值处理。
     *     <br/>默认值：false <br/>**说明：**<br/>当不设置fitOriginalSize或者设置fitOriginalSize为false时，
     *     组件显示大小不跟随图源大小。<br/> 当设置fitOriginalSize为true时，组件显示大小跟随图源大小。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fitOriginalSize(value: boolean | undefined): this;

  /**
     * 设置填充颜色，设置后填充颜色会覆盖在图片上。仅对svg图源生效，设置后会替换svg图片中所有可绘制元素的填充颜色。
     * 如需对png图片进行修改颜色，可以使用
     * [colorFilter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#colorfilter9)。
     * 如果想重置填充颜色可以传入[ColorContent]{@link ColorContent}类型。
     * 支持通过传入[ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics}类型设置P3色域颜色值，
     * 可在支持高色域的设备上获得更丰富的色彩表现。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { ResourceColor | ColorContent | ColorMetrics | undefined } color
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fillColor(color: ResourceColor | ColorContent | ColorMetrics | undefined): this;

  /**
     * 设置图片的填充效果。
     *
   * @param { ImageFit | undefined } value - 图片的填充效果。<br/> 设置undefined时，按默认值处理。
     * <br/> 默认值：ImageFit.Cover
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default objectFit(value: ImageFit | undefined): this;

  /**
     * 设置图片的变换矩阵。通过[ImageMatrix]{@link imageMatrix}对象使用平移、旋转、缩放等函数，
     * 实现宫格缩略图的最佳呈现。
     * SVG类型图源不支持该属性。
     * 
     * 设置[resizable]{@link resizable}、[objectRepeat]{@link objectRepeat}属性时，该属性设置不生效。
     * 该属性只针对图源做处理，不会触发Image组件的回调事件。
     * 
     * 该属性与[objectFit]{@link objectFit}属性强关联，仅在[objectFit]{@link objectFit}属性设置为ImageFit.MATRIX时生效。
     *
   * @param { ImageMatrix | undefined } matrix
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default imageMatrix(matrix: ImageMatrix | undefined): this;

  /**
     * 设置图片的重复样式，从中心点向两边重复，剩余空间不足放下一张图片时会截断。SVG类型图源不支持该属性。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { ImageRepeat | undefined } value - 图片的重复样式。
     * <br/> 设置undefined时，按默认值处理。<br/>默认值：ImageRepeat.NoRepeat
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default objectRepeat(value: ImageRepeat | undefined): this;

  /**
     * 设置图片解码过程中是否对图源自动缩放。降采样解码时图片的部分信息丢失，
     * 因此可能会导致图片质量的下降（如：出现锯齿），
     * 这时可以选择把autoResize设为false，按原图尺寸解码，提升显示效果，但会增加内存占用。
     * 
     * 原图尺寸和显示尺寸不匹配时，图片都会出现些许的失真、模糊。最佳清晰度配置建议：
     * 
     * 图片缩小显示时：.autoResize(false) + .interpolation(.Medium)
     * 
     * 图片放大显示时：.interpolation(.High)
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}和SVG
     * 时设置该属性不生效。
     *
   * @param { boolean | undefined } value - 图片解码过程中是否对图源自动缩放。设置为true时，
     *     组件会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少内存占用。如原图大小为800x120
     *     0，而显示区域大小为200x200，则图片会降采样解码到200x300的尺寸（实际计算过程中会依赖缩放和填充类型的配置，
     *     从而得到的计算结果会有差异），从而大幅度节省图片占用的内存。<br/> 设置undefined时，按默认值处理。
     *     <br/>默认值：false，false表示关闭图源自动缩放，true表示开启图源自动缩放。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoResize(value: boolean | undefined): this;

  /**
     * 设置图片的渲染模式。SVG类型图源不支持该属性。
     * 
     * 设置[ColorFilter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#colorfilter9)时，
     * 该属性设置不生效。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { ImageRenderMode | undefined } value - 图片的渲染模式为原色或黑白。
     *     <br/> 设置undefined时，按默认值处理。<br/>默认值：
     *     ImageRenderMode.Original
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default renderMode(value: ImageRenderMode | undefined): this;

  /**
     * 设置期望展示的图像动态范围。SVG类型图源不支持该属性。
     *
   * @param { DynamicRangeMode | undefined } value - 图像显示的动态范围。
     *     <br/> 设置undefined时，按默认值处理。<br/>默认值：
     *     DynamicRangeMode.STANDARD
   * @returns { ImageAttribute } Returns the instance of the ImageAttribute, Default value is
     *     dynamicRangeMode.Standard.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default dynamicRangeMode(value: DynamicRangeMode | undefined): this;

  /**
     * 设置组件在显示HDR图片时的亮度。
     * 
     * SVG类型图源不支持该属性。
     * 
     * 该属性与
     * [dynamicRangeMode]{@link dynamicRangeMode}属性同时设置时，[dynamicRangeMode]{@link dynamicRangeMode}属性不生效。
     *
   * @param { double | undefined } brightness - 用于调整组件展示HDR图片的亮度，该接口仅对HDR图源生效。
     *    <br/> 设置undefined时，按默认值处理。<br/>默认值：1.0<br/>取值范围：[0.0， 1.0]，小于0和大于1.0时取1.0。
     *    0表示图片按照SDR亮度显示，1.0表示图片按照当前允许的最高HDR亮度显示。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hdrBrightness(brightness: double | undefined): this;

  /**
     * 定义图片插值效果。用于优化图片缩放时的锯齿问题。SVG类型图源不支持该属性。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { ImageInterpolation | undefined } value - 图片的插值效果。
     *     <br/>默认值：ImageInterpolation.Low<br/>设置undefined时，取值为
     *     ImageInterpolation.None。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default interpolation(value: ImageInterpolation | undefined): this;

  /**
     * 设置图片解码尺寸。仅在目标尺寸小于图源尺寸时生效。SVG类型图源和PixelMap资源不支持该属性。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param { ImageSourceSize | undefined } value - 图片解码尺寸参数，降低图片的分辨率，
     *     常用于需要让图片显示尺寸比组件尺寸更小的场景。和ImageFit.None配合使用时可在组件内显
     *     示小图。 <br/> 设置undefined时，按原图解码处理。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default sourceSize(value: ImageSourceSize | undefined): this;

  /**
     * 设置是否同步加载图片。建议加载尺寸较小的本地图片时将syncLoad设为true，因为耗时较短，在主线程上执行即可。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     * 
     * 如果加载图片时出现闪烁，设置syncLoad为true。详情请参见
     * [并发优化]
     * (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response-optimization#
     * section715115119192)。
     *
   * @param { boolean | undefined } value - 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。
     *     <br/> 设置undefined时，按默认值处理。<br/>默认值：
     *     false，false表示异步加载图片，true表示同步加载图片。<br/>阻塞主线程超过6s将导致AppFreeze，具体参考
     *     [AppFreeze（应用冻屏）检测](docroot://dfx/appfreeze-guidelines.md)。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default syncLoad(value: boolean | undefined): this;

  /**
     * 为图像设置颜色滤镜效果。
     * 
     * 设置该属性时，[renderMode]{@link renderMode}属性设置不生效。
     * 
     * 当值为[ResourceColor]{@link ResourceColor}类型时，它将被转换为带有混合模式的
     * [DrawingColorFilter]{@link DrawingColorFilter}。
     *
   * @param { ColorFilter | DrawingColorFilter | undefined } value -  图像颜色的滤镜值。<br/>
     *     [ColorFilter]{@link ColorFilter}、[DrawingColorFilter]{@link DrawingColorFilter}类型及SVG图源的相关说明，
     *     请参考
     *     [colorFilter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#colorfilter9)的接口说明。
     *     [ResourceColor]{@link ResourceColor}类型的输入颜色值，默认按照[DrawingColorFilter]{@link DrawingColorFilter}.
     *     [createBlendModeColorFilter]{@link @ohos.graphics.drawing:drawing.ColorFilter.createBlendModeColorFilter}的
     *     SRC_ATOP模式进行绘制。<br/>当传入undefined时，图片显示无滤镜效果。 [since 26.0.0]
   * @returns { ImageAttribute }
   [since 23]
   * @stagemodelonly
   * @since 23 static
   */
  /**
     * 为图像设置颜色滤镜效果。
     * 
     * 设置该属性时，[renderMode]{@link renderMode}属性设置不生效。
     * 
     * 当值为[ResourceColor]{@link ResourceColor}类型时，它将被转换为带有混合模式的
     * [DrawingColorFilter]{@link DrawingColorFilter}。
     *
   * @param { ColorFilter | DrawingColorFilter | ResourceColor | undefined } value - 图像颜色的滤镜值。<br/>
     *     [ColorFilter]{@link ColorFilter}、[DrawingColorFilter]{@link DrawingColorFilter}类型及SVG图源的相关说明，
     *     请参考
     *     [colorFilter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#colorfilter9)的接口说明。
     *     [ResourceColor]{@link ResourceColor}类型的输入颜色值，默认按照[DrawingColorFilter]{@link DrawingColorFilter}.
     *     [createBlendModeColorFilter]{@link @ohos.graphics.drawing:drawing.ColorFilter.createBlendModeColorFilter}的
     *     SRC_ATOP模式进行绘制。<br/>当传入undefined时，图片显示无滤镜效果。 [since 26.0.0]
   * @returns { ImageAttribute }
   [since 23]
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default colorFilter(value: ColorFilter | DrawingColorFilter | ResourceColor | undefined): this;

  /**
     * 设置图片是否可复制。当copyOption设置为非CopyOptions.None时，支持使用长按、鼠标右击、
     * 快捷组合键'CTRL+C'等方式进行复制。
     * SVG图片不支持复制。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     *
   * @param {  CopyOptions | undefined } value - 图片是否可复制。<br/> 设置undefined时，按默认值处理。
     * <br/>默认值：CopyOptions.None
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default copyOption(value: CopyOptions | undefined): this;

  /**
     * 设置组件默认拖拽效果。
     *
   * @param { boolean | undefined } value - 组件默认拖拽效果，设置为true时，组件可拖拽，绑定的长按手势不生效。
     * <br/> 设置undefined时，按默认值处理。<br />API
     *     version 9及之前，默认值为false。API version 10及之后，默认值为true。
     * <br/> 若用户需要设置自定义手势，则需要将draggable设置为false。设置为false之后，拖拽类事件不
     *     再触发。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default draggable(value: boolean | undefined): this;

  /**
     * 设置点光源样式。
     *
   * @param { PointLightStyle | undefined } value - 点光源样式。设置undefined时，按默认值处理。
   * @returns { ImageAttribute } The attribute of the image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default pointLight(value: PointLightStyle | undefined): this;

  /**
     * 设置SVG图源抗锯齿效果，仅对SVG图源生效。取值范围为$(0.333, 1.333]$，有效数字保留小数点后3位。
     * 
     * 适用于超低分辨率设备（PPI低于200的设备）的SVG图源的锯齿优化，存在一定的性能影响，请谨慎使用。
     *
   * @param { double | undefined } value - SVG图源抗锯齿效果。<br/>设置undefined时，按默认值处理。<br/>默认值：0.0
   * @returns { ImageAttribute } The attribute of the image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default edgeAntialiasing(value: double | undefined): this;

  /**
     * 图片数据加载成功和解码成功时均触发该回调，使用callback异步回调，返回成功加载的图片尺寸。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时该事件
     * 不触发。
     *
   * @param { ImageOnCompleteCallback | undefined } callback
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onComplete(callback: ImageOnCompleteCallback | undefined): this;

  /**
     * 图片加载异常时触发该回调。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时该事件
     * 不触发。
     *
   * @param { ImageErrorCallback | undefined } callback
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onError(callback: ImageErrorCallback | undefined): this;

  /**
     * 当加载的源文件为带动效的SVG格式图片时，SVG动效播放完成时会触发这个回调。
     * 如果动效为无限循环动效，则不会触发这个回调。
     * 
     * 仅支持SVG格式的图片。当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}
     * 时该事件不触发。
     *
   * @param { VoidCallback | undefined } event
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onFinish(event: VoidCallback | undefined): this;

  /**
     * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。<!--RP3--><!--RP3End-->
     * 
     * 不能和[overlay]{@link CommonMethod#overlay}属性同时使用，两者同时设置时overlay中
     * [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性将失效。
     * 该特性依赖设备能力。
     * 
     * 分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析，支持传入
     * [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}进行分析，目前仅支持
     * [RGBA_8888]{@link @ohos.multimedia.image:image.PixelMapFormat}类型，使用方式见
     * [示例5（开启图像AI分析）]
     * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例5开启图像ai分析)。
     * 
     * [alt]{@link alt}占位图不支持分析，[objectRepeat]{@link objectRepeat}属性仅在
     * 取值为ImageRepeat.NoRepeat时支持分析，隐私遮罩属性
     * [obscured]{@link CommonMethod#obscured}打开时不支持分析。
     * 
     * 基于完整原始图像进行分析，设置[clip]{@link CommonMethod#clip(value: boolean)}、
     * [margin]{@link CommonMethod#margin}、
     * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}、
     * [position]{@link CommonMethod#position}和[objectFit]{@link objectFit}属性导致图像显示不完整，
     * 或使用[renderMode]{@link renderMode}设置蒙层，仍基于完整原始图像进行分析。 [copyOption]{@link copyOption}
     * 属性不影响AI分析功能。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时设置该
     * 属性不生效。
     * 
     * > **说明：**
     * >
     * > - 需要配置权限：ohos.permission.INTERNET。
     * >
     * > - 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
   * @param { boolean | undefined} enable - Image组件是否支持AI分析。
     *     <br/>设置为true时，Image组件支持AI分析。设置为false时，Image组件不支持AI分析。<br/>
     *     默认值：false
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableAnalyzer(enable: boolean | undefined): this;

  /**
     * 设置AI分析类型，包括主体识别和文字识别功能，默认全部开启。分析类型不支持动态修改。
     *
   * @param { ImageAnalyzerConfig | undefined } config
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default analyzerConfig(config: ImageAnalyzerConfig | undefined): this;

  /**
     * 设置图像拉伸时可调整大小的图像选项。拉伸对拖拽缩略图以及占位图有效。
     * 
     * 设置合法的 [ResizableOptions]{@link ResizableOptions} 时，
     * objectRepeat属性、antialiased属性和orientation属性设置不生效。
     * 
     * 当设置 top +bottom 大于原图的高或者 left + right 大于原图的宽时
     * [ResizableOptions]{@link ResizableOptions} 属性设置不生效。
     * 
     * 当组件的参数类型为
     * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}和SVG
     * 时设置该属性不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
  * @param { ResizableOptions | undefined } value - 	图像拉伸时可调整大小的图像选项。<br/>
  *     设置undefined时，不拉伸图像。
   * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default resizable(value: ResizableOptions | undefined): this;

  /**
     * 设置是否支持卡片敏感隐私信息。
     *
   * @param { boolean | undefined } supported - 是否支持卡片敏感隐私信息。
     * <br/>默认值为false，表示不支持卡片敏感隐私信息，当设置为true时，隐私模式下图片将显示为半透明底板样
     *     式。<br/>**说明：** <br/>设置null则不敏感。<br/>进入隐私模式需要卡片框架支持。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default privacySensitive(supported: boolean | undefined): this;

  /**
     * 设置图像解码时的图像解码分辨率选项。
     * 
     * 该属性不支持 svg、[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}和
     * [DrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:DrawableDescriptorLoadedResult}
     * 等非解码图片类型。
     *
   * @param { ResolutionQuality | undefined } imageQuality
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default enhancedImageQuality(imageQuality: ResolutionQuality | undefined): this;

  /**
     * 设置图像内容的显示方向。
     * 
     * 该属性对[alt]{@link alt}占位图不生效。
     *
   * @param { ImageRotateOrientation | undefined } orientation - 图像内容的显示方向。<br/>不支持gif和svg类型的图片。
     *     <br/>如果需要显示携带旋转角度信息或翻转
     *     信息的图片，建议使用ImageRotateOrientation.AUTO进行设置。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default orientation(orientation: ImageRotateOrientation | undefined): this;

  /**
     * 开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)，
     * 开启后相关SVG图片显示效果会有变化。
     * 
     * Image组件创建后，不支持动态修改该属性的值。
     *
   * @param { boolean | undefined } enable - 控制是否开启SVG标签解析能力增强功能。
     *     <br/> 设置undefined时，按默认值处理。<br>默认值：false<br>true：支持SVG
     *     解析新能力；false：保持原有SVG解析能力。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default supportSvg2(enable: boolean | undefined): this;

  /**
     * 图片内容发生变化时，触发过渡动效。
     *
   * @param { ContentTransitionEffect | undefined } transition - 过渡动效的类型。
     *     <br/>其中取值为ContentTransitionEffect.OPACITY表示淡入
     *     淡出效果，取值为ContentTransitionEffect.IDENTITY表示无动画效果。
     *     <br/>默认值：ContentTransitionEffect.IDENTITY <br/>设置为undefined或
     *     null时，取默认值ContentTransitionEffect.IDENTITY。<br/>**说明**：对动态图片资源不生效。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentTransition(transition: ContentTransitionEffect | undefined): this;

  /**
     * 设置位图图片边缘是否开启抗锯齿。未通过该接口设置时，默认不开启抗锯齿。SVG类型图片不支持该属性。
     * 
     * > **说明：**
     * >
     * > 如果图片设置了背景色属性([backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)})，
     * > 图片的抗锯齿属性设置为true不会影响背景
     * > 色的锯齿效果。
     * >
     * > 和[resizable]{@link resizable}一起使用时，该属性不生效。
     *
   * @param { boolean | undefined } isAntialiased
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default antialiased(isAntialiased: boolean | undefined): this;
}

/**
 * 图片加载异常时触发此回调。
 * 
 * 当组件的参数类型为
 * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时该事件不触发。
 *
 * @typedef { function } ImageErrorCallback
 * @param { ImageError } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ImageErrorCallback = (error: ImageError) => void;

/**
 * 图片数据加载成功和解码成功时触发该回调。
 * 
 * 当组件的参数类型为
 * [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor.static:AnimatedDrawableDescriptor}时该事件不触发。
 *
 * @typedef { function } ImageOnCompleteCallback
 * @param { ImageCompleteEvent } [loadEvent]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ImageOnCompleteCallback = (loadEvent?: ImageCompleteEvent) => void;

/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageError {

  /**
     * 组件的宽。
     * 
     * 单位：px
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentWidth: int;

  /**
     * 组件的高。
     * 
     * 单位：px
     *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentHeight: int;

  /**
     * 报错信息。
     *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  message: string;

  /**
     * 图片加载异常返回的报错信息，其中code为错误码，message为错误信息。报错信息请参考以下错误信息的详细介绍。
     * 
     * 默认值：{ code : -1, message : "" }
     *
   * @type { ?BusinessError<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  error?: BusinessError<void>;

  /**
     * 网络图片下载的详细信息，包含下载资源、网络、性能等信息。当图片来源为网络图片且下载失败时将携带此字段。
     * 
     * 默认值：null
     *
   * @type { ?RequestDownloadInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  downloadInfo?: RequestDownloadInfo;
}

/**
 * 图像拉伸时可调整大小的图像选项。
 * 
 * **图1** 设置EdgeWidths效果图
 * ![edgewidths](docroot://reference/apis-arkui/arkui-ts/figures/edgewidths.png)
 *
 * @interface ResizableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ResizableOptions {

  /**
     * 边框宽度类型，用于描述组件边框不同方向的宽度。
     * 
     * **说明：**
     * 
     * 只有当bottom和right同时大于0时，该属性生效。
     * 
     * 当设置了top时，图片顶部拉伸，图片的像素值保持不变。
     * 
     * 当设置了right时，图片右部拉伸，图片的像素值保持不变。
     * 
     * 当设置了bottom时，图片底部拉伸，图片的像素值保持不变。
     * 
     * 当设置了left时，图片左部拉伸，图片的像素值保持不变。
     * 
     * 每个方向的宽度默认值为0，传入数字时默认单位为vp。
     * 
     * 设置了EdgeWidths后的效果如图1（设置EdgeWidths效果图）所示。
     *
   * @type { ?EdgeWidths }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  slice?: EdgeWidths;

  /**
     * 矩形网格对象。
     * 
     * **说明：**
     * 
     * 通过@ohos.graphics.drawing的[createImageLattice]{@link @ohos.graphics.drawing:drawing.Lattice.createImageLattice}
     * 接口创建Lattice类型作为入参。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格图像是固定的，不会被拉伸。
     * 其他位置的网格图像会根据slice进行拉伸。
     * 
     * 该参数对[backgroundImageResizable]{@link CommonMethod#backgroundImageResizable}接口不生效。
     * 
     * 传入数字时默认单位为px。
     *
   * @type { ?DrawingLattice }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lattice?: DrawingLattice;
}

/**
 * Defines the Image component.
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - image resource type.
 * @param { ImageAIOptions } [imageAIOptions] - Options for AI analyzer.
 * @returns { ImageAttribute } The attribute of the Image.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Image(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    imageAIOptions?: ImageAIOptions
): ImageAttribute;

/**
 * 定义Image组件。
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - 图片资源类型。
 * @param { ImageAIOptions } [imageAIOptions] - AI分析器的参数。
 * @param { string } [reloadKey] - 用于图像重新加载的选项。
 * @returns { ImageAttribute } Image的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function Image(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    imageAIOptions?: ImageAIOptions,
    reloadKey?: string
): ImageAttribute;

/**
 * 定义Image组件。
 *
 * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src - 图片资源类型。
 * @param { string } [reloadKey] - 用于图像重新加载的选项。
 * @returns { ImageAttribute } The attribute of the Image.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function Image(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    reloadKey?: string
): ImageAttribute;

/**
 * 定义Image组件。它需要在组件属性设置开始时调用setImageOptions。
 * 它需要在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<ImageAttribute> } style - 设置组件属性的回调。
 * @returns { ImageAttribute } Image的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Image(style: CustomBuilderT<ImageAttribute>): ImageAttribute;

/**
 * 扩展图像组件定义
 *
 * @implements ImageAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export declare abstract class ExtendableImage implements ImageAttribute {

  /**
   * 扩展图像组件构造器
   *
   * @param { ConstructorT<T> } factory
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { ImageAIOptions } [imageAIOptions]
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableImage>(
    factory: ConstructorT<T>, 
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    imageAIOptions?: ImageAIOptions
  ): T;

  /**
   * 扩展图像组件构造器
   *
   * @param { ConstructorT<T> } factory
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { ImageAIOptions } [imageAIOptions]
   * @param { string } [reloadKey]
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableImage>(
    factory: ConstructorT<T>, 
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    imageAIOptions?: ImageAIOptions,
    reloadKey?: string
  ): T;

  /**
   * 扩展图像组件
   *
   * @param { ConstructorT<T> } factory
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { string } [reloadKey]
   * @returns { T }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  @ComponentBuilder
  static $_instantiate<T extends ExtendableImage>(
    factory: ConstructorT<T>, 
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined,
    reloadKey?: string
  ): T;

  /**
   * 扩展图像组件构入口
   *
   * @param { CustomBuilderT<T> } styles
   * @param { ConstructorT<T> } factory
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  @Builder
  static _instantiateImpl<T extends ExtendableImage>(
    styles: CustomBuilderT<T>, 
    factory: ConstructorT<T>
  ): void;

  /**
   * 设置图像组件选项
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { ImageAIOptions } [imageAIOptions]
   * @returns { ExtendableImage }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setImageOptions(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
    imageAIOptions?: ImageAIOptions
  ): this;

  /**
   * 设置图像组件选项
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { ImageAIOptions } [imageAIOptions]
   * @param { string } [reloadKey]
   * @returns { ExtendableImage }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setImageOptions(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
    imageAIOptions?: ImageAIOptions,
    reloadKey?: string
  ): this;

  /**
   * 设置图像组件选项
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined } src
   * @param { string } [reloadKey]
   * @returns { ExtendableImage }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  public setImageOptions(
    src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent | undefined, 
    reloadKey?: string
  ): this;
}
