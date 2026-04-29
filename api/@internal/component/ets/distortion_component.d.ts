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
 * Defines the Vector2 type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector2 = import('../api/arkui/Graphics').Vector2;

/**
 * Defines the Vector4 type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare type Vector4 = import('../api/arkui/Graphics').Vector4;

/**
 * DistortionParam defines parameters for spatial distortion effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionParam {
  /**
   * Coordinate of top-left corner.
   *
   * @default [0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topLeft: Vector2;
  /**
   * Coordinate of top-right corner.
   *
   * @default [1, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  topRight: Vector2;
  /**
   * Coordinate of bottom-left corner.
   *
   * @default [0, 1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomLeft: Vector2;
  /**
   * Coordinate of bottom-right corner.
   *
   * @default [1, 1]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  bottomRight: Vector2;
  /**
   * Barrel distortion amplitude of four edges.
   *
   * @default [0, 0, 0, 0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  barrelDistortion: Vector4;
}

/**
 * Defines the DistortionComponent constructor options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare interface DistortionComponentOptions {
  /**
   * Use spatial distortion effects.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortion?: DistortionParam;
}

/**
 * Create DistortionComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
interface DistortionComponentInterface {
  /**
   * Creates a DistortionComponent with content.
   *
   * @param { DistortionComponentOptions } [options] - DistortionComponent Options.
   * @returns { DistortionComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  (options?: DistortionComponentOptions): DistortionComponentAttribute;
}

/**
 * Defines the DistortionComponent attribute functions
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare class DistortionComponentAttribute extends CommonMethod<DistortionComponentAttribute> {}

/**
 * Defines DistortionComponent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare const DistortionComponent: DistortionComponentInterface;
