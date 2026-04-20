/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * The module provides page data and callbacks when a callback is triggered for the AutoFillExtensionAbility.
 *
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import type { AutoFillType } from './AutoFillType';
import type CustomData from './CustomData';
import type AutoFillPopupConfig from './AutoFillPopupConfig';
import type ViewData from './ViewData';
import type { AutoFillTriggerType } from './AutoFillTriggerType';
/*** endif */
/*** if arkts static */
import { AutoFillType } from './AutoFillType';
import CustomData from './CustomData';
import AutoFillPopupConfig from './AutoFillPopupConfig';
import ViewData from './ViewData';
import { AutoFillTriggerType } from './AutoFillTriggerType';
/*** endif */

/**
 * Defines the information about an auto-fill request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillRequest {
  /**
   * Type of the element to be automatically filled in.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  type: AutoFillType;

  /**
   * Page data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;

  /**
   * Custom data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   * @since 23 static
   */
  customData: CustomData;

  /**
   * Whether a dialog box is displayed for the auto-fill request.
   * 
   * **true**: A dialog box is displayed
   * 
   * **false**: A modal window is displayed
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  isPopup: boolean;

  /**
   * Trigger type for the autofill service.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  triggerType?: AutoFillTriggerType;
}

/**
 * Defines the information about an auto-saving request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface SaveRequest {
  /**
   * Page data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * Defines the information about an auto-update request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export interface UpdateRequest {
  /**
   * Page data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * Defines the information about the response to an auto-fill request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillResponse {
  /**
   * Page data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  viewData: ViewData;
}

/**
 * Implements callbacks for an auto-fill request, which is used to automatically fill in or generate a password. The 
 * callbacks can be used to notify the client of the success or failure of the request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface FillRequestCallback {
  /**
   * Called when an auto-fill request is successfully processed.
   *
   * @param { FillResponse } response - Information about the response to the auto-fill request.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSuccess(response: FillResponse): void;

  /**
   * Called when an auto-fill request fails to be processed.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFailure(): void;

  /**
   * Called when an auto-fill request is canceled.
   *
   * @param { string } [fillContent] - Content returned to the input method framework when the auto-fill request is
   *     canceled.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1.The input parameter is not valid parameter;
   *     <br>2. Mandatory parameters are left unspecified. [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onCancel(fillContent?: string): void;

  /**
   * Sets the size and position of an auto-fill pop-up.
   *
   * @param { AutoFillPopupConfig } autoFillPopupConfig - Size and position of the auto-fill pop-up.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  setAutoFillPopupConfig(autoFillPopupConfig: AutoFillPopupConfig): void;
}

/**
 * Implements callbacks for an automatic or a manual saving request.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
export interface SaveRequestCallback {
  /**
   * Called when a saving request is successfully processed.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onSuccess(): void;

  /**
   * Called when a saving request fails to be processed.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  onFailure(): void;
}