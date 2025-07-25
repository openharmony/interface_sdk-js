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
 * configuration item.
 *
 * @typedef Configuration
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
/**
 * configuration item.
 *
 * @typedef Configuration
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform
 * @since 10
 */
/**
 * configuration item.
 *
 * @typedef Configuration
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
export interface Configuration {
  /**
   * Indicates the current language of the application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates the current language of the application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the current language of the application.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  language?: string;

  /**
   * Indicates the current colorMode of the application.
   *
   * @type { ?ConfigurationConstant.ColorMode }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates the current colorMode of the application.
   *
   * @type { ?ConfigurationConstant.ColorMode }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the current colorMode of the application.
   *
   * @type { ?ConfigurationConstant.ColorMode }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  colorMode?: ConfigurationConstant.ColorMode;

  /**
   * Indicates the screen direction of the current device.
   *
   * @type { ?ConfigurationConstant.Direction }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates the screen direction of the current device.
   *
   * @type { ?ConfigurationConstant.Direction }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the screen direction of the current device.
   *
   * @type { ?ConfigurationConstant.Direction }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  direction?: ConfigurationConstant.Direction;

  /**
   * Indicates the screen density of the current device.
   *
   * @type { ?ConfigurationConstant.ScreenDensity }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates the screen density of the current device.
   *
   * @type { ?ConfigurationConstant.ScreenDensity }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 11
   */
  /**
   * Indicates the screen density of the current device.
   *
   * @type { ?ConfigurationConstant.ScreenDensity }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  screenDensity?: ConfigurationConstant.ScreenDensity;

  /**
   * Indicates the displayId of the current device.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates the displayId of the current device.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  displayId?: number;

  /**
   * Indicates whether a pointer type device has connected.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  /**
   * Indicates whether a pointer type device has connected.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  hasPointerDevice?: boolean;

  /**
   * Indicates the font id.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 14
   */
  fontId?: string;

  /**
   * Indicates the font size scale.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 12
   */
  /**
   * Indicates the font size scale.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontSizeScale?: number;

  /**
   * Indicates the font weight scale.
   *
   * @type { ?number }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  fontWeightScale?: number;

  /**
   * Indicates the mobile country code.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  mcc?: string;

  /**
   * Indicates the mobile network code.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  mnc?: string;

  /**
   * Current locale.
   *
   * @type { ?Intl.Locale }
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice
   * @since 20
   */
    locale?: Intl.Locale;
}
