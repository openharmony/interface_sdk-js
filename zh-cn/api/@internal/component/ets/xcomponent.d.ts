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
 * 描述XComponent所持有的surface的矩形。
 *
 * @interface SurfaceRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
/**
 * Surface矩形信息。
 *
 * @interface SurfaceRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SurfaceRect {
  /**
   * surface矩形相对于XComponent左上角的X坐标。
   * 单位：px。
   * 如果未设置offsetX，surface矩形将相对于XComponent左上角沿x轴居中。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * surface相对于XComponent的水平偏移。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */  
  offsetX?: number;

  /**
   * surface矩形相对于XComponent左上角的Y坐标。
   * 单位：px。
   * 如果未设置offsetY，surface矩形将相对于XComponent左上角沿y轴居中。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * surface相对于XComponent的垂直偏移。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  offsetY?: number;

  /**
   * surface矩形的宽度。
   * 单位：px。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * XComponent创建的surface的宽度。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  surfaceWidth: number;

  /**
   * surface矩形的高度。
   * 单位：px。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * XComponent创建的surface的高度。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  surfaceHeight: number;
}

/**
 * 定义屏幕旋转时是否锁定当前XComponent所持有的surface的方向。
 *
 * @interface SurfaceRotationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
/**
 * Surface旋转选项。
 *
 * @interface SurfaceRotationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SurfaceRotationOptions {
  /**
   * 屏幕旋转时是否锁定surface的方向。
   * 如果不设置此参数，默认值为false，表示不锁定方向。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * surface旋转的锁定属性。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  lock?: boolean;
}

/**
 * Surface配置。
 *
 * @interface SurfaceConfig
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare interface SurfaceConfig {
  /**
   * 是否需要将XComponent所持有的surface视为不透明，
   * 即使该surface具有半透明像素。
   * true表示需要视为不透明，false表示其他情况。
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  isOpaque?: boolean;
}

/**
 * 定义XComponent的控制器。
 * 您可以将该控制器绑定到XComponent，以通过控制器调用组件接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义XComponent的控制器。
 * 您可以将该控制器绑定到XComponent，以通过控制器调用组件接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class XComponentController {
  /**
   * 用于创建XComponentController实例的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 用于创建XComponentController实例的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 获取XComponent所持有的surface的ID，可用于@ohos相关接口。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { string } XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * 获取XComponent所持有的surface的ID，可用于@ohos相关接口。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { string } XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentSurfaceId(): string;

  /**
   * 获取XComponent对象的context。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { Object } native XComponent的context。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 获取XComponent对象的context。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { Object } XComponent对象的context。
   *                     context中包含的接口由开发者定义。
   *                     context作为onLoad回调的第一个参数传入。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentContext(): Object;

  /**
   * 设置XComponent所持有的surface的宽度和高度。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @param { object } value - XComponent所持有的surface的宽度和高度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead setXComponentSurfaceRect
   */
  setXComponentSurfaceSize(value: {
    surfaceWidth: number;
    surfaceHeight: number;
  }): void;

  /**
   * 设置XComponent所持有的surface的矩形。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @param { SurfaceRect } rect - XComponent所持有的surface的矩形。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 设置XComponent创建的surface的矩形信息。
   *
   * @param { SurfaceRect } rect - surface的矩形信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  setXComponentSurfaceRect(rect: SurfaceRect): void;

  /**
   * 获取XComponent所持有的surface的矩形。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { SurfaceRect } XComponent所持有的surface的矩形。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 获取XComponent创建的surface的矩形信息。
   *
   * @returns { SurfaceRect } surface的矩形信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getXComponentSurfaceRect(): SurfaceRect;

  /**
   * 设置屏幕旋转时是否锁定此XComponent所持有的surface的方向。
   * 该接口仅在XComponent的type设置为SURFACE("surface")时生效。
   *
   * @param { SurfaceRotationOptions } rotationOptions - 屏幕旋转时是否锁定当前XComponent所持有的surface的方向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 设置XComponent创建的Surface的旋转选项。
   *
   * @param { SurfaceRotationOptions } rotationOptions - surface的旋转选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;

  /**
   * 获取屏幕旋转时此XComponent所持有的surface的方向是否锁定。
   * 该接口仅在XComponent的type设置为SURFACE("surface")时生效。
   *
   * @returns { Required<SurfaceRotationOptions> } surface旋转选项的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 获取XComponent创建的Surface的旋转选项结果。
   *
   * @returns { Required<SurfaceRotationOptions> } surface旋转选项的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;

  /**
   * 当XComponent所持有的surface创建完成时触发。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 当surface首次创建完成后回调。
   *
   * @param { string } surfaceId - XComponent创建的surface的id。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onSurfaceCreated(surfaceId: string): void;

  /**
   * 当XComponent所持有的surface大小发生变化时触发（包括XComponent以指定大小创建时）。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @param { SurfaceRect } rect - 用于显示XComponent所持有的surface的矩形。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 当surface矩形信息发生变化后回调。
   *
   * @param { string } surfaceId - XComponent创建的surface的id。
   * @param { SurfaceRect } rect - XComponent创建的surface的矩形信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;

  /**
   * 当XComponent所持有的surface销毁时触发。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 当surface即将被销毁时回调。
   *
   * @param { string } surfaceId - XComponent创建的surface的id。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onSurfaceDestroyed(surfaceId: string): void;

  /**
   * 在给定设置中启动AI图像分析。
   * 调用此接口前，请确保已启用AI图像分析器。
   * 由于用于分析的图像帧是调用此接口时捕获的帧，因此请注意此接口的调用时机。
   * 如果在执行完成之前重复调用此接口，将触发错误回调。
   *
   * @param { ImageAnalyzerConfig } config - AI图像分析器的设置。
   * @returns { Promise<void> } 用于返回结果的Promise。
   * @throws { BusinessError } 110001 - 不支持图像分析特性。
   * @throws { BusinessError } 110002 - 图像分析正在执行中。
   * @throws { BusinessError } 110003 - 图像分析已停止。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;

  /**
   * 停止AI图像分析。
   * AI图像分析器显示的内容将被销毁。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  stopImageAnalyzer(): void;

  /**
   * 获取用于在XComponent创建的surface上绘制的Canvas。
   *
   * @returns { DrawingCanvas | null} 返回用于在XComponent创建的surface上绘制的Canvas。
   *    如果surface不可用，则返回null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  lockCanvas(): DrawingCanvas | null;

  /**
   * 将Canvas的新内容发布到XComponent创建的surface，并释放该Canvas。
   *
   * @param { DrawingCanvas } canvas - 之前通过lockCanvas获取的canvas。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  unlockCanvasAndPost(canvas: DrawingCanvas):void;

  /**
   * 设置XComponent创建的surface的配置。
   *
   * @param { SurfaceConfig } config - surface配置
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  setXComponentSurfaceConfig(config: SurfaceConfig):void;
}

/**
 * 定义XComponent的选项。
 *
 * @interface XComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
/**
 * 定义XComponent的选项。
 *
 * @interface XComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface XComponentOptions {
  /**
   * 组件的类型。
   *
   * @type { XComponentType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * XComponent的类型。
   *
   * @type { XComponentType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  type: XComponentType;

  /**
   * 绑定到组件的控制器，可用于调用组件的方法。
   * 该参数仅在type为SURFACE或TEXTURE时有效。
   *
   * @type { XComponentController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * XComponent的控制器。
   *
   * @type { XComponentController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  controller: XComponentController;

  /**
   * AI图像分析选项。
   * 您可以通过此参数配置分析类型或绑定分析器控制器。
   *
   * @type { ?ImageAIOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * 屏幕的标识符。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 17 dynamic
   */
  screenId?: number;
}

/**
 * 定义native xcomponent参数。
 *
 * @interface NativeXComponentParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 19 dynamic
   */
declare interface NativeXComponentParameters {
  /**
   * XComponent的类型
   *
   * @type { XComponentType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  type: XComponentType;

  /**
   * 图像AI选项。
   *
   * @type { ?ImageAIOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * 设置XComponent的HDR类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic
 */
declare enum HdrType {
  /**
   * 默认类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  DEFAULT = 0,
  /**
   * AIHDR类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  AIHDR = 1,
}

/**
 * 定义XComponent。
 *
 * @interface XComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义XComponent。
 *
 * @interface XComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface XComponentInterface {
  /**
   * 构造参数
   *
   * @param { object } value - 表示XComponent的选项。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8 dynamiconly
   * @deprecated since 12
   * @useinstead (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController })
   */
  (value: { id: string; type: string; libraryname?: string; controller?: XComponentController }): XComponentAttribute;

  /**
   * 构造参数
   *
   * @param { object } value - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 10
   */
  /**
   * 构造参数
   *
   * @param { object } value - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController }): XComponentAttribute;

  /**
   * 构造参数
   *
   * @param { XComponentOptions } options - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  /**
   * 构造参数
   *
   * @param { XComponentOptions } options - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  (options: XComponentOptions): XComponentAttribute;

  /**
   * 构造参数
   *
   * @param { NativeXComponentParameters } params - 表示用于native开发的XComponent构造参数。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  (params: NativeXComponentParameters): XComponentAttribute;
}

/**
 * 当XComponent所持有的surface创建完成后触发。
 *
 * @typedef { function } OnNativeLoadCallback
 * @param { object } [event] - XComponent对象的context。
 *                             context中包含的接口由开发者在native层定义。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnNativeLoadCallback = (event?: object) => void;

/**
 * 定义XComponentAttribute。
 *
 * @extends CommonMethod<XComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义XComponentAttribute。
 *
 * @extends CommonMethod<XComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class XComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * 当插件加载时触发。
   *
   * @param { function } [callback] - XComponent所持有的surface创建完成后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 当插件加载时触发。
   *
   * @param { function } [callback] - XComponent所持有的surface创建完成后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * 当插件加载时触发。
   * Anonymous Object Rectification.
   *
   * @param { OnNativeLoadCallback } callback - XComponent所持有的surface创建完成后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onLoad(callback: OnNativeLoadCallback): XComponentAttribute;

  /**
   * 当插件销毁时触发。
   *
   * @param { function } event - XComponent销毁后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * 当插件销毁时触发。
   *
   * @param { function } event - XComponent销毁后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * 当插件销毁时触发。
   * Anonymous Object Rectification.
   *
   * @param { VoidCallback } event - XComponent销毁后的回调。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onDestroy(event: VoidCallback): XComponentAttribute;

  /**
   * 设置是否启用AI图像分析器，支持主体识别、文字识别和查找对象。
   * 要使设置生效，此属性必须与XComponentController的StartImageAnalyzer和StopImageAnalyzer一起使用。
   * 此特性不能与overlay属性同时使用。
   * 如果两者都设置，overlay中的CustomBuilder属性将不生效。此特性还依赖于设备能力。
   *
   * @param { boolean } enable - 是否启用AI图像分析器。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): XComponentAttribute;

  /**
   * 设置是否启用安全surface，以保护组件内渲染的内容不被截屏或录屏。
   *
   * @param { boolean } isSecure - 是否启用安全surface。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 13 dynamic
   */
  enableSecure(isSecure: boolean): XComponentAttribute;

  /**
   * 为XComponent设置hdrBrightness。
   *
   * @param { number } brightness - 控制HDR视频的亮度。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 14
   */
  /**
   * 为XComponent设置hdrBrightness。
   *
   * @param { number } brightness - 控制HDR视频的亮度。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  hdrBrightness(brightness: number): XComponentAttribute;

  /**
   * 为XComponent设置hdrBrightness。
   *
   * @param { number } brightness - 控制HDR视频的亮度。
   * @param { HdrType } type - XComponent的HDR类型。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  hdrBrightness(brightness: number, type?: HdrType): XComponentAttribute;
  
  /**
   * 为XComponent启用透明层。
   *
   * @param { boolean } enabled - 是否为XComponent启用透明层。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  enableTransparentLayer(enabled: boolean): XComponentAttribute;
}

/**
 * 定义XComponent组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义XComponent组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const XComponent: XComponentInterface;

/**
 * 定义XComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * 定义XComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const XComponentInstance: XComponentAttribute;
