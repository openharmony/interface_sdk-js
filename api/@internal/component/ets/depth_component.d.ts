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
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DepthSpaceType {
  /**
   * Instance mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  INSTANCE = 0,

  /**
   * Global mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  GLOBAL = 1,
}

/**
 * Camera parameters struct.
 *
 * @interface DepthCameraParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthCameraParams {
  /**
   * Camera position in 3D space.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  quaternion: DepthVector4;

  /**
   * Vertical field of view in radians.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  yFov: double;

  /**
   * Near clipping plane distance.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zNear: double;

  /**
   * Far clipping plane distance.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  zFar: double;
}

/**
 * Lighting parameters struct.
 *
 * @interface DepthLightParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface DepthLightParams {
  /**
   * Light direction vector.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction: DepthVector3;

  /**
   * Light color.
   *
   * @type { DepthColorRGB }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  color: DepthColorRGB;

  /**
   * Light intensity.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
 * @stagemodelonly
 * @crossplatform
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthSpace?: DepthSpaceType;
}

/**
 * Style the DepthComponent.
 *
 * @extends CommonMethod<DepthComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare class DepthComponentAttribute extends CommonMethod<DepthComponentAttribute> {
  /**
   * Depth map for depth calculation and rendering.
   *
   * @param { ResourceStr | PixelMap } depthMap - Depth map path or PixelMap.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  depthMap(depthMap: ResourceStr | PixelMap): DepthComponentAttribute;

  /**
   * Camera parameters for depth rendering.
   *
   * @param { DepthCameraParams } camera - Camera parameters.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  light(light: DepthLightParams): DepthComponentAttribute;

  /**
   * Background image offset.
   *
   * @param { Position | Edges | LocalizedEdges } offset - Background offset value.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundOffset(offset: Position | Edges | LocalizedEdges): DepthComponentAttribute;

  /**
   * Background image scale.
   *
   * @param { ScaleOptions } scale - Background scale value.
   *     <br>Default value:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  backgroundScale(scale?: ScaleOptions): DepthComponentAttribute;
}

/**
 * DepthComponentInterface
 *
 * @interface DepthComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface DepthComponentInterface {
  /**
   * Defines the DepthComponent constructor.
   *
   * @param { ResourceStr } background - Background resource (required).
   * @param { DepthComponentOptions } [options] - DepthComponent options.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (background: ResourceStr, options?: DepthComponentOptions): DepthComponentAttribute;
}

/**
 * Defines DepthComponent Component.
 *
 * @type { DepthComponentInterface } DepthComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const DepthComponent: DepthComponentInterface;

/**
 * Defines DepthComponent Component instance.
 *
 * @type { DepthComponentAttribute } DepthComponentInstance
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare const DepthComponentInstance: DepthComponentAttribute;
