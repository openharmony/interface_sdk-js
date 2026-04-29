/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
/*** if arkts dynamic */
import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import type AutoFillExtensionContext from './application/AutoFillExtensionContext';
import type { FillRequest, SaveRequest, UpdateRequest, FillRequestCallback, SaveRequestCallback } from './application/AutoFillRequest';
/*** endif */
/*** if arkts static */
import UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import AutoFillExtensionContext from './application/AutoFillExtensionContext';
import { FillRequest, SaveRequest, UpdateRequest, FillRequestCallback, SaveRequestCallback } from './application/AutoFillRequest';
/*** endif */

/**
 * The AutoFillExtensionAbility module provides APIs for automatically filling in and saving accounts and passwords. It
 * inherits from [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare class AutoFillExtensionAbility extends ExtensionAbility {
  /**
   * Context of the AutoFillExtensionAbility. This context inherits from **ExtensionContext**.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  context: AutoFillExtensionContext;

  /**
   * Called when an AutoFillExtensionAbility is created.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onCreate(): void;

  /**
   * Called when an auto-fill request is initiated or a password is generated.
   *
   * @param { UIExtensionContentSession } session - UI content information related to the AutoFillExtensionAbility.
   * @param { FillRequest } request - Data to be automatically filled in.
   * @param { FillRequestCallback } callback - Callback used for the auto-fill request.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFillRequest(session: UIExtensionContentSession, request: FillRequest, callback: FillRequestCallback): void;

  /**
   * Called when automatic or manual saving is initiated.
   *
   * @param { UIExtensionContentSession } session - UI content information related to the AutoFillExtensionAbility.
   * @param { SaveRequest } request - Data to be saved.
   * @param { SaveRequestCallback } callback - Callback used for the saving request.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSaveRequest(session: UIExtensionContentSession, request: SaveRequest, callback: SaveRequestCallback): void;

  /**
   * Called when an update request is received.
   *
   * @param { UpdateRequest } request - Update request.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  onUpdateRequest(request: UpdateRequest): void;

  /**
   * Called when a UIExtensionContentSession instance is destroyed for this AutoFillExtensionAbility.
   *
   * @param { UIExtensionContentSession } session - UI content information related to the AutoFillExtensionAbility.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSessionDestroy(session: UIExtensionContentSession): void;

  /**
   * Called when this AutoFillExtensionAbility is switched from the background to the foreground.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onForeground(): void;

  /**
   * Called when this AutoFillExtensionAbility is switched from the foreground to the background.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onBackground(): void;

  /**
   * Called to clear resources when this AutoFillExtensionAbility is destroyed. This API either returns the result
   * directly or uses a promise to return the result.
   *
   * @returns { void | Promise<void> } Returns no value or returns a Promise.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  onDestroy(): void | Promise<void>;

  /**
   * Called to clear resources when this AutoFillExtensionAbility is destroyed.
   *
   * @returns { Promise<void> | undefined } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onDestroy(): Promise<void> | undefined;
}

export default AutoFillExtensionAbility;