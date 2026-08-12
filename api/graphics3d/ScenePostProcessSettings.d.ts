/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file Defines 3D post process related interfaces
 * @kit ArkGraphics3D
 */

/**
 * Enumerates the tone mapping types.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum ToneMappingType {
  /**
   * Academy Color Encoding System (ACES).
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES = 0,

  /**
   * The tone mapping type is ACES_2020.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES_2020 = 1,

  /**
   * The tone mapping type is FILMIC.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  FILMIC = 2,
}

/**
 * Describes the tone mapping settings.
 *
 * @typedef ToneMappingSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ToneMappingSettings {
  /**
   * Tone mapping type. The default value is undefined.
   *
   * @type { ?ToneMappingType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  type?: ToneMappingType;

  /**
   * Exposure. The value must be greater than 0. The default value is undefined.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  exposure?: double;
}

/**
 * Describes the settings for bloom effects.
 * It is unavailable when RenderingPipelineType is set to FORWARD_LIGHTWEIGHT.
 * 
 * @typedef BloomSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface BloomSettings {
  /**
   * Hard threshold. The value is a non-negative number. The default value is 1.0.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdHard?: double;

  /**
   * Soft threshold. The value is a non-negative number. The default value is 2.0.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdSoft?: double;

  /**
   * Scale factor. The value must be greater than 0. The default value is 1.0.
   * 
   * @type { ?double}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scaleFactor?: double;

  /**
   * Scatter amount. The value must be greater than 0. The default value is 1.0.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scatter?: double;
}

/**
 * Describes the settings for vignette effects.
 *
 * @typedef VignetteSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface VignetteSettings {
  /**
   * Application scope. The value range is [0, 1].
   * When the value is 0, the application scope is minimized.
   * When the value is 1, the application scope is global.
   * The default value is sqrt(0.5).
   *
   * @type { ?double }
   * @default sqrt(0.5)
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  roundness?: double;

  /**
   * Effect strength. The value range is [0, 1].
   * The value 0 indicates no vignetting effect, and the value 1 indicates maximum vignetting intensity.
   * The default value is 0.4.
   *
   * @type { ?double }
   * @default 0.4
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  intensity?: double;
}

/**
 * Describes the settings for color fringing. It is unavailable when RenderingPipelineType is set to FORWARD_LIGHTWEIGHT.
 *
 * @typedef ColorFringeSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface ColorFringeSettings {
  /**
   * Strength of the effect. The value ranges from 0 to 1. The default value is 0.2.
   *
   * @type { ?double }
   * @default 0.2
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  intensity?: double;
}

/**
 * Post-processing settings, which are used to configure the image processing effect after camera rendering,
 * including tone mapping, bloom, vignetting, and chromatic aberration.
 * This is used as the postProcess attribute of Camera.
 *
 * @typedef PostProcessSettings 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface PostProcessSettings {
  /**
   * Tone mapping settings of the post processing settings. The default value is undefined.
   *
   * @type { ?ToneMappingSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  toneMapping?: ToneMappingSettings;

  /**
   * Bloom settings of the post processing settings. The default value is undefined.
   * 
   * @type { ?BloomSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  bloom?: BloomSettings;

  /**
   * Vignette settings of the post processing settings.
   *
   * @type { ?VignetteSettings }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  vignette?: VignetteSettings;

  /**
   * Color fringe settings of the post processing settings.
   *
   * @type { ?ColorFringeSettings }
   * @default undefined
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  colorFringe?: ColorFringeSettings;
}
