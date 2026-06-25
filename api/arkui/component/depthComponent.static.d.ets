"use static"
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

import { BusinessError} from '../../@ohos.base'
import { CommonMethod, PixelMap, DepthVector3, DepthVector4, DepthColorRGB } from './common';
import { ResourceStr } from './units';
import { Builder, ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';

/**
 * Depth space type enumeration.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DepthSpaceType {
  /**
   * Instance mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  INSTANCE = 0,

  /**
   * Global mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  GLOBAL = 1
}

/**
 * 2D offset for crop frame.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CropOffset {
  /**
   * X coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: int;

  /**
   * Y coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: int;
}

/**
 * Camera buffer crop parameters.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CameraBufferCrop {
  /**
   * Camera off-screen rendering buffer width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  bufferWidth: int;

  /**
   * Camera off-screen rendering buffer height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  bufferHeight: int;

  /**
   * Crop frame offset relative to buffer top-left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  cropOffset: CropOffset;

  /**
   * Crop frame scale relative to depth component size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  cropScale: double;
}

/**
 * Camera parameters struct.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthCameraParams {
  /**
   * Camera position in 3D space.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: DepthVector3;

  /**
   * Camera rotation as quaternion (x, y, z, w).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  quaternion: DepthVector4;

  /**
   * Vertical field of view in radians.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  yFov: double;

  /**
   * Near clipping plane distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  zNear: double;

  /**
   * Far clipping plane distance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  zFar: double;

  /**
   * Camera buffer crop parameters.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  cameraBufferCrop?: CameraBufferCrop;
}

/**
 * Lighting parameters struct.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthLightParams {
  /**
   * Light direction vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  direction: DepthVector3;

  /**
   * Light color.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  color: DepthColorRGB;

  /**
   * Light intensity.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intensity: double;
}

/**
 * Defines the options of DepthComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentOptions {
  /**
   * Depth space type.
   *
   * @default DepthSpaceType.INSTANCE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  depthSpace?: DepthSpaceType;
}

/**
 * Information about the background resource loaded successfully.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentCompleteEvent {
  /**
   * Component width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  componentWidth: double;

  /**
   * Component height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  componentHeight: double;
}

/**
 * Callback invoked when the background resource is loaded successfully.
 *
 * @param { DepthComponentCompleteEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type DepthComponentCompleteCallback = (event: DepthComponentCompleteEvent) => void;

/**
 * Information about the background resource loading error.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentErrorEvent {
  /**
   * Component width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  componentWidth: double;

  /**
   * Component height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  componentHeight: double;

  /**
   * Business Error.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  error?: BusinessError<void>;
}

/**
 * Callback invoked when an error occurs during background resource loading.
 *
 * @param { DepthComponentErrorEvent } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type DepthComponentErrorCallback = (error: DepthComponentErrorEvent) => void;

/**
 * Callback invoked when the depth map resource is loaded.
 *
 * @param { BusinessError<void> } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare type DepthMapCallback = (error: BusinessError<void>) => void;

/**
 * Style the DepthComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentAttribute extends CommonMethod {
  /**
   * Depth map for depth calculation and rendering.
   *
   * @param { ResourceStr | PixelMap } depthMap - Depth map path or PixelMap.
   * @param { DepthMapCallback } [callback] - Callback invoked when the depth map resource is loaded.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default depthMap(depthMap: ResourceStr | PixelMap, callback?: DepthMapCallback): this;

  /**
   * Camera parameters for depth rendering.
   *
   * @param { DepthCameraParams } camera - Camera parameters.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default camera(camera: DepthCameraParams): this;

  /**
   * Lighting parameters for depth rendering.
   *
   * @param { DepthLightParams } light - Lighting parameters including direction, color and intensity.
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default light(light: DepthLightParams): this;

  /**
   * Triggered when the background resource is loaded successfully.
   *
   * @param { DepthComponentCompleteCallback } callback
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onComplete(callback: DepthComponentCompleteCallback): this;

  /**
   * Triggered when an error occurs during background resource loading.
   *
   * @param { DepthComponentErrorCallback } callback
   * @returns { this }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onError(callback: DepthComponentErrorCallback): this;

  /**
   * Set DepthComponent options.
   *
   * @param { ResourceStr | PixelMap } background - Background resource (required).
   * @param { DepthComponentOptions } [options] - DepthComponent options.
   * @returns { this } Returns instance of  DepthComponentAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setDepthComponentOptions(background: ResourceStr | PixelMap, options?: DepthComponentOptions): this;
}

/**
 * Defines DepthComponent Component
 *
 * @param { ResourceStr | PixelMap } background - Background resource (required).
 * @param { DepthComponentOptions } [options] - DepthComponent options.
 * @param { CustomBuilder } [content_] - Subcomponents of DepthComponent.
 * @returns { DepthComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function DepthComponent(
    background: ResourceStr | PixelMap,
    options?: DepthComponentOptions,
    content_?: CustomBuilder,
): DepthComponentAttribute;

/**
 * Defines DepthComponent
 *
 * @param { CustomBuilderT<DepthComponentAttribute> } style_ - DepthComponent attribute instance
 * @param { CustomBuilder } [content_] - container
 * @returns { DepthComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function DepthComponent(
  style_: CustomBuilderT<DepthComponentAttribute>,
  content_?: CustomBuilder,
): DepthComponentAttribute;
