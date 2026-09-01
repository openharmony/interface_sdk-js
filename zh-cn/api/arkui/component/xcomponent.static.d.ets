'use static';
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
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { CommonMethod, AttributeModifier, Callback } from "./common";
import { XComponentType } from "./enums";
import { VoidCallback, DrawingCanvas } from "./units";
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * 用于描述XComponent持有Surface的显示区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceRect {
  /**
   * Surface显示区域相对于XComponent组件左上角的x轴坐标。
   *
   * 未设置时默认按照居中显示。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offsetX?: double;
  /**
   * Surface显示区域相对于XComponent组件左上角的y轴坐标。
   *
   * 未设置时默认按照居中显示。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offsetY?: double;
  /**
   * Surface显示区域的宽度。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  surfaceWidth: double;
  /**
   * Surface显示区域的高度。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  surfaceHeight: double;
}

/**
 * 表示NativeXComponent指针类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NativeXComponentPointer = long;

/**
 * 用于描述XComponent持有Surface在屏幕旋转时是否锁定方向的设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceRotationOptions {
  /**
   * Surface在屏幕旋转时是否锁定方向，未设置时默认取值为false，即不锁定方向。
   *
   * true：锁定方向；false：不锁定方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lock?: boolean;
}

/**
 * 用于描述XComponent持有的Surface在渲染时是否需要被视为不透明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceConfig {
  /**
   * XComponent持有的Surface在渲染时是否需要被视为不透明，未设置时默认取值为false，
   * 即在渲染时会应用Surface中绘制内容像素的透明度。
   *
   * true：表示需要被视为不透明；false：表示不需要被视为不透明。
   *
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isOpaque?: boolean;
}

/**
 * HDR视频的高动态范围渲染类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum HdrType {
  /**
   * 默认HDR类型，使用标准高动态范围渲染模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DEFAULT = 0,
  /**
   * AI HDR类型，使用AI算法对非HDR内容进行智能动态范围扩展，实现HDR的显示效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  AIHDR = 1,
}

/**
 * XComponent组件的控制器，可以将此对象绑定至XComponent组件，然后通过控制器来调用组件方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class XComponentController {
  /**
   * XComponentController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * 获取XComponent对应Surface的ID，仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @returns { string } XComponent持有Surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getXComponentSurfaceId(): string;
  /**
   * 设置XComponent持有Surface的显示区域，包括宽高和相对于组件左上角的位置坐标，
   * 仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @param { SurfaceRect } rect - XComponent持有Surface的显示区域。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setXComponentSurfaceRect(rect: SurfaceRect): void;
  /**
   * 获取XComponent持有Surface的显示区域，包括宽高和相对于组件左上角的位置坐标，
   * 仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @returns { SurfaceRect } 获取XComponent持有Surface的显示区域。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getXComponentSurfaceRect(): SurfaceRect;
  /**
   * 设置XComponent持有Surface在屏幕旋转时是否锁定方向，
   * 仅XComponent类型为SURFACE时有效。
   *
   * @param { SurfaceRotationOptions } rotationOptions - 设置XComponent持有Surface在屏幕旋转时是否锁定方向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;
  /**
   * 获取XComponent持有Surface在屏幕旋转时是否锁定方向的设置，
   * 仅XComponent类型为SURFACE时有效。
   *
   * @returns { Required<SurfaceRotationOptions> } 获取XComponent持有Surface在屏幕旋转时是否锁定方向的设置。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;
  /**
   * 当XComponent持有的Surface创建后进行该回调，仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @param { string } surfaceId - 回调该方法的时候，绑定XComponent持有Surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSurfaceCreated(surfaceId: string): void;
  /**
   * 当XComponent持有的Surface大小改变后（包括首次创建时的大小改变）进行该回调，
   * 仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @param { string } surfaceId - 回调该方法的时候，绑定XComponent持有Surface的ID。
   * @param { SurfaceRect } rect - 回调该方法的时候，绑定XComponent持有Surface的显示区域。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;
  /**
   * 当XComponent持有的Surface销毁后进行该回调，仅XComponent类型为SURFACE或TEXTURE时有效。
   *
   * @param { string } surfaceId - 回调该方法的时候，绑定XComponent持有Surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onSurfaceDestroyed(surfaceId: string): void;
  /**
   * 配置AI分析并启动AI分析功能，使用前需先启用图像AI分析能力enableAnalyzer，
   * 仅type为SURFACE或TEXTURE时有效。使用Promise异步回调。
   *
   * 该方法调用时，将截取调用时刻的画面帧进行分析，使用时需注意启动分析的时机，
   * 避免出现画面和分析内容不一致的情况。若该方法尚未执行完毕，此时重复调用，
   * 则会触发错误回调。
   *
   * @param { ImageAnalyzerConfig } config - 执行AI分析所需要的入参，用于配置AI分析功能。
   * @returns { Promise<void> } Promise对象，无返回结果。用于获取AI分析是否成功执行。
   * @throws { BusinessError } 110001 - 不支持图像分析特性。
   * @throws { BusinessError } 110002 - 图像分析正在执行中。
   * @throws { BusinessError } 110003 - 图像分析已停止。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
  /**
   * 停止AI分析功能，AI分析展示的内容将被销毁。仅type为SURFACE或TEXTURE时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopImageAnalyzer(): void;

  /**
   * 返回可用于向XComponent上绘制内容的画布对象。只支持TEXTURE和SURFACE模式。
   *
   * @returns { DrawingCanvas | null } 可用于向XComponent区域绘制的画布对象或者空对象null。
   *     如果surface不可用，则返回null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lockCanvas(): DrawingCanvas | null;

  /**
   * 将画布对象中的内容绘制在XComponent区域，并释放该画布对象。只支持TEXTURE和SURFACE模式。
   *
   * @param { DrawingCanvas } canvas - 之前调用lockCanvas方法返回的画布对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unlockCanvasAndPost(canvas: DrawingCanvas): void;

  /**
   * 设置XComponent创建的Surface的选项，用于设置XComponent持有的Surface在渲染时是否需要被视为不透明。
   * 当Surface绘制内容完全不透明时，可设置为不透明以提升渲染性能；当绘制内容包含透明区域时，
   * 需保持非不透明以保证透明效果正确显示。仅当XComponent组件类型为TEXTURE或SURFACE时，本接口生效。
   *
   * @param { SurfaceConfig } config - Surface配置选项，用于设置XComponent持有的Surface在渲染时是否需要被视为不透明。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setXComponentSurfaceConfig(config: SurfaceConfig):void;
}

/**
 * 定义XComponent的具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface XComponentOptions {
  /**
   * 用于指定XComponent组件类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: XComponentType;
  /**
   * 给组件绑定一个控制器，通过控制器调用组件方法，仅类型为SURFACE或TEXTURE时有效。
   * 未设置时不绑定控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller: XComponentController;
  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器，
   * 仅类型为SURFACE或TEXTURE时有效。未设置时不配置AI分析选项，
   * 可通过enableAnalyzer属性单独启用AI分析。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageAIOptions?: ImageAIOptions;
  /**
   * 给组件设置关联屏幕ID，通过此项可在组件上显示关联屏幕画面。
   * 屏幕ID可通过@ohos.screen模块的getAllScreens接口获取。
   *
   * 默认值：0，表示主屏幕。
   *
   * **说明：**
   * 仅type为SURFACE时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  screenId?: long;
}

/**
 * 定义XComponent的具体配置参数。通过这种构造参数创建的XComponent，可以将其对应的FrameNode对象传递至Native侧，
 * 使用NDK接口进行Surface生命周期的相关设置和添加事件监听。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NativeXComponentParameters {
  /**
   * 用于指定XComponent组件类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: XComponentType;
  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。
   * 未设置时不配置AI分析选项，仅类型为SURFACE或TEXTURE时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * 定义XComponent属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface XComponentAttribute extends CommonMethod {

  /**
   * 设置XComponent选项。
   *
   * @param { XComponentParameters | XComponentOptions | NativeXComponentParameters } params - 用于创建XComponent的选项。
   * @returns { this } XComponentAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setXComponentOptions(params: XComponentParameters | XComponentOptions | NativeXComponentParameters): this;
  /**
   * 插件加载完成时回调事件。
   *
   * @param { VoidCallback | undefined } callback - 插件加载完成时回调事件，用于获取XComponent实例对象的context。<br>ArkTS-Sta模式下可不传。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onLoad(callback: VoidCallback | undefined): this;
  /**
   * 插件卸载完成时回调事件。与onSurfaceDestroyed的区别：onDestroy适用于设置libraryname参数的场景，
   * 回调无参数；onSurfaceDestroyed适用于未设置libraryname参数的场景，回调参数为surfaceId。
   *
   * @param { VoidCallback | undefined } event - 插件卸载完成时回调事件。<br>ArkTS-Sta模式下可不传。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDestroy(event: VoidCallback | undefined): this;
  /**
   * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。
   *
   * @param { boolean | undefined } enable - 是否启用AI分析功能。<br>true：开启AI分析；false：关闭AI分析。
   *     <br>默认值：false<br>ArkTS-Sta模式下可不传，不传时使用默认值false。<br>**说明：**仅type为SURFACE或TEXTURE时该功能有效。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableAnalyzer(enable: boolean | undefined): this;
  /**
   * 防止组件内自绘制内容被截屏、录屏。
   *
   * @param { boolean | undefined } isSecure - 是否开启隐私图层模式。<br>true：开启隐私图层模式；false：关闭隐私图层模式。<br>默认值：false。
   *     <br>ArkTS-Sta模式下可不传，不传时使用默认值false。<br>**说明：**仅type为SURFACE时有效。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableSecure(isSecure: boolean | undefined): this;
  /**
   * 当背景颜色设置半透明的XComponent需要开启独立图层（即将该组件的内容置于单独的合成图层上进行渲染，
   * 以避免半透明区域与下方内容混合时出现渲染异常）时，使用本接口。
   *
   * 使用本接口，并不代表一定会被设置为独立图层。出于硬件规格（如硬件不支持独立图层进行硬件合成）、
   * 软件规格（如独立图层与带有模糊效果的UI组件相交）等原因，将导致半透明XComponent无法设置为独立图层。
   *
   * **说明：**
   * 仅type为SURFACE时有效。
   *
   * @param { boolean | undefined } enabled - 是否开启组件背景半透明状态下的独立图层。<br>true：开启独立图层；false：关闭独立图层。
   *     设置为true时，由于硬件规格或软件规格等原因，可能无法实际生效。<br>默认值：false
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default enableTransparentLayer(enabled: boolean | undefined): this;
  /**
   * 用于调整组件播放HDR视频的亮度。
   *
   * @param { double | undefined } brightness - HDR视频的亮度。<br>默认值：1.0<br>取值范围：[0.0, 1.0]。
   *     小于0.0的值按0.0处理，大于1.0的值按1.0处理，其他异常值按1.0处理。<br>0.0表示视频按照SDR亮度显示，1.0表示视频按照当前允许的最高HDR亮度显示。
   *     <br>**说明：**仅type为SURFACE时有效。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default hdrBrightness(brightness: double | undefined): this;
  /**
   * 调整组件播放HDR视频时的亮度，该接口仅对HDR视频生效。
   *
   * **说明：**
   * 仅XComponent构造参数中的type为SURFACE时该接口生效，否则该接口不生效。
   *
   * @param { double | undefined } brightness - HDR内容的亮度。<br>默认值：1.0<br>取值范围：[0.0, 1.0]。
   *     小于0.0的值按0.0处理，大于1.0的值按1.0处理，其他异常值按1.0处理。<br>0.0表示内容按照SDR亮度显示，1.0表示内容按照当前允许的最高HDR亮度显示。
   *     <br>ArkTS-Sta模式下可不传，不传时使用默认值1.0。
   * @param { HdrType } [type] - 显示HDR内容时的HDR类型。<br>默认值：HdrType.DEFAULT
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default hdrBrightness(brightness: double | undefined, type?: HdrType): this;
  /**
   * 设置XComponent组件的属性修改器。
   *
   * @param { AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - XComponent组件的属性修改器。取值为undefined时，不使用attributeModifier。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义XComponent的具体配置参数，支持Native侧触发XComponent生命周期回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface XComponentParameters {
  /**
   * 组件的唯一标识，支持最大的字符串长度128。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  id: string;
  /**
   * 用于指定XComponent组件类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: XComponentType;
  /**
   * 用于处理NativeXComponent实例的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  nativeXComponentHandler: Callback<NativeXComponentPointer>;
  /**
   * 给组件绑定一个控制器，通过控制器调用组件方法，仅类型为SURFACE或TEXTURE时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: XComponentController;
}

/**
 * 提供用于图形绘制和媒体数据写入的Surface，XComponent负责将其嵌入到视图中，支持应用自定义Surface位置和大小。
 * 同时支持AI图像分析、HDR视频亮度调节、防截屏录屏隐私保护、画布自绘制等能力，
 * 适用于视频播放、相机预览、游戏渲染、图像AI识别等需要高性能自绘制和媒体内容展示的场景。
 * 创建XComponent组件。
 *
 * @param { XComponentParameters | XComponentOptions | NativeXComponentParameters } params - 用于
 *     创建XComponent的选项。
 * @returns { XComponentAttribute } XComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function XComponent(
    params: XComponentParameters | XComponentOptions | NativeXComponentParameters
): XComponentAttribute;

/**
 * 定义XComponent组件。要求在组件属性设置开始时调用setXComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<XComponentAttribute> } style - 用于设置XComponent属性的回调。
 * @returns { XComponentAttribute } XComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function XComponent(
    style: CustomBuilderT<XComponentAttribute>
): XComponentAttribute;