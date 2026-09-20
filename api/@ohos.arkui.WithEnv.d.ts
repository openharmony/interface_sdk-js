/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file Define the WithEnv component that allows setting environment properties for child components.
 * @kit ArkUI
 */

/**
 * Supports the following **WithEnv**-specific attributes.
 * 
 * The [universal events]{@link CommonMethod} are not supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class WithEnvAttribute {
  /**
   * Sets the system environment variable within the scope. The currently officially supported system environment 
   * variable keys are **WritableEnvKey.FONT_SCALE** and **WritableEnvKey.DIRECTION**.
   * 
   * > **NOTE**
   * >
   * > - `WithEnv.env(WritableEnvKey.FONT_SCALE, value)` provides a local font scale for components within the scope of 
   * > the trailing closure. `value` is of the number type, indicating the font scale multiplier. If the set `value` is 
   * > less than 0, it is treated as 0.
   * >
   * > - The effective font scale of components within the scope of the **WithEnv** trailing closure is jointly 
   * > determined by the value set through the **env** attribute with the key **WritableEnvKey.FONT_SCALE** and the 
   * > component's own font scale constraints. These constraints can be set through the component's `minFontScale` and 
   * > `maxFontScale` attributes, or through global configurations such as 
   * > [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md) in the app configuration. The final effective
   * > value is the value of **WritableEnvKey.FONT_SCALE** within the range of each constraint.
   *
   * @param { WritableSystemEnvKey<T> } key - System environment variable key. Currently, **WritableEnvKey.FONT_SCALE**
   *     and **WritableEnvKey.DIRECTION** are officially supported.
   * @param { T } value - System environment variable value. The type T of **value** corresponds to the type T in
   *     **WritableSystemEnvKey<T>**. When `key` is `WritableEnvKey.FONT_SCALE`, the type of `value` is number. When
   *     `key` is `WritableEnvKey.DIRECTION`, the type of `value` is Direction.
   * @returns { WithEnvAttribute } WithEnvAttribute object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute;
  /**
   * Sets a custom environment variable that can be read by descendant custom components within the scope.
   *
   * @param { CustomEnvKey<T> } key - Key of the custom environment variable.
   * @param { T } value - Value of the custom environment variable. The type T of value corresponds to the type T of
   *     CustomEnvKey<T>.
   * @returns { WithEnvAttribute } WithEnvAttribute object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute;
}

/**
 * Define the WithEnv component's type.
 *
 * @typedef { function }
 * @returns { WithEnvAttribute } WithEnvAttribute object
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare type WithEnvInterface = () => WithEnvAttribute;
/**
 * The **WithEnv** component is used to set a local environment variable scope for a child component tree. Developers
 * can use this component to provide custom environment variables for descendant components, or set system environment
 * variables.
 *
 * > **NOTE**
 * >
 * > - Custom environment variables can be set through [customEnv]{@link WithEnvAttribute#customEnv}.
 * > - System environment variable keys can be set through [env]{@link WithEnvAttribute#env}. They are stored in
 * > [WritableEnvKey]{@link WritableEnvKey}.
 * > - When **WithEnv** is nested, the nearest scope takes effect for environment variables with the same name.
 *
 * @type { WithEnvInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const WithEnv: WithEnvInterface;
/**
 * Define WithEnv Logic Component Instance.
 *
 * @type { WithEnvAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const WithEnvInstance: WithEnvAttribute;
