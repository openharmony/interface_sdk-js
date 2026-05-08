/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * 应用版本信息，可以通过
 * [getAppVersionInfo](docroot://reference/apis-ability-kit/js-apis-inner-app-context.md#contextgetappversioninfo7)获取当前应
 * 用的版本信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface AppVersionInfo {
  /**
   * 应用名称。
   *
   * @default appName
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly appName: string;

  /**
   * 应用版本编码。
   *
   * @default versionCode
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly versionCode: number;

  /**
   * 应用版本名称。
   *
   * @default versionName
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly versionName: string;
}