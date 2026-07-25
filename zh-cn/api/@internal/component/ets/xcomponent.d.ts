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

import { VoidCallback } from './units';

import { CommonMethod } from './common';

/**
 * 描述XComponent所持有的surface的矩形。
 *
   * > **说明：**
   *
   * > 如果未调用[setXComponentSurfaceRect]{@link XComponentController#setXComponentSurfaceRect}接口，且未设置
 * > [border](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#border)和
 * > [padding]{@link CommonMethod#padding}，则**surfaceWidth**和**surfaceHeight**属性默认为**XComponent**的尺寸。
 * >
 * > 请确保**surfaceWidth**和**surfaceHeight**的值不超过8192 px。超过此限制可能导致渲染问题。
 * >
 * > 在沉浸式场景中，**SurfaceRect**的默认布局不包含安全区域。要实现沉浸式效果，必须使用
 * > [setXComponentSurfaceRect]{@link XComponentController#setXComponentSurfaceRect}接口设置surface显示区域。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SurfaceRect {
  /**
   * surface矩形相对于XComponent左上角的X坐标。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  offsetX?: number;

  /**
   * surface矩形相对于XComponent左上角的Y坐标。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  offsetY?: number;

  /**
   * surface矩形的宽度。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  surfaceWidth: number;

  /**
   * surface矩形的高度。
   *
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  surfaceHeight: number;
}

import { XComponentType } from './enums';

import { DrawingCanvas } from './canvas';

/**
 * 定义屏幕旋转时是否锁定当前XComponent所持有的surface的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SurfaceRotationOptions {
  /**
   * 屏幕旋转时是否锁定surface的方向。
   * 如果不设置此参数，默认值为false，表示不锁定方向。
   *
   * **true**：屏幕旋转时锁定surface的方向。
   *
   * **false**：屏幕旋转时不锁定surface的方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  lock?: boolean;
}

/**
 * Surface配置。
 *
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
   * 默认值：**false**。
   *
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
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare class XComponentController {
  /**
   * 用于创建XComponentController实例的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 获取XComponent所持有的surface的ID，可用于@ohos相关接口。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { string } XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  getXComponentSurfaceId(): string;

  /**
   * 获取XComponent对象的context。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { Object } XComponent对象的context。
   *     context中包含的接口由开发者定义。
   *     context作为onLoad回调的第一个参数传入。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  getXComponentContext(): Object;

  /**
   * 设置XComponent所持有的surface的宽度和高度。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * 单位：px。
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
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  setXComponentSurfaceRect(rect: SurfaceRect): void;

  /**
   * 获取XComponent所持有的surface的矩形。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * @returns { SurfaceRect } XComponent所持有的surface的矩形。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentSurfaceRect(): SurfaceRect;

  /**
   * 设置屏幕旋转时是否锁定此XComponent所持有的surface的方向。
   * 该接口仅在XComponent的type设置为SURFACE("surface")时生效。
   *
   * @param { SurfaceRotationOptions } rotationOptions - 屏幕旋转时是否锁定当前XComponent所持有的surface的方向。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  setXComponentSurfaceRotation(rotationOptions: SurfaceRotationOptions): void;

  /**
   * 获取屏幕旋转时此XComponent所持有的surface的方向是否锁定。
   * 该接口仅在XComponent的type设置为SURFACE("surface")时生效。
   *
   * @returns { Required<SurfaceRotationOptions> } surface旋转选项的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  getXComponentSurfaceRotation(): Required<SurfaceRotationOptions>;

  /**
   * 当XComponent所持有的surface创建完成时触发。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * **说明：**
   * 仅当XComponent组件未设置libraryname参数时，会进行该回调。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceCreated(surfaceId: string): void;

  /**
   * 当XComponent所持有的surface大小发生变化时触发（包括XComponent以指定大小创建时）。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * **说明：**
   * 仅当XComponent组件未设置libraryname参数时，会进行该回调。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @param { SurfaceRect } rect - 用于显示XComponent所持有的surface的矩形。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceChanged(surfaceId: string, rect: SurfaceRect): void;

  /**
   * 当XComponent所持有的surface销毁时触发。
   * 该接口仅在XComponent的type设置为SURFACE("surface")或TEXTURE时生效。
   *
   * **说明：**
   * 仅当XComponent组件未设置libraryname参数时，会进行该回调。
   *
   * @param { string } surfaceId - XComponent所持有的surface的ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  onSurfaceDestroyed(surfaceId: string): void;

  /**
   * 配置AI分析并启动AI分析功能，使用前需先启用图像AI分析能力[enableAnalyzer]{@link XComponentAttribute#enableAnalyzer}，仅type为SURFACE或TEXTURE时有效。使用Promise异步回调来返回结果。
   *
   * 由于用于分析的图像帧是调用此接口时捕获的帧，因此请注意此接口的调用时机。
   *
   * 如果在执行完成之前重复调用此接口，将触发错误回调。
   *
   * > **说明：**
   *
   * > 图像分析类型无法动态修改。
   * >
   * > 此接口依赖于设备能力。在不兼容的设备上调用将返回错误码。
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
   * 停止AI分析功能，AI分析展示的内容将被销毁。仅type为SURFACE或TEXTURE时有效。
   *
   * > **说明：**
   *
   * > 如果在startImageAnalyzer接口尚未返回任何结果时调用此接口，将触发错误回调。
   * >
   * > 此特性依赖于设备能力。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  stopImageAnalyzer(): void;

  /**
   * 获取用于在XComponent创建的surface上绘制的Canvas。有关绘制方法的详细信息，请参见[Canvas]{@link @ohos.graphics.drawing:drawing.Canvas}。
   *
   * @returns { DrawingCanvas | null} 返回用于在XComponent创建的surface上绘制的Canvas。
   *     如果surface不可用，则返回null。
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
   * > **说明：**
   * >
   * > 此接口仅在XComponent的type为TEXTURE或SURFACE时生效。
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 20]
 * @atomicservice
 * @since 12 dynamic
 */
declare interface XComponentOptions {
  /**
   * 组件的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  type: XComponentType;

  /**
   * 绑定到组件的控制器，可用于调用组件的方法。
   * 该参数仅在type为SURFACE或TEXTURE时有效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  controller: XComponentController;

  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器，仅类型为SURFACE或TEXTURE时有效。未设置时不配置AI分析选项，可通过[enableAnalyzer]{@link XComponentAttribute#enableAnalyzer}属性单独启用AI分析。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  imageAIOptions?: ImageAIOptions;

  /**
   * 给组件设置关联屏幕ID，通过此项可在组件上显示关联屏幕画面。屏幕ID可通过@ohos.screen.getAllScreens接口获取。<br/>默认值：**0**，表示主屏幕。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 17 dynamic
   */
  screenId?: number;
}

/**
 * 定义native xcomponent参数。使用此类构造参数创建的XComponent可以将其对应的[FrameNode]{@link ../../../arkui/FrameNode}对象传递到Native侧，从而能够使用NDK接口进行surface生命周期相关设置和[组件事件监听](docroot://ui/ndk-listen-to-component-events.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 19 dynamic
 */
declare interface NativeXComponentParameters {
  /**
   * XComponent的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 19 dynamic
   */
  type: XComponentType;

  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。未设置时不配置AI分析选项，仅类型为SURFACE或TEXTURE时有效。
   *
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
 * **XComponent**提供用于图形绘制和媒体数据写入的[surface](docroot://ui/napi-xcomponent-guidelines.md#overview)，XComponent负责将其嵌入到视图中，支持应用自定义surface的位置和大小。同时支持AI图像分析、HDR视频亮度调节、防截屏录屏隐私保护、画布自绘制等能力，适用于视频播放、相机预览、游戏渲染、图像AI识别等需要高性能自绘制和媒体内容展示的场景。具体指南请参考[自定义渲染（XComponent）文档](docroot://ui/napi-xcomponent-guidelines.md)。
 *
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
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
  (value: { id: string; type: string; libraryname?: string; controller?: XComponentController }): XComponentAttribute

  /**
   * 创建**XComponent**组件，其生命周期回调可以从native侧触发。
   *
   * 从API版本12开始，该接口不再维护。建议使用[XComponent(options: XComponentOptions)](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-xcomponent.md#xcomponent12)替代。
   *
   * @param { object } value - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  (value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController }): XComponentAttribute

  /**
   * 创建**XComponent**组件，允许您在ArkTS侧获取**SurfaceId**值，注册**XComponent**所持有的surface的生命周期回调以及触摸、鼠标、按键等组件事件的回调，并配置AI分析器功能。
   *
   * @param { XComponentOptions } options - 表示XComponent的选项。
   * @returns { XComponentAttribute } XComponent的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  (options: XComponentOptions): XComponentAttribute;

  /**
   * 在native侧获取**XComponent**节点实例，并注册**XComponent**所持有的surface的生命周期回调以及触摸、鼠标、按键等组件事件的回调。
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
 * XComponent的Native加载完成后回调事件，用于向开发者传递XComponent实例对象的context。与[onSurfaceCreated]{@link XComponentController#onSurfaceCreated}的区别：onLoad回调参数为context对象，适用于设置libraryname参数的场景；onSurfaceCreated回调参数为surfaceId，适用于未设置libraryname参数的场景。onLoad触发时机早于onSurfaceCreated。
 *
 * @param { object } [event] - 获取XComponent实例对象的context，context上挂载的方法由开发者在Native层定义。不传该参数时无法获取context。
 *                             当需要在回调中使用Native层定义的方法时传入此参数；不传入时，回调中无法获取context对象。
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
 * 除通用属性外，还支持以下属性。
 *
 * 从API版本12开始，当type设置为**SURFACE**或**TEXTURE**时，支持[通用事件]{@link ./common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare class XComponentAttribute extends CommonMethod<XComponentAttribute> {
  /**
   * 插件加载完成时回调事件。
   *
   * @param { function } [callback] - 插件加载完成时回调事件，用于获取XComponent实例对象的context。
   *     [since 8 - 17]
   * @param { OnNativeLoadCallback } callback - 插件加载完成时回调事件，用于获取XComponent实例对象的context。 [since 18]
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  onLoad(callback: OnNativeLoadCallback): XComponentAttribute;

  /**
   * 当插件销毁时触发。
   *
   * @param { function } event - XComponent销毁后的回调。 [since 8 - 17]
   * @param { VoidCallback } event - XComponent销毁后的回调。 [since 18]
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  onDestroy(event: VoidCallback): XComponentAttribute;

  /**
   * 设置是否启用AI图像分析器，支持主体识别、文字识别和查找对象。
   *
   * 要使设置生效，此属性必须与XComponentController的[StartImageAnalyzer]{@link XComponentController#startImageAnalyzer}和[StopImageAnalyzer]{@link XComponentController#stopImageAnalyzer}一起使用。
   *
   * 此特性不能与[overlay](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#overlay)属性同时使用。
   * 如果两者都设置，overlay中的CustomBuilder属性将不生效。此特性还依赖于设备能力。
   *
   * @param { boolean } enable - 是否启用AI图像分析器。<br>**true**：启用；**false**：禁用。<br>
   *     默认值：**false**。
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
   * @param { boolean } isSecure - 是否启用安全surface。<br>值**true**表示启用安全surface，**false**表示相反的情况。<br>
   *     默认值：**false**。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 13 dynamic
   */
  enableSecure(isSecure: boolean): XComponentAttribute;

  /**
   * 用于调整组件播放HDR视频的亮度。
   *
   * **说明：**
   * 仅XComponent构造参数中的type为**XComponentType**.SURFACE时该接口生效，否则该接口不生效。
   *
   * @param { number } brightness - HDR视频的亮度。<br/>取值范围：[0.0, 1.0]。小于0.0的值按0.0处理，大于1.0的值按1.0处理，其他异常值按1.0处理。
   *                                <br/>**0.0**表示视频按照SDR亮度显示，**1.0**表示视频按照当前允许的最高HDR亮度显示。<br/>默认值：**1.0**。
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 14 - 19]
   * @publicapi [since 20]
   * @stagemodelonly
   * @atomicservice [since 20]
   * @since 14 dynamic
   */
  hdrBrightness(brightness: number): XComponentAttribute;

  /**
   * 用于调整组件显示HDR内容时的亮度。<br/>当参数type设置为非**HdrType**.DEFAULT时，调用该接口前需先检查Display的hdrFormats属性是否包含对应的HDRFormat。
   * 仅当hdrFormats包含对应的HDRFormat时，当前设备才支持对应的HDR类型，参数设置才会生效；否则将使用默认值**HdrType**.DEFAULT。
   * 其映射关系如下：<br/>| type取值 | hdrFormats需包含的HDRFormat |
   * <br/>| -------- | -------- |
   * <br/>| **HdrType**.AIHDR | HDRFormat.VIDEO_AIHDR |
   *
   * **说明：**
   * 仅XComponent构造参数中的type为**XComponentType**.SURFACE时该接口生效，否则该接口不生效。
   *
   * @param { number } brightness - HDR内容的亮度。<br/>取值范围：[0.0, 1.0]。小于0.0的值按0.0处理，大于1.0的值按1.0处理，其他异常值按1.0处理。
   *                                <br/>**0.0**表示内容按照SDR亮度显示，**1.0**表示内容按照当前允许的最高HDR亮度显示。<br/>默认值：**1.0**。
   * @param { HdrType } [type] - 显示HDR内容时的HDR类型。<br/>默认值：**HdrType.DEFAULT**
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  hdrBrightness(brightness: number, type?: HdrType): XComponentAttribute;

  /**
   * 当背景颜色设置半透明的XComponent需要开启独立图层（即将该组件的内容置于单独的合成图层上进行渲染，以避免半透明区域与下方内容混合时出现渲染异常）时，使用本接口。
   *
   * 使用本接口，并不代表一定会被设置为独立图层。出于以下原因：硬件规格（如硬件不支持独立图层进行硬件合成）、软件规格（如独立图层与带有模糊效果的UI组件相交），将导致半透明XComponent无法设置为独立图层。
   *
   * 由于绘制独立图层的原理，使用本接口时需要按照以下要求使用，否则会出现显示问题。
   *
   * 1. 当设置了独立图层的XComponent下方有相交的XComponent时，下方的XComponent也应该设置为独立图层。
   *
   * 2. 在通过本接口设置了独立图层且背景为半透明的XComponent下方摆放UI组件，合成时会出现UI组件显示内容消失的异常。已开启独立图层的XComponent需要在所有与其相交的UI元素下方。
   *
   * 3. 在布局静态的场景下对带半透明背景XComponent设置独立图层，例如：非页面跳转场景、视频弹幕静止的播放场景。
   *
   * @param { boolean } enabled - 是否开启组件背景半透明状态下的独立图层。<br/>true：开启独立图层；false：关闭独立图层。
   *                              <br/>设置为true时，由于硬件规格（如硬件不支持独立图层进行硬件合成）或软件规格（如独立图层与带有模糊效果的UI组件相交）等原因，可能无法实际生效，详见上方接口说明。
   *                              <br/>默认值：**false**
   * @returns { XComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   */
  enableTransparentLayer(enabled: boolean): XComponentAttribute;
}

/**
 * **XComponent**提供用于图形绘制和媒体数据写入的[surface](docroot://ui/napi-xcomponent-guidelines.md#overview)，XComponent负责将其嵌入到视图中，支持应用自定义surface的位置和大小。同时支持AI图像分析、HDR视频亮度调节、防截屏录屏隐私保护、画布自绘制等能力，适用于视频播放、相机预览、游戏渲染、图像AI识别等需要高性能自绘制和媒体内容展示的场景。具体指南请参考[自定义渲染（XComponent）文档](docroot://ui/napi-xcomponent-guidelines.md)。
 *
 * > **说明：**
 *
 * ###### 子组件
 *
 * 不支持
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare const XComponent: XComponentInterface;

/**
 * 定义XComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 8 dynamic
 */
declare const XComponentInstance: XComponentAttribute;
