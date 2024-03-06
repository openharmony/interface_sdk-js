/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import type { UIContext } from './@ohos.arkui.UIContext';
import type * as _ViewData from './application/ViewData';
import type * as _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType } from './application/AutoFillType';
import type * as _AutoFillRequest from './application/AutoFillRequest';

/**
 * This module provides the function of auto fill manager.
 *
 * @namespace autoFillManager
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 11
 */
declare namespace autoFillManager {
  /**
   * Auto save callback.
   *
   * @interface AutoSaveCallback
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 11
   */
  export interface AutoSaveCallback {
    /**
     * Called when auto save request is successfully handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 11
     */
    onSuccess(): void;

    /**
     * Called when auto save request is failed to be handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 11
     */
    onFailure(): void;
  }

  /**
   * Trigger an auto save request.
   *
   * @param { UIContext } context - Indicates the ui context where the save operation will be performed.
   * @param { AutoSaveCallback } [callback] - Indicates the callback that used to receive the result.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @StageModelOnly
   * @since 11
   */
  export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void;

  /**
   * The interface of view data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type ViewData = _ViewData.default;

  /**
   * The interface of page node info.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type PageNodeInfo = _PageNodeInfo.default;

  /**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export { AutoFillType };

  /**
   * The interface of fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type FillRequest = _AutoFillRequest.FillRequest;

  /**
   * The interface of save request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type SaveRequest = _AutoFillRequest.SaveRequest;

  /**
   * The interface of update request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  export type UpdateRequest = _AutoFillRequest.UpdateRequest;

  /**
   * The interface of fill response.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type FillResponse = _AutoFillRequest.FillResponse;

  /**
   * The interface of fill request callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type FillRequestCallback = _AutoFillRequest.FillRequestCallback;

  /**
   * The interface of save request callback.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  export type SaveRequestCallback = _AutoFillRequest.SaveRequestCallback;
}

export default autoFillManager;
