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
 * 定义环境变化信息。Configuration是接口定义，仅做字段声明。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Configuration/Configuration
 */
export interface Configuration {
  /**
   * 表示应用程序的当前语言。例如：zh。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Configuration/Configuration#language
   */
  language?: string;

  /**
   * 表示深浅色模式，取值范围：浅色模式（COLOR_MODE_LIGHT），深色模式（COLOR_MODE_DARK）。默认为浅色。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Configuration/Configuration#colorMode
   */
  colorMode?: ConfigurationConstant.ColorMode;
}