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
 * @kit ArkGraphics3D
 */

/**
 * 色调映射类型枚举。
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum ToneMappingType {
  /**
   * ACES色调映射类型，基于Academy Color Encoding System标准，将高动态范围（HDR）图像映射到低动态范围（LDR），适用于追求电影级色彩还原的场景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES = 0,

  /**
   * ACES_2020色调映射类型，基于ACES 2020标准，提供更广的色域支持，适用于需要高色彩精度的HDR渲染场景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES_2020 = 1,

  /**
   * FILMIC色调映射类型，模拟胶片曝光响应曲线，高光过渡柔和自然，适用于追求写实风格和电影质感的一般3D场景。
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  FILMIC = 2,
}

/**
 * 色调映射设置。
 *
 * @typedef ToneMappingSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ToneMappingSettings {
  /**
   * 色调映射类型，默认值为undefined。
   *
   * @type { ?ToneMappingType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  type?: ToneMappingType;

  /**
   * 曝光度，取值大于0，默认值为undefined。
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  exposure?: double;
}

/**
 * 泛光设置。当[RenderingPipelineType](js-apis-inner-scene-types.md#renderingpipelinetype21)为FORWARD_LIGHTWEIGHT时，此功能不可用。
 * 
 * @typedef BloomSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface BloomSettings {
  /**
   * 硬阈值，取值范围是非负数，默认值为1.0。
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdHard?: double;

  /**
   * 软阈值，取值范围是非负数，默认值为2.0。
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdSoft?: double;

  /**
   * 缩放因子，取值范围大于0，默认值为1.0。
   * 
   * @type { ?double}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scaleFactor?: double;

  /**
   * 扩散量，取值范围大于0，默认值为1.0。
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scatter?: double;
}

/**
 * 边缘暗角设置。
 *
 * @typedef VignetteSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface VignetteSettings {
  /**
   * 暗角的圆度，取值范围为[0, 1]，取值为0时暗角形状趋近矩形，取值为1时暗角形状趋近圆形，默认值为sqrt(0.5)（约0.707）。
   *
   * @type { ?double }
   * @default sqrt(0.5)
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  roundness?: double;

  /**
   * 作用强度，取值范围为[0, 1]，取值为0时无暗角效果，取值为1时为最大暗角强度，默认值为0.4。
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
 * 色晕设置。当[RenderingPipelineType](js-apis-inner-scene-types.md#renderingpipelinetype21)为FORWARD_LIGHTWEIGHT时，此功能不可用。
 *
 * @typedef ColorFringeSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface ColorFringeSettings {
  /**
   * 作用强度，取值范围为[0, 1]，默认值为0.2。
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
 * 后处理设置，用于配置相机渲染后的图像处理效果，包括色调映射、泛光、边缘暗角和色晕等，作为[Camera](js-apis-inner-scene-nodes.md#camera)的postProcess属性来使用。
 *
 * @typedef PostProcessSettings 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface PostProcessSettings {
  /**
   * 色调映射，默认值为undefined。
   *
   * @type { ?ToneMappingSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  toneMapping?: ToneMappingSettings;

  /**
   * 泛光，默认值为undefined。
   * 
   * @type { ?BloomSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  bloom?: BloomSettings;

  /**
   * 边缘暗角，默认值为undefined。
   *
   * @type { ?VignetteSettings }
   * @default 暗角默认启用
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  vignette?: VignetteSettings;

  /**
   * 色晕，默认值为undefined。
   *
   * @type { ?ColorFringeSettings }
   * @default 色晕默认启用
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  colorFringe?: ColorFringeSettings;
}
