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
 * The module defines the application version information. You can use 
 * [getAppVersionInfo](docroot://reference/apis-ability-kit/js-apis-inner-app-context.md#contextgetappversioninfo7) to 
 * obtain the version information of the current application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamiconly
 */
export interface AppVersionInfo {
  /**
   * Application name.
   *
   * @default appName
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly appName: string;

  /**
   * Application version number.
   *
   * @default versionCode
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly versionCode: number;

  /**
   * Application version name.
   *
   * @default versionName
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamiconly
   */
  readonly versionName: string;
}