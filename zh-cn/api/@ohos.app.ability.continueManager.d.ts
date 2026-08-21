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
 * 跨端迁移是指当用户在一个设备上操作某个应用时，可以在另一个设备的同一个应用中快速切换，无缝衔接上一个设备的应用体验。
 * 
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @stagemodelonly
 * @since 18 dynamic
 * @since 23 static
 * 后续版本的新增接口，采用上角标单独标记接口的起始版本。
 */
declare namespace continueManager {
  /**
   * 在应用快速拉起时，注册回调函数以获取快速拉起结果。使用callback异步回调。适用于跨设备应用迁移场景，如游戏进度从手机迁移到平板、视频播放跨端同步、文档编辑协作等需要保持应用状态连续的场景。
   *
   * 说明：快速拉起功能支持在用户触发迁移、等待迁移数据返回的过程中，并行拉起应用，减小用户等待时间。在源端应用module.json5配置文件的continueType标签的取值中添加"_ContinueQuickStart"后缀，可以开启快速拉起功能。
   *
   * @param { 'prepareContinue' } type - 固定值：prepareContinue。
   * @param { Context } context - Ability（应用组件）的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。当快速拉起结果获取成功，err为undefined，ContinueResultInfo为获取到的快速启动结果。否则为
   *     错误对象。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function on(type: 'prepareContinue', context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * 在应用快速拉起时，注销回调函数，不再获取快速拉起结果。使用callback异步回调。适用于跨设备应用迁移完成或取消迁移后的回调清理场景，如应用迁移成功后清理监听、用户取消迁移操作时释放资源等。
   *
   * 说明：快速拉起功能支持在用户触发迁移、等待迁移数据返回的过程中，并行拉起应用，减小用户等待时间。在源端应用module.json5配置文件的continueType标签的取值中添加"_ContinueQuickStart"后缀，可以开启快速拉起功能。
   *
   * @param { 'prepareContinue' } type - 固定值：prepareContinue。若未填写，则注销所有已注册的回调；若已填写，则注销指定的回调函数。
   * @param { Context } context - Ability（应用组件）的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。当回调函数注销成功，err为undefined，ContinueResultInfo为获取到的回调函数注销结果。否则为错误对
   *     象。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   */
  function off(type: 'prepareContinue', context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * prepareContinue 事件，当在 continueType 中配置了"ContinueQuickStart"功能时，即可获取快速拉起结果。
   *
   * @param { Context } context - Ability（应用组件）的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。用于处理prepareContinue事件。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function onPrepareContinue(context: Context, callback: AsyncCallback<ContinueResultInfo>): void;

  /**
   * 注销prepareContinue事件的回调函数，不再获取快速拉起结果。
   *
   * @param { Context } context - Ability（应用组件）的Context。
   * @param { AsyncCallback<ContinueResultInfo> } callback - 回调函数。若未填写，则注销所有已注册的回调；若已填写，则注销指定的回调函数。
   * @throws { BusinessError } 16300501 - the system ability work abnormally.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 23 static
   */
  function offPrepareContinue(context: Context, callback?: AsyncCallback<ContinueResultInfo>): void;

  /**
   * 注册或注销回调函数返回的快速拉起结果，包含操作状态码和结果说明信息，用于应用获取跨端迁移快速拉起的执行结果。
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
     * 操作结果的说明，提供操作成功或失败的详细描述信息。
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
   * 快速拉起的结果状态码的枚举值。模型约束：此接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  enum ContinueStateCode {
    /**
     * 操作成功。表示快速拉起已成功完成，应用可以继续执行跨端迁移流程。
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
     * 操作失败。表示快速拉起过程中发生系统错误，应用需要提示用户迁移失败，并根据业务场景决定是否需要重试。
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
