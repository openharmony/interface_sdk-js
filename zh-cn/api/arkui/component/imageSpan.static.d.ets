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
import { ResourceStr, ColorFilter } from "./units";
import { BaseSpan } from "./span";
import { ImageSpanAlignment, ImageFit } from "./enums";
import { ImageErrorCallback, DrawingColorFilter } from "./image";

import { PixelMap, AttributeModifier, CommonMethod } from "./common";
import { PixelMap } from './common';
import image from '../../@ohos.multimedia.image';

import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
import { CustomBuilder, CustomBuilderT } from './builder';

/**
 * 属性继承自[BaseSpan](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-span.md#basespan)，通用属性方法支持
 * [尺寸设置](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md)、
 * [背景设置](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md)、
 * [边框设置](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface ImageSpanAttribute extends BaseSpan {
  /**
   * 设置图片基于行高的对齐方式。
   *
   * @param { ImageSpanAlignment | undefined } value - 图片基于行高的对齐方式。<br />默认值：ImageSpanAlignment.BOTTOM<br/>设置undefined
   *     时按默认值处理。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default verticalAlign(value: ImageSpanAlignment | undefined): this;
  /**
   * 为图像设置颜色滤镜效果。
   *
   * @param { ColorFilter | DrawingColorFilter | undefined } filter 1. 给图像设置颜色滤镜效果，入参为一个4x5的RGBA转换矩阵。<br/>矩阵第一行表示R（红
   *     色）的向量值，第二行表示G（绿色）的向量值，第三行表示B（蓝色）的向量值，第四行表示A（透明度）的向量值，4行分别代表不同的RGBA的向量值。<br/>当矩阵对角线值为1，其余值为0时，保持图片原有色彩。<br/>
   *     **计算规则：**<br/>如果输入的滤镜矩阵为：<br/>!
   *     [image-matrix-1](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_1.png)<br/>像素点为[R, G, B, A]，色值的
   *     范围[0, 255]<br/>则过滤后的颜色为 [R’, G’, B’, A’]<br/>!
   *     [image-matrix-2](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_2.png)<br/>2. 支持@
   *     ohos.graphics.drawing的ColorFilter类型作为入参。<br/>**说明：** <br/>该接口中的DrawingColorFilter类型支持在原子化服务中使用。其中，svg类型的图源只对
   *     stroke属性生效。<br/>取值为undefined时，无颜色滤镜效果。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default colorFilter(filter: ColorFilter | DrawingColorFilter | undefined): this;
  /**
   * 开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)，开启后相关SVG图片显示效果会有变化。
   *
   * ImageSpan组件创建后，不支持动态修改该属性的值。
   *
   * @param { boolean | undefined } enable - 控制是否开启
   *     [SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。
   *     <br>true：支持SVG解析新能力；false：保持原有SVG解析能力。
   *     <br>默认值：false <br/>设置undefined时按默认值处理。
   * @returns { ImageSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default supportSvg2(enable: boolean | undefined) : this;
  /**
   * 设置图片的缩放类型。
   *
   * @param { ImageFit | undefined } value - 图片的缩放类型。<br/>默认值：ImageFit.Cover<br/>设置undefined时按默认值处理。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default objectFit(value: ImageFit | undefined): this;
  /**
   * 图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。
   *
   * @param { ImageCompleteCallback | undefined } callback - 图片数据加载成功和解码成功时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onComplete(callback: ImageCompleteCallback | undefined): this;
  /**
   * 图片加载异常时触发该回调。
   *
   * @param { ImageErrorCallback | undefined } callback - 图片加载异常时触发的回调。<br/>取值为undefined时，不使用回调函数。
   * @returns { ImageSpanAttribute } The attribute of the image span.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onError(callback: ImageErrorCallback | undefined): this;
  /**
   * 设置图片加载过程中显示的占位图。
   *
   * @param { PixelMap | undefined } value
   * @returns { ImageSpanAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default alt(value: PixelMap | undefined): this;
  /**
   * 设置组件的动态属性。
   *
   * @param { AttributeModifier<ImageSpanAttribute> | AttributeModifier<CommonMethod> | undefined } modifier.
   * @returns { ImageSpanAttribute } the attribute of the ImageSpanAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<ImageSpanAttribute> | AttributeModifier<CommonMethod> | undefined): this;

  /**
     * 设置ImageSpan选项。
     *
   * @param { ResourceStr | PixelMap } value - 构建ImageSpan的选项。
   * @returns { ImageSpanAttribute } 返回ImageSpan属性的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.1.0 staticonly
   */
  default setImageSpanOptions(value: ResourceStr | PixelMap): this;
}
/**
 * 图片加载成功和解码成功时触发的回调。
 *
 * @param { ImageLoadResult } result - 图片数据加载成功和解码成功触发回调时返回的对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ImageCompleteCallback = (result: ImageLoadResult) => void;
/**
 * 图片数据加载成功和解码成功触发回调时返回的对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ImageLoadResult {
  /**
   * 图片的宽。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: double;
  /**
   * 图片的高。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: double;
  /**
   * 组件的宽。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentWidth: double;
  /**
   * 组件的高。
   *
   * 单位：[px](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  componentHeight: double;
  /**
   * 图片加载成功的状态值。
   *
   * **说明：**
   *
   * 返回的状态值为0时，表示图片数据加载成功。返回的状态值为1时，表示图片解码成功。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  loadingStatus: double;
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
   * @since 23 static
   */
  contentWidth: double;
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
   * @since 23 static
   */
  contentHeight: double;
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
   * @since 23 static
   */
  contentOffsetX: double;
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
   * @since 23 static
   */
  contentOffsetY: double;
}

/**
 * 定义ImageSpan组件。
 *
 * @param { ResourceStr | PixelMap } value
 * @returns { ImageSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function ImageSpan(
    value: ResourceStr | PixelMap
): ImageSpanAttribute;

/**
 * 定义ImageSpan组件。
 *
 * @param { CustomBuilderT<ImageSpanAttribute> } style - ImageSpan属性实例。
 * @returns { ImageSpanAttribute }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.1.0 staticonly
 * @noninterop
 */
@Builder
export declare function ImageSpan(
    style: CustomBuilderT<ImageSpanAttribute>,
): ImageSpanAttribute;