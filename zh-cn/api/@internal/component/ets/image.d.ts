/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * 作为Image组件的入参对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type DrawableDescriptor = import ('../api/@ohos.arkui.drawableDescriptor').DrawableDescriptor;

/**
 * 颜色滤波器对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawingColorFilter = import('../api/@ohos.graphics.drawing').default.ColorFilter;

/**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 */
declare type ResolutionQuality = import('../api/@ohos.multimedia.image').default.ResolutionQuality;

/**
 * 将图片按照矩形网格进行划分。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawingLattice = import('../api/@ohos.graphics.drawing').default.Lattice;

/**
 * 当前的矩阵对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare type ImageMatrix = import ('../api/@ohos.matrix4').default.Matrix4Transit;

/**
 * 图片加载异常返回的错误信息。
 *
 * 以下是错误信息的详细介绍：ImageError的error属性为错误信息对象，其中code为错误码，message为错误信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare type BusinessError<T = void> = import('../api/@ohos.base').BusinessError<T>;

/**
 * 用于描述网络图片加载失败或异常时的下载信息。该对象包含本次下载任务的资源信息、网络信息以及性能统计信息，
 * 可用于定位加载异常的具体原因。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare type RequestDownloadInfo = import('../api/@ohos.request.cacheDownload').default.DownloadInfo;

/**
 * 图片的插值效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageRenderMode {
  /**
   * 原色渲染模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Original = 0,

  /**
   * Render the image as a template image, ignoring the color information of the image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Template = 1
}

/**
 * 指定图像内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ImageContent {
  /**
   * 空图像。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  EMPTY = 0
}

/**
 * 期望展示的图像动态范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DynamicRangeMode {
  /**
   * 不受限动态范围，最大限度进行图片提亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  HIGH = 0,

  /**
   * 受限动态范围，受限进行图片提亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  CONSTRAINT = 1,

  /**
   * 标准动态范围，不进行图片提亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  STANDARD = 2
}

/**
 * 图片的插值效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageInterpolation {
  /**
   * 最近邻插值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * Low usage of interpolated image data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Low = 1,

  /**
   * Interpolated image data is used moderately.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Medium = 2,

  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  High = 3
}

/**
* 期望的图像内容显示方向。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice
 * @since 14 dynamic
 */
declare enum ImageRotateOrientation {

  /**
   * 读取图片携带的EXIF元数据作为显示方向，支持旋转和镜像。
   *
   * [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}和
   * [DrawableDescriptor]{@link DrawableDescriptor}类型的图片不包含头信息，调用该接口时图片显示效果不变化。
   *
   * ![imageRotateOrientation_0](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_0.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  AUTO = 0,

  /**
   * 默认按照当前图片的像素数据进行显示，不做任何处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  UP = 1,

  /**
   * 将当前图片顺时针旋转90度后显示。
   *
   * ![imageRotateOrientation_2](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_2.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  RIGHT = 2,

  /**
   * 将当前图片顺时针旋转180度后显示。
   *
   * ![imageRotateOrientation_3](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_3.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  DOWN = 3,

  /**
   * 将当前图片顺时针旋转270度后显示。
   *
   * ![imageRotateOrientation_4](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_4.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  LEFT = 4,

  /**
   * 将当前图片水平翻转后显示。
   *
   * ![imageRotateOrientation_5](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_5.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  UP_MIRRORED = 5,

  /**
   * 将当前图片水平翻转再顺时针旋转90度后显示。
   *
   * ![imageRotateOrientation_6](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_6.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  RIGHT_MIRRORED = 6,

  /**
   * 将当前图片垂直翻转后显示。
   *
   * ![imageRotateOrientation_7](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_7.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  DOWN_MIRRORED = 7,

  /**
   * 将当前图片水平翻转再顺时针旋转270度后显示。
   *
   * ![imageRotateOrientation_8](docroot://reference/apis-arkui/arkui-ts/figures/imageRotateOrientation_8.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  LEFT_MIRRORED = 8
}

/**
* Image为图片组件，常用于在应用中显示图片。Image支持加载[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}、
* [ResourceStr]{@link ResourceStr}和
* [DrawableDescriptor]{@link DrawableDescriptor}类型的数据源，支持png、jpg、jpeg、bmp、svg、webp、gif、
*  heif和tiff类型的图片格式，不支持apng和svga格式。
*
* > **说明：**
*
* > - 从API version 23开始，图片类型新增支持tiff格式。
* >
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
* >
* > - 使用快捷组合键对Image组件复制时，Image组件必须处于获焦状态，如何获焦请参考[设置组件是否可获焦]
*     (docroot://ui/arkts-common-events-focus-event.md#设置组件是否可获焦)。
* > Image组件默认不获焦，需将[focusable]{@link CommonMethod#focusable}属性设置为true，即可使用Tab键将焦点切换到组件上，
* > 再将[focusOnTouch]{@link CommonMethod#focusOnTouch}属性设置为true，即可实现点击获焦。
* >
* > - 图片格式支持SVG图源，SVG标签文档请参考[SVG标签说明]{@link ./common}。
* >
* > - 动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时，通过回调启动动画，当节点不可见时，停止
* > 动画。可见性状态的判断是通过[onVisibleAreaChange]
* >   {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}事件触发的，
* >   当可见阈值ratios大于0时，表明Image处于可见状态。
* >
* > - Image组件播放GIF动图时，帧时长取自GIF文件中各帧的delay time字段。当某帧的时长值小于等于0时，
* >   系统会将其修正为100ms；
* >   当某帧的时长值大于0时，系统直接使用该原始值，不做最小帧时长限制。
* >
* > - 如果图片加载过程中出现白色块，请参考
* >   [Image白块问题解决方案]
* >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution)。
* >   如果图片加载时间过长，
* >   请参考[预置图片资源加载优化]
* >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve-
* >    performance#section91526132216)。
* >
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface ImageInterface {

  /**
   * 通过图片数据源获取图片，用于后续渲染展示。
   *
   * Image组件加载图片失败或图片尺寸为0时，图片组件大小自动为0，不跟随父组件的布局约束。
   *
   * Image组件默认按照居中裁剪，例如组件宽高设置相同，原图长宽不等，此时按照中间区域进行裁剪。
   *
   * Image加载成功且组件不设置宽高时，其显示大小自适应父组件。
   *
   * > **说明：**
   * >
   * > - Image直接传入URL可能会带来的潜在性能问题，例如：(1) 大图加载时无法提前下载，
   * >   白块显示的时间较长；(2) 小图设置同步
   * >   加载，在弱网环境下，可能会阻塞UI线程造成冻屏问题；(3) 在快速滑动的瀑布流中，
   * >   无法提前对即将要显示的图片进行下载，
   * >   导致滑动白块较多。不同场景下，性能问题会有不同的表现，建议将网络下载部分与Image的显示剥离，可提前下载或者异步
   * >   下载。如果图片加载过程中出现白色块，请参考
   * >   [Image白块解决方案]
   * >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution)。
   * >   如果图片加载时间过长，请参考
   * >   [预置图片资源加载优化](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-
   * >    improve-performance)。
   * >
   * > - src由有效值（可正常解析并加载的图片资源）切换为无效值（无法解析或加载的图片路径）时，组件保持显示此前成功加载
   * >   的图片内容，不进行清除或重置操作。
   * >
   * > - 当Image组件入参为[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型时，
   * >   只有当PixelMap对象发生变化（即指向一个新的PixelMap实例），Image组件才能感知到数据的变化。
   * >   仅修改PixelMap对象的内容（如像素值）而不更换对象引用，无法触发数据变化的感知。
   * >
   * > - Image组件入参为Base64字符串时，Base64字符串通用格式为`data:image/subtype;base64,Base64EncodedData`，
   * >   其中subtype为类型声明，Base64 EncodedData为数据对应的base64编码，其他为固定字符串。
   * >   例如：png图像对应的入参为`data:image/png;base64,iVBORw0KGgo...`。
   * >
   * >   1. image/subType用于声明数据内容的类型。从API版本26.0.0开始，Image组件接受任意`data:image/xxx;base64,
   * >      Base64EncodedData`格式的Base64字符串，具
   * >      体图片类型由系统多媒体能力根据实际数据内容识别，无需枚举所有支持的MIME类型。对于API版本26.0.0之前版本，
   * >      Image组件不会强制校验声明的类型与Base64解码后的实际图片格式是否完全一致。在部分场景下，
   * >      即使声明的类型与真实格
   * >      式不一致，图片仍可能正常显示。为避免未来行为变化或未知问题，建议始终保持类型与实际图片格式一致。
   * >
   * >   2. Image组件从API版本26.0.0开始支持通过`data:image/*;base64,Base64EncodedData`的通配写法，对于API版本26.0.0之前
   * >      版本，Image组件不支持`data:image/*;base64,Base64EncodedData`的通配写法，subType必须显式声明具体的图片类型。
   * >
   * >   3. Image组件从API版本26.0.0开始支持通过Base64加载SVG图片，对于API版本26.0.0之前版本，
   * >      Image组件不支持通过Base64字符串形式加载SVG图片。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor } src - 图片的数据源，支持本地图片和网络图片，引用方式请参考
   *     [加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。
   *     1. PixelMap格式为像素图，常用于图片编辑的场景。
   *     2. ResourceStr包含Resource和string格式。<br>string格式可用于加载网络图片和本地图片，常用于加载网络图片。
   *        当[使用相对路径显示图片](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例25使用
   *        相对路径显示图片)时，不支持跨包/跨模块调用该Image组件，建议使用Resource格式来管理需全局使用的图片资源。
   *     从DevEco Studio 6.0.0 Beta2版本开始，新建工程或模块时，
   *     默认创建的模块不会对非resource目录下的资源进行打包，需使能相关开关：
   *     模块的build-profile.json5中buildOption > resOptions > copyCodeResource > enable 设置为true，详见
   *     [resOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-
   *      profile#table1476161719356)中相关介绍。
   *     - 支持`Base64`字符串。<br>- 传入的字符串为https网络图片地址时，建议参考
   *     [示例2（下载与显示静态网络图片）]
   *     (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例2下载与显示
   *      静态网络图片)。
   *     - 支持file://路径前缀的字符串，应用沙箱URI：file://<bundleName>/<sandboxPath>。应用沙箱路径URI构造可参考
   *     [constructor]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用
   *     [fileUri.getUriFromPath(path)]{@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为
   *     应用沙箱URI，然后传入
   *     显示。同时需要保证目录包路径下的文件有可读权限。<br>Resource格式可以跨包/跨模块访问资源文件，
   *     是访问本地图片的推荐方式，具体示例参考
   *     [访问跨HAP/HSP包资源](docroot://quick-start/resource-categories-and-access.md#访问跨haphsp包资源)。
   *     3. 当传入资源id或name为普通图片时，生成DrawableDescriptor对象。传入
   *        [AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}类型可播放
   *        PixelMap数组动画。
   *     **说明：**
   *     - ArkTS卡片上支持gif图片格式动效，但仅在显示时播放一次。
   *     - ArkTS卡片上不支持http://等网络相关路径前缀和file://路径前缀的字符串。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;

  /**
   * src新增[ImageContent]{@link ImageContent}类型，可指定对应的图形内容。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent } src - 图片的数据源，支持本地图片和网络图片，
   *     引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。<br>PixelMap、ResourceStr和
   *     DrawableDescriptor的使用请参考
   *     [Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)的src参数说明。
   *     传入[ImageContent]{@link ImageContent}类型，指定图像内容。
   *     **说明：**
   *     - ArkTS卡片上支持gif图片格式动效，但仅在显示时播放一次。
   *     - ArkTS卡片上不支持http://等网络相关路径前缀和file://路径前缀的字符串。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent): ImageAttribute;

  /**
   * 获取图片，支持通过reloadKey参数触发图片重新加载。当reloadKey的值发生变化时，将不使用缓存重新加载图片。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent } src
   * @param { string } [reloadKey]
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent, reloadKey?: string): ImageAttribute;

  /**
   * Image新增[ImageAIOptions]{@link ImageAIOptions}参数，为组件设置AI分析选项。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor } src - 图片的数据源，支持本地图片和网络图片，引用方式请参考
   *     [加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。<br>PixelMap、ResourceStr和
   *     DrawableDescriptor的
   *     使用请参考[Image](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#image-1)的src参数说明。
   *     **说明：**
   *     - ArkTS卡片上支持gif图片格式动效，但仅在显示时播放一次。
   *     - ArkTS卡片上不支持http://等网络相关路径前缀和file://路径前缀的字符串。
   * @param { ImageAIOptions } imageAIOptions - 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor, imageAIOptions: ImageAIOptions): ImageAttribute;

  /**
   * 获取图片，支持通过[ImageAIOptions]{@link ImageAIOptions}参数设置AI分析选项。当reloadKey的值发生变化时，
   * 将不使用缓存重新加载图片。
   *
   * @param { PixelMap | ResourceStr | DrawableDescriptor } src
   * @param { ImageAIOptions } [imageAIOptions]
   * @param { string } [reloadKey]
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (src: PixelMap | ResourceStr | DrawableDescriptor,
      imageAIOptions?: ImageAIOptions, reloadKey?: string): ImageAttribute;
}

/**
* 图片解码尺寸。
*
* > **说明：**
* >
* > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，
*   会出现外层元素@since版本号高于内层元素版本号
*   的情况，但这不影响接口的使用。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface ImageSourceSize {

  /**
   * Set width.
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Set width.
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Set width.
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set width.
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set width.
   *
   * Anonymous Object Rectification.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  width: number;

  /**
   * Set height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * Set height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * Set height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set height.
   * Anonymous Object Rectification.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  height: number;
}

/**
* 指定颜色填充内容。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare class ColorContent {

  /**
   * 重置[fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)}接口，效果上与不设置
   * [fillColor]{@link ImageAttribute#fillColor(value: ResourceColor)}一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  static readonly ORIGIN: ColorContent;
}

/**
* Image为图片组件，常用于在应用中显示图片。Image支持加载[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}、
* [ResourceStr]{@link ResourceStr}和[DrawableDescriptor]{@link DrawableDescriptor}类型的数据源，
* 支持png、jpg、jpeg、bmp、
* svg、webp、gif、heif和tiff类型的图片格式，不支持apng和svga格式。
*
* > **说明：**
*
* > - 从API version 23开始，图片类型新增支持tiff格式。
* >
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
* >
* > - 使用快捷组合键对Image组件复制时，Image组件必须处于获焦状态，如何获焦请参考[设置组件是否可获焦]
* >   (docroot://ui/arkts-common-events-focus-event.md#设置组件是否可获焦)。Image组件默认不获焦，
* >   需将[focusable]{@link CommonMethod#focusable}属性设置为true，即可使用Tab键将焦点切换到组件上，再将
* >   [focusOnTouch]{@link CommonMethod#focusOnTouch}属性设置为true，即可实现点击获焦。
* >
* > - 图片格式支持SVG图源，SVG标签文档请参考[SVG标签说明]{@link ./common}。
* >
* > - 动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时，
* >   通过回调启动动画，当节点不可见时，停止动画。
* >   可见性状态的判断是通过[onVisibleAreaChange]
* >   {@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
* >   事件触发的，当可见阈值ratios大于0时，表明Image处于可见状态。
* >
* > - Image组件播放GIF动图时，帧时长取自GIF文件中各帧的delay time字段。当某帧的时长值小于等于0时，
* >   系统会将其修正为100ms；
* >   当某帧的时长值大于0时，系统直接使用该原始值，不做最小帧时长限制。
* >
* > - 如果图片加载过程中出现白色块，请参考[Image白块问题解决方案]
* >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution)。
* >   如果图片加载时间过长，
* >   请参考[预置图片资源加载优化]
* >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-improve-
* >    performance#section91526132216)。
* >
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class ImageAttribute extends CommonMethod<ImageAttribute> {
  /**
   * 设置图片加载过程中显示的占位图。
   * 
   * 占位图支持使用[objectFit]{@link ImageAttribute#objectFit}设置填充效果，与图片的填充效果一致。
   * 
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置
   * 该属性不生效。
   *
   * @param { string | Resource } value - 设置图片加载过程中显示的占位图，
   *     支持本地图片（png、jpg、bmp、svg、gif和heif类型），支持
   *     [PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型图片，不支持网络图片。
   *     - 支持`Base64`字符串。
   *     - 支持file://路径前缀的字符串，应用沙箱URI：file://<bundleName>/<sandboxPath>。应用沙箱路径URI构造可参考
   *     [constructor]{@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用
   *     [fileUri.getUriFromPath(path)]{@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，
   *     然后传入显示。同时需要保证目录包路径下的文件有可读权限。
   *     默认值：null
   *     由有效值（可正常解析并加载的图片资源）切换为无效值（无法解析或加载的图片路径）时，
   *     组件保持显示此前成功加载的图片内容，不进行清除或重置操
   *     作。 [since 7 - 11]
   * @param { string | Resource | PixelMap } value - 设置图片加载过程中显示的占位图，
   *     支持本地图片（png、jpg、bmp、svg、gif和
   *     heif类型），支持[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型图片，不支持网络图片。
   *     - 支持`Base64`字符串。
   *     - 支持file://路径前缀的字符串，应用沙箱URI：file://<bundleName>/<sandboxPath>。
   *       应用沙箱路径URI构造可参考[constructor]
   *       {@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用[fileUri.getUriFromPath(path)]
   *       {@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，然后传入显示。
   *       同时需要保证目录包路径下的
   *       文件有可读权限。
   *      默认值：null
   *      由有效值（可正常解析并加载的图片资源）切换为无效值（无法解析或加载的图片路径）时，
   *      组件保持显示此前成功加载的图片内容，
   *      不进行清除或重置操作。 [since 12]
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  alt(value: string | Resource | PixelMap): ImageAttribute;

  /**
   * 设置图片加载过程中和加载失败时的占位图。
   *
   * > **说明：**
   * >
   * > 通过[ImageAlt]{@link ImageAlt}配置占位图时，Image会根据用户配置的加载过程中和加载失败的占位图源生效，
   * > 未配置时默认不显示。
   *
   * 占位图支持使用[objectFit]{@link ImageAttribute#objectFit}设置填充效果，与图片的填充效果一致。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ResourceStr | PixelMap | ImageAlt } src - 设置图片加载过程中和加载失败时的占位图，
   *     支持本地图片（png、jpg、bmp、svg、
   *     gif和heif类型），支持[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型图片，不支持网络图片。
   *     - 支持`Base64`字符串。
   *     - 支持file://路径前缀的字符串，应用沙箱URI：file://<bundleName>/<sandboxPath>。
   *       应用沙箱路径URI构造可参考[constructor]
   *       {@link @ohos.file.fileuri:fileUri.FileUri#constructor}。沙箱路径需要使用[fileUri.getUriFromPath(path)]
   *       {@link @ohos.file.fileuri:fileUri.getUriFromPath}方法将路径转换为应用沙箱URI，然后传入显示。
   *       同时需要保证目录包路径下的文
   *        件有可读权限。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  alt(src: ResourceStr | PixelMap | ImageAlt): ImageAttribute;

  /**
   * 设置图片是否跟随系统语言方向，在RTL语言环境下显示镜像翻转显示效果。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { boolean } value - 图片是否跟随系统语言方向。
   *     默认值：false，false表示图片不跟随系统语言方向，true表示图片跟随系统语言方向，
   *     在RTL语言环境下显示镜像翻转显示效果。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  matchTextDirection(value: boolean): ImageAttribute;

  /**
   * 设置图片的显示尺寸是否跟随图源尺寸。
   *
   * 图片组件已设置width、height属性时，fitOriginalSize属性不生效。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]
   * {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时设置该属性不生效。
   *
   * @param { boolean } value - 图片的显示尺寸是否跟随图源尺寸。
   *     默认值：false
   *     **说明：**
   *      当不设置fitOriginalSize或者设置fitOriginalSize为false时，组件显示大小不跟随图源大小。
   *      当设置fitOriginalSize为true时，组件显示大小跟随图源大小。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fitOriginalSize(value: boolean): ImageAttribute;

  /**
   * 设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用
   * [colorFilter]{@link ImageAttribute#colorFilter(value: ColorFilter | DrawingColorFilter)}。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ResourceColor } value - 设置填充颜色。
   *     **说明：**
   *       默认不对组件进行填充。当传入异常值时，系统将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。
   *       从API version 21开始，当[supportSvg2]{@link ImageAttribute#supportSvg2}设置为true时，
   *       fillColor依赖SVG图源中fill属性
   *       的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。当supportSvg2设置为false时，
   *       fillColor生效，替换SVG图片中所有可
   *       绘制元素的填充颜色。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  fillColor(value: ResourceColor): ImageAttribute;

  /**
   * 设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用
   * [colorFilter]{@link ImageAttribute#colorFilter(value: ColorFilter | DrawingColorFilter)}。
   * 如果想重置填充颜色可以传入
   * [ColorContent]{@link ColorContent}类型。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ResourceColor | ColorContent } color - 设置填充颜色。 <br/>**说明：**<br/>
   *     默认不对组件进行填充。当传入异常值时，系统
   *     将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。
   *     从API version 21开始，当[supportSvg2]{@link ImageAttribute#supportSvg2}设置为true时，
   *     fillColor依赖SVG图源中fill属
   *     性的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  fillColor(color: ResourceColor | ColorContent): ImageAttribute;

  /**
   * 设置填充颜色。仅对SVG图源生效，设置后会替换SVG图片中所有可绘制元素的填充颜色。如需对png图片进行修改颜色，可以使用
   * [colorFilter]{@link ImageAttribute#colorFilter(value: ColorFilter | DrawingColorFilter)}。
   * 如果想重置填充颜色可以传入
   * [ColorContent]{@link ColorContent}类型。支持通过传入[ColorMetrics]{@link ../../../arkui/Graphics:ColorMetrics}
   * 类型设置
   * P3色域颜色值<!--Del-->，从API version 24开始，支持BT2020色域颜色值<!--DelEnd-->，
   * 可在支持高色域的设备上获得更丰富的色彩表现。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ResourceColor | ColorContent | ColorMetrics } color - 设置填充颜色。
   *     **说明：**
   *       默认不对组件进行填充。当传入异常值时，系统将使用默认的主题色：浅色模式下为黑色，深色模式下为白色。
   *       从API version 21开始，当[supportSvg2]{@link ImageAttribute#supportSvg2}设置为true时，
   *       fillColor依赖SVG图源中fill属性的参数配置。当SVG图源中fill属性为'none'时，fillColor不生效。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  fillColor(color: ResourceColor | ColorContent | ColorMetrics): ImageAttribute;

  /**
   * 设置图片的填充效果。未通过该接口设置时，默认为ImageFit.Cover，保持宽高比进行缩小或者放大。
   *
   * @param { ImageFit } value - 图片的填充效果。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  objectFit(value: ImageFit): ImageAttribute;

  /**
   * 设置图片的变换矩阵。通过[ImageMatrix]{@link ImageAttribute#imageMatrix}对象使用平移、旋转、缩放等函数，
   * 实现宫格缩略图的最佳呈现。
   * SVG类型图源不支持该属性。
   *
   * 设置[resizable]{@link ImageAttribute#resizable}、[objectRepeat]{@link ImageAttribute#objectRepeat}属性时，
   * 该属性设置不生
   * 效。该属性只针对图源做处理，不会触发Image组件的回调事件。
   *
   * 该属性与[objectFit]{@link ImageAttribute#objectFit}属性强关联，仅在
   * [objectFit]{@link ImageAttribute#objectFit}属性设置为
   * ImageFit.MATRIX时生效。
   *
   * @param { ImageMatrix } matrix - 图片的变换矩阵。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  imageMatrix(matrix: ImageMatrix): ImageAttribute;

  /**
   * 设置图片的重复样式，从中心点向两边重复，剩余空间不足放下一张图片时会截断。SVG类型图源不支持该属性。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ImageRepeat } value - 图片的重复样式。<br/>默认值：ImageRepeat.NoRepeat
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  objectRepeat(value: ImageRepeat): ImageAttribute;

  /**
   * 设置图片解码过程中是否对图源自动缩放。降采样解码时图片的部分信息丢失，
   * 因此可能会导致图片质量的下降（如：出现锯齿），这时可以选择把
   * autoResize设为false，按原图尺寸解码，提升显示效果，但会增加内存占用。
   *
   * 原图尺寸和显示尺寸不匹配时，图片都会出现些许的失真、模糊。最佳清晰度配置建议：
   *
   * 图片缩小显示时：.autoResize(false) + .interpolation(.Medium)
   *
   * 图片放大显示时：.interpolation(.High)
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 和SVG时设置该属性不生效。
   *
   * @param { boolean } value - 图片解码过程中是否对图源自动缩放。设置为true时，
   *     组件会根据显示区域的尺寸决定用于绘制的图源尺寸，有利于减少
   *     内存占用。如原图大小为800x1200，而显示区域大小为200x200，
   *     则图片会降采样解码到200x300的尺寸（实际计算过程中会依赖缩放和填充类型的配
   *     置，从而得到的计算结果会有差异），从而大幅度节省图片占用的内存。
   *     默认值：false，false表示关闭图源自动缩放，true表示开启图源自动缩放。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  autoResize(value: boolean): ImageAttribute;

  /**
   * 设置图片的渲染模式。SVG类型图源不支持该属性。
   *
   * 设置[ColorFilter]{@link ImageAttribute#colorFilter(value: ColorFilter | DrawingColorFilter)}时，该属性设置不生效。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]
   * {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时设置该属性不生效。
   *
   * @param { ImageRenderMode } value - 图片的渲染模式为原色或黑白。<br/>默认值：ImageRenderMode.Original
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  renderMode(value: ImageRenderMode): ImageAttribute;

  /**
   * 设置期望展示的图像动态范围。SVG类型图源不支持该属性。
   *
   * @param { DynamicRangeMode } value - 图像显示的动态范围。<br/>默认值：DynamicRangeMode.STANDARD
   * @returns { ImageAttribute } Returns the instance of the ImageAttribute, Default value is
   *     dynamicRangeMode.Standard.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  dynamicRangeMode(value: DynamicRangeMode): ImageAttribute;

  /**
   * 设置组件在显示HDR图片时的亮度。
   *
   * SVG类型图源不支持该属性。
   *
   * 该属性与[dynamicRangeMode]{@link ImageAttribute#dynamicRangeMode}属性同时设置时，
   * [dynamicRangeMode]{@link ImageAttribute#dynamicRangeMode}属性不生效。
   *
   * @param { number } brightness - 用于调整组件展示HDR图片的亮度，该接口仅对HDR图源生效。
   *     默认值：1.0
   *     取值范围：[0.0，1.0]，小于0和大于1.0时取1.0。0表示图片按照SDR亮度显示，
   *     1.0表示图片按照当前允许的最高HDR亮度显示。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  hdrBrightness(brightness: number): ImageAttribute;

  /**
   * 定义图片插值效果。用于优化图片缩放时的锯齿问题。SVG类型图源不支持该属性。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { ImageInterpolation } value - 图片的插值效果。
   *     默认值：ImageInterpolation.Low
   *     设置undefined时，取值为ImageInterpolation.None。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interpolation(value: ImageInterpolation): ImageAttribute;

  /**
   * 设置图片解码尺寸。仅在目标尺寸小于图源尺寸时生效。SVG类型图源和PixelMap资源不支持该属性。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { object } value - Decoding size of the image. This parameter can be used to reduce the image resolution
   *     when the image display size needs to be smaller than the component size. When this parameter is used with
   *     **ImageFit.None** of the [objectFit]{@link ImageAttribute#objectFit} API, a small image can be displayed in the
   *     component. [since 7 - 17]
   * @param { ImageSourceSize } value - 图片解码尺寸参数，降低图片的分辨率，
   *     常用于需要让图片显示尺寸比组件尺寸更小的场景。和
   *     [objectFit]{@link ImageAttribute#objectFit}接口的ImageFit.None配合使用时可在组件内显示小图。 [since 18]
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  sourceSize(value: ImageSourceSize): ImageAttribute;

  /**
   * 设置是否同步加载图片。建议加载尺寸较小的本地图片时将syncLoad设为true，因为耗时较短，在主线程上执行即可。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * 如果加载图片时出现闪烁，设置syncLoad为true。详情请参见[并发优化]
   * (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-click-to-click-response-
   *  optimization#section715115119192)。
   *
   * @param { boolean } value - 是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。
   *     <br/>默认值：false，false表示异
   *     步加载图片，true表示同步加载图片。
   *     阻塞主线程超过6s将导致AppFreeze，具体参考[AppFreeze（应用冻屏）检测](docroot://dfx/appfreeze-guidelines.md)。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  syncLoad(value: boolean): ImageAttribute;

  /**
   * 为图像设置颜色滤镜效果。
   *
   *
   * 设置该属性时，[renderMode]{@link ImageAttribute#renderMode}属性设置不生效。
   *
   * @param { ColorFilter } value
   *     1. 给图像设置颜色滤镜效果，入参为一个的4x5的RGBA转换矩阵。
   *     2. 从API version12开始支持@ohos.graphics.drawing的ColorFilter类型作为入参。
   *     **说明：**
   *     API version 11及之前，SVG类型图源不支持该属性。
   *     从API version 12开始，该接口中的DrawingColorfilter类型支持在原子化服务中使用。
   *     其中，SVG类型的图源只有设置了stroke属性
   *     （无论是否有值）才会生效。<br/>从API version 21开始，
   *     当[supportSvg2]{@link ImageAttribute#supportSvg2}属性设置为true时，
   *     colorFilter属性对整个SVG图源起作用。 [since 9 - 11]
   * @param { ColorFilter | DrawingColorFilter } value
   *     1. 给图像设置颜色滤镜效果，入参为一个的4x5的RGBA转换矩阵。<br/>2.
   *     从API version12开始支持@ohos.graphics.drawing的
   *        ColorFilter类型作为入参。
   *     **说明：** <br/>API version 11及之前，SVG类型图源不支持该属性。
   *     从API version 12开始，该接口中的DrawingColorfilter类型支持在原子化服务中使用。
   *     其中，SVG类型的图源只有设置了stroke属性
   *     无论是否有值）才会生效。<br/>从API version 21开始，
   *     当[supportSvg2]{@link ImageAttribute#supportSvg2}属性设置为true时，
   *     colorFilter属性对整个SVG图源起作用。 [since 12]
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  colorFilter(value: ColorFilter | DrawingColorFilter): ImageAttribute;

  /**
   * 为图像设置颜色滤镜效果。
   *
   * 设置该属性时，[renderMode]{@link ImageAttribute#renderMode}属性设置不生效。
   *
   * 当值为[ResourceColor]{@link ResourceColor}类型时，
   * 它将被转换为带有混合模式的[DrawingColorFilter]{@link DrawingColorFilter}。
   *
   * @param { ColorFilter | DrawingColorFilter | ResourceColor } value - 图像颜色的滤镜值。
   *     [ColorFilter]{@link ColorFilter}、[DrawingColorFilter]{@link DrawingColorFilter}类型及SVG图源的相关说明，请参考
   *     [colorFilter]{@link ImageAttribute#colorFilter(value: ColorFilter | DrawingColorFilter)}的接口说明。
   *     [ResourceColor]{@link ResourceColor}类型的输入颜色值，默认按照[DrawingColorFilter]{@link DrawingColorFilter}.
   *     [createBlendModeColorFilter]{@link @ohos.graphics.drawing:drawing.ColorFilter.createBlendModeColorFilter
   *     (color: common2D.Color, mode: BlendMode)}的SRC_ATOP模式进行绘制。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorFilter(value: ColorFilter | DrawingColorFilter | ResourceColor): ImageAttribute;

  /**
   * 设置图片是否可复制。当copyOption设置为非CopyOptions.None时，支持使用长按、鼠标右击、
   * 快捷组合键'CTRL+C'等方式进行复制。
   * SVG图片不支持复制。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * @param { CopyOptions } value - 图片是否可复制。<br/>默认值：CopyOptions.None
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  copyOption(value: CopyOptions): ImageAttribute;

  /**
   * 设置组件默认拖拽效果。
   *
   * @param { boolean } value - 组件默认拖拽效果，设置为true时，组件可拖拽，绑定的长按手势不生效。
   *     API version 9及之前，默认值为false。API version 10及之后，默认值为true。
   *     若用户需要设置自定义手势，则需要将draggable设置为false。设置为false之后，拖拽类事件不再触发。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  draggable(value: boolean): ImageAttribute;

  /**
   * 设置点光源样式。
   *
   * @param { PointLightStyle } value - 点光源样式。
   * @returns { ImageAttribute } The attribute of the image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  pointLight(value: PointLightStyle): ImageAttribute;

  /**
   * 设置SVG图源抗锯齿效果，仅对SVG图源生效。取值范围为$(0.333, 1.333]$，有效数字保留小数点后3位。
   *
   * 适用于超低分辨率设备（PPI低于200的设备）的SVG图源的锯齿优化，存在一定的性能影响，请谨慎使用。
   *
   * @param { number } value - SVG图源抗锯齿效果。<br/>默认值：0.0
   * @returns { ImageAttribute } The attribute of the image.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  edgeAntialiasing(value: number): ImageAttribute;

  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   *
   * @param { function } callback
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7
   */
  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   *
   * @param { function } callback
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   *
   * @param { function } callback
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Triggered when an image is successfully loaded or decoded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   *
   * <p><strong>NOTE</strong>:
   * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
   * </p>
   *
   * @param { function } callback
   * @returns { ImageAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  onComplete(
    callback: (event?: {
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      width: number;
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the image source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      height: number;
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      componentWidth: number;
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the component source.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      componentHeight: number;
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 7
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @since 9
       * @form
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The value of the status of the image being loaded successfully.
       * If the returned status value is 0, the image data is successfully loaded.
       * If the returned status value is 1, the image is successfully decoded.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      loadingStatus: number;
      /**
       * The width of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The width of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentWidth: number;
      /**
       * The height of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The height of the picture that is actually drawn.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentHeight: number;
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The actual draw is offset from the x-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentOffsetX: number;
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @since 10
       * @form
       */
      /**
       * The actual draw is offset from the y-axis of the component itself.
       *
       * @type { number }
       * @syscap SystemCapability.ArkUI.ArkUI.Full
       * @stagemodelonly
       * @crossplatform
       * @atomicservice
       * @since 11
       * @form
       */
      contentOffsetY: number;
    }) => void,
  ): ImageAttribute;

  /**
   * 图片加载异常时触发该回调。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时该事件不触发。
   *
   * @param { function } callback - Callback triggered when an error occurs during image loading.<br>**NOTE**<br>You are
   *     advised to use this callback to quickly identify the cause of image loading failures. For details, see the
   *     [ImageError]{@link ImageError} error codes. [since 9 - 10]
   * @param { ImageErrorCallback } callback - 图片加载异常时触发的回调。
   *     **说明：**
   *     建议开发者使用此回调，可快速确认图片加载失败时的具体原因，
   *     参见[ImageError]{@link ImageError}的错误信息详细介绍。 [since 11]
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  onError(callback: ImageErrorCallback): ImageAttribute;

  /**
   * 当加载的源文件为带动效的SVG格式图片时，SVG动效播放完成时会触发这个回调。
   * 如果动效为无限循环动效，则不会触发这个回调。
   *
   * 仅支持SVG格式的图片。当组件的参数类型为[AnimatedDrawableDescriptor]
   * {@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时该事件不触发。
   *
   * @param { function } event - 当加载的源文件为带动效的SVG格式图片时，
   *     SVG动效播放完成时会触发这个回调。如果动效为无限循环动效，则不会触
   *     发这个回调。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onFinish(event: () => void): ImageAttribute;

  /**
   * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。<!--RP3--><!--RP3End-->
   *
   * 不能和[overlay]{@link CommonMethod#overlay}属性同时使用，两者同时设置时overlay中
   * [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性将失效。该特性依赖设备能力。
   *
   * 分析图像要求是静态非矢量图，即svg、gif等图像类型不支持分析，
   * 支持传入[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}进
   * 行分析，目前仅支持[RGBA_8888]{@link @ohos.multimedia.image:image.PixelMapFormat}类型，使用方式见
   * [示例5（开启图像AI分析）]
   * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-image.md#示例5开启图像ai分析)。
   *
   * [alt]{@link ImageAttribute#alt(value: string | Resource | PixelMap)}占位图不支持分析，
   * [objectRepeat]{@link ImageAttribute#objectRepeat}属性仅在取值为ImageRepeat.NoRepeat时支持分析，隐私遮罩属性
   * [obscured]{@link CommonMethod#obscured}打开时不支持分析。
   *
   * 基于完整原始图像进行分析，设置[clip]{@link CommonMethod#clip(value: boolean)}、
   * [margin]{@link CommonMethod#margin}、
   * [borderRadius]{@link CommonMethod#borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses)}、
   * [position]{@link CommonMethod#position}和[objectFit]{@link ImageAttribute#objectFit}属性导致图像显示不完整，或使用
   * [renderMode]{@link ImageAttribute#renderMode}设置蒙层，仍基于完整原始图像进行分析。 [copyOption]
   * {@link ImageAttribute#copyOption}属性不影响AI分析功能。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 时设置该属性不生效。
   *
   * > **说明：**
   * >
   * > - 需要配置权限：ohos.permission.INTERNET。
   * >
   * > - 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { boolean} enable - Image组件是否支持AI分析。
   *     设置为true时，Image组件支持AI分析。设置为false时，Image组件不支持AI分析。默认值：false
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  enableAnalyzer(enable: boolean): ImageAttribute;

  /**
   * 设置AI分析类型，包括主体识别和文字识别功能，默认全部开启。分析类型不支持动态修改。
   *
   * @param { ImageAnalyzerConfig } config - AI分析类型。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  analyzerConfig(config: ImageAnalyzerConfig): ImageAttribute;

  /**
   * 设置图像拉伸时可调整大小的图像选项。拉伸对拖拽缩略图以及占位图有效。
   *
   * 设置合法的 [ResizableOptions]{@link ResizableOptions} 时，objectRepeat属性、antialiased属性和
   * orientation属性设置不生效。
   *
   * 当设置 top +bottom 大于原图的高或者 left + right 大于原图的宽时
   * [ResizableOptions]{@link ResizableOptions} 属性设置不生效。
   *
   * 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}
   * 和SVG时设置该属性不生效。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ResizableOptions } value - 图像拉伸时可调整大小的图像选项。
   * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  resizable(value: ResizableOptions): ImageAttribute;

  /**
   * 设置图像解码时的图像解码分辨率选项。
   *
   * 该属性不支持 svg、[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}和
   * [DrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:DrawableDescriptorLoadedResult} 等非解码图片类型。
   *
   * @param { ResolutionQuality } imageQuality - 图像解码分辨率质量。<br/>默认值：ResolutionQuality.Low
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  enhancedImageQuality(imageQuality: ResolutionQuality): ImageAttribute;

  /**
   * 设置是否支持卡片敏感隐私信息。
   *
   * @param { boolean } supported - 是否支持卡片敏感隐私信息。
   *     默认值为false，表示不支持卡片敏感隐私信息，当设置为true时，隐私模式下图片将显示为半透明底板样式。
   *     **说明：**
   *     设置null则不敏感。<br/>进入隐私模式需要卡片框架支持。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(supported: boolean): ImageAttribute;

  /**
   * 设置图像内容的显示方向。
   *
   * 该属性对[alt]{@link ImageAttribute#alt(value: string | Resource | PixelMap)}占位图不生效。
   *
   * @param { ImageRotateOrientation } orientation - 图像内容的显示方向。
   *     仅支持静态位图的显示。
   *     如果需要显示携带旋转角度信息或翻转信息的图片，建议使用
   *     ImageRotateOrientation.AUTO进行设置。
   *     默认值：ImageRotateOrientation.UP<br/>设置为undefined或null时，取值为ImageRotateOrientation.AUTO。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice
   * @since 14 dynamic
   */
  orientation(orientation: ImageRotateOrientation) : ImageAttribute;

  /**
   * 开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)，
   * 开启后相关SVG图片显示效果会有变化。
   *
   * Image组件创建后，不支持动态修改该属性的值。
   *
   * @param { boolean } enable - 控制是否开启SVG标签解析能力增强功能。
   *     默认值：false<br>true：支持SVG解析新能力；false：保持原有SVG解析能力。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  supportSvg2(enable: boolean) : ImageAttribute;

  /**
   * 图片内容发生变化时，触发过渡动效。
   *
   * @param { ContentTransitionEffect } transition - 过渡动效的类型。
   *     其中取值为ContentTransitionEffect.OPACITY表示淡入淡出效果，取值为
   *     ContentTransitionEffect.IDENTITY表示无动画效果。
   *     默认值：ContentTransitionEffect.IDENTITY
   *     设置为undefined或null时，取默认值ContentTransitionEffect.IDENTITY。
   *     **说明**：对动态图片资源不生效。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  contentTransition(transition: ContentTransitionEffect): ImageAttribute;

  /**
   * 设置位图图片边缘是否开启抗锯齿。未通过该接口设置时，默认不开启抗锯齿。SVG类型图片不支持该属性。
   *
   * > **说明：**
   * >
   * > 如果图片设置了背景色属性([backgroundColor]{@link CommonMethod#backgroundColor(value: ResourceColor)})，
   * > 图片的抗锯齿属性
   * > 设置为true不会影响背景色的锯齿效果。
   * >
   * > 和[resizable]{@link ImageAttribute#resizable}一起使用时，该属性不生效。
   *
   * @param { Optional<boolean> } isAntialiased - 设置位图图片边缘是否开启抗锯齿。<br/>
   *     true表示开启边缘抗锯齿；false表示不开启边缘
   *     抗锯齿。设置为undefined时，不开启边缘抗锯齿。
   * @returns { ImageAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  antialiased(isAntialiased: Optional<boolean>): ImageAttribute;
}

/**
* Image为图片组件，常用于在应用中显示图片。Image支持加载[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}、
* [ResourceStr]{@link ResourceStr}和[DrawableDescriptor]{@link DrawableDescriptor}类型的数据源，
* 支持png、jpg、jpeg、bmp、
* svg、webp、gif、heif和tiff类型的图片格式，不支持apng和svga格式。
*
* > **说明：**
*
* > - 从API version 23开始，图片类型新增支持tiff格式。
* >
* > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
* >
* > - 使用快捷组合键对Image组件复制时，Image组件必须处于获焦状态，如何获焦请参考[设置组件是否可获焦]
* >   (docroot://ui/arkts-common-events-focus-event.md#设置组件是否可获焦)。Image组件默认不获焦，需将[focusable]
* >   {@link CommonMethod#focusable}属性设置为true，即可使用Tab键将焦点切换到组件上，再将[focusOnTouch]
* >   {@link CommonMethod#focusOnTouch}属性设置为true，即可实现点击获焦。
* >
* > - 图片格式支持SVG图源，SVG标签文档请参考[SVG标签说明]{@link ./common}。
* >
* > - 动图的播放依赖于Image节点的可见性变化，其默认行为是不播放的。当节点可见时，
* >   通过回调启动动画，当节点不可见时，停止动画。
* >   可见性状态的判断是通过[onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>,
* >   event: VisibleAreaChangeCallback)}事件触发的，当可见阈值ratios大于0时，表明Image处于可见状态。
* >
* > - Image组件播放GIF动图时，帧时长取自GIF文件中各帧的delay time字段。当某帧的时长值小于等于0时，
* >   系统会将其修正为100ms；当某帧的时长值大
* >   于0时，系统直接使用该原始值，不做最小帧时长限制。
* >
* > - 如果图片加载过程中出现白色块，请参考[Image白块问题解决方案]
* >   (https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-image-white-lump-solution)。
* >   如果图片加载时间过长，
* >   请参考[预置图片资源加载优化](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-texture-compression-
* >                           improve-performance#section91526132216)。
* >
*
* 需要权限
*
* 使用网络图片时，需要申请权限ohos.permission.INTERNET。
* 具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。
*
* 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Image: ImageInterface;

/**
* 定义图片组件实例.
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const ImageInstance: ImageAttribute;

/**
* 图片加载异常时触发此回调。
*
* 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时该
* 事件不触发。
*
 * @type ImageErrorCallback [since 9 - 10]
 * @param { ImageError } error - 图片加载异常时触发回调的返回对象。 [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
type ImageErrorCallback = (error: ImageError) => void;

/**
* 图片加载异常时触发回调的返回对象。
*
* 当组件的参数类型为[AnimatedDrawableDescriptor]{@link @ohos.arkui.drawableDescriptor:AnimatedDrawableDescriptor}时该
* 事件不触发。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare interface ImageError {

  /**
   * 组件的宽。
   *
   * 单位：px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  componentWidth: number;

  /**
   * 组件的高。
   *
   * 单位：px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  componentHeight: number;

  /**
   * 报错信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  message: string;

  /**
   * 图片加载异常返回的报错信息，其中code为错误码，message为错误信息。报错信息请参考以下错误信息的详细介绍。
   *
   * 默认值：{ code : -1, message : "" }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  error?: BusinessError<void>;

  /**
   * 网络图片下载的详细信息，包含下载资源、网络、性能等信息。当图片来源为网络图片且下载失败时将携带此字段。
   *
   * 默认值：null
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  downloadInfo?: RequestDownloadInfo;
}

/**
* 图像拉伸时可调整大小的图像选项。
*
* **图1** 设置EdgeWidths效果图
* ![edgewidths](docroot://reference/apis-arkui/arkui-ts/figures/edgewidths.png)
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface ResizableOptions {

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
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  slice?: EdgeWidths;

  /**
   * 矩形网格对象。
   *
   * **说明：**
   *
   * 通过@ohos.graphics.drawing的[createImageLattice]
   * {@link @ohos.graphics.drawing:drawing.Lattice.createImageLattice(xDivs: Array<number>, yDivs: Array<number>,
   * fXCount: number, fYCount: number, fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null,
   * fColors?: Array<common2D.Color> | null)}
   * 接口创建Lattice类型作为入参。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格图像是固定的，
   * 不会被拉伸。其他位置的网格图像会根据
   * slice进行拉伸。
   *
   * 该参数对[backgroundImageResizable]{@link CommonMethod#backgroundImageResizable}接口不生效。
   *
   * 传入数字时默认单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  lattice?: DrawingLattice;
}

/**
* 设置图片占位图。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 22 dynamic
 */
declare interface ImageAlt {

  /**
   * 加载过程中的占位图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  placeholder?: ResourceStr | PixelMap;

  /**
   * 加载失败的占位图。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  error?: ResourceStr | PixelMap;
}
