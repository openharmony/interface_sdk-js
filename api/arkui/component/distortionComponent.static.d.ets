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

import { memo, ComponentBuilder } from './../stateManagement/runtime';
import { AttributeModifier, CommonMethod } from './common';
import { Vector2, Vector4 } from './Graphics'

/**
 * DistortionParam defines parameters for spatial distortion effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DistortionParam {
  /**
   * Coordinate of top-left corner.
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  topLeft: Vector2;
  /**
   * Coordinate of top-right corner.
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  topRight: Vector2;
  /**
   * Coordinate of bottom-left corner.
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  bottomLeft: Vector2;
  /**
   * Coordinate of bottom-right corner.
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  bottomRight: Vector2;
  /**
   * Distortion parameters for spatial distortion effects.
   *
   * @default [0, 0, 0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  barrelDistortion: Vector4;
}

/**
 * Defines the DistortionComponent constructor options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DistortionComponentOptions {
  /**
   * Use spatial distortion effects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  distortion?: DistortionParam;
}

/**
 * Defines the DistortionComponent attribute functions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface DistortionComponentAttribute extends CommonMethod {}

/**
 * Defines a DistortionComponent that provides spatial distortion visual effects.
 *
 * @param { ComponentContent } content - Content builder function.
 * @param { DistortionComponentOptions } [options] - DistortionComponent Options.
 * @returns { DistortionComponentAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
@memo
@ComponentBuilder
export declare function DistortionComponent(
    content: ComponentContent,
    options?: DistortionComponentOptions,
): DistortionComponentAttribute;
