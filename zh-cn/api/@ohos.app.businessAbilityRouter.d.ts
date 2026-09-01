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

import type { AsyncCallback } from './@ohos.base';
/*** if arkts dynamic */
import type * as _BusinessAbilityInfo from './application/BusinessAbilityInfo';
/*** endif */
/*** if arkts static */
import { BusinessAbilityInfo as _BusinessAbilityInfo } from './application/BusinessAbilityInfo';
/*** endif */

/**
 * 本模块用于查询当前设备上安装的应用程序的路由Ability信息。系统通过业务路由提供标准化的业务模板和管理能力，允许开发者依据特定业务类别注册标准业务，构建一个庞大且丰富的业务超市。系统应用可以便捷地从业务路由中选取合适的业务进行使
 * 用。同时业务路由还提供统一的跳转管控规则，确保应用与业务之间合理跳转，防止非法前后台跳转，杜绝三方应用通过跳转变相分发，从而保障系统的安全性与良好的用户体验。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace businessAbilityRouter {
  /**
   * 此枚举值用于标识过滤条件类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum BusinessType {
    /**
     * 标识具有共享类型的Ability信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SHARE = 0,

    /**
     * 标识未指定类型的Ability信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 255
  }

  /**
   * 此过滤值用于过滤查询的Ability类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export interface BusinessAbilityFilter {
    /**
     * 标识Ability信息的类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    businessType: BusinessType;

    /**
     * 标识支持mime类型的Ability信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    mimeType?: string;

    /**
     * 标识Ability信息支持的uri。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    uri?: string;
  }

  /**
   * 通过给定的过滤条件查询Ability信息。使用callback异步回调，成功时返回查询到的路由Ability信息，失败时返回错误信息。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - 用于按业务类型过滤的对象。
   * @param { AsyncCallback<Array<BusinessAbilityInfo>> } callback - 回调函数。返回查询到的Ability信息，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryBusinessAbilityInfo(
    filter: BusinessAbilityFilter,
    callback: AsyncCallback<Array<BusinessAbilityInfo>>
  ): void;

  /**
   * 通过给定的过滤条件查询Ability信息。使用Promise异步回调，成功时返回查询到的路由Ability信息，失败时返回错误信息。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - 包含要查询的Ability信息的筛选类型。
   * @returns { Promise<Array<BusinessAbilityInfo>> } Promise对象，返回符合过滤条件的Ability信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function queryBusinessAbilityInfo(filter: BusinessAbilityFilter): Promise<Array<BusinessAbilityInfo>>;

  /**
   * 业务路由信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  export type BusinessAbilityInfo = _BusinessAbilityInfo.BusinessAbilityInfo;

  /**
   * 业务路由信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type BusinessAbilityInfo = _BusinessAbilityInfo;
}

export default businessAbilityRouter;
