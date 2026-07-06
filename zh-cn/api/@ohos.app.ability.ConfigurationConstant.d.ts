/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

/**
 * ConfigurationConstant模块提供了[Configuration]{@link @ohos.app.ability.Configuration:Configuration}操作相关的系统预置枚举。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace ConfigurationConstant {
  /**
   * 表示深浅色模式的枚举，用于[Configuration.colorMode]{@link @ohos.app.ability.Configuration:Configuration}字段。开发者可以使用这些预置枚举设置或获取系统/
   * 应用的深浅色模式。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ColorMode {
    /**
     * 表示未设置颜色模式。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    COLOR_MODE_NOT_SET = -1,

    /**
     * 表示深色模式。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    COLOR_MODE_DARK = 0,

    /**
     * 表示浅色模式。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    COLOR_MODE_LIGHT = 1
  }

  /**
   * 表示屏幕方向的枚举，用于[Configuration.direction]{@link @ohos.app.ability.Configuration:Configuration}字段。开发者可以使用这些预置枚举设置或获取系统/应
   * 用的显示方向。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * 表示未设置方向。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DIRECTION_NOT_SET = -1,

    /**
     * 表示垂直方向。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DIRECTION_VERTICAL = 0,

    /**
     * 表示水平方向。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    DIRECTION_HORIZONTAL = 1
  }

  /**
   * 表示屏幕像素密度的枚举，用于[Configuration.screenDensity]{@link @ohos.app.ability.Configuration:Configuration}字段。开发者可以使用这些预置枚举设置或
   * 获取屏幕的像素密度。
   * 
   * 字体显示大小与屏幕像素密度呈正相关关系。通过监听屏幕像素密度变化，可以感知字体显示大小的调整。通常情况下，对于相同的物理尺寸，屏幕像素密度越高，字体显示效果越大。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ScreenDensity {
    /**
     * 表示未设置屏幕像素密度。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_NOT_SET = 0,

    /**
     * 表示屏幕像素密度为'SDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_SDPI = 120,

    /**
     * 表示屏幕像素密度为'MDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_MDPI = 160,

    /**
     * 表示屏幕像素密度为'LDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_LDPI = 240,

    /**
     * 表示屏幕像素密度为'XLDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_XLDPI = 320,

    /**
     * 表示屏幕像素密度为'XXLDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_XXLDPI = 480,

    /**
     * 表示屏幕像素密度为'XXXLDPI'。
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform [since 18]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SCREEN_DENSITY_XXXLDPI = 640
  }
}

export default ConfigurationConstant;