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
 * 景深组件利用背景与深度图，生成具有景深空间效果的内容。
 * 
 * > **说明：**
 * >
 * > - 子组件需要设置[空间效果]{@link ./common}，才能与景深组件的背景产生交互效果。
 * >
 * > - 具备基本的计算机图形学知识有助于更好地使用该组件。
 * 
 * @file
 * @kit ArkUI
 */

/**
 * 景深空间类型枚举。
 * 
 * > **说明：**
 * >
 * > 全局模式下，其余进程复用壁纸进程的背景、深度图及相机和光照参数，且不可自定义。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DepthSpaceType {
  /**
   * 实例模式。使用当前进程的背景、深度图、相机参数及光照参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INSTANCE = 0,

  /**
   * 全局模式。使用全局的背景、深度图、相机参数及光照参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GLOBAL = 1,
}

/**
 * 裁剪偏移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CropOffset {
  /**
   * 水平方向偏移量，单位为像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: int;

  /**
   * 垂直方向偏移量，单位为像素。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: int;
}

/**
 * 相机移轴裁剪参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CameraBufferCrop {
  /**
   * 基准图宽度，单位为像素。需确保传入图片的宽度与实际图片宽度一致，否则可能导致显示异常，如位置偏移。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferWidth: int;

  /**
   * 基准图高度，单位为像素。需确保传入图片的高度与实际图片高度一致，否则可能导致显示异常，如位置偏移。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferHeight: int;

  /**
   * 裁剪区域偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  cropOffset: CropOffset;

  /**
   * 裁剪区域缩放比例，裁剪区基础大小为DepthComponent组件大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  cropScale: double;
}

/**
 * 相机参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthCameraParams {
  /**
   * 相机在三维空间中的位置。无单位，其值表示3D空间中的坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position: DepthVector3;

  /**
   * 相机旋转四元数，按(x, y, z, w)表示。无单位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  quaternion: DepthVector4;

  /**
   * 相机垂直方向视场角，单位为弧度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  yFov: double;

  /**
   * 近裁剪面距离。无单位。必须为正数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zNear: double;

  /**
   * 远裁剪面距离。无单位。必须为正数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zFar: double;

  /**
   * 相机移轴裁剪参数。未设置时默认使用组件布局尺寸作为默认图像基准大小，裁剪偏移量为(0, 0)，缩放比例为1.0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  cameraBufferCrop?: CameraBufferCrop;
}

/**
 * 光照参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthLightParams {
  /**
   * 光照方向向量。无单位，其值表示3D空间中的坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction: DepthVector3;

  /**
   * 光照颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  color: DepthColorRGB;

  /**
   * 光照强度。无单位，取值范围[0, +∞)。
   * 
   * 建议取值范围[0, 1]，当设置为0时，无光照。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  intensity: double;
}

/**
 * 景深组件配置项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentOptions {
  /**
   * 景深空间类型。
   *
   * @default DepthSpace.INSTANCE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthSpace?: DepthSpaceType;

  /**
   * 3D渲染窗口的缩放比例，同时作用于宽度和高度。取值范围：(0.0, 1.0]，超出该范围的值无效（继承之前的取值，如果之前未设置取默认值）。默认值：1.0。
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  render3DScale?: double;
}

/**
 * 背景资源加载成功的事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentCompleteEvent {
  /**
   * 组件宽度，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * 组件高度，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentHeight: double;
}

/**
 * 背景资源加载成功的回调函数。使用callback异步回调。
 *
 * @param { DepthComponentCompleteEvent } event - 背景资源加载成功的事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthComponentCompleteCallback = (event: DepthComponentCompleteEvent) => void;

/**
 * 背景资源加载失败的事件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentErrorEvent {
  /**
   * 组件宽度，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * 组件高度，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentHeight: double;

  /**
   * 加载失败的错误信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  error?: BusinessError<void>;
}

/**
 * 背景资源加载失败的回调函数。使用callback异步回调。
 *
 * @param { DepthComponentErrorEvent } error - 背景资源加载失败的事件信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthComponentErrorCallback = (error: DepthComponentErrorEvent) => void;

/**
 * 深度图资源加载完成时的回调函数。使用callback异步回调。
 *
 * @param { BusinessError<void> } error - 深度图资源加载完成时返回的错误信息。加载成功时error.code为0，加载失败时error中包含错误码和错误信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthMapCallback = (error: BusinessError<void>) => void;

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class DepthComponentAttribute extends CommonMethod<DepthComponentAttribute> {
  /**
   * 设置用于景深计算和渲染的深度图。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 深度图是用于描述在3D空间中，背景中每个像素点与相机距离的二维矩阵图像。
   * > > 其数据格式为灰阶图，灰度值越大（颜色越白）的像素点距离相机越近。
   *
   * @param { ResourceStr | PixelMap } depthMap - 深度图资源或PixelMap对象，引用方式与静态背景图一致。仅背景为静态图时需要设置深度图。深度图需要与背景图的分辨率保持一致。
   * @param { DepthMapCallback } [callback] - 深度图加载完成时的回调函数。加载成功时error.code为0，加载失败时error中包含错误码和错误信息。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback): DepthComponentAttribute;

  /**
   * 设置景深渲染使用的相机参数。
   * 
   * > **说明：**
   * >
   * > 以图片作为背景时，相机参数更新不会引起背景的变化。
   *
   * @param { DepthCameraParams } camera - 相机参数。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  camera(camera: DepthCameraParams): DepthComponentAttribute;

  /**
   * 设置景深渲染使用的光照参数。
   *
   * @param { DepthLightParams } light - 光照参数，包含方向、颜色和强度。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  light(light: DepthLightParams): DepthComponentAttribute;

  /**
   * 背景资源加载成功时触发该回调。使用callback异步回调。
   *
   * @param { DepthComponentCompleteCallback } callback - 背景资源加载成功的回调函数。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onComplete(callback: DepthComponentCompleteCallback): DepthComponentAttribute;

  /**
   * 背景资源加载出现错误时触发该回调。使用callback异步回调。
   *
   * @param { DepthComponentErrorCallback } callback - 背景资源加载失败的回调函数。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onError(callback: DepthComponentErrorCallback): DepthComponentAttribute;
}

/**
 * DepthComponentInterface
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface DepthComponentInterface {
  /**
   * 创建景深组件。
   *
   * @param { ResourceStr | PixelMap } background - 背景资源。支持静态图片或3D模型。
   * 
   * 静态图支持加载PixelMap和ResourceStr的数据源，引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。
   * 
   * 3D模型仅支持加载ResourceStr的数据源，仅支持glTF和glb的3D模型格式。ResourceStr包含Resource和string格式。其中string格式可用于加载本地3D模型，支持绝对路径或file://前缀的沙箱
   * URI，不支持网络资源的加载；Resource格式可以跨包/跨模块访问模型资源文件，推荐以该方式加载本地3D模型。
   * @param { DepthComponentOptions } [options] - 景深组件配置项。默认值：`{ depthSpace: DepthSpaceType.INSTANCE }`。
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (background: ResourceStr | PixelMap, options?: DepthComponentOptions): DepthComponentAttribute;
}

/**
 * Defines DepthComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const DepthComponent: DepthComponentInterface;

/**
 * Defines DepthComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const DepthComponentInstance: DepthComponentAttribute;