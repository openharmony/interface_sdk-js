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
 * @file System API
 * @kit ArkUI
 */

/**
 * Enumerates depth space types.
 *
 * > **NOTE**
 * >
 * > In global mode, other processes reuse the background, depth map, camera parameters, and lighting parameters of the
 * > wallpaper process, and these cannot be customized.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DepthSpaceType {
  /**
   * Instance mode, which uses the background, depth map, camera parameters, and lighting parameters of the current
   * process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INSTANCE = 0,

  /**
   * Global mode, which uses the global background, depth map, camera parameters, and lighting parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GLOBAL = 1
}

/**
 * Provides crop offset.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CropOffset {
  /**
   * Horizontal offset, in pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: int;

  /**
   * Vertical offset, in pixels.
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
 * Provides camera buffer crop parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CameraBufferCrop {
  /**
   * Width of the base image, in pixels. Ensure that the width of the input image is consistent with the actual image
   * width; otherwise, display exceptions such as position offset may occur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferWidth: int;

  /**
   * Height of the base image, in pixels. Ensure that the height of the input image is consistent with the actual image
   * height; otherwise, display exceptions such as position offset may occur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferHeight: int;

  /**
   * Crop offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  cropOffset: CropOffset;

  /**
   * Scale factor of the crop area. The base size of the crop area is the size of the **DepthComponent** component.
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
 * Provides camera parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthCameraParams {
  /**
   * Position of the camera in 3D space, without a unit. The value indicates the coordinates in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position: DepthVector3;

  /**
   * Rotation quaternion of the camera, represented as (x, y, z, w). There is no unit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  quaternion: DepthVector4;

  /**
   * Vertical field of view of the camera, in radians.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  yFov: double;

  /**
   * Distance to the near clipping plane, without a unit. The value must be a positive number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zNear: double;

  /**
   * Distance to the far clipping plane, without a unit. The value must be a positive number.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zFar: double;

  /**
   * Camera buffer crop parameters. If not set, the component layout size is used as the default image reference size,
   * with a crop offset of (0, 0) and a scale factor of 1.0.
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
 * Provides lighting parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthLightParams {
  /**
   * Lighting direction vector, without a unit. The value indicates the coordinates in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction: DepthVector3;

  /**
   * Lighting color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  color: DepthColorRGB;

  /**
   * Lighting intensity, without a unit. The value range is [0, +∞).
   *
   * The recommended value range is [0, 1]. When set to 0, there is no light.
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
 * Provides configuration options of **DepthComponent**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentOptions {
  /**
   * Depth space type.
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
   * Color space of the rendering surface. When set, the color space information is applied to the underlying rendering
   * surface. When not set, no color space information is applied, and the rendering surface retains the default color
   * space.
   * Default value: **colorSpaceManager.ColorSpace.SRGB**.
   *
   * @default colorSpaceManager.ColorSpace.SRGB
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  colorSpace?: import('../api/@ohos.graphics.colorSpaceManager').default.ColorSpace;

  /**
   * Scale factor of the 3D rendering window, applied to both width and height. Value range: (0.0, 1.0]. Values outside
   * this range are invalid (the previous value is inherited; if no value has been set, the default value is used).
   * Default value: **1.0**.
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
 * Provides the event information about the successful loading of the background resource.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentCompleteEvent {
  /**
   * Width of the component, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * Height of the component, in vp.
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
 * type DepthComponentCompleteCallback = (event: DepthComponentCompleteEvent) => void
 *
 * @param { DepthComponentCompleteEvent } event - Event information about the successful loading of the background
 *     resource.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthComponentCompleteCallback = (event: DepthComponentCompleteEvent) => void;

/**
 * Provides the event information about the background resource load failure.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentErrorEvent {
  /**
   * Width of the component, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * Height of the component, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentHeight: double;

  /**
   * Error information of the load failure.
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
 * type DepthComponentErrorCallback = (error: DepthComponentErrorEvent) => void
 *
 * @param { DepthComponentErrorEvent } error - Event information about the background resource load failure.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthComponentErrorCallback = (error: DepthComponentErrorEvent) => void;

/**
 * type DepthMapCallback = (error: BusinessError&lt;void&gt;) => void
 *
 * @param { BusinessError<void> } error - Error information returned when the depth map resource finishes loading. On
 *     load success, **error.code** is **0**; on load failure, **error** contains the error code and error message.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type DepthMapCallback = (error: BusinessError<void>) => void;

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class DepthComponentAttribute extends CommonMethod<DepthComponentAttribute> {
  /**
   * Sets the depth map used for depth calculation and rendering. This API returns the result asynchronously through a
   * callback.
   *
   * > **NOTE**
   * >
   * > A depth map is a two-dimensional matrix image that describes the distance between each pixel in the background
   * > and the camera in 3D space.
   * >
   * > Its data format is a grayscale image. A pixel with a larger grayscale value (whiter color) is closer to the
   * > camera.
   *
   * @param { ResourceStr | PixelMap } depthMap - Depth map resource or **PixelMap** object, referenced in the same way
   *     as a static background image. The depth map needs to be set only when the background is a static image. The
   *     depth map must have the same resolution as the background image.
   * @param { DepthMapCallback } [callback] - Callback invoked when the depth map finishes loading. On load success,
   *     **error.code** is **0**; on load failure, **error** contains the error code and error message.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback): DepthComponentAttribute;

  /**
   * Sets the camera parameters used for depth rendering.
   *
   * > **NOTE**
   * >
   * > When an image is used as the background, updating the camera parameters will not change the background.
   *
   * @param { DepthCameraParams } camera - Camera parameters.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  camera(camera: DepthCameraParams): DepthComponentAttribute;

  /**
   * Sets the lighting parameters used for depth rendering.
   *
   * @param { DepthLightParams } light - Lighting parameters, including the direction, color, and intensity.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  light(light: DepthLightParams): DepthComponentAttribute;

  /**
   * Triggered when the background resource is loaded successfully.
   *
   * @param { DepthComponentCompleteCallback } callback
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onComplete(callback: DepthComponentCompleteCallback): DepthComponentAttribute;

  /**
   * Triggered when an error occurs during background resource loading.
   *
   * @param { DepthComponentErrorCallback } callback
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
   * Defines the DepthComponent constructor.
   *
   * @param { ResourceStr | PixelMap } background - Background resource or PixelMap (required).
   * @param { DepthComponentOptions } [options] - DepthComponent options.
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