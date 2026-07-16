/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import Context from './application/Context';

/**
 * continueManager提供了应用跨端迁移的管理能力，如获取应用跨端迁移过程中快速拉起目标应用的结果。
 * 
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 */
declare namespace continueManager {
  /**
   * 在应用快速拉起时，注册回调函数以获取快速拉起结果。使用callback异步回调。
   *
   * @param { 'prepareContinue' } type - 固定值：prepareContinue。
   * @param { Context } context - Ability的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。当快速拉起结果获取成功，err为undefined，ContinueResultInfo为获取到的快速启动结果。否则为
   *     错误对象。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'prepareContinue', context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * 在应用快速拉起时，注销回调函数，不再获取快速拉起结果。使用callback异步回调。

   *
   * @param { 'prepareContinue' } type - 固定值：prepareContinue。
   * @param { Context } context - Ability的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。当回调函数注销成功，err为undefined，ContinueResultInfo为获回调函数注销结果。否则为错误对
   *     象。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * prepareContinue 事件，当在 continueType 中配置了“ContinueQuickStart”功能时，即可获取
   *
   * @param { Context } context - the ability context.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Used to handle ('prepareContinue') command.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function onPrepareContinue(context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * Unregister prepareContinue event.
   *
   * @param { Context } context - the ability context.
   * @param { AsyncCallback<ContinueResultInfo> } callback - Used to handle ('prepareContinue') command.
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function offPrepareContinue(context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * 注册或注销回调函数返回的快速拉起的结果。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  interface ContinueResultInfo {
    /**
     * 操作结果状态码。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    resultState: ContinueStateCode;

    /**
     * 操作结果的说明。
     * 
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    resultInfo?: string;
    }

  /**
   * 快速拉起的结果状态码的枚举值。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum ContinueStateCode {
    /**
     * 操作成功。
     * 
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * 操作失败。
     * 
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    SYSTEM_ERROR = 1
    }
}
export default continueManager;