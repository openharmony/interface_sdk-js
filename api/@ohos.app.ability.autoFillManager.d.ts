/*
 * Copyright (c) 2023-2026 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import type { UIContext } from './@ohos.arkui.UIContext';
import type * as _ViewData from './application/ViewData';
import type * as _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType } from './application/AutoFillType';
import type * as _AutoFillRequest from './application/AutoFillRequest';
import type * as _CustomData from './application/CustomData';
import type * as _AutoFillRect from './application/AutoFillRect';
import type * as _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */
/*** if arkts static */
import { UIContext } from './@ohos.arkui.UIContext';
import _ViewData from './application/ViewData';
import _PageNodeInfo from './application/PageNodeInfo';
import { AutoFillType as _AutoFillType } from './application/AutoFillType';
import { FillRequest as _FillRequest, SaveRequest as _SaveRequest} from './application/AutoFillRequest';
import { UpdateRequest as _UpdateRequest, FillResponse as _FillResponse} from './application/AutoFillRequest';
import { FillRequestCallback as _FillRequestCallback } from './application/AutoFillRequest';
import { SaveRequestCallback as _SaveRequestCallback } from './application/AutoFillRequest';
import _CustomData from './application/CustomData';
import _AutoFillRect from './application/AutoFillRect';
import _AutoFillPopupConfig from './application/AutoFillPopupConfig';
import { PopupSize as _PopupSize } from './application/AutoFillPopupConfig';
import { PopupPlacement as _PopupPlacement } from './application/AutoFillPopupConfig';
import { AutoFillTriggerType as _AutoFillTriggerType } from './application/AutoFillTriggerType';
/*** endif */

/**
 * The autoFillManager module provides APIs for saving accounts and passwords.
 *
 * Unlike the system's auto-save feature that triggers during page transitions, this feature requires manual activation
 * by the user. For example, the user must input their account and password on a website and click the **Save** button
 * to initiate the saving process.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @stagemodelonly
 * @atomicservice [since 12]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace autoFillManager {
  /**
   * Called when auto-save is successful.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnSuccessFn = () => void;

  /**
   * Called when auto-save fails.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  type OnFailureFn = () => void;

  /**
   * Implements callbacks triggered when auto-save is complete.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AutoSaveCallback {
    /**
     * Called when auto save request is successfully handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    onSuccess(): void;

    /**
     * Called when auto-save is successful.
     *
     * This API can be used in atomic services since API version 12.
     *
     * **NOTE**
     *
     * Starting from API version 23, the original **onSuccess()** API is changed to a property, but its usage remains
     * unchanged.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onSuccess: OnSuccessFn;

    /**
     * Called when auto save request is failed to be handled.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    onFailure(): void;

    /**
     * Called when auto-save fails.
     *
     * This API can be used in atomic services since API version 12.
     *
     * **NOTE**
     *
     * Starting from API version 23, the original **onFailure()** API is changed to a property, but its usage remains
     * unchanged.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @stagemodelonly
     * @atomicservice
     * @since 23 static
     */
    onFailure: OnFailureFn;
}

  /**
   * Requests to automatically save the widget data. This API uses an asynchronous callback to return the result.
   * If the current widget does not support widget switching, you can call this API to save historical widget input
   * data. The callback is triggered when the auto-save request is complete.
   *
   * @param { UIContext } context - UI context in which the auto-save operation will be performed.
   * @param { AutoSaveCallback } [callback] - Implements callbacks triggered when auto-save is complete.
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Get instance id failed;
   *     <br>2. Parse instance id failed; 3. The second parameter is not of type callback.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  export function requestAutoSave(context: UIContext, callback?: AutoSaveCallback): void;

  /**
   * Defines the view data used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type ViewData = _ViewData.default;

  /**
   * Defines the view data used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type ViewData = _ViewData;

  /**
   * Defines the page node information used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type PageNodeInfo = _PageNodeInfo.default;

  /**
   * Defines the page node information used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PageNodeInfo = _PageNodeInfo;

/**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export { AutoFillType };

  /**
   * The enum of auto fill type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillType = _AutoFillType;

  /**
   * Defines the information about an auto-fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type FillRequest = _AutoFillRequest.FillRequest;

  /**
   * Defines the information about an auto-fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequest = _FillRequest;

  /**
   * Defines the information about an auto-save request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type SaveRequest = _AutoFillRequest.SaveRequest;

  /**
   * Defines the information about an auto-save request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type SaveRequest = _SaveRequest;

  /**
   * Defines the information about an auto-update request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type UpdateRequest = _AutoFillRequest.UpdateRequest;

  /**
   * Defines the information about an auto-update request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type UpdateRequest = _UpdateRequest;

  /**
   * Defines the information about the response to an auto-fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type FillResponse = _AutoFillRequest.FillResponse;

  /**
   * Defines the information about the response to an auto-fill request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillResponse = _FillResponse;

  /**
   * Defines the callback for an auto-fill request, which is used to automatically fill in or generate a password. The
   * callback can be used to notify the client of the success or failure of the request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type FillRequestCallback = _AutoFillRequest.FillRequestCallback;

  /**
   * Defines the callback for an auto-fill request, which is used to automatically fill in or generate a password. The
   * callback can be used to notify the client of the success or failure of the request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type FillRequestCallback = _FillRequestCallback;

  /**
   * Defines the callback for an automatic or a manual saving request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  export type SaveRequestCallback = _AutoFillRequest.SaveRequestCallback;

  /**
   * Defines the callback for an automatic or a manual saving request.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type SaveRequestCallback = _SaveRequestCallback;

  /**
   * Defines the custom data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  export type CustomData = _CustomData.default;

  /**
   * Defines the custom data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type CustomData = _CustomData;

  /**
   * Defines the rectangle used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillRect = _AutoFillRect.default;

  /**
   * Defines the rectangle used for auto-fill.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillRect = _AutoFillRect;

  /**
   * Defines the size and position information of an auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig.default;

  /**
   * Defines the size and position information of an auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillPopupConfig = _AutoFillPopupConfig;

  /**
   * Defines the width and height of an auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export type PopupSize = _AutoFillPopupConfig.PopupSize;

  /**
   * Defines the width and height of an auto-fill pop-up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupSize = _PopupSize;

  /**
   * The popup placement of auto fill popup config.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  export { PopupPlacement };

  /**
   * The popup placement of auto fill popup config.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type PopupPlacement = _PopupPlacement;

  /**
  * The enum of auto fill trigget type.
  *
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @systemapi
  * @stagemodelonly
  * @since 23 dynamic
  */
  export { AutoFillTriggerType };

  /**
   * The enum of auto fill trigget type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  export type AutoFillTriggerType = _AutoFillTriggerType;
}

export default autoFillManager;