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

import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';

/**
 * 定义了应用运行时的环境变量，包含语言、深浅色、屏幕方向、字体等。开发者可以通过订阅环境变量，适配不同用户偏好，提升交互体验。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
export interface Configuration {
  /**
   * 表示应用当前语言，例如“zh"(中文)，“en”（英文）。
   * 
   * 支持开发者[设置应用语言](../../application-models/subscribe-system-environment-variable-changes.md#设置应用语言)。
   * 
   * 取值范围参考[获取系统支持的语言列表](../apis-localization-kit/js-apis-i18n.md#getsystemlanguages9)。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  language?: string;

  /**
   * 表示应用深浅色模式，默认为浅色。
   * 
   * 支持开发者[设置应用或组件深浅色](../../application-models/subscribe-system-environment-variable-changes.md#设置深浅色模式)。
   * 
   * 取值范围：
   * 
   * - COLOR_MODE_NOT_SET：未设置
   * - COLOR_MODE_LIGHT：浅色模式
   * - COLOR_MODE_DARK：深色模式
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  colorMode?: ConfigurationConstant.ColorMode;

  /**
   * 表示应用屏幕方向。
   * 
   * 取值范围：
   * 
   * - DIRECTION_NOT_SET：未设置
   * - DIRECTION_HORIZONTAL：水平方向
   * - DIRECTION_VERTICAL：垂直方向 
   * 
   * 该环境变量支持在[UIAbility](./js-apis-app-ability-uiAbility.md)组件和
   * [UIExtensionAbility](./js-apis-app-ability-uiExtensionAbility.md)组件中订阅，不支持在
   * [ApplicationContext](./js-apis-inner-application-applicationContext.md)和
   * [AbilityStage](./js-apis-app-ability-abilityStage.md)组件容器中订阅。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  direction?: ConfigurationConstant.Direction;

  /**
   * 表示屏幕显示密度。
   * 
   * 取值范围：
   * 
   * - SCREEN_DENSITY_NOT_SET：未设置
   * - SCREEN_DENSITY_SDPI：120
   * - SCREEN_DENSITY_MDPI：160
   * - SCREEN_DENSITY_LDPI：240
   * - SCREEN_DENSITY_XLDPI：320
   * - SCREEN_DENSITY_XXLDPI：480
   * - SCREEN_DENSITY_XXXLDPI：640 
   * 
   * 字体显示大小与屏幕像素密度呈正相关关系。通过监听屏幕像素密度变化，可以感知字体显示大小的调整。通常情况下，对于相同的物理尺寸，屏幕像素密度越高，字体显示效果越大。 
   * 
   * 该环境变量支持在[UIAbility](./js-apis-app-ability-uiAbility.md)组件和
   * [UIExtensionAbility](./js-apis-app-ability-uiExtensionAbility.md)组件中订阅，不支持在
   * [ApplicationContext](./js-apis-inner-application-applicationContext.md)和
   * [AbilityStage](./js-apis-app-ability-abilityStage.md)组件容器中订阅。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  screenDensity?: ConfigurationConstant.ScreenDensity;

  /**
   * 表示应用所在的物理屏幕ID。
   * 
   * 该环境变量支持在[UIAbility](./js-apis-app-ability-uiAbility.md)组件和
   * [UIExtensionAbility](./js-apis-app-ability-uiExtensionAbility.md)组件中订阅，不支持在
   * [ApplicationContext](./js-apis-inner-application-applicationContext.md)和
   * [AbilityStage](./js-apis-app-ability-abilityStage.md)组件容器中订阅。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  displayId?: long;

  /**
   * 表示指针设备是否已连接，如键鼠、触控板等。true表示设备已连接，false表示设备未连接。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  hasPointerDevice?: boolean;

  /**
   * 表示应用字体的唯一ID。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  fontId?: string;

  /**
   * 表示字体大小缩放比例，取值为非负数，默认值为1。
   * 
   * 支持开发者[设置应用字体大小](../../application-models/subscribe-system-environment-variable-changes.md#设置字体大小)。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform [since 18]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  fontSizeScale?: double;

  /**
   * 表示字体粗细缩放比例，取值为非负数，默认值为1。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  fontWeightScale?: double;

  /**
   * 表示移动设备国家代码。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  mcc?: string;

  /**
   * 表示移动设备网络代码。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  mnc?: string;

  /**
   * 表示区域设置。
   * 
   * 应用会根据当前的区域设置自动调整其行为，以符合用户的本地化需求。该属性可以通过设置系统语言、设置系统地区和设置应用偏好语言等方式设置。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  locale?: Intl.Locale;
}