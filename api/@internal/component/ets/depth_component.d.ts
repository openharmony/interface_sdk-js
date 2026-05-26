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
 * Depth space type enumeration.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DepthSpaceType {
  /**
   * Instance mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INSTANCE = 0,

  /**
   * Global mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  GLOBAL = 1,
}

/**
 * 2D offset for crop frame.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CropOffset {
  /**
   * X coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: int;

  /**
   * Y coordinate.
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
 * Camera buffer crop parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface CameraBufferCrop {
  /**
   * Camera off-screen rendering buffer width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferWidth: int;

  /**
   * Camera off-screen rendering buffer height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  bufferHeight: int;

  /**
   * Crop frame offset relative to buffer top-left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  cropOffset: CropOffset;

  /**
   * Crop frame scale relative to depth component size.
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
 * Camera parameters struct.
 *
 * @interface DepthCameraParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthCameraParams {
  /**
   * Camera position in 3D space.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  position: DepthVector3;

  /**
   * Camera rotation as quaternion (x, y, z, w).
   * Represents the orientation of the camera in 3D space.
   *
   * @type { DepthVector4 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  quaternion: DepthVector4;

  /**
   * Vertical field of view in radians.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  yFov: double;

  /**
   * Near clipping plane distance.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zNear: double;

  /**
   * Far clipping plane distance.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zFar: double;

  /**
   * Camera buffer crop parameters.
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
 * Lighting parameters struct.
 *
 * @interface DepthLightParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthLightParams {
  /**
   * Light direction vector.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction: DepthVector3;

  /**
   * Light color.
   *
   * @type { DepthColorRGB }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  color: DepthColorRGB;

  /**
   * Light intensity.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  intensity: double;
}

/**
 * Defines the options of DepthComponent.
 *
 * @interface DepthComponentOptions
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
   * @type { ?DepthSpaceType } depthSpace
   * @default DepthSpace.INSTANCE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthSpace?: DepthSpaceType;
}

/**
 * Information about the background resource loaded successfully.
 *
 * @interface DepthComponentCompleteEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentCompleteEvent {
  /**
   * Component width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * Component height.
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
 * Callback invoked when the background resource is loaded successfully.
 *
 * @typedef { function } DepthComponentCompleteCallback
 * @param { DepthComponentCompleteEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
type DepthComponentCompleteCallback = (event: DepthComponentCompleteEvent) => void;

/**
 * Information about the background resource loading error.
 *
 * @interface DepthComponentErrorEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthComponentErrorEvent {
  /**
   * Component width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentWidth: double;

  /**
   * Component height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  componentHeight: double;

  /**
   * Business Error.
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
 * Callback invoked when an error occurs during background resource loading.
 *
 * @typedef { function } DepthComponentErrorCallback
 * @param { DepthComponentErrorEvent } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
type DepthComponentErrorCallback = (error: DepthComponentErrorEvent) => void;

/**
 * Callback invoked when the depth map resource is loaded.
 *
 * @typedef { function } DepthMapCallback
 * @param { BusinessError<void> } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
type DepthMapCallback = (error: BusinessError<void>) => void;

/**
 * Style the DepthComponent.
 *
 * @extends CommonMethod<DepthComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class DepthComponentAttribute extends CommonMethod<DepthComponentAttribute> {
  /**
   * Depth map for depth calculation and rendering.
   *
   * @param { ResourceStr | PixelMap } depthMap - Depth map path or PixelMap.
   * @param { DepthMapCallback } [callback] - Callback invoked when the depth map resource is loaded.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback): DepthComponentAttribute;

  /**
   * Camera parameters for depth rendering.
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
   * Lighting parameters for depth rendering.
   *
   * @param { DepthLightParams } light - Lighting parameters including direction, color and intensity.
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
 * @interface DepthComponentInterface
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
 * @type { DepthComponentInterface } DepthComponent
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
 * @type { DepthComponentAttribute } DepthComponentInstance
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const DepthComponentInstance: DepthComponentAttribute;