/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
  * @file
  * @kit AbilityKit
 */

import type { ApplicationInfo } from '../bundleManager/ApplicationInfo';
import type businessAbilityRouter from '../@ohos.app.businessAbilityRouter';

/**
 * 包含基本业务路由信息。
 *
 * @typedef BusinessAbilityInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface BusinessAbilityInfo {
  /**
   * 表示应用程序的bundleName。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 表示应用程序的moduleName。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly moduleName: string;

  /**
   * 业务路由ability名。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly name: string;

  /**
   * 模块标签的资源id。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly labelId: int;

  /**
   * 描述信息的资源id。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly descriptionId: int;

  /**
   * 描述ability信息的图标id。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly iconId: int;

  /**
   * 标识枚举业务类型。
   *
   * @type { businessAbilityRouter.BusinessType }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly businessType: businessAbilityRouter.BusinessType;

  /**
   * 应用程序的信息。
   *
   * @type { ApplicationInfo }
   * @readonly
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly applicationInfo: ApplicationInfo;
}
