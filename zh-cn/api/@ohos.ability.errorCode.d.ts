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
 * ErrorCode定义启动Ability时返回的错误码，包括无效的参数、权限拒绝等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 6 dynamic
 * @since 23 static
 */
export enum ErrorCode {
  /**
   * 权限拒绝。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6 dynamic
   * @since 23 static
   */
  PERMISSION_DENY = -3,

  /**
   * 找不到Ability。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6 dynamic
   * @since 23 static
   */
  ABILITY_NOT_FOUND = -2,

  /**
   * 无效的参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6 dynamic
   * @since 23 static
   */
  INVALID_PARAMETER = -1,

  /**
   * 启动成功，无错误。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 6 dynamic
   * @since 23 static
   */
  NO_ERROR = 0
}