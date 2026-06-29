/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file Defines WithTheme component.
 * @kit ArkUI
 */

/**
 * Defines a custom theme.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type CustomTheme = import('../api/@ohos.arkui.theme').CustomTheme;

/**
 * Defines the default theme and color mode for components within the **WithTheme** scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WithThemeOptions {

  /**
   * Default theme for components in the **WithTheme** scope.
   *
   * Default value: **undefined**. The default style follows the
   * [default token style](docroot://ui/theme_skinning.md#system-default-token-color-values).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: CustomTheme;

  /**
   * Color mode for components in the **WithTheme** scope.
   *
   * Default value: **ThemeColorMode.SYSTEM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  colorMode?: ThemeColorMode;
}

/**
 * Define the function of WithThemeInterface.
 *
 * @param { WithThemeOptions } options
 * @returns { WithThemeAttribute } withThemeAttribute object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type WithThemeInterface = (options: WithThemeOptions) => WithThemeAttribute;

/**
 * The [universal attributes]{@link common} are not supported.
 *
 * The [universal events]{@link common} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class WithThemeAttribute {}

/**
 * Defines WithTheme Logic Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const WithTheme: WithThemeInterface;

/**
 * Defines WithTheme Logic Component Instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare const WithThemeInstance: WithThemeAttribute;