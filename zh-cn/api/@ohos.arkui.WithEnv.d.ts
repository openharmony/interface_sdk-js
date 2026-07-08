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
 * @file 定义WithEnv组件，允许为子组件设置环境属性。
 * @kit ArkUI
 */

/**
 * 定义WithEnv组件的属性功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class WithEnvAttribute {

  /**
   * 设置作用域内的系统环境变量。当前正式支持的系统环境变量键为WritableEnvKey.FONT_SCALE、WritableEnvKey.DIRECTION。
   *
   * @param { WritableSystemEnvKey<T> } key - 系统环境变量键。当前正式支持WritableEnvKey.FONT_SCALE和WritableEnvKey.DIRECTION。
   * @param { T } value - 系统环境变量值。value的类型T对应WritableSystemEnvKey<T>中的类型T。当key为WritableEnvKey.FONT_SCALE时，value类型为number；当key为WritableEnvKey.DIRECTION时，value类型为Direction。
   * @returns { WithEnvAttribute } WithEnvAttribute对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  env<T>(key: WritableSystemEnvKey<T>, value: T): WithEnvAttribute;
  /**
   * 设置作用域内可被后代自定义组件读取的自定义环境变量。
   *
   * @param { CustomEnvKey<T> } key - 自定义环境变量的键。
   * @param { T } value - 自定义环境变量的值。value的类型T对应CustomEnvKey<T>的类型T。
   * @returns { WithEnvAttribute } WithEnvAttribute对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  customEnv<T>(key: CustomEnvKey<T>,  value: T): WithEnvAttribute;
}


/**
 * 定义WithEnv组件的类型。
 *
 * @typedef { function }
 * @returns { WithEnvAttribute } WithEnvAttribute对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare type WithEnvInterface = () => WithEnvAttribute;
/**
 * WithEnv组件用于为子组件树设置局部环境变量作用域。开发者可以通过该组件为后代组件提供自定义环境变量，或设置系统环境变量。
 *
 * > **说明：**
 *
 * > - 此接口仅可在Stage模型下使用。
 * >
 * > - 可通过[customEnv]{@link WithEnvAttribute#customEnv}设置自定义环境变量。
 * >
 * > - 支持通过[env]{@link WithEnvAttribute#env}设置的系统环境变量键，系统环境变量键存于[WritableEnvKey]{@link WritableEnvKey}。
 * >
 * > - WithEnv嵌套时，同名环境变量按最近作用域生效。
 *
 * ###### 子组件
 *
 * 支持单个子组件。
 *
 * @type { WithEnvInterface }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const WithEnv: WithEnvInterface;
/**
 * 定义WithEnv逻辑组件实例。
 *
 * @type { WithEnvAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @uicomponent
 * @since 26.0.0 dynamic
 */
export declare const WithEnvInstance: WithEnvAttribute;
