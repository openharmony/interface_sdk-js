/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain an copy of the License at
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
 * @file 系统环境模块
 * @kit AbilityKit
 */

import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';

/**
 * systemConfiguration模块提供系统环境变化监听回调能力，包括系统深浅色模式、系统语言、系统字体大小缩放比例等变化的回调。
 * 
 * 例如，通过对系统深浅色模式变化的监听，应用可感知系统的深浅色模式变化，并动态调整自身应用的深浅色主题以适配系统环境。
 * 
 * 该模块与[EnvironmentCallback]{@link @ohos.app.ability.EnvironmentCallback:EnvironmentCallback}模块的区别在于：
 * 
 * - systemConfiguration模块：用于监听系统环境变量[Configuration]{@link @ohos.app.ability.Configuration:Configuration}的变化。
 * - [EnvironmentCallback]{@link @ohos.app.ability.EnvironmentCallback:EnvironmentCallback}模块：用于监听某个应用环境变量
 * [Configuration]{@link @ohos.app.ability.Configuration:Configuration}的变化。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare namespace systemConfiguration {
  /**
   * 在注册系统环境变化的监听后，当系统深浅色模式变化时会触发回调。
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - 变化后的系统深浅色模式。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnColorModeUpdatedFn = (colorMode: ConfigurationConstant.ColorMode) => void;

  /**
   * 在注册系统环境变化的监听后，当系统字体大小缩放比例变化时触发回调。
   *
   * @param { double } fontSizeScale - 变化后的系统字体大小缩放比例。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnFontSizeScaleUpdatedFn = (fontSizeScale: double) => void;

  /**
   * 在注册系统环境变化的监听后，当系统字体粗细缩放比例变化时触发回调。
   *
   * @param { double } fontWeightScale - 变化后的系统字体粗细缩放比例。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnFontWeightScaleUpdatedFn = (fontWeightScale: double) => void;

  /**
   * 在注册系统环境变化的监听后，当移动设备国家代码变化时触发回调。
   *
   * @param { string } mcc - 变化后的移动设备国家代码。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnMCCUpdatedFn = (mcc: string) => void;

  /**
   * 在注册系统环境变化的监听后，当移动设备网络代码变化时触发回调。
   *
   * @param { string } mnc - 变化后的移动设备网络代码。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnMNCUpdatedFn = (mnc: string) => void;

  /**
   * 在注册系统环境变化的监听后，当系统语言变化时触发回调。
   *
   * @param { string } language - 变化后的系统语言。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnLanguageUpdatedFn = (language: string) => void;

  /**
   * 在注册系统环境变化的监听后，当系统字体ID变化时触发回调。
   *
   * @param { string } fontId - 变化后的系统字体ID。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnFontIdUpdatedFn = (fontId: string) => void;

  /**
   * 在注册系统环境变化的监听后，当指针设备连接或者断开时触发回调。
   *
   * @param { boolean } hasPointerDevice - 指针设备是否已连接，如键盘、鼠标、触控板等。true表示设备已连接，false表示设备未连接。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnHasPointerDeviceUpdatedFn = (hasPointerDevice: boolean) => void;

  /**
   * 在注册系统环境变化的监听后，当系统区域设置变化时触发回调。
   *
   * @param { string } locale - 变化后的系统区域设置，该字段具体解释可以参考
   *     [Configuration]{@link @ohos.app.ability.Configuration:Configuration}。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  type OnLocaleUpdatedFn = (locale: string) => void;

  /**
   * UpdatedCallback是监听系统环境变化的回调函数，开发者可通过
   * [ApplicationContext.onSystemConfigurationUpdated]{@link ./application/ApplicationContext:ApplicationContext.onSystemConfigurationUpdated}
   * 方法注册自定义的UpdatedCallback，来监听系统环境变化。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface UpdatedCallback {  
    /**
     * 在注册系统环境变化的监听后，当系统深浅色模式变化时会触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onColorModeUpdated?: OnColorModeUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当系统字体大小缩放比例变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onFontSizeScaleUpdated?: OnFontSizeScaleUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当系统字体粗细缩放比例变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onFontWeightScaleUpdated?: OnFontWeightScaleUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当移动设备国家代码变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onMCCUpdated?: OnMCCUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当移动设备网络代码变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onMNCUpdated?: OnMNCUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当系统语言变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onLanguageUpdated?: OnLanguageUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当系统字体ID变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onFontIdUpdated?: OnFontIdUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当指针设备连接或者断开时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onHasPointerDeviceUpdated?: OnHasPointerDeviceUpdatedFn;

    /**
     * 在注册系统环境变化的监听后，当系统区域设置变化时触发回调。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    onLocaleUpdated?: OnLocaleUpdatedFn;
  }
}

export default systemConfiguration;