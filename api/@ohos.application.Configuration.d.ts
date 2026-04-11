/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

import ConfigurationConstant from './@ohos.application.ConfigurationConstant';

/**
 * The module defines environment change information. Configuration is an interface definition and is used only for 
 * field declaration.
 * 
 * > **NOTE**
 * 
 * 
 * > This module is deprecated since API version 9. You are advised to use 
 * > > [@ohos.app.ability.Configuration]{@link @ohos.app.ability.Configuration:Configuration}
 * > >  instead.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Configuration/Configuration
 */
export interface Configuration {
  /**
   * 	Language of the application, for example, **zh**.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Configuration/Configuration#language
   */
  language?: string;

  /**
   * Color mode, which can be **COLOR_MODE_LIGHT** or **COLOR_MODE_DARK**. The default value is **COLOR_MODE_LIGHT**.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Configuration/Configuration#colorMode
   */
  colorMode?: ConfigurationConstant.ColorMode;
}
