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
 * @file Defines 3D post process related interfaces
 * @kit ArkGraphics3D
 */

/**
 * 色调映射类型枚举.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export enum ToneMappingType {
  /**
   * ACES色调映射类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES = 0,

  /**
   * ACES_2020色调映射类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  ACES_2020 = 1,

  /**
   * FILMIC色调映射类型.
   *
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  FILMIC = 2,
}

/**
 * 定义色调映射参数.
 *
 * @typedef ToneMappingSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface ToneMappingSettings {
  /**
   * 色调映射类型.
   *
   * @type { ?ToneMappingType }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  type?: ToneMappingType;

  /**
   * 色调映射曝光度.
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  exposure?: double;
}

/**
 * 定义泛光参数.
 * 
 * @typedef BloomSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18 dynamic
 * @since 23 static
 */
export interface BloomSettings {
  /**
   * 泛光硬阈值.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdHard?: double;

  /**
   * 泛光软阈值.
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  thresholdSoft?: double;

  /**
   * 缩放因子. 控制缩放和泛光扩散量.
   * 减少降缩放和上缩放步骤.
   * 取值范围0-1. 值为0.5时减半缩放步骤.
   * 
   * @type { ?double}
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scaleFactor?: double;

  /**
   * 扩散（泛光扩散量）. (1.0 full spread / default).
   * 
   * @type { ?double }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  scatter?: double;
}

/**
 * 定义暗角参数.
 *
 * @typedef VignetteSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface VignetteSettings {
  /**
   * 控制暗角在[0, 1]之间的圆度.
   * 较低的值将使暗角效果更接近方形.
   *
   * @type { ?double }
   * @default sqrt(0.5)
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  roundness?: double;

  /**
   * 控制暗边或亮边的强度.
   * 当intensity > 0时，边缘变暗且中心变亮，创建经典暗角效果.
   * 当intensity < 0时，中心变暗且边缘变亮，产生反向暗角效果.
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
 * 定义色晕参数.
 *
 * @typedef ColorFringeSettings
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 22 dynamic
 * @since 23 static
 */
export interface ColorFringeSettings {
  /**
   * 控制色晕强度.
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
 * 定义后处理设置.
 *
 * @typedef PostProcessSettings 
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12 dynamic
 * @since 23 static
 */
export interface PostProcessSettings {
  /**
   * 后处理设置的色调映射设置.
   *
   * @type { ?ToneMappingSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 12 dynamic
   * @since 23 static
   */
  toneMapping?: ToneMappingSettings;

  /**
   * 后处理设置的泛光设置
   * 
   * @type { ?BloomSettings }
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 18 dynamic
   * @since 23 static
   */
  bloom?: BloomSettings;

  /**
   * 后处理设置的暗角设置
   *
   * @type { ?VignetteSettings }
   * @default 暗角默认启用
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  vignette?: VignetteSettings;

  /**
   * 后处理设置的色晕设置
   *
   * @type { ?ColorFringeSettings }
   * @default 色晕默认启用
   * @syscap SystemCapability.ArkUi.Graphics3D
   * @since 22 dynamic
   * @since 23 static
   */
  colorFringe?: ColorFringeSettings;
}
