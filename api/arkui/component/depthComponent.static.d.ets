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
 * @file Defines DepthComponent component
 * @kit ArkUI
 */

import { ResourceStr } from './units';
import { ComponentBuilder, CustomBuilder, CustomBuilderT } from './builder';
import { AttributeModifier, CommonMethod, PixelMap } from './common';

/**
 * Depth space type enumeration.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DepthSpaceType {
  /**
   * Instance mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
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
  GLOBAL = 1,
}

/**
 * Camera parameters struct.
 *
 * @interface DepthCameraParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthCameraParams {
  /**
   * Camera position in 3D space.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  position: DepthVector3;

  /**
   * Camera rotation as quaternion (x, y, z, w).
   *
   * @type { DepthVector4 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  quaternion: DepthVector4;

  /**
   * Vertical field of view in radians.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  yFov: number;

  /**
   * Near clipping plane distance.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  zNear: number;

  /**
   * Far clipping plane distance.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  zFar: number;
}

/**
 * Lighting parameters struct.
 *
 * @interface DepthLightParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthLightParams {
  /**
   * Light direction vector.
   *
   * @type { DepthVector3 }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  direction: DepthVector3;

  /**
   * Light color.
   *
   * @type { DepthColorRGB }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  color: DepthColorRGB;

  /**
   * Light intensity.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  intensity: number;
}

/**
 * Defines the options of DepthComponent.
 *
 * @interface DepthComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentOptions {
  /**
   * Depth space type.
   *
   * @type { ?DepthSpaceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  depthSpace?: DepthSpaceType;
}

/**
 * The DepthComponentAttribute.
 *
 * @extends CommonMethod
 * @interface DepthComponentAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DepthComponentAttribute extends CommonMethod {
  /**
   * Depth map for depth calculation and rendering.
   *
   * @param { ResourceStr | PixelMap } depthMap - Depth map path or PixelMap.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default depthMap(depthMap: ResourceStr | PixelMap): this;

  /**
   * Camera parameters for depth rendering.
   *
   * @param { DepthCameraParams } camera - Camera parameters.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default camera(camera: DepthCameraParams): this;

  /**
   * Lighting parameters for depth rendering.
   *
   * @param { DepthLightParams } light - Lighting parameters.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default light(light: DepthLightParams): this;

  /**
   * Background image offset.
   *
   * @param { Position | Edges | LocalizedEdges } offset - Background offset value.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default backgroundOffset(offset: Position | Edges | LocalizedEdges): this;

  /**
   * Background image scale.
   *
   * @param { ScaleOptions } scale - Background scale value.
   *     <br>Default value:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}.
   * @returns { DepthComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default backgroundScale(scale?: ScaleOptions): this;
}

/**
 * Defines DepthComponent.
 *
 * @param { ResourceStr | PixelMap } background - Background resource.
 * @param { DepthComponentOptions } [options] - DepthComponent options.
 * @returns { DepthComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@ComponentBuilder
export declare function DepthComponent(
  background: ResourceStr | PixelMap,
  options?: DepthComponentOptions,
  content_?: CustomBuilder,
): DepthComponentAttribute
