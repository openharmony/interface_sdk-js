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
import { ImageAIOptions, ImageAnalyzerConfig } from "./imageCommon";
import { CommonMethod, AttributeModifier, Callback } from "./common";
import { XComponentType } from "./enums";
import { VoidCallback, DrawingCanvas } from "./units";
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { Builder } from '@ohos.arkui.component';

/**
 * Surface矩形信息。
 *
 * @interface SurfaceRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceRect {
    /**
     * surface相对于XComponent的水平偏移。
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetX?: double;
    /**
     * surface相对于XComponent的垂直偏移。
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offsetY?: double;
    /**
     * XComponent创建的surface的宽度。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    surfaceWidth: double;
    /**
     * XComponent创建的surface的高度。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    surfaceHeight: double;
}

/**
 * 定义NativeXComponent Pointer类型。
 *
 * @typedef { long } NativeXComponentPointer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NativeXComponentPointer = long;

/**
 * Surface旋转选项。
 *
 * @interface SurfaceRotationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceRotationOptions {
    /**
     * surface旋转的锁定属性。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lock?: boolean;
}

/**
 * Surface配置。
 *
 * @interface SurfaceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SurfaceConfig {
    /**
     * 是否需要将XComponent所持有的surface视为不透明，
     * 即使该surface具有半透明像素。
     * true表示需要视为不透明，false表示其他情况。
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    isOpaque?: boolean;
}

/**
 * 设置XComponent的HDR类型。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare enum HdrType {
  /**
   * 默认类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DEFAULT = 0,
  /**
   * AIHDR类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  AIHDR = 1,
}

/**
 * 定义XComponentController。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class XComponentController {
    /**
     * 构造函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor();
    /**
     * 获取XComponent创建的surface的id。
     *
     * @returns { string } XComponent创建的surface的id。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getXComponentSurfaceId(): string;
    /**
     * 设置XComponent创建的surface的矩形信息。
     *
     * @param { SurfaceRect } rect - surface的矩形信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setXComponentSurfaceRect(rect: SurfaceRect): void;
    /**
     * 获取XComponent创建的Surface的矩形信息。
     *
     * @returns { SurfaceRect } surface的矩形信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getXComponentSurfaceRect(): SurfaceRect;
    /**
     * 设置XComponent创建的Surface的旋转选项。
     *
     * @param { SurfaceRotationOptions } rotationOptions - surface的旋转选项。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;
    /**
     * 获取XComponent创建的Surface的旋转选项结果。
     *
     * @returns { Required<SurfaceRotationOptions> } surface旋转选项的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;
    /**
     * 当surface首次创建完成后回调。
     *
     * @param { string } surfaceId - XComponent创建的surface的id。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onSurfaceCreated(surfaceId: string): void;
    /**
     * 当surface矩形信息发生变化后回调。
     *
     * @param { string } surfaceId - XComponent创建的surface的id。
     * @param { SurfaceRect } rect - XComponent创建的surface的矩形信息。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;
    /**
     * 当surface即将被销毁时回调。
     *
     * @param { string } surfaceId - XComponent创建的surface的id。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onSurfaceDestroyed(surfaceId: string): void;
    /**
     * 启动图像分析器。
     *
     * @param { ImageAnalyzerConfig } config - 图像分析器配置。
     * @returns { Promise<void> } 该函数返回的Promise。
     * @throws { BusinessError } 110001 - 不支持图像分析特性。
     * @throws { BusinessError } 110002 - 图像分析正在执行中。
     * @throws { BusinessError } 110003 - 图像分析已停止。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
    /**
     * 停止图像分析器。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    stopImageAnalyzer(): void;

    /**
     * 获取用于在XComponent创建的surface上绘制的Canvas。
     *
     * @returns { DrawingCanvas | null} 返回用于在XComponent创建的surface上绘制的Canvas。
     *    如果surface不可用，则返回null。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    lockCanvas(): DrawingCanvas | null;

    /**
     * 将Canvas的新内容发布到XComponent创建的surface，并释放该Canvas。
     *
     * @param { DrawingCanvas } canvas - 之前通过lockCanvas获取的canvas。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    unlockCanvasAndPost(canvas: DrawingCanvas):void;

    /**
     * 设置XComponent创建的surface的配置。
     *
     * @param { SurfaceConfig } config - surface配置
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setXComponentSurfaceConfig(config: SurfaceConfig):void;
}

/**
 * 定义XComponent的选项。
 *
 * @interface XComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface XComponentOptions {
    /**
     * XComponent的类型。
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: XComponentType;
    /**
     * XComponent的控制器。
     *
     * @type { XComponentController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller: XComponentController;
    /**
     * 图像AI选项。
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageAIOptions?: ImageAIOptions;
    /**
     * 屏幕的标识符。
     *
     * @type { ?long }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    screenId?: long;
}

/**
 * 定义native xcomponent参数。
 *
 * @interface NativeXComponentParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface NativeXComponentParameters {
    /**
     * XComponent的类型。
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: XComponentType;
    /**
     * 图像AI选项。
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    imageAIOptions?: ImageAIOptions;
}

/**
 * 定义XComponent属性。
 *
 * @extends CommonMethod
 * @interface XComponentAttribute
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
     * 当判断XComponent的surface是否创建时回调。
     *
     * @param { VoidCallback | undefined } callback - 当判断XComponent的surface是否创建时回调。
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onLoad(callback: VoidCallback | undefined): this;
    /**
     * 当判断XComponent是否销毁时回调。
     *
     * @param { VoidCallback | undefined } event - 当判断XComponent是否销毁时回调。
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onDestroy(event: VoidCallback | undefined): this;
    /**
     * 为XComponent启用图像分析器。
     *
     * @param { boolean | undefined } enable
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableAnalyzer(enable: boolean | undefined): this;
    /**
     * 为XComponent启用隐私保护。
     *
     * @param { boolean | undefined } isSecure
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableSecure(isSecure: boolean | undefined): this;
    /**
     * 为XComponent启用透明层。
     *
     * @param { boolean | undefined } enabled - 是否为XComponent启用透明层。
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    default enableTransparentLayer(enabled: boolean | undefined): this;
    /**
     * 为XComponent设置hdrBrightness。
     *
     * @param { double | undefined } brightness - 控制HDR视频的亮度。
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default hdrBrightness(brightness: double | undefined): this;
    /**
     * 为XComponent设置hdrBrightness。
     *
     * @param { double | undefined } brightness - 控制HDR视频的亮度。
     * @param { HdrType } [type] - XComponent的HDR类型。
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 24 static
     */
    default hdrBrightness(brightness: double | undefined, type?: HdrType): this;
    /**
     * 调用attributeModifier。
     *
     * @param { AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { XComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<XComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 定义XComponent参数接口。
 *
 * @interface XComponentParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface XComponentParameters {
    /**
     * XComponent的id。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    id: string;
    /**
     * XComponent的类型。
     *
     * @type { XComponentType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    type: XComponentType;
    /**
     * 用于处理NativeXComponent Pointer的回调。
     *
     * @type { Callback<NativeXComponentPointer> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    nativeXComponentHandler: Callback<NativeXComponentPointer>;
    /**
     * XComponent的控制器。
     *
     * @type { ?XComponentController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    controller?: XComponentController;
}

/**
 * 传递参数时返回XComponent。
 *
 * @param { XComponentParameters | XComponentOptions | NativeXComponentParameters } params - 用于创建XComponent的选项。
 * @returns { XComponentAttribute } XComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function XComponent(
    params: XComponentParameters | XComponentOptions | NativeXComponentParameters,
): XComponentAttribute

/**
 * 定义XComponent组件。要求在组件属性设置开始时调用setXComponentOptions，
 * 并在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<XComponentAttribute> } style - 用于设置XComponent属性的回调。
 * @param { CustomBuilder } [content_] - 容器。
 * @returns { XComponentAttribute } XComponent的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function XComponent(
    style: CustomBuilderT<XComponentAttribute>,
    content_?: CustomBuilder,
): XComponentAttribute
