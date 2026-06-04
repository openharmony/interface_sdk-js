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
 * 自定义配色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type CustomTheme = import('../api/@ohos.arkui.theme').CustomTheme;

/**
 * 设置WithTheme作用域内组件缺省样式及深浅色模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface WithThemeOptions {

  /**
   * 用于自定义WithTheme作用域内组件缺省配色。 
   * 
   * 默认值：undefined，缺省样式跟随系统[token默认样式](docroot://ui/theme_skinning.md#系统缺省token色值)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  theme?: CustomTheme;

  /**
   * 用于指定WithTheme作用域内组件配色深浅色模式。
   * 
   * 默认值：ThemeColorMode.SYSTEM
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
 * 不支持[通用属性]{@link common}。
 * 
 * 不支持[通用事件]{@link common}。
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