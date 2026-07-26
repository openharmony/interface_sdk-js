/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * ImageSpan是[Text]{@link ./text}、[ContainerSpan]{@link ./container_span}组件的子组件，用于在文本中显示行内图片，支持设置图片对齐方式、缩放类型、加载占位图和颜色滤镜
 * 等，适用于需要在文本段落中嵌入图片实现图文混排的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
interface ImageSpanInterface {
  /**
   *
   * 定义ImageSpan组件构造函数。
   *
   * @param { ResourceStr | PixelMap } value - 图片的数据源，支持本地图片和网络图片。
   *     <br>使用网络图片时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考
   *     [声明权限](docroot://security/AccessToken/declare-permissions.md)。
   *     <br>当使用相对路径引用图片资源时，例如`ImageSpan("common/test.jpg")`，不支持跨包/跨模块调用该ImageSpan组件，建议使用`$r`方式来管理需全局使用的图片资源。
   *     <br>- 支持的图片格式包括png、jpg、bmp、svg、gif、webp和heif。
   *     <br>- 支持`Base64`字符串。格式`data:image/[png|jpeg|bmp|webp|heif];base64,[base64 data]`，其中`[base64 data]`为`Base64`字符串数
   *     据。
   *     <br>- 支持file://data/storage路径前缀的字符串，用于读取本应用安装目录下file文件夹下的图片资源。需要保证应用安装目录路径下的文件有可读权限。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  (value: ResourceStr | PixelMap): ImageSpanAttribute;
}

/**
 * 属性继承自[BaseSpan]{@link BaseSpan}，通用属性方法支持[尺寸设置]{@link ./common}、[背景设置]{@link ./common}、[边框设置]{@link ./common}。
 * 
 * 通用事件仅支持[点击控制事件]{@link ./common}。还支持以下事件：
 *
 * @extends CommonMethod<ImageSpanAttribute> [since 10 - 10]
 * @extends BaseSpan<ImageSpanAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare class ImageSpanAttribute extends BaseSpan<ImageSpanAttribute> {
  /**
   * 设置图片基于行高的对齐方式。适用于图文混排场景中调整图片与文字的垂直对齐效果。未通过该接口设置时，默认对齐方式为ImageSpanAlignment.BOTTOM。
   *
   * @param { ImageSpanAlignment } value - 图片基于行高的对齐方式。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  verticalAlign(value: ImageSpanAlignment): ImageSpanAttribute;

  /**
   * 为图像设置颜色滤镜效果。
   *
   * @param { ColorFilter | DrawingColorFilter } filter - 1. 给图像设置颜色滤镜效果，入参为一个4x5的RGBA转换矩阵。
   *     <br>矩阵第一行用于计算R'（新的红色分量），第二行用于计算G'（新的绿色分量），第三行用于计算B'（新的蓝色分量），第四行用于计算A'（新的透明度分量），4行分别代表不同的RGBA的分量。
   *     <br>当矩阵对角线值为1，其余值为0时，保持图片原有色彩。
   *     <br> **计算规则：**
   *     <br>如果输入的滤镜矩阵为：
   *     <br>![image-matrix-1](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_1.png)
   *     <br>像素点为[R, G, B, A]，色值的范围[0, 255]
   *     <br>则过滤后的颜色为 [R’, G’, B’, A’]
   *     <br>![image-matrix-2](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_2.png)
   *     <br>2. 支持@ohos.graphics.drawing的ColorFilter类型作为入参。
   *     <br>**说明：** 
   *     <br>该接口中的DrawingColorFilter类型支持在原子化服务中使用。其中，svg类型的图源只对stroke属性生效。*@ohos.graphics.drawing** can be used as the input parameter.<br>**NOTE**<br>The DrawingColorfilter
   *     type can be used in atomic services. The SVG image source takes effect only for the stroke attribute.
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  colorFilter(filter: ColorFilter | DrawingColorFilter): ImageSpanAttribute;

  /**
   * 设置图片的缩放类型。适用于控制图片在容器中显示方式的场景。未通过该接口设置时，默认缩放类型为ImageFit.Cover。
   *
   * @param { ImageFit } value - 图片的缩放类型。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  objectFit(value: ImageFit): ImageSpanAttribute;

  /**
   * 图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。
   *
   * @param { ImageCompleteCallback } callback - 图片数据加载成功和解码成功时触发的回调。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onComplete(callback: ImageCompleteCallback): ImageSpanAttribute;

  /**
   * 开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)，开启后支持SVG解析新能力，适用于需要使用
   * SVG新特性的场景；关闭则保持原有SVG解析能力，适用于兼容旧版本SVG图片显示的场景。未通过该接口设置时，默认保持原有SVG解析能力。
   * 
   * ImageSpan组件创建后，不支持动态修改该属性的值。
   *
   * @param { Optional<boolean> } enable - 控制是否开启
   *     [SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。
   *     <br>true：支持SVG解析新能力；false：保持原有SVG解析能力。
   * @returns { ImageSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  supportSvg2(enable: Optional<boolean>): ImageSpanAttribute;

  /**
   * 图片加载异常时触发该回调。
   *
   * @param { ImageErrorCallback } callback - 图片加载异常时触发的回调。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onError(callback: ImageErrorCallback): ImageSpanAttribute;

  /**
   * 设置图片加载过程中显示的占位图。未通过该接口设置时，默认为null，不显示占位图。
   *
   * @param { PixelMap } value - 设置图片加载过程中显示的占位图，支持[PixelMap]{@link @ohos.multimedia.image:image.PixelMap}类型。
   * @returns { ImageSpanAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 12 dynamic
   */
  alt(value: PixelMap): ImageSpanAttribute;
}

/**
 * ImageSpan是[Text]{@link ./text}、[ContainerSpan]{@link ./container_span}组件的子组件，用于在文本中显示行内图片，支持设置图片对齐方式、缩放类型、加载占位图和颜色滤镜
 * 等，适用于需要在文本段落中嵌入图片实现图文混排的场景。
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const ImageSpan: ImageSpanInterface;

/**
 * 定义ImageSpan组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @noninterop
 */
declare const ImageSpanInstance: ImageSpanAttribute;

/**
 * 图片加载成功和解码成功时均触发的回调。
 *
 * @param { ImageLoadResult } result - 图片数据加载成功和解码成功触发回调时返回的对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
type ImageCompleteCallback = (result: ImageLoadResult) => void;

/**
 * 图片数据加载成功和解码成功触发回调时返回的对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ImageLoadResult {
  /**
   * 图片的宽。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;
  /**
   * 图片的高。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
  /**
   * 组件的宽。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  componentWidth: number;
  /**
   * 组件的高。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  componentHeight: number;
  /**
   * 图片加载成功的状态值。
   * 
   * **说明：**
   * 
   * 返回的状态值为0时，表示图片数据加载成功。返回的状态值为1时，表示图片解码成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  loadingStatus: number;
  /**
   * 图片实际绘制的宽度。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * 
   * **说明：**
   * 
   * 仅在loadingStatus返回1时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentWidth: number;
  /**
   * 图片实际绘制的高度。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * 
   * **说明：**
   * 
   * 仅在loadingStatus返回1时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentHeight: number;
  /**
   * 实际绘制内容相对于组件自身的x轴偏移。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * 
   * **说明：**
   * 
   * 仅在loadingStatus返回1时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetX: number;
  /**
   * 实际绘制内容相对于组件自身的y轴偏移。
   * 
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * 
   * **说明：**
   * 
   * 仅在loadingStatus返回1时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentOffsetY: number;
}